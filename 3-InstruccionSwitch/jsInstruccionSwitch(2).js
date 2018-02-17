function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	//alert (mesDelAño);

	switch(mesDelAño)
	{
		case "Diciembre":
		case "Enero":
		case "Febrero":
			alert("Ya pasamos el frio ahora hace calor");
			break;
		case "Marzo":
		case "Abril":
		case "Mayo":
			alert("falta para el invierno");
			break;
		case "Junio":
		case "Julio":
		case "Agosto":
			alert("abrigate que hace frio");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
			alert("primavera");
			break;
	}




}//FIN DE LA FUNCIÓN