/*al seleccionar un mes informar. 
si tiene 28 días. 
si tiene 30 días. 
si tiene 31 días.*/

function Mostrar()
{
	//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	//alert (mesDelAño);

	switch(mesDelAño) //un copypaste del ejercicio anterior
	{
		case "Enero":
	      	alert("tiene 31 días.");
	    break;
	    case "Febrero":
	      	alert("tiene 28 días");
	    break;
	    case "Mayo":
	      	alert("tiene 31 días.");
	    break;
	    case "Abril":
	      	alert("tiene 30 días.");
	    break;
	    case "Marzo":
	      	alert("tiene 31");
	    break;
	    case "Junio":
	      	alert("tiene 30 días.");
	    break;
	   	case "Julio":
	      	alert("tiene 31 días.");
	    break;
	    case "Agosto":
	      	alert("tiene 31 días.");
	    break;
	    case "Septiembre":
	      	alert("tiene 30 días.");
	    break;
	    case "Octubre":
	      	alert("tiene 31 días.");
	    break;
	    case "Noviembre":
	      	alert("tiene 30 días.");
	    break;
	    case "Diciembre":
	      	alert("tiene 31 días.");
	    break;
	}		



}//FIN DE LA FUNCIÓN