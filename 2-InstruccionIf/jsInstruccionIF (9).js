function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	//id: FormIngreso 
	//generacion de numeros random Math.random() * numPosibilidades 
	var NunRandom;
	NunRandom = parseInt(NunRandom);
	NunRandom = Math.floor((Math.random() * 10) + 1);//Math.floor((Math.random() * 10) + 1)
	alert(NunRandom);
	document.getElementById("FormIngreso").value = NunRandom;

}//FIN DE LA FUNCIÓN