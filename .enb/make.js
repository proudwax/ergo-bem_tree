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
        'desktop.blocks',
        'pages.blocks'
    ];

var PROJECT = 'index';
var MODS = JSON.parse(fs.readFileSync('modifiers.json', 'utf8'));
var FOLDERS = Object.keys(MODS);

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';

    FOLDERS.forEach(function(folder){
        config.nodes('static.page/' + folder, function (nodeConfig){
            nodeConfig.addTechs([
                [enbBemTechs.levels, { levels: levels }]
            ]);


            MODS[folder].forEach(function(page){
                nodeConfig.addTechs([
                    [techs.fileProvider, { target: folder + page + '.bemdecl.js' }],

                    // client bemhtml
                    [enbBemTechs.depsByTechToBemdecl,{
                        target: folder + page + '.bemhtml.bemdecl.js',
                        sourceTech: 'js',
                        destTech: 'bemhtml'
                    }],
                    [enbBemTechs.deps,{
                        bemdeclFile: folder + page + '.bemhtml.bemdecl.js',
                        target: folder + page + '.bemhtml.deps.js'
                    }],
                    [enbBemTechs.files,{
                        depsFile: folder + page + '.bemhtml.deps.js',
                        filesTarget: folder + page + '.bemhtml.files',
                        dirsTarget: folder + page + '.bemhtml.dirs'
                    }],

                    // bemtree
                    [techs.bemtree,{
                        sourceSuffixes: ['bemtree', 'bemtree.js'],
                        target: folder + page + '.bemhtml.bemtree.js',
                        filesTarget: folder + page + '.bemhtml.files'
                    }],

                    // bemhtml
                    [techs.bemhtml,{
                        sourceSuffixes: ['bemhtml', 'bemhtml.js'],
                        target: folder + page + '.browser.bemhtml.js',
                        filesTarget: folder + page + '.bemhtml.files'
                    }],

                    // html
                    [techs.bemtreeToHtml,{
                        bemhtmlTarget: folder + page + '.browser.bemhtml.js',
                        bemtreeTarget: folder + page + '.bemhtml.bemtree.js',
                        destTarget: folder + page + '.html'
                    }]
                ]);

                nodeConfig.addTargets([folder + page + '.html']);
            });

            nodeConfig.addTechs([
                // css
                [techs.stylus, {
                    filesTarget: MODS[folder] + '_' + MODS[folder][0] + '.bemhtml.files',
                    target: PROJECT + '.css',
                    sourcemap: !isProd,
                    autoprefixer: {
                        browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
                    }
                }],

                // js
                [techs.browserJs, {
                    includeYM: true,
                }],
                [techs.fileMerge, {
                    filesTarget: MODS[folder] + '_' + MODS[folder][0] + '.bemhtml.files',
                    sources: [MODS[folder] + '_' + MODS[folder][0] + '.browser.js', MODS[folder] + '_' + MODS[folder][0] + '.browser.bemhtml.js']
                    target: PROJECT + '.js'
                }],

                // borschik
                [techs.borschik, { source: PROJECT + '.js', target: PROJECT + '.min.js', minify: isProd }],
                [techs.borschik, { source: PROJECT + '.css', target: PROJECT + '.min.css', tech: 'cleancss', minify: isProd }]
            ]);

            nodeConfig.addTargets([PROJECT + '.min.css', PROJECT + '.min.js']);
        });
    });

};