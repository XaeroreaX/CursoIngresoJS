/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
	numeroSecreto = parseInt(numeroSecreto);
	numeroSecreto = Math.floor((Math.random() * 100) + 7);
		//alert(numeroSecreto );
		console.log(numeroSecreto); //aqui ves una variable en la consola
	contadorIntentos=0;
	document.getElementById('intentos').value=contadorIntentos;
}

function verificar()
{
	// crear contador
	contadorIntentos=contadorIntentos+1;
	// mostrar en los id
	document.getElementById('intentos').value=contadorIntentos;
	var numeroIngresado= document.getElementById('numero').value;
	// calcular para darle pistas al usuario
	if(numeroSecreto==numeroIngresado)
	{
		alert("son un genio");
	}
	else
	{
		if(numeroSecreto>numeroIngresado)
		{
			alert("falto un toque");
		}else
		{
			alert("te pasaste");
		}
	}
	
}