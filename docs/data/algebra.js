class Formula {
	constructor(){
		this.daemi = ["a*x+b*x","a+b/c","a*b*x","x * y * -x / (x ^ a)","(a*b)(c*d)"]
	}
	svar(svor, scope, self=this) {
        console.log("EKTA SVAR:", math.simplify(self.daemi,scope).toString().replace(' ', '').replace('* x', 'x').replace('*x','x'));
        console.log(svor[0]);
        return math.simplify(self.daemi,scope).toString().replace(' ', '').replace('* x', 'x').replace('*x','x').replace('* y','y').replace('*y','y') == svor[0].replace(' ', '').replace('* x', 'x').replace('*x','x').replace('* y','y').replace('*y','y');
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


