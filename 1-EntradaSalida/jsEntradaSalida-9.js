/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	/*
	var sueldo;
	var sueldoConAumento;
	sueldo=100;
	sueldoConAumento= sueldo*1.1;
	*/




	var sueldo
	var sueldoConAumento

	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	sueldoConAumento=parseInt(sueldoConAumento);
	sueldoConAumento=sueldo*1.1;
	document.getElementById('resultado').value=sueldoConAumento;
}
