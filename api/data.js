const DATA = [
    {
        nafn:"Hliðrun falla",
        lysing: "Þessi hluti er um hliðrun falla",
        formulur: [
            {
                
                daemi: ["f(x) = x^2 + c*x + d", "f(x) = c/(x+d)", "f(x) = c/(x^2+d)"],
                svar: function(svor, scope) {
                    const f = math.evaluate(this.daemi[0], scope);
                    const g = (x) => f(x-scope.a) + scope.b;
                    
                    
                    const svar = math.evaluate(svor[0], {});
                    for(let i = 0; i < 100; i++) {
                        let random = Math.round(Math.random()*1000000);
                        if(svar(random) != g(random)) {
                            return false;
                        }
                    }
                    return true;
                },

                // ATH! Vigrar þurfa að koma með
                render: function(){
                    
                    let tolur = {
                        'a':Math.round(Math.random() * 20) - 10,
                        'b':Math.round(Math.random() * 20) - 10,
                        'c':Math.round(Math.random() * 20) - 10,
                        'd':Math.round(Math.random() * 20) - 10
                    };

                    let sample = document.getElementById('sample');
                    sample.innerHTML = '';

                    
                    const node = math.parse(this.daemi[Math.round(Math.random() * (this.daemi.length-1))].replace('a',tolur.a).replace('b',tolur.b).replace('c',tolur.c).replace('d',tolur.d));
                    try {
                        const latex = node ? node.toTex({'implicit':'hide', 'parenthesis':'keep'}) : 'No content!';
                        sample.innerHTML = '$$' + latex.replace('+-', '-') + '$$';
                        console.log("LATEX:", latex);
                        const elem = MathJax.Hub.getAllJax('sample')[0];
                        console.log("ELEM:",  MathJax.Hub.getAllJax('sample'));
                        MathJax.Hub.Queue(['Text', elem, latex]);
                    } catch (err) {}

                    let vector = document.createElement('div');
                    vector.id = 'vector';
                    sample.appendChild(vector);

                    const vector_latex = '\\begin{pmatrix} ' + tolur.a + '\\\\' + tolur.b + '\\end{pmatrix}';
                    vector.textContent = '$$' + vector_latex + '$$';
                    const elem2 = MathJax.Hub.getAllJax('vector')[0];
                    MathJax.Hub.Queue(['Text', elem2, vector_latex]);

                    
                    

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
                svar: function(svor, scope){
                    const f = math.evaluate(this.daemi[0], scope);
                    return f(svor[0]) == svor[0] && f(svor[1]) == svor[1];
                },
                render: function(){}
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

module.exports = {data: DATA}