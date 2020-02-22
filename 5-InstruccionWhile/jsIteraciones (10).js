function mostrar()
{
	var acumulador_negativos;
	var acumulador_positivos;
	var contador_positivos;
	var contador_negativos;
	var contador_ceros;
	var promedio_positivos;
	var promedio_negativos;
	var diferencia_positivos_negativos;
	var numero;
	var seguir;
	var respuesta;
	var positivo = 0;
	var negativo = 1;

	
	do {
	
		numero = prompt ("Ingrese aqui un numero");
	
	 while (isNaN (numero)) {
		
		numero = prompt ("Eso no es un numero, reingrese un numero");
	 }

	if ( numero >= 0) {
	
	acumulador_positivos = numero + positivo;
	contador_positivos ++;

	} 
	if ( numero < 0) {
	
	acumulador_negativos = numero * negativo;
	contador_negativos ++;
	}
	 
	} while (seguir == respuesta);


	document.write ("1_ La suma de los negativos es: " + acumulador_negativos + ("</br>"));
	document.write ("2_ La suma de los positivos es: " + acumulador_positivos + ("</br>"));




}//FIN DE LA FUNCIÓN

/* Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/