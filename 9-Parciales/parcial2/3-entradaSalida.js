//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 3-EntradaSalida");

	var largo;
	var ancho;
	var alambre;

		largo=document.getElementById('largo').value;
		ancho=document.getElementById('ancho').value;
		largo=parseInt(largo);
		ancho=parseInt(ancho);

		alambre=(((largo+ancho)*2)*6);

		alert("Los metros necesarios de alambre son: " + alambre);
	
}

