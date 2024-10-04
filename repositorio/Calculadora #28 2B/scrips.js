


function suma() {
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    let display = document.getElementById('salida');
    

    display.textContent = num1 + num2;
    
}

function resta() {
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    let display= document.getElementById('salida');

    display.textContent = num1 - num2;
    
}

function multi() {
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    let display= document.getElementById('salida');

    display.textContent = num1 * num2;
    
}

function divi() {
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    let display= document.getElementById('salida');

    display.textContent = num1 / num2;
    
}

function raiz() {
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    let display= document.getElementById('salida');

    display.textContent = Math.sqrt(num1);
    
}

function poten() {
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    let display= document.getElementById('salida');

    display.textContent = num1 ** num2;
    
}

function borrar() {
    document.getElementById('num1').value= ' ';
    document.getElementById('num2').value= ' ';
    let display= document.getElementById('salida');
    display.textContent= ' ';
}


