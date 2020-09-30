function clear() {
	document.body.innerHTML = '';
}

function forsida() {
	rerenderMenu();

	let container = document.createElement('div');
	container.className = 'container';

	let title = document.createElement('h1');
	title.textContent = 'Hello world';
	title.id = 'titill';
	container.appendChild(title);
	document.body.appendChild(container);
}

function kaflar() {
	rerenderMenu();
}

// Stærðfræðidæmin
function adalsidan() {
	rerenderMenu();
}

function check() {
	rerenderMenu();
}

function svar() {
	rerenderMenu();
}

function tilkynna(){
	rerenderMenu();
}

function loadsite(site) {
	
	switch(site) {
		case 0:
			forsida();
			break
		case 1:
			kaflar();
			break;
		case 2:
			adalsidan();
			break;
		case 3:
			check();
			break;
		case 4:
			svar();
			break;
		case 5:
			tilkynna();
			break;

	}
}

function rerenderMenu() {
	clear();
	let context = document.createElement('div');
	context.className = 'menu';

	let logo = document.createElement('img');
	logo.src = 'logo.svg';
	logo.width = 250;
	logo.height = 50;
	logo.className = 'logo';

	context.appendChild(logo);
	document.body.appendChild(context);
}

(function(){
	let site = 0;
	loadsite(site);

})();