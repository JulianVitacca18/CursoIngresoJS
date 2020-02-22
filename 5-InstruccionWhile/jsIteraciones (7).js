function mostrar()
{

	var numero;
	var contador = 0;
	var acumulador = 0;
	var promedio;
    var respuesta = "si"; 
    do {
		
		numero = parseInt(prompt ("Ingrese un numero"));

		while (( isNaN (numero))) 
		{
			numero = prompt ("Ese no es un numero, Reingrese un numero");
		}
			
        acumulador = acumulador + numero

		contador ++;

        seguir = prompt ("¿Quiere ingresar otro numero?, ingrese si o no");

	}while ( seguir == respuesta );

    

promedio = acumulador / contador 

document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN