function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta= true;//los valores de confirm
	var numero;

	respuesta = confirm("quiere seguir ingresando?aceptar/cancelar");
	while(respuesta == true)
	{
		numero = prompt("ingrese el numero");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador++;
		respuesta = confirm("quiere seguir ingresando?aceptar/cancelar"); 
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN