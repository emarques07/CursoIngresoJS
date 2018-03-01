//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*
8-Realizar el algoritmo que al presionar el botón "Mostrar" permita ingresar números positivos 
(validar que sea positivo) hasta que el usuario quiera. 

Informar al terminar el ingreso por document.write: 

a) la cantidad de números pares. 
b) el promedio de todos los números ingresados. 
c) la suma de todos los números. 
d) El número máximo y el mínimo. 
*/
function Mostrar()
{
	//alert("Funciona 8-iteraciones");

	var numero;
	var maximo;
	var mínimo;
	var promedio;
	
	var sumaTotal=0;
	var numeroPar=0;
	var contador=0;	
	var respuesta="si";

		while(respuesta !== "no")	//ingreso numeros
			{
				numero=prompt("Ingrese un numero positivo: ","0");
				numero=parseInt(numero);

				while(numero < 0 || isNaN(numero))	//valido q sea positivo
				{
					numero=prompt("Ingrese un numero positivo: ","0");
					numero=parseInt(numero);
				}

				contador++;  //cuento
				sumaTotal = sumaTotal + numero; // suma total (C)

				if(numero %2 == 0) //cantidad numeros par (A)
				{
					numeroPar++;
				}

				if(contador == 1) // mayor y menor(D)
				{
					maximo=numero
					minimo=numero
				}
				else
				{
					if(maximo < numero)
					{
						maximo=numero;
					}
					if(minimo > numero)
					{
						minimo=numero;
					}
				}

				respuesta = prompt("Desea continuar: ","si/no");
			}
	
	promedio = sumaTotal/contador; // promedio (B)

	document.write("La cantidad de numeros pares es: " + numeroPar);
	document.write("<br>"+"El promedio de los numeros ingresados es: " + promedio);
	document.write("<br>"+"La suma de todos los numeros es: " + sumaTotal);
	document.write("<br>"+"El numero maximo es: " + maximo);
	document.write("<br>"+"El numero minimo es: " + minimo);














	
}

