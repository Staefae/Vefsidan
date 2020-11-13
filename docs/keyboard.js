function get_keyboard(keys, width, field) {
	let keyboard = document.createElement('table');
	let tr = document.createElement('tr');

	function ff(i) {
		switch(i) {
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
			case '0':
			case 'x':
			case '+':
			case '-':
			case '(':
			case ')':
			return function(){
				field.write(i);
			}
			case '/':
			return function(){
				console.log("FRAC");
				field.cmd('\\frac');
			}
			case '*':
			return function() {
				field.cmd('\\cdot');
			}
			case '^':
			return function(){
				field.cmd('^');
			}
			case 'sqrt':
			return function(){
				field.cmd('\\sqrt');
			}
			

		}
	}

	for(let i = 0; i < keys.length; i++) {
		if(i % width == 0) {
			keyboard.appendChild(tr);
			tr = document.createElement('tr');
		}
		let td = document.createElement('td');
		td.className = 'kbkey'
		td.textContent = keys[i];
		td.addEventListener('click', ff(keys[i]));
		tr.appendChild(td);
	}

	keyboard.appendChild(tr);

	return keyboard;
}