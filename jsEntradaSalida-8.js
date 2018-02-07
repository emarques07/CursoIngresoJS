/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	/*
	var resultado;
	resultado=10%2;
	alert(resultado);
	resultado=2%10;
	alert(resultado)
	*/
	
	var numeDividendo;
	var numeDivisor;

	numeDividendo=document.getElementById('numeroDividendo').value;
	numeDivisor=document.getElementById('numeroDivisor').value;

	numeDividendo=parseInt(numeDividendo);
	numeDivisor=parseInt(numeDivisor);

	alert("el resto es: " +numeDivisor%numeDividendo);


}
