/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */


//var lamparitas = 35;
function CalcularPrecio () 
{
	var cantLamparas = document.getElementById("Cantidad").value;
 	cantLamparas = parseInt(cantLamparas);
 	var marca = document.getElementById("Marca").value;
 	var importe = parseInt(importe);

 	if(cantLamparas<3) // todo descuento es mayor que 2 cantLamparas
 	{
 		importe = cantLamparas * 35 ;
 	}
 	else
 	{
 		switch(cantLamparas) //contemplamos las demas opciones y las que son muy especificas
 		{
 			case 3:
 				importe = DescuentoD(marca, cantLamparas);
 				break;
 			case 4:
 				importe = DescuentoC(marca, cantLamparas);
 				break;
 			case 5:
				importe = DescuentoB(marca, cantLamparas); 				
 				break;
 			default:
 				importe = cantLamparas * (35 * 0.5);
 		}
 	}
 	if(importe>120)
 	{
 		var IIBB = parseInt(IIBB);
 		IIBB = importe * 0.1;
 		importe = importe + IIBB;
 		alert("Usted pago "+IIBB+" de IIBB.")
 	}

 	document.getElementById("precioDescuento").value = importe; //mostrando importe
 	//alert(importe);
}

function DescuentoD(marca, cantLamparas)
{
	var x = parseInt(x);
	switch(marca)
	{
		case "ArgentinaLuz":
			x = cantLamparas * (35 * 0.85);
			break;
		case "FelipeLamparas":
			x = cantLamparas * (35 * 0.9);
			break;
		default:
			x = cantLamparas * (35 * 0.95);

	}

	return x;
}


function DescuentoC(marca, cantLamparas)
{
	var x = parseInt(x);
	if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
	{
		x = cantLamparas * (35 * 0.75);
	}
	else
	{
		x = cantLamparas * (35 * 0.8);
	}

	return x;
}

function DescuentoB(marca, cantLamparas)		
{
	var x = parseInt(x);
	x = cantLamparas * (35 * 0.7);
	if(marca == "ArgentinaLuz")
	{
		x = cantLamparas * (35 * 0.6);
	}

	return x;
}