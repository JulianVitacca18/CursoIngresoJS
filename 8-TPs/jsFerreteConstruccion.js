/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    var metros_largo;
    var metros_ancho;
    var cantidad;

    metros_largo = parseInt(document.getElementById("Largo").value);
    metros_ancho = parseInt(document.getElementById("Ancho").value);

    cantidad = metros_ancho + metros_largo

    alert("Usted tiene que comprar " + cantidad + " metros de alambre");

}

function Circulo() {
    var radio;
    var cantidad;

    radio = parseInt(document.getElementById("Radio").value);

    cantidad = radio;

    alert("Usted necesita " + cantidad + " de alambre");

}

function Materiales() { 
    var cemento = 2;
    var cal = 3;
    var metros_largo;
    var metros_ancho;
    var cantidad;
    var cantidad1;
    var cantidad2;

    metros_largo = parseInt (document.getElementById ("Largo").value);
    metros_ancho = parseInt (document.getElementById ("Ancho").value);

  cantidad = (metros_largo + metros_ancho); 

   cantidad1 = (cantidad / cemento); 
   cantidad2 = (cantidad / cal);


   alert ( "Usted necesita " + cantidad1 + " de cemento y " + cantidad2 + " de cal" );


}