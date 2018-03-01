//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*
6-Realizar el algoritmo que al presionar el botón "Mostrar" pida el importe de las ventas 
(validar que sea mayor a 0,”cero”) de los 7 días de la semana por prompt (una por día),
 e informar cual fue el mayor importe y cuál fue el menor importe de venta
*/






function Mostrar()
{
	//alert("Funciona 6-iteraciones");

	var importe;
	var mayor;
	var menor;

	var dia=0;

	

	while(dia < 7) //ingrese importe
		{
			importe=prompt("Ingrese un importe","0");
			importe=parseInt(importe);

			while(importe <0 || isNaN(importe)) // verifico q sea mayor a 0
			{
				importe=prompt("Reingrese un importe mayor que 0","0");
				importe=parseInt(importe);

			}

			dia++; //cuento los dias

			if(dia == 1) //verifico importe mayor y menor
			{
				mayor=importe;
				menor=importe;
			}
			else
			{
				if(mayor < importe)
				{
					mayor=importe;
				}
				if(menor > importe)
				{
					menor=importe;
				}
			}
		}

	alert("El importe mayor fue: " + mayor + " El importe menor fue: " + menor); //doy imforme
	
}

