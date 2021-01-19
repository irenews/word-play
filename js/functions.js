'use strict'

let okWords = ['CACA', 'CASI', 'CAMA', 'CATA', 'CASA', 'SISA', 'TARTA', 'MAMA','MATAR', 'MATE', 'MATA', 'MASA', 'TEMA', 'TETE', 'TETA', 'TATA','TASA', 'FORMA', 'SACA', 'CATETA'];

let part = document.querySelectorAll('.part');
let result = document.getElementById('result');
var screenValue ='';
let correct = document.getElementById('correct');
let incorrect = document.getElementById('incorrect');


for(var i = 0; i < part.length; i++) {
    part[i].addEventListener("click", partClick(i));
}

function partClick(i) {
    
    return function() {
        console.log("Has clicado en el numero " + i);
        let valor = part[i].textContent;

        result.innerHTML += valor;

        screenValue = result.textContent;
        console.log(screenValue);
        
        
        for (var z = 0; z < okWords.length; z++) {
            
            if (screenValue == okWords[z]) {

                console.log( 'Correcto');
                setTimeout(() => {
                    correct.style.display = 'block';
                }, 200);    
                

                setTimeout(() => {
                    location.reload(2000);
                }, 1300);   
            }   
            else if ( screenValue != okWords[z]) {

                console.log( 'Incorrecto');
                setTimeout(() => {
                    incorrect.style.display = 'block';
                }, 1000);    
                
                /*
                setTimeout(() => {
                    location.reload(2000);
                }, 1300); 
                */  
            }

        }  
        
        
    };
    
}
