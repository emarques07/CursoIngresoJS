function Mostrar()
{

	/*
	var importe;
	var dia=0;
	var maximo;
	var minimo;

		

		while(dia < 24)
		{
			importe=prompt("Ingrese un valor","0")
			importe=parseInt(importe);
			

			while(importe < 0)
			{
				alert("Ingrese un numero mayor a 0");
			}

				if(importe == 1)
				{
					maximo=importe;
				}
				else
				{
					if(importe>maximo)
					{
						maximo=importe;
					}
					else
					{
						minimo=importe;
					}
				}
		dia++;		
		}

	document.write("El mayor importe es: "+maximo);
	document.writh("El minimo importe es: "+minimo);
	*/




	var minimo;
	var maximo;
	var importe;
	var contadorDias = 0;

	while(contadorDias < 24)
	{
		importe = prompt("Ingrese el importe: ","0");
		importe = parseInt(importe);
		contadorDias++;

		while(importe <= 0)
		{
			alert("Ingrese un importe mayor a cero");
			importe = prompt("Ingrese el importe: ","0");
			importe = parseInt(importe);
		}

		if (importe == 1) 
		{
			maximo = importe;
			minimo = importe; 
		}
		else
		{
			if (importe > maximo)
			{
				maximo = importe+maximo;
			}
			if (importe < minimo) 
			{
				minimo = importe+minimo;
			}
		}

	}
	document.write("El mayor importe es: " + maximo);
	document.write("<br>"+"El minimo importe es: " + minimo);
	
}
