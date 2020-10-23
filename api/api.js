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
	console.log("LIST:",list);

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

function scripting(url){
	try {
		let split = url.split('/');
		if(split.length == 3) {
			if(split[2] == 'render') {
				return _data.data[split[0]].formulur[split[1]].render.toString().replace('\n','').replace('\t','').replace('\r','');
			} else if (split[2] == 'svar') {
				return _data.data[split[0]].formulur[split[1]].svar.toString().replace('\n','').replace('\t','').replace('\r','');
			}
		} else {
			return "";
		}
	} catch(err) {

		return "";
	}
	return "";
}

// Basic Web Server
const server = http.createServer((req, res) => {
	if(req.url == '/') {
		
		res.setHeader('Content-Type', 'text/html');
		res.statusCode = 200;
		fs.readFile('docs/index.html', function(err, data) {
			if(err == null)
				res.end(data)
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
	} else if(req.url.startsWith('/api/')) {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.end(getAPI(req.url.substring(5)));
	} else if(req.url.startsWith('/scripting/')) {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/javascript');
		res.end(scripting(req.url.substring(11)));
	} else {
		//let path = req.url.path.split('/');
		
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/plain');
		res.end("404 not found!");
	}
});

server.listen(port, hostname, () => {});