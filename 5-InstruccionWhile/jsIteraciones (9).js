function Mostrar()
{

		
	var contador=1; //declaramos variables
	var menor;
	var mayor;
	var numero = 0;
	var respuesta ;
	respuesta = confirm("quiere ingresar un numero?");//entrar con confirm
	if(respuesta = true)
	{
		numero=prompt("ingrese el numero "+contador);
		numero = parseInt(numero);
		mayor = numero;
		menor = numero;
		respuesta = confirm("quiere ingresar otro numero?");
		while(respuesta == true)
		{
			contador++
			numero = prompt("ingrese el numero "+contador);
			numero = parseInt(numero);
		   
		
			if(numero < menor) //acumular los negativos y lo positivos por separado
			{
				menor = numero;
			}
			else
			{
				if(numero>mayor)
					mayor = numero;
			}
		


			respuesta = confirm ("quiere ingresar otro numero?");
		
		}
	}
	document.getElementById('maximo').value = mayor;
	document.getElementById('minimo').value = menor;


}//FIN DE LA FUNCIÓN