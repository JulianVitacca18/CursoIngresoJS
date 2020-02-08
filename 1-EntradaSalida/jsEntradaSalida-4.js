/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
var nombre;

nombre = prompt ("pone tu nombre aca");

document.getElementById ("elNombre").value = nombre; 


}

