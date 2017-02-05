/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
//1id PrecioUno, 2id PrecioDos, 3id PrecioTres
function Sumar () 
{
	var precios1 = document.getElementById("PrecioUno").value;
	var precios2 = document.getElementById("PrecioDos").value;
	var precios3 = document.getElementById("PrecioTres").value;

	// precios tomados

	var resultado = parseInt(precios1) + parseInt(precios2) + parseInt(precios3);

	//precios sumados

	alert(resultado);
}
function Promedio () 
{
	var precios1 = document.getElementById("PrecioUno").value;
	var precios2 = document.getElementById("PrecioDos").value;
	var precios3 = document.getElementById("PrecioTres").value;

	// precios tomados

	var resultado = (parseInt(precios1) + parseInt(precios2) + parseInt(precios3))/3;

	//precios promediados

	alert(resultado);
}
function PrecioFinal () 
{
	var precios1 = document.getElementById("PrecioUno").value;
	var precios2 = document.getElementById("PrecioDos").value;
	var precios3 = document.getElementById("PrecioTres").value;

	// precios tomados

	var resultado = parseInt(precios1) + parseInt(precios2) + parseInt(precios3);

	//precios sumados

	resultado = resultado + ((resultado*21)/100)

	alert(resultado);
}