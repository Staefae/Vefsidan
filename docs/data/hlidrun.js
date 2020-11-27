class Formula {
	constructor(){
		this.daemi = ["f(x) = x^2 + c*x + d", "f(x) = c/(x+d)", "f(x) = c/(x^2+d)"]
	}
	svar(svor, scope, self=this) {
	    const f = math.evaluate(self.daemi, scope);
	    const g = (x) => f(x-scope.a) + scope.b;


	    
	    const _svar = math.evaluate('f(x) = ' + svor[0], scope);

	    console.log("G:",g(100), '_svar:', _svar(100));

	    for(let i = 0; i < 100; i++) {
	        let random = Math.round(Math.random()*1000000);
	        if(_svar(random) != g(random)) {
	            return false;
	        }
	    }
	    return true;
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
	  	renderer.show_vector();
	  	renderer.show_input(this.svar);
	    
	    return tolur;
	}
}


