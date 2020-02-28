function mostrar()
{
   var letra;
   var numero;
   var cant_num_par;
   var cant_num_impar;
   var cant_ceros;
   var promedio_positivos;
   var total_negativos;
   var flag = 0;
   var respuesta = "si";
   var acumulador;
   
  /// var dato;
   //----------------------------------
do {
   letra = prompt ("Ingrese una letra random");
while (isNaN (letra) == false) {
    letra = prompt ("No es una letra, reingrese una letra random");
}

numero = parseInt (prompt ("Ingrese un numero random entre -100 y 100"));
while (numero <-100 || numero >100 || isNaN (numero) ){
    numero = parseInt (prompt ("No es un numero valido, reingrese un numero random entre -100 y 100"));
}

respuesta = prompt ("¿Desea seguir? ingrese si o no")

} while (seguir == respuesta);

}//Fin de la funcion

   



