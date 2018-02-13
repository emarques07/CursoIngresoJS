function Mostrar()
{
	var largo;
	var ancho;
	var resultado;

	largo = document.getElementById('alrgo').value;
	ancho = document.getElementById('ancho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	resultado = largo + ancho;

	alert("Cantidad necesaria de alambre: "+ resultado*6);

}
