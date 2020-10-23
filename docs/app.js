const CONTAINER = document.createElement('div');
CONTAINER.className = 'container row';
CONTAINER.id = 'content';

const SITES = {
	forsida: '',
	kaflar: '',
	daemi: '',
	svar: '',
	check: '',
	tilkynna: ''
};

const GENERATORS = {
	bok: function(nafn, mynd, lysing, link){
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





async function forsida() {
	let data;
	const container = document.createElement('div');


	let response = await fetch('/api/index');
	data = await response.json();


	for(let i = 0; i < data.index.length; i++) {

		let bok = GENERATORS.bok(data.index[i].kafli, '/static/test.png', data.index[i].lysing, '');
	
		container.appendChild(bok);
	}
	
	CONTAINER.appendChild(container);


	
}

function daemi(){

}


(function(){
	document.getElementById('noscript').textContent = '';
	
	document.body.appendChild(CONTAINER);;

	forsida();
})();