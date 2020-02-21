function mostrar()
{
 var sexo;

 sexo = prompt (" Ingrese f para femenino o m para masculino"); 

 while (  !(sexo == "f" || sexo == "m") )
 {
   sexo = prompt (" Error, reingrese f para femenino o m para masculino");
 } 

 document.getElementById ("Sexo").value = sexo;

}//FIN DE LA FUNCIÓN