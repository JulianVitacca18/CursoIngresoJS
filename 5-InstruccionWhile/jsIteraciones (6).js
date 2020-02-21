function mostrar()
{

	var contador=0;
    var acumulador=0;
	var promedio;
	
	
	while (contador <5)
	{
		numero = parseInt (prompt + ("Ingrese un numero"));
		
	while (isNaN (numero)) 
	{
		numero = parseInt (prompt + ("No es un numero, ingrese un numero"));
	}
		
		acumulador = acumulador + numero;

		contador ++;
	}

	promedio = acumulador/5

    document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value=acumulador = promedio;


}//FIN DE LA FUNCIÓN

