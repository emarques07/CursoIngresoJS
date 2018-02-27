function Mostrar()
{
	/*
  	var importe

  	importe = prompt("Ingrese importe");
  	document.getElementById('importeFinal').value=importe*1.21;
	*/
//1 solo cuandro de texto por donde vamos a mostrar el resultado
//		pedir precio
//		y % de descuento q se va hacer
//		mostrar importe final





	var importe;
	var descuento;
	var precioFinal;
	var precioBruto;


	importe=prompt("Ingrese importe: "," ");
	importe=parseInt(importe);

	descuento=prompt("Ingrese un descuento: "," ");
	descuento=parseInt(descuento);

	precioBruto=importe;
	precioFinal=(precioBruto*descuento/100)


	alert("El importe con el es: "+precioFinal);
}




