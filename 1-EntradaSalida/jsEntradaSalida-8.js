/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//numeroDividendo numeroDivisor
	//tomamos los valores de la id
	var dividendo
	dividendo = document.getElementById("numeroDividendo").value;
	var divisor = document.getElementById("numeroDivisor").value;
	//procesamos la informacion
	var resto = parseInt(dividendo) % parseInt(divisor);
	//mostrar en pantalla
	alert("El resto es "+resto);
}
