function mostrar()
{
 
var mes
mes = document.getElementById("mes").value;

switch (mes)
{ 
case "Febrero":
   alert (mes + (": Este mes no tiene más de 29 días")); 
break;


case "Enero":
case "Febrero":
case "Marzo":
case "Abril":
case "Mayo":
case "Junio":
case "Julio":
case "Agosto":
case "Septiembre":
case "Octubre":
case "Noviembre":
case "Diciembre":
  alert  (mes + (": Este mes tiene 30 o más días"));
break;

}
 


 /*case != "Febrero":
   alert ("Este mes tiene 30 o más días");
   break;*/
	
	


}//FIN DE LA FUNCIÓN