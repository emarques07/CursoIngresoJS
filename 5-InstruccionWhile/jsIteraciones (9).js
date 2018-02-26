function Mostrar()
{
	/*
	var contador=0;
	var maximo;
	var minimo;
	var numero;
	// declarar variables
	var respuesta='si';

		while(respuesta!='no')
		{
		   contador++;
		   numero=prompt("Ingresar numero: ","0");
		   numero=parseInt(numero);

		   		if(contador==1)
		   			{
		   				maximo=numero;
		   				minimo=numero;
		   			}
		   			else
		   				{
		   					if(numero>maximo)
		   					{
		   						maximo=numero;
		   					}
		   					if(numero<minimo)
		   					{
		   						minimo=numero;
		   					}
		   				}

		   respuesta=prompt("¿Desea Ingresar otro numero?","Si/No");						
		}

		document.getElementById('maximo').value=maximo;
		document.getElementById('minimo').value=minimo;
		*/




		var contador=0;
		var numero;
		var maximo;
		var minimo;
		var respuesta="si";


			while(respuesta !="no")
				{
					contador++;
					numero=prompt("Ingrese un numero: ","0");
					numero=parseInt(numero);

					if(contador==1)
						{
							maximo=numero;
							minimo=numero;
						}
						else
						{
							if(numero>maximo)
							{
								maximo=numero;
							}
							if(numero<minimo)
							{
								minimo=numero;
							}
						}
			    respuesta=prompt("¿Desea Ingresar otro numero?","Si/No");
				}

		document.getElementById('maximo').value=maximo;
		document.getElementById('minimo').value=minimo;






































}//FIN DE LA FUNCIÓN