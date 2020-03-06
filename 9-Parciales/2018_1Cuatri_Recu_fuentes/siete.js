function mostrar()
{
    var altura;
    var sexo;
    var promedio;
    var altura_baja;
    var mujeres_altas;
    
    //--------
    for ( var i = 5 ; i < 5 ; i++) {
        
    altura = parseInt (prompt ("Ingrese la altura de la persona: "));
    while (altura >0 || altura >250 || isNaN (altura)){
    altura = parseInt (prompt ("Altura invalida, Ingrese la altura de la persona: "));
    }
    sexo = prompt ("Ingrese el sexo de la persona. f o m ");
    while (!(sexo == "f" || sexo == "m")){
    sexo = prompt ("Sexo invalido, ingrese f o m");
    }
    
    
    
    
    
    
    
    }//fin del for
}
