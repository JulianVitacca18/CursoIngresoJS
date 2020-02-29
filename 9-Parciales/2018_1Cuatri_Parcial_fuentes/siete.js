function mostrar()
{
var nota;
var sexo;
var promedio_nota;
var cant_varones_nota_mas_6 = 0;
var nota_mas_baja;
var sexo_mas_bajo;
var acumulador_nota = 0;
var flag = 0;
//---------------------------------

for (var i = 0; i < 5; i++){
    nota = parseInt (prompt ("Ingrese la nota del alumno"));
while (nota <0 || nota >10 || isNaN (nota)){
    nota = parseInt (prompt ("Esa nota no es valida, reingrese la nota del alumno"));
    }
    sexo = prompt ("Ingrese el sexo del alumno");
while (sexo != "f" && sexo != "m") {
    sexo = prompt ("Ese no es un sexo valido, reingrese el sexo del alumno");
}     
    acumulador_nota = acumulador_nota + nota;

if ( nota < nota_mas_baja || flag == 0 ) {
    nota_mas_baja = nota;
    sexo_mas_bajo = sexo;
    flag = 1;
}

if (sexo == "m" && nota >= 6){
    cant_varones_nota_mas_6 ++;
}

} //fin del for

promedio_nota = acumulador_nota / 5;

alert ("El promedio de las notas totales es: " + promedio_nota + 
" \nLa nota mas baja es: " + nota_mas_baja + " y su sexo es: " + sexo_mas_bajo + 
" \nLa cantidad de varones con su nota mayor o igual a 6 son: " + cant_varones_nota_mas_6);


}

/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/