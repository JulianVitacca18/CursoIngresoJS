function mostrar()
{
var letra;
var numero;
var respuesta = "si";
var cant_par = 0;
var cant_impar = 0;
var cant_cero = 1;
var promedio;
var acumulador_positivos = 0;
var contador = 0;
var letra_max;
var letra_min;
var numero_min;
var numero_max;
var flag = 0;
var numero_positivo = 0;
var numero_negativo = 0;
//-----------------
do {
letra = prompt ("Ingrese una letra random");
numero = parseInt (prompt ("Ingrese un numero entre -100 y 100"));
while ( numero <-100 || numero >100 || isNaN (numero) ) {
numero = parseInt (prompt ("Numero invalido, reingrese un numero entre -100 y 100"));
}

//----- numeros pares / impares ----------

if (numero %2 == 0) {
cant_par ++;
}
else {
cant_impar ++;
}

//---- numeros positivos / negativos / ceros-----------

if (numero >0) {
numero_positivo = numero_positivo + numero;
acumulador_positivos++;
}
else if (numero <0) {
numero_negativo = numero_negativo + numero;
}
else {
cant_cero = cant_cero + numero;
}

//-------letra maxima y minima-----

if (flag = 0 || numero_max > numero){
numero_max = numero;
letra_max = letra;
}
if (flag = 0 || numero_min < numero) {
numero_min = numero;
letra_min = letra;
flag = 1
}


//-----------------------------
seguir = prompt ("¿Desea seguir? si o no");
while (!(seguir == "si" || seguir == "no")) {
seguir = prompt ("Respuesta invalida, ingrese si o no para continuar");
}

} while (seguir == respuesta);

while  (acumulador_positivos != 0) {
promedio = numero_positivo / acumulador_positivos;
}

document.write ("a) La cantidad de números pares es de: " + cant_par + "</br>");
document.write ("b) La cantidad de números impares es de: " + cant_impar + "</br>");
document.write ("c) La cantidad de ceros es de:: " + cant_cero + "</br>");
document.write ("d) El promedio de todos los números positivos ingresados es de: " + promedio + "</br>");
document.write ("e) La suma de todos los números negativos es de: " + numero_negativo + "</br>");
document.write ("f) El número maximo es: " + numero_max + " y la letra del máximo es: " + letra_max + "y el numero minimo es: " + numero_min + " y la letra minima es: " + letra_min);


}
