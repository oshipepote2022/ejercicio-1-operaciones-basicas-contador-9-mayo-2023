const parrafo= document.querySelector ("#contador");

let number = 0;
function botonClick(number) {
    number = number +1;
    parrafo.innerHTML= number; 
}


