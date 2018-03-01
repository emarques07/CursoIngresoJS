//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 2-EntradaSalida");


	var importe;
	var importeFinal;

	importe=prompt("Ingrese un importe: ","0");
	importe=parseInt(importe);

	importeFinal = importe*1.21;
	alert("El importe con el 21% de iva es: " + importeFinal);
	
}

