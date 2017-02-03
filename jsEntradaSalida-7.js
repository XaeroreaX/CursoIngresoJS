/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var Num1 = document.getElementById("numeroUno").value;
	var Num2 = document.getElementById("numeroDos").value;
	var resultado = parseInt(Num1)+parseInt(Num2);
	alert("la suma es "+resultado); 
}

function restar()
{
	var Num1 = document.getElementById("numeroUno").value;
	var Num2 = document.getElementById("numeroDos").value;
	var resultado = parseInt(Num1)-parseInt(Num2);
	alert("la Resta es "+resultado);  
}

function multiplicar()
{ 
	var Num1 = document.getElementById("numeroUno").value;
	var Num2 = document.getElementById("numeroDos").value;
	var resultado = parseInt(Num1)*parseInt(Num2);
	alert("la multiplicacion es "+resultado);  
}

function dividir()
{
	var Num1 = document.getElementById("numeroUno").value;
	var Num2 = document.getElementById("numeroDos").value;
	var resultado = parseInt(Num1)/parseInt(Num2);
	alert("la division es "+resultado); 
}

