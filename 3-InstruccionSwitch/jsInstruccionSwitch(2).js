function mostrar()
{
//tomo la edad  
var mes

mes = document.getElementById("mes").value;

switch (mes)
{
case "Enero":
case "Febrero":
case "Marzo":
case "Abril":
case "Mayo":
case "Junio":
  alert (mes  + (": Falta para el invierno"));
break;


  case "Julio":
  case "Agosto":
  alert (mes  + (": Abrigate que hace frio"));
break;


case "Septiembre":
case "Octubre":
case "Noviembre":
case "Diciembre":
  alert (mes  + (": Ya pasamos el frio, ahora calor!!! "));
break;
}





}//FIN DE LA FUNCIÓN


// ENERO FEBRERO MARZO ABRIL MAYO JUNIO "Falta para el invierno." 
//JULIO Y AGOSTO     INVIERNO "Abrigate que hace frio." 
//SEPTIEMBRE OCTUBRE NOVIEMBRE "Ya pasamos el frio, ahora calor!!!."