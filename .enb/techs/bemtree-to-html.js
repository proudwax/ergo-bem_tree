/**
 * bemtree-to-html
 * =================
 *
 * Собирает *html*-файл с помощью *bemtree* и *bemhtml*.
 *
 * **Опции**
 *
 * * *String* **bemhtmlTarget** — Исходный BEMHTML-файл. По умолчанию — `?.bemhtml.js`.
 * * *String* **bemtreeTarget** — Исходный BEMJSON-файл. По умолчанию — `?.bemtree.js`.
 * * *String* **destTarget** — Результирующий HTML-файл. По умолчанию — `?.html`.
 *
 * **Пример**
 *
 * ```javascript
 * nodeConfig.addTech(require('enb/techs/html-from-bemjson'));
 * ```
 */
var dropRequireCache = require('enb/lib/fs/drop-require-cache');

module.exports = require('enb/lib/build-flow').create()
    .name('html-from-bemtree')
    .target('destTarget', '?.html')
    .useSourceFilename('bemtreeTarget', '?.bemtree.js')
    .useSourceFilename('bemhtmlTarget', '?.bemhtml.js')
    .builder(function(bemtreeFilename, bemhtmlFilename) {
        dropRequireCache(require, bemtreeFilename);
        dropRequireCache(require, bemhtmlFilename); 


        var page = path.basename(bemtreeFilename, '.bemhtml.bemtree.js').split('_');,
			BEMTREE = require(bemtreeFilename).BEMTREE,
            BEMHTML = require(bemhtmlFilename).BEMHTML;



        return BEMHTML.apply(BEMTREE.apply({ block: 'root', page[0]: page[1] }));
    })
    .createTech();
