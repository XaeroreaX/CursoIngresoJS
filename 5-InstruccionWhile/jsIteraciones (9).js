function Mostrar()
{

		
	var contador=1; //declaramos variables
	var menor;
	var mayor;
	var numero = 0;
	var respuesta ;

	
	respuesta = confirm("quiere ingresar otro numero?");//mientraz mas opciones mejor
	while(respuesta == true)
	{

		

		numero = prompt("ingrese el numero "+contador);
		numero = parseInt(numero);
		if(contador==1)// la mejor forma objetibamente hablando de inicializar los maximos y minimos 
		{
			mayor = numero;
			menor = numero;
		}
		else
		{

			if(numero < menor) 
				menor = numero;
							
			if(numero>mayor)
				mayor = numero;
			//aca sacamos los mayores y los minimos de cada ingreso de numero


		}//if(contador==1)
		
		

		contador++;
		respuesta = confirm ("quiere ingresar otro numero?");//confirm para salir del while
		
	}//while(respuesta == true)
	


	document.getElementById('maximo').value = mayor;// mostra por pantalla
	document.getElementById('minimo').value = menor;


}//FIN DE LA FUNCIÓN