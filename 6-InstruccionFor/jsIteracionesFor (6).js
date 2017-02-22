function Mostrar()
{

	var numero;
	var num = parseInt(num);
	var cantPares = 0;
	numero = prompt("ingrese cuantos numero que quiera ingresar");

	for(num = 2; num <= numero; num=num+2)
	{
		document.write(num+"</br>");
		cantPares++;
		/*if(num%2==0)
		{
			document.write(num+"</br>");
			cantPares++;
		}*/
	}
	document.write(cantPares);

}//FIN DE LA FUNCIÓN