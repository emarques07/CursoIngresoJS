function Mostrar()
{
	/*
	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5)
	{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		while(numero<1 || numero>10)	//como restringir con un 2do while 
		{
		 numero = prompt("reingrese un numero");
		 numero = parseInt(numero);
		}
		acumulador= acumulador + numero;
		//acumulador+=numero;
		contador = contador+1;
		//contador++;
		//contador+=1;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;
	*/


	var contador = 0;
	var acumulador = 0;
	var numero;	

	while(contador < 5)
	{
		numero = prompt("Ingrese un numero: ","0");
		
		numero = parseInt(numero);

		acumulador = acumulador + numero;
		
		contador++;
	}
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador/5;














}//FIN DE LA FUNCIÓN