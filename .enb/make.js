var fs = require('fs');
var path = require('path');

var techs = {
        // essential
        fileProvider: require('enb/techs/file-provider'),
        fileMerge: require('enb/techs/file-merge'),

        // optimization
        borschik: require('enb-borschik/techs/borschik'),

        // css
        stylus: require('enb-stylus/techs/stylus'),

        // js
        browserJs: require('enb-js/techs/browser-js'),

        // bemtree
        bemtree: require('enb-bemxjst/techs/bemtree'),

        // bemhtml
        bemhtml: require('enb-bemxjst/techs/bemhtml'),
        bemtreeToHtml: require('./techs/bemtree-to-html')
    },
    enbBemTechs = require('enb-bem-techs'),
    levels = [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/desktop.blocks', check: false },
        { path: 'libs/bem-components/common.blocks', check: false },
        { path: 'libs/bem-components/desktop.blocks', check: false },
        { path: 'libs/bem-components/design/common.blocks', check: false },
        { path: 'libs/bem-components/design/desktop.blocks', check: false },
        'common.blocks',
        'page.blocks'
    ];

var PROJECT = 'index';
var MODS = JSON.parse(fs.readFileSync('modifiers.json', 'utf8'));
var FOLDERS = Object.keys(MODS);

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';


    FOLDERS.forEach(function(folder){


        config.nodes('static.page/' + folder , function (nodeConfig) {
            nodeConfig.addTechs([
                [enbBemTechs.levels, { levels: levels }]
            ]);
            
            MODS[FOLDERS].forEach(function(page) {
                nodeConfig.addTechs([
                    [techs.fileProvider, { target: folder + '_' + page + '.bemdecl.js' }],
                    [enbBemTechs.deps, {
                        bemdeclFile: folder + '_' + page + '.bemdecl.js',
                        target: folder + '_' + page + '.deps.tmp.js'
                    }],
                    [enbBemTechs.files, {
                        depsFile: folder + '_' + page + '.deps.tmp.js',
                        filesTarget: folder + '_' + page + '.tmp.files',
                        dirsTarget: folder + '_' + page + '.tmp.dirs'
                    }],

                    // bemtree
                    [techs.bemtree, {
                        sourceSuffixes: ['bemtree', 'bemtree.js'],
                        target: folder + '_' + page + '.bemtree.tmp.js',
                        filesTarget: folder + '_' + page + '.tmp.files'
                    }],

                    // bemhtml
                    [techs.bemhtml, {
                        sourceSuffixes: ['bemhtml', 'bemhtml.js'],
                        target: folder + '_' + page + '.bemhtml.tmp.js',
                        filesTarget: folder + '_' + page + '.tmp.files'
                    }],

                    // html
                    [techs.bemtreeToHtml, {
                        bemhtmlTarget: folder + '_' + page + '.bemhtml.tmp.js',
                        bemtreeTarget: folder + '_' + page + '.bemtree.tmp.js',
                        destTarget: folder + '_' + page + '.html'
                    }]
                ]);

                nodeConfig.addTargets([folder + '_' + page + '.html']);
            });

            nodeConfig.addTechs([
                // css
                [techs.stylus, {
                    filesTarget: folder + '_' + MODS[folder][0] + '.tmp.files',
                    target: PROJECT + '.css',
                    sourcemap: !isProd,
                    autoprefixer: {
                        browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
                    }
                }],

                // js
                [techs.browserJs, {
                    filesTarget: folder + '_' + MODS[folder][0] + '.tmp.files',
                    target: PROJECT + '.js',
                    includeYM: true
                }],

                // borschik
                [techs.borschik, { source: PROJECT + '.js', target: PROJECT + '.min.js', minify: false }],
                [techs.borschik, { source: PROJECT + '.css', target: PROJECT + '.min.css', tech: 'cleancss', minify: false }]
            ]);

            nodeConfig.addTargets([PROJECT + '.min.css', PROJECT + '.min.js']);
        });



    });

};