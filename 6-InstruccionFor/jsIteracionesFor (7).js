function mostrar()
{
    var numero;
    var contrador_de_divisores = 0;
    
    numero = parseInt(prompt ("Ingrese un numero"));
    
    while ( isNaN (numero)) {
        numero = parseInt(prompt ("No es un numero, Ingrese un numero"));
    }
    
    for ( var contador = 1 ; contador <= numero ; contador ++ ) {
     
        if ( numero % contador == 0){
    
        console.log (contador);
        contrador_de_divisores++;
        }
    
    }
    
    console.log ("Cantidad de divisores encontrados " + contrador_de_divisores);



}//FIN DE LA FUNCIÓN