function mostrar()
{
   var letra;
   var numero;
   var seguir;
   var cant_num_par = 0;
   var cant_num_impar = 0;
   var contador_ceros =0;
   var contador_positivos =0;
   var contador_negativos =0;
   var promedio_positivos =0;
   var acumulador_negativos =0;
   var flag = 0;
   var respuesta = "si";
   var num_MAX;
   var num_MIN;
   var letra_MIN;
   var letra_MAX;   
   var acumulador_positivos =0;
   
   //----------------------------------

do {
   letra = prompt ("Ingrese una letra random");
while (!((letra >= "A"&& letra <= "Z") || (letra >= "a" && letra <= "z"))) {
    letra = prompt ("No es una letra, reingrese una letra random");
}

numero = parseInt (prompt ("Ingrese un numero random entre -100 y 100"));
while (numero <-100 || numero >100 || isNaN (numero) ){
    numero = parseInt (prompt ("No es un numero valido, reingrese un numero random entre -100 y 100"));
}

//----------NUMEROS PARES E IMPARES----------------
if ((numero) % 2 == 0){
    cant_num_par ++; 
}
else {
    cant_num_impar ++;
}

//---------NUMEROS POSITIVOS, NEGATIVOS Y CEROS----------

if (numero >0 ){
    acumulador_positivos = acumulador_positivos + numero;
    contador_positivos ++;

}
else if (numero <0){
    acumulador_negativos = acumulador_negativos + numero;

}
else {
    contador_ceros ++;
}

//--------LETRA Y NUMERO MAX Y MIN-----------

if (flag == 0 || numero < num_MIN){
    num_MIN = numero;
    letra_MIN = letra;   
}
if (flag == 0 || numero > num_MAX){
    num_MAX = numero;
    letra_MAX = letra;   
    flag = 1
}

seguir = prompt ("¿Desea seguir? ingrese si o no");
while (!(seguir == "si" || seguir == "no" )) {
    seguir = prompt ("DEBE INGRESAR si O no PARA CONTINUAR");
}

} while (seguir == respuesta);

if (contador_positivos != 0) {
    promedio_positivos = acumulador_positivos / contador_positivos ;

}

document.write ("a)  La cantidad de números pares es : " + cant_num_par + "</br>");
document.write ("b)  La cantidad de números impares es : " + cant_num_impar + "</br>"); 
document.write ("c)  La cantidad de ceros es : " + contador_ceros + "</br>");
document.write ("d)  El promedio de todos los números positivos ingresados es : " + promedio_positivos + "</br>");
document.write ("e)  La suma de todos los números negativos " + acumulador_negativos + "</br>");
document.write ("f)  El número y la letra del máximo es " +  num_MAX + letra_MAX +  " y el mínimo " + num_MIN + letra_MIN  + "</br>");


}//Fin de la funcion





