/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	//document.getElementById
	// valores
    var nombre = document.getElementById("elNombre").value;
    var edad = document.getElementById("laEdad").value;
	alert("Usted se llama "+nombre+" y tiene "+edad+" años"); //1er ejemplo de escribir variables en el alert 

}

