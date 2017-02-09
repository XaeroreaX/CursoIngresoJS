/*al seleccionar un mes informar. 
si estamos en Invierno: "Abrigate que hace frio." 
si aún no llego el Invierno: "Falta para el invierno." 
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!." 
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/

function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño) //cada case para cada mes
{
	case "Enero":
      	alert("Ya pasamos el frio, ahora calor!!!.");
    break;
    case "Febrero":
      	alert("Ya pasamos el frio, ahora calor!!!.");
    break;
    case "Mayo":
      	alert("Falta para el invierno.");
    break;
    case "Abril":
      	alert("Falta para el invierno.");
    break;
    case "Marzo":
      	alert("Ya pasamos el frio, ahora calor!!!.");
    break;
    case "Junio":
      	alert("Falta para el invierno.");
    break;
   	case "Julio":
      	alert("Abrigate que hace frio.");
    break;
    case "Agosto":
      	alert("Abrigate que hace frio.");
    break;
    case "Septiembre":
      	alert("Abrigate que hace frio.");
    break;
    case "Octubre":
      	alert("Ya pasamos el frio, ahora calor!!!.");
    break;
    case "Noviembre":
      	alert("Ya pasamos el frio, ahora calor!!!.");
    break;
    case "Diciembre":
      	alert("Ya pasamos el frio, ahora calor!!!.");
    break;
}




}//FIN DE LA FUNCIÓN