function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var num

	num=Math.floor((Math.random()*10)+1);

	if(num<=3)
	{
		alert("vamos la proxima se puede "+num);
	}

		else if(num<=8)
		{
		 	alert("aprobo "+num);
		}
			else if(num>=9)
				{
				alert("Exelente "+num);
				}


}//FIN DE LA FUNCIÓN