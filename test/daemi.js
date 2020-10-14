function generate(formula) {
    return formula.replace('A', Math.round(Math.random()*10))+('B', Math.round(Math.random()*10))
}

function reikna(formula, x) {
    formula = formula.replace('x', x);
    // Byrja á svigum
    
}

const DATA = [
    { 
        "Bók": "Stæ 3b",
        "Höfundur": "Gísli Bachmann",
        "Kaflar": [
            {
                "nafn":"Hliðrun falla",
                "formulur": [
                    {
                        "prefix": "f(x) =",
                        "daemi": ["x^2 + Cx + D", "[A, B]"],
                        "svar": "Hausverkur"
                    }
                ]
            }, 
            {
                "nafn":"Fastapunktar falla",
                "formulur":[
                    {
                        "prefix":"f(x) =",
                        "daemi":["x^2 - Ax + B","x"],
                        "svar": function(svor){
                            let x1 = svor[0];
                            let x2 = svor[1];


                        }
                    }
                ]
            }
        ]
    }
]