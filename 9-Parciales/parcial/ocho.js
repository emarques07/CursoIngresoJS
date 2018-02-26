
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
	*/












	/*
ingreso de alumnos, no sabemos cuantos alumons hay.
Se pide el nombre(del pizarron)
Saber cunatos alumnos ingrese
document.write("Se ingresaron tsantos alumnos(9)")
1-cantidad
2-promedio total
3-cantidad de mujeres(4)
4-cantidad hombres(5)
5-cantidad de varones desaprobados(1)
6-nombre de la mejor nota(maria) sacar maximo nombreMaximo = nombre a traves del valor de la nota
7-promedio de la nota de las mujeres
8-sexo del menor de edad - edad >0 && <100
9-promedio de las edades de los aprobados
10-cantidad de notasa pares
11-cantidad de notasa impares
1-maria ------ nota: 10 -- edad: 20
2-jose ------- nota: 0 --- edad: 30
3-gabriela --- nota: 2 --- edad: 40
4-martin ----- nota: 5 --- edad: 17
5-edi -------- nota: 6 --- edad: 30
6-axel ------- nota: 9 --- edad: 40
7-flor ------- nota: 0 --- edad: 25
8-lucas ------ nota: 4 --- edad: 33
9-lidia ------ nota: 7 --- edad: 37
*/

{
	//defino variables
	var nombre;
	var nota;
	var sexo;
	var edad;

	//contadores
	var cantidadMujeres = 0;
	var cantidadHombres = 0;
	var cantidadHombresDesaprobados = 0;
	var cantidadNotaMujeres = 0;
	var sumadorNotasMujeres = 0;
	var contadorEdadesAprobados = 0;
	var cantidadNotasPares = 0;
	var cantidadNotasImpares = 0;

	var notaMaxima;
	var nombreMaximo;

	var edadMinimo;
	var sexoEdadMinimo;

	var promedio;
	var promedioEdadAprobadas;
	var sumaEdadNotasAprobadas = 0;
	var sumaNotas = 0;
	var cantidad = 0;
	var seguir = "";


	while(seguir != "no")
	{
		nombre = prompt("Ingrese el nombre del alumno: ");
		nota = prompt("Ingrese la nota: ","0");
		nota = parseInt(nota);

		//valido nota
		while(nota < 0 || nota > 10 || isNaN(nota))
		{
			alert("Ingrese una nota entre 0 y 10");
			nota = prompt("Ingrese la nota: ","0");
			nota = parseInt(nota);
		}

		//1-sumo todas las notas y la cantidad q ingreso
		sumaNotas = sumaNotas + nota; 
		cantidad++;

		//ingreso sexo
		sexo = prompt("Ingrese el sexo: ","f/m");

		//valido sexo
		while(sexo !== "f" && sexo !== "m" || !isNaN(sexo))
		{
			alert("Debe ingresar 'f' o 'm'");
			sexo = prompt("Ingrese el sexo: ","f/m");
		}

		//ingreso edades
		edad = prompt("Ingrese la edad: ","0");
		edad = parseInt(edad);

		while(edad < 0 || edad > 100)
		{
			alert("Ingrese una edad entre 0 y 100")
			edad = prompt("Ingrese la edad: ","0");
			edad = parseInt(edad);
		}

		//3-4-cuento f y m
		if(sexo == "f")
		{
			cantidadMujeres++;
		}
		else
		{
			cantidadHombres++;
		}

		//5-cuento hombres desaprobados
		if (sexo == "m" && nota < 4)
		{
			cantidadHombresDesaprobados++;
		}	

		//6-encuentro nombre nota maxima
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

		//7-sumo nota mujeres
		if (sexo == "f") 
		{
			cantidadNotaMujeres++;
			sumadorNotasMujeres = sumadorNotasMujeres + nota;
		}

		//8-encuentro sexo minimo de edad
		if (cantidad == 1) 
		{
			edadMinimo = edad;
			sexoEdadMinimo = sexo;
		}
		else
		{
			if (edad < edadMinimo)
			{
				edadMinimo = edad;
				sexoEdadMinimo = sexo;
			}
		}

		//9-promedio edad notas aprobadas
		if (nota > 3) 
		{
			contadorEdadesAprobados++;
			sumaEdadNotasAprobadas = sumaEdadNotasAprobadas + edad;
		}

		//10-11-cantidad notas pares y impares
		if (nota % 2 == 0 && nota != 0) 
		{
			cantidadNotasPares++;
		}
		else
		{
			if (nota != 0)
			{
				cantidadNotasImpares++;
			}
		}

		//ingresar otro alumno
		seguir = prompt("Ingrese 'no' para salir");

	}//while(seguir != "no")

	//promedio notas
	promedio = sumaNotas / cantidad;
	promedioEdadAprobadas = sumaEdadNotasAprobadas / contadorEdadesAprobados;

	//muestro resultados
	//1
	document.write("Se ingresaron " + cantidad + " de alumnos");
	//2
	document.write("<br>" + "El promedio de las notas es: " + promedio);
	//3
	document.write("<br>" + "La cantidad de mujeres es: " + cantidadMujeres);
	//4
	document.write("<br>" + "La cantidad de hombres es: " + cantidadHombres);
	//5
	document.write("<br>" + "La cantidad de hombres aprobados es: " + cantidadHombresDesaprobados);
	//6
	document.write("<br>" + "El alumno con la mayor nota es: " + nombreMaximo);
	//7
	document.write("<br>" + "La suma de la nota de las mujeres es: " + sumadorNotasMujeres);
	//8
	document.write("<br>" + "El sexso del menor de edad es: " + sexoEdadMinimo);
	//9
	document.write("<br>" + "El promedio de las edades de los aprobados es: " + promedioEdadAprobadas);
	//10
	document.write("<br>" + "La cantidad de notas pares es: " + cantidadNotasPares);
	//11
	document.write("<br>" + "La cantidad de notas pares es: " + cantidadNotasImpares);
}
