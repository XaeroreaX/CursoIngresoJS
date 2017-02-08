function Mostrar()
{//tomo la edad
	  

	var Edad = document.getElementById("edad").value;
	if(parseInt(Edad)<=0)
		{
			alert("AVISO:ingrese bien la edad!");
		}
		else
		{
			if(parseInt(Edad)>=13 && parseInt(Edad)<=17)
			{	
				alert("es adolescente");
			}
			else
			{
				alert("no es adolescente");
			}	
		}
}//FIN DE LA FUNCIÓN