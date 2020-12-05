class Formula {
	constructor(){
		this.daemi = ["x + \\frac{7}{x} = 79"]
	}
	svar(svor, scope, self=this) {

        return false;
	}

	render(){
	    let MQ = MathQuill.getInterface(2);

	    let sample = document.getElementById('sample');
	    let select = Math.round(Math.random() * (this.daemi.length-1));
	    
	    let tolur = {
	        'a':Math.round(Math.random() * 20) - 10,
	        'b':Math.round(Math.random() * 20) - 10,
	        'c':Math.round(Math.random() * 20) - 10,
	        'd':Math.round(Math.random() * 20) - 10,
	        'select':select,
	    };

	    // Jöfnur þurfa sérmeðferð :)

	    //let sample = document.getElementById('sample');
	    sample.innerHTML = '$$' + this.daemi[select] + '$$';


	    
	   	const elem = MathJax.Hub.getAllJax('sample')[0];
	    MathJax.Hub.Queue(['Typeset', MathJax.Hub, sample]);

	    let renderer = new Renderer(this.daemi[select], tolur);
	    renderer.show_input(this.svar);
	    

	    

	    /*let keyboard = get_keyboard(['^', 'sqrt', '(', ')', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*  ', 'x', '0', '<-', '/'], 4, field);
	    document.getElementById('content').appendChild(keyboard);*/

	    return tolur;
	}
}

