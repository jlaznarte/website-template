
    
    
    
    
    
    
    
    
    
    
    
    

    

    
    var i=1;
    var ua = navigator.userAgent;
    var opera = /opera [56789]|opera\/[56789]/i.test(ua);
    var ie = !opera && /MSIE/.test(ua);
    var ie50 = ie && /MSIE 5\.[01234]/.test(ua);
    var ie6 = ie && /MSIE [6789]/.test(ua);
    var ieBox = ie && (document.compatMode == null || document.compatMode != "CSS1Compat");
    var moz = !opera && /gecko/i.test(ua);
    var nn6 = !opera && /netscape.*6\./i.test(ua);
    var safari = ua.indexOf('Safari')>-1;

    var title = "<img src='http://static.4shared.com/images/icons/16x16/email.gif?ver=2131917398' width='16' height='16' class='absmid' /> <b class='absmid'>Escribir un mensaje privado</b>";


    function submitPurchase(pref, page){
      var spref = typeof pref == 'undefined' ? '' : pref;
      var planId = 107;
      var months = $('select[name="months' + spref + '"]').val();
      var term = "m" + months;
      var paypal = ($('input[name="payment' + spref + '"]:radio:checked').get(0).id == "paypal");
      var plimus = ($('input[name="payment' + spref + '"]:radio:checked').get(0).id == "plimus");
      var paypalcc = ($('input[name="payment' + spref + '"]:radio:checked').get(0).id == "paypalcc");
      PurchaseStats.registerClick('www.4shared.com%2Faccount%2Fhome.jsp%3Fref%3D' + page);
      if(true){
        paypal = true;
        plimus = false;
      }
    

    

    

      if(typeof page != 'undefined'){
        Cookies.create('ppVisited', 'www.4shared.com%2Faccount%2Fhome.jsp%3Fref%3D' + page , -1, '/', '4shared.com', false);
        Cookies.create('ppVisitDate', new Date().getTime() , -1, '/', '4shared.com', false);
      }

      var formname;
      if (paypal || paypalcc) {
        formname = "paypalForm_p" + planId + term;
        document.forms[formname].submit();
        return false;
      }
      if (plimus) {
        formname = "plimusForm_p" + planId + term;
        document.forms[formname].submit();
        return false;
      }
      return true;
    }

    




    function showZPP(s){
      var cs = $('option:selected', s).val();
    

      if(cs == '1' || cs == '12'){ $('.chroff').show();$('.nchroff').hide();}
      else {$('.nchroff').show();$('.chroff').hide();}
    }

    function promptReactivateAccount(event){
    
      promptGetPremium('Su suscripci\u00f3n a 4shared Premium ha caducado y su cuenta ha sido suspendida. No se ha borrado ninguno de sus archivos. Para acceder a sus archivos y continuar usando 4shared como usuario gratuito, por favor, <a href=\"#\" onclick=\"return requestDowngrade();\"> contacte<\u002fa> con nuestro equipo de ayuda. O actualice a una cuenta Premium para reactivar todas las caracter\u00edsticas Premium. ','La suscripci\u00f3n ha caducado');
    
    }

    function requestDowngrade() {
      var windowname="Feedback";
      var url="/feedback.jsp?pick=11";
      var OpenWindow = window.open(url,windowname,'toolbar=no,scrollbars=yes,resizable=yes,width=500,height=460,left=50,top=50');
      OpenWindow.focus();
      return false;
    }

    function changeFriendWithCallback(userId, friendName, callback) {
      var isUnsubAction = $("div[id=subscribeUnsubscribe]").hasClass("usbtn");
      var confirmMsg = "Va a borrar $[p1] de sus amigos. \u00bfEst\u00e1 seguro?";
      confirmMsg =  confirmMsg.replace(/\$\[p1\]/,"\""+friendName+"\"");
      if (isUnsubAction && !window.confirm(confirmMsg)) return;
      var postData = {userId:userId}
      if(callback != undefined) {
        postData.isStrict = true;
      }

      var url = isUnsubAction ? "/web/accountActions/unsubscribe" : "/web/accountActions/subscribe"
      $.post(url, postData, function (data, options) {
            if (data.status == "ok") {
              if (isUnsubAction) {
                $("div[id=subscribeUnsubscribe]").html("Suscribirse");
                $("div[id=subscribeUnsubscribe]").removeClass( "usbtn" );
                $("div[id=subscribeUnsubscribe]").addClass( "sbtn" );
                alert("Dado de baja correctamente");
              } else {
                $("div[id=subscribeUnsubscribe]").html("Cancelar la suscripci\u00f3n");
                $("div[id=subscribeUnsubscribe]").removeClass( "sbtn" );
                $("div[id=subscribeUnsubscribe]").addClass( "usbtn" );
                alert("Suscrito correctamente");
              }
            } else {
              if(callback && !isUnsubAction) {
                alert("Ya est\u00e1 suscrito a"+friendName);
              }
            }
            if(callback != undefined) {
              callback();
            }
          })
    }
