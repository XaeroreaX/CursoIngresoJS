function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño) //un copypaste del ejercicio anterior
	{
		
	    case "Febrero":
	      	alert(" Este mes no tiene más de 29 días.");
	    break;
	    case "Enero":
	    case "Mayo":
	    case "Abril":
	    case "Marzo":
	    case "Junio":
	   	case "Julio":
	    case "Agosto":
	    case "Septiembre":
	    case "Octubre":
	    case "Noviembre":
	    case "Diciembre":
	      	alert("Este mes tiene 30 o más días");
	   	break;
	}


}//FIN DE LA FUNCIÓN