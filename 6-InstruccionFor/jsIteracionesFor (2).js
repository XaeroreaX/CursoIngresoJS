function Mostrar()
{
	var num;
	var flag = 0;
	
	for (num = 10; num > 0; num--)
	{
		if(flag == 0)
		{
			document.write(num);
			flag++;
		}
		else
		{
			document.write(" - "+num);
		}
	}
}
