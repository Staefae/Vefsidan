class Formula {
	constructor(){
		this.daemi = ["a*b", "a+b", "a-b", "a/b", "a*b+c", "a/(b+c)", "(a+b)*c", "(a-b)*2+a"]
	}
	svar(svor, scope, self=this) {
        const f = math.evaluate(self.daemi[scope.select], scope);
        return math.evaluate(svor[0], scope) == f
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

	  
	    sample.innerHTML = '';

	    console.log("SAMPLE", sample);

	    
	    const node = math.parse(this.daemi[select].replace('a',tolur.a).replace('b',tolur.b).replace('c',tolur.c).replace('d',tolur.d));
	    try {
	        const latex = node ? node.toTex({'implicit':'hide', 'parenthesis':'keep'}) : 'No content!';
	        sample.innerHTML = '$$' + latex.replace('+-', '-').replace('\\cdot x', ' x') + '$$';
	        console.log("LATEX:", latex);
	        const elem = MathJax.Hub.getAllJax('sample')[0];
	        MathJax.Hub.Queue(['Typeset', MathJax.Hub, sample]);
	       // MathJax.Hub.Queue(['Text', elem, latex]);
	    } catch (err) {
	         console.log(err);
	    }


	    

	    let inputdiv = document.createElement('div');


	    inputdiv.className = 'input-field row';

	    let input = document.createElement('div');
	    input.className = 'active valitade col s9';

	    inputdiv.appendChild(input);
	    let field = MQ.MathField(input, {});

	    /*let input = document.createElement('input');
	    input.className = 'active valitade col s9';
	    input.id = '_inp';
	    inputdiv.appendChild(input);
	    sample.appendChild(inputdiv);
	    inputdiv.style.marginTop = '5em';*/

	    sample.appendChild(inputdiv);


	    let button = document.createElement('a');
	    button.className = 'btn col s3';
	    button.textContent = 'Svara';
	    let __svar = this.svar;
	    let __this = this;

	    inputdiv.style.fontSize = '2em';
	    button.style.height = '3em';

	    button.addEventListener('click', () => {
	        console.log("FIELD:", field);
	        let __latex = latex_to_text(field.latex());
	        console.log("FROM LATEX:", __latex);
	        let svar = __svar([__latex], tolur, __this);
	       
	        
	        document.getElementById('svar').style.display = "block";
	        if(svar) {
	            document.getElementById('svar_title').textContent = 'Rétt!';
	            document.getElementById('svar_lysing').textContent = 'Þú reikanaðir út rétt svar!';
	            console.log("Rétt!");
	        } else {
	            document.getElementById('svar_title').textContent = 'Rangt!';
	            document.getElementById('svar_lysing').textContent = 'Þú reikanaðir út rangt svar!';
	            console.log("Rangt!");
	        }
	    });
	    button.href = '#';
	    inputdiv.appendChild(button);

	    /*let keyboard = get_keyboard(['^', 'sqrt', '(', ')', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*  ', 'x', '0', '<-', '/'], 4, field);
	    document.getElementById('content').appendChild(keyboard);*/

	    return tolur;
	}
}


