	/*
	vamos a ingresar:
	- 2 datos, el primero q sea una letra y el 2do un numero,
	- los numeros van a estar entre -50 y +50
	- informar el promedio de los numeros positivos
	- la cantidad de numeros impares
	- la suma de todos los numeros cuya letra alla sido una vocal
	- el numero maximo  
	- la letra con la cual fue ingresado
	*/
function Mostrar()

{
	//datos
	var letra;
	var numero;
	var promedio;
	var numeroMaximo;
	var letraMaxima;
	var respuesta = "";

	
	var sumaPositivos = 0;
	var contador = 0;
	var cantidadPositivos = 0;
	var cantidadImpares = 0;
	var sumaNumerosLetraVocal = 0;

	
	while (respuesta !== "no")
	{
	
		letra = prompt("Ingrese una letra: ");

	
		while (!isNaN(letra))
		{
			letra = prompt("Vuelva a ingrese una letra: ");
		}

	
		numero = prompt("Ingrese un numero entre -50 y 50","0");
		numero = parseInt(numero);

		
		while (numero < -50 || numero > 50 || isNaN(numero))
		{
			numero = prompt("Vuelva a ingresar un valor entre -50 y 50: ","0");
		}

		
		contador++;

	
		if (numero > 0) 
		{
			cantidadPositivos++;
			sumaPositivos = sumaPositivos + numero;
		}

		
		if (numero % 2 !== 0) 
		{
			cantidadImpares++;
		}
		
		
		if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") 
		{
			sumaNumerosLetraVocal = sumaNumerosLetraVocal + numero;
		}

		
		if (contador == 1) 
		{
			numeroMaximo = numero;
			letraMaxima = letra;
		}
		else 
		{
			if (numero > numeroMaximo) 
			{
				numeroMaximo = numero;
				letraMaxima = letra;
			}
		}

		
		respuesta = prompt("¿Desea continuar?","Si/No")
	}
	

	promedio = sumaPositivos / cantidadPositivos;

	

	document.write("El promedio de numeros positivos es: " + promedio);
	
	document.write("<br>" + "La cantidad de numeros impares es: " + cantidadImpares);
	
	document.write("<br>" + "La suma de  todos los numer cuya letra es sido una vocal es: " + sumaNumerosLetraVocal);
	
	document.write("<br>" + "El numero maximo es: " + numeroMaximo + " y la letra con la que se ingreso es: " + letraMaxima);
}
