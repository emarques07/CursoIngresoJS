function Mostrar()
{
//tomo la edad  

 var edad;

 	edad=document.getElementById('edad').value;
 	if(edad<13)
 	{
 		alert("usted es un niño");
 	}
 	else
 	{
 		if(edad>18)
 		{
 			alert("es mayor");
 		}
 		else
 			alert("es adolecente");
 	}


}//FIN DE LA FUNCIÓN