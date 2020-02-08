/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{ var sueldo;
  var resultado;

  sueldo = document.getElementById ("sueldo").value;
  resultado = document.getElementById ("resultado").value;
  
  sueldo = parseInt (sueldo); 

  // FORMA DE SACAR EL 10% es 1.1 //
  // OTRA FORMA ES HACER LA REGLA DE 3 OSEA : NUMERO POR (*) EL PORCENTAJE, DIVIDIDO (/) 100 //

  resultado = (sueldo * 10 / 100); // <---- ESTO ME SACA EL 10%
                                            
  document.getElementById ("resultado").value = resultado + sueldo;  // <--- ACA TENGO QUE SUMARLOS

}
