function Mostrar()
{
//tomo la edad  
	var edad = document.getElementById("edad").value;
	var ECivil = document.getElementById("estadoCivil").value;
	if(parseInt(edad) >= 18 && ECivil == "Soltero")
		alert("Es soltero y no es menor.")
	


}//FIN DE LA FUNCIÓN