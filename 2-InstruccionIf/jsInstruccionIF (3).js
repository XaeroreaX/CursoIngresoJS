function Mostrar()
{
//tomo la edad  
var Edad = document.getElementById("edad").value;

	if(parseInt(Edad)<=0)
	{
		alert("AVISO:ingrese bien la edad!")
	}
	else
	{
		if(parseInt(Edad)>=18)
		{
			alert("es mayor de edad");
		} // por vagancia copiamos y pegamos
		else
		{
			alert("es menor de edad");
		}
	}

}//FIN DE LA FUNCIÓN