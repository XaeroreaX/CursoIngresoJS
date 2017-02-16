function Mostrar()
{

	var contador=1; //declaramos variables
	var positivo=0;
	var negativo=0;
	var numero = 0;
	var respuesta;
	respuesta = confirm("quiere ingresar un numero?");//entrar con confirm
	while(respuesta == true)
	{
		numero=prompt("ingrese el numero "+contador);
		numero = parseInt(numero);
		if(numero != 0)   //escluir el 0
		{
			if(numero < 0) //acumular los negativos y lo positivos por separado
			{
				negativo = negativo + numero;
			}
			else
			{
				positivo = positivo + numero;
			}
		}


		respuesta = confirm ("quiere ingresar otro numero?");
		contador++
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo; //mostrar por pantalla

}//FIN DE LA FUNCIÓN