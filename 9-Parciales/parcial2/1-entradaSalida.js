//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 1-EntradaSalida");

	var base;

	base=document.getElementById('lado').value;
	base=parseInt(base);
	alert("El perimetro del triangulo es: " + (base*3));
	
}

