_satellite.pushBlockingScript(function(event, target, $variables){
  var checkExist_datalayer = setInterval(function() {
   //Si existe el elemento, cancelamos el interval y ejecutamos el código necesario
  if (typeof window.vocento.dtm.data.tipoContenido != "undefined"
      && typeof window.vocento.dtm.data.seccion != "undefined") {      
	  clearInterval(checkExist_datalayer);           
    
	  if(window.vocento.dtm.data.tipoContenido === "noticia"
      && window.vocento.dtm.data.seccion === "familia"){      
      
      var pinta = false;
      var checkExist_jquery = setInterval(function() {
         //Si existe el elemento, cancelamos el interval y ejecutamos el código necesario
         if (typeof(jQuery) === "function") {      
          clearInterval(checkExist_jquery);  

          var hastaAqui=jQuery("aside.modulo.temas").prev().prev().prev().offset().top+100;          
           
          jQuery(document).ready(function() { 
              hastaAqui=jQuery("aside.modulo.temas").prev().prev().prev().offset().top+100;
              checkMBOX();
          });
          jQuery(window).resize(function() {
              hastaAqui=jQuery("aside.modulo.temas").prev().prev().prev().offset().top+100;
              checkMBOX();
          });
          jQuery(window).scroll(function() {
              hastaAqui=jQuery("aside.modulo.temas").prev().prev().prev().offset().top+100;
              checkMBOX();
          });

          function checkMBOX() {                           
              var estoyEn=jQuery(window).scrollTop()+jQuery(window).outerHeight();
              if(estoyEn>=hastaAqui) {                        
                if(!pinta){
                    pinta = true;

                    adobe.target.getOffer({
                    "mbox": "mbox_AO18_Familia_Suscripcion_Newsletter_Ficha",
                    "success": function(offer) {
                      adobe.target.applyOffer({
                        "mbox": "mbox_AO18_Familia_Suscripcion_Newsletter_Ficha",
                        "offer": offer
                      });
                    },
                    "error": function(status, error){
                      console.log("Error", status, error);
                    }
                  }); 
                }
              }
          } 
         }
      }, 100);
    }    
   }
}, 100);

if(document.location.pathname.indexOf("/newsletters/familia/") > -1
  && document.referrer.indexOf("https://www.abc.es/familia/") > -1){
	adobe.target.getOffer({
    "mbox": "mbox_AO18_Familia_Suscripcion_Newsletter_Widget",
    "success": function(offer) {
        adobe.target.applyOffer({
          "mbox": "mbox_AO18_Familia_Suscripcion_Newsletter_Widget",
          "offer": offer
        });
    },
    "error": function(status, error){
      console.log("Error", status, error);
    }
  });
}
});
