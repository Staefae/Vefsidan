class Formula {
	constructor(){
		this.daemi = ["a*x+b*x","a+b/c","a*b*x","x * y * -x / (x ^ a)","(a*b)(c*d)"]
	}
	svar(svor, scope, self=this) {
		let simplify = math.simplify(self.daemi,scope);
		let ekta = simplify.toString();

		const change = {
        	' ':'',
        	'*x': 'x',
        	'*y': 'y',
        };



        Object.keys(change).forEach(function(key) {
        	ekta = ekta.replaceAll(key, change[key]);
        	svor[0] = svor[0].replaceAll(key, change[key]);
        });

       

        

        for(let i = 0; i < 100; i++) {
        	let randomX = Math.random()*100000;
        	let randomY = Math.random()*100000;
        	if(simplify.evaluate({x:randomX,y:randomY}) != math.evaluate(svor[0], {x:randomX, y:randomY})) {
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
	    renderer.show_input(this.svar);

	    return tolur;
	}
}


