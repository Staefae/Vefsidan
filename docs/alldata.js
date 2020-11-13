const DATA = [
    {
        nafn:"Hliðrun falla",
        lysing: "Þessi hluti er um hliðrun falla<br>(Virkar)",
        formulur: [
            {
                
                daemi: ["f(x) = x^2 + c*x + d", "f(x) = c/(x+d)", "f(x) = c/(x^2+d)"],
                svar: function (svor, scope, self=this) {
                    const f = math.evaluate(self.daemi[scope.select], scope);
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
                },

                // ATH! Vigrar þurfa að koma með
                render: function (){

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
            

                    try {
                        let vector = document.createElement('div');
                        vector.id = 'vector';
                        sample.appendChild(vector);

                        const vector_latex = '\\begin{pmatrix} ' + tolur.a + '\\\\' + tolur.b + '\\end{pmatrix}';
                        vector.textContent = '$$' + vector_latex + '$$';
                        
                        MathJax.Hub.Queue(['Typeset', MathJax.Hub, vector]);
                       
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

                    let keyboard = get_keyboard(['^', 'sqrt', '(', ')', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*  ', 'x', '0', '<-', '/'], 4, field);
                    document.getElementById('content').appendChild(keyboard);

                    return tolur;
                }
            }
        ]
    },
    {
        nafn:"Fastapunktar falla",
        formulur:[
            {
                
                daemi:["f(x) = x^2 - a*x + b"],
                svar: function (svor, scope){
                    const f = math.evaluate(this.daemi[0], scope);
                    return f(svor[0]) == svor[0] && f(svor[1]) == svor[1];
                },
                render: function (){
                    let sample = document.getElementById('sample');
                    sample.innerHTML = '';
                    let tolur = {
                        'a':Math.round(Math.random() * 20) - 10,
                        'b':Math.round(Math.random() * 20) - 10,
                    };
                    

                }
            }
        ]
    },
    {
        nafn: "Takmörkunn falla",
        formulur:[
            {
                dæmi: [" "],
                svar: function(svor, scope){
                    const f = math.evaluate(this.daemi[0], scope);
                    return f(svor[0]) == svor[0] && f(svor[1]) == svor[1];

                },
                render: function(){}
            }
        ]
    },
    {
        nafn: "Einhallun falla",
        formulur:[
            {
                dæmi: [" "],
                svar: function(svor, scope){
                    const f = math.evaluate(this.daemi[0], scope);
                    return f(svor[0]) == svor[0] && f(svor[1]) == svor[1];

                },
                render: function(){}
            }
        ]
    },
    {
        nafn: "Jöfn og Ójöfn föll",
        formulur:[
            {
                dæmi: [" "],
                svar: function(svor, scope){
                    const f = math.evaluate(this.daemi[0], scope);
                    return f(svor[0]) == svor[0] && f(svor[1]) == svor[1];

                },
                render: function(){}

            }
        ]
    },
    {
        nafn: "Samhverfir ferlar",
        formulur:[
            {
                dæmi: [" "],
                svar: function(svor, scope){
                    const f = math.evaluate(this.daemi[0], scope);
                    return f(svor[0]) == svor[0] && f(svor[1]) == svor[1];

                },
                render: function(){}
            }
        ]
    },
    {
        nafn: "Samsett föll",
        formulur:[
            {
                dæmi: [" "],
                svar: function(svor, scope){
                    const f = math.evaluate(this.daemi[0], scope);
                    return f(svor[0]) == svor[0] && f(svor[1]) == svor[1];

                },
                render: function(){}
            }
        ]
    },
    {
        nafn: "Andhverfur falla",
        formulur:[
            {
                dæmi: [" "],
                svar: function(svor, scope){
                    const f = math.evaluate(this.daemi[0], scope);
                    return f(svor[0]) == svor[0] && f(svor[1]) == svor[1];

                },
                render: function(){}
            }
        ]
    },
];

//module.exports = {data: DATA}