var fs = require('fs');
var path = require('path');
var pages = JSON.parse(fs.readFileSync('modifiers.json', 'utf8'));
var folders = Object.keys(pages);
var pathToStatic = path.resolve('static.page');
var pathToFolder = [];

if(!fs.existsSync(pathToStatic)){
    fs.mkdirSync(pathToStatic, 0777);
}

folders.forEach(function(folder){
	pathToFolder[folder] = path.resolve('static.page/' + folder);

	if(!fs.existsSync(pathToFolder[folder])){
	    fs.mkdirSync(pathToFolder[folder], 0777);
	}

	pages[folder].forEach(function(page) {
	    var bemdecl = path.join(pathToFolder[folder], folder + '_' + page + '.bemdecl.js');
	    var rootDecl = 'exports.blocks = [{"name": "root"}];';

	    fs.existsSync(bemdecl) || fs.writeFileSync(bemdecl, rootDecl);
	});
});
