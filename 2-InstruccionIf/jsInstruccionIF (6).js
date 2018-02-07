function Mostrar()
{
//tomo la edad  

	var edad
	edad=document.getElementById('edad').value;
	if(edad<13)
		{
			alert("niño");
		}
		else
		{
			if(edad>18)
			{
				alert("mayor");
			}
			else
			{
				alert("adolecente");
			}
		}
	
	
}//FIN DE LA FUNCIÓN