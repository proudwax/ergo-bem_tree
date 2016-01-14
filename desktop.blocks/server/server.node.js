var fs = require('fs'),
    PATH = require('path'),
    VM = require('vm'),
    express = require('express'),
    app = express(),
    url = require('url'),
    querystring = require('querystring'),
    moment = require('moment'),
    Vow = require('vow'),
    pathToBundle = PATH.join('.', 'desktop.bundles', 'index');

app.use(express.static(pathToBundle));

var bemtreeTemplate = fs.readFileSync(PATH.join(pathToBundle, 'index.bemtree.js'), 'utf-8');

var context = VM.createContext({
    console: console,
    Vow: Vow
});

VM.runInContext(bemtreeTemplate, context);
var BEMTREE = context.BEMTREE;

app.get('/search', function(req, res) {

var dataEntries = [],
	searchObj = url.parse(req.url, true).query,
	queryString = querystring.escape(searchObj.query),
	servicesEnabled = [];

searchObj.twitter && servicesEnabled.push(twitter.get(queryString));

Vow.all(servicesEnabled)
	.then(function(results) {

		// ��������� ���������� ������ � ���� ������,
		// ����������� ��� ���������� ��������
		Object.keys(results).map(function(idx) {
			dataEntries = dataEntries.concat(results[idx]);
		});

		// ��������� ������ �� ����
		dataEntries.sort(function(a, b) {
			return b.createdAt.valueOf() - a.createdAt.valueOf();
		});

		// ��������� BEMJSON �� ������� � ������� BEMTREE ��������
		BEMTREE.apply(dataEntries.map(function(dataEntry) {
			dataEntry.createdAt = moment(dataEntry.createdAt).fromNow();
			return {
				block: 'island',
				data: dataEntry,
				mods: { type: dataEntry.type }
			};
		}))
		.then(function(bemjson) {
			// ���������� ����������������� JSON
			res.end(JSON.stringify(bemjson, null, 4));
		});

	})
	.fail(function() {
		console.error(arguments);
	});
});

var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});

