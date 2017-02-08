function Mostrar()
{//tomo la edad
	  

	var Edad = document.getElementById("edad").value;
	Edad = parseInt(Edad);
	if(Edad <= 0)
		{
			alert("AVISO:ingrese bien la edad!");
		}
		else
		{                                         //emplando if anidado
			if(Edad >= 13 && Edad <= 17)
			{	
				alert("es adolescente");
			}
			else
			{
				alert("no es adolescente");
			}	
		}
}//FIN DE LA FUNCIÓN