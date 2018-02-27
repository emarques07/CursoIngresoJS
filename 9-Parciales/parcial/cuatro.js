function Mostrar()
{ /*
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
			
		}
		else
		{
			if(numUno > numDos)
			{
				resultado=(numUno-numDos);
			}
			else
			{
				resultado=(numUno+numDos)
			}

			
		}

	document.write("El resultado es: "+resultado);
	
}	//vamos a ingresar 3 numero y vamos a imformar cual es el mayor

	*/
	var numeUno;
	var numeDos;
	var numeTres;

	var mayor;
	var menor;

	numeUno=prompt("Ingrese un numero: ");
	numeUno=parseInt(numeUno);

	numeDos=prompt("Ingrese un numero: ");
	numeDos=parseInt(numeDos);

	numeTres=prompt("Ingrese un numero: ");
	numeTres=parseInt(numeTres);

		if (numeUno == numeDos && numeUno == numeTres)

			{
				alert("los numeros son iguales: "+ numeUno + numeDos + numeTres);
			} 
			else
			{
				if(numeUno >= numeDos && numeUno >= numeTres)
				{
					mayor=numeUno;
					alert("el maximo es: " +mayor);

				}
				if(numeDos >= numeUno && numeDos >= numeTres)
				{
					mayor=numeDos;
					alert("el maximo es: " +mayor );
				}
				if(numeTres >= numeDos && numeTres >= numeUno )
				{
					mayor=numeTres
					
				}

			}
		if(numeUno <= numeDos && numeUno <= numeTres)
			{

			}
}



				//10-2-3




















/*
333
321
123
231   asi testeo
*/