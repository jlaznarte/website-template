function preloadReloj(isResize){
    
   if(isResize==0){
   		
	   eDiv = document.createElement('Div');   
	   eDiv.setAttribute('id','DivBloqueo');   
	   eDiv.setAttribute('allowtransparency','true');   
	   eDiv.className = 'DivBloqueo'; 
	   	if (document.all){
	  	  	//IE    	  
	  	    eDiv.style.width = document.body.scrollWidth;    
	   		eDiv.style.height = document.body.scrollHeight;  
	   	    eDiv.style.filter="alpha(style=0, opacity=75)"; 	  
	 	 }else{
	   		//Firefox    		
	   		eDiv.style.width = window.screen.width+"px";         		
	   		eDiv.style.height = document.body.scrollHeight+"px";     	  
	   		eDiv.style.opacity=0.75;
	 	 }          
	 	
	   	 
	   eDiv.innerHTML = "<div class='capaCargando'><img src='imagenes/Cargando1.gif' id='imgCargando'><br><img src='imagenes/GenerandoInforme.gif' id='realizandoAccion'></div>";
	   
	   	   	     
	   document.body.appendChild(eDiv); 
	   setTimeout('document.images["imgCargando"].src="imagenes/Cargando1.gif"', 200); 
	  
	   setTimeout('document.images["realizandoAccion"].src="imagenes/GenerandoInforme.gif"', 200); 
	   
    
    }else if(document.getElementById('DivBloqueo')){
          	if (document.all){
	  	  	//IE    	  
	  	        eDiv.style.width = document.body.scrollWidth;    
	   		eDiv.style.height = document.body.scrollHeight;  
	   	        eDiv.style.filter="alpha(style=0, opacity=75)"; 	  
	 	 }else{
	   		//Firefox    		
	   		eDiv.style.width = window.screen.width+"px";         		
	   		eDiv.style.height = document.body.scrollHeight+"px";     	  
	   		eDiv.style.opacity=0.75;
	 	 }    
    
    }   
     
 }