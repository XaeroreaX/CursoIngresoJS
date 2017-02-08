/*Al ingresar una edad solo debemos informar si la persona NO es adolescente.*/
function Mostrar()
{
//tomo la edad  
	var Edad = document.getElementById("edad").value;
	Edad = parseInt(Edad);
	if(Edad <= 0)
	{
		alert("AVISO:ingrese bien la edad!");
	}
	else
	{    
		if(Edad < 13 || Edad > 17) // me confundi con el or
			alert("no es adolescente");
		
	}
}//FIN DE LA FUNCIÓN