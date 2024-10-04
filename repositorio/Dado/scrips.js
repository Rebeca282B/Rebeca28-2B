
function dado() {
    let numero= +document.getElementById('num').value;
    let aleatorio= Math.floor(Math.random()*(numero+1))//(numero+1));
   
    document.getElementById('Salida').textContent= aleatorio ;
    
}

// Math.round(Math.random()*num) para poder agregar el numero minimo