//al presionar el botón pedir un número. Informar si el numero es PRIMO o no
/*se ingresara los datos de los alunos del curso de ingresara , apartirde estos datos de informara lo siguiente: 
1 la mejor nota 
los datos de los alumnos son nombre, edad, nota y sexo 
2 promedio de notas
3 necesito saber la cantidad de mujeres aprovadas mayores a 25 años
4 el sexo y el nombre de la ultima persona que se saco 10
5 la cantidad de hombres desaprobados
6 la cantidad de mujeres aprobadas
7 el promedio de nota de las mujeres
8 el promedio de hombres > a 30
9 que sexo desaprobo mas
10 cuantas personas menores a 30 años desaprbaron*/
function Mostrar()
{
	/*var numero = prompt("ingrese el numero");
	numero = parseInt(numero);
	var num;
	var primo = 0;
	for(num = 1; num<=numero; num++)
	{

		if(numero%num == 0)
		{
			primo++;
		}
	}
	if(primo == 2)
	{
		alert("el "+numero+" es primo");
	}
	else
	{
		alert("el "+numero+" no es primo");
	}*/
	//apartados a pedir
	var alNombre;
	var alEdad;
	var alNota;
	var alSexo;
	//acumuladores
	var acumNotasMujeres = 0;
	var acumHombresMayoresA30 = 0;		
	var acumNotasHombresMayoresA30 = 0;
	var sumaNotas = 0;
	//contadores
	var cont = 0;
	var cantMujeres = 0;
	var cantHombres = 0;
	//segun la nota
	var cantMujeresReprobadas = 0;
	var cantHombresReprobados = 0;
	var cantBadMen = 0;
	var cantGoodGirl = 0;
	var cantDesaprbaronMenoresDe30 = 0;
	//por edad
	var ContMujeres25N = 0;
	var cantHombresMayoresA30 = 0;
	
	//promedios
	var promedioNota;
	var promedioNotaHombresMayoresA30;
	var promedioNotamujeres;
	//mensiones
	var alLastNota10Sexo = "nadie";
	var alLastNota10Nombre = "nadie";
	var patriarcado; 
	//la nota maxima
	var max;
	//para el confirm
	var respuesta = true;

	
	while(respuesta == true)
	{
		alNombre = prompt("ingrese el nombre del alumno");
		alEdad = prompt("ingrese la edad del alumno");
		alEdad = parseInt(alEdad);
		while(alEdad < 10)
		{
			alEdad = prompt("ingreso mal la edad del alumno, ingrese de nuevo");
			alEdad = parseInt(alEdad);
		}
		
		alNota = prompt("ingrese la nota del alumno");
		alNota = parseInt(alNota);
		while(alNota < 1 || alNota > 10)
		{
			alNota = prompt("ingreso mal la nota del alumno, ingrese de nuevo");
			alNota = parseInt(alNota);
		}

		
		


		if(alSexo == "f" || alSexo != "F")
		{
			if(alEdad>25)
				ContMujeres25N++;
			acumNotasMujeres = acumNotasMujeres + alNota;
			cantMujeres++;
			if(alNota<4)
				cantMujeresReprobadas++;
		}
		else
		{
			cantHombres++;
			if(alNota<4)
			{
				cantHombresReprobados++;
			}
			if(alEdad > 30)
			{
				acumNotasHombresMayoresA30 = acumNotasHombresMayoresA30 + alNota;
				cantHombresMayoresA30++;
			}
		}


		if(cont == 0)
		{
			max = alNota;
			
		}
		else
		{
			if(alNota > max)
			{
				max = alNota;
			}
		}
		
		if(alNota == 10)
		{
			alLastNota10Nombre = alNombre;
			if(alSexo == "f" || alSexo == "F")
			{
				alLastNota10Sexo = "femenino";
			}
			else
			{
				alLastNota10Sexo = "masculino";
			}
		}

		if(alNota < 4 && (alSexo == "m" || alSexo == "M"))
		{
			cantBadMen++;
		}

		if(alNota > 4 && (alSexo == "f" || alSexo == "F"))
		{
			cantGoodGirl++;
		}


		sumaNotas = sumaNotas + alNota;
		cont++;
		respuesta = confirm("quiere ingresar datos de otro alumno?");
	}

	patriarcado = cantHombres - cantMujeres;
	if(patriarcado > 0)
	{
		patriarcado = "hombres";
	}
	else
	{
		patriarcado = "mujeres";
	}
	promedioNotamujeres = acumNotasMujeres/cantMujeres;
	promedioNotaHombresMayoresA30 = acumNotasHombresMayoresA30/cantHombresMayoresA30;
	promedioNota  = sumaNotas/cont;
	document.write("nota maxima: "+max+"</br>promedio de las notas: "+promedioNota+"</br>Cantidad de mujeres de 25 años: "+ContMujeres25N);
	document.write("</br>el nombre de la ultima nota con 10: "+alLastNota10Nombre+"</brel sexo de la ultima nota con 10: >"+alLastNota10Sexo);
	document.write("</br>La cantidad de hombres que desaprobaron: "+cantBadMen+"</br>La cantidad de mujeres que aprobaron"+cantGoodGirl);
	document.write("</br>El promedio de las notas de las mujeres: "+promedioNotamujeres+"</br>El promedio de notas de los hombres"+promedioNotaHombresMayoresA30);
	document.write("</br> Cual sexo desaprobaron mas: "+patriarcado+"</br>Cantidad de desaprobados en general: "+cantDesaprbaronMenoresDe30+"</br>");
}//FIN DE LA FUNCIÓN