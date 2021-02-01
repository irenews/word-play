'use strict'

var okWords = ['CACA', 'CASI', 'CAMA', 'CATA', 'CASA', 'SISA', 'TARTA', 'MAMA','MATAR', 'MATE', 'MATA', 'MASA', 'TEMA', 'TETE', 'TETA', 'TATA','TASA', 'FORMA', 'SACA', 'CATETA'];

var part = document.querySelectorAll('.part');
var result = document.getElementById('result');
var screenValue ='';
var correct = document.getElementById('correct');
var incorrect = document.getElementById('incorrect');
var validator = document.getElementById('validator');



for(var i = 0; i < part.length; i++) {
    part[i].addEventListener("click", partClick(i));
}

validator.addEventListener('click', btnValidate, false);

function partClick(i) {
    
    return function() {
        console.log("Has clicado en el numero " + i);
        let valor = part[i].textContent;

        result.innerHTML += valor;

        screenValue = result.textContent;
        console.log(screenValue);     
    };
    
}

function btnValidate() { 
    
    for (var z = 0; z < okWords.length; z++) {
      
        if (screenValue === okWords[z]) {
            
            correct.style.display = 'block';

            setTimeout(() => {
                location.reload(2000);
            }, 1300);  
            
        } else {
           
            setTimeout(() => {
                location.reload(2000);
            }, 1300);  
            

        }
    }  

}



/*
for(var i = 0; i < part.length; i++) {
    part[i].addEventListener("click", partClick(i));
}
*/
/*
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
                
                //setTimeout(() => {location.reload(2000);}, 1300); 
                 
            }

        }  
        
        
    };
    
}
*/
