function Mostrar()
{
//tomo la edad  

	var Edad = document.getElementById("edad").value;
	Edad = parseInt(Edad);
	if(Edad <= 0)//bloqueamos edades incoherentes
	{
		alert("AVISO:ingrese bien la edad!");
	}
	else
	{    
		if(Edad>=18)//preguntamos si es mayor de edad
		{
			alert("es mayor de edad");
		}
		else
		{
			if(Edad >= 13)//preguntamos si es adolecente
			{
				alert("es adolescente");
			}
			else//aca los ponemos como niño por defecto
			{
				alert("es un niño");
			}
		}
		
	}
 
}//FIN DE LA FUNCIÓN