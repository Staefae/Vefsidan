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
		let ccontent = document.createElement('div');
		let p = document.createElement('p');
		let button = document.createElement('a');
		button.href = link;
		button.className = 'waves-effect waves-light btn';
		button.textContent = 'Reikna';
		
		p.textContent = lysing;
		ccontent.appendChild(p);
		ccontent.appendChild(button);
		reveal.appendChild(span);
		reveal.appendChild(ccontent);
		content.appendChild(reveal);
		return content;
	},
	
};





async function forsida() {
	let data;
	const container = document.createElement('div');

	let checked = [0]

	for(let i = 0; i < DATA.length; i++) {

		let bok = GENERATORS.bok(DATA[i].nafn, i in checked ? '/static/checkmark_test.svg' : '/static/test.png', DATA[i].lysing, '/reikna/' + i);
	
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