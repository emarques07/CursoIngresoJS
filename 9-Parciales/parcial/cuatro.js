function Mostrar()
{
	var numUno;
	var numDos;
	var resultado;

	numUno = prompt("Ingrese un numero:");
	numDos = prompt("Ingrese un numero:");

	numUno=parseInt(numUno);
	numDos=parseInt(numDos);

	if(numUno == numDos)
		{
			resultado=(numUno*numDos);
			alert(resultado);
		}
		else if(numUno>numDos);
		{
			resultado=(numUno-numDos);
			alert(resultado);
		}
		else if(numUno<numDos)
		{
			resultado=(numUno+numDos);
			alert(resultado);
		}
}
