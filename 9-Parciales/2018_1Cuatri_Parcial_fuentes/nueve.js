function mostrar()
{
 var marca;
 var peso;
 var temperatura;
 var cant_temperaturas_pares =0;
 var marca_producto_mas_pesado;
 var producto_menos_cero_grados;
 var promedio_peso_productos=0;
 var acumulador_peso =0;
 var contador_peso =0;
 var peso_max;
 var peso_min;
 var seguir;

//--------------------------

do {

    marca = prompt ("Ingrese la marca del producto: ");
    peso = parseInt (prompt ("Ingrese el peso del producto (entre 1 y 100): "));
    while (peso <1 || peso >100 ) {
        peso = parseInt (prompt ("PESO INVALIDO. Ingrese el peso del producto (entre 1 y 100): "));
    }





} while ( seguir == "si");






} //FIN
