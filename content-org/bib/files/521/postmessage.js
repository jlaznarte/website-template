/*#/javascript/v2/sections/editorial/postmessage.js#*/function listener(e){var messageObject={};try{messageObject=JSON.parse(e.data);}catch(err){}if(messageObject.postMessageEC){if(messageObject.editorialIframeScrollHeight){var iframe=$(".news-header-iframe iframe").get(0);iframe.style.height=(parseInt(messageObject.editorialIframeScrollHeight))+"px";}if(messageObject.needStop){var postMessageEC={"postMessageEC":"true","stopBroadcast":"true"};iframe.contentWindow.postMessage(JSON.stringify(postMessageEC),"*");}}}jQuery(function(){if(window.addEventListener){addEventListener("message",listener,false);}else{attachEvent("onmessage",listener);}});