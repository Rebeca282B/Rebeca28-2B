function contador() {
    //setTimeout() cuenta regresiva
    let num= +document.querySelector('#segundos').value;
    setTimeout(finalizar, num * 1000);
}

function finalizar() {
    //alert('tiempo cumplido');
    document.querySelector('#Salida').textContent = 'ON';
    let alarma = document.querySelector('#alarma');
    alarma.play();

}

function reiniciar() {
    location.reload();
}