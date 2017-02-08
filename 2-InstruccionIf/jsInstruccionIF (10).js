function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom;
	notaRandom = parseInt(notaRandom);
	notaRandom = parseInt(Math.random() * 10)+1;
	if(notaRandom>7)
	{
		alert("Exelente la nota es: "+notaRandom+" APROBADO");
	}
	else
	{
		if(notaRandom>4)
		{
			alert("su nota es: "+notaRandom+" APROBADO");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN