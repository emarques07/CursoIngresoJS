
function Mostrar()
{
	/*
	var base;

	base = document.getElementById('laBase').value;

	alert("El perimetro es: "+ base*4);
	*/




	var base;
	var altura;
	var superficie;
	var perimetro;

	altura=prompt("ingrese la altura:","0");
	altura=parseInt(altura);
	base=document.getElementById('laBase').value;
	base=parseInt(base);

	perimetro= base*3;
	superficie= (base*altura/3);

	alert("La superficie es: "+superficie);
	alert("el perimetro es: "+perimetro);


}
	//triangulo	equilatero ; perimetro , superficie

		//1 solo cuandro de texto por donde vamos a mostrar el resultado
		//pedir precio
		//y % de descuento q se va hacer
		//mostrar importe final
