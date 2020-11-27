// Þessi klasi á að einfalda lífið aðeins :)
class Renderer {
	constructor(daemi, tolur){
		this.MQ = MathQuill.getInterface(2);
		this.sample = document.getElementById('sample');
		this.daemi = daemi;
		this.tolur = tolur;
	}

	show_formula(){
		sample.innerHTML = '';
		const node = math.parse(this.daemi.replace('a',this.tolur.a).replace('b',this.tolur.b).replace('c',this.tolur.c).replace('d',this.tolur.d));
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
	}

	show_vector() {
		try {
	        let vector = document.createElement('div');
	        vector.id = 'vector';
	        this.sample.appendChild(vector);

	        const vector_latex = '\\begin{pmatrix} ' + this.tolur.a + '\\\\' + this.tolur.b + '\\end{pmatrix}';
	        vector.textContent = '$$' + vector_latex + '$$';
	        
	        MathJax.Hub.Queue(['Typeset', MathJax.Hub, vector]);
	       
	    } catch (err) {
	        console.log(err);
	    }
	}

	show_input(svar) {
		let inputdiv = document.createElement('div');


	    inputdiv.className = 'input-field row';

	    let input = document.createElement('div');
	    input.className = 'active valitade col s9';

	    inputdiv.appendChild(input);
	    let field = this.MQ.MathField(input, {});

	    this.sample.appendChild(inputdiv);

	    let button = document.createElement('a');
	    button.className = 'btn col s3';
	    button.textContent = 'Svara';
	    let __svar = svar;
	    let __this = {daemi:this.daemi};

	    inputdiv.style.fontSize = '2em';
	    button.style.height = '3em';

	    button.addEventListener('click', () => {
	        let __latex = latex_to_text(field.latex());
	       
	        let _svar = __svar([__latex], this.tolur, __this);
	       
	        
	        document.getElementById('svar').style.display = "block";
	        if(_svar) {
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
	}
}