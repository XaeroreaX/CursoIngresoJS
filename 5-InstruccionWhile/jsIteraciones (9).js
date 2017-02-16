function Mostrar()
{

		
	var contador=1; //declaramos variables
	var menor;
	var mayor;
	var numero = 0;
	var respuesta ;



	respuesta = confirm("quiere ingresar un numero?");//entrar con confirmar si quiere ingresar un numero
	if(respuesta = true)
	{
		numero=prompt("ingrese el numero "+contador);
		numero = parseInt(numero);
		//inicializar los contadores
		mayor = numero;
		menor = numero;


		respuesta = confirm("quiere ingresar otro numero?");//mientraz mas opciones mejor
		while(respuesta == true)
		{

			contador++

			numero = prompt("ingrese el numero "+contador);
			numero = parseInt(numero);
		   
		
			if(numero < menor) //aca sacamos los mayores y los minimos de cada ingreso de numero
			{
				menor = numero;
			}
			else
			{
				if(numero>mayor)
					mayor = numero;
			}
		


			respuesta = confirm ("quiere ingresar otro numero?");//confirm para salir del while
		
		}
	}


	document.getElementById('maximo').value = mayor;// mostra por pantalla
	document.getElementById('minimo').value = menor;


}//FIN DE LA FUNCIÓN