/*al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"*/
function Mostrar()
{
	var i;
	var repetciones = prompt("ingrese el número de repeticiones");
	repetciones = parseInt(repetciones);
	for(i = 0; i < repetciones; i++)
		alert("Hola UTN FRA");
	



}//FIN DE LA FUNCIÓN