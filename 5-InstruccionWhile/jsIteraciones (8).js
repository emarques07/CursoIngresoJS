function Mostrar()
{
	/*
	var contador=0;
	var positivo=0;
	var negativo=1;
    var respuesta='si';
    var numero;

    while(respuesta=="si")
    	{
    		numero=prompt("Ingrese un numero: ","0");
    		numero=parseInt(numero);

    		while(numero>0)
    		{
    			positivo=positivo+numero;
    			break;
    		}

    		while(numero<0)
    		{
    			negativo=negativo*numero;
    			break;
    		}

    		respuesta=prompt("¿Desea continuar la cuenta? ","Si/No");
    		contador++;
    	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;
	*/




	var contador=0;
	var positivo=0;
	var negativo=1;
    var respuesta='si';
    var numero;

    while(respuesta=="si")
    	{
    		numero=prompt("Ingrese un numero: ","0");
    		numero=parseInt(numero);

    		if(numero>0)
    		{
    			positivo=positivo+numero;
    			
    		}

    		else
    		{
    			negativo=negativo*numero;
    			
    		}

    		respuesta=prompt("¿Desea continuar la cuenta? ","Si/No");
    		contador++;
    	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;








}//FIN DE LA FUNCIÓN