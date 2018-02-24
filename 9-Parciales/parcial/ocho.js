
/*
lo que vamos hacer es un ingreso de alumnos no sabemos, cuantos
 alumnos hay, lo que vamos a pedir es el nombre, lo que quiero
 saber es cuantos alumnos ingrese.

1 cantidad
2 promedio total
3 cantidad de mujeres (4)
4 cantidad de varones (5)
5 cantidad de varones desaprobados (1)
6 nombre de la mejor nota 
7 promedio de las mujeres
8 sexo del menor de edad
9 promedio de las edades de los aprobados
10 cantidad de notas pares 4
11 cantidad de notas impares 3

 nombres:
		notas: 		edad:

 maria	   10		  20
 jose	    0		  30
 gabriela	2		  40
 martin		5	      17
 edi	    6	      30
 axel	    9         40
 flor	    0	      25
 lucas	    4         33
 lidia	    7         37

*/

function Mostrar()
{
	/*
	var nombre;
	var cantidad = +1;
	var respuesta = "";
	var nota;
	var promedio;
	var sumaNotas = 0;
	var contadorNotas = 0;

	while(respuesta != "no")
		{
			nombre = prompt("ingrese el nombre del alumno:");
			cantidad = cantidad +1;
			respueta = prompt("NO para salir ");	
			nota=prompt("ingrese la nota ", "0");
			nota=parseInt(nota);
			sumaNotas= sumaNotas+nota;
		}	


	document.write("son " + cantidad + "de alumnos");
	*/

	//defino variables
	var nombre;
	var nota;
	var sexo;
	var cantidadMujeres = 0;
	var cantidadHombres = 0;
	var cantidadHombresDesaprobados = 0;
	var notaMaxima;
	var nombreMaximo;
	var promedio;
	var sumaNotas = 0;
	var cantidad = 0;
	var seguir = "";


	while(seguir != "no")
	{
		nombre = prompt("Ingrese el nombre del alumno: ");
		nota = prompt("Ingrese la nota: ","0");
		nota = parseInt(nota);

		//valido nota
		while(nota < 0 || nota > 10 )
		{
			alert("Ingrese una nota entre 0 y 10");
			nota = prompt("Ingrese la nota: ","0");
			nota = parseInt(nota);
		}

		//sumo todas las notas y la cantidad q ingreso
		sumaNotas = sumaNotas + nota; 
		cantidad++;

		//ingreso sexo
		sexo = prompt("Ingrese el sexo: ","f/m");

		//valido sexo
		while(sexo !== "f" && sexo !== "m")
		{
			alert("Debe ingresar 'f' o 'm'");
			sexo = prompt("Ingrese el sexo: ","f/m");
		}

		//cuento f y m
		if(sexo == "f")
		{
			cantidadMujeres++;
		}
		else
		{
			cantidadHombres++;
		}

		//cuento hombres desaprobados
		while(sexo == "m" && nota < 4)
		{
			cantidadHombresDesaprobados++;
		}	

		//encuentro nota maxima
		if (cantidad == 1) 
		{
			notaMaxima = nota;
			nombreMaximo = nombre;
		}
		else
		{
			if (nota > notaMaxima)
			{
				notaMaxima = nota;
				nombreMaximo = nombre;
			}
		}



		//ingresar otro alumno
		seguir = prompt("Ingrese 'no' para salir");

	}//while(seguir != "no")

	//promedio notas
	promedio = sumaNotas / cantidad;

	//muestro resultados
	document.write("Se ingresaron " + cantidad + " de alumnos");
	document.write("<br>" + "El promedio de las notas es: " + promedio);
	document.write("<br>" + "La cantidad de mujeres es: " + cantidadMujeres);
	document.write("<br>" + "La cantidad de hombres es: " + cantidadHombres);
	document.write("<br>" + "La cantidad de hombres aprobados es: " + cantidadHombresDesaprobados);
	document.write("<br>" + "El alumno con la mayor nota es: " + nombreMaximo);
}
