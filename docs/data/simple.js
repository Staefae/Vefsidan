class Formula {
	constructor(){
		this.daemi = ["a*b", "a+b", "a-b", "a/b", "a*b+c", "a/(b+c)", "(a+b)*c", "(a-b)*2+a"]
	}
	svar(svor, scope, self=this) {

        const f = math.evaluate(self.daemi, scope);
        console.log("CHECK! f =", f, "user:", math.evaluate(svor[0], scope));
        return math.evaluate(svor[0], scope) == f;
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

	  
	    let renderer = new Renderer(this.daemi[select], tolur);
	    renderer.show_formula();
	    renderer.show_input(this.svar);

	    

	    

	    /*let keyboard = get_keyboard(['^', 'sqrt', '(', ')', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*  ', 'x', '0', '<-', '/'], 4, field);
	    document.getElementById('content').appendChild(keyboard);*/

	    return tolur;
	}
}


