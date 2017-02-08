function Mostrar()
{
//tomo la edad  
// Id: edad y estadoCivil
	var edad = document.getElementById("edad").value;
	var ECivil = document.getElementById("estadoCivil").value;
	if(parseInt(edad) <= 18 && ECivil != "Soltero")
		alert("Es muy pequeño para NO ser soltero.");
}//FIN DE LA FUNCIÓN