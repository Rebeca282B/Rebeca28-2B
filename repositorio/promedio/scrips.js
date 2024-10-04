function promediar()
{
    const nota1 = +document.querySelector('#nota1').value;
    const nota2 = +document.querySelector('#nota2').value; 
    const nota3 = +document.querySelector('#nota3').value;

    const promedio = (nota1*0.15) + (nota2*0.1) + (nota3* 0.1);
    document.getElementById('Salida').textContent= promedio.toFixed(2) ;

}