/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{ var div1;
  var div2; 
  var resultado;
  
  div1 = document.getElementById ("numeroDividendo").value;
  div2 = document.getElementById ("numeroDivisor").value;

  div1 = parseInt (div1);
  div2 = parseInt (div2);

  resultado = (div1 % div2);

  alert ("El resto es " + resultado );
   
}
