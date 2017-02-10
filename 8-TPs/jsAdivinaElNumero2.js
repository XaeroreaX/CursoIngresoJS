/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto = parseInt(numeroSecreto);
	numeroSecreto =  Math.floor((Math.random() * 100) + 1);
	console.log(numeroSecreto); 	
		//alert(numeroSecreto );
	
	contadorIntentos = 0; // iniciando el contador
	document.getElementById("intentos").value = contadorIntentos;
	

}

function verificar()
{
	
	contadorIntentos = contadorIntentos + 1;
	console.log(contadorIntentos);
	document.getElementById("intentos").value = contadorIntentos;
	var numeroIngresado = document.getElementById('numero').value;

	if(numeroIngresado == numeroSecreto) //compararemos el numero ingresado
	{
		switch(contadorIntentos)
		{
			case 1:
				alert("usted es un Psíquico");
				break;
			case 2:
				alert("excelente percepción");
				break;
			case 3:
				alert("Esto es suerte");
				break;
			case 4:
				alert("Excelente técnica");
				break;
			case 5:
				alert("usted está en la media");
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert("falta técnica");
				break;
			default:
				alert("afortunado en el amor!!");


		}
	}
	else
	{
		if(numeroIngresado<numeroSecreto)
		{
			alert("Le falto un toque");
		}
		else
		{
			alert("te pasaste");
		}
	}
}