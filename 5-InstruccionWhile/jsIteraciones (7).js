function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;


	while(respuesta == 'si' || respuesta == 'SI')
	{
		numero = prompt("ingrese el numero");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador++;
		respuesta = prompt("quiere seguir ingresando?(en minuscual)");

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN