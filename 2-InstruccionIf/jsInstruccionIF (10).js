function mostrar()
{
	var nota;
	var maximo;
	var minimo;
	
	maximo = 10;
	minimo = 1;

	nota = Math.floor (Math.random () * ( ( maximo + 1 ) - minimo ) + minimo );

	
	if ( nota >=9 )
	
	{
	 alert ( nota + (" EXCLENTE ") ) ;
    }
	
	else if  ( nota >=4 && nota <=8 ) 
	
	{
     alert (nota + (" APROBO "));
	}
	
	else 
	
	{
		alert (nota + (" Vamos, la proxima se puede "));
    }
	

}//FIN DE LA FUNCIÓN 