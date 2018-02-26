function Mostrar()
{

	//var numero = prompt("ingrese un número entre 0 y 10.");

	

	/*
	while(numero<0 || numero>10) //opcion1
		{
		 numero = prompt("Reingrese un número entre 0 y 10.");
		}	

		alert("Bienvenido");
	*/

	//numero=parseInt(numero);
	//while(isNaN(numero) || (numero<0 || numero>10))
	//	{
	//		numero=prompt("ingrese un numero del 1 al 10");

	//	}	

	//	document.getElementById('Numero').value=numero;
	//	alert("Correcto");








	var numero;

	numero=prompt("Ingresar Numero: ");

	while(numero<0 || numero>9)
		{
			alert("El numero es incorecto, reingrese");
			numero=prompt("Ingrese numero: ");
			document.getElementById('Numero').value=numero;
			alert("Correcto");
		}
	
	







}//FIN DE LA FUNCIÓN