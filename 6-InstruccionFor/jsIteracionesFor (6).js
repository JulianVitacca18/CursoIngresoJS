function mostrar()
{
var numero;
var contrador_de_pares = 0;

numero = parseInt(prompt ("Ingrese un numero"));

while ( isNaN (numero)) {
    numero = parseInt(prompt ("No es un numero, Ingrese un numero"));
}

for ( var contador = 1 ; contador <= numero ; contador ++ ) {
 
    if ( contador % 2 == 0){

    console.log (contador);
    contrador_de_pares++;
    }

}

console.log ("Cantidad de pares encontrados " + contrador_de_pares);
}//FIN DE LA FUNCIÓN