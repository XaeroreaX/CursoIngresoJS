function Mostrar()
{
	var contador=parseInt(contador);
	contador=1;
	var acumulador=parseInt(acumulador);
	acumulador=0;
	var numero;
	while(contador<=5)
	{
		numero = prompt("ingrese el numero ");//el prompt toma solo texto!!!
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador++;
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN