/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos
 nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente
 (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	//variables a mostrar
	var edad;
	var sex;
	var estadoCivil;
	var validarSwitch = true;
	var sueldo;
	var legajo;
	var nacionalidad;

	
	edad = prompt("ingrese edad(edades entre 18 y 90)");//empezamos a pedir los datos por la edad
	edad = parseInt(edad);
	while(edad<18 || edad>90)// validar edad
	{
		edad = prompt("ingreso mal la edad, hagalo de nuevo");
		edad = parseInt(edad);
	}//while(edad<18 || edad>90)

	sex = prompt("ingrese el sexo(f/m)");//pedir dato de sexo

	while((sex!= "m" && sex!= "f") && (sex!= "M" && sex!= "F"))//validar el sexo
	{
		sex = prompt("ingreso mal el sexo, hagalo de nuevo");
	}//while((sex!= "m" && sex!= "f") && (sex!= "M" && sex!= "F"))

	if(sex == "m" || sex == "M")//asignar el sexo en base a la consigna
	{
		sex = "masculino";
	}
	else
	{
		sex = "femenino"; 
	}//if(sex == "m" || sex == "M")

	var cont = 1;// un pequeño contador que usare para saber si se equivoco en el estado civil
	while(validarSwitch == true)// validar estado civil
	{
		if(cont == 1)
		{
			estadoCivil = prompt("igrese estado civil(1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)");//pedir dato de estado civil
		}//if(cont == 1)

		estadoCivil = parseInt(estadoCivil);
		switch(estadoCivil) //asignar el estado civil en base a la consigna
		{
			case 1:
				estadoCivil = "soltero";
				validarSwitch = false;
				break;
			case 2:
				estadoCivil = "casado";
				validarSwitch = false;
				break;
			case 3:
				estadoCivil = "divorciado";
				validarSwitch = false;
				break;
			case 4:
				estadoCivil = "viudo";
				validarSwitch = false;
				break;
			default:
				estadoCivil = prompt("igreso mal estado civil, ingrese de nuevo");
				cont++;
				break;
		}//switch(estadoCivil)
	}//while(validarSwitch == true)

	sueldo = prompt("ingrese el sueldo(no menor a 8000)");//pedir dato de sueldo
	sueldo = parseInt(sueldo);
	while(sueldo < 8000)
	{
		sueldo = prompt("igreso mal el sueldo, ingrese de nuevo");
		sueldo = parseInt(sueldo);
	}//while(sueldo < 8000)

	legajo = prompt("ingrese el legajo(no menor a 1000)");//pedir dato de legajo
	legajo = parseInt(legajo);
	while(legajo < 1000)
	{
		legajo = prompt("igreso mal el legajo, ingrese de nuevo");
		legajo = parseInt(legajo);
	}//while(sueldo < 1000)

	cont = 1;
	while(validarSwitch == false)
	{
		if(cont == 1)
		{
			nacionalidad = prompt("ingrese la nacionalidad(“A” para argentinos, “E” para extranjeros, “N” para nacionalizados)");//pedir dato de nasionalidad
		}//if(cont == 1)
		switch(nacionalidad)
		{	
			case "a":
			case "A":
				nacionalidad = "argentinos";
				validarSwitch = true;
				break;
			case "e":
			case "E":
				nacionalidad = "estranjero";
				validarSwitch = true;
				break;
			case "n":
			case "N":
				nacionalidad = "nacionalizados";
				validarSwitch = true;
				break;
			default:
				nacionalidad = prompt("ingreso mal la nacionalidad, ingrese de nuevo la nacionalidad");
				break;
		}//switch(nacionalidad)
    } //while(validarSwitch = false)

//mostrar datos en pantalla
	document.getElementById("Edad").value = edad;
	document.getElementById("Sexo").value = sex;
	document.getElementById("EstadoCivil").value = estadoCivil;
	document.getElementById("Sueldo").value = sueldo;
	document.getElementById("Legajo").value = legajo;
	document.getElementById("Nacionalidad").value = nacionalidad;
 
}
//IDs: Edad, Sexo, EstadoCivil, Sueldo, Legajo, Nacionalidad

