
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
	 
	//confirmacion
	var respuesta=true;

	while(respuesta = true)
	{
		numero = prompt("ingresar un numero "+contador);
		numero = parseInt(numero);
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
				cant0++
			}
		}



		contador++;
	}//while(respuesta = true)

	//PROMEDIAR
	Diferencia = acumPositivo + acumNegativo;
	promPositivo = acumPositivo/cantPositivos;


}//FIN DE LA FUNCIÓN