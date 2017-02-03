/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	//numeroUno y numeroDos tomamos el valor del ID
	var Num1 = document.getElementById("numeroUno").value;
	var Num2 = document.getElementById("numeroDos").value;
	alert(parseInt(Num1)+parseInt(Num2)); //aprendimos parseInt() para convertir string en enteros
}

