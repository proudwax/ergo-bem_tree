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
var path = require('path');
var dropRequireCache = require('enb/lib/fs/drop-require-cache');

module.exports = require('enb/lib/build-flow').create()
    .name('html-from-bemtree')
    .target('destTarget', '?.html')
    .useSourceFilename('bemtreeTarget', '?.bemtree.js')
    .useSourceFilename('bemhtmlTarget', '?.bemhtml.js')
    .builder(function(bemtreeFilename, bemhtmlFilename) {
        dropRequireCache(require, bemtreeFilename);
        dropRequireCache(require, bemhtmlFilename);

        var BEMTREE = require(bemtreeFilename).BEMTREE,
            BEMHTML = require(bemhtmlFilename).BEMHTML;

        var page = path.basename(bemtreeFilename, '.bemtree.tmp.js').split('_');

        var modName = page[0];
        var modVal = page[1];


        return BEMHTML.apply(BEMTREE.apply({ block: 'root', page: {modName, modVal} }));
    })
    .createTech();