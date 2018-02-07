/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{

	var numeUno;
	var numeDos;
	var resultado;

	numeUno=document.getElementById('numeroUno').value;
	numeDos=document.getElementById('numeroDos').value;
	numeUno=parseInt(numeUno);
	numeDos=parseInt(numeDos);
	resultado=numeUno+numeDos;
	alert(resultado);



    
}

function restar()
{
	var numeUno;
	var numeDos;
	var resultado;

	numeUno=document.getElementById('numeroUno').value;
	numeDos=document.getElementById('numeroDos').value;
	resultado=numeUno-numeDos;
	alert(resultado);
}

function multiplicar()
{ 
	var numeUno;
	var numeDos;
	var resultado;

	numeUno=document.getElementById('numeroUno').value;
	numeDos=document.getElementById('numeroDos').value;
	resultado=numeUno*numeDos;
	alert(resultado);
}

function dividir()
{
	var numeUno;
	var numeDos;
	var resultado;

	numeUno=document.getElementById('numeroUno').value;
	numeDos=document.getElementById('numeroDos').value;
	resultado=numeUno/numeDos;
	alert(resultado);
}

