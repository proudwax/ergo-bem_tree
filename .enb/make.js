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
        bemhtml: require('enb-bemxjst/techs/bemhtml')
    },
    enbBemTechs = require('enb-bem-techs'),
    levels = [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/desktop.blocks', check: false },
        { path: 'libs/bem-components/common.blocks', check: false },
        { path: 'libs/bem-components/desktop.blocks', check: false },
        { path: 'libs/bem-components/design/common.blocks', check: false },
        { path: 'libs/bem-components/design/desktop.blocks', check: false },
		{ path: 'libs/bem-history/common.blocks', check: false },
        'common.blocks',
        'desktop.blocks',
        'page.blocks'
    ];

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';

    config.nodes('*.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: levels }],
            [techs.fileProvider, { target: '?.bemdecl.js' }],
            [enbBemTechs.deps],
            [enbBemTechs.files],

            // css
            [techs.stylus, {
                target: '?.css',
                sourcemap: !isProd,
                autoprefixer: {
                    browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
                }
            }],

            // bemtree
            [techs.bemtree, { sourceSuffixes: ['bemtree', 'bemtree.js'] }],

            // bemhtml
            [techs.bemhtml, { sourceSuffixes: ['bemhtml', 'bemhtml.js'] }],

			/* My code */
			// client bemtree
            [enbBemTechs.depsByTechToBemdecl, {
                target: '?.bemtree.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bemtree'
            }],
            [enbBemTechs.deps, {
                target: '?.bemtree.deps.js',
                bemdeclFile: '?.bemtree.bemdecl.js'
            }],
            [enbBemTechs.files, {
                depsFile: '?.bemtree.deps.js',
                filesTarget: '?.bemtree.files',
                dirsTarget: '?.bemtree.dirs'
            }],
            [techs.bemtree, {
                target: '?.browser.bemtree.js',
                filesTarget: '?.bemtree.files',
                sourceSuffixes: ['bemtree', 'bemtree.js']
            }],
			/* /My code */
			
            // client bemhtml
            [enbBemTechs.depsByTechToBemdecl, {
                target: '?.bemhtml.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bemhtml'
            }],
            [enbBemTechs.deps, {
                target: '?.bemhtml.deps.js',
                bemdeclFile: '?.bemhtml.bemdecl.js'
            }],
            [enbBemTechs.files, {
                depsFile: '?.bemhtml.deps.js',
                filesTarget: '?.bemhtml.files',
                dirsTarget: '?.bemhtml.dirs'
            }],
            [techs.bemhtml, {
                target: '?.browser.bemhtml.js',
                filesTarget: '?.bemhtml.files',
                sourceSuffixes: ['bemhtml', 'bemhtml.js']
            }],

            // js
            [techs.browserJs, { includeYM: true }],
            [techs.fileMerge, {
                target: '?.js',
                sources: ['?.browser.js', '?.browser.bemhtml.js', '?.browser.bemtree.js']
            }],

            // borschik
            [techs.borschik, { source: '?.js', target: '?.min.js', minify: isProd }],
            [techs.borschik, { source: '?.css', target: '?.min.css', tech: 'cleancss', minify: isProd }]
        ]);

        nodeConfig.addTargets(['?.bemtree.js', '?.bemhtml.js', '?.min.css', '?.min.js']);
    });
};