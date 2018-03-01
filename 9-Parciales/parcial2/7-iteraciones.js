//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*
7-Realizar el algoritmo que al presionar el botón "Mostrar" pida por prompt las notas 
(validar entre 0 y 10) y el sexo(validar el sexo “f” o “m”) de 6 alumnos, informar por alert: 
a) el promedio de las notas totales. 
b) la nota más baja. 
c) la cantidad de varones que su nota haya sido mayor o igual a 6.
*/

function Mostrar()
{
	//alert("Funciona 7-iteraciones");
	
	var nota;
	var sexo;
	var notaMayor;
	var notaMenor;
	var promedio;

	var cantidadVarones=0;
	var sumaNotas=0;
	var contador=0;
 
		while(contador < 6) // ingreso notas
			{
				nota=prompt("Ingrese una nota: ","0");
				nota=parseInt(nota);

				while(nota <0 || nota > 10 || isNaN(nota)) // valido nota
				{
					nota=prompt("Reingrese una nota mayor a 0 o menor a 10: ","0");
					nota=parseInt(nota);
				}

				sexo=prompt("Ingrese un sexo: ","(f/m)"); //ingreso sexo

				while(sexo !== "f" && sexo !== "m")   //valido sexo
				{
					sexo=prompt("Ingrese un sexo valido: ","(f/m)");
				}

				contador++;   //cuento cantidad

				sumaNotas=sumaNotas+nota; // suma notas
				


				if(contador == 1)
				{
					notaMayor=nota;
					notaMenor=nota;
				}
				else
				{
					if(notaMayor < nota)
					{
						notaMayor=nota;
					}
					if(notaMenor > nota)
					{
						notaMenor=nota;
					}
				}
				if(sexo == "m" && nota >= 6)
				{
					cantidadVarones++;
				}
			}

			promedio=sumaNotas/contador;

	document.write("El promedio de las notas totales es: " + promedio);
	document.write("<br>" + "La nota mas baja es: " + notaMenor);
	document.write("<br>" + "la cantidad de varones con notas mayor o igual a 6 son: " + cantidadVarones);



















}

