function Mostrar()
{
var precio1, precio2, precio3;
var resultado;
var promedio;

precio1=document.getElementById('precioUno').value;
precio2=document.getElementById('precioDos').value;
precio3=document.getElementById('precioTres').value;

precio1=parseInt(precio1);
precio2=parseInt(precio2);
precio3=parseInt(precio3);

resultado=precio1+precio2+precio3;
promedio=resultado/3;

alert("la suma de los precios es: " + resultado+ " El promedio es " +promedio);
} 
