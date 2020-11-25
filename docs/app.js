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
	bok: function(nafn, mynd, lysing, link, i){
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
		button.addEventListener('click',function(){
			document.getElementById('noscript').textContent = '';
			const portal = LIST[i].skra;
			add_script('data/' + link + '.js', function(){
				document.getElementById('val').remove();
				let sample = document.createElement('div');
				sample.id = 'sample';
				sample.className = 'math';
				CONTAINER.appendChild(sample);

				console.log("Link:", link);
				

				const formula = new Formula();
				formula.render();
			});
			
			
			
			
		});
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

function add_script(src, callback) {
	const script = document.createElement('script');
	script.src = src;
	script.onload = callback;
	document.head.appendChild(script);
}





async function forsida() {
	let data;
	const container = document.createElement('div');
	container.id = 'val';

	let checked = [0]

	for(let i = 0; i < LIST.length; i++) {

		let bok = GENERATORS.bok(LIST[i].nafn, i in checked ? 'checkmark_test.svg' : 'test.png', undefined, LIST[i].skra, i);
	
		container.appendChild(bok);
	}
	
	CONTAINER.appendChild(container);

	let contnet = document.createElement('div');
    contnet.className = "modal";
    contnet.id = 'svar';
    contnet.style.zIndex = "999";


    let modalContnet = document.createElement('div');
    modalContnet.className = "modal-content";

    let header = document.createElement('h4');
    header.id = 'svar_title';
    header.textContent = "Rétt";

    let paragraf = document.createElement('p');
    paragraf.id = 'svar_lysing';
    paragraf.textContent = "Þú reikanaðir út rétt svar"

    modalContnet.appendChild(paragraf);
    modalContnet.appendChild(header);

    let modalFooter = document.createElement('div');
    modalFooter.className = "modal-footer";

    let b = document.createElement('a');
    b.className = "modal-close waves-effect waves-green btn-flat";
    b.textContent = "Loka"

    modalFooter.appendChild(b);
    contnet.appendChild(modalFooter);
    contnet.appendChild(modalContnet);

    contnet.style.position = 'fixed';
    contnet.style.textAlign = 'center';
    

    b.addEventListener('click', function(){
    	contnet.style.display = "none";
    });

    CONTAINER.appendChild(contnet);

    console.log("SVÖR:", contnet);
	
}

function daemi(){

}


(function(){
	document.getElementById('noscript').textContent = '';
	
	document.body.appendChild(CONTAINER);;

	forsida();
})();