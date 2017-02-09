/*
Al ingresar una hora, informar: 
si está entre las 7 y las 11 : "Es de mañana.".*/
function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

//alert (laHora);
	
	switch(parseInt(laHora)) //hay que pasarlo a entero como el if
	{
		case 7:
	      	alert("Es de mañana.");
	    break;

		case 8:
	      	alert("Es de mañana.");
	    break;

		case 9:
	      	alert("Es de mañana.");
	    break;

		case 10:
	      	alert("Es de mañana.");
	    break;

		case 11:
	      	alert("Es de mañana.");
	    break;
	    default:
	    	alert("no es mañana.");
	}	    



}//FIN DE LA FUNCIÓN