'use strict'

let part = document.querySelectorAll('.part');

for(var i = 0; i < part.length; i++) {
    part[i].addEventListener("click", partClick(i));
}

function partClick(i) {
 return function() {
    console.log("Has clicado en el numero " + i);
    let valor = part[i].textContent;

    result.innerHTML = valor;
 };
}
