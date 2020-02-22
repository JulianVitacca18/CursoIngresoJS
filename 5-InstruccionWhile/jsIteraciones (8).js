function mostrar()
{
    var numero;
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	do{
		numero = parseInt(prompt ("Ingrese un numero"));

		while (( isNaN (numero))) 
		{
			numero = prompt ("Ese no es un numero, Reingrese un numero");
		}
			
        if ( numero >= 0) {
			positivo = numero + positivo;
		}
        else {
			negativo = numero * negativo;
			contador ++;
		}
		seguir = prompt ("¿Quiere ingresar otro numero?, ingrese si o no");
		

	}while ( seguir == respuesta );
	
    if (contador == 0) {
		negativo =0;
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN