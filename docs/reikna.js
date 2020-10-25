"use strict"

const CONTAINER = document.createElement('div');

const KAFLI = window.location.pathname.split('/')[2];
const FORMULUR = DATA[parseInt(KAFLI)].formulur;



(function(){
	document.getElementById('noscript').textContent = '';
	
	document.body.appendChild(CONTAINER);
	

	FORMULUR[0].render();
	
	
})();