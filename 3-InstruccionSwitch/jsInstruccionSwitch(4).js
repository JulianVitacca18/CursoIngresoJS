function mostrar()
{

var mes
mes = document.getElementById("mes").value;

switch (mes)
{
  case "Enero":
  case "Marzo":
  case "Mayo":
  case "Julio":
  case "Agosto":
  case "Octubre":
  case "Diciembre":
alert (mes + (": Este mes tiene 31 dias"));
  break;

  case "Abril":
  case "Junio":
  case "Septiembre":
  case "Noviembre":
alert (mes + (": Este mes tiene 30 dias"));
  break; 

  case "Febrero":
alert (mes + (": Este mes tiene 28 dias"));
  break;

}


	
	



}