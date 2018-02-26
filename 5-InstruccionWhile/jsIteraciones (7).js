function Mostrar()
{
	/*
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta == 'si')
	{
		//var numero;

		numero = prompt("Ingrese un numero","0");

		numero = parseInt(numero);

		acumulador = acumulador + numero;

		respuesta = prompt("¿Desea continuar la suma?:","si/no");

		contador++;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
	*/







	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var	numero;

	while(respuesta=="si")
		{
			numero=prompt("Ingrese un numero");
			numero=parseInt(numero);
			respuesta=prompt("Desea seguir sumando ", "Si/No");
			acumulador= numero+acumulador;
			contador++;
		}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;













}//FIN DE LA FUNCIÓN