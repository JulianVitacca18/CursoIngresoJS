function mostrar()
{
 var marca;
 var peso;
 var temperatura;
 var temperaturas_pares = 0;
 var producto_pesado;
 var cantidad_bajocero = 0;
 var promedio_pesos = 0;
 var peso_maximo = 0;
 var peso_minimo = 0;
 var acumulador_peso = 0; 
 var respuesta = "si";
 var seguir;
 var flag = 0;
 var marca_pesada;
 var contador = 0;

 //--------------------------------------------
do {
 marca = prompt ("Ingrese la marca del producto");
 peso = parseInt (prompt ("Ingrese el peso del producto"));

 while (peso < 1 || peso > 100 || isNaN (peso) ) {
    peso = parseInt (prompt ("Ese peso no es valido, Ingrese el peso del producto"));
 }
 
 temperatura = parseInt (prompt ("Ingrese la temperatura de almacenamiento")); 

 while (temperatura < -30 || temperatura > 30 || isNaN (temperatura)) {
 temperatura = parseInt (prompt ("Esa temperatura no es valida, Ingrese la temperatura del producto"));
 }
 
 
 //------ Temperaturas pares----
 
 if ((temperatura) % 2 == 0) {
     temperaturas_pares ++;
    }
    
    // ------ Marca del producto mas pesado -----
    
    if (flag == 0 || peso > producto_pesado) {
        
        producto_pesado = peso;
        
        marca_pesada = marca;
        
        flag = 1;
    }
    
    // ------ Bajo 0 grados  -----
    
    if ( temperatura < 0 ) {
        cantidad_bajocero ++;
    }
    
    acumulador_peso = acumulador_peso + peso;
 // ----- Peso maximo y minimo -----

 if ( flag == 0 || peso > peso_maximo) {
     peso_maximo = peso;
 }
 
 if (flag == 0 || peso < peso_minimo) {
     peso_minimo = peso;
     flag = 1
 }
 
 contador ++;

 seguir = prompt ("¿Desea seguir? ingrese si o no");
 while ( !(seguir == "si" || seguir == "no")){
 seguir = prompt (" Esa respuesta no es valida, ingrese si o no para seguir");
 }

}while ( seguir == respuesta);

promedio_pesos = acumulador_peso / contador;


document.write ("A) La cantidad de temperaturas pares es de: " + temperaturas_pares + "</br>");
document.write ("B) La marca del producto mas pesado es: " + marca_pesada + "</br>");
document.write ("C) La cantidad de productos que se conservan a menos de 0 grados son de: " + cantidad_bajocero + "</br>");
document.write ("D) El promedio del peso de todos los productos es de: "+ promedio_pesos + "</br>");
document.write ("E) El peso maximo es de: " + peso_maximo + " y el peso minimo es de: " + peso_minimo);



} //FIN
