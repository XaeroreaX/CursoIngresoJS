function Mostrar()
{
//tomo la edad  
var Edad = document.getElementById("edad").value;
	Edad = parseInt(Edad);
	if(Edad <= 0)
	{
		alert("AVISO:ingrese bien la edad!")
	}
	else
	{                                         //emplando if anidado               
		if(Edad >= 18)
		{
			alert("es mayor de edad");
		}                                     // por vagancia copiamos y pegamos
		else
		{
			alert("es menor de edad");
		}
	}

}//FIN DE LA FUNCIÓN