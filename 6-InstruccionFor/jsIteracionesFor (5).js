function Mostrar()
{

	var numero;
	for( ; ; )
	{
		numero = prompt("ingrese nuemero");
		numero = parseInt(numero); 
		document.write(numero+"</br>");
		if(numero == 9)
		{
			break;
		}

	}


}//FIN DE LA FUNCIÓN