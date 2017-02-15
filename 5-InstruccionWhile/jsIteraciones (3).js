function Mostrar()
{
	//alert("hola");	
	var clave = prompt("ingrese el número clave a ingresar.");
	var intentos = 0;
	while(clave != "utn750" && intentos < 2)
	{
		clave = prompt("ingrese el número clave intento ");
		intentos++;
	}
	if(clave != "utn750")
	{
		alert("BLOQUEADO!!!");
	}
	else
	{
		alert("ingreso bien la clave!");
	}
}
//FIN DE LA FUNCIÓN
