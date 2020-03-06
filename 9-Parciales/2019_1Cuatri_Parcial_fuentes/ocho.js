function mostrar()
{
  var letra;
  var numero;
  var cantidad_numeros_pares=0;
  var cantidad_numeros_impares=0;
  var cantidad_ceros=0;
  var promedio_positivos;
  var acumulador = 0;
  var contador = 0;
  var suma_negativos;
  var letra_max;
  var letra_min;
  var respuesta = "si";
  var numeros_positivos=0;
  var numeros_negativos=0;
  var flag;
  var numero_minimo = 0;
  var numero_maximo = 0;
  //-------------
do {
  letra = prompt ("Ingrese una letra random");
  numero = parseInt (prompt("Ingrese un numero entre -100 y 100"));
  while (numero <-100 || numero >100 || isNaN (numero)){
  numero = parseInt (prompt ("Numero invalido, ingrese un numero entre -100 y 100"));
  }
//---------------

if (numero % 2 == 0) {
  cantidad_numeros_pares = cantidad_numeros_pares + 1;
}
else {
  cantidad_numeros_impares++;
}

//--------------

if (numero >0) {
  numeros_positivos = numeros_positivos + numero;
  contador++;
}
else if (numero <0) {
  numeros_negativos = numeros_negativos + numero;
}
else {
  cantidad_ceros++;
}

//--------------

if (flag == 0 || numero < numero_minimo){
    numero_minimo = numero;
    letra_min = letra;
}
if (flag == 0 || numero > numero_maximo){
    numero_maximo = numero;
    letra_max = letra;
    flag = 1
}

//--------------
seguir = prompt ("¿Desea ingresar otros valores? si o no");
while (!(seguir == "si"|| seguir == "no")){
seguir = prompt ("Respuesta invalida, ingrese si o no.");
}

}while (seguir == respuesta);

if (promedio_positivos != 0){
promedio_positivos = numeros_positivos / contador;
}
else {
promedio_positivos = "No se ingresaron numeros positivos";
}

document.write ("a) La cantidad de números pares es de: " + cantidad_numeros_pares + "</br>");
document.write ("b) La cantidad de números impares es de: " + cantidad_numeros_impares + "</br>");
document.write ("c) La cantidad de ceros es de: " + cantidad_ceros +"</br>");
document.write ("d) El promedio de todos los números positivos ingresados es de: " + promedio_positivos + "</br>");
document.write ("e) La suma de todos los números negativos es de: " + numeros_negativos + "</br>");
document.write ("f) El número maximo es: " + numero_maximo + "y la letra maxima es: " + letra_max + " y el numero mínimo es: " + numero_minimo + " y la letra minima es: " + letra_min );


}
