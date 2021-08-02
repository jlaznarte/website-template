var rutaRelativa="";
var automaticScript = false;
var rutaIdiomaTemporal = "/js/idiomas/";
var rutaValidar = "/new/js/";

//Control dom para las funciones de validacion
var fdom = {
		$: function(id){
			return document.getElementById(id);
		},
		isArray: function(obj){
			return obj && !(obj.propertyIsEnumerable('length')) && typeof obj === 'object' && typeof obj.length === 'number';
		},
		getElementsById: function(strId, sep){
			var arr = [];
			sep = (sep === undefined) ? "_" : sep;
			while(fdom.$(strId + sep + arr.length) !== null) {
				arr[arr.length] = fdom.$(strId + sep + arr.length);
			}
			return arr;
		},
		getElementsByClass: function(searchClass, node, tag) {
			var classElements = [];			
			if (!node ){
				node = document;
			}
			if (!tag){
				tag = '*';
			}			
			var els = node.getElementsByTagName(tag);
			var elsLen = els.length;
			var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
			for (i = 0, j = 0; i < elsLen; i++) {
				if ( pattern.test(els[i].className) ) { 
					classElements[j] = els[i];
					j++;
				}
			}
			return classElements;
		},	
		onlyThisElement: function(tag, obj){
			var newObj=[];
		    for(var xx = 0; xx < obj.childNodes.length; xx++){
		    	if(obj.childNodes[xx].tagName == tag.toUpperCase()){
		    		newObj[newObj.length] = obj.childNodes[xx];
		            }
		    	}
		    return newObj;
		},
		findChilds: function(obj, tag){
			var arr = [];
			for(var x = 0; x < obj.childNodes.length; x++){
				if(obj.childNodes[x].tagName){
					if(obj.childNodes[x].tagName.toLowerCase() == tag.toLowerCase()){
						arr[arr.length] = obj.childNodes[x];
					}
				}
			}
			return arr;
		}
};

// Gestiona la recarga de la imagen del captcha
var captchaReloadAction={
	carga:function(){
		var captchaReloadLink=document.getElementById("captchaReloadLink");
		var captchaImg=document.getElementById("captchaImg");
		captchaReloadLink.href = "javascript:void(0);"; 
		captchaReloadLink.onclick = function(){document.getElementById('captchaImg').src='/ContentPublisher/Captcha.jpg?seed='+Math.floor(Math.random()*1000000000);};
		}		
}

//Obtiene el idioma de la aplicacion y carga los literales -que se manejan en cliente - en base al idioma del aplicativo
var idiomaAplicacion={
	codIdioma:null,
	idiomaPorDefecto:"es",
	rutaScripts:location.href.split("portal")[0]+"js/",
	rutaIdioma:rutaIdiomaTemporal,
	literal:function(l){
		return eval("arrLit_"+idiomaAplicacion.codIdioma+"['"+l+"']")
	},
	cargaIdioma:function(){
		var htmlLang=document.getElementsByTagName("html")[0].lang.toLowerCase()
		idiomaAplicacion.codIdioma=(idiomaAplicacion.codIdioma=="")? idiomaAplicacion.idiomaPorDefecto.toUpperCase():htmlLang;
		document.write("<script src='"+rutaRelativa+idiomaAplicacion.rutaIdioma+"lang_"+idiomaAplicacion.codIdioma +".js' type='text/javascript' ><\/script>")
	}
}

var validaForm={
	cargaScriptValidacion:function(){
		if(document.getElementById("datosValidacion1"))
		{
			if(window.valida){return;}
			else{
				automaticScript = true;
				var htmlHead=document.getElementsByTagName("head")[0]
				var eleScript=document.createElement("script")
				eleScript.src=rutaValidar + "validar.js"
				htmlHead.appendChild(eleScript)
			}
			return true;
		}
		return false;
	}
}

var acciones={
	existeId:function(cid){
		if(document.getElementById(cid)) return true;
		return false;
	},
	load:function() {
		if(acciones.existeId("listTareas")){imprimir.carga();}
		if(acciones.existeId("tweetsLi")){tweets.muestra();}
		if(acciones.existeId("captchaReloadLink")){captchaReloadAction.carga();}
		if(acciones.existeId("datosValidacion1")){validaForm.cargaScriptValidacion();}
				
		asistentevirtual.load(); // la funcion ya testea que exista la clase
	},
	getInternetExplorerVersion:function() {
	    var rv = -1; // Return value assumes failure.
	    if (navigator.appName == 'Microsoft Internet Explorer') {
	        var ua = navigator.userAgent;
	        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	        if (re.exec(ua) != null)
	            rv = parseFloat(RegExp.$1);
	    }
	    return rv;
	}
}

var tweets={
	muestra:function(){		
		var ieVersion = acciones.getInternetExplorerVersion();		
		if (ieVersion == -1 || ieVersion > 8) { 		
			if (acciones.existeId("tweetsDiv") ) {
				var url = document.getElementById("tweetsUrl").innerHTML;
				var id = document.getElementById("tweetsId").innerHTML;
				var ocultarId = document.getElementById("ocultarId").innerHTML;
				var tit = null;
				if (acciones.existeId("tweetsTit")) {
					tit = document.getElementById("tweetsTit").innerHTML;
				}			
				var htmlTit = "Tweets";
				if (tit != null && tit != '') {
					htmlTit = htmlTit + " por " + tit;
				}
				document.getElementById("tweetsDiv").innerHTML = "<a class=\"twitter-timeline\"  href=\"" + url + "\"  data-widget-id=\"" + id + "\">" + htmlTit + "</a>";
				!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
				$("#tweetsDiv").removeClass("hide");
				if (ocultarId != null && ocultarId != '') {
					$("#" + ocultarId).addClass("hide");
				}
			}
		}
	}
}

// Asistente virtual
var asistentevirtual={
	load:function(){
		if ($(".asistentevirtual").length != 0) {
			self.name='AytoMadrid'; 
			$('.asistentevirtual').find("a").attr("href","javascript:void(0)");
			$('.asistentevirtual').find("a").attr("target","");
			$('.asistentevirtual').find("a").click( function() {
				//ventana.abrir('http://asistentevirtual.madrid.es/lineamadrid/','Conversacion',646,313);
				// No poner  fullscreen=no eso hace que en IE salga el location
				window.open('http://asistentevirtual.madrid.es/lineamadrid/', 'Conversacion','width=646,height=313,status=no,location=no,resize=no,scrollbars=no,toolbar=no,menubar=no'); 
			} );
		}
	}
}

var imprimir={
	carga:function(){
		var printOFF = document.getElementById("printOFF");
		if(window.print && printOFF == null) {			
			enlaceImpresion = document.getElementById("imprimir");
			enlaceImpresion.onclick=imprimir.imprime
		}
	},
	imprime:function(){window.print();}	
}

if (document.getElementById) {
	idiomaAplicacion.cargaIdioma();
}

function clear_input_html(id) {
    $('#'+id).html($('#'+id).html());
}

$(document).ready(function(){
	//A todos los input files que tengan la clase "box" les añadimos un boton de clear oculto
	//El boton se muestra cuando el input tenga algun valor metido
	//Si se quiere mostrar el boton se debe meter la funcion changeFile en el evento onchange del input
	$('input[type=file]').each(function() {
		if ($(this).attr("class")=="box") {
			var inputFileId = $(this).attr("id");
			var oculto = "";
			if ($(this).attr("value")=="" || $(this).attr("value")===undefined) {
				oculto = "hidden";
			}
			$(this).wrap('<div id="file_input_container_'+inputFileId+'"></div>');
			$(this).after('&nbsp;<a id="lnk_' + inputFileId + '" class="bold-link ' + oculto + '" href="javascript:void(0);" onclick="clearFile(\''+inputFileId+'\')">borrar</a>');
		}
	});
	
	// Si el resultados tiene coordenadas se muestra la capa "ver listado/mapa"
	if ( $('div.event-info:has(.event-location[data-latitude])').length > 0 ) $('div#listado-mapa').attr('class','bg-fluid6');
	// En colecciones lo mismo pero al revés, si no tiene coordenadas se oculta
	if ( $('div.event-info:has(.event-location[data-latitude])').length == 0 && $('div.distritos-listado').length > 0 ) $('.bg-fluid6').attr('class','hidden');
	
	// Si es una revista digital ocultamos en menú horizontal si lo tiene
	if ( $('div#magazine').length > 0 && $('ul.sub-menu').length > 0 ) $('ul.sub-menu').attr('class','hidden hidden-print');
})

//Borrar el valor de un input file y oculta el boton de borrar asociado
function clearFile(inputFileId) {
	clear_input_html('file_input_container_'+inputFileId);
	$("#img_" + inputFileId).addClass("hidden");
	$("#lnk_" + inputFileId).addClass("hidden");
}

//Esta funcion muestra en boton de Borrar en un input file cuando el input tiene valor
//Se debe meter en el evento onChange de los input file en los que se desee que se muestre el boton 
function changeFile(inputFileId) {
	var input = document.getElementById(inputFileId);
	if (input.value != '') {
		$("#img_" + inputFileId).removeClass("hidden");
		$("#lnk_" + inputFileId).removeClass("hidden");
	}
}

//asegurar que se ejecuta con la página cargada (el DOM y las imagenes tambien)
$(window).bind("load", function() {
	acciones.load();
});