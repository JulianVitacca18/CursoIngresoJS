function mostrar()
{

	var flag = 0;
	var maximo;
	var respuesta = "si";
	var minimo;
	var numero;
	

	do {
      numero = parseInt (prompt ("Ingrese un numero"));
	
    while (isNaN (numero) ){
      numero = prompt ("Ese no es un numero, porfavor ingrese un numero"); 
	}
	 
	if ( flag == 0 || numero > maximo) {
	   maximo = numero;
	}
	
	if ( flag == 0 || numero < minimo) {
	   minimo = numero;
	   flag = 1;
	}

    seguir = prompt ("¿Quiere ingresar otro numero?, ingrese si o no");


	}while ( seguir == respuesta);
		

document.getElementById ("maximo").value = maximo;
document.getElementById ("minimo").value = minimo;
	
	

}//FIN DE LA FUNCIÓN