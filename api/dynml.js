// DynML Module!
// Forritað af Óliver, til að gera einn hlut einfaldari

const fs = require('fs');

function html(path, _data){
	let _err = false;
	let res = '';
	fs.readFile(path, function(err, data) {
		if(err != null){
			console.log("Error:", err);
			_err = true;
			return
		}
		data = data.toString();
		
		for(let key in Object.keys(data)) {
			data = data.replace('{{' + key + '}}', _data[key]);
		}
		
		res = data;
		console.log("RES = DATA:", res);
	});

	if(_err){
		return false;
	}
	console.log("DATA:",res);
	return res
}

module.exports = {run: html};