const CONTAINER = document.createElement('div');
CONTAINER.className = 'container row';

const SITES = {
	forsida: '',
	kaflar: '',
	daemi: '',
	svar: '',
	check: '',
	tilkynna: ''
};

const GENERATORS = {
	bok: function(nafn, mynd, lysing){
		let content = document.createElement('div');
		content.className = "col l4 card hoverable";
		content.style.marginLeft = "10px";

		let image = document.createElement('div');
		image.className = "card-image waves-effect waves-block waves-light";
		let img = document.createElement('img');
		img.src = mynd;
		img.className = "activator";

		image.appendChild(img);
		content.appendChild(image);

		let card = document.createElement('div');
		card.className = "card-content";
		let cardTitle = document.createElement('span');
		cardTitle.className = "card-title activator grey-text text-darken-4";
		cardTitle.innerHTML = nafn + '<i class="material-icons right">more_vert</i>';
		let parameter = document.createElement('p');
		let a = document.createElement('a');
		a.href = '#';
		parameter.appendChild(a);
		card.appendChild(cardTitle);
		card.appendChild(parameter);
		content.appendChild(card);

		let reveal = document.createElement('div');
		reveal.className = 'card-reveal';
		let span = document.createElement('span');
		span.className = "card-title grey-text text-darken-4";
		span.innerHTML = nafn + '<i class="material-icons right">close</i>';
		let p = document.createElement('p');
		p.textContent = lysing;
		reveal.appendChild(span);
		reveal.appendChild(p);
		content.appendChild(reveal);
		return content;
	},
	
};

function clear() {
	CONTAINER.innerHTML = '';
}




function forsida() {

	/*let title = document.createElement('h1');
	title.textContent = 'Hello world';
	title.id = 'titill';
	CONTAINER.appendChild(title);*/

	for(let i = 0; i < 10; i++) {
		let bok = GENERATORS.bok('Bók ' + i, '/static/test.png', 'Þetta er með efnið úr bók númer 1, í stærðfræði :)');
	
		CONTAINER.appendChild(bok);
	}
	
}

function kaflar() {
	clear();
}

// Stærðfræðidæmin
function adalsidan() {
	clear();
}

function check() {
	clear();
}

function svar() {
	clear();
}

function tilkynna(){
	clear();
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
	document.body.innerHTML = '';
	let context = document.createElement('div');
	context.className = 'menu';

	let logo = document.createElement('img');
	logo.src = '/static/logo.svg';
	logo.width = 250;
	logo.height = 50;
	logo.className = 'logo';

	context.appendChild(logo);
	document.body.appendChild(context);
}

(function(){
	rerenderMenu();
	document.body.appendChild(CONTAINER);
	loadsite(0);

})();