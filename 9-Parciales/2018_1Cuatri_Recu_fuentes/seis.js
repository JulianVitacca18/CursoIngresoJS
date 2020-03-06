function mostrar()
{
var nota;
var sexo;
var promedio;
var acumulador = 0;
var nota_baja;
var varon_mayor;
var contador;
var flag = 0;
var sexo_bajo;
//----------------------
for ( var i = 0 ; i < 5 ; i++){
nota = parseInt (prompt ("Ingrese la nota del alumno: "));
while (nota <0 || nota >10 || isNaN (nota)) {
nota = parseInt (prompt ("No es una nota valida, Reingrese una nota"));
}

sexo = prompt ("Ingrese el sexo del alumno, f o m.");
while (!(sexo == "f" || sexo == "m")){
sexo = prompt ("Ese sexo no es valido, Ingrese un sexo valido, f o m.")
}


//----------------------

if ( flag == 0 || nota_baja < nota){
nota_baja = nota;
sexo_bajo = sexo;
flag = 1;
}

//----------------------

if (sexo == "m" && nota >=6){
varon_mayor ++;
}

//----------------------


}
}
