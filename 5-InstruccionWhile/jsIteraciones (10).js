
/*Al presionar el botón pedir números hasta que el usuario quiera, mostar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/

function Mostrar()
{
	//cotador
	var contador=0;
	
	//el numero a ingresar
	var numero;

	//variables a mostrar
	var acumNegativo = 0;
	var acumPositivo = 0;
	var cantPositivos = 0;
	var cantNegativos = 0;
	var cant0=0;
	var cantPares = 0;
	var promPositivo;
	var promNegativo
	var Diferencia;
	var valida;
	 
	//confirmacion
	var respuesta=true;

	while(respuesta == true)
	{
		numero = prompt("ingresar un numero "+contador);
		numero = parseInt(numero);
		
		valida = isNaN(numero);
		while(valida==true)
		{
			alert("no es un un numero, ANIMAL!");
			numero = prompt("ingresar un numero "+contador);
			numero = parseInt(numero);
			valida = isNaN(numero);
		}
		if(numero == 0)
		{
			cant0++;
		}
		else
		{
			if(numero>0)
			{
				acumPositivo = acumPositivo + numero;
				cantPositivos++;
			}
			else
			{
				acumNegativo = acumNegativo + numero;
				cantNegativos++;
			}

			if(numero%2 == 0)
			{
				cant0++;
			}
		}

		respuesta = confirm("quiere seguir ingresando?!!!");
		contador++;
	}//while(respuesta = true)

	//PROMEDIAR
	Diferencia = acumPositivo + acumNegativo;
	promPositivo = acumPositivo/cantPositivos;
	promNegativo = acumNegativo/cantNegativos;
	document.write("La suma de los positivos: "+acumPositivo+"</br>la suma de las negativos: "+acumNegativo+"</br> cantidad de positivos:"+cantPositivos+"</br> cantidad de negativos:"+cantNegativos+"</br> cantidad de ceros:"+cant0+"</br> cantidad de numeros pares:"+cantPares+"</br> cantidad de numeros pares:"+cantPares+"</br> promedio de positivos:"+promPositivo+"</br> promedio de negativos:"+promNegativo+"</br>Diferencia entre positivos y negativos"+Diferencia);

}//FIN DE LA FUNCIÓN
/*Al presionar el botón pedir números hasta que el usuario quiera, mostar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/