/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	//id importe
	var importe = document.getElementById("importe").value;
	importe = parseInt(importe) - ((parseInt(importe)*25)/100); // aca usamos la regla de 3 para estar seguros
	alert(importe);
}
