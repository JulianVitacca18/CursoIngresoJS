function mostrar()
{
var altura;
var sexo;
var promedio;
var altura_baja;
var mujeres_altas = 0;
var flag = 0;
var sexo_bajo;
var contador = 0;

//--------
for ( var i = 0 ; i < 5 ; i++) {

altura = parseInt (prompt ("Ingrese la altura de la persona: "));
while (altura < 0 || altura > 250 || isNaN (altura)){
altura = parseInt (prompt ("Altura invalida, Ingrese la altura de la persona: "));
}
sexo = prompt ("Ingrese el sexo de la persona. f o m ");
while (!(sexo == "f" || sexo == "m")){
sexo = prompt ("Sexo invalido, ingrese f o m");
}

//-------- altura baja-----
if (flag == 0 || altura < altura_baja) {
    altura_baja = altura;
    sexo_bajo = sexo;
    flag = 1;
}

//-------- mujeres mas 190-----
if (sexo == "f" && altura >= 190){
    mujeres_altas = mujeres_altas + 1;
}

contador = contador + altura;

}//fin del for

promedio = contador / 5

alert ("a) El promedio de las alturas totales es de: " + promedio + 
"\nb) La altura más baja es: " + altura_baja + " y el sexo de esa persona es: " + sexo_bajo +
"\nc) La cantidad de mujeres que su altura supere los 190 centimetros es de: " + mujeres_altas);

}
