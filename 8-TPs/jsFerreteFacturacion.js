

  function Sumar()
 
  {

  var precio1;
  var precio2;
  var precio3;
  var resultado;

 precio1 = parseInt(document.getElementById ("PrecioUno").value);
 precio2 = parseInt(document.getElementById ("PrecioDos").value);
 precio3 = parseInt(document.getElementById ("PrecioTres").value);


 resultado = (precio1 + precio2 + precio3)

 alert ("El precio total es " + resultado );

 }

 function Promedio()
 
  {

  var precio1;
  var precio2;
  var precio3;
  var resultado;

 precio1 = parseInt(document.getElementById ("PrecioUno").value);
 precio2 = parseInt(document.getElementById ("PrecioDos").value);
 precio3 = parseInt(document.getElementById ("PrecioTres").value);


 resultado = ((precio1 + precio2 + precio3) / 3); 

 alert ("El promedio es " + resultado );

  }

  function PrecioFinal()
 
  {

  var precio1;
  var precio2;
  var precio3;
  var precio_sin_iva;
  var iva;
  var total;

 precio1 = parseInt(document.getElementById ("PrecioUno").value);
 precio2 = parseInt(document.getElementById ("PrecioDos").value);
 precio3 = parseInt(document.getElementById ("PrecioTres").value);


 iva = ((precio1 + precio2 + precio3) * 21 / 100 ); 
 precio_sin_iva = (precio1 + precio2 + precio3);

 resultado = iva + precio_sin_iva;

 alert ("El precio total + IVA es " + resultado );

 }

	
