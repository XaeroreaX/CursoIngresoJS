/*al presionar el botón pedir un número.
Mostar los numeros divisores 
desde el 1 al número ingresado, y mostrar
 la cantidad de numeros divisores encontrados.*/
function Mostrar()
{
	var cantidad = parseInt(cantidad);
	cantidad = 0;
	var Posiblesdivisores = 0;
	var numero = prompt("ingrese el numero que quiera saber sus divisores");
	numero = parseInt(numero);
	for(Posiblesdivisores = 0; Posiblesdivisores<=numero; Posiblesdivisores++)
	{

		if(numero%Posiblesdivisores == 0)
		{
			document.write("------------------"+Posiblesdivisores+"</br>");
			cantidad++;
		}

	}
	document.write("8--------"+cantidad+"--------D");

}//FIN DE LA FUNCIÓN