const http = require('http');
const fs = require('fs');
const _data = require('./data');

const port = 8080;
const hostname = '0.0.0.0';

const CONTENT_TYPES = {
	'.css':'text/css',
	'.js':'application/javascript',
	'.html':'text/html',
	'.ico':'image/x-icon',
	'.png':'image/png',
	'.jpg':'image/jpg',
	'.jpeg':'image/jpeg',
	'.gif':'image/gif',
	'.svg':'image/svg+xml'
}

// Hér er API'inn
function getAPI(path) {
	let obj = {};
	let list = path.split('/');
	

	if(list[0] == 'index') {
		if(list.length == 1) {
			obj.index = [];
			for(let i = 0; i < _data.data.length; i++) {
				obj.index.push({kafli: _data.data[i].nafn, nr:i, lysing: _data.data[i].lysing || '(null)'})
			}
		} else {
			try {
				let nr = list[1];
				obj.kaflar = _data.data[nr].formulur;
			} catch(err) {
				obj = {};
			}
		}
		
	} else {

	}
	

	return JSON.stringify(obj);
}

// Basic Web Server
const server = http.createServer((req, res) => {
	if(req.url == '/') {
		
		res.setHeader('Content-Type', 'text/html');
		res.statusCode = 200;
		fs.readFile('docs/index.html', function(err, data) {
			if(err == null)
				res.end(data);
			else {
				res.statusCode = 404;
				res.end("404 not found!");
			}
		});
	} else if(req.url.startsWith('/static/')) {
		const path = req.url.substring(8);
		
		if(path.includes('..')) {
			res.statusCode = 400;
			res.setHeader('Content-Type', 'text/plain');
			res.end('400 bad request!');
		} else {
			fs.readFile('docs/' + path, function(err, data){
				if(err) {
					res.statusCode = 404;
					res.setHeader('Content-Type', 'text/plain');
					res.end("404 not found!");
				} else {
					res.statusCode = 200;
					if(path.endsWith('.js')) {
						res.setHeader('Content-Type', 'application/javascript');
					} else if(path.endsWith('.css')) {
						res.setHeader('Content-Type', 'text/css');
					} else if(path.endsWith('.html')) {
						res.setHeader('Content-Type', 'text/html');
					} else if(path.endsWith('.ico')) {
						res.setHeader('Content-Type', '')
					}
					res.end(data);
				}
			});
		}
	} /*else if(req.url.startsWith('/api/')) {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.end(getAPI(req.url.substring(5)));
	} */ else if(req.url == '/alldata.js'){
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/javascript');
		fs.readFile('api/data.js', function(err, data) {
			if(err) {
				return console.log("Error:", err);
			}
			res.end(data);
		});
	} else if(req.url.startsWith('/reikna/')) {
		let path = req.url.split('/');
		console.log("PATH:", path);
		res.setHeader('Content-Type', 'text/html');
		res.statusCode = 200;

		const replacement = {
			kafli: path[2],
		};
		
		fs.readFile('docs/reikna.html', function(err, data) {
			if(err) {
				return console.log("Error:", err);
			}

			data = data.toString();
			const keys = Object.keys(replacement);
			for(let key in keys) {
				data = data.replace('{{' + keys[key] + '}}', replacement[keys[key]]);
			}
			res.end(data);
		});

	} else {
		//let path = req.url.path.split('/');
		
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/plain');
		res.end("404 not found!");
	}
});

server.listen(port, hostname, () => {});