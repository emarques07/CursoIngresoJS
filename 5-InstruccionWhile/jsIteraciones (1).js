function Mostrar()
{
	//alert('iteración while');

	var numero=0;

	while(numero<10)
		{
			numero++;
			document.write("<br>" +numero);
		}

}//FIN DE LA FUNCIÓN



/*
si cambio de lugar el contador cuenta antes o despues del write
sin importar lo q halla q hacer  hay q: 
1- iniciar el contador en cero 
2- asignar la condicion siempre con < (cantidad de veces al lado de <)
3- la primer linea es el contador
contador++//contador = contador + 1;
*/