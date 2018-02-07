/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{   //declarar siempre las variables arriba y despues debajo las detallo.
	var numeroUno;
	var numeroDos;
	var resultado;
	
	n1 = document.getElementById('numeroUno').value;
	n2 = document.getElementById('numeroDos').value;
	n1 = parseInt(numeroUno);
	n2 = parseInt(numeroDos);
	
  	resultado=numeroUno+numeroDos;

		alert(resultado);
	



}

