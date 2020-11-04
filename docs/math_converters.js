function read_action(latex, start, find='\\') {
	let i = start;
	const data = {};
	while(latex[i] != find){
		i++;
	}
	i++;
	const end = '{}() \\';
	let name = '';
	while(!end.includes(latex[i])) {
		name += latex[i];
		i++;
	}
	data.name = name;
	if(latex[i] == '{') {
		let brackets = 1;
		let begin = i;
		do {
			if(latex[i] == '{'){
				brackets++;
			} else if(latex[i] == '}') {
				brackets--;
				if(brackets == 1 && latex[i+1] != '{')
					break;
			}
			i++;
			
		} while(brackets > 0 && i < latex.length);
		data.data = latex.substr(begin+1, i - begin - 1);
	}

	data.i = i-1;

	return data;

}

function convert_part(action, data) {
	console.log("ACTION:", action, "DATA:", data);
	let list = [];
	if(data.includes('}{')) {
		list.push(data.substr(0, data.indexOf('}{')));
		list.push(data.substr(data.indexOf('}{')+2));
	} else {
		list.push(data);
	}

	console.log("list:", list);

	if(action == 'frac') {
		for(let i = 0; i < list.length; i++) {
			
			if(list[i].includes('\\')) {
				//let dat = read_action(list[i]);
				//list[i] = convert_part(dat.name, dat.data) || list[i];
			}
		}
		
		return '(' + list[0] + ')/(' + list[1] + ')';
	} else if(action == '^') {
		return '(' + list[0] + ')';
	}
	return '';
}

// Við þurfum að breyta LaTeX í texta til að nota í mathjs
function latex_to_text(latex) {
	let _latex = latex.replace('\\left', '').replace('\\right', '').replace('\\cdot','cdot').replace('cdot', '*');
	let res = '';
	console.log("START LATEX:", _latex);
	
	let action = '';
	for(let i = 0; i < _latex.length; i++) {
		let brackets = 0;
		let ch = _latex[i];
		if(ch == '\\'){
			let dat = read_action(_latex, i);
			console.log("DAT:", dat);
			if(dat.data) {
				let converted = convert_part(dat.name, dat.data);
				res += converted;
				i += dat.i;
			}
				
		} else if(ch == '^' && _latex[i+1] == '{'){
			let dat = read_action(_latex, i, '^');
			res += '^(' + dat.data + ')';
			i += dat.i;
			console.log("I:", i)
		} else {
			res += ch;
		}
	}
	return res.replace('}', '').replace('left', '').replace('right', ''); 
}