if (typeof ESKUP == "undefined" || !ESKUP) {
var ESKUP = {};
}
ESKUP.addEvent = function (el,type,handler){
if (el.addEventListener) {
el.addEventListener(type,handler,false);
} else {
el['on'+type] = handler;
}
}
ESKUP.removeEvent = function (el,type,handler){
if (el.removeEventListener) {
el.removeEventListener(type,handler,false);
} else {
el['on'+type]=null;
}
}
ESKUP.triggerEvent = function (el,eventName) {
var event;
if (document.createEvent) {
event = document.createEvent('HTMLEvents');
event.initEvent(eventName,true,true);
} else if (document.createEventObject) {
event = document.createEventObject();
event.eventType = eventName;
}
event.eventName = eventName;
if (el.dispatchEvent) {
el.dispatchEvent(event);
} else if (el[eventName]) {
el[eventName]();
} else if (el['on'+eventName]) {
el['on'+eventName]();
}
}
ESKUP.peticionJSONP = function (url) {
var tagScript = null;
tagScript = document.createElement("script");
tagScript.setAttribute("type", "text/javascript");
tagScript.setAttribute("src", url);
tagScript.onload = tagScript.onerror = tagScript.onreadystatechange = function() {
if ((tagScript.readyState && !(/^c|loade/.test(tagScript.readyState))) || tagScript.loaded) return;
tagScript.onload = tagScript.onreadystatechange = null
tagScript.parentNode.removeChild(tagScript);
}
var _head = document.head || document.getElementsByTagName('head')[0];
_head.appendChild(tagScript);
}
var _ESKUPhashMsgByLang = {
"es":    {
"tu_respuesta"                : "Tu respuesta",
"ver_todos_los_mensajes"      : "Ver todos los mensajes",
"todos_los_comentarios"       : "todos los comentarios",
"ver_mensaje_al_que_responde" : "Ver mensaje al que responde",
"responder"                   : "Responder",
"reenviar_mensaje"            : "Reenviar mensaje",
"enlace_permanente"           : "Enlace permanente",
"notificar_insulto"           : "Notificar insulto",
"marcar_como_spam"            : "Marcar como spam",
"seguir_al_usuario"           : "Seguir al usuario",
"cancelar"                    : "Cancelar",
"el_contenido_del_mensaje_no_puede_ser_vacio" : "El contenido del mensaje no puede ser vacío",
"hace"                        : "Hace",
"hora"                        : "hora",
"horas"                       : "horas",
"minuto"                      : "minuto",
"minutos"                     : "minutos",
"menos_de_un_minuto"          : "Menos de 1 minuto",
"a_las"                       : "a las",
"pagina_siguiente"            : "Página siguiente",
"pagina_anterior"             : "Página anterior",
"primera_pagina"              : "Primera página",
"la_notificacion_de_insulto"  : "Muchas gracias por colaborar.",
"la_notificacion_de_spam"     : "Muchas gracias por colaborar.",
"no_se_ha_podido_hacer_la_notificacion" : "Por favor. inténtalo más tarde.",
"dinos_la_ubicacion_de_la_imagen" : "Dinos la ubicación de la imagen que quieres que acompañe tu mensaje",
"borrar_imagen"               : "Borrar imagen",
"error_al_enviar_el_mensaje"  : "Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo más tarde.",
"mensaje_enviado_correctamente" : "El mensaje se ha enviado correctamente",
"no_perteneces_al_foro"       : "AVISO: no perteneces al Foro EL PAÍS, tu mensaje se publicará en la pestaña ",
"no_has_escrito_nada"         : "No has escrito nada para enviar",
"el_mensaje_no_puede_tener_mas_de" : "El mensaje no puede tener más de ",
"caracteres"                  : "caracteres",
"procesando_tu_mensaje"       : "Procesando tu mensaje",
"espera_por_favor"            : "Espera por favor",
"estamos_procesando_tu_mensaje" : "Estamos procesando tu mensaje",
"para_seguir_al_usuario"      : "Para seguir a un usuario tienes que estar autenticado",
"confirmar"                   : "Confirmar",
"le_estas_siguiendo"          : "Le estás siguiendo",
"dejar_de_seguirle"           : "Dejar de seguirle",
"error_al_realizar_la_operacion" : "Se ha producido un error al realizar la operacion. Por favor, intentalo mas tarde.",
"editar_mensaje"              : "Editar mensaje",
"borrar_mensaje"              : "Borrar mensaje",
"no_es_posible_responder_al_mensaje" : "No es posible responder al mensaje, la conversación está cerrada",
"para_responder_tienes_que_identificarte" : "Para responder un mensaje tienes que identificarte",
"no_es_posible_recuperar_los_mensajes" : "No es posible recuperar los mensajes",
"no_hay_mensajes_disponibles" : "No hay mensajes disponibles",
"tienes_nuevos_mensajes"      : "Tienes nuevos mensajes",
"estas_seguro_de_borrar_el_mensaje" : "¿Estás seguro de que deseas borrar tu mensaje?",
"error_al_borrar_el_mensaje"  : "Se ha producido un error al borrar el mensaje. Por favor inténtalo más tarde.",
"mensaje_borrado_correctamente" : "Mensaje borrado correctamente",
"enviar"                      : "Enviar",
"estas_seguro_de_cancelar_el_mensaje" : "¿Estás seguro de cancelar el mensaje?",
"ha_ocurrido_un_error"        : "Ha ocurrido un error. Por favor, inténtalo más tarde.",
"mensaje_disponible_en_unos_segundos" : "Tu mensaje estará disponible en unos segundos",
"recargar_la_pagina"          : "Recargar la página",
"tamano_ventana"              : "Tamaño ventana",
"tamano_real"                 : "Tamaño real",
"cerrar"                      : "Cerrar",
"mensaje_borrado"             : "mensaje borrado",
"ver_video"                   : "Ver vídeo",
"ver_contenido_externo"       : "Ver contenido externo",
"mensaje_pendiente_moderacion" : "Estamos moderando tu comentario. Si es aprobado, estará visible en unos segundos.",
"pendiente_moderacion"        : "pendiente de moderación",
"foto" : "Foto",
"edicion_mensaje"             : "La edición de este mensaje será moderada. En caso de no pasar el filtro, será eliminado el mensaje actual.",
"no_editar"                   : "No se puede editar el mensaje porque está pendiente de moderar",
"continuar"             : "Continuar",
"xxx": "xxx"
},
"ca": {
"tu_respuesta"                : "La teva resposta",
"ver_todos_los_mensajes"      : "Veure tots els missatges",
"todos_los_comentarios"       : "Tots els comentaris",
"ver_mensaje_al_que_responde" : "Veure missatge a què correspon",
"responder"                   : "Respondre",
"reenviar_mensaje"            : "Reenviar missatge",
"enlace_permanente"           : "Enllaç permanent",
"notificar_insulto"           : "Notificar insult",
"marcar_como_spam"            : "Marcar com a spam",
"seguir_al_usuario"           : "Seguir l'usuari",
"cancelar"                    : "Cancel·lar",
"el_contenido_del_mensaje_no_puede_ser_vacio" : "El contingut del missatge no pot ser buit",
"hace"                        : "Fa",
"hora"                        : "hora",
"horas"                       : "hores",
"minuto"                      : "minut",
"minutos"                     : "minuts",
"menos_de_un_minuto"          : "Menys d'1 minut",
"a_las"                       : "a les",
"pagina_siguiente"            : "Pàgina següent",
"pagina_anterior"             : "Pàgina anterior",
"primera_pagina"              : "Primera pàgina",
"la_notificacion_de_insulto"  : "Moltes gràcies per col·laborar.",
"la_notificacion_de_spam"     : "Moltes gràcies per col·laborar.",
"no_se_ha_podido_hacer_la_notificacion" : "Sisplau, intenta-ho més tard.",
"dinos_la_ubicacion_de_la_imagen" : "Digues la ubicació de la imatge que vols que acompanyi el teu missatge",
"borrar_imagen"               : "Esborrar imatge",
"error_al_enviar_el_mensaje"  : "S'ha produït un error en enviar el missatge. Sisplau, intenta-ho més tard.",
"mensaje_enviado_correctamente" : "El missatge s'ha enviat correctament",
"no_perteneces_al_foro"       : "AVÍS: no pertanys al Fòrum EL PAÍS, el teu missatge es publicarà a la pestanya ",
"no_has_escrito_nada"         : "No has escrit res per enviar",
"el_mensaje_no_puede_tener_mas_de" : "El missatge no pot tenir més de ",
"caracteres"                  : "caràcters",
"procesando_tu_mensaje"       : "Processant el teu missatge",
"espera_por_favor"            : "Espera sisplau",
"estamos_procesando_tu_mensaje" : "Estem processant el teu missatge",
"para_seguir_al_usuario"      : "Per seguir un usuari has d'estar autenticat",
"confirmar"                   : "Confirmar",
"le_estas_siguiendo"          : "L'estàs seguint",
"dejar_de_seguirle"           : "Deixar de seguir-lo",
"error_al_realizar_la_operacion" : "S'ha produït un error en fer l'operació. Sisplau, intenta-ho més tard.",
"editar_mensaje"              : "Editar missatge",
"borrar_mensaje"              : "Esborrar missatge",
"no_es_posible_responder_al_mensaje" : "No és possible respondre al missatge, la conversa està tancada",
"para_responder_tienes_que_identificarte" : "Per respondre a un missatge t\\'has d\\'identificar",
"no_es_posible_recuperar_los_mensajes" : "No és possible recuperar els missatges",
"no_hay_mensajes_disponibles" : "No hi ha missatges disponibles",
"tienes_nuevos_mensajes"      : "Tens nous missatges",
"estas_seguro_de_borrar_el_mensaje" : "Estàs segur d'esborrar el missatge?",
"error_al_borrar_el_mensaje"  : "S'ha produït un error en esborrar el missatge. Sisplau, intenta-ho més tard.",
"mensaje_borrado_correctamente" : "Missatge esborrat correctament",
"enviar"                      : "Enviar",
"estas_seguro_de_cancelar_el_mensaje" : "Estàs segur de cancel·lar el missatge?",
"ha_ocurrido_un_error"        : "S'ha produït un error. Sisplau, intentar-ho més tard.",
"mensaje_disponible_en_unos_segundos" : "El teu missatge estarà disponible en uns segons",
"recargar_la_pagina"          : "Racarregar la pàgina",
"tamano_ventana"              : "Mida finestra",
"tamano_real"                 : "Mida real",
"cerrar"                      : "Tancar",
"mensaje_borrado"             : "missatge esborrat",
"ver_video"                   : "Veure vídeo",
"ver_contenido_externo"       : "Veure contingut extern",
"mensaje_pendiente_moderacion" : "Estem moderant el teu comentari. Si s\'aprova, es podrà veure d\'aquí a uns segons.",
"pendiente_moderacion"        : "pendent de moderació",
"foto" : "Foto",
"edicion_mensaje"             : "L\'edició d\'aquest missatge serà moderada. En cas que no passi el filtre, serà eliminat el missatge actual",
"no_editar"                   : "No es pot editar el missatge perquè està pendent de moderar",
"continuar"             : "Continua",
"xxx": "xxx"
}
}
if (typeof ESKUPobtieneIdioma == 'undefined') {
function ESKUPobtieneIdioma() { 
var metas = document.getElementsByTagName('meta'); 
var idioma = "es";
var idioma_meta = "";
var i;
for (i=0; i<metas.length; i++) { 
if (metas[i].getAttribute("name") == "lang") { 
idioma_meta = (metas[i].getAttribute("content")).toLowerCase();
break;
} 
}     
if ( _ESKUPhashMsgByLang.hasOwnProperty(idioma_meta) ) {
idioma = idioma_meta;
}
return(idioma);
}
}
if (typeof(LANGESKUP) == "undefined") {
var LANGESKUP = ESKUPobtieneIdioma();
} else {
if ( !_ESKUPhashMsgByLang.hasOwnProperty(LANGESKUP) ) {
LANGESKUP = "es";
}
}
if (typeof _s == "undefined") {
var _s = "";
}
var _hostCDNporDefecto  = 'http://eskup.elpais.com';
var _urlIneskup         = '/Ineskup';
var _urlOuteskup        = '/Outeskup?s=' + _s;
var _urlOuteskupSimple  = '/OuteskupSimple?s=' + _s;
var _urlESKUP           = '/Profileeskup?s=' + _s;
var _urlTSUpdate        = '/eskupTSUpdate?';
var _urlDENEGACIONES    = '/Scripts/autocompletado.pl?s=' + _s;
var _urlAUTOCOMPLETADO  = _urlDENEGACIONES;
var _urlNOTIFICACIONES  = '/Scripts/notificacion.pl';
var _urlBuscarUsuarios  = '/Scripts/buscaUsuarios.pl';
var _urlBuscarTemas     = '/Scripts/buscaEventos.pl';
var _mensaje_respuesta_notificacion_insulto = _ESKUPhashMsgByLang[LANGESKUP].la_notificacion_de_insulto;
var _mensaje_respuesta_notificacion_spam    = _ESKUPhashMsgByLang[LANGESKUP].la_notificacion_de_spam;
var _ventana=null;
var _documento=null;




if (typeof Array.prototype.indexOf != "function") {
Array.prototype.indexOf = function(obj) {
var i = this.length;
while (i--) {
if (this[i] === obj) {
return i;
}
}
return -1;
}
}
var elIntervalo_x;
var elIntervalo_y;
function f_anima(queDiv,coordenada,posfin,velocidad) {
if ( coordenada == "x" ) {
if ( elIntervalo_x ) clearInterval ( elIntervalo_x );
elIntervalo_x = setInterval ( "f_mueve('"+queDiv+"','"+coordenada+"',"+posfin+","+velocidad+")",velocidad);
} 
else {
if ( elIntervalo_y ) clearInterval ( elIntervalo_y );
elIntervalo_y = setInterval ( "f_mueve('"+queDiv+"','"+coordenada+"',"+posfin+","+velocidad+")",velocidad);
}
}
function f_mueve(queDiv,coordenada,posfin,velocidad) {
var coor;
var elDiv = document.getElementById(queDiv);
if ( coordenada == "x" ) {
coor = elDiv.offsetLeft;
}
else {
coor = elDiv.offsetTop;
}
var incremento = ( posfin - coor ) / 7;
if((incremento>0) && (incremento<1)) incremento = 1;
if((incremento<0) && (incremento>-1)) incremento = -1;
if ( posfin == coor ) {
if ( coordenada == "x" ) { 
clearInterval ( elIntervalo_x ); return; 
}
else { 
clearInterval ( elIntervalo_y ); return;
}
}
coor += incremento;
if ( coordenada == "x" ) {
elDiv.style.left = coor + "px";
}
else {
elDiv.style.top = coor + "px";
}
}



function f_muestra_menciones_usuario(idUsuario) {
location.href = '/' + idUsuario + '/referencias';
}
function f_muestra_mensajes_enviados(idUsuario) {
location.href = '/' + idUsuario;
}
function f_comprobar_url_valida(url) {
if (url == '') {
return '';
}
if (/https?:\/\/([\w-]+\.)/.test(url)) {
return url;
}
else {
return 'http://' + url;
}
}
function trim(cadena) {
var nueva_cadena = cadena.replace(/^\s*|\s*$/g,"");
return nueva_cadena;
}
function f_asigna_valor(campo_select, id_campo_texto) {
var valor_seleccionado = campo_select.options[campo_select.selectedIndex].value;
var campo_texto = document.getElementById(id_campo_texto);
campo_texto.value = valor_seleccionado;
}
function f_fija_class(id, estilo) {
var divCaja = document.getElementById(id);
divCaja.className = estilo;
}
function f_abrir_panel(idCaja) {
var divCaja = document.getElementById(idCaja);
divCaja.style.display = '';
}
function f_cerrar_panel(idCaja) {
var divCaja = document.getElementById(idCaja);
divCaja.style.display = 'none';
}
function f_quita_imagen_adjuntada(idCampo) {
var campoFile = document.getElementById(idCampo);
campoFile.value = '';
}
function f_activa_boton_envio_externo(boton, estilo) {
var nombre_class_activo = estilo + 'activo';
var nombre_class_noactivo = estilo;
if (boton.className == nombre_class_activo) {
boton.className = nombre_class_noactivo;
}
else {
boton.className = nombre_class_activo;
}
}
function f_muestra_servicios_externos(idMensaje, activa_servicios) {
var divTextoPublicarExterno   = document.getElementById("id_texto_publicar_externo_" + idMensaje);
var divEnlacePublicarTwitter  = document.getElementById("id_enlace_publicar_twitter_" + idMensaje);
var divEnlacePublicarFacebook = document.getElementById("id_enlace_publicar_facebook_" + idMensaje);
if (activa_servicios) {
if (divTextoPublicarExterno) {
divTextoPublicarExterno.style.display = '';
}
if (divEnlacePublicarTwitter) {
divEnlacePublicarTwitter.style.display = '';
}
if (divEnlacePublicarFacebook) {
divEnlacePublicarFacebook.style.display = '';
}
}
else {
if (divTextoPublicarExterno) {
divTextoPublicarExterno.style.display = 'none';
}
if (divEnlacePublicarTwitter) {
divEnlacePublicarTwitter.style.display = 'none';
}
if (divEnlacePublicarFacebook) {
divEnlacePublicarFacebook.style.display = 'none';
}
}
}
function f_obtener_lista_servicios_externos_seleccionado(id) {
var servicios_externos_seleccionados = '';
var opcionTwitter 	= document.getElementById('id_enlace_publicar_twitter_' + id);
if (opcionTwitter) {
if (opcionTwitter.className == 'externo twitteractivo') {
servicios_externos_seleccionados = _id_servicio_externo_twitter;
}
}
var opcionFacebook 	= document.getElementById('id_enlace_publicar_facebook_' + id);
if (opcionFacebook) {
if (opcionFacebook.className == 'externo facebookactivo') {
if (servicios_externos_seleccionados != '') {
servicios_externos_seleccionados = servicios_externos_seleccionados + '|';
}
servicios_externos_seleccionados = servicios_externos_seleccionados + _id_servicio_externo_facebook;
}
}
return servicios_externos_seleccionados;
}
function f_pulsa_video(objeto,contenedor) {
var nombre_class_activo = 'flotante';
var nombre_class_noactivo = 'normal';
var boton_alternar = document.getElementById('alternar');
var pos_Y_original = encuentraPosY (document.getElementById('alternancia'));
if (objeto.className == nombre_class_activo) {
objeto.className = nombre_class_noactivo;
objeto.style.top = '0px';
objeto.style.left = '0px';
boton_alternar.innerHTML = 'siempre visible';
boton_alternar.className = 'alternar';
if(window.addEventListener){
document.removeEventListener('scroll', f_posiciona, false);
} else {
window.detachEvent('onscroll', f_posiciona);
}
f_alto_ventana_padre();
}
else {
objeto.className = nombre_class_activo;
if(window.addEventListener){
document.addEventListener('scroll', f_posiciona = function() {f_posiciona_video(pos_Y_original);}, false);
} else {
window.attachEvent('onscroll', f_posiciona =  function() {f_posiciona_video(pos_Y_original);});
}
objeto.style.left = '-20' + 'px'; 
contenedor.style.height = '0';
boton_alternar.innerHTML = 'ubicaci&oacute;n original';
boton_alternar.className = 'alternar minimizar';
f_posiciona_video(pos_Y_original);
}
}
function f_alto_ventana_padre() {
document.getElementById('libre').style.height=document.getElementById('alternancia').offsetHeight+'px';
}
function f_posiciona_video(pos_Y_original) {
var objeto = document.getElementById('alternancia');
objeto.style.top = (f_obtieneScrollY() + document.documentElement.clientHeight - objeto.offsetHeight - pos_Y_original) + 'px';
}
function f_obtieneScrollY() { 	
navegador = navigator.userAgent;	
var scrollY = document.documentElement.scrollTop;
if ( navegador.indexOf("WebKit") != - 1 ) scrollY = document.body.scrollTop;
return(scrollY);
} 
function encuentraPosY(obj) {
var curtop = 0;
if (obj.offsetParent) while(1) {
curtop += obj.offsetTop;
if (!obj.offsetParent) break;
obj = obj.offsetParent;
}
else if (obj.y) curtop += obj.y;
return curtop;
}
function f_gestionar_check_recordarme(campoCheck, idCampo) {
var campoHiddenCheck = document.getElementById(idCampo);
if (campoCheck.className == 'recordarme') {
campoCheck.className = 'recordarme activo';
campoHiddenCheck.value = '1';
}
else {
campoCheck.className = 'recordarme';
campoHiddenCheck.value = '0';
}
}
function f_cerrar_panel_aclaracion_suscripciones() {
var divPanel = document.getElementById('panel_aclaracion');
divPanel.style.display = 'none';
_mostrarPanelAclaracion = false;
}
function f_cambia_boton_recarga(idBoton, estilo, idLetrero, estilo2) {
var nombre_class_activo = estilo + ' activo';
var nombre_class_noactivo = estilo;
var letrero = document.getElementById(idLetrero);
var boton   = document.getElementById(idBoton);
if (boton.className == nombre_class_activo) {
boton.className = nombre_class_noactivo;
letrero.innerHTML = 'Off';
_activarRecargaAutomatica = false;
}
else {
boton.className = nombre_class_activo;
letrero.innerHTML = 'On';
_activarRecargaAutomatica = true;
if (_hayInformacionPendiente) {
f_forzar_recarga_mensajes();
}
}
var nombre_class_activo2 = estilo2 + ' activo';
var nombre_class_noactivo2 = estilo2;
if (letrero.className == nombre_class_activo2) {
letrero.className = nombre_class_noactivo2;
}
else {
letrero.className = nombre_class_activo2;
}
}
function f_forzar_recarga_mensajes() {
recuperarInformacionMensajes();
_hayInformacionPendiente = false;
if (document.getElementById(_idContenedorRefr)) {
document.getElementById(_idContenedorRefr).style.display = 'none';
}
}
function f_ir_arriba() {
posicionarEnDivMensajes();
}
function f_muestra_panel_ayuda(tipo_tablon) {
if (_mostrarPanelAclaracion == true) {
var html = '';
if (tipo_tablon == 2) {
html = '  <p>En este panel aparecen los mensajes de los temas a los que est&eacute;s suscrito y de los contactos a los que sigues.</p>';
}
else  {
if (tipo_tablon == 3) {
html = '  <p>Desde este panel puedes enviar mensajes privados a cualquier usuario de ESKUP. Tambi&eacute;n aqu&iacute; recibes los que te env&iacute;an. Una N te avisar&aacute;..</p>';
}
else {
if (tipo_tablon == 4) {
html = '  <p>En este panel aparecen todos los mensajes que se est&aacute;n escribiendo en ESKUP. Todos todos.</p>';
}
else {
if (tipo_tablon == 1) {
html = '  <p>En este panel ves s&oacute;lo los mensajes que t&uacute; has escrito en ESKUP.</p>';
}
}
}
}
if (html != '') {
html = html + '  <div class="cerrar"><a href="javascript:void(0);" onclick="javascript:f_cerrar_panel(\'panel_aclaracion\');" title="Cerrar aviso"><img src="/Iconos/v1.x/v1.0/bolillos/cerrar.png" width="13" height="12" alt="Cerrar" /></a></div><!-- === cierre div cerrar === -->';
if (document.getElementById('panel_aclaracion')) {
var divPanel = document.getElementById('panel_aclaracion');
divPanel.innerHTML = html;
divPanel.style.display = '';
}
}
}
}
function f_es_valor_vacio(valor) {
nuevo_valor = valor.replace(/^(\s|\&nbsp;)*|(\s|\&nbsp;)*$/g,"");
if (nuevo_valor == '') {
return true;
}
else {
return false;
}
}
function f_es_longitud_correcta(mensaje) {
var valor_actual = mensaje.replace(/((https?|ftp):\/\/[\w\.\-\:/\%\~\?\#\[\]\@\!\$\&\'\(\)\*\+,;=]+)/ig, function($1) {
if ($1.length>=20) {
return '12345678901234567890';
}
return($1);
}
);
valor_actual = valor_actual.replace(/<\/?[bi]>/ig, '');
var num = valor_actual.length;
if (num > _numero_maximo_caracteres_mensaje) {
return false;
}
else {
return true;
}
}
function f_obtener_paginacion_usuarios(idUsuario, tipoUsuario, numeroUsarios, pagina) {
var html_paginacion = '';
if ( numeroUsarios == 0) {
return html_paginacion;
}
if (numeroUsarios <= _numero_maximo_usuarios_a_mostrar) {
return html_paginacion;
}
if (tipoUsuario == 1) {
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
html_funcion = "javascript:f_muestra_listado_seguidores_movil";
} else {
html_funcion = "javascript:f_muestra_listado_seguidores";
}
}
else {
if (tipoUsuario == 2) {
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
html_funcion = "javascript:f_muestra_listado_a_quien_sigo_movil";
} else {
html_funcion = "javascript:f_muestra_listado_a_quien_sigo";
}
}
else {
if (tipoUsuario == 3) {
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
html_funcion = "javascript:f_muestra_listado_seguidores_evento_movil";
} else {
html_funcion = "javascript:f_muestra_listado_seguidores_evento";
}
}
else {
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
html_funcion = "javascript:f_muestra_listado_escritores_evento_movil";
} else {
html_funcion = "javascript:f_muestra_listado_escritores_evento";
}
}
}
}
html_paginacion = html_paginacion + '  <ul>';
var pagina_anterior = pagina - 1;
if (pagina <= 1) {
pagina_anterior = 1;
pagina          = 1;
html_paginacion = html_paginacion + '<li><span class="inhabilitado" title="' + _ESKUPhashMsgByLang[LANGESKUP].primera_pagina + '">&lt;&lt;</span></li>';
html_paginacion = html_paginacion + '<li><span class="inhabilitado" title="' + _ESKUPhashMsgByLang[LANGESKUP].pagina_anterior + '">&lt;</span></li>';
}
else {
html_paginacion = html_paginacion + '<li><a href="javascript:void(0);" onclick="' + html_funcion + '(\'' + idUsuario + '\', 1);posicionarEnDiv(\'id_usuarios\');" class="flecha" title="' + _ESKUPhashMsgByLang[LANGESKUP].primera_pagina + '">&lt;&lt;</a></li>';
html_paginacion = html_paginacion + '<li><a href="javascript:void(0);" onclick="' + html_funcion + '(\'' + idUsuario + '\', ' + pagina_anterior + ');posicionarEnDiv(\'id_usuarios\');" class="flecha" title="' + _ESKUPhashMsgByLang[LANGESKUP].pagina_anterior + '">&lt;</a></li>';
}
html_paginacion = html_paginacion + '<li class="activo">' + pagina + '</li>';
numero_paginas = Math.ceil(numeroUsarios / _numero_maximo_usuarios_a_mostrar);
pagina_siguiente = pagina + 1;
if (pagina >= numero_paginas) {
pagina_siguiente = numero_paginas;
html_paginacion = html_paginacion + '<li><span class="inhabilitado" title="' + _ESKUPhashMsgByLang[LANGESKUP].pagina_siguiente + '">&gt;</span></li>';
}
else {
html_paginacion = html_paginacion + '<li><a href="javascript:void(0);" onclick="' + html_funcion + '(\'' + idUsuario + '\',' + pagina_siguiente + ');posicionarEnDiv(\'id_usuarios\');" class="flecha" title="' + _ESKUPhashMsgByLang[LANGESKUP].pagina_siguiente + '">&gt;</a></li>';
}
html_paginacion = html_paginacion + '</ul>';
return html_paginacion;
}
function f_obtener_html_numero_usuarios_listado(numero) {
var html = '';
var str_numero = numero + '';
var numero_caracteres = str_numero.length;
if (numero_caracteres == 1) {
html = '<span class="cifra">' + numero + '</span>';
}
else {
for (i=0; i<numero_caracteres; i++) {
digito = str_numero.charAt(i);
html = html + '<span class="cifra">' + digito + '</span>';
}
}
return html;
}
function f_limpia_campos_formulario_evento(id) {
if (document.getElementById('campo_formulario_texto_mensaje')) {
document.getElementById('campo_formulario_texto_mensaje').value = _texto_inicializacion_textarea;
document.getElementById('campo_formulario_texto_mensaje').className = 'cajareposo';
}
if (document.getElementById('secundario_campo_formulario_texto_mensaje')) {
document.getElementById('secundario_campo_formulario_texto_mensaje').className = 'secundario';
}
if (document.getElementById('m')) {
document.getElementById('m').value = '';
}
if (document.getElementById('etiqueta_numero_maximo_caracteres') ) {
var etiqueta = document.getElementById('etiqueta_numero_maximo_caracteres');
etiqueta.innerHTML = _numero_maximo_caracteres_mensaje;
etiqueta.style.color = '';
}
if (document.getElementById('t') ) {
document.getElementById('t').value = '';
var numero_li = 0;
var panelEventos = null;
if (document.getElementById('id_eventos_para_escribir_' + id) ) {
panelEventos = document.getElementById('id_eventos_para_escribir_' + id);
numero_li = panelEventos.childNodes.length;
}
for (var i = 0; i < numero_li; i++) {
campo_li = panelEventos.childNodes[i];
clave_id = campo_li.id;
campo_li.id = '';
var campo = document.getElementById('li_' + id + '_' + clave_id);
if (campo) {
campo.className = 'nombretema';
}
}
}
if (document.getElementById('id_listausuarios')) {
var panelUsuarios = document.getElementById('id_listausuarios');
panelUsuarios.innerHTML = '';
}
if (document.getElementById('capaopciones_adjuntar_' + id)) {
var divAdjuntar = document.getElementById('capaopciones_adjuntar_' + id);
divAdjuntar.innerHTML = '';
divAdjuntar.style.display = 'none';
}
}
function f_lanza_proceso_para_borrar_temporal(idMensajeTemporal) {
if (typeof _timer_borrado_temporal != "undefined") {
clearInterval(_timer_borrado_temporal);
}
_idMensajeTemporal = idMensajeTemporal;
_timer_borrado_temporal = setInterval(f_borra_mensaje_temporal, _segsBorrarTemporal * 1000);
}
function f_borra_mensaje_temporal() {
if (typeof _timer_borrado_temporal != "undefined") {
clearInterval(_timer_borrado_temporal);
}
if (document.getElementById('provisional')) {
var idMsg = 'mensaje_' + _idMensajeTemporal;
if (document.getElementById(idMsg)) {
var divMensajeTemporal = document.getElementById('provisional');
divMensajeTemporal.removeChild(document.getElementById(idMsg));
}
}
}
function f_autentica_usuario(idCampoLogin, idCampoPasswd) {
var campoLogin  = document.getElementById(idCampoLogin);
var campoPasswd = document.getElementById(idCampoPasswd);
if ( (campoLogin.value == '') || (campoPasswd.value == '') )  {
alert('Tienes que teclear usuario y contraseña');
return false;
}
var valor_usuario = campoLogin.value;
if ( valor_usuario.match(/(\w*)@(\w+)/) ) {
var formulario = document.getElementById('formulario_sesion');
formulario.submit();
}
else {
alert('El campo \'usuario\' no parece un correo electrónico. Por favor, revísalo.');
return false;
}
}
function f_comprobar_submit(evento, idFormulario) {
if (window.event) {
tecla = evento.keyCode;
src   = evento.srcElement;
}
else if (evento.which) {
tecla = evento.which;
src   = evento.target;
}
if (tecla == 13) {
f_autentica_usuario('cajalogin_camponombreusuario', 'cajalogin_campocontrasena');
}
}
function f_lanza_actualizacion_a_quien_sigo() {
if (typeof _timer_actualizar_aquiensigo != "undefined") {
clearInterval(_timer_actualizar_aquiensigo);
}
_timer_actualizar_aquiensigo = setInterval(f_actualiza_a_quien_sigo, _tiempoActualizarAQuienSigo * 1000);
}
function f_actualiza_a_quien_sigo() {
f_obtener_quien_sigo();
}
function f_poner_foco_campo_texto(idCampo) {
if (document.getElementById(idCampo)) {
var campo_texto = document.getElementById(idCampo);
campo_texto.focus();
}
}

function f_restablecer_boton_publicar(idBoton) {
if (document.getElementById(idBoton)) {
var divBoton = document.getElementById(idBoton);
divBoton.className = "publicar";
}
}
function f_contabiliza_peticion() {
if (_es_primera_carga == 0) {
if (typeof _quiensoy != 'undefined' && (_quiensoy == 'widget' || _quiensoy == "comentarios" || _quiensoy == "mensajeUnico")) {
EPETtrackWidgetNewInfoFromAJAX();
if (parent.postMessage) {
parent.postMessage("{'id':'" + _identificadorWidget + "','command':'trackWidgetNewInfo','params':[]}", "*");
} 
} else {
EPETtrackNewInfoFromAJAX();
}
}
}
function f_pide_publicidad() {

}
function f_contabiliza_publicacion_comentario() {
try {
parent.trackPublicarComentario();
} catch (e) {
}
if (((typeof _quiensoy != 'undefined' && 
(_quiensoy == 'widget' || _quiensoy == "comentarios" || _quiensoy == "mensajeUnico")
&& parent.postMessage))
&& (typeof _identificadorWidget !='undefined')) {
parent.postMessage("{'id':'" + _identificadorWidget + "','command':'trackWidgetNewComment','params':[]}", "*");
}
}
function f_cierra_panel_informacion_sms() {
f_cerrar_panel('id_instruccionessms');
}
function f_muestra_panel_informacion_sms(id_campo) {
var panelSMS = null;
if (document.getElementById('id_instruccionessms')) {
panelSMS = document.getElementById('id_instruccionessms');
if (document.getElementById(id_campo)) {
panelPadre = document.getElementById(id_campo);
var posicion_clave_sms = EPETUtils_calcAbsPosition(panelPadre);
panelSMS.style.left = posicion_clave_sms[0] + 'px';
panelSMS.style.top  = posicion_clave_sms[1] + panelPadre.clientHeight +'px';
}
esta_visible = panelSMS.style.display;
if (esta_visible == '') {
panelSMS.style.display = 'none';
}
else {
panelSMS.style.display = '';
}
}
}
function f_muestra_panel_aviso_permisos_escritura(idMensaje) {
var panelAviso = null;
if (document.getElementById('cuidado_aclaracion')) {
panelAviso = document.getElementById('cuidado_aclaracion');
var id_campo = 'cuidado_' + idMensaje;
if (document.getElementById(id_campo)) {
panelPadre = document.getElementById(id_campo);
var posicion_clave = EPETUtils_calcAbsPositionV2(panelPadre);
panelAviso.style.left = ( posicion_clave[0] + (panelPadre.clientWidth / 2) ) - 230 +'px';
panelAviso.style.top  = posicion_clave[1] - 68  + 'px';
}
esta_visible = panelAviso.style.display;
if (esta_visible == '') {
panelAviso.style.display = 'none';
}
else {
panelAviso.style.display = '';
}
}
}



function f_mostrar_caja_adjuntar_imagen(id) {
var html = "";
html = html + '  <p>' + _ESKUPhashMsgByLang[LANGESKUP].dinos_la_ubicacion_de_la_imagen + '</p>';
html = html + '  <span><input id="p" name="p" type="file" size="55" /></span>';
html = html + '  <a href="javascript:void(0);" onclick="javascript:f_quita_imagen_adjuntada(\'p\');" class="boton borrarimagen" title="' + _ESKUPhashMsgByLang[LANGESKUP].borrar_imagen + '">' + _ESKUPhashMsgByLang[LANGESKUP].borrar_imagen + '</a>';
var boton_adjuntar = document.getElementById('boton_adjuntar_' + id);
var divCajaAdjuntar = document.getElementById('capaopciones_adjuntar_' + id);
if (divCajaAdjuntar.innerHTML == '') {
divCajaAdjuntar.innerHTML = html;
}
if (divCajaAdjuntar.style.display == '') {
divCajaAdjuntar.style.display = 'none';
boton_adjuntar.className = 'boton imagen';
}
else {
divCajaAdjuntar.style.display = '';
boton_adjuntar.className = 'boton imagen activo';
}
if (document.getElementById('capaopciones_destino_' + id)) {
var divCajaDestino  = document.getElementById('capaopciones_destino_' + id);
divCajaDestino.style.display = 'none';
}
var boton_donde_publicar = document.getElementById('boton_donde_publicar_' + id);
if (boton_donde_publicar != null) {
boton_donde_publicar.className = 'boton temas';
}
var boton_destinatarios = document.getElementById('boton_destinatario_' + id);
if (boton_destinatarios != null) {
boton_destinatarios.className = 'boton destinatario';
}
}
function f_pinta_caja_destinatarios(idCaja) {
var html = '';
html = html + '     <input type="text" class="destinatarios" name="campo_formulario_nombre_usuario_para_publicar" id="nombre_usuario_para_publicar" value="" autocomplete="off" onfocus="ESKUPautocompleteInitialize(this, f_muestra_usuarios_para_enviar);"/><a href="javascript:void(0);" class="boton fijar" onclick="javascript:ESKUPautocompleteInitialize(this, f_muestra_usuarios_para_enviar);">Fijar destinatario</a>';
html = html + '     <ul id="id_listausuarios" style="display: none;"></ul>';
var boton_adjuntar = document.getElementById('boton_adjuntar_' + idCaja);
boton_adjuntar.className = 'boton imagen';
var divCajaDestino = document.getElementById('capaopciones_destino_' + idCaja);
if (divCajaDestino.innerHTML == '') {
divCajaDestino.innerHTML = html;
divCajaDestino.className = 'usuarios';
}
var boton_destinatarios = document.getElementById('boton_destinatario_' + idCaja);
if (divCajaDestino.style.display == '') {
divCajaDestino.style.display = 'none';
boton_destinatarios.className = 'boton destinatario';
}
else {
divCajaDestino.style.display = '';
boton_destinatarios.className = 'boton destinatario activo';
}
var divCajaAdjuntar = document.getElementById('capaopciones_adjuntar_' + idCaja);
divCajaAdjuntar.style.display = 'none';
}
function f_muestra_usuarios_para_enviar(lista_usuarios_tecleados) {
var numero_usuarios = lista_usuarios_tecleados.length;
if (numero_usuarios == 0) {
return true;
}
document.getElementById('nombre_usuario_para_publicar').value = '';
for (i = 0; i < numero_usuarios; i++) {
var usuario = lista_usuarios_tecleados[i];
var nick_usuario = trim(usuario.nick);
var nombrebonito_usuario = usuario.nombrebonito;
var foto_usuario = usuario.foto;
var usuario_valido = true;
if (nick_usuario == _nickname) {
usuario_valido = false;
alert('No es posible mandar privados a uno mismo');
}
else {
f_es_usuario_valido(nick_usuario);
var divCajaUL = document.getElementById('id_listausuarios');
var html_actual = divCajaUL.innerHTML;
var numero_elementos_usuario = divCajaUL.childNodes.length;
if (numero_elementos_usuario > 0) {
if (f_comprobar_existe_usuario(divCajaUL, nick_usuario) == true) {
usuario_valido = false;
}
}
}
if (usuario_valido == true) {
var cajaLI = document.createElement('li');
cajaLI.id = "li_" + nick_usuario;
cajaLI.innerHTML = '<span title="Ver todos sus mensajes" class="usuario"><span class="foto"><img src="' + foto_usuario + '" width="75" height="75" alt="Foto" /></span><span class="nombre">' + nick_usuario + '<span class="nombrebonito">' + nombrebonito_usuario + '</span></span></span><a href="javascript:void(0);" onclick="javascript:f_quita_usuarios_para_enviar(\'li_' + nick_usuario + '\');" title="Quitar de la lista" class="cerrar"></a>';
divCajaUL.appendChild(cajaLI);
divCajaUL.style.display = '';
}
}
}
function f_quita_usuarios_para_enviar(id_li) {
var cajaLI = document.getElementById(id_li);
var cajaUL = document.getElementById('id_listausuarios');
cajaUL.removeChild(cajaLI);
var numero_elementos_usuario = cajaUL.childNodes.length;
if (numero_elementos_usuario == 0) {
cajaUL.style.display = 'none';
}
}
function f_comprobar_existe_usuario(caja, nombre) {
var existe_usuario = false;
var nuevo_id = 'li_' + nombre;
numero_usuarios = caja.childNodes.length;
for (var i = 0; i < numero_usuarios; i++) {
cajaLI = caja.childNodes[i];
if (cajaLI.id == nuevo_id) {
existe_usuario = true;
}
}
return existe_usuario;
}
function f_es_usuario_valido(nombre) {
}
function f_envia() {
var mensaje_error = 'No has seleccionado ningún usuario';
var cajaUL = document.getElementById('id_listausuarios');
if (cajaUL == null) {
alert(mensaje_error);
return false;
}
if (cajaUL.childNodes == null) {
alert(mensaje_error);
return false;
}
if (cajaUL.childNodes.length == 0) {
alert(mensaje_error);
return false;
}
var numero_destinatarios = cajaUL.childNodes.length;
if (numero_destinatarios == 0) {
alert(mensaje_error);
return false;
}
var hayErrores = false;
var lista_usuarios = '';
for (var i = 0; i < numero_destinatarios; i++) {
usuario = cajaUL.childNodes[i];
clave_id = usuario.id;
id_usuario = clave_id.substring(3);
nombre_class = usuario.className;
if (nombre_class == 'invalido') {
hayErrores = true;
}
lista_usuarios = lista_usuarios + id_usuario + '|';
}
if (hayErrores == true) {
if (numero_destinatarios == 1) {
alert('El usuario al que vas a enviar el mensaje no es válido');
}
else {
alert('Hay usuarios a los que vas a enviar el mensaje que no son válidos');
}
return false;
}
var contenido_mensaje = document.getElementById('campo_formulario_texto_mensaje').value;
if ( f_es_valor_vacio(contenido_mensaje) || (contenido_mensaje == _texto_inicializacion_textarea) ) {
alert(_ESKUPhashMsgByLang[LANGESKUP].no_has_escrito_nada);
return false;
}
if ( ! f_es_longitud_correcta(contenido_mensaje) ) {
alert(_ESKUPhashMsgByLang[LANGESKUP].el_mensaje_no_puede_tener_mas_de + _numero_maximo_caracteres_mensaje + ' ' + _ESKUPhashMsgByLang[LANGESKUP].caracteres);
return false;
}
document.getElementById('m').value = contenido_mensaje;
document.getElementById('t').value = lista_usuarios;
var valor_imagen = '';
if (document.getElementById('p') ) {
valor_imagen = document.getElementById('p').value;
}

if (document.getElementById("boton_publicar")) {
document.getElementById("boton_publicar").className = "trabajando";
}
var formulario = document.getElementById('formulario_escribir');
formulario.submit();
}
function comprobarPost_mensaje_evento(idMensaje, comando, pintarMensajeNuevo) {
var i = document.getElementById("iframe_"+idMensaje);
if (i.contentDocument) {
var d = i.contentDocument;
} else if (i.contentWindow) {
var d = i.contentWindow.document;
} else {
var d = window.frames["iframe_"+idMensaje].document;
}
if (d.location.href == "about:blank") {
return true;
}
if (!d.getElementById("status")) {
alert(_ESKUPhashMsgByLang[LANGESKUP].error_al_enviar_el_mensaje);
f_restablecer_boton_publicar("boton_publicar");

return false;
}
if (d.getElementById("status").innerHTML != "OK") {
msg = d.getElementById("info").innerHTML + " (Error " +d.getElementById("code").innerHTML + ")";
alert(msg);
f_restablecer_boton_publicar("boton_publicar");

return false;
}
var retorno = true;
var mensaje = _ESKUPhashMsgByLang[LANGESKUP].mensaje_enviado_correctamente;
if (d.getElementById("info").innerHTML != "") {
mensaje = d.getElementById("info").innerHTML;
alert(mensaje);
}
var quitarMensajeTemporal = false;
var hashMensajeTemporal   = null;
if (pintarMensajeNuevo == 1) {
var sigoalevento = false;
var numero_eventos_seleccionados = _arrayEventosSeleccionadosParaEscribir.length;
if (numero_eventos_seleccionados > 0 ) {
for (var i=0; i < numero_eventos_seleccionados; i++) {
var id_evento_seleccionado = _arrayEventosSeleccionadosParaEscribir[i];
for (var claveEvento in _hashEventosSeguidos) {
if (id_evento_seleccionado == claveEvento) {
sigoalevento = true;
}
}
}
}
if ( (_tipoTablon == 2) && (_usuario_sigue_a_si_mismo == 0) && (sigoalevento == false) ) {
quitarMensajeTemporal = true;
}
}
else {
if (_hashDatosEvento.estado_seguimiento == 0) {
quitarMensajeTemporal = true;
}
}
hashMensajeTemporal = crearMensajeTemporal();
var htmlMensajeTemporal         = pintaMensaje(hashMensajeTemporal, true);
var divContenedorMensajes       = document.getElementById(_idContenedorMsgs);
divContenedorMensajes.innerHTML = htmlMensajeTemporal + divContenedorMensajes.innerHTML;
if (document.getElementById("explicacion_" + hashMensajeTemporal["idMsg"])) {
if (typeof _quiensoy != "undefined" && (_quiensoy == "comentarios" || _quiensoy == "mensajeUnico")) {
if (typeof _tipoHilo != "undefined"    && _tipoHilo == "o" &&
typeof _soyOpinador != "undefined" && _soyOpinador == false) {
document.getElementById("explicacion_" + hashMensajeTemporal["idMsg"]).innerHTML = _ESKUPhashMsgByLang[LANGESKUP].no_perteneces_al_foro + " <a href=\"javascript:void(0);\" onclick=\"javascript:cambiarPestanaComentarios('');\" title=\"" + _ESKUPhashMsgByLang[LANGESKUP].ver_todos_los_mensajes + "\">\"" + _ESKUPhashMsgByLang[LANGESKUP].todos_los_comentarios + "\"</a>";
} else
if (typeof _hilo != "undefined" && esHiloPremoderado(_hilo) && !(typeof _soyOpinador != "undefined" && _soyOpinador == true)) {
document.getElementById("explicacion_" + hashMensajeTemporal["idMsg"]).innerHTML = _ESKUPhashMsgByLang[LANGESKUP].mensaje_pendiente_moderacion;
}
} else
if ((esEventoPremoderado(_tablon)&&(typeof _soyOpinador=="undefined"|| _soyOpinador == false))) {
document.getElementById("explicacion_" + hashMensajeTemporal["idMsg"]).innerHTML = _ESKUPhashMsgByLang[LANGESKUP].mensaje_pendiente_moderacion;
}
}
if (quitarMensajeTemporal) {
f_lanza_proceso_para_borrar_temporal(hashMensajeTemporal["idMsg"]);
}
f_restablecer_boton_publicar("boton_publicar");

f_limpia_campos_formulario_evento('msg');
if (typeof _quiensoy != "undefined" && _quiensoy == "comentarios" && (comando == "reply" || comando == "add")) {
f_contabiliza_publicacion_comentario();
}
i.src = "about:blank";
d.location.href = "about:blank";
return retorno;
}
function f_publica(tipo_publicacion, idCaja) {
if (document.getElementById("boton_publicar") && 
document.getElementById("boton_publicar").className == "trabajando") {
return false;
}
_arrayEventosSeleccionadosParaEscribir = Array();
var lista_eventos = '';
if (tipo_publicacion == 'evento') {
lista_eventos = '*' + _tablon;
_arrayEventosSeleccionadosParaEscribir[0] = _tablon;
}
else {
var panelEventos = null;
var numero_li = 0;
if ( document.getElementById('id_eventos_para_escribir_' + idCaja) ) {
panelEventos = document.getElementById('id_eventos_para_escribir_' + idCaja);
numero_li = panelEventos.childNodes.length;
}
var numero_temas_seleccionados = 0;
for (var i = 0; i < numero_li; i++) {
campo    = panelEventos.childNodes[i];
clave_id = campo.id;
var estaSeleccionado = false;
id_evento = campo.id;
if (id_evento != '') {
estaSeleccionado = true;
}
if (estaSeleccionado) {
lista_eventos = lista_eventos + '*' + id_evento + '|';
_arrayEventosSeleccionadosParaEscribir[numero_temas_seleccionados] = id_evento;
numero_temas_seleccionados++;
}
}
}
var contenido_mensaje = document.getElementById('campo_formulario_texto_mensaje').value;
if ( f_es_valor_vacio(contenido_mensaje) || (contenido_mensaje == _texto_inicializacion_textarea) ) {
alert(_ESKUPhashMsgByLang[LANGESKUP].no_has_escrito_nada);
return false;
}
if ( ! f_es_longitud_correcta(contenido_mensaje) ) {
alert(_ESKUPhashMsgByLang[LANGESKUP].el_mensaje_no_puede_tener_mas_de + _numero_maximo_caracteres_mensaje + ' ' + _ESKUPhashMsgByLang[LANGESKUP].caracteres);
return false;
}
document.getElementById('m').value = contenido_mensaje;
document.getElementById('t').value = lista_eventos;
var lista_servicios_externos = f_obtener_lista_servicios_externos_seleccionado('');
document.getElementById('d').value = lista_servicios_externos;
var valor_imagen = '';
if (document.getElementById('p') ) {
valor_imagen = document.getElementById('p').value;
}

if (document.getElementById("boton_publicar")) {
document.getElementById("boton_publicar").className = "trabajando";
}
var formulario = document.getElementById('formulario_escribir');
formulario.submit();
}
function f_activa_caja_escribir(idCampo, texto_inicial) {
var campo = document.getElementById(idCampo);
var valor_actual = campo.value;
if (valor_actual == texto_inicial) {
campo.value = '';
}
campo.className = 'cajaactiva';
if (document.getElementById('secundario_' + idCampo)) {
var campoSecundario = document.getElementById('secundario_' + idCampo);
campoSecundario.className = 'secundario activo';
}
f_poner_foco_campo_texto(idCampo);
}
function f_inicia_caja_escribir(idCampo, texto, estiloCaja, estiloCampoCaracteres) {
var campo = document.getElementById(idCampo);
campo.className = estiloCaja;
campo.value = texto;
if (document.getElementById('secundario_' + idCampo)) {
var campoSecundario = document.getElementById('secundario_' + idCampo);
campoSecundario.className = estiloCampoCaracteres;
}
}
function f_tecleando(evento, idCampo, idEtiqueta) {
var valorReturn = true;
var evtobj = window.event ? event : evento;
if (evtobj.type == "keyup" || evtobj.type == "keydown" || evtobj.type == "keypress" ) {
var unicode=evtobj.charCode? evtobj.charCode : evtobj.keyCode;
var actualkey=String.fromCharCode(unicode);
if (evtobj.ctrlKey) {
if (actualkey == 'b' || actualkey == 'B' || actualkey == 'n' || actualkey == 'N' || actualkey == 'i' || actualkey == 'I') {
if (evtobj.type == "keyup") {
insertaTagEnMensaje(idCampo, actualkey.toLowerCase());
}
evtobj.returnValue  = false;
evtobj.cancelBubble = true;
if (evtobj.stopPropagation) evtobj.stopPropagation();
valorReturn = false;
}
}
}
var campo = document.getElementById(idCampo);
var valor_actual = campo.value;
valor_actual = valor_actual.replace(/((https?|ftp):\/\/[\w\.\-\:/\%\~\?\#\[\]\@\!\$\&\'\(\)\*\+,;=]+)/ig, function($1) {
if ($1.length>=20) {
return '12345678901234567890';
}
return($1);
}
);
valor_actual = valor_actual.replace(/<\/?[bi]>/ig, '');
valor_actual = valor_actual.replace(/<\/?div( )?(class=["\']?[^\'"]*["\']?)?>/ig, '');
var len_actual = valor_actual.length;
diferencia = _numero_maximo_caracteres_mensaje - len_actual;
var color_texto = '';
if (diferencia >= 140) {
color_texto = '';
}
else {
if ( (diferencia >= 20) && (diferencia < 140) ) {
color_texto = '#b64924';
}
else {
if ( (diferencia > 0) && (diferencia < 20) ) {
color_texto = '#f80000';
}
else {
color_texto = '#bebebe';
}
}
}
var etiqueta = document.getElementById(idEtiqueta);
etiqueta.innerHTML = diferencia;
etiqueta.style.color = color_texto;
return valorReturn;
}

function insertaTagEnMensaje(idTextarea, queTag) {
if (typeof idTextarea == "undefined") {
return false;
}
if (queTag == 'n') {
queTag = 'b';
}
if (document.getElementById(idTextarea).className == 'cajareposo') {
f_inicia_caja_escribir(idTextarea, '', 'cajaactiva', 'secundario activo');
}
if (isIE && isIE < 9) {
var userSelection;
if (window.getSelection) {
userSelection = window.getSelection();
} else if (document.selection) {
userSelection = document.selection.createRange();
}
if (userSelection.parentElement().id == idTextarea) { 
userSelection.text = "<" + queTag + ">" + userSelection.text + "</" + queTag + ">";
userSelection.collapse(true); 
userSelection.select(); 
} else {
document.getElementById(idTextarea).value += "<" + queTag + "></" + queTag + ">";
var range = document.getElementById(idTextarea).createTextRange(); 
range.collapse(true); 
range.moveEnd('character', (document.getElementById(idTextarea).value.length-4)); 
range.moveStart('character', (document.getElementById(idTextarea).value.length-4)); 
range.select(); 
}
setTimeout('document.getElementById("'+idTextarea+'").focus()',100);
} else {
scrollAnterior = (document.getElementById(idTextarea).scrollTop);
textoCompleto  = document.getElementById(idTextarea).value;
textoAnterior  = textoCompleto;
inicioSele     = document.getElementById(idTextarea).selectionStart;
finSele        = document.getElementById(idTextarea).selectionEnd;
if ( (textoCompleto.substring(finSele-1,finSele)) == " ") finSele--;
if ( (textoCompleto.substring(inicioSele,inicioSele+1)) == " ") inicioSele++;
textoSeleccionado = textoCompleto.substring(inicioSele,finSele);
nuevoTexto = textoCompleto.substring(0,inicioSele) + "<" + queTag + ">" + 
textoSeleccionado + "</" + queTag + ">" + textoCompleto.substring(finSele,textoCompleto.length);
document.getElementById(idTextarea).value = nuevoTexto;
longitudTag = ( ( queTag.length + 2 ) * 2 ) + 1;
document.getElementById(idTextarea).scrollTop = scrollAnterior;
setTimeout('document.getElementById("'+idTextarea+'").focus()',100);
setTimeout('document.getElementById("'+idTextarea+'").setSelectionRange(finSele+longitudTag,finSele+longitudTag);',200);
}
}
function f_obtener_eventos_seguidos(idCaja) {
var cadena_params = "action=list_eventos";
if (_ultimaRecargaServidor > 0) {
cadena_params += "&ts=" + parseInt(_ultimaRecargaServidor);
}
if (_obtenidasSuscripciones == true) {
f_pinta_caja_eventos_seguidos_usuario(idCaja);
}
else {
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status != 200) {
_obtenidasSuscripciones = false;
} else {
_obtenidasSuscripciones = true;
var _hashTMP = Array();
var data = httpRequest.responseText;
eval("_hashTMP = " + data);
_hashEventosSeguidos = _hashTMP.perfilesEventos;
_numeroEventosSeguidos = _hashTMP.numeroEventos;
}
f_pinta_caja_eventos_seguidos_usuario(idCaja);
}, _urlESKUP + "&" + cadena_params);
}
}
function f_cerrar_ventana_listado_para_escribir(idTelon, idContenedor, idCaja) {
var divTelon 			= document.getElementById(idTelon);
var divCapaFlotante 	 	= document.getElementById(idContenedor);
divTelon.style.display 	= 'none';
divCapaFlotante.style.display = 'none';
if (_datosEventosParaEscribirModificados == true) {
f_obtener_eventos_para_escribir(idCaja, true, false);
}
_datosEventosParaEscribirModificados = false;
}
function f_marca_tema_para_borrar(id) {
var divTema = document.getElementById(id);
if (divTema.className == 'nombretema') {
divTema.className = 'nombretema activo';
divTema.title = 'Dejar de escribir en el tema';
}
else {
divTema.className = 'nombretema';
divTema.title = 'Pulsa para poder escribir en el tema';
}
}
function f_marca_tema_para_borrar_en_listado(idEvento, tipo_suscripcion) {
if (tipo_suscripcion == '0') {
var ret = confirm('El tema no tiene suscripción. Si dejas de escribir en él, necesitarás autorización para volver a escribir. ¿Quieres dejar de escribir en él de todas formas?');
if (ret == false) {
f_mostrar_menu_botones('escribir_evento', 'off', idEvento);
return false;
}
}
else {
if (tipo_suscripcion == '2') {
var ret = confirm('El tema es de participación restringida. Si dejas de escribir en él, necesitarás autorización para volver a escribir. ¿Quieres dejar de escribir en él de todas formas?');
if (ret == false) {
f_mostrar_menu_botones('escribir_evento', 'off', idEvento);
return false;
}
}
else {
}
}
f_peticion_quitar_evento_de_escribir(idEvento);
}
function f_peticion_quitar_evento_de_escribir(idEvento) {
var cadena_params = 'action=del_writers&user=' + _nickname + '&data=' + idEvento;
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status != 200) {
alert(_ESKUPhashMsgByLang[LANGESKUP].error_al_realizar_la_operacion);
}
else {
var data = httpRequest.responseText;
var html_botones_menu_escribir = f_componer_html_botones_menu_escribir_evento(false, idEvento, 0);
var divBotonesTema = document.getElementById('id_menu_botones_escribir_' + idEvento);
divBotonesTema.innerHTML = html_botones_menu_escribir;
if (_hashEventosParaEscribir[idEvento]) {
delete _hashEventosParaEscribir[idEvento];
_numeroEventosParaEscribir--;
}
_datosEventosParaEscribirModificados = true;
var divTemasEscritos = document.getElementById('id_numero_temas_escritos');
divTemasEscritos.innerHTML = _numeroEventosParaEscribir;
}
}, _urlESKUP + "&" + cadena_params);
}
function f_actualizar_eventos_para_escribir(idCaja) {
var str_eventos_para_quitar = '';
var listaEventos = _hashEventosParaEscribir;
for (var codigoEvento in listaEventos) {
var lh_datos_evento = listaEventos[codigoEvento];
nombre = lh_datos_evento['nombre'];
var elemento = document.getElementById('id_' + codigoEvento);
if ( (elemento.className == 'nombretema') && (elemento.style.display == '') ) {
if (str_eventos_para_quitar != '') {
str_eventos_para_quitar = str_eventos_para_quitar + ',';
}
str_eventos_para_quitar = str_eventos_para_quitar + codigoEvento;
}
}
if (str_eventos_para_quitar != '') {
var cadena_params = 'action=del_writers&user=' + _nickname + '&data=' + str_eventos_para_quitar;
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status != 200) {
var divError = document.getElementById('capainfo_error');
divError.style.display = '';
}
else {
var data = httpRequest.responseText;
var divOK = document.getElementById('capainfo_ok');
divOK.style.display = '';
var lista_eventos_para_quitar = str_eventos_para_quitar.split(/,/);
for (var i = 0; i < lista_eventos_para_quitar.length; i++) {
var claveEvento = lista_eventos_para_quitar[i];
var elemento = document.getElementById('id_' + claveEvento);
elemento.style.display = 'none';
if (_hashEventosParaEscribir[claveEvento]) {
delete _hashEventosParaEscribir[claveEvento];
_numeroEventosParaEscribir--;
}
}
_datosEventosParaEscribirModificados = true;
var divTemasEscritos = document.getElementById('id_numero_temas_escritos');
divTemasEscritos.innerHTML = _numeroEventosParaEscribir;
f_editar_listado_temas_para_escribir(idCaja);
}
}, _urlESKUP + "&" + cadena_params);
}
}
function f_editar_listado_temas_para_escribir(idCaja) {
var html_listado_temas = f_obtener_html_listado_temas_para_escribir(idCaja, _hashEventosParaEscribir);
var numero_temas = _numeroEventosParaEscribir;
var html = '';
html = html + '<div class="flotanteeditarlistado">';
html = html + '  <div class="contenedorlistado">';
html = html + '  <a class="cerrar" id="id_cerrar" href="javascript:void(0);" title="Cerrar ventana" onClick="javascript:f_cerrar_ventana_listado_para_escribir(\'id_telon\',\'id_contenedorCapaFlotante\',\'' + idCaja + '\');">' + _ESKUPhashMsgByLang[LANGESKUP].cerrar + '</a>';
html = html + html_listado_temas;
html = html + '  </div><!-- === .contenedorlistado === -->';
html = html + '</div><!-- === .flotanteeditarlistado === -->';
var divTelon 	= document.getElementById('id_telon');
var divCapaFlotante = document.getElementById('id_contenedorCapaFlotante');
divCapaFlotante.innerHTML = html;
var idContenedorReferencia = 'mensaje_' + idCaja;
if ( document.getElementById(idContenedorReferencia) ) {
var divContenedorReferencia = document.getElementById(idContenedorReferencia);
var posDivEnlaces = EPETUtils_calcAbsPositionV2(divContenedorReferencia);
divCapaFlotante.style.left = parseInt(posDivEnlaces[0] - 200) + "px";
divCapaFlotante.style.top  = parseInt(posDivEnlaces[1]) + "px";
}
else {
divCapaFlotante.style.left = "0px";
divCapaFlotante.style.top  = "0px";
}
divTelon.style.display 	    = '';
divCapaFlotante.style.display = '';
}
function f_existe_usuario_en_lista(idUsuario, listaUsuarios) {
var numero_usuarios = listaUsuarios.length;
for (var i=0; i < numero_usuarios; i++) {
usuario = listaUsuarios[i];
if (idUsuario == usuario) {
return true;
}
}
return false;
}
function f_obtener_html_listado_temas_para_escribir(idCaja, listaEventos) {
var html	     = '';
var html_elementos = '';
var numero_temas = 0;
for (var nombreEvento in listaEventos) {
var lh_datos_evento = listaEventos[nombreEvento];
numero_temas++;
descripcion = lh_datos_evento['descripcion'];
nombre      = lh_datos_evento['nombre'];
activo      = lh_datos_evento['activo'];
tipo_suscripcion = lh_datos_evento['tipo_suscripcion'];
var listaPropietarios = Array();
if (lh_datos_evento['prop']) {
listaPropietarios = lh_datos_evento['prop'];
}
var listaAdministradores = Array();
if (lh_datos_evento['adm']) {
listaAdministradores = lh_datos_evento['adm'];
}
var es_propietario    = f_existe_usuario_en_lista(_nickname, listaPropietarios);
var es_administrador  = f_existe_usuario_en_lista(_nickname, listaAdministradores);
var path_foto = '';
if (lh_datos_evento['pathfoto']) {
path_foto = lh_datos_evento['pathfoto'];
}
else {
path_foto = _url_imagen_por_defecto;
}
var html_cerrado = '';
var marca_suscripcion = '0';
var html_estilo_activo = ' activo';
var texto_evento_activo = 'Dejar de escribir en el tema';
var js_elemento = 'javascript:f_marca_tema_para_borrar(\'id_' + nombreEvento + '\');';
if (! activo) {
html_cerrado = html_cerrado  + '<span class="cerrado" title="Tema cerrado">Tema cerrado</span>';
texto_evento_activo = 'Pulsa para poder escribir en el tema';
}
if (tipo_suscripcion == 2) {
html_cerrado = html_cerrado  + '&nbsp;<span class="restringido">Tema de participaci&oacute;n restringida</span>';
marca_suscripcion = '2';
}
if (tipo_suscripcion == '0') {
html_cerrado = html_cerrado  + '&nbsp;<span class="restringido">Tema sin suscripci&oacute;n</span>';
marca_suscripcion = '0';
}
if (tipo_suscripcion == '1') {
marca_suscripcion = '1';
}
if (es_propietario == true) {
html_cerrado = html_cerrado  + '&nbsp;<span class="restringido">Propietario del tema</span>';
js_elemento = 'javascript:void(0);';
}
if (es_administrador == true) {
html_cerrado = html_cerrado  + '&nbsp;<span class="restringido">Administrador del tema</span>';
js_elemento = 'javascript:void(0);';
}
var html_elemento = '<li>';
html_elemento = html_elemento + '<a id="id_' + nombreEvento + '" name="' + marca_suscripcion + '" class="nombretema' + html_estilo_activo + '" href="javascript:void(0);" onClick="' + js_elemento + '" title="' + texto_evento_activo + '">';
html_elemento = html_elemento + '<span class="foto"><img src="' + path_foto + '" width="140" height="100" alt="Foto del tema" /></span>';
html_elemento = html_elemento + '<span class="nombre">' + nombreEvento + '</span>';
html_elemento = html_elemento + html_cerrado;
html_elemento = html_elemento + '</a>';
html_elemento = html_elemento + '</li>';
html_elementos = html_elementos + html_elemento;
}
if (numero_temas == 0) {
html = html + '    <h1>No tienes ning&uacute;n tema donde puedes escribir</h1>';
}
else {
html = html + '    <h1>Est&aacute;s apuntado para escribir en <span id="id_numero_temas_para_escribir_edicion" class="numero">' + numero_temas + '</span> tema';
if (numero_temas > 1) {
html = html + 's';
}
html = html + '</h1>';
html = html + '    <div class="capainfo">';
html = html + '      <p>Haz clic en los temas que quieras eliminar de la lista y pulsa en &quot;<strong>Guardar cambios</strong>&quot;.</p>';
html = html + '    </div><!-- === .capainfo === -->';
html = html + '    <div class="marco"  style="height: 500px;">';
html = html + '      <div class="temasescribir">';
html = html + '        <ul>';
html = html + html_elementos;
html = html + '        </ul>';
html = html + '      </div><!-- === .temasescribir === -->';
html = html + '    </div><!-- === .marco === -->';
html = html + '    <div class="botones">';
html = html + '      <a class="boton aceptar" id="id_aceptarsuscripcion" href="javascript:void(0);" onClick="javascript:f_actualizar_eventos_para_escribir(\'' + idCaja + '\');" style="">Guardar cambios</a>';
html = html + '      <a class="trabajando" href="javascript:void(0);" style="display: none;"></a>';
html = html + '      <div class="capainfo todocorrecto" id="capainfo_ok" style="display: none;">';
html = html + '        <p>La operaci&oacute;n se ha realizado con &eacute;xito.</p>';
html = html + '        <a class="boton aceptar" href="javascript:f_cerrar_panel(\'capainfo_ok\');">Aceptar</a>';
html = html + '        <div class="rompedor"></div>';
html = html + '      </div><!-- === .capainfo === -->';
html = html + '      <div class="capainfo algunerror" id="capainfo_error" style="display: none;">';
html = html + '        <p>Lo sentimos. Ha ocurrido un error. Por favor, int&eacute;ntalo de nuevo m&aacute;s tarde.</p>';
html = html + '        <a class="boton aceptar" href="javascript:f_cerrar_panel(\'capainfo_error\');">Aceptar</a>';
html = html + '        <div class="rompedor"></div>';
html = html + '      </div><!-- === .capainfo === -->';
html = html + '    </div><!-- === .botones === -->';
html = html + '    <div class="rompedor"></div>';
}
return html;
}
function f_obtener_eventos_para_escribir(idCaja, abrirForzado, marcaTemasSuscritos) {
var cadena_params = "action=list_writers";
if (_ultimaRecargaServidor > 0) {
cadena_params += "&ts=" + parseInt(_ultimaRecargaServidor);
}
if (_obtenidosEventosParaEscribir == true) {
f_pinta_caja_donde_publicar(idCaja, abrirForzado, marcaTemasSuscritos);
}
else {
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status != 200) {
alert("No se han podido obtener los temas para escribir");
_obtenidosEventosParaEscribir = false;
} else {
_obtenidosEventosParaEscribir = true;
var _hashTMP = Array();
var data = httpRequest.responseText;
eval("_hashTMP = " + data);
_hashEventosParaEscribir = _hashTMP.perfilesEventos;
_numeroEventosParaEscribir = _hashTMP.numeroUsuarios;
}
f_pinta_caja_donde_publicar(idCaja, abrirForzado, marcaTemasSuscritos);
}, _urlESKUP + "&" + cadena_params);
}
}
function f_marcar_imagen_para_borrar(idMensaje) {
if (document.getElementById('boton_borrar_adjunto_' + idMensaje)) {
var botonBorrarImagen = document.getElementById('boton_borrar_adjunto_' + idMensaje);
if (botonBorrarImagen.className == 'boton') {
botonBorrarImagen.className = 'boton eliminada';
var campoFormularioBorrarImagen = document.getElementById('rp_' + idMensaje);
campoFormularioBorrarImagen.value = 1;
}
else {
botonBorrarImagen.className = 'boton';
var campoFormularioBorrarImagen = document.getElementById('rp_' + idMensaje);
campoFormularioBorrarImagen.value = 0;
}
}
}
function f_obtener_eventos_para_escribir_en_respuesta(idMensaje, datosTablonesMensajes) {
var cadena_params = "action=list_writers";
if (_ultimaRecargaServidor > 0) {
cadena_params += "&ts=" + parseInt(_ultimaRecargaServidor);
}
var lista_eventos_mensaje = Array();
if (datosTablonesMensajes != '') {
lista_eventos_mensaje = datosTablonesMensajes.split(/,/);
}
var noMostrarAviso = false;
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
noMostrarAviso = true;
}
if (typeof _quiensoy != 'undefined' && _quiensoy == 'widget') {
noMostrarAviso = true;
}
if (typeof _enMensajeUnico != 'undefined' && _enMensajeUnico == true) {
noMostrarAviso = true;
}
if (_obtenidosEventosParaEscribir == true) {

f_comprobar_permisos_escritura(idMensaje, _hashEventosParaEscribir, lista_eventos_mensaje, noMostrarAviso);
}
else {
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status != 200) {
alert("No se han podido obtener los eventos para escribir");
_obtenidosEventosParaEscribir = false;
} else {
_obtenidosEventosParaEscribir = true;
var hashTMP = Array();
var data = httpRequest.responseText;
eval("hashTMP = " + data);
_hashEventosParaEscribir = hashTMP.perfilesEventos;
_numeroEventosParaEscribir = hashTMP.numeroUsuarios;
}

f_comprobar_permisos_escritura(idMensaje, _hashEventosParaEscribir, lista_eventos_mensaje, noMostrarAviso);
}, _urlESKUP + "&" + cadena_params);
}
}
function asignarTablonesDestino_DEPRECATED(idMensaje) {
if (document.getElementById("t_" + idMensaje).value != "") {
var avisoPermisosEscritura = false;
var arrayTablonesDestino = document.getElementById("t_" + idMensaje).value.split(/,/);
var strTablonesDestino   = "";
for (var contTab = 0; contTab != arrayTablonesDestino.length; contTab++) {
var strTablon = arrayTablonesDestino[contTab].substring(3);
var nombreTablon = arrayTablonesDestino[contTab];
if (typeof _hashEventosParaEscribir[strTablon] != "undefined" &&
arrayTablonesDestino[contTab].search("ev-") != -1) {
strTablonesDestino += "*" + strTablon + "|";
}
else {
if (nombreTablon.search(/t(1|4)-/) != -1) {
}
else {
avisoPermisosEscritura = true;
}
}
}
if (avisoPermisosEscritura == true && document.getElementById("cuidado_" + idMensaje)) {
var iconoAviso = document.getElementById("cuidado_" + idMensaje);
iconoAviso.style.display = '';
}
strTablonesDestino = strTablonesDestino.substr(0, (strTablonesDestino.length-1));
document.getElementById("t_" + idMensaje).value = strTablonesDestino;
}
}
function f_comprobar_permisos_escritura(idMensaje, lista_eventos_para_escribir, lista_eventos_mensaje, forzarNoMostrarAviso) {
if (typeof forzarNoMostrarAviso == "undefined") {
forzarNoMostrarAviso = false;
}
var lista_eventos_sin_permisos = Array();
var avisoPermisosEscritura = false;
var indice_eventos_sin_permisos = 0;
var strEventosSinPermisos = '';
var strEventosSinSuscripcion = '';
var strEventosConSuscripcionCondicionada = '';
var strEventosConPermisos = '';
for (var i = 0; i != lista_eventos_mensaje.length; i++) {
var nombreEvento = lista_eventos_mensaje[i];
if (nombreEvento.search(/t(1|4)-/) != -1) {
}
else {
var idEvento = nombreEvento.substring(3);
if (lista_eventos_para_escribir[idEvento]) {
strEventosConPermisos += idEvento + ',';
}
else {
var tipo_suscripcion_evento = 1;
if (_hashMsgs.perfilesEventos[idEvento]) {
tipo_suscripcion_evento = _hashMsgs.perfilesEventos[idEvento].tipo_suscripcion;
}
if (tipo_suscripcion_evento == 1) {
lista_eventos_sin_permisos[indice_eventos_sin_permisos] = idEvento;
indice_eventos_sin_permisos++;
avisoPermisosEscritura = true;
strEventosSinPermisos += idEvento + ',';
}
else {
if (tipo_suscripcion_evento == 2) {
strEventosConSuscripcionCondicionada += idEvento + ',';
avisoPermisosEscritura = true;
}
else {
strEventosSinSuscripcion += idEvento + ',';
avisoPermisosEscritura = true;
}
}
}
}
}
var html = '';
if (avisoPermisosEscritura == false || forzarNoMostrarAviso == true) {
f_continuar_responder(idMensaje, strEventosConPermisos);
}
else {
if (strEventosSinPermisos != '') {
html = html + '  <div class="exclamacion"></div>';
html = html + '  <p>Tu respuesta no aparecer&aacute; en los siguientes temas a los que pertenece este mensaje ';
html = html + '  porque no est&aacute;s apuntado para escribir en ellos. ';
if (typeof _quitaEnlacesEskup == 'undefined' || _quitaEnlacesEskup!='1'){
html = html +'<a href="/Estaticas/ayuda/faq.html" title="Ir a Ayuda" target="_blank">M&aacute;s informaci&oacute;n &raquo;</a></p>';
}
html = html + '  <ul>';
for (var i = 0; i != indice_eventos_sin_permisos; i++) {
var claveTema = lista_eventos_sin_permisos[i];
var nombreTema = _hashMsgs.perfilesEventos[claveTema].nombre;
if (typeof _quitaEnlacesEskup == 'undefined' || _quitaEnlacesEskup!='1'){
html = html + '    <li><a href="/' + '*' + claveTema + '" title="Ver tema">' + nombreTema + '</a></li>';
}else{
html = html + '    <li> '+  nombreTema + '</li>';
}
}
html = html + '  </ul>';
html = html + '  <p><strong>&iquest; Quieres que te apuntemos autom&aacute;ticamente ?</strong></p>';
html = html + '  <a class="boton aceptar" id="aceptarsuscripcion" href="javascript:void(0);" onclick="javascript:f_continuar_y_suscribir(\'' + idMensaje + '\', \'' + strEventosSinPermisos + '\', \'' + strEventosConPermisos + '\', \'' + strEventosSinSuscripcion + '\', \'' + strEventosConSuscripcionCondicionada + '\');">S&iacute;</a>';
html = html + '  <a class="boton cancelar" id="cancelarsuscripcion" href="javascript:void(0);" onclick="javascript:f_continuar_sin_suscribir(\'' + idMensaje + '\', \'' + strEventosSinPermisos + '\', \'' + strEventosConPermisos + '\', \'' + strEventosSinSuscripcion + '\', \'' + strEventosConSuscripcionCondicionada + '\');">No</a>';
html = html + '  <div class="rompedor"></div>';
var divInfoEvento = document.getElementById('capainfo_' + idMensaje);
divInfoEvento.className = 'capainfo';
divInfoEvento.innerHTML = html;
divInfoEvento.style.display = '';
}
else {
f_continuar_sin_suscribir(idMensaje, strEventosSinPermisos, strEventosConPermisos, strEventosSinSuscripcion, strEventosConSuscripcionCondicionada);
}
}
}
function f_mostrar_eventos_donde_publicar(idCaja) {
var valor_accion = '';
if (document.getElementById('c_' + idCaja)) {
valor_accion = document.getElementById('c_' + idCaja).value;
}
var marcar_eventos = false;
if (valor_accion == 'reply') {
marcar_eventos = true;
}
else {
marcar_eventos = false;
}
f_obtener_eventos_para_escribir(idCaja, false, marcar_eventos);
}
function f_mostrar_ocultar_panel_eventos_donde_publicar(idMensaje, mostrar_boton) {
var estilo = '';
if (mostrar_boton == true) {
estilo = '';
}
else {
estilo = 'none';
}
if (document.getElementById('boton_donde_publicar_' + idMensaje)) {
document.getElementById('boton_donde_publicar_' + idMensaje).style.display = estilo;
document.getElementById('boton_donde_publicar_' + idMensaje).className = 'boton temas';
}
if (document.getElementById('capaopciones_destino_' + idMensaje)) {
document.getElementById('capaopciones_destino_' + idMensaje).style.display = 'none';
}
}
function f_mostrar_ocultar_panel_avisos_responder(idMensaje, mostrar_panel) {
if (document.getElementById('capainfo_' + idMensaje)) {
var divInfoEvento = document.getElementById('capainfo_' + idMensaje);
if (mostrar_panel == true) {
divInfoEvento.style.display = '';
}
else {
divInfoEvento.style.display = 'none';
}
}
}
function f_obtener_cadena_destino_tablones(str_tablones) {
var cadena_destino = '';
var lista_tablones = Array();
if (str_tablones != '') {
lista_tablones = str_tablones.split(/,/);
}
for (var i = 0; i < lista_tablones.length; i++) {
var claveTablon = lista_tablones[i];
if (claveTablon != '') {
if (i != 0) {
cadena_destino += "|";
}
cadena_destino += "*" + claveTablon;
}
}
return cadena_destino;
}
function f_continuar_responder(idMensaje, str_tablones) {
f_mostrar_ocultar_panel_avisos_responder(idMensaje, false);
document.getElementById("t_" + idMensaje).value = f_obtener_cadena_destino_tablones(str_tablones);
var divContenedorFormularioMensaje = document.getElementById("contenedor_formulario_" + idMensaje);
divContenedorFormularioMensaje.style.display = '';
}
function f_continuar_sin_suscribir(idMensaje, str_eventos_sin_permisos, str_eventos_con_permisos, str_eventos_sin_suscripcion, str_eventos_suscripcion_condicionada) {
var html = '';
var lista_eventos_suscritos = Array();
if (str_eventos_con_permisos != '') {
lista_eventos_suscritos = str_eventos_con_permisos.split(/,/);
}
html = html + '  <div class="exclamacion"></div>';
html = html + '  <p>Tu respuesta s&oacute;lo aparecer&aacute; en los siguientes temas</p>';
html = html + '  <ul>';
html = html + '    <li><a href="/' + _nickname + '" title="Ver tema">Mis mensajes</a></li>';
for (var i = 0; i < lista_eventos_suscritos.length; i++) {
var claveTema = lista_eventos_suscritos[i];
if (claveTema != '') {
var nombreTema = _hashMsgs.perfilesEventos[claveTema].nombre;
html = html + '    <li><a href="/' + '*' + claveTema + '" title="Ver tema">' + nombreTema + '</a></li>';
}
}
html = html + '  </ul>';
if (str_eventos_sin_permisos != '') {
var lista_eventos_sin_permisos = str_eventos_sin_permisos.split(/,/);
html = html + '  <p>No aparecer&aacute; en los siguientes temas porque no quieres suscribirte:</p>';
html = html + '  <ul>';
for (var i = 0; i < lista_eventos_sin_permisos.length; i++) {
var claveTema = lista_eventos_sin_permisos[i];
if (claveTema != '') {
var nombreTema = _hashMsgs.perfilesEventos[claveTema].nombre;
html = html + '    <li><a href="/' + '*' + claveTema + '" title="Ver tema">' + nombreTema + '</a></li>';
}
}
html = html + '  </ul>';
}
if (str_eventos_sin_suscripcion != '') {
var lista_eventos_sin_sucripcion = str_eventos_sin_suscripcion.split(/,/);
html = html + '  <p>No aparecer&aacute; en los siguientes temas porque no tienen permitida la suscripci&oacute;n:</p>';
html = html + '  <ul>';
for (var i = 0; i < lista_eventos_sin_sucripcion.length; i++) {
var claveTema = lista_eventos_sin_sucripcion[i];
if (claveTema != '') {
var nombreTema = _hashMsgs.perfilesEventos[claveTema].nombre;
html = html + '    <li><a href="/' + '*' + claveTema + '" title="Ver tema">' + nombreTema + '</a></li>';
}
}
html = html + '  </ul>';
}
if (str_eventos_suscripcion_condicionada != '') {
var lista_eventos_sucripcion_condicionada = str_eventos_suscripcion_condicionada.split(/,/);
html = html + '  <p>No aparecer&aacute; en los siguientes temas porque la suscripci&oacute;n requiere una aprobaci&oacute;n</p>';
html = html + '  <ul>';
for (var i = 0; i < lista_eventos_sucripcion_condicionada.length; i++) {
var claveTema = lista_eventos_sucripcion_condicionada[i];
if (claveTema != '') {
var nombreTema = _hashMsgs.perfilesEventos[claveTema].nombre;
html = html + '    <li><a href="/' + '*' + claveTema + '" title="Ver tema">' + nombreTema + '</a></li>';
}
}
html = html + '  </ul>';
}
html = html + '  <a class="boton aceptar cerrar" id="XXX" href="javascript:void(0);" onclick="javascript:f_continuar_responder(\'' + idMensaje + '\', \'' + str_eventos_con_permisos + '\');">Continuar</a>';
html = html + '  <div class="rompedor"></div>';
var divInfoEvento = document.getElementById('capainfo_' + idMensaje);
divInfoEvento.className = 'capainfo';
divInfoEvento.innerHTML = html;
divInfoEvento.style.display = '';
}
function f_continuar_y_suscribir(idMensaje, str_eventos_sin_permisos, str_eventos_con_permisos, str_eventos_sin_suscripcion, str_eventos_suscripcion_condicionada) {
var html 	 = '';
var estilo_div = '';
var cadena_params = 'action=add_writers&user=' + _nickname + '&data=' + str_eventos_sin_permisos;
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status != 200) {
muestra_resultado_suscribir_eventos(0, idMensaje, str_eventos_sin_permisos, str_eventos_con_permisos, str_eventos_sin_suscripcion, str_eventos_suscripcion_condicionada);
}
else {
var data = httpRequest.responseText;
cadena_params = "action=list_writers";
if (_ultimaRecargaServidor > 0) {
cadena_params += "&ts=" + parseInt(_ultimaRecargaServidor);
}
EPETUtils_makeHttpRequestGet(function(httpRequest) {
var resultado = 1;
var str_eventos_con_error = '';
var str_eventos_suscritos = str_eventos_con_permisos;
if (httpRequest.status != 200) {
_obtenidosEventosParaEscribir = false;
}
else {
_obtenidosEventosParaEscribir = true;
var _hashTMP = Array();
var data = httpRequest.responseText;
eval("_hashTMP = " + data);
_hashEventosParaEscribir = _hashTMP.perfilesEventos;
_numeroEventosParaEscribir = _hashTMP.numeroUsuarios;
var lista_eventos_para_suscribir = str_eventos_sin_permisos.split(/,/);
for (var i = 0; i < lista_eventos_para_suscribir.length; i++) {
var claveEvento = lista_eventos_para_suscribir[i];
if (claveEvento != '') {
if (! _hashEventosParaEscribir[claveEvento]) {
resultado = 2;
str_eventos_con_error += claveEvento + ',';
}
else {
str_eventos_suscritos += claveEvento + ',';
}
}
}
}
muestra_resultado_suscribir_eventos(resultado, idMensaje, str_eventos_con_error, str_eventos_suscritos, str_eventos_sin_suscripcion, str_eventos_suscripcion_condicionada);
}, _urlESKUP + "&" + cadena_params);
}
}, _urlESKUP + "&" + cadena_params);
}
function muestra_resultado_suscribir_eventos(tipo_resultado_suscripcion, idMensaje, str_eventos_sin_permisos, str_eventos_con_permisos, str_eventos_sin_suscripcion, str_eventos_suscripcion_condicionada) {
var html = '';
var lista_eventos_error  = Array();
var lista_eventos_suscritos = Array();
var lista_eventos_para_suscribir = Array();
if (str_eventos_sin_permisos != '') {
lista_eventos_para_suscribir = str_eventos_sin_permisos.split(/,/);
}
if (str_eventos_con_permisos != '') {
lista_eventos_suscritos = str_eventos_con_permisos.split(/,/);
}
var html_sin_suscripcion = '';
if (str_eventos_sin_suscripcion != '') {
var lista_eventos_sin_sucripcion = str_eventos_sin_suscripcion.split(/,/);
html_sin_suscripcion = html_sin_suscripcion + '  <p>Tu respuesta no aparecer&aacute; en los siguientes temas porque no tienen permitida la suscripci&oacute;n:</p>';
html_sin_suscripcion = html_sin_suscripcion + '  <ul>';
for (var i = 0; i < lista_eventos_sin_sucripcion.length; i++) {
var claveTema = lista_eventos_sin_sucripcion[i];
if (claveTema != '') {
var nombreTema = _hashMsgs.perfilesEventos[claveTema].nombre;
html_sin_suscripcion = html_sin_suscripcion + '    <li><a href="/' + '*' + claveTema + '" title="Ver tema">' + nombreTema + '</a></li>';
}
}
html_sin_suscripcion = html_sin_suscripcion + '  </ul>';
}
var html_suscripcion_condicionada = '';
if (str_eventos_suscripcion_condicionada != '') {
var lista_eventos_sucripcion_condicionada = str_eventos_suscripcion_condicionada.split(/,/);
html_suscripcion_condicionada = html_suscripcion_condicionada + '  <p>Tu respuesta no aparecer&aacute; en los siguientes temas porque la suscripci&oacute;n requiere una aprobaci&oacute;n</p>';
html_suscripcion_condicionada = html_suscripcion_condicionada + '  <ul>';
for (var i = 0; i < lista_eventos_sucripcion_condicionada.length; i++) {
var claveTema = lista_eventos_sucripcion_condicionada[i];
if (claveTema != '') {
var nombreTema = _hashMsgs.perfilesEventos[claveTema].nombre;
html_suscripcion_condicionada = html_suscripcion_condicionada + '    <li><a href="/' + '*' + claveTema + '" title="Ver tema">' + nombreTema + '</a></li>';
}
}
html_suscripcion_condicionada = html_suscripcion_condicionada + '  </ul>';
}
if (tipo_resultado_suscripcion == 0) {
html = html + '  <p>Se ha producido un error en la petici&oacute;n.</p>';
html = html + '  <p>Pulsa \'Reintentar\' para intentarlo de nuevo o pulsa \'Continuar\' para responder el mensaje.</p>';
html = html + '  <a class="boton aceptar cerrar" id="XXX" href="javascript:void(0);" onclick="javascript:f_continuar_y_suscribir(\''+ idMensaje + '\', \''+ str_eventos_sin_permisos + '\', \''+ str_eventos_con_permisos + '\', \'' + str_eventos_sin_suscripcion + '\', \'' + str_eventos_suscripcion_condicionada + '\');">Reintentar</a>';
html = html + '  <a class="boton aceptar cerrar" id="XXX" href="javascript:void(0);" onclick="javascript:f_continuar_responder(\''+ idMensaje + '\', \'' + str_eventos_con_permisos + '\');">Continuar</a>';
html = html + '  <div class="rompedor"></div>';
estilo_div = 'capainfo algunerror';
}
else {
if (tipo_resultado_suscripcion == 1) {
html = html + '  <p>Ya est&aacute;s apuntado para escribir en todos los temas a los que pertenece el mensaje.</p>';
html = html + html_sin_suscripcion;
html = html + html_suscripcion_condicionada;
html = html + '  <a class="boton aceptar cerrar" id="XXX" href="javascript:void(0);" onclick="javascript:f_continuar_responder(\''+ idMensaje + '\', \'' + str_eventos_con_permisos + '\');">Continuar</a>';
html = html + '  <div class="rompedor"></div>';
estilo_div = 'capainfo todocorrecto';
}
else {
lista_eventos_error = lista_eventos_para_suscribir;
html = html + '  <p>No hemos podido apuntarte en:</p>';
html = html + '  <ul>';
for (var i = 0; i < lista_eventos_error.length; i++) {
var claveTema = lista_eventos_error[i];
if (claveTema != '') {
var nombreTema =_hashMsgs.perfilesEventos[claveTema].nombre;
html = html + '    <li><a href="/' + '*' + claveTema + '" title="Ver tema">' + nombreTema + '</a></li>';
}
}
html = html + '  </ul>';
html = html + '  <p>Tu respuesta aparecer&aacute; en:</p>';
html = html + '  <ul>';
html = html + '    <li><a href="/' + _nickname + '" title="Ver tema">Mis mensajes</a></li>';
for (var i = 0; i < lista_eventos_suscritos.length; i++) {
var claveTema = lista_eventos_suscritos[i];
if (claveTema != '') {
var nombreTema =_hashMsgs.perfilesEventos[claveTema].nombre;
html = html + '    <li><a href="/' + '*' + claveTema + '" title="Ver tema">' + nombreTema + '</a></li>';
}
}
html = html + '  </ul>';
html = html + html_sin_suscripcion;
html = html + html_suscripcion_condicionada;
html = html + '  <a class="boton aceptar cerrar" id="XXX" href="javascript:void(0);" onclick="javascript:f_continuar_responder(\''+ idMensaje + '\', \'' + str_eventos_con_permisos + '\');">Continuar</a>';
html = html + '  <div class="rompedor"></div>';
estilo_div = 'capainfo algunerror';
}
}
var divInfoEvento = document.getElementById('capainfo_' + idMensaje);
divInfoEvento.className = estilo_div;
divInfoEvento.innerHTML = html;
divInfoEvento.style.display = '';
}
function f_marca_elemento(id, idPadre, estiloActivo, estiloNoActivo) {
var campo = document.getElementById('li_' + id);
var padre_campo = campo.parentNode;
if (campo.className == estiloActivo) {
campo.className = estiloNoActivo;
padre_campo.id = idPadre;
}
else {
campo.className = estiloActivo;
padre_campo.id = '';
}
}
function f_pinta_caja_donde_publicar(idCaja, abrirForzado, marcaTemasSuscritos) {
var divCajaAdjuntar = document.getElementById('capaopciones_adjuntar_' + idCaja);
divCajaAdjuntar.style.display = 'none';
var strListaTemasMensaje = '';
if (document.getElementById('tm_' + idCaja)) {
strListaTemasMensaje = document.getElementById('tm_' + idCaja).value;
}
var listaTemasMensaje = Array();
if ( (strListaTemasMensaje != '') && (marcaTemasSuscritos) ) {
var arrayTemasMensaje = strListaTemasMensaje.split(/,/);
for (var i = 0; i < arrayTemasMensaje.length; i++) {
var claveTema = arrayTemasMensaje[i];
listaTemasMensaje[claveTema] = 1;
}
}
var html_lista_eventos = '';
var id_campo_ul = '';
var numero_eventos = 0;
for (var nombreEvento in _hashEventosParaEscribir) {
var lh_datos_evento = _hashEventosParaEscribir[nombreEvento];
numero_eventos++;
descripcion = lh_datos_evento['descripcion'];
nombre      = lh_datos_evento['nombre'];
path_foto   = lh_datos_evento['path_foto'];
activo      = lh_datos_evento['activo'];
var class_tema = 'nombretema';
var idEventoSeleccionado = '';
if (listaTemasMensaje['ev-' + nombreEvento]) {
class_tema = 'nombretema activo';
idEventoSeleccionado = nombreEvento;
}
var id_elemento = idCaja + '_' + nombreEvento;
var html_elemento = '';
if (activo) {
html_elemento = '<li id="' + idEventoSeleccionado + '"><a id="li_' + id_elemento + '" class="' + class_tema + '" href="javascript:void(0);" onclick="javascript:f_marca_elemento(\'' + id_elemento + '\', \'' + nombreEvento + '\', \'nombretema\',  \'nombretema activo\');" >' + nombre + '</a></li>';
}
else {
html_elemento = '<li><span class="cerrado" title="Tema cerrado">' + nombre + '</span></li>';
}
html_lista_eventos = html_lista_eventos + html_elemento;
}
if (numero_eventos == 0) {
id_campo_ul = 'id_sin_eventos_para_escribir';
html_lista_eventos = '<li class="vacio">No tienes ning&uacute;n tema donde escribir</li>';
}
else {
id_campo_ul = 'id_eventos_para_escribir_' + idCaja;
}
var html = "";
if (numero_eventos > 0) {
html = html + '  <div class="contenedorinstrucciones">';
html = html + '     <div class="instrucciones">';
html = html + '       <p><strong>Selecciona los temas en los que quieres que aparezca tu mensaje:</strong></p>';
html = html + '       <p class="id_instrucciones_temas">Estos son los temas a los que te has apuntado <em>para escribir</em>. Si no seleccionas nada, s&oacute;lo aparecer&aacute; en \'Mis mensajes\'.</p>';
html = html + '     </div><!-- === .instrucciones === -->';
html = html + '     <a href="javascript:void(0);" onclick="javascript:f_editar_listado_temas_para_escribir(\'' + idCaja + '\');" class="boton editarlistado">Editar mi listado</a>';
}
html = html + '     <div class="rompedor"></div>';
html = html + '  </div><!-- === .contenedorinstrucciones === -->';
html = html + '  <div id="cajamarco_' + idCaja + '">';
html = html + '    <div id="id_temas_para_escribir" class="temas">';
html = html + '      <ul id="' + id_campo_ul + '">' + html_lista_eventos + '</ul>';
html = html + '    </div><!-- === cierre .temas === -->';
html = html + '  </div><!-- === cierre .marco === -->';
var boton_donde_publicar = document.getElementById('boton_donde_publicar_' + idCaja);
var divCaja = document.getElementById('capaopciones_destino_' + idCaja);
divCaja.innerHTML = html;
if ( (divCaja.style.display == '') && (abrirForzado == false) ) {
divCaja.style.display = 'none';
boton_donde_publicar.className = 'boton temas';
}
else {
divCaja.style.display = '';
boton_donde_publicar.className = 'boton temas activo';
var divMarco = document.getElementById('cajamarco_' + idCaja);
if (divMarco.clientHeight <= 135) {
var alto_actual = divMarco.clientHeight;
alto_actual = alto_actual + 5;
divMarco.height = alto_actual;
divMarco.className = 'marco';
}
else {
divMarco.className = 'marco';
divMarco.height = 135;
}
}
var boton_adjuntar = document.getElementById('boton_adjuntar_' + idCaja);
boton_adjuntar.className = 'boton imagen';
}
function f_muestra_temas_destacados(listaTemasDestacados, listaTemasDestacadosExtra) {
var html = '';
var numero_temas = 0;
for (var claveTema in listaTemasDestacados) {
var datosTema = listaTemasDestacados[claveTema];
numero_temas++;
html = html + '     <div class="tema">';
html = html + '        <div class="encabezado">';
if  ( (datosTema.nombre) && (datosTema.nombre != '') ) {
html = html + '       <h2><a href="/' + '*' + claveTema + '" title="Ver tema">' + datosTema.nombre + '</a></h2>';
}
if (listaTemasDestacadosExtra[claveTema]) {
var datosExtra = listaTemasDestacadosExtra[claveTema];
if  ( (datosExtra.ts_ultimo_mensaje) && (datosExtra.ts_ultimo_mensaje != '') )  {
var ts_ultima_actualizacion = f_obtener_html_ultima_actualizacion_evento( datosExtra.ts_ultimo_mensaje , 1);
texto_ultima_actualizacion = '<span class="enunciado">Actualizado:</span>' + ts_ultima_actualizacion;
}
else {
texto_ultima_actualizacion = '<span class="enunciado">No ha sido actualizado</span>';
}
html = html + '         <div class="detalles">' + texto_ultima_actualizacion + '</div><!-- === cierre div detalles === -->';
}
html = html + '        </div><!-- === cierre .encabezado === -->';
html = html + '        <div class="contenedorfotoytexto">';
var path_foto = _url_imagen_por_defecto;
if  ( (datosTema.pathfoto) && (datosTema.pathfoto != '') ) {
path_foto = datosTema.pathfoto;
}
html = html + '           <div class="foto"><img src="' + path_foto + '" width="140" height="100" alt="Foto del tema" /></div><!-- === cierre div foto === -->';
var texto_reclamo    = '';
var texto_entradilla = '';
if  ( (datosTema.reclamo) && (datosTema.reclamo != '') ) {
texto_reclamo = datosTema.reclamo;
}
if  ( (datosTema.entradillatemasdestacados) && (datosTema.entradillatemasdestacados != '') ) {
texto_entradilla = datosTema.entradillatemasdestacados;
}
html = html + '           <p>' + texto_entradilla + '</p>';
html = html + '           <div class="rompedor"></div>';
html = html + '        </div><!-- === cierre .contenedorfotoytexto === -->';
html = html + '     </div><!-- === cierre .tema === -->';
}
var idCaja = '';
if (numero_temas == 0) {
html = html + '    <p>No hay temas destacados</p>';
idCaja = 'id_cajavacia_destacados';
}
else {
idCaja = 'id_temasdestacados';
}
var divCajaDestacados = document.getElementById(idCaja);
if (divCajaDestacados) {
divCajaDestacados.innerHTML = html;
divCajaDestacados.style.display = '';
var divCajaMarco = document.getElementById('id_marco_destacados');
divCajaMarco.style.display = '';
var altura = divCajaDestacados.clientHeight;
if (divCajaDestacados.clientHeight > 450) {
altura = 450;
}
}
}
function f_muestra_caja_mistemas() {
f_obtener_eventos_seguidos('id_mistemas');
}
function f_pinta_caja_eventos_seguidos_usuario(idCaja) {
var html = '';
var texto_ultima_actualizacion = '';
var divEnlaces 	= document.getElementById('id_enlaces_mistemas');
var divMarco   	= document.getElementById('id_marco_mistemas');
var divCajaVacia   	= document.getElementById('id_cajavacia_mistemas');
if (_numeroEventosSeguidos > 0) {
var numero_eventos_procesados = 0;
for (var claveEvento in _hashEventosSeguidos) {
var lh_datos_evento = _hashEventosSeguidos[claveEvento];
descripcion = '';
nombre      = '';
path_foto   = '';
idTablon    = claveEvento;
descripcion = lh_datos_evento['descripcion'];
nombre      = lh_datos_evento['nombre'];
path_foto   = lh_datos_evento['path_foto'];
if (lh_datos_evento['ts_ultimo_mensaje']) {
var ts_ultima_actualizacion = f_obtener_html_ultima_actualizacion_evento(lh_datos_evento['ts_ultimo_mensaje'], 1);
texto_ultima_actualizacion = '<span class="enunciado">Actualizado: </span>' + ts_ultima_actualizacion;
}
else {
texto_ultima_actualizacion = '<span class="enunciado">No ha sido actualizado</span>';
}
html = html + '  <div class="tema">';
html = html + '    <div class="encabezado">';
html = html + '       <h2><a href="/' + '*' + idTablon + '" title="Ver tema">' + nombre + '</a></h2>';
html = html + '       <div class="detalles">' + texto_ultima_actualizacion + '</div><!-- === cierre div detalles === -->';
html = html + '    </div><!-- === cierre .encabezado === -->';
html = html + '  </div><!-- === cierre .tema === -->';
numero_eventos_procesados++;
}
divCajaVacia.style.display = 'none';
var divCaja = document.getElementById(idCaja);
if (document.getElementById(idCaja)) {
divCaja.innerHTML = html;
}
divEnlaces.style.display = '';
divMarco.style.display 	 = '';
var altura = divCaja.clientHeight;
if (divCaja.clientHeight > 300) {
altura = 300;
}
}
else {
html = html + '    <p>No est&aacute;s suscrito a ning&uacute;n tema</p>';
html = html + '    <p><a href="/buscar_tema.html">Buscar temas</a></p>';
divEnlaces.style.display = 'none';
divMarco.style.display 	 = 'none';
divCajaVacia.innerHTML 	   = html;
divCajaVacia.style.display = '';
}
}
function f_pinta_html_numero_seguidores(numero_seguidores) {
var divCaja = document.getElementById('id_numero_seguidores');
divCaja.innerHTML = numero_seguidores;
}
function f_muestra_seguidores(hashDatos) {
var numero_seguidores = 0;
if (hashDatos.numeroUsuarios) {
numero_seguidores = hashDatos.numeroUsuarios;
}
f_pinta_html_numero_seguidores(numero_seguidores);
}
function f_muestra_listado_seguidores(idUsuario, pagina) {
var cadena_params = 'action=list_seguidores&max=' + _numero_maximo_usuarios_a_mostrar + '&user=' + idUsuario + '&pag=' + pagina;
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status != 200) {
} else {
var hashTMP = Array();
var data = httpRequest.responseText;
eval("hashTMP = " + data);
f_pinta_html_listado_usuarios(idUsuario, hashTMP, 'id_usuarios', 1, pagina);
}
}, _urlESKUP + "&" + cadena_params);
}
function f_muestra_listado_a_quien_sigo(idUsuario, pagina) {
var cadena_params = 'action=list_usuarios&max=' + _numero_maximo_usuarios_a_mostrar + '&user=' + idUsuario + '&pag=' + pagina;
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status != 200) {
} else {
var hashTMP = Array();
var data = httpRequest.responseText;
eval("hashTMP = " + data);
f_pinta_html_listado_usuarios(idUsuario, hashTMP, 'id_usuarios', 2, pagina);
}
}, _urlESKUP + "&" + cadena_params);
}
function f_muestra_listado_seguidores_evento(idEvento, pagina) {
var cadena_params = 'action=list_seguidores&max=' + _numero_maximo_usuarios_a_mostrar + '&event=ev-' + idEvento + '&pag=' + pagina;
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status != 200) {
} else {
var hashTMP = Array();
var data = httpRequest.responseText;
eval("hashTMP = " + data);
f_pinta_html_listado_usuarios(idEvento, hashTMP, 'id_usuarios', 3, pagina);
f_pinta_nombre_bonito_evento(idEvento, 'id_titulo_tema_');
}
}, _urlESKUP + "&" + cadena_params);
}
function f_muestra_listado_escritores_evento(idEvento, pagina) {
var cadena_params = 'action=list_writers&max=' + _numero_maximo_usuarios_a_mostrar + '&event=ev-' + idEvento + '&pag=' + pagina;
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status != 200) {
} else {
var hashTMP = Array();
var data = httpRequest.responseText;
eval("hashTMP = " + data);
f_pinta_html_listado_usuarios(idEvento, hashTMP, 'id_usuarios', 4, pagina);
f_pinta_nombre_bonito_evento(idEvento, 'id_titulo_tema_');
}
}, _urlESKUP + "&" + cadena_params);
}
function f_pinta_nombre_bonito_evento(idEvento, idPrefijoCampo) {
var cadena_params = 'action=info_eventos&event=ev-' + idEvento;
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status != 200) {
} else {
var hashTMP = Array();
var data = httpRequest.responseText;
eval("hashTMP = " + data);
if (document.getElementById(idPrefijoCampo + idEvento)) {
var divCajaNombreTema = document.getElementById(idPrefijoCampo + idEvento);
divCajaNombreTema.innerHTML = hashTMP.perfilesEventos[idEvento].nombre;
}
}
}, _urlESKUP + "&" + cadena_params);
}
function f_obtener_html_envoltorio_usuario(idUsuario, datosUsuario, tipoUsuario) {
var html = '';
var es_activo = datosUsuario.activo;
var url_foto = datosUsuario.pathfoto;
if (url_foto == '') {
url_foto = _url_imagen_usuario_por_defecto;
}
url_usuario = "/" + idUsuario;
var nombre = '';
if (datosUsuario.nombre) {
nombre = datosUsuario.nombre + ' ' + datosUsuario.apellidos;
}
if (datosUsuario.nombrebonito) {
nombre = datosUsuario.nombrebonito;
}
var usuarioSeguido     = false;
var usuarioBloqueado   = false;
if (datosUsuario.seguido == 1) {
usuarioSeguido = true;
}
if (datosUsuario.bloqueado == 1) {
usuarioBloqueado = true;
}
var soyyomismo = false;
var html_url_usuario = '';
if (idUsuario == _nickname) {
soyyomismo = true;
html = html + '<div class="tumismo">';
}
id_html_usuario = 'id_envoltoriousuariousuario_' + idUsuario;
html = html + '<div id="' + id_html_usuario + '" class="usuario">';
if (_nickname != '') {
html = html + '  <div class="izquierda">';
if (soyyomismo == false) {
html = html + '    <a href="javascript:void(0);" id="boton_privado_' + idUsuario + '" class="boton privado" onclick="javascript:f_pinta_caja_envio_privado(\'' + idUsuario + '\');">Enviar privado</a>';
}
else {
html = html + '&nbsp;';
}
html = html + '<div id="contenedor_formulario_' + idUsuario + '" class="contenedorescribirmensaje" style="display: none;"></div><!-- === cierre div contenedorescribirmensaje === -->';
html = html + '  </div><!-- === cierre div izquierda === -->';
}
else {
}
html = html + '  <div class="principal">';
html = html + '     <div class="foto"><a href="' + url_usuario + '" title="Ver todos sus mensajes"><img src="' + url_foto + '" width="100" alt="' + idUsuario + '" height="100"></a></div><!-- === cierre div foto === -->';
html = html + '     <div class="datos">';
html = html + '       <div class="contenedornombres">';
html = html + '         <a href="/' + idUsuario + '" title="Ver todos sus mensajes" class="nickname">' + idUsuario + '</a>';
html = html + '         ';
html = html + '         ';
var html_botones_seguir   = '';
var html_botones_bloquear = '';
if (_nickname != '') {
html_botones_seguir = f_componer_html_botones_menu_seguir_usuario(usuarioSeguido, idUsuario);
html = html + '  <div id="id_menu_botones_seguir_' + idUsuario + '">';
html = html + html_botones_seguir;
html = html + '  </div>';
if (soyyomismo == false) {
html_botones_bloquear = f_componer_html_botones_menu_bloquear(usuarioBloqueado, idUsuario);
html = html + '  <div id="id_menu_botones_bloquear_' + idUsuario + '">';
html = html + html_botones_bloquear;
html = html + '  </div>';
}
else {
}
}
else {
}
html = html + '         ';
html = html + '         <div class="rompedor"></div>';
html = html + '       </div><!-- === .contenedornombres === -->';
if (nombre != '') {
html = html + '         <div class="nombrereal">' + nombre + '</div>';
}
html = html + '     </div><!-- === .datos === -->';
html = html + '  </div><!-- === cierre div principal === -->';
html = html + '    <div class="rompedor"></div>';
html = html + '</div><!-- === cierre div usuario === -->';
if (soyyomismo) {
html = html + '</div><!-- === cierre div tumismo === -->';
}
return html;
}
function f_obtener_html_envoltorio_evento(idEvento, datosEvento, tipoEvento) {
var html = '';
var datosTema = datosEvento;
var nombreTema = '';
if (datosTema.nombre) {
nombreTema = datosTema.nombre;
}
if (datosTema.nombrebonito) {
nombreTema = datosTema.nombrebonito;
}
var descripcionTema = '';
if (datosTema.descripcion) {
descripcionTema = datosTema.descripcion;
}
var datosExtra = Array();
if (_hashEventosSeguidos[idEvento]) {
datosExtra = _hashEventosSeguidos[idEvento];
}
if (datosTema.pathfoto == '') {
datosTema.pathfoto = _url_imagen_por_defecto;
}
var seguimiento_usuario = false;
if (_hashEventosSeguidos[idEvento]) {
seguimiento_usuario = true;
}
var html_botones_menu_seguir = '';
if (_nickname != '') {
var html_botonera = f_componer_html_botones_menu_seguir_evento(seguimiento_usuario, idEvento);
html_botones_menu_seguir = '<div id="id_menu_botones_seguir_' + idEvento + '">' + html_botonera + '</div>';
}
html = html + '<div class="usuario">';
html = html + '   <div class="principal">';
html = html + '     <div class="foto"><img src="' + datosTema.pathfoto + '" width="140" height="100" alt="Avatar" /></div><!-- === .fotoymas === -->';
html = html + '     <div class="datos">';
html = html + '       <div class="contenedornombres">';
html = html + '         <a class="nickname" href="/' + '*' + idEvento + '" title="Ver tema">' + nombreTema + '</a>';
if (html_botones_menu_seguir != '') {    
html = html + html_botones_menu_seguir;
}
html = html + '         <div class="rompedor"></div>';
html = html + '       </div><!-- === .contenedornombres === -->';
html = html + '       <div class="nombrereal">' + descripcionTema + '</div><!-- === .nombrereal === -->';
html = html + '     </div><!-- === .datos === -->';
html = html + '   </div><!-- === .principal === -->';
html = html + '   <div class="rompedor"></div>';
html = html + '</div><!-- === .usuario === -->';
return html;
}
function f_pinta_html_listado_usuarios(idUsuario, hashDatos, idCajaUsuarios, tipoUsuarios, pagina) {
var html_contenedor_usuario = '';
var html_encabezado         = '';
var html                    = '';
var html_error              = '';
var numero_usuarios = 0;
var hashUsuarios    = hashDatos.perfilesUsuarios;
var numero_usuarios = hashDatos.numeroUsuarios;
if (tipoUsuarios == 1) {
if (_nickname == idUsuario) {
if (numero_usuarios == 0) {
html_encabezado = 'Usuarios que te siguen';
}
else {
html_encabezado = 'Te siguen <span class="numero">' + numero_usuarios + '</span> usuario';
if (numero_usuarios > 1) {
html_encabezado = html_encabezado + 's';
}
}
}
else {
if (numero_usuarios == 0) {
html_encabezado = 'Usuarios que siguen a <a href="/' + idUsuario + '" class="nombreusuario" title="Ver todos sus mensajes">' + idUsuario + '</a>';
}
else {
html_encabezado = '<span class="numero">' + numero_usuarios + '</span> usuario';
if (numero_usuarios > 1) {
html_encabezado = html_encabezado + 's siguen';
}
else {
html_encabezado = html_encabezado + ' sigue';
}
html_encabezado = html_encabezado  + ' a <a href="/' + idUsuario + '" class="nombreusuario" title="Ver todos sus mensajes">' + idUsuario + '</a>';
}
}
}
else {
if (tipoUsuarios == 2) {
if (_nickname == idUsuario) {
if (numero_usuarios == 0) {
html_encabezado = 'Usuarios que sigues';
}
else {
html_encabezado = 'Sigues a <span class="numero">' + numero_usuarios + '</span> usuario';
if (numero_usuarios > 1) {
html_encabezado = html_encabezado + 's';
}
}
}
else {
if (numero_usuarios == 0) {
html_encabezado = 'Usuarios que sigue <a href="/' + idUsuario + '" class="nombreusuario" title="Ver todos sus mensajes">' + idUsuario + '</a>';
}
else {
html_encabezado = '<a href="/' + idUsuario + '" class="nombreusuario" title="Ver todos sus mensajes">' + idUsuario + '</a> sigue a <span class="numero">' + numero_usuarios + '</span> usuario';
if (numero_usuarios > 1) {
html_encabezado = html_encabezado + 's';
}
}
}
}
else {
if (tipoUsuarios == 3) {
if (numero_usuarios == 0) {
html_encabezado = 'Usuarios que siguen el tema <a href="/' + '*' + idUsuario + '" class="nombreusuario" title="Ver tema" id="id_titulo_tema_' + idUsuario + '">' + idUsuario + '</a>';
}
else {
html_encabezado = '<span class="numero">' + numero_usuarios + '</span> usuario';
if (numero_usuarios > 1) {
html_encabezado = html_encabezado + 's siguen';
}
else {
html_encabezado = html_encabezado + ' sigue';
}
html_encabezado = html_encabezado  + ' el tema <a href="/' + '*' + idUsuario + '" class="nombreusuario" title="Ver todos sus mensajes" id="id_titulo_tema_' + idUsuario + '">' + idUsuario + '</a>';
}
}
else {
if (numero_usuarios == 0) {
html_encabezado = 'Usuarios que pueden escribir en el tema <a href="/' + '*' + idUsuario + '" class="nombreusuario" title="Ver tema" id="id_titulo_tema_' + idUsuario + '">' + idUsuario + '</a>';
}
else {
html_encabezado = '<span class="numero">' + numero_usuarios + '</span> usuario';
if (numero_usuarios > 1) {
html_encabezado = html_encabezado + 's escriben';
}
else {
html_encabezado = html_encabezado + ' escribe ';
}
html_encabezado = html_encabezado  + ' en el tema <a href="/' + '*' + idUsuario + '" class="nombreusuario" title="Ver todos sus mensajes" id="id_titulo_tema_' + idUsuario + '">' + idUsuario + '</a>';
}
}
}
}
html_encabezado = '<h1>' + html_encabezado + '</h1>';
if (numero_usuarios == 0) {
if (tipoUsuarios == 1) {
if (_nickname == idUsuario) {
html_error = 'No te sigue ning&uacute;n usuario';
}
else {
html_error = 'Al usuario ' + idUsuario + ' no le sigue nadie';
}
}
else {
if (tipoUsuarios == 2) {
if (_nickname == idUsuario) {
html_error = 'No sigues a ning&uacute;n usuario';
}
else {
html_error = 'Al usuario ' + idUsuario + ' no sigue a nadie';
}
}
else {
if (tipoUsuarios == 3) {
html_error = 'El tema <span class="nombre">' + idUsuario + '</span> no lo sigue nadie';
}
else {
html_error = 'Ning&uacute;n usuario escribe en el tema <span class="nombre">' + idUsuario + '</span>';
}
}
}
html =        '<div class="error">';
html = html + '  <p>' + html_error + '</p>';
html = html + '</div><!-- === cierre div error === -->';
}
else {
for (var clave_usuario in hashUsuarios) {
usuario = hashUsuarios[clave_usuario];
html_contenedor_usuario = f_obtener_html_envoltorio_usuario(clave_usuario, usuario, tipoUsuarios);
html = html + html_contenedor_usuario;
}
var html_paginacion = '';
html_paginacion = html_paginacion + '<div class="contenedorpaginacion">';
html_paginacion = html_paginacion + '<div class="paginacion">';
html_paginacion = html_paginacion + f_obtener_paginacion_usuarios(idUsuario, tipoUsuarios, numero_usuarios, pagina);
html_paginacion = html_paginacion + '</div><!-- === cierre div paginacion === -->';
html_paginacion = html_paginacion + '<a id="div_subir_pagina" title="Subir" href="javascript:void(0);" onclick="javascript:f_ir_arriba();" class="subir"></a>';
html_paginacion = html_paginacion + '</div><!-- === cierre div contenedorpaginacion === -->';
html_paginacion = html_paginacion + '<div class="rompedor"></div>';
html = '<div class="listadousuarios">' + html + '</div><div class="abajo">' + html_paginacion + '<div class="rompedor"></div></div>';
}
html = html_encabezado + html;
var divCaja = document.getElementById(idCajaUsuarios);
divCaja.innerHTML = html;
}

function f_pinta_html_listado_resultado_usuarios(cadena_busqueda) {
var html = '';
if (cadena_busqueda == '') {
return false;
}
var cadena_params = "q=" + cadena_busqueda;
EPETUtils_makeHttpRequestGet(function (httpRequest) {
var html_completo = '';
var html = '';
if (httpRequest.status == 200) {
var data = httpRequest.responseText;
var hashUsuarios = Array();
var hashDatos    = Array();
var numero_usuarios = 0;
eval("hashDatos = " + data);
if (hashDatos.num > 0) {
hashUsuarios    = hashDatos.answer;
numero_usuarios = hashDatos.num;
cadena_busqueda = hashDatos.query;
}
if (numero_usuarios > 0) {
var str_lista_usuarios  ='';
for (var i=0; i < numero_usuarios; i++) {
if (i != 0) {
str_lista_usuarios = str_lista_usuarios + ',';
}
usuario = hashUsuarios[i];
idUsuario = usuario.nick;
str_lista_usuarios = str_lista_usuarios + idUsuario;
}
var cadena_params = "action=info_usuarios&user=" + str_lista_usuarios;
cadena_params += "&ts=" + parseInt(_ultimaRecargaServidor);
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status != 200) {
html_completo = html_completo + '<div class="error">';
html_completo = html_completo + '  <p>Se ha producido un error al realizar la b&uacute;squeda de usuarios. Por favor, int&eacute;ntalo m&aacute;s tarde</p>';
html_completo = html_completo + '</div><!-- === cierre div error === -->';
}
else {
var hashTMP = Array();
var data = httpRequest.responseText;
eval("hashTMP = " + data);
var listaUsuariosEncontrados = hashTMP.perfilesUsuarios;
for (var clave_usuario in listaUsuariosEncontrados) {
var datosUsuario = listaUsuariosEncontrados[clave_usuario];
var html_contenedor_usuario = f_obtener_html_envoltorio_usuario(clave_usuario, datosUsuario, 1);
html = html + html_contenedor_usuario;
}
var html_resultados = '';
if (numero_usuarios == 1) {
html_resultados = html_resultados  + 'Se ha encontrado <span class="numero">1</span> resultado para <span class="objetobusqueda">' + cadena_busqueda + '</span>';
}
else {
html_resultados = html_resultados  + 'Se han encontrado <span class="numero">' + numero_usuarios + '</span> resultados para <span class="objetobusqueda">' + cadena_busqueda + '</span>';
}
html_completo = '<div class="arriba"><div class="resultados">' + html_resultados + '</div><div class="rompedor"></div></div>';
html_completo = html_completo + '<div class="listadousuarios">' + html + '</div>';
html_completo = html_completo + '<div class="abajo"><a id="div_subir_pagina" title="Subir" href="javascript:void(0);" onclick="javascript:f_ir_arriba();" class="subir"></a><div class="rompedor"></div></div>';
}
f_pinta_html_buscar(1, cadena_busqueda);
var divCaja = document.getElementById('id_listado');
divCaja.innerHTML = html_completo;
}, _urlESKUP + "&" + cadena_params);
}
else {
html_completo = html_completo + '<div class="error">';
html_completo = html_completo + '  <p>No existen usuarios que cumplan la condici&oacute;n: ' + EPETUtils_filtraFormulario(cadena_busqueda) + '</p>';
html_completo = html_completo + '</div><!-- === cierre div error === -->';
f_pinta_html_buscar(1, cadena_busqueda);
var divCaja = document.getElementById('id_listado');
divCaja.innerHTML = html_completo;
}
}
else {
html_completo = html_completo + '<div class="error">';
html_completo = html_completo + '  <p>Se ha producido un error al realizar la consulta. Por favor, int&eacute;ntalo m&aacute;s tarde</p>';
html_completo = html_completo + '</div><!-- === cierre div error === -->';
f_pinta_html_buscar(1, cadena_busqueda);
var divCaja = document.getElementById('id_listado');
divCaja.innerHTML = html_completo;
}
} , _urlBuscarUsuarios + "?" + cadena_params);
}
function f_pinta_html_listado_resultado_temas(cadena_busqueda) {
var html = '';
if (cadena_busqueda == '') {
return false;
}
var cadena_params = "q=" + cadena_busqueda;
EPETUtils_makeHttpRequestGet(function f_procesa_peticion_busqueda_temas(httpRequest) {
var html_completo = '';
var html = '';
if (httpRequest.status == 200) {
var data = httpRequest.responseText;
var hashTemas 	 = Array();
var hashDatos    = Array();
var numero_temas = 0;
eval("hashDatos = " + data);
if (hashDatos.num > 0) {
hashTemas    = hashDatos.answer;
numero_temas = hashDatos.num;
cadena_busqueda = hashDatos.query;
}
if (numero_temas > 0) {
var str_lista_temas  ='';
for (var i=0; i < numero_temas; i++) {
if (i != 0) {
str_lista_temas = str_lista_temas + ',';
}
var tema  = hashTemas[i];
idTema = tema.nick;
str_lista_temas = str_lista_temas + 'ev-' + idTema;
}
var cadena_params = "action=info_eventos&event=" + str_lista_temas;
cadena_params += "&ts=" + parseInt(_ultimaRecargaServidor);
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status != 200) {
html_completo = html_completo + '<div class="error">';
html_completo = html_completo + '  <p>Se ha producido un error al realizar la b&uacute;squeda de usuarios. Por favor, int&eacute;ntalo m&aacute;s tarde</p>';
html_completo = html_completo + '</div><!-- === cierre div error === -->';
}
else {
var hashTMP = Array();
var data = httpRequest.responseText;
eval("hashTMP = " + data);
var listaTemasEncontrados = hashTMP.perfilesEventos;
for (var clave_tema in listaTemasEncontrados) {
var datosTema = listaTemasEncontrados[clave_tema];
var html_contenedor_tema = f_obtener_html_envoltorio_evento(clave_tema, datosTema, 1);
html = html + html_contenedor_tema;
}
var html_resultados = '';
if (numero_temas == 1) {
html_resultados = html_resultados  + 'Se ha encontrado <span class="numero">1</span> resultado para <span class="objetobusqueda">' + cadena_busqueda + '</span>';
}
else {
html_resultados = html_resultados  + 'Se han encontrado <span class="numero">' + numero_temas + '</span> resultados para <span class="objetobusqueda">' + cadena_busqueda + '</span>';
}
html_completo = '<div class="arriba"><div class="resultados">' + html_resultados + '</div><div class="rompedor"></div></div>';
html_completo = html_completo + '<div class="listadousuarios"><div class="buscartemas">';
html_completo = html_completo + html;
html_completo = html_completo + '</div></div>';
html_completo = html_completo + '<div class="abajo"><a id="div_subir_pagina" title="Subir" href="javascript:void(0);" onclick="javascript:f_ir_arriba();" class="subir"></a><div class="rompedor"></div></div>';
}
f_pinta_html_buscar(3, cadena_busqueda);
var divCaja = document.getElementById('id_listado');
divCaja.innerHTML = html_completo;
}, _urlESKUP + "&" + cadena_params);
}
else {
html_completo = html_completo + '<div class="error">';
html_completo = html_completo + '  <p>No existen temas que cumplan la condici&oacute;n: ' + EPETUtils_filtraFormulario(cadena_busqueda) + '</p>';
html_completo = html_completo + '</div><!-- === cierre div error === -->';
f_pinta_html_buscar(3, cadena_busqueda);
var divCaja = document.getElementById('id_listado');
divCaja.innerHTML = html_completo;
}
}
else {
html_completo = html_completo + '<div class="error">';
html_completo = html_completo + '  <p>Se ha producido un error al realizar la consulta. Por favor, int&eacute;ntalo m&aacute;s tarde</p>';
html_completo = html_completo + '</div><!-- === cierre div error === -->';
f_pinta_html_buscar(3, cadena_busqueda);
var divCaja = document.getElementById('id_listado');
divCaja.innerHTML = html_completo;
}
} , _urlBuscarTemas + "?" + cadena_params);
}

function f_muestra_informacion_error_busqueda() {
var mensaje_error =             '<div id="id_contenedor_error_buscar" class="error">';
mensaje_error = mensaje_error + '  <p>No hemos encontrado ning&uacute;n usuario con ese nombre.</p>';
mensaje_error = mensaje_error + '</div><!-- === fin de id_contenedor_error_buscar === -->';
var divCajaResultados = document.getElementById('id_usuarios_buscar');
divCajaResultados.innerHTML = mensaje_error;
divCajaResultados.style.display = '';
}
function f_funcion_maneja_click(lista_seleccion) {
var numero_elementos_seleccionados = lista_seleccion.length;
if (numero_elementos_seleccionados == 1) {
ESKUPautocompleteRemoveAll();
var campo_busqueda = campo_texto = document.getElementById('q_busqueda');
campo_busqueda.value = lista_seleccion[0].nick;
f_peticion_buscar();
}
}
function f_maneja_busqueda(campo, tipo_contenido) {
if (tipo_contenido == 1) {
ESKUPautocompleteInitialize(campo, f_funcion_maneja_click);
}
else { 
if (tipo_contenido == 3) {
ESKUPautocompleteInitializeEvents(campo, f_funcion_maneja_click);
}
else {
}
}
}
function f_cambia_campo_busqueda(campo_select, id_campo_tipo_contenido) {
var valor_seleccionado = campo_select.options[campo_select.selectedIndex].value;
var campo_texto = document.getElementById(id_campo_tipo_contenido);
campo_texto.value = valor_seleccionado;
ESKUPautocompleteRemoveAll();
}
function f_peticion_buscar() {
var valor_action = '';
var campo_texto = campo_texto = document.getElementById('q_busqueda');
var valor_campo = trim(campo_texto.value);
if (valor_campo == '') {
return;
}
var campo_tipo_contenido = document.getElementById('id_tipo_contenido');
var tipo_contenido = trim(campo_tipo_contenido.value);
if (tipo_contenido == 1) {
valor_action = '/resultado_buscar_usuarios.html';
}
else if (tipo_contenido == 2) {
valor_action = '/resultado_buscar.html';
}
else {
valor_action = '/resultado_buscar_temas.html';
}
var formulario = document.getElementById('formulario_busquedas');
formulario.action = valor_action;
formulario.submit();
}
function f_peticion_buscar_usuarios(lista_usuarios_seleccionados) {
if (! _hashAnswer) {
return false;
}
var campoUsuario = document.getElementById('id_nombre_usuario_para_buscar');
var cadena_tecleada = campoUsuario.value;
var numero_usuarios = lista_usuarios_seleccionados.length;
if (numero_usuarios == 0) {
return true;
}
var numero_usuarios_busqueda = _hashAnswer.num;
if (numero_usuarios_busqueda == 0) {
f_muestra_informacion_error_busqueda();
}
else {
if (numero_usuarios_busqueda == 1) {
if ( (typeof campoUsuario.eskup_seleccionado != 'undefined') && (campoUsuario.eskup_seleccionado == 1) ) {
campoUsuario.eskup_seleccionado = 0;
nick_usuario = cadena_tecleada;
}
else {
usuario = lista_usuarios_seleccionados[0];
nick_usuario = trim(usuario.nick);
}
f_pinta_html_listado_resultado_usuarios(cadena_tecleada);
}
else {
f_pinta_html_listado_resultado_usuarios(cadena_tecleada);
}
}
}
function f_peticion_buscar_contenido(idCampo, id_formulario_busqueda) {
var campo_texto = document.getElementById(idCampo);
var valor_tecleado = campo_texto.value;
if (f_es_valor_vacio(valor_tecleado) ) {
alert("No has escrito nada para buscar");
return true;
}
var formulario = document.getElementById(id_formulario_busqueda);
formulario.submit();
}
function f_peticion_buscar_temas(lista_temas_seleccionados) {
if (! _hashAnswer) {
return false;
}
var campoTema = document.getElementById('id_nombre_tema_para_buscar');
var cadena_tecleada = campoTema.value;
var numero_temas = lista_temas_seleccionados.length;
if (numero_temas == 0) {
return true;
}
var numero_temas_busqueda = _hashAnswer.num;
if (numero_temas_busqueda == 0) {
f_muestra_informacion_error_busqueda();
}
else {
if (numero_temas_busqueda == 1) {
if ( (typeof campoTema.eskup_seleccionado != 'undefined') && (campoTema.eskup_seleccionado == 1) ) {
campoTema.eskup_seleccionado = 0;
idTema = cadena_tecleada;
}
else {
tema = lista_temas_seleccionados[0];
idTema = trim(tema.nick);
}
f_pinta_html_listado_resultado_temas(cadena_tecleada);
}
else {
f_pinta_html_listado_resultado_temas(cadena_tecleada);
}
}
}


function f_pinta_html_buscar(tipo_contenido, cadena_buscada) {
var html_contenido = '';
var nombre_formulario = '';
var url_nombre_formulario = '';
var html_campo_buscar = '';
var js_boton_buscar = '';
var html_opcion_usuarios 	= 'disabled="true"';
var html_opcion_contenido 	= 'disabled="true"';
var html_opcion_temas 	    = 'disabled="true"';
if (tipo_contenido == 1) {
nombre_formulario = 'formulario_usuarios';
url_nombre_formulario = 'resultado_buscar_usuarios.html';
html_campo_buscar = '<input name="campo_formulario_nombre_usuario_para_buscar" id="id_nombre_usuario_para_buscar" value="' + EPETUtils_filtraFormulario(cadena_buscada) + '" autocomplete="off" onfocus="ESKUPautocompleteInitialize(this, f_peticion_buscar_usuarios);" type="text" />';
js_boton_buscar = 'javascript:f_pinta_html_listado_resultado_usuarios(document.formulario_usuarios.id_nombre_usuario_para_buscar.value);ESKUPautocompleteRemoveAll();';
html_opcion_usuarios = 'selected="selected"';
}
else if (tipo_contenido == 2) {
nombre_formulario = 'formulario_contenido';
url_nombre_formulario = 'resultado_buscar.html';
html_campo_buscar = '<input type="text" name="q_busqueda_form" id="q_busqueda_form" value="' + EPETUtils_filtraFormulario(cadena_buscada) + '" />';
js_boton_buscar = 'javascript:f_peticion_buscar_contenido(\'q_busqueda_form\', \'formulario_contenido\');';
html_opcion_contenido = 'selected="selected"';
}
else {
nombre_formulario = 'formulario_temas';
url_nombre_formulario = 'resultado_buscar_temas.html';
html_campo_buscar = '<input name="campo_formulario_nombre_usuario_para_buscar" id="id_nombre_tema_para_buscar" value="' + EPETUtils_filtraFormulario(cadena_buscada) + '" autocomplete="off" onfocus="ESKUPautocompleteInitializeEvents(this, f_peticion_buscar_temas);" type="text" />';
js_boton_buscar = 'javascript:f_pinta_html_listado_resultado_temas(document.formulario_temas.id_nombre_tema_para_buscar.value);ESKUPautocompleteRemoveAll();';
html_opcion_temas = 'selected="selected"';
}
html_contenido =                  '<h2>Buscar</h2>';
html_contenido = html_contenido + '<div class="buscar">';
html_contenido = html_contenido + '   <form id="' + nombre_formulario + '" name="' + nombre_formulario + '" action="/' + url_nombre_formulario + '" method="POST">';
html_contenido = html_contenido + html_campo_buscar;
html_contenido = html_contenido + '   <select name="tipo_contenido" id="id_select_tipo_contenido_form">';
html_contenido = html_contenido + '    <option value="1" ' + html_opcion_usuarios + '>Usuarios</option>';
html_contenido = html_contenido + '    <option value="2" ' + html_opcion_contenido + '>Contenido</option>';
html_contenido = html_contenido + '    <option value="3" ' + html_opcion_temas + '>Temas</option>';
html_contenido = html_contenido + '   </select>';
html_contenido = html_contenido + '   <a href="javascript:void(0);" onclick="' + js_boton_buscar + '" class="buscar">Buscar</a>';
html_contenido = html_contenido + '   <input type="hidden" class="hidden" name="tipo_contenido" id="id_tipo_contenido_form" value="' + tipo_contenido + '" />';
html_contenido = html_contenido + '   </form>';
html_contenido = html_contenido + '   <div class="rompedor"></div>';
html_contenido = html_contenido + '</div><!-- === cierre div buscar === -->';
var divContenedorBusquedas = document.getElementById('id_busquedas');
divContenedorBusquedas.innerHTML = html_contenido;
}
function f_pinta_html_listado_resultado_mensajes(paginaActual, numeroTotal, numeroMensajes, hashDatos) {
var html_encabezado         = '';
var html                    = '';
var numero_mensajes = numeroTotal;
var cadena_buscada = '';
var descripcion_cadena_buscada = '';
if (_cadenaQ != '') {
cadena_buscada = _cadenaQ;
descripcion_cadena_buscada = 'mensajes encontrados con <strong>' + cadena_buscada + '</strong>';
}
else {
cadena_buscada = '';
descripcion_cadena_buscada = 'mensajes relacionados';
}
f_pinta_html_buscar(2, cadena_buscada);
if (numero_mensajes > 0) {
var inicioNumeroActual  = ((parseInt(paginaActual) - 1) * _numMsgPag) + 1;
var finNumeroActual     = parseInt(paginaActual) * _numMsgPag;
if (finNumeroActual > numeroTotal) {
finNumeroActual = numeroTotal
}
var estilo_ordenacion_frescura   = '';
var estilo_ordenacion_relevancia = '';
if (_tipoOrdenacionBusquedas == 'r') {
estilo_ordenacion_relevancia = 'class="activo"';
}
else {
estilo_ordenacion_frescura = 'class="activo"';
}
html = html + '<ul class="pestanasbuscar">';
html = html + '  <li>Ordenar por</li>';
html = html + '  <li><a href="javascript:void(0);" onclick="javascript:f_buscar_contenido_por_frescura(1);" '   +  estilo_ordenacion_frescura   + '>Frescura </a></li>';
html = html + '  <li><a href="javascript:void(0);" onclick="javascript:f_buscar_contenido_por_relevancia(1);" ' +  estilo_ordenacion_relevancia + '>Coincidencia </a></li>';
html = html + '</ul><!-- === cierre ul opciones === -->';
html = html + '<div class="resultados">Mostrando del ' + inicioNumeroActual + ' al ' + finNumeroActual + ' de <strong>' + numeroTotal + '</strong> ' + descripcion_cadena_buscada + '</div>';
}
else {
html = html + '<div class="error">';
html = html + '  <p>No se ha encontrado ning&uacute;n mensaje que cumpla la condici&oacute;n</p>';
html = html + '</div><!-- === cierre div error === -->';
}
var divCaja = document.getElementById('id_listado');
divCaja.innerHTML = html;
if (numero_mensajes > 0) {
if (hashDatos.mensajes.length > 0) {
muestraMensajesResultadoBusquedas(paginaActual, numeroTotal, numero_mensajes, hashDatos.mensajes);
}
else {
var html_error = '  <p>Se ha producido un error al realizar la consulta. Por favor, espere y rep&iacute;talo m&aacute;s tarde.</p>';
var divContenedor = document.getElementById(_idContenedorErr);
divContenedor.innerHTML = html_error;
divContenedor.style.display = '';
}
}
}
function f_pinta_html_numero_seguidos(numero_seguidos) {
var divCaja = document.getElementById('id_numero_usuarios_que_sigo');
divCaja.innerHTML = numero_seguidos;
}
function f_pinta_html_a_quien_sigo(hashDatos) {
var html ='';
var clave_usuario = '';
var numero_usuarios = 0;
var hashUsuarios     = Array();
var lista_ordenacion = Array();
var numero_elementos = 0;
var numero_aquien_sigo = 0;
var divEnlaces 	= document.getElementById('id_enlaces_usuariosseguidos');
var divCajaUsuarios	= document.getElementById('id_usuarios_aquien_sigo');
var divCajaVacia  	= document.getElementById('id_cajavacia_usuariosseguidos');
if (hashDatos.perfilesUsuarios) {
hashUsuarios = hashDatos.perfilesUsuarios;
lista_ordenacion = hashDatos.ordenPerfilesUsuariosActivos;
numero_elementos = lista_ordenacion.length;
numero_aquien_sigo = hashDatos.numeroUsuarios;
}
if (numero_elementos > 0) {
for (i = 0; i < numero_elementos; i++) {
clave_usuario = lista_ordenacion[i];
usuario = hashUsuarios[clave_usuario];
url_foto = usuario.pathfoto;
if (typeof usuario.pathfoto == 'undefined' || !url_foto || url_foto == '') {
url_foto = _url_imagen_usuario_por_defecto;
}
var nombre = (usuario.nombre?usuario.nombre:'') + ' ' + (usuario.apellidos?usuario.apellidos:'');
if ( trim(nombre) == '') {
nombre = clave_usuario;
}
url_usuario = "/" + clave_usuario;
es_activo =  usuario.activo;
var estilo_activo = '';
html = html + '  <div class="usuario">';
if (es_activo == 1) {
estilo_activo = 'activo';
}
else {
estilo_activo = 'inactivo';
}
html = html + '    <div class="' + estilo_activo + '"><a href="' + url_usuario + '" title="' + nombre + '"><img src="' + url_foto + '" width="75" height="75" alt="' + nombre + '" /></a></div><!-- === cierre .activo .inactivo === -->';
html = html + '  </div><!-- === cierre div .usuario === -->';
numero_usuarios++;
}
divCajaUsuarios.innerHTML = html;
divEnlaces.style.display 		= '';
divCajaUsuarios.style.display 	= '';
divCajaVacia.style.display = 'none';
}
else {
html = html + '    <p>No sigues a ning&uacute;n usuario</p>';
html = html + '    <p><a href="/buscar_usuario.html">Buscar usuarios</a></p>';
divCajaVacia.innerHTML     = html;
divCajaVacia.style.display = '';
divEnlaces.style.display 		= 'none';
divCajaUsuarios.style.display 	= 'none';
}
f_pinta_html_numero_seguidos(numero_aquien_sigo);
}
function f_muestra_a_quien_sigo(hashDatos) {
f_pinta_html_a_quien_sigo(hashDatos);
}
function f_procesa_a_quien_sigo(httpRequest) {
var numero_aquien_sigo = 0;
if (httpRequest.status != 200) {
} else {
var data = httpRequest.responseText;
try {
eval("hashTMP = " + data);
} catch(e) {
hashTMP = Array();
}
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
f_pinta_html_a_quien_sigo_movil(hashTMP);
} else {
f_pinta_html_a_quien_sigo(hashTMP);
}
}
}
function f_obtener_quien_sigo() {
var numero_seguidos = 0;
var cadena_params = "action=list_usuarios&max=" + _numero_maximo_usuarios_conectados;
cadena_params += '&sort=1';
if (_ultimaRecargaServidor > 0) {
cadena_params += "&ts=" + parseInt(_ultimaRecargaServidor);
}
EPETUtils_makeHttpRequestGet(f_procesa_a_quien_sigo, _urlESKUP + "&" + cadena_params);
}
function f_procesa_denegados(httpRequest) {
var numero_aquien_sigo = 0;
if (httpRequest.status != 200) {
}
else {
var data = httpRequest.responseText;
eval("hashTMP = " + data);
_hashListaDenegados = hashTMP;
f_pinta_denegados_para_listado(hashTMP);
}
}
function f_obtener_denegados(idUsuario) {
var numero_seguidos = 0;
var cadena_params = 'action=list_denegaciones';
if (_idUsuario != '') {
cadena_params += "&user=" + idUsuario;
}
_idUsuario = idUsuario;
if (_ultimaRecargaServidor > 0) {
cadena_params += "&ts=" + parseInt(_ultimaRecargaServidor);
}
EPETUtils_makeHttpRequestGet(f_procesa_denegados, _urlESKUP + "&" + cadena_params);
}
function f_pinta_denegados_para_listado(hashDatos) {
var numero_usuarios = 0;
var hashUsuarios    = hashDatos.perfilesUsuarios;
var numero_usuarios = hashDatos.numeroUsuarios;
if (numero_usuarios > 0) {
for (var clave_usuario in hashUsuarios) {
usuario = hashUsuarios[clave_usuario];
var boton_bloquear    = document.getElementById('id_boton_bloquear_'    + clave_usuario);
var boton_desbloquear = document.getElementById('id_boton_desbloquear_' + clave_usuario);
if (boton_bloquear) {
boton_bloquear.style.display  = 'none';
}
if (boton_desbloquear) {
boton_desbloquear.style.display = '';
}
}
}
}
function f_cerrar_detalles() {
var divCaja = document.getElementById('id_detalles_evento');
divCaja.style.display = 'none';
var botonCerrar = document.getElementById('boton_cerrar_detalles');
var botonVer = document.getElementById('boton_ver_detalles');
botonCerrar.style.display = 'none';
botonVer.style.display    = '';
_detallesEventoCerrados = true;
}
function f_abrir_detalles() {
var divCaja = document.getElementById('id_detalles_evento');
divCaja.style.display = '';
var botonCerrar = document.getElementById('boton_cerrar_detalles');
var botonVer = document.getElementById('boton_ver_detalles');
botonCerrar.style.display = '';
botonVer.style.display    = 'none';
_detallesEventoCerrados = false;
}
function f_cerrar_panel_aviso() {
f_cerrar_panel('id_caja_aviso');
var botonDejar  = document.getElementById('boton_dejar_evento');
var botonSeguir = document.getElementById('boton_seguir_evento');
botonDejar.className  = '';
botonSeguir.className = '';
}
function f_pinta_html_servicios_externos(idMensaje) {
var html = '';
var class_boton   = 'boton publicarfuera desactivado';
var html_twitter  = '<a href="/Auth/moduser.html" target="_blank" id="id_enlace_publicar_twitter_' + idMensaje +  '" title="Ir a \'Opciones\' para activar el enlace con Twitter" class="externo twitternoactivo"></a>';
var html_facebook = '<a href="/Auth/moduser.html" target="_blank" id="id_enlace_publicar_facebook_' + idMensaje + '" title="Ir a \'Opciones\' para activar el enlace con Facebook" class="externo facebooknoactivo"></a>';
var numero_servicios_externos = _listaServiciosExternos.length;
if (numero_servicios_externos > 0) {
class_boton 	= 'boton publicarfuera';
for (i = 0; i < numero_servicios_externos; i++) {
var codigo_servicio = _listaServiciosExternos[i];
if (codigo_servicio == _id_servicio_externo_twitter) {
html_twitter = '<a id="id_enlace_publicar_twitter_' + idMensaje + '" class="externo twitter" href="javascript:void(0);" onclick="javascript:f_activa_boton_envio_externo(this, \'externo twitter\');" title="Twitter"></a>';
}
else {
if (codigo_servicio == _id_servicio_externo_facebook) {
html_facebook = '<a id="id_enlace_publicar_facebook_' + idMensaje + '" class="externo facebook" href="javascript:void(0);" onclick="javascript:f_activa_boton_envio_externo(this, \'externo facebook\');" title="Facebook"></a>';
}
}
}
}
html = '<span id="id_texto_publicar_externo_' + idMensaje + '" class="' + class_boton + '" href="javascript:void(0);">Publicar tambi&eacute;n en</span>';
html = html + html_twitter;
html = html + html_facebook;
return html;
}

function f_obtener_html_caja_escribir_evento_falsa() {
var html = '';
html = html + '<form id="formulario_escribir" name="formulario_escribir" method="post" enctype="multipart/form-data" action="' + _urlIneskup + '" target="iframe_escribir" >';
html = html + '<div class="contenedorsuperior">';
html = html + '  <div id="secundario" class="secundario">';
html = html + '  <div class="caracteres">';
html = html + '   <p class="numero">' + _numero_maximo_caracteres_mensaje + '</p>';
html = html + '   <p>caracteres</p>';
html = html + '  </div><!-- === cierre div caracteres === -->';
html = html + '  <span class="publicar">Publicar</span>';
html = html + '  </div><!-- === cierre div secundario === -->';
html = html + '  <div class="rompedor"></div>';
html = html + '</div><!-- === cierre div contenedorsuperior === -->';
html = html + '<div class="contenedorinferior">';
html = html + '  <div id="id_botones" class="botones">';
html = html + '    <a class="boton negrita" id="boton_negrita" href="javascript:void(0);"><strong>N</strong></a>';
html = html + '    <a class="boton cursiva" id="boton_cursiva" href="javascript:void(0);"><em>I</em></a>';
html = html + '     <span class="boton imagen">Adjuntar imagen</span>';
html = html + '     <div class="rompedor"></div>';
html = html + '  </div><!-- === cierre div botones === -->';
html = html + '</div><!-- === cierre div contenedorinferior === -->';
html = html + '</form>';
html = html + '<div class="rompedor"></div>';
return html;
}
function f_pinta_caja_escribir_evento(idEvento, eventoActivo, tipoSuscripcionEvento, estadoEscrituraEvento, tipoEvento) {
var html_caja = '';
var html_escribir = '';
var pintar_botones = 0;
if (_nickname == '') {
html_escribir = html_escribir + '  <div class="aviso">';
html_escribir = html_escribir + '  <p class="noregistrado">Tienes que <strong>identificarte</strong> para poder enviar mensajes.<br/>Utiliza el formulario de arriba para <strong>iniciar sesi&oacute;n</strong><br/>o <a href="https://plus.elpais.com/clientes2/registro/registroUsuario.html?prod=ESKUP" target="_blank">date de alta</a> si no lo has hecho a&uacute;n</p>';
html_escribir = html_escribir + '  </div><!-- === cierre div aviso === -->';
html_caja = f_obtener_html_caja_escribir_evento_falsa();
class_para_div = 'escribirmensajefalsa';
}
else {
if (estadoEscrituraEvento == 0) {
if (tipoSuscripcionEvento == 0) {
}
else if (tipoSuscripcionEvento == 1) {
html_escribir = html_escribir + '  <div class="aviso">';
if (tipoEvento >= 100) {
html_escribir = html_escribir + '  <p class="variaslineas">';
}
else {
html_escribir = html_escribir + '  <p class="monolinea">';
}
if (tipoEvento >= 100) {
html_escribir = html_escribir + 'La participaci&oacute;n en este concurso implica la aceptaci&oacute;n de sus <a target="_blank" href="/Estaticas/bases_legales_eventos/aviso_legal_' + idEvento + '.html">bases</a><br/>';
}
html_escribir = html_escribir + '  Si quieres escribir en este tema <strong>pulsa el bot&oacute;n</strong>. &iexcl;Gracias!';
html_escribir = html_escribir + '  </p>';
html_escribir = html_escribir + '  <a class="solicitar" href="javascript:void(0);" onclick="javascript:f_solicitar_permiso_escritura(\'' + idEvento + '\');">Quiero escribir</a>';
html_escribir = html_escribir + '  </div><!-- === cierre div aviso === -->';
html_caja = f_obtener_html_caja_escribir_evento_falsa();
class_para_div = 'escribirmensajefalsa';
}
else {
html_escribir = html_escribir + '  <div class="aviso">';
html_escribir = html_escribir + '    <p class="variaslineas"><strong>En este espacio se escribe por invitaci&oacute;n.</strong> <br>';
html_escribir = html_escribir + '    Si puedes aportar nuevos argumentos cu&eacute;ntanos qui&eacute;n eres y por qu&eacute; quieres participar.</p>';
html_escribir = html_escribir + '    <a class="solicitar" href="javascript:void(0);" onclick="javascript:f_solicitar_permiso_escritura(\'' + idEvento + '\');">Quiero escribir</a>';
html_escribir = html_escribir + '  </div><!-- === cierre div aviso === -->';
html_caja = f_obtener_html_caja_escribir_evento_falsa();
class_para_div = 'escribirmensajefalsa';
}
}
else {
if (estadoEscrituraEvento == 2) {
html_escribir = html_escribir + '  <div class="aviso">';
html_escribir = html_escribir + '    <p class="monolinea">Estamos analizando tu solicitud para escribir.<br />En breve nos pondremos en contacto contigo. &iexcl;Gracias!</p>';
html_escribir = html_escribir + '  </div><!-- === cierre div aviso === -->';
html_caja = f_obtener_html_caja_escribir_evento_falsa();
class_para_div = 'escribirmensajefalsa';
}
else {
pintar_botones = 1;
html_caja = '';
class_para_div = 'escribirmensaje';
}
}
}
var html_final = '';
if (html_escribir != '') {
html_final = '<div class="avisos">';
html_final = html_final + html_escribir;
html_final = html_final + '  <div class="rompedor"></div>';
html_final = html_final + '</div><!-- === .avisos === -->';
}
html_final = html_final + html_caja;
var divCajaEscribir = document.getElementById('id_escribir_mensaje');
divCajaEscribir.className = class_para_div;
if (html_final != '') {
divCajaEscribir.innerHTML = html_final;
}
}
function f_pinta_caja_escribir_evento_fin_registro() {
var html_caja = '';
var html_escribir = '';
var pintar_botones = 0;
var html_final = '';
if (_nickname == '') {
html_escribir = html_escribir + '  <div class="aviso">';
html_escribir = html_escribir + '  <p class="solicitar">Tienes que haber <a title="Registrarme ahora" href="' + _url_nuevousuario + '">terminado el registro</a><br/>para poder enviar mensajes.</p>';
html_escribir = html_escribir + '  </div><!-- === cierre div aviso === -->';
html_caja = f_obtener_html_caja_escribir_evento_falsa();
class_para_div = 'escribirmensajefalsa';
html_final = '<div class="avisos">';
html_final = html_final + html_escribir;
html_final = html_final + '  <div class="rompedor"></div>';
html_final = html_final + '</div><!-- === .avisos === -->';
html_final = html_final + html_caja;
var divCajaEscribir = document.getElementById('id_escribir_mensaje');
divCajaEscribir.className = class_para_div;
if (html_final != '') {
divCajaEscribir.innerHTML = html_final;
}
}
}
function f_solicitar_permiso_escritura(idEvento) {
if (_hashDatosEvento.tipo_suscripcion == 1) {
f_peticion_eskup_escritura(idEvento);
}
else {
var html_aportacion = '<div class="avisos">';
html_aportacion = html_aportacion + '  <div class="aviso">';
html_aportacion = html_aportacion + '    <p class="solicitar">Cu&eacute;ntanos qu&eacute; puedes aportar.</p>';
html_aportacion = html_aportacion + '    <textarea id="id_campo_formulario_texto_solicitud" name="campo_formulario_texto_solicitud" value="" ></textarea>';
html_aportacion = html_aportacion + '    <div class="botones"><a href="javascript:void(0);" onclick="javascript:f_peticion_eskup_escritura(\'' + idEvento + '\');" class="boton enviar">' + _ESKUPhashMsgByLang[LANGESKUP].enviar + '</a><a href="javascript:void(0);" onclick="javascript:f_pinta_html_informacion_evento(\'' + idEvento + '\');" class="boton cancelar">' + _ESKUPhashMsgByLang[LANGESKUP].cancelar + '</a></div><!-- === cierre div botones === -->';
html_aportacion = html_aportacion + '       <div class="rompedor"></div>';	
html_aportacion = html_aportacion + '    </div><!-- === cierre div botones === -->';
html_aportacion = html_aportacion + '  </div><!-- === cierre div aviso === -->';
html_aportacion = html_aportacion + '  <div class="rompedor"></div>';
html_aportacion = html_aportacion + '</div><!-- === .avisos === -->';
html = f_obtener_html_caja_escribir_evento_falsa();
html_aportacion = html_aportacion + html;
var divCajaEscribir = document.getElementById('id_escribir_mensaje');
divCajaEscribir.className = 'escribirmensajefalsa';
divCajaEscribir.innerHTML = html_aportacion;
f_poner_foco_campo_texto('id_campo_formulario_texto_solicitud');
}
}



function f_pinta_html_informacion_evento(idEvento) {
var html = '';
var nombreEvento        = _hashDatosEvento.nombre;
var descripcionEvento   = ''
if (typeof _hashDatosEvento.descripcion != 'undefined' && _hashDatosEvento.descripcion) {
descripcionEvento = _hashDatosEvento.descripcion;
}
var pathfotoEvento = _url_imagen_por_defecto;
if (typeof _hashDatosEvento.pathfoto != 'undefined' && _hashDatosEvento.pathfoto && _hashDatosEvento.pathfoto != '') {
pathfotoEvento = _hashDatosEvento.pathfoto;
}
var eventoActivo      = _hashDatosEvento.activo;
var tipo_suscripcion = _hashDatosEvento.tipo_suscripcion;
var ts_inicio = _hashDatosEvento.ts_inicio;
var ts_final  = _hashDatosEvento.ts_final;
var fecha_actual = new Date();
var ts_actual    = Math.round(fecha_actual.getTime() / 1000);
var seguimiento_usuario = false;

if (_hashDatosEvento.estado_seguimiento == 1) {
seguimiento_usuario = true;
}
var mostrar_caja_escritura = false;
if (_hashDatosEvento.estado_escritura == '1') {
mostrar_caja_escritura = true;
}
if (_hashDatosEvento.refresco_automatico == '1') {
_activarRecargaAutomatica = true;
}
var class_estado 	   = '';
var mensaje_estado 	   = '';
var html_estado_evento = '';
var codigo_js_href 	   = '';
var codigo_js_div 	   = '';
if (eventoActivo == 0) {
_activarRecargaAutomatica = false;
if (ts_actual > ts_final ) {
class_estado = 'concluido';
mensaje_estado = '<p><a href="/Estaticas/ayuda/faq.html#hay_temas_en_los_que_no_puedo_escribir" title="M&aacute;s informaci&oacute;n">Tema cerrado &raquo;</a></p>';
codigo_js_href = 'onmouseover="f_abrir_panel(\'id_aclaracion\');" onmouseout="f_cerrar_panel(\'id_aclaracion\');"';
codigo_js_div = 'onmouseover="f_abrir_panel(\'id_aclaracion\');" onmouseout="f_cerrar_panel(\'id_aclaracion\');"';
}
else {
class_estado = 'noabierto';
fecha_inicio = f_obtener_fecha_visible(ts_inicio, true);
mensaje_estado = '<p>Este tema no est&aacute; abierto todav&iacute;a.</p>';
codigo_js_href = 'onmouseover="f_abrir_panel(\'id_aclaracion\');" onmouseout="f_cerrar_panel(\'id_aclaracion\');"';
codigo_js_div = 'onmouseover="f_abrir_panel(\'id_aclaracion\');" onmouseout="f_cerrar_panel(\'id_aclaracion\');"';
}
}
else {
if (tipo_suscripcion == 0) {
class_estado = 'bloqueado';
mensaje_estado = '<p><a href="/Estaticas/ayuda/faq.html#hay_temas_en_los_que_no_puedo_escribir" title="M&aacute;s informaci&oacute;n">Tema de participaci&oacute;n restringida &raquo;</a></p>';
codigo_js_href = 'onmouseover="f_abrir_panel(\'id_aclaracion\');f_fija_class(\'id_icono_tema\', \'icono hover\');" onmouseout="f_cerrar_panel(\'id_aclaracion\');f_fija_class(\'id_icono_tema\', \'icono\');"';
codigo_js_div  = 'onmouseover="f_abrir_panel(\'id_aclaracion\');f_fija_class(\'id_icono_tema\', \'icono hover\');" onmouseout="f_cerrar_panel(\'id_aclaracion\');f_fija_class(\'id_icono_tema\', \'icono\');"';
}
else if (tipo_suscripcion == 1) {
mostrar_caja_escritura = true;
}
else {
mostrar_caja_escritura = true;
}
}
if (class_estado != '') {
html_estado_evento = html_estado_evento +  '<div id="id_estado_tema" class="' + class_estado + '">';
html_estado_evento = html_estado_evento +  '  <div class="estado">';
html_estado_evento = html_estado_evento +  '    <a id="id_icono_tema" href="javascript:void(0);" class="icono" ' + codigo_js_href + '></a>';
html_estado_evento = html_estado_evento +  '    <div class="aclaracion" id="id_aclaracion" style="display: none;" ' + codigo_js_div + '>';
html_estado_evento = html_estado_evento +  mensaje_estado;
html_estado_evento = html_estado_evento +  '    </div><!-- === .aclaracion === -->';
html_estado_evento = html_estado_evento +  '    <div class="rompedor"></div>';
html_estado_evento = html_estado_evento +  '  </div><!-- === .estado === -->';
html_estado_evento = html_estado_evento +  '</div><!-- === .' + class_estado + '=== -->';
}
html_botones_menu_seguir = '';
if (_nickname != '') {
html_botones_menu_seguir = f_componer_html_botones_menu_seguir_evento(seguimiento_usuario, idEvento);
}
html = html +  '<div class="encabezado">';
html = html + '   <div id="id_menu_botones_seguir_' + idEvento + '">' + html_botones_menu_seguir + '</div>';
html = html +  '  <div class="rompedor"></div>';
html = html +  '</div><!-- === .encabezado === -->';
html = html +  '<div class="barraencabezado"></div><!-- === .barraencabezado === -->';
html = html +  '<div class="columnaizquierda">';
html = html +  '  <div class="fotoymas">';
html = html +  '    <img src="' + pathfotoEvento + '" width="140" alt="Foto Evento" height="100">';
html = html +  '  </div><!-- === .fotoymas === -->';
html = html +  '  <div class="contador">';
html = html +  '    <ul>';
if ( (_hashDatosEvento.adm) && (_hashDatosEvento.adm!= '') ) {
var texto_html = f_obtener_html_administradores_evento(_hashDatosEvento.adm);
if (texto_html != '') {
html = html + '     <li><span class="enunciado">Administrado por:</span> ' + texto_html + '</li>';
}
}
var nombreparamovil = idEvento;
if ( (_hashDatosEvento.nombreparamovil) && (_hashDatosEvento.nombreparamovil != '') ) {
nombreparamovil = _hashDatosEvento.nombreparamovil;
html = html + '     <li><span class="enunciado">Clave SMS:</span><a href="/Estaticas/ayuda/faq.html#enviar_mensajes_desde_el_movil" target="_blank" title="&iquest;Qu&eacute; es esto?">*' + nombreparamovil + '</a></li>';
}
html = html +  '    </ul>';
html = html +  '  </div><!-- === .contador === -->';
html = html +  '</div><!-- === .columnaizquierda === -->';
html = html +  '<div class="columnaderecha">';
html = html +  '  <div class="widget">';
html = html +  '    <a href="/Widgets/configuracion_widget.html?t=*' + idEvento + '" title="Ll&eacute;vate el widget de ' + nombreEvento.replace(/"/g, '').replace(/[<>]/g, '') + '" target="_blank">Ll&eacute;vate el widget</a>';
html = html +  '  </div><!-- === .widget === -->';
html = html +  html_estado_evento;
html = html +  '  <div class="contenedornombreyrss">';
html = html +  '    <h2>' + nombreEvento + '</h2>';
html = html +  '    <a href="' + _urlOuteskup + '&f=rss&t=ev-' + idEvento + '" class="rss" title="Suscribirse a este tema" target="_blank"></a>';
html = html +  '    <div class="rompedor"></div>';
html = html +  '  </div><!-- === .contenedornombreyrss === -->';
if (_hashDatosEvento.etiquetas) {
var texto_html = f_obtener_html_etiquetas_evento(_hashDatosEvento.etiquetas);
if (texto_html != '') {
html = html +  '  <div class="categorias">';
html = html +  '    <h5>Archivado en:</h5>';
html = html + '     ' + texto_html;
html = html +  '  </div><!-- === .categorias === -->';
}
}
if (_hashDatosEvento.etiquetas) {
html = html +  '  <div class="descripcion">' + descripcionEvento + '</div><!-- === .descripcion === -->';
}
if (_hashDatosEvento.apoyos) {
var texto_html = f_obtener_html_apoyos_evento(_hashDatosEvento.apoyos);
if (texto_html != '') {
html = html +  '  <div class="contexto">';
html = html +  '    <h5>M&aacute;s informaci&oacute;n</h5>';
html = html +  '    <div class="capamasinformacion">';
html = html +  '      <ul>';
html = html + '     ' + texto_html;
html = html +  '      </ul>';
html = html +  '    </div><!-- === .capamasinformacion === -->';
html = html +  '  </div><!-- === .contexto === -->';
}
}
var str_numero_mensajes = _hashDatosEvento.num_mensajes;
if (_hashDatosEvento.num_mensajes >= 10000) {
str_numero_mensajes = str_numero_mensajes + '+';
html = html +  '  <div class="contenedorrelativo">';
html = html +  '    <div class="contenedorabsoluto">';
html = html +  '    <div class="subcontenedorrelativo">';
html = html +  '    <div id="capamensaje_limite_mensajes" class="capainfo">';
html = html +  '      <a href="javascript:void(0);" title="Ver mensaje" class="mostrar" onclick="f_anima(\'capamensaje_limite_mensajes\',\'y\',8,10);"></a>';
html = html +  '      <p><a href="javascript:void(0);" title="Cerrar mensaje" class="cerrar" onclick="f_anima(\'capamensaje_limite_mensajes\',\'y\',118,10);"></a><strong>Se ha superado el l&iacute;mite de mensajes admitidos por tabl&oacute;n</strong> Los mensajes nuevos seguir&aacute;n siendo visibles desplazando a los mensajes m&aacute;s antiguos.</p>';
html = html +  '    </div><!-- === .capainfo === -->';
html = html +  '    </div><!-- === .subcontenedorrelativo === -->';
html = html +  '    </div><!-- === .contenedorabsoluto === -->';
}
html = html +  '  <div class="contadores">';
html = html +  '    <div class="contador">';
html = html +  '       <h5>Usuarios</h5>';
html = html +  '        <ul>';
html = html +  '          <li><span class="enunciado">Lo siguen:</span><a id="id_numero_usuarios_seguidores_' + idEvento + '" href="/' + '*' + idEvento + '/seguidores" title="Verlos todos">' +  _hashDatosEvento.numero_seguidores_evento + '</a></li>';
html = html +  '          <li><span id="id_numero_usuarios_seguidores_' + idEvento + '" class="enunciado">Pueden escribir:</span><a href="/' + '*' + idEvento + '/escritores" title="Verlos todos">' +  _hashDatosEvento.numero_writers_evento + '</a></li>';
html = html +  '        </ul>';
html = html +  '    </div><!-- === .contador === -->';
html = html +  '    <div class="contador">';
html = html +  '       <h5>Mensajes</h5>';
html = html +  '        <ul>';
html = html +  '          <li><span class="enunciado">Total:</span><a href="javascript:void(0);" title="Verlos todos">' +  str_numero_mensajes +  '</a></li>';
if ( (_hashDatosEvento.ts_ultimo_mensaje) && (_hashDatosEvento.num_mensajes > 0) ) {
var texto_html = f_obtener_html_ultima_actualizacion_evento(_hashDatosEvento.ts_ultimo_mensaje, false);
html = html + '<li><span class="enunciado">El &uacute;ltimo:</span>' + texto_html + '</li>';
}
html = html +  '        </ul>';
html = html +  '    </div><!-- === .contador === -->';
html = html +  '    <div class="rompedor"></div>';
html = html +  '  </div><!-- === .contadores === -->';
if (_hashDatosEvento.num_mensajes >= 10000) {
html = html +  '  </div><!-- === .contenedorrelativo === -->';
}
html = html +  '</div><!-- === .columnaderecha === -->';
html = html +  '<div class="rompedor"></div>';
var caja = document.getElementById('id_info_usuariotema');
caja.innerHTML = html;
if (mostrar_caja_escritura == true) {
f_pinta_caja_escribir_evento(idEvento, eventoActivo, tipo_suscripcion, _hashDatosEvento.estado_escritura, _hashDatosEvento.tipo_evento);
}
else {
var cajaEscribir = document.getElementById('id_escribir_mensaje');
cajaEscribir.style.display = 'none';
}
if (_activarRecargaAutomatica == true) {
f_cambia_boton_recarga('boton_recarga_pagina','recarga', 'id_letrero', 'letrero');
}
}
function f_obtener_html_etiquetas_evento(lista_etiquetas) {
var html_etiquetas = '';
var numero_etiquetas = lista_etiquetas.length;
for (i = 0; i < numero_etiquetas; i++) {
etiqueta = lista_etiquetas[i];
if (i != 0) {
html_etiquetas = html_etiquetas + ', ';
}
html_etiquetas = html_etiquetas +  '    <span>' + etiqueta + '</span>';
}
return html_etiquetas;
}
function f_obtener_html_administradores_evento(lista_administradores) {
var html_administradores = '';
var numero_administradores = lista_administradores.length;
for (i = 0; i < numero_administradores; i++) {
adm = lista_administradores[i];
html_administradores = html_administradores + '<a href="/' + adm + '" title="Ver perfil">' + adm + '</a>';
}
return html_administradores;
}
function f_obtener_html_apoyos_evento(lista_apoyos) {
var html = '';
var numero_apoyos = 4;
for (i = 1; i <= numero_apoyos; i++) {
var objeto_apoyo = lista_apoyos[i];
var etiqueta = '';
if (typeof objeto_apoyo.tipo_apoyo != 'undefined' && objeto_apoyo.tipo_apoyo) {
etiqueta = objeto_apoyo.tipo_apoyo;
}
var texto = '';
if (typeof objeto_apoyo.titulo_apoyo != 'undefined' && objeto_apoyo.titulo_apoyo) {
texto = objeto_apoyo.titulo_apoyo;
}
var url = '';
if (typeof objeto_apoyo.enlace_apoyo != 'undefined' && objeto_apoyo.enlace_apoyo) {
url = objeto_apoyo.enlace_apoyo;
}
if (texto != '') {
if (etiqueta != '') {
etiqueta += ': ';
}
html = html + '<li>' +  etiqueta;
if (url != '') {
html = html + '<a href="' + url + '" title="M&aacute;s informaci&oacute;n">' + texto + ' &raquo;</a>';
}
else {
html = html + texto;
}
html = html + '</li>';
}
}
return html;
}
function f_obtener_html_ultima_actualizacion_evento(ts_actualizacion, mostrar_horaminutosegundo) {
var ts_actual = '';
if (_tsServidor == 0) {
var date_actual  = new Date();
var ts_actual = date_actual.getTime();
ts_actual = Math.round(ts_actual / 1000);
}
else {
ts_actual = _tsServidor;
}
var segundo = 1;
var minuto = 60 * segundo;
var hora   = 60 * minuto;
var dia    = 24 * hora;
ts_actualizacion = Math.round(ts_actualizacion);
diferencia = ts_actual - ts_actualizacion;
diferencia = Math.round(diferencia);
var tiempo = '';
var cadena = '';
var html   = '';
if (diferencia < minuto) {
cadena = _ESKUPhashMsgByLang[LANGESKUP].menos_de_un_minuto.toLowerCase();
}
else if ( (diferencia > minuto) && (diferencia < hora) ) {
tiempo = parseInt(diferencia / minuto);
cadena = _ESKUPhashMsgByLang[LANGESKUP].hace.toLowerCase() + ' ' +  tiempo + ' ' + _ESKUPhashMsgByLang[LANGESKUP].minutos;
}
else if ( (diferencia > hora) && (diferencia < dia) ) {
tiempo = parseInt(diferencia / hora);
if (tiempo == 1) {
cadena = _ESKUPhashMsgByLang[LANGESKUP].hace.toLowerCase() + ' ' +  tiempo + ' ' + _ESKUPhashMsgByLang[LANGESKUP].hora;
} else {
cadena = _ESKUPhashMsgByLang[LANGESKUP].hace.toLowerCase() + ' ' +  tiempo + ' ' + _ESKUPhashMsgByLang[LANGESKUP].horas;
}
}
else {
cadena = 'el d&iacute;a ' +  f_obtener_fecha_visible(ts_actualizacion, mostrar_horaminutosegundo);
}
html = '<span class="fecha">' + cadena + '</span>';
return html;
}
function f_obtener_fecha_visible(ts_fecha, mostrar_horaminutosegundo) {
var date_actualizacion = new Date(ts_fecha * 1000);
var dia  = date_actualizacion.getDate();
var mes  = date_actualizacion.getMonth();
var agno = date_actualizacion.getFullYear();
var hora    = date_actualizacion.getHours();
var minuto  = date_actualizacion.getMinutes();
var segundo = date_actualizacion.getSeconds();
if (dia <= 9) {
dia = '0' + dia;
}
mes++;
if (mes <= 9) {
mes = '0' + mes;
}
if (hora <= 9) {
hora = '0' + hora;
}
if (minuto <= 9) {
minuto = '0' + minuto;
}
if (segundo <= 9) {
segundo = '0' + segundo;
}
var cadena = dia + '/' + mes + '/' + agno;
var cadena_tiempo = '';
if (mostrar_horaminutosegundo == 1) {
cadena_tiempo = ' ' + _ESKUPhashMsgByLang[LANGESKUP].a_las + ' ' + hora + ':' + minuto + ':' + segundo;
}
cadena = cadena + cadena_tiempo;
return cadena;
}
function f_procesa_informacion_evento(idEvento, datos) {
var _hashTMP = Array();
eval("_hashTMP = " + datos);
if (! _hashTMP.perfilesEventos[idEvento]) {
return false;
}
else {
_hashDatosEvento = _hashTMP.perfilesEventos[idEvento];
}
if (_hashDatosEvento.pathfoto == '') {
_hashDatosEvento.pathfoto = _url_imagen_por_defecto;
}
if (! _hashDatosEvento.activo) {
_hashDatosEvento.activo = 0;
}
if (! _hashDatosEvento.num_mensajes) {
_hashDatosEvento.num_mensajes = '0';
}
if (! _hashDatosEvento.ts_ultimo_mensaje) {
_hashDatosEvento.ts_ultimo_mensaje = '';
}
if (! _hashDatosEvento.adm) {
_hashDatosEvento.adm = new Array();
}
if (! _hashDatosEvento.etiquetas) {
_hashDatosEvento.etiquetas = new Array();
}
if (! _hashDatosEvento.estado_seguimiento) {
_hashDatosEvento.estado_seguimiento = 0;
}
}
function f_pinta_nombre_usuario_en_mensaje(idUsuario, idCampo) {
if (idUsuario == '') {
return false;
}
var cadena_params = "action=info_usuarios&user=" + idUsuario;
var date_actual  = new Date();
var ts_actual = date_actual.getTime();
cadena_params += "&ts=" + parseInt(ts_actual);
EPETUtils_makeHttpRequestGet(function(httpRequest) {
document.getElementById('boton_ver_nombre_completo').className = 'oculto';
document.getElementById('ver_nombre_completo_cargando').className = 'alavista';
var cajaNombre = document.getElementById(idCampo);
var nombreCompleto = 'No existe informaci&oacute;n';
if (httpRequest.status == 200) {
var hashTMP = Array();
var data = httpRequest.responseText;
eval("hashTMP = " + data);
if (hashTMP.perfilesUsuarios[idUsuario]) {
hashDatos = hashTMP.perfilesUsuarios[idUsuario];
var nombreUsuario    = hashDatos.nombre;
var apellidosUsuario = hashDatos.apellidos;
if (apellidosUsuario != '') {
nombreCompleto = nombreUsuario + ' ' + apellidosUsuario;
}
else {
if (nombreUsuario != '') {
nombreCompleto = nombreUsuario;
}
}
}
}
if (document.getElementById(idCampo)) {
cajaNombre.innerHTML = '(' + nombreCompleto + ')';
}
document.getElementById('ver_nombre_completo_cargando').className = 'oculto';
}, _urlESKUP + "&" + cadena_params);
}
function f_mostrar_menu_botones(tipoMenu, estadoBotonArriba, id) {
var estilo_boton_arriba = '';
var mostrar_boton_abajo = '';
if (tipoMenu == 'seguir_usuario') {
var opcion_menu_arriba = document.getElementById('opcion_seguir_usuario1_' + id);
var opcion_menu_abajo  = document.getElementById('opcion_seguir_usuario2_' + id);
if (opcion_menu_abajo.style.display == 'none') {
mostrar_boton_abajo = '';
if (estadoBotonArriba == 'off') {
estilo_boton_arriba = 'boton seguir1offpulsado';
}
else {
estilo_boton_arriba = 'boton seguir1onpulsado';
}
}
else {
mostrar_boton_abajo = 'none';
if (estadoBotonArriba == 'off') {
estilo_boton_arriba = 'boton seguir1offreposo';
}
else {
estilo_boton_arriba = 'boton seguir1onreposo';
}
}
opcion_menu_arriba.className = estilo_boton_arriba;
opcion_menu_abajo.style.display = mostrar_boton_abajo;
}
else if (tipoMenu == 'bloquear_usuario') {
var opcion_menu_arriba = document.getElementById('opcion_bloquear_usuario1_' + id);
var opcion_menu_abajo  = document.getElementById('opcion_bloquear_usuario2_' + id);
if (opcion_menu_abajo.style.display == 'none') {
mostrar_boton_abajo = '';
if (estadoBotonArriba == 'off') {
estilo_boton_arriba = 'boton bloquear1offpulsado';
}
else {
estilo_boton_arriba = 'boton bloquear1onpulsado';
}
}
else {
mostrar_boton_abajo = 'none';
if (estadoBotonArriba == 'off') {
estilo_boton_arriba = 'boton bloquear1offreposo';
}
else {
estilo_boton_arriba = 'boton bloquear1onreposo';
}
}
opcion_menu_arriba.className = estilo_boton_arriba;
opcion_menu_abajo.style.display = mostrar_boton_abajo;
}
else if (tipoMenu == 'seguir_evento') {
var opcion_menu_arriba = document.getElementById('opcion_seguir_evento1_' + id);
var opcion_menu_abajo  = document.getElementById('opcion_seguir_evento2_' + id);
if (opcion_menu_abajo.style.display == 'none') {
mostrar_boton_abajo = '';
if (estadoBotonArriba == 'off') {
estilo_boton_arriba = 'boton seguir1offpulsado';
}
else {
estilo_boton_arriba = 'boton seguir1onpulsado';
}
}
else {
mostrar_boton_abajo = 'none';
if (estadoBotonArriba == 'off') {
estilo_boton_arriba = 'boton seguir1offreposo';
}
else {
estilo_boton_arriba = 'boton seguir1onreposo';
}
}
opcion_menu_arriba.className = estilo_boton_arriba;
opcion_menu_abajo.style.display = mostrar_boton_abajo;
}
else if (tipoMenu == 'escribir_evento') {
var opcion_menu_arriba = document.getElementById('opcion_escribir_evento1_' + id);
var opcion_menu_abajo  = document.getElementById('opcion_escribir_evento2_' + id);
if (opcion_menu_abajo.style.display == 'none') {
opcion_menu_abajo.style.display = '';
opcion_menu_arriba.className = 'cerrar encima';
}
else {
opcion_menu_abajo.style.display = 'none';
opcion_menu_arriba.className = 'cerrar';
}
}
else {
}
}
function f_seleccionar_opcion_menu(tipoMenu, accion, id) {
if (tipoMenu == 'seguir_usuario') {
f_peticion_eskup_seguir_usuario(accion, id);
}
else if (tipoMenu == 'bloquear_usuario') {
f_peticion_eskup_bloquear_usuario(accion, id);
}
else if (tipoMenu == 'seguir_evento') {
f_peticion_eskup_seguir_evento(accion, id);
}
else {
}
}
function f_componer_html_botones_menu_seguir_evento(eventoSeguido, idEvento) {
var html_menu = '';
if (eventoSeguido == false) {
html_menu = html_menu + '    <a href="javascript:void(0);" id="opcion_seguir_evento1_' + idEvento + '" class="boton seguir1offreposo" onclick="javascript:f_mostrar_menu_botones(\'seguir_evento\', \'off\', \'' + idEvento + '\');" style=""><span class="letrero">Quiero seguirlo</span><span class="flecha"></span><span class="rompedor"></span></a>';
html_menu = html_menu + '    <a href="javascript:void(0);" id="opcion_seguir_evento2_' + idEvento + '" class="desplegada seguir2on" style="display: none;" onclick="javascript:f_seleccionar_opcion_menu(\'seguir_evento\', \'seguir\', \'' + idEvento + '\');">' + _ESKUPhashMsgByLang[LANGESKUP].confirmar + '</a>';
}
else {
html_menu = html_menu + '    <a href="javascript:void(0);" id="opcion_seguir_evento1_' + idEvento + '" class="boton seguir1onreposo" onclick="javascript:f_mostrar_menu_botones(\'seguir_evento\', \'on\', \'' + idEvento + '\');" style=""><span class="letrero">Lo sigues</span><span class="flecha"></span><span class="rompedor"></span></a>';
html_menu = html_menu + '    <a href="javascript:void(0);" id="opcion_seguir_evento2_' + idEvento + '" class="desplegada seguir2off" style="display: none;" onclick="javascript:f_seleccionar_opcion_menu(\'seguir_evento\', \'dejar\', \'' + idEvento + '\');">Dejar de seguir</a>';
}
return html_menu;
}
function f_componer_html_botones_menu_escribir_evento(eventoParaEscribir, idEvento, tipoSuscripcionEvento) {
var html_menu = '';
if (eventoParaEscribir == false) {
html_menu = html_menu + '<span class="noapuntado">Ya no est&aacute;s apuntado para escribir</span>';
}
else {
html_menu = html_menu + '     <a href="javascript:void(0);" id="opcion_escribir_evento1_' + idEvento + '" onclick="javascript:f_mostrar_menu_botones(\'escribir_evento\', \'on\', \'' + idEvento + '\');" title="Pulsa para dejar de escribir en este tema" class="cerrar">Dejar de escribir</a>';
html_menu = html_menu + '     <a href="javascript:void(0);" id="opcion_escribir_evento2_' + idEvento + '" onclick="javascript:f_marca_tema_para_borrar_en_listado(\'' + idEvento + '\', \'' + tipoSuscripcionEvento + '\');" style="display: none;" class="desplegadacerrar">' + _ESKUPhashMsgByLang[LANGESKUP].confirmar + '</a>';
}
return html_menu;
}
function f_componer_html_botones_menu_seguir_usuario(usuarioSeguido, idUsuario) {
var html_menu = '';
if (usuarioSeguido == false) {
html_menu = html_menu + '    <a href="javascript:void(0);" id="opcion_seguir_usuario1_' + idUsuario + '" class="boton seguir1offreposo" onclick="javascript:f_mostrar_menu_botones(\'seguir_usuario\', \'off\', \'' + idUsuario + '\');" style=""><span class="letrero">Quiero seguirle</span><span class="flecha"></span><span class="rompedor"></span></a>';
html_menu = html_menu + '    <a href="javascript:void(0);" id="opcion_seguir_usuario2_' + idUsuario + '" class="desplegada seguir2on" style="display: none;" onclick="javascript:f_seleccionar_opcion_menu(\'seguir_usuario\', \'seguir\', \'' + idUsuario + '\');">' + _ESKUPhashMsgByLang[LANGESKUP].confirmar + '</a>';
}
else {
html_menu = html_menu + '    <a href="javascript:void(0);" id="opcion_seguir_usuario1_' + idUsuario + '" class="boton seguir1onreposo" onclick="javascript:f_mostrar_menu_botones(\'seguir_usuario\', \'on\', \'' + idUsuario + '\');" style=""><span class="letrero">Le sigues</span><span class="flecha"></span><span class="rompedor"></span></a>';
html_menu = html_menu + '    <a href="javascript:void(0);" id="opcion_seguir_usuario2_' + idUsuario + '" class="desplegada seguir2off" style="display: none;" onclick="javascript:f_seleccionar_opcion_menu(\'seguir_usuario\', \'dejar\', \'' + idUsuario + '\');">Dejar de seguir</a>';
}
return html_menu;
}
function f_componer_html_botones_menu_bloquear(usuarioBloqueado, idUsuario) {
var html_menu = '';
if (usuarioBloqueado == false) {
html_menu = html_menu + '    <a href="javascript:void(0);" id="opcion_bloquear_usuario1_' + idUsuario + '" class="boton bloquear1offreposo" onclick="javascript:f_mostrar_menu_botones(\'bloquear_usuario\', \'off\', \'' + idUsuario + '\');" title="Bloquea al usuario si quieres impedir que te mande mensajes privados"><span class="letrero">Bloquear</span><span class="flecha"></span><span class="rompedor"></span></a>';
html_menu = html_menu + '    <a href="javascript:void(0);" id="opcion_bloquear_usuario2_' + idUsuario + '" class="desplegada bloquear2on" style="display: none;" onclick="javascript:f_seleccionar_opcion_menu(\'bloquear_usuario\', \'bloquear\', \'' + idUsuario + '\');">Activar bloqueo</a>';
}
else {
html_menu = html_menu + '    <a href="javascript:void(0);" id="opcion_bloquear_usuario1_' + idUsuario + '" class="boton bloquear1onreposo" onclick="javascript:f_mostrar_menu_botones(\'bloquear_usuario\', \'on\', \'' + idUsuario + '\');" title="Este usuario no te puede mandar mensajes privados. Pulsa si quieres desbloquearle."><span class="letrero">Bloqueado</span><span class="flecha"></span><span class="rompedor"></span></a>';
html_menu = html_menu + '    <a href="javascript:void(0);" id="opcion_bloquear_usuario2_' + idUsuario + '" class="desplegada bloquear2off" style="display: none;" onclick="javascript:f_seleccionar_opcion_menu(\'bloquear_usuario\', \'desbloquear\', \'' + idUsuario + '\');">Desbloquear</a>';
}
return html_menu;
}
function f_pinta_html_informacion_usuario(idUsuario, hashDatosUsuario) {
var html = '';
var estilo_dejar_usuario        = '';
var estilo_seguir_usuario       = '';
var estilo_bloquear_usuario     = '';
var estilo_desbloquear_usuario  = '';
var nombreUsuario    = hashDatosUsuario.nombre;
var apellidosUsuario = hashDatosUsuario.apellidos;
var usuarioActivo    = hashDatosUsuario.activo;
var pathfotoUsuario  = hashDatosUsuario.pathfoto;
var nombreCompleto = nombreUsuario;
if (apellidosUsuario != '') {
nombreCompleto = nombreUsuario + ' ' + apellidosUsuario;
}
if (pathfotoUsuario == '') {
pathfotoUsuario = _url_imagen_usuario_por_defecto;
}
var urlUsuario         = '';
var urlTwitter 	   = '';
var urlBlog 	   = '';
var profesionUsuario   = '';
var descripcionUsuario = '';
if (hashDatosUsuario.urlwebpersonal) {
urlUsuario = f_comprobar_url_valida(hashDatosUsuario.urlwebpersonal);
}
if (hashDatosUsuario.urlblog) {
urlBlog = f_comprobar_url_valida(hashDatosUsuario.urlblog);
}
if (hashDatosUsuario.urltwitter) {
urlTwitter = f_comprobar_url_valida(hashDatosUsuario.urltwitter);
}
if (hashDatosUsuario.profesion) {
profesionUsuario = hashDatosUsuario.profesion;
}
if (hashDatosUsuario.descripcion) {
descripcionUsuario = hashDatosUsuario.descripcion;
}
var usuarioSeguido     = false;
var usuarioBloqueado   = false;
if (_nickname != '') {
if (hashDatosUsuario.seguido == 1) {
usuarioSeguido = true;
}
else {
usuarioSeguido = false;
}
if (hashDatosUsuario.bloqueado == 1) {
usuarioBloqueado = true;
}
}
var numeroUsuariosSeguidores = hashDatosUsuario.numero_seguidores;
var numeroUsuariosSeguidos   = hashDatosUsuario.numero_usuarios;
var numeroEventosSeguidos    = hashDatosUsuario.numero_eventos;
var numeroEventosEscritura	 = hashDatosUsuario.numero_eventos_escribe;
var numeroMensajes           = hashDatosUsuario.numero_mensajes_propios;
var numeroReferencias 	 = hashDatosUsuario.numero_mensajes_referenciados;
var numeroEventosAdministrados = 0;
if (hashDatosUsuario.numero_eventos_administrados) {
numeroEventosAdministrados = hashDatosUsuario.numero_eventos_administrados;
}
var estado_conectado 	= '';
var descripcion_conectado 	= '';
if (usuarioActivo == '0') {
estado_conectado 	= 'noconectado';
descripcion_conectado 	= 'No conectado';
}
else {
estado_conectado 	= 'conectado';
descripcion_conectado 	= 'Conectado';
}
var html_botones_seguir   = '';
var html_botones_bloquear = '';
if (_nickname != '') {
html_botones_seguir = f_componer_html_botones_menu_seguir_usuario(usuarioSeguido, idUsuario);
if (idUsuario != _nickname) {
html_botones_bloquear = f_componer_html_botones_menu_bloquear(usuarioBloqueado, idUsuario);
}
else {
}
}
else {
}
html = html + '<div class="encabezado">';
html = html + '  <div id="id_menu_botones_seguir_' + idUsuario + '">';
html = html + html_botones_seguir;
html = html + '  </div>';
html = html + '  <div id="id_menu_botones_bloquear_' + idUsuario + '">';
html = html + html_botones_bloquear;
html = html + '  </div>';
html = html + '  <h2 title="' + idUsuario + '">' + idUsuario + '</h2>';
html = html + '  <a href="' + _urlOuteskup + '&f=rss&t=t1-' + idUsuario + '" class="rss" title="Suscribirse a este usuario" target="_blank"></a>';
if ( (_nickname != '') && (idUsuario != _nickname) ) {
html = html + '  <a id="boton_privado_' + idUsuario + '" class="boton privado" href="javascript:void(0);" onclick="javascript:f_pinta_caja_envio_privado(\'' + idUsuario + '\');">Enviar privado</a>';
}
html = html + '  <div class="rompedor"></div>';
html = html + '</div><!-- === .encabezado === -->';
html = html + '<div class="barraencabezado"></div><!-- === .barraencabezado === -->';
html = html + '<div id="contenedor_formulario_' + idUsuario + '" class="contenedorescribirmensaje" style="display: none;"></div><!-- === cierre div contenedorescribirmensaje === -->';
html = html + '<div class="columnaizquierda">';
html = html + '  <div class="fotoymas">';
html = html + '    <img src="' + pathfotoUsuario + '" width="100" height="100" alt="Avatar" />';
html = html + '    <div class="estado ' + estado_conectado + '">' + descripcion_conectado + '</div><!-- === .estado === -->';
html = html + '  </div><!-- === .fotoymas === -->';
html = html + '</div><!-- === .columnaizquierda === -->';
var muestra_enlaces_externos = 'style=""';
var estilo_columna_derecha   = '';
if ( (urlUsuario != '') || (urlTwitter != '') || (urlBlog != '')) {
muestra_enlaces_externos = 'style=""';
estilo_columna_derecha   = '';
}
html = html + '<div class="columnacentral" ' + muestra_enlaces_externos + '>';
html = html + '  <div class="widget">';
html = html + '     <a href="/Widgets/configuracion_widget.html?t=' + idUsuario + '" title="Ll&eacute;vate el widget de '+ idUsuario + '" target="_blank">widget</a>';
html = html + '  </div><!-- === .widget === -->';
html = html + '  <div class="enlaces">';
html = html + '     <ul>';
if (urlUsuario != '') {
html = html + '         <li><a href="' + urlUsuario + '" title="Visitar sitio web" target="_blank">web &raquo; </a></li><!-- === ya estamos con el espacio antes del cierre del /a para ie6 === -->';
}
if (urlTwitter != '') {
html = html + '         <li><a href="' + urlTwitter + '" title="Visitar twitter" target="_blank">twitter &raquo; </a></li><!-- === ya estamos con el espacio antes del cierre del /a para ie6 === -->';
}
if (urlBlog != '') {
html = html + '         <li><a href="' + urlBlog + '" title="Visitar blog" target="_blank">blog &raquo; </a></li><!-- === ya estamos con el espacio antes del cierre del /a para ie6 === -->';
}
html = html + '     </ul>';
html = html + '  </div><!-- === .enlaces === -->';
html = html + '</div><!-- === .columnacentral === -->';
html = html + '<div class="columnaderecha" ' + estilo_columna_derecha + '>';
if (nombreCompleto != '') {
html = html + '  <div class="nombre">' + nombreCompleto + '</div><!-- === .nombre === -->';
}
if (descripcionUsuario != '') {
html = html + '  <div class="descripcion">' + descripcionUsuario + '</div><!-- === .descripcion === -->';
}
html = html + '  <div class="contadores">';
html = html + '    <div class="contador">';
html = html + '      <h5>Usuarios</h5>';
html = html + '      <ul>';
html = html + '          <li><span class="enunciado">Sigue a:</span><a id="id_numero_usuarios_seguidos_' + idUsuario + '" href="/' + idUsuario + '/seguidos" title="Verlos todos">' + numeroUsuariosSeguidos + '</a></li>';
html = html + '          <li><span class="enunciado">Le siguen:</span><a id="id_numero_usuarios_seguidores_'+ idUsuario + '" href="/' + idUsuario + '/seguidores" title="Verlos todos">' + numeroUsuariosSeguidores + '</a></li>';
html = html + '      </ul>';
html = html + '    </div><!-- === .contador === -->';
html = html + '    <div class="contador">';
html = html + '      <h5>Mensajes</h5>';
html = html + '      <ul>';
html = html + '          <li><span class="enunciado">Enviados:</span><a id="id_numero_mensajes_enviados" href="/' + idUsuario + '" title="Verlos todos">' + numeroMensajes + '</a></li>';
html = html + '          <li><span id="id_numero_mensajes_referenciados" class="enunciado">Menciones:</span><a id="id_numero_mensajes_referenciados" href="/' + idUsuario + '/referencias" title="Verlos todos">' + numeroReferencias + '</a></li>';
html = html + '      </ul>';
html = html + '    </div><!-- === .contador === -->';
html = html + '    <div class="contador pequeno">';
html = html + '      <h5>Temas</h5>';
html = html + '      <ul>';
html = html +  '          <li><span class="enunciado">Sigue:</span><a href="/' + idUsuario + '/temasseguidos" title="Verlos todos">' + numeroEventosSeguidos + '</a></li>';
html = html +  '          <li><span class="enunciado">Escribe en:</span><a href="/' + idUsuario + '/temasescritos" title="Verlos todos">' + numeroEventosEscritura + '</a></li>';
html = html + '      </ul>';
html = html + '    </div><!-- === .contador === -->';
html = html + '    <div class="rompedor"></div>';
html = html + '  </div><!-- === .contadores === -->';
html = html + '</div><!-- === .columnaderecha === -->';
html = html + '<div class="rompedor"></div>';
var caja = document.getElementById('id_info_usuariotema');
caja.innerHTML = html;
if (idUsuario == _nickname) {
caja.style.display = 'none';
}
}
function f_detalles_usuario(operacion, idUsuario) {
var boton_mostrar_detalles = document.getElementById('boton_mostrar_detalles');
var boton_ocultar_detalles = document.getElementById('boton_ocultar_detalles');
var caja_detalles = document.getElementById('id_detalles_usuario');
if (operacion == 'abrir') {
_detallesUsuarioCerrados = false;
boton_mostrar_detalles.style.display = 'none';
boton_ocultar_detalles.style.display = '';
caja_detalles.style.display = '';
f_cerrar_panel('id_escribir_mensaje_' + idUsuario);
}
else {
_detallesUsuarioCerrados = true;
boton_mostrar_detalles.style.display = '';
boton_ocultar_detalles.style.display = 'none';
caja_detalles.style.display = 'none';
}
}
function f_descripcion_usuario(operacion, idUsuario) {
var boton_mostrar_detalles = document.getElementById('boton_mostrar_detalles');
var boton_ocultar_detalles = document.getElementById('boton_ocultar_detalles');
var caja_descripcion = document.getElementById('id_descripcion_usuario');
if (operacion == 'abrir') {
boton_mostrar_detalles.style.display = 'none';
boton_ocultar_detalles.style.display = '';
caja_descripcion.style.display = '';
}
else {
_detallesUsuarioCerrados = true;
boton_mostrar_detalles.style.display = '';
boton_ocultar_detalles.style.display = 'none';
caja_descripcion.style.display = 'none';
}
}
function f_detalles_panel_usuario(idDivUsuarioTema) {
var boton_mostrar_detalles = document.getElementById('id_boton_mostrar_detalles_panel_usuario');
var divCajaPerfilUsuario   = document.getElementById(idDivUsuarioTema);
if (divCajaPerfilUsuario.style.display == '') {
boton_mostrar_detalles.className   = 'enlace ver';
boton_mostrar_detalles.innerHTML   = 'Ver mis datos';
divCajaPerfilUsuario.style.display = 'none';
}
else {
boton_mostrar_detalles.className   = 'enlace ocultar';
boton_mostrar_detalles.innerHTML   = 'Ocultar mis datos';
divCajaPerfilUsuario.style.display = '';
}
}
function f_desactiva_pestana_perfil_usuario() {
if (document.getElementById('opcion_bloquear_usuario')) {
document.getElementById('opcion_bloquear_usuario').className = '';
}
if (document.getElementById('opcion_desbloquear_usuario')) {
document.getElementById('opcion_desbloquear_usuario').className = '';
}
if (document.getElementById('opcion_seguir_usuario')) {
document.getElementById('opcion_seguir_usuario').className = '';
}
if (document.getElementById('opcion_dejar_usuario')) {
document.getElementById('opcion_dejar_usuario').className = '';
}
if (document.getElementById('opcion_envio_privado')) {
document.getElementById('opcion_envio_privado').className = '';
}
}
function f_confirmar_peticion_bloquear(operacion, idUsuario) {
var html    = '';
var mensaje = '';
var boton_bloquear    = document.getElementById('opcion_bloquear_usuario');
var boton_desbloquear = document.getElementById('opcion_desbloquear_usuario');
if (operacion == 'bloquear') {
mensaje = 'Si bloqueas al usuario evitar&aacute;s que te mande mensajes privados. &iquest;Seguro que quieres bloquearlo?';
f_desactiva_pestana_perfil_usuario();
boton_bloquear.className = 'activo';
}
else {
mensaje = '&iquest;Seguro que quieres desbloquear al usuario para que pueda volver a mandarte mensajes privados?';
f_desactiva_pestana_perfil_usuario();
boton_desbloquear.className = 'activo';
}
var html = '';
html = html + '<div class="bloquear">';
html = html + '  <form id="xx" name="xx" method="post" action="">';
html = html + '  <p>' + mensaje + '</p>';
html = html + '  <div id="id_botones_usuario" class="botones">';
html = html + '    <a id="id_boton_bloquear_' + idUsuario + '" href="javascript:void(0);" onclick="javascript:f_peticion_eskup_bloquear_usuario_movil(\'' + operacion + '\',\'' + idUsuario + '\');" class="publicar">' + _ESKUPhashMsgByLang[LANGESKUP].confirmar + '</a>';
html = html + '    <a id="id_boton_cancelar_bloquear" href="javascript:void(0);" onclick="javascript:f_cerrar_panel(\'id_escribir_mensaje_' + idUsuario + '\');f_desactiva_pestana_perfil_usuario();" class="cancelar">' + _ESKUPhashMsgByLang[LANGESKUP].cancelar + '</a>';
html = html + '  </div><!-- === cierre div botones === -->';
html = html + '  </form>';
html = html + '</div><!-- === cierre div bloquear === -->';
var divCajaEscribir = document.getElementById('id_escribir_mensaje_' + idUsuario);
divCajaEscribir.innerHTML = html;
divCajaEscribir.style.display = '';
}
function f_pinta_caja_confirmacion_seguir_movil(operacion, idUsuario) {
var html    = '';
var mensaje = '';
var boton_seguir = document.getElementById('opcion_seguir_usuario');
var boton_dejar  = document.getElementById('opcion_dejar_usuario');
if (operacion == 'seguir') {
if (idUsuario != _nickname) {
mensaje = '&iquest;Seguro que quieres seguir al usuario?';
}
else {
mensaje = '&iquest;Seguro que quieres seguirte?';
}
f_desactiva_pestana_perfil_usuario();
boton_seguir.className = 'activo';
}
else {
if (idUsuario != _nickname) {
mensaje = '&iquest;Seguro que quieres dejar de seguir al usuario?';
}
else {
mensaje = '&iquest;Seguro que quieres dejar de seguirte?';
}
f_desactiva_pestana_perfil_usuario();
boton_dejar.className = 'activo';
}
var html = '';
html = html + '<div class="seguir">';
html = html + '  <form id="xx" name="xx" method="post" action="">';
html = html + '  <p>' + mensaje + '</p>';
html = html + '  <div class="botones">';
html = html + '    <a href="javascript:void(0);" onclick="javascript:f_peticion_eskup_seguir_usuario_movil(\'' + operacion + '\',\'' + idUsuario + '\');" class="publicar">' + _ESKUPhashMsgByLang[LANGESKUP].confirmar + '</a>';
html = html + '    <a href="javascript:void(0);" onclick="javascript:f_cerrar_panel(\'id_escribir_mensaje_' + idUsuario + '\');f_desactiva_pestana_perfil_usuario();" class="cancelar">' + _ESKUPhashMsgByLang[LANGESKUP].cancelar + '</a>';
html = html + '  </div><!-- === cierre div botones === -->';
html = html + '  </form>';
html = html + '</div><!-- === cierre div seguir === -->';
var divCajaEscribir = document.getElementById('id_escribir_mensaje_' + idUsuario);
divCajaEscribir.innerHTML = html;
divCajaEscribir.style.display = '';
}
function f_pinta_caja_confirmacion_seguir_evento_movil(operacion, idEvento) {
var html    = '';
var mensaje = '';
var boton_seguir = document.getElementById('opcion_seguir_tema');
var boton_dejar  = document.getElementById('opcion_yanoseguir_tema');
if (operacion == 'seguir') {
mensaje = '&iquest;Seguro que quieres seguir al evento?';
boton_seguir.className = '';
boton_dejar.className = 'activo';
}
else {
mensaje = '&iquest;Seguro que quieres dejar de seguir al evento?';
boton_seguir.className    = 'activo';
boton_dejar.className = '';
}
var html = '';
html = html + '<div class="seguir">';
html = html + '  <form id="xx" name="xx" method="post" action="">';
html = html + '  <p>' + mensaje + '</p>';
html = html + '  <div class="botones">';
html = html + '    <a href="javascript:void(0);" onclick="javascript:f_peticion_eskup_seguir_evento_movil(\'' + operacion + '\',\'' + idEvento + '\');" class="publicar">' + _ESKUPhashMsgByLang[LANGESKUP].confirmar + '</a>';
html = html + '    <a href="javascript:void(0);" onclick="javascript:f_cierra_capa_confirmaciones();" class="cancelar">' + _ESKUPhashMsgByLang[LANGESKUP].cancelar + '</a>';
html = html + '  </div><!-- === cierre div botones === -->';
html = html + '  </form>';
html = html + '</div><!-- === cierre div seguir === -->';
var divCapaConfirmaciones = document.getElementById('id_confirmaciones');
divCapaConfirmaciones.innerHTML = html;
divCapaConfirmaciones.style.display = '';
}
function f_cierra_capa_confirmaciones() {
var divCapaConfirmaciones = document.getElementById('id_confirmaciones')
divCapaConfirmaciones.innerHTML = '';
divCapaConfirmaciones.style.display = 'none';
document.getElementById('opcion_seguir_tema').className = '';
document.getElementById('opcion_yanoseguir_tema').className  = '';
}
function f_pinta_caja_envio_privado(idUsuario) {
var html    = '';
var mensaje = '';
var divContenedorFormularioMensaje = document.getElementById('contenedor_formulario_' + idUsuario);
var divContenedorBotonPrivado = document.getElementById('boton_privado_' + idUsuario);
if (divContenedorFormularioMensaje.style.display == '') {
f_ocultar_formulario_mensaje(idUsuario);
return;
}
divContenedorBotonPrivado.className = 'boton privado activo';
if (divContenedorFormularioMensaje.childNodes.length != 0) {
}
else {
var divMsgForm = crearFormularioMensaje(idUsuario);
divContenedorFormularioMensaje.appendChild(divMsgForm);
}
document.getElementById("c_" + idUsuario).value = 'add';
document.getElementById("t_" + idUsuario).value = idUsuario;
if (document.getElementById('diviframe_' + idUsuario)) {
document.body.removeChild(document.getElementById('diviframe_' + idUsuario));
}
f_inicia_caja_escribir("m_" + idUsuario, '', 'cajaactiva', 'secundario activo');
var divBotonPublicar = document.getElementById('submitresponder_' + idUsuario);
divBotonPublicar.innerHTML = _ESKUPhashMsgByLang[LANGESKUP].enviar;
crearIframeTargetFormulario(idUsuario, 'privadoperfil');
document.getElementById('form_' + idUsuario).target = 'iframe_' + idUsuario;
f_muestra_servicios_externos(idUsuario, false);
f_mostrar_ocultar_panel_eventos_donde_publicar(idUsuario, false);
divContenedorFormularioMensaje.style.display = '';

}

function f_pinta_caja_envio_privado_bloqueado(idUsuario) {
if (document.getElementById('opcion_envio_privado')) {
var boton_envio = document.getElementById('opcion_envio_privado');
boton_envio.className = 'activo';
}
var html = '';
html = html + '<div class="seguir">';
html = html + '<p>El usuario te tiene bloqueado, no quiere recibir mensajes privados tuyos.....</p>';
html = html + '  <div class="botones">';
html = html + '    <a href="javascript:void(0);" onclick="javascript:f_cerrar_panel(\'id_escribir_mensaje_' + idUsuario + '\');" class="publicar">' + _ESKUPhashMsgByLang[LANGESKUP].cerrar + '</a>';
html = html + '  </div><!-- === cierre div botones === -->';
html = html + '</div><!-- === cierre div seguir === -->';
var divCajaEscribir = document.getElementById('id_escribir_mensaje_' + idUsuario);
divCajaEscribir.innerHTML = html;
divCajaEscribir.style.display = '';
}
function f_pinta_caja_adjuntar_imagen_privado(idCaja) {
var html = "";
html = html + '  <input name="p" id="p" type="file" size="35" />';
var divCaja = document.getElementById(idCaja);
divCaja.innerHTML = html;
divCaja.style.display = '';
var boton_adjuntar = document.getElementById('id_boton_adjuntar_imagen');
boton_adjuntar.className = 'botonactivo';
}
function f_comprobar_usuario_bloqueado(idUsuario) {
var cadena_params = 'verify=1&text=' + idUsuario;
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status == 200) {
var json = httpRequest.responseText;
eval("_hashVerify = " + json);
var data = _hashVerify.value;
if (data != 0)  {
f_pinta_caja_envio_privado_bloqueado(idUsuario);
}
}
}, _urlDENEGACIONES + "&" + cadena_params);
}
function f_confirmar_enviar_mensaje_privado(idUsuario) {
var divCajaMensaje    = document.getElementById('campo_formulario_texto_mensaje');
var contenido_mensaje = divCajaMensaje.value;
if ( f_es_valor_vacio(contenido_mensaje) || (contenido_mensaje == _texto_inicializacion_textarea) ) {
alert(_ESKUPhashMsgByLang[LANGESKUP].no_has_escrito_nada);
return false;
}
if ( ! f_es_longitud_correcta(contenido_mensaje)) {
alert(_ESKUPhashMsgByLang[LANGESKUP].el_mensaje_no_puede_tener_mas_de + _numero_maximo_caracteres_mensaje + ' ' + _ESKUPhashMsgByLang[LANGESKUP].caracteres);
return false;
}
f_enviar_mensaje_privado(idUsuario);
}
function f_enviar_mensaje_privado(idUsuario) {
document.getElementById('m').value = document.getElementById('campo_formulario_texto_mensaje').value;
var divContenedor = document.getElementById("id_escribir_mensaje_" + idUsuario);
var divTrabajando = document.createElement("DIV");
divTrabajando.id = "trabajando_botones";
divTrabajando.className = "trabajando";
divContenedor.insertBefore(divTrabajando, divContenedor.firstChild);
var formulario = document.getElementById('id_form_mensaje_privado');
formulario.submit();
}
function comprobarPost_mensaje_privado(idMensaje, comando, idUsuario) {
var i = document.getElementById("iframe_"+idMensaje);
if (i.contentDocument) {
var d = i.contentDocument;
} else if (i.contentWindow) {
var d = i.contentWindow.document;
} else {
var d = window.frames["iframe_"+idMensaje].document;
}
if (d.location.href == "about:blank") {
return true;
}
if (!d.getElementById("status")) {
alert(_ESKUPhashMsgByLang[LANGESKUP].error_al_enviar_el_mensaje);
f_quitar_div_trabajando('id_escribir_mensaje_' + idUsuario, 'trabajando_botones');
return false;
}
if (d.getElementById("status").innerHTML != "OK") {
msg = d.getElementById("info").innerHTML + " (Error " +d.getElementById("code").innerHTML + ")";
alert(msg);
f_quitar_div_trabajando('id_escribir_mensaje_' + idUsuario, 'trabajando_botones');
return false;
}
var mensaje = _ESKUPhashMsgByLang[LANGESKUP].mensaje_enviado_correctamente;
if (d.getElementById("info").innerHTML != "") {
mensaje = d.getElementById("info").innerHTML;
alert(mensaje);
}
var html = '';
html = html + '<div class="seguir">';
html = html + '<p>' + mensaje + '</p>';
html = html + '  <div class="botones">';
html = html + '    <a href="javascript:void(0);" onclick="javascript:f_cerrar_panel(\'id_escribir_mensaje_' + idUsuario + '\');f_desactiva_pestana_perfil_usuario();" class="publicar">' + _ESKUPhashMsgByLang[LANGESKUP].cerrar + '</a>';
html = html + '  </div><!-- === cierre div botones === -->';
html = html + '</div><!-- === cierre div seguir === -->';
var divCajaEscribir = document.getElementById('id_escribir_mensaje_' + idUsuario);
divCajaEscribir.innerHTML = html;
divCajaEscribir.style.display = '';
f_limpia_campos_formulario_evento(idMensaje);
i.src = "about:blank";
return true;
}
function f_peticion_eskup_seguir_usuario(operacion, idUsuario) {
var cadena_params = 'user=' + _nickname + '&data=' + idUsuario;
if (operacion == 'seguir') {
cadena_params = cadena_params + '&action=add_usuarios';
}
else {
cadena_params = cadena_params  + '&action=del_usuarios';
}
_operacion = operacion;
_idUsuario = idUsuario;
EPETUtils_makeHttpRequestGet(f_procesa_peticion_eskup_seguir_usuario, _urlESKUP + "&" + cadena_params);
}
function f_procesa_peticion_eskup_seguir_usuario(httpRequest) {
if (httpRequest.status != 200) {
var texto_mensaje = _ESKUPhashMsgByLang[LANGESKUP].error_al_realizar_la_operacion;
alert(texto_mensaje);
}
else {
var data = httpRequest.responseText;
f_obtener_quien_sigo();
var num_seguidores = 0;
var num_seguidos = 0;
var valor_usuarios_seguidores = 0;
var valor_usuarios_seguidos = 0;
if (_idUsuario == _nickname) {
var divCajaNumeroUsuariosSeguidores = document.getElementById('id_numero_usuarios_que_me_siguen');
if (divCajaNumeroUsuariosSeguidores) {
valor_usuarios_seguidores = divCajaNumeroUsuariosSeguidores.innerHTML;
}
var divCajaNumeroUsuariosSeguidos = document.getElementById('id_numero_usuarios_que_sigo');
if (divCajaNumeroUsuariosSeguidos) {
valor_usuarios_seguidos = divCajaNumeroUsuariosSeguidos.innerHTML;
}
}
else {
var divCajaNumeroUsuariosSeguidores = document.getElementById('id_numero_usuarios_seguidores_' + _idUsuario);
if (divCajaNumeroUsuariosSeguidores) {
valor_usuarios_seguidores = divCajaNumeroUsuariosSeguidores.innerHTML;
}
var divCajaNumeroUsuariosSeguidos = document.getElementById('id_numero_usuarios_seguidos_' + _idUsuario);
if (divCajaNumeroUsuariosSeguidos) {
valor_usuarios_seguidos = divCajaNumeroUsuariosSeguidos.innerHTML;
}
}
if (_operacion == 'seguir') {
usuarioSeguido = true;
num_seguidores = parseInt(valor_usuarios_seguidores, 10) + 1;
num_seguidos   = parseInt(valor_usuarios_seguidos, 10) + 1;
}
else {
usuarioSeguido = false;
num_seguidores = parseInt(valor_usuarios_seguidores, 10) - 1;
num_seguidos   = parseInt(valor_usuarios_seguidos, 10) -1;
}
if (divCajaNumeroUsuariosSeguidores) {
divCajaNumeroUsuariosSeguidores.innerHTML = num_seguidores;
}
if (_idUsuario == _nickname) {
if (document.getElementById('id_numero_usuarios_seguidos_' + _idUsuario)) {
var divCaja = document.getElementById('id_numero_usuarios_seguidos_' + _idUsuario);
divCaja.innerHTML = num_seguidos;
}
if (document.getElementById('id_numero_usuarios_seguidores_' + _idUsuario)) {
var divCaja = document.getElementById('id_numero_usuarios_seguidores_' + _idUsuario);
divCaja.innerHTML = num_seguidores;
}
var divCaja = document.getElementById('id_numero_usuarios_que_sigo');
divCaja.innerHTML = num_seguidos;
var divCaja = document.getElementById('id_numero_usuarios_que_me_siguen');
divCaja.innerHTML = num_seguidores;
}
var html_botones_menu_seguir = f_componer_html_botones_menu_seguir_usuario(usuarioSeguido, _idUsuario);
var divMenu = document.getElementById('id_menu_botones_seguir_' + _idUsuario);
divMenu.innerHTML = html_botones_menu_seguir;
}
}
function f_peticion_eskup_bloquear_usuario(operacion, idUsuario) {
var cadena_params = 'data=' + idUsuario;
if (operacion == 'bloquear') {
cadena_params = cadena_params + '&action=add_denegaciones';
}
else {
cadena_params = cadena_params  + '&action=del_denegaciones';
}
_operacion = operacion;
_idUsuario = idUsuario;
EPETUtils_makeHttpRequestGet(f_procesa_peticion_eskup_bloquear_usuario, _urlESKUP + "&" + cadena_params);
}
function f_procesa_peticion_eskup_bloquear_usuario(httpRequest) {
if (httpRequest.status != 200) {
var texto_mensaje = _ESKUPhashMsgByLang[LANGESKUP].error_al_realizar_la_operacion;
alert(texto_mensaje);
}
else {
var data = httpRequest.responseText;
if (_operacion == 'bloquear') {
usuarioBloqueado = true;
}
else {
usuarioBloqueado = false;
}
var html_botones_menu_bloquear = f_componer_html_botones_menu_bloquear(usuarioBloqueado, _idUsuario);
var divMenu = document.getElementById('id_menu_botones_bloquear_' + _idUsuario);
divMenu.innerHTML = html_botones_menu_bloquear;
}
}
function f_peticion_eskup_seguir_evento(operacion, idEvento) {
var cadena_params = 'user=' + _nickname + '&data=' + idEvento;
if (operacion == 'seguir') {
cadena_params = cadena_params + '&action=add_eventos';
}
else {
cadena_params = cadena_params  + '&action=del_eventos';
}
_operacion = operacion;
_idEvento = idEvento;
EPETUtils_makeHttpRequestGet(f_procesa_peticion_eskup_seguir_evento, _urlESKUP + "&" + cadena_params);
}
function f_procesa_peticion_eskup_seguir_evento(httpRequest) {
var html    = '';
var mensaje = '';
if (httpRequest.status != 200) {
html_mensaje = _ESKUPhashMsgByLang[LANGESKUP].error_al_realizar_la_operacion;
alert(html_mensaje);
}
else {
var data = httpRequest.responseText;
_obtenidasSuscripciones = false;
f_obtener_eventos_seguidos('id_mistemas');
var seguimiento_evento = false;
var divCajaUsuariosSeguidores = document.getElementById('id_numero_usuarios_seguidores_' + _idEvento);
var divCajaTemasSeguidos = document.getElementById('id_numero_temas_seguidos');
var num_seguidores     = 0;
var num_temas_seguidos = 0;
if (divCajaUsuariosSeguidores) {
num_seguidores = parseInt(divCajaUsuariosSeguidores.innerHTML, 10);
}
if (divCajaTemasSeguidos) {
num_temas_seguidos = parseInt(divCajaTemasSeguidos.innerHTML, 10);
}
if (_operacion == 'seguir') {
seguimiento_evento = true;
num_seguidores = num_seguidores + 1;
num_temas_seguidos = num_temas_seguidos + 1;
_hashDatosEvento.estado_seguimiento = 1;
}
else {
seguimiento_evento = false;
num_seguidores = num_seguidores - 1;
num_temas_seguidos = num_temas_seguidos - 1;
if (num_seguidores < 0) {
num_seguidores = 0;
}
if (num_temas_seguidos < 0) {
num_temas_seguidos = 0;
}
_hashDatosEvento.estado_seguimiento = 0;
}
if (divCajaUsuariosSeguidores) {
divCajaUsuariosSeguidores.innerHTML = num_seguidores;
}
if (divCajaTemasSeguidos) {
divCajaTemasSeguidos.innerHTML = num_temas_seguidos;
}
var html_botones_menu_seguir = f_componer_html_botones_menu_seguir_evento(seguimiento_evento, _idEvento);
var divMenu = document.getElementById('id_menu_botones_seguir_' + _idEvento);
divMenu.innerHTML = html_botones_menu_seguir;
}
}
function seguirUsuario(operacion, idUsuario, callbackSeguirUsuario) {
if (typeof _nickname == "undefined" || _nickname == '') {
alert(_ESKUPhashMsgByLang[LANGESKUP].para_seguir_al_usuario);
return(false);
}
var cadena_params = 'user=' + _nickname + '&data=' + idUsuario;
cadena_params += '&action=' + operacion + '_usuarios';
_operacion       = operacion;
_nicknameASeguir = idUsuario;
EPETUtils_makeHttpRequestGet(callbackSeguirUsuario, _urlESKUP + "&" + cadena_params);
}
function f_peticion_eskup_escritura(idEvento) {
var texto_solicitud = '';
if (document.getElementById('id_campo_formulario_texto_solicitud')) {
var divCajaSolicitud = document.getElementById('id_campo_formulario_texto_solicitud');
texto_solicitud = trim(divCajaSolicitud.value);
if (texto_solicitud == '') {
alert('Es necesario que nos envies el texto de solicitud para poder aprobar tu petición');
return false;
}
}
var cadena_params = 'action=add_writers&user=' + _nickname + '&data=' + idEvento;
if (texto_solicitud != '') {
cadena_params = cadena_params  + '&msg=' + texto_solicitud;
}
_idEvento = idEvento;
if (typeof _formatoVisualizacion != "undefined" && _formatoVisualizacion == "movil") {
EPETUtils_makeHttpRequestGet(f_procesa_peticion_eskup_escritura_movil, _urlESKUP + "&" + cadena_params);
} else {
EPETUtils_makeHttpRequestGet(f_procesa_peticion_eskup_escritura, _urlESKUP + "&" + cadena_params);
}
}
function f_procesa_peticion_eskup_escritura(httpRequest) {
var html          = '';
var html_mensaje  = '';
var html_escribir = '';
var clase_div     = ''
if (httpRequest.status != 200) {
html_mensaje = html_mensaje + '  <div class="aviso">';
html_mensaje = html_mensaje + '  <p>Se ha producido un error en la petici&oacute;n.<br/>Por favor, int&eacute;ntalo m&aacute;s tarde.</p>';
html_mensaje = html_mensaje + '  </div><!-- === cierre div aviso === -->';
html_escribir = f_obtener_html_caja_escribir_evento_falsa();
clase_div = 'escribirmensajefalsa';
}
else {
var data = httpRequest.responseText;
if (_hashDatosEvento.tipo_suscripcion == 1) {
_hashDatosEvento.estado_escritura = 1;
if (!(typeof _quiensoy != "undefined" && _quiensoy == "widget")){
var divTemasEscritos = document.getElementById('id_numero_temas_escritos');
divTemasEscritos.innerHTML = parseInt(divTemasEscritos.innerHTML, 10) + 1;
}	
}
else {
_hashDatosEvento.estado_escritura = 2;
html_mensaje = html_mensaje + '  <div class="aviso">';
html_mensaje = html_mensaje + '  <p class="monolinea">Estamos analizando tu solicitud para escribir.<br />En breve nos pondremos en contacto contigo. &iexcl;Gracias!</p>';
html_mensaje = html_mensaje + '  </div><!-- === cierre div aviso === -->';
html_escribir = f_obtener_html_caja_escribir_evento_falsa();
clase_div = 'escribirmensajefalsa';
}
}
var html = '<div class="avisos">';
html = html + html_mensaje;
html = html + '  <div class="rompedor"></div>';
html = html + '</div><!-- === .avisos === -->';
html = html + html_escribir;
var divCajaEscribir = document.getElementById('id_escribir_mensaje');
if (divCajaEscribir) {
if (_hashDatosEvento.tipo_suscripcion != 1){
divCajaEscribir.innerHTML = html;
divCajaEscribir.className = clase_div;
}
divCajaEscribir.style.display = '';
}
}
function muestraMensajesResultadoBusquedas(numPagina, numTotalMensajes, numMensajes, hashDatosMensajes) {
var html = "";
_numPagActual = parseInt(numPagina, 10);
for (var i = 0; i < numMensajes; i++) {
if (hashDatosMensajes[i]) {
html += pintaMensaje(hashDatosMensajes[i]);
}
}
var divContenedor = document.getElementById(_idContenedorMsgs);
divContenedor.innerHTML = html;
pintaPaginacionResultadoBusquedas(numTotalMensajes, numMensajes);
}
function pintaPaginacionResultadoBusquedas(numTotalMensajes, numMensajes) {
if (typeof _pintarPaginacion != "undefined" && _pintarPaginacion == false) {
return(false);
}
if ( ( _numPagActual == 1) && (numTotalMensajes <= _numMsgPag) ) {
return(false);
}
var html = '<ul>';
if (_numPagActual == 1) {
html += '<li><span class="inhabilitado" title="' + _ESKUPhashMsgByLang[LANGESKUP].primera_pagina + '">&lt;&lt;</span></li>';
} else {
html += '<li><a href="javascript:void(0);" class=\"flechadoble\" onClick=\"javascript:f_buscar_contenido(1, \'' + _tipoOrdenacionBusquedas + '\');posicionarEnDiv(\'id_busquedas\');" title="' + _ESKUPhashMsgByLang[LANGESKUP].primera_pagina + '">&lt;&lt;</a></li>';
}
var paginaAnterior  = _numPagActual - 1;
var paginaSiguiente = _numPagActual + 1;
if (_numPagActual > 1) {
html += '<li><a href="javascript:void(0);" onClick="javascript:f_buscar_contenido(' + paginaAnterior + ', \'' + _tipoOrdenacionBusquedas + '\');posicionarEnDiv(\'id_busquedas\');" class="flecha" title="' + _ESKUPhashMsgByLang[LANGESKUP].pagina_anterior + '">&lt;</a></li>';
} else {
html += '<li><span class="inhabilitado" title="' + _ESKUPhashMsgByLang[LANGESKUP].pagina_anterior + '">&lt;</span></li>';
}
html += '<li class="activo">' + _numPagActual + '</li>';
if (parseInt(_numPagActual*_numMsgPag) < parseInt(numTotalMensajes)) {
html += '<li><a href="javascript:void(0);" onClick="javascript:f_buscar_contenido(' + paginaSiguiente + ', \'' + _tipoOrdenacionBusquedas + '\');posicionarEnDiv(\'id_busquedas\');" class="flecha" title="' + _ESKUPhashMsgByLang[LANGESKUP].pagina_siguiente + '">&gt;</a></li>';
} else {
html += '<li><span class="inhabilitado" title="' + _ESKUPhashMsgByLang[LANGESKUP].pagina_siguiente + '">&gt;</span></li>';
}
html += '</ul>';
var divContenedorAbajo           = document.getElementById(_idContenedorPag + '_abajo');
divContenedorAbajo.innerHTML     = html;
divContenedorAbajo.style.display = '';
if (document.getElementById('div_subir_pagina')) {
var divSubir  = document.getElementById('div_subir_pagina');
divSubir.style.display = '';
}
}
function f_buscar_contenido(numeroPagina, tipoOrdenacion) {
var cadena = '';
if (_cadenaQ != '') {
cadena = 'q=' + unescape(_cadenaQ);
}
else {
cadena = 'qru=' + _cadenaQRU;
}
location.href='/resultado_buscar.html?r=php&' + cadena + '&p=' + numeroPagina + '&s=' + tipoOrdenacion + '&n=' + _numMsgPag;
}
function f_buscar_contenido_por_relevancia(numeroPagina) {
_tipoOrdenacionBusquedas = 'r';
f_buscar_contenido(numeroPagina, _tipoOrdenacionBusquedas);
}
function f_buscar_contenido_por_frescura(numeroPagina) {
_tipoOrdenacionBusquedas = 'd';
f_buscar_contenido(numeroPagina, _tipoOrdenacionBusquedas);
}
function f_buscar_relacionado(idMensaje) {
location.href='/resultado_buscar.html?r=php&qru=' + idMensaje;
}
function f_muestra_listado_temas_eskup(hashEventosESKUP, hashEventosESKUPExtra, hashEventosSeguidosUsuario) {
var idUsuario = '';
var tipoListado = 0;
f_muestra_listado_temas(hashEventosESKUP, hashEventosSeguidosUsuario, hashEventosESKUPExtra, idUsuario, tipoListado);
}
function f_muestra_listado_temas_destacados_eskup(hashEventosESKUP, hashEventosESKUPExtra, hashEventosSeguidosUsuario) {
var idUsuario = '';
var tipoListado = 3;
f_muestra_listado_temas(hashEventosESKUP, hashEventosSeguidosUsuario, hashEventosESKUPExtra, idUsuario, tipoListado);
}
function f_muestra_listado_temas_usuario(hashEventos, hashEventosSeguidosUsuario, idUsuario, tipoListado) {
f_muestra_listado_temas(hashEventos, hashEventosSeguidosUsuario, hashEventos,  idUsuario, tipoListado);
}
function f_muestra_listado_temas(listaTemas, listaEventosSeguidosUsuario, listaDatosTemasExtra, idUsuario, tipo_listado) {
var html = '';
var html_encabezado = '';
var html_sintemas 	= '';
var numero_temas = 0;
for (var claveTema in listaTemas) {
var idEvento = claveTema;
var datosTema = listaTemas[claveTema];
numero_temas++;
var datosExtra = Array();
if (listaDatosTemasExtra[claveTema]) {
datosExtra = listaDatosTemasExtra[claveTema];
}
if (datosTema.pathfoto == '') {
datosTema.pathfoto = _url_imagen_por_defecto;
}
var listaPropietarios = Array();
if (datosTema.prop) {
listaPropietarios = datosTema.prop;
}
var listaAdministradores = Array();
if (datosTema.adm) {
listaAdministradores = datosTema.adm;
}
var es_propietario    = f_existe_usuario_en_lista(_nickname, listaPropietarios);
var es_administrador  = f_existe_usuario_en_lista(_nickname, listaAdministradores);
html = html + '<div class="tema">';
html = html + '   <div class="datosusuariotema">';
var seguimiento_usuario = false;
if (listaEventosSeguidosUsuario[claveTema]) {
seguimiento_usuario = true;
}
if (datosExtra.estado_seguimiento == 1) {
seguimiento_usuario = true;
}
var tipoSuscripcionEvento = datosTema.tipo_suscripcion;
var html_botones_menu_seguir = '';
if (_nickname != '') {
if ( (tipo_listado == 2) && (idUsuario == _nickname) ) {
var html_botones_menu_escribir = '';
if ( (es_administrador == true) || (es_propietario == true) ) {
if (es_administrador == true) {
html_botones_menu_escribir = '<span class="noapuntado">Eres el administrador</span>';
}
else {
html_botones_menu_escribir = '<span class="noapuntado">Eres el propietario</span>';
}
}
else {
html_botones_menu_escribir = f_componer_html_botones_menu_escribir_evento(true, idEvento, tipoSuscripcionEvento);
}
html = html + '<div class="encabezado">';
html = html + '   <div class="altobotones" id="id_menu_botones_escribir_' + idEvento + '">' + html_botones_menu_escribir + '</div><!-- === .altobotones === -->';
html = html + '   <div class="rompedor"></div>';
html = html + '</div><!-- === .encabezado === -->';
}
else {
html_botones_menu_seguir = f_componer_html_botones_menu_seguir_evento(seguimiento_usuario, idEvento);
html = html +  '<div class="encabezado">';
html = html + '   <div class="altobotones" id="id_menu_botones_seguir_' + idEvento + '">' + html_botones_menu_seguir + '</div>';
html = html +  '  <div class="rompedor"></div>';
html = html + '</div><!-- === .encabezado === -->';
}
}
else {
html = html + '<div class="encabezado">';
html = html + '   <div class="altobotones" id="id_menu_botones_escribir_' + idEvento + '"></div><!-- === .altobotones === -->';
html = html + '   <div class="rompedor"></div>';
html = html + '</div><!-- === .encabezado === -->';
}
html = html + '     <div class="columnaizquierda">';
html = html + '       <div class="fotoymas"><img src="' + datosTema.pathfoto + '" width="140" height="100" alt="Avatar" /></div><!-- === .fotoymas === -->';
html = html +  '      <div class="contador">';
html = html +  '        <ul>';
if ( (datosExtra.adm) && (datosExtra.adm != '') ) {
var texto_html = f_obtener_html_administradores_evento(datosExtra.adm);
if (texto_html != '') {
html = html + '     <li><span class="enunciado">Administrado por:</span> ' + texto_html + '</li>';
}
}
var nombreparamovil = idEvento;
if ( (datosExtra.nombreparamovil) && (datosExtra.nombreparamovil != '') ) {
nombreparamovil = datosExtra.nombreparamovil;
html = html + '     <li><span class="enunciado">Clave SMS:</span><a href="/Estaticas/ayuda/faq.html#enviar_mensajes_desde_el_movil" target="_blank" title="&iquest;Qu&eacute; es esto?">*' + nombreparamovil + '</a></li>';
}
html = html +  '        </ul>';
html = html +  '      </div><!-- === .contador === -->';
html = html + '     </div><!-- === .columnaizquierda === -->';
html = html + '     <div class="columnaderecha">';
html = html + '       <h2><a href="/' + '*' + claveTema + '" title="Ver tema">' + datosTema.nombre + '</a></h2>';
if ( (datosExtra.ts_inicio) && (datosExtra.ts_inicio != '') ) {
var texto_fecha = f_obtener_fecha_visible(datosExtra.ts_inicio, 0);
html = html + '       <div class="creacion">Creado el: <span class="cuando"><span class="resaltado">'+ texto_fecha + '</span></span></div>';
}
if (datosExtra.etiquetas) {
var texto_html = f_obtener_html_etiquetas_evento(datosExtra.etiquetas);
if (texto_html != '') {
html = html +  '       <div class="categorias">';
html = html +  '         <h5>Archivado en:</h5>';
html = html + '         ' + texto_html;
html = html +  '       </div><!-- === .categorias === -->';
}
}
html = html + '       <div class="descripcion">' + datosTema.descripcion + '</div><!-- === .descripcion === -->';
var numero_mensajes_evento  = 0;
var fecha_ts_ultimo_mensaje = '';
var texto_fecha = '';
if ( (datosExtra.num_mensajes) && (datosExtra.num_mensajes > 0) ) {
numero_mensajes_evento = datosExtra.num_mensajes;
}
else if ( (datosTema.num_mensajes) && (datosTema.num_mensajes > 0) ) {
numero_mensajes_evento = datosTema.num_mensajes;
}
if  ( (datosExtra.ts_ultimo_mensaje) && (datosExtra.ts_ultimo_mensaje != '') )  {
fecha_ts_ultimo_mensaje = datosExtra.ts_ultimo_mensaje;
}
else if ( (datosTema.ts_ultimo_mensaje) && (datosTema.ts_ultimo_mensaje != '') )  {
fecha_ts_ultimo_mensaje = datosTema.ts_ultimo_mensaje;
}
var texto_fecha = '';
if (numero_mensajes_evento > 0) {
if (fecha_ts_ultimo_mensaje != '') {
texto_fecha = f_obtener_html_ultima_actualizacion_evento(fecha_ts_ultimo_mensaje, 0);
}
}
var numero_seguidores_evento = 0;
if ( (datosExtra.numero_seguidores_evento) && (datosExtra.numero_seguidores_evento > 0) ) {
numero_seguidores_evento = datosExtra.numero_seguidores_evento;
}
else if (datosTema.numero_seguidores_evento) {
numero_seguidores_evento = datosTema.numero_seguidores_evento;
}
var numero_escritores_evento = 0;
if ( (datosExtra.numero_writers_evento) && (datosExtra.numero_writers_evento > 0) ) {
numero_escritores_evento = datosExtra.numero_writers_evento;
}
else if (datosTema.numero_writers_evento) {
numero_escritores_evento = datosTema.numero_writers_evento;
}
html = html + '       <div class="contadores">';
html = html + '         <div class="contador">';
html = html + '           <h5>Usuarios</h5>';
html = html + '           <ul>';
html = html + '              <li><span class="enunciado">Lo siguen:</span><a id="id_numero_usuarios_seguidores_' + idEvento + '" href="/' + '*' + idEvento + '/seguidores" title="Verlos todos">' + numero_seguidores_evento + '</a></li>';
html = html + '              <li><span class="enunciado">Pueden escribir:</span><a href="/' + '*' + idEvento + '/escritores" title="Verlos todos">' + numero_escritores_evento + '</a></li>';
html = html + '           </ul>';
html = html + '         </div><!-- === .contador === -->';
html = html + '         <div class="contador">';
html = html + '           <h5>Mensajes</h5>';
html = html + '           <ul>';
html = html + '              <li><span class="enunciado">Total:</span><a href="/' + '*' + idEvento + '"  title="Verlos todos">' + numero_mensajes_evento + '</a></li>';
if (numero_mensajes_evento > 0) {
html = html + '              <li><span class="enunciado">El &uacute;ltimo:</span>' + texto_fecha + '</li>';
}
html = html + '           </ul>';
html = html + '         </div><!-- === .contador === -->';
html = html + '         <div class="rompedor"></div>';
html = html + '       </div><!-- === .contadores === -->';
html = html + '     </div><!-- === .columnaderecha === -->';
html = html + '     <div class="rompedor"></div>';
html = html + '   </div><!-- === .datosusuariotema === -->';
html = html + '</div><!-- === cierre div tema === -->';
}
if (idUsuario != '') {
if (tipo_listado == 1) {
if (idUsuario == _nickname) {
if (numero_temas == 0) {
html_encabezado = html_encabezado + '<h1>Temas que sigues</h1>';
}
else {
html_encabezado = html_encabezado + '<h1>Sigues <span class="numero">' + numero_temas + ' </span> tema';
if (numero_temas > 1) {
html_encabezado = html_encabezado + 's';
}
html_encabezado = html_encabezado + '</h1>';
}
html_sintemas = 'No sigues ning&uacute;n tema';
}
else {
if (numero_temas == 0) {
html_encabezado = html_encabezado + '<h1>Temas que sigue <a href="/' + idUsuario + '" class="nombre" title="Ver todos sus mensajes">' + idUsuario + '</a>:</h1>';
}
else {
html_encabezado = html_encabezado + '<h1><a href="/' + idUsuario + '" class="nombre" title="Ver todos sus mensajes">' + idUsuario + '</a> sigue <span class="numero">' + numero_temas + ' </span>tema';
if (numero_temas > 1) {
html_encabezado = html_encabezado + 's';
}
html_encabezado = html_encabezado + '</h1>';
}
html_sintemas = 'No sigue ning&uacute;n tema';
}
}
else {
if (idUsuario == _nickname) {
if (numero_temas == 0) {
html_encabezado = html_encabezado + '<h1>Temas donde puedes escribir</h1>';
}
else {
html_encabezado = html_encabezado + '    <h1>Est&aacute;s apuntado para escribir en <span id="id_numero_temas_para_escribir_edicion" class="numero">' + numero_temas + '</span> tema';
if (numero_temas > 1) {
html_encabezado = html_encabezado + 's';
}
html_encabezado = html_encabezado + '</h1>';
html_encabezado = html_encabezado + '    <div class="capainfo listadoescribir">';
html_encabezado = html_encabezado + '      <p>Haz clic en los temas que quieras eliminar de la lista y dejar&aacute;s de estar apuntado para escribir.<br/>';
html_encabezado = html_encabezado + '      Si quieres volver a escribir en ellos, deber&aacute;s hacerlo desde la p&aacute;gina de cada tema.</p>';
html_encabezado = html_encabezado + '    </div><!-- === .capainfo === -->';
}
html_sintemas = 'No puedes escribir en ning&uacute;n tema';
}
else {
if (numero_temas == 0) {
html_encabezado = html_encabezado + '<h1>Temas que puede escribir <a href="/' + idUsuario + '" class="nombre" title="Ver todos sus mensajes">' + idUsuario + '</a>:</h1>';
}
else {
html_encabezado = html_encabezado + '<h1><a href="/' + idUsuario + '" class="nombre" title="Ver todos sus mensajes">' + idUsuario + '</a> puede escribir en <span class="numero">' + numero_temas + '</span> tema';
if (numero_temas > 1) {
html_encabezado = html_encabezado + 's';
}
html_encabezado = html_encabezado + '</h1>';
}
html_sintemas = 'No puede escribir en ning&uacute;n tema';
}
}
}
else {
if (tipo_listado == 0) {
html_encabezado = '<h1>Listado completo de temas</h1>';
}
else {
html_encabezado = '<h1>Listado de temas destacados</h1>';
}
html_sintemas = 'No hay temas disponibles';
}
if (numero_temas == 0) {
html =        '<div class="error">';
html = html + '  <p>' + html_sintemas + '</p>';
html = html + '</div><!-- === cierre div error === -->';
}
else {
html = '<div class="temas">' + html + '</div><!-- === cierre div temas === -->';
}
html = html_encabezado + html;
var caja = document.getElementById('id_temas');
caja.innerHTML = html;
}
function f_seguir_evento_desde_listado(operacion, idEvento) {
var cadena_params = 'user=' + _nickname + '&data=' + idEvento;
if (operacion == 'dejar') {
cadena_params = cadena_params  + '&action=del_eventos';
}
else {
cadena_params = cadena_params + '&action=add_eventos';
}
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status != 200) {
alert(_ESKUPhashMsgByLang[LANGESKUP].error_al_realizar_la_operacion);
}
else {
var _hashTMP = Array();
var data = httpRequest.responseText;
var boton_seguir = document.getElementById('id_boton_seguir_' + idEvento);
var boton_dejar  = document.getElementById('id_boton_dejar_'  + idEvento);
if (operacion == 'seguir') {
boton_seguir.style.display  = 'none';
boton_dejar.style.display = '';
}
else {
boton_seguir.style.display  = '';
boton_dejar.style.display = 'none';
}
_obtenidasSuscripciones = false;
f_muestra_caja_mistemas();
}
}, _urlESKUP + "&" + cadena_params);
}



function muestraMensajes(numPagina, forzado) {
if (typeof forzado == "undefined") {
forzado = false;
}
if (location.hash && !forzado) {
numPagina = parseInt(location.hash.substring(1));
}
var divContenedor = document.getElementById(_idContenedorMsgs);
var html = "";
var msgInicio = (numPagina-1)*_numMsgPag;
var msgFin    = (numPagina*_numMsgPag);
if (msgFin > _hashMsgs.numMensajes) {
msgFin = _hashMsgs.numMensajes;
}
_numPagActual = numPagina;
if (forzado) {
location.href = "#" + _numPagActual;
}
if (typeof _hashMsgs.mensajes != "undefined" && _hashMsgs.mensajes.length > 0) {
if (typeof _hashMsgs.orden != "undefined" && _hashMsgs.orden > 0) {
if (document.getElementById('id_inversion')) {
document.getElementById('id_inversion').style.display = '';
if (_hashMsgs.orden == 1) {
if (document.getElementById('id_recargapagina')) {
document.getElementById('id_recargapagina').style.display = 'none';
}
}
}
}
if ( (msgInicio+1) > (_numPagCache*_numMsgCache) ||
(msgFin-1)    < ((_numPagCache-1)*_numMsgCache) ) {
_numPagCache = parseInt(msgInicio/_numMsgCache)+1;
_ultimaRecargaServidor = 0;
recuperarInformacionMensajes();
return(false);
}
for (var i = msgInicio; (i != msgFin && i < _hashMsgs.numMensajes); i++) {
var num = i - ((_numPagCache-1)*_numMsgCache);
if (_hashMsgs.mensajes[num]) {
html += pintaMensaje(_hashMsgs.mensajes[num]);
}
}
pintaPaginacion();
if (typeof f_pide_publicidad != "undefined") {
f_pide_publicidad();
}
f_contabiliza_peticion();
_es_primera_carga = 0;
mostrarError('');
} else if (_hashMsgs.numMensajes == 0) {
}
if (typeof _lazyfy != "undefined" && _lazyfy == true) {
html = lazyfy(html);
}
divContenedor.innerHTML = html;
if (typeof _lazyfy != "undefined" && _lazyfy == true) {
startLazyload(_idContenedorMsgs);
}
ESKUP.triggerEvent(document.body, "muestraMensajes");
}
function lazyfy(html) {
var regExp = new RegExp("<img.*?.*?(src=\"?([^\"]+)\"?).*?>", "g");
if (isIE && isIE < 8) {
html = html.replace(/(<img.*?)src=\"?([^\"]+)\"?(.*?>)/g, "$1 data-src=\"$2\" src=\"/t.gif\" onload=\"lzld(this)\" onerror=\"lzld(this)\" $3");
} else {
html = html.replace(/(<img.*?)src=\"?([^\"]+)\"?(.*?>)/g, "$1 data-src=\"$2\" src=\"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==\"$3");
}
return(html);
}
function startLazyload(idContenedor) {
(function(window, document, idContainer){
var iframeAltoVariable = false;
if ( (typeof _quiensoy != "undefined" && (_quiensoy == "comentarios" || _quiensoy == "mensajeUnico")) ||
(typeof _quiensoy != "undefined" && _quiensoy == "widget" && typeof _iframeAltoVariable != "undefined" && _iframeAltoVariable == '1') ) {
if (typeof _objIframeContenedor != "undefined" && _objIframeContenedor != null) {
iframeAltoVariable = true;
}
}
var offsetIframeContenedor = 0;
var intervalSaveOffset     = null;
var
offset = 200,
lazyAttr = 'data-src',
winH = viewport(),
imgs = [],
pageHasLoaded = false,
unsubscribed = false,
container = document.getElementById(idContainer);
saveViewportT = throttle(saveViewport, 20),
showImagesT = throttle(showImages, 20);
saveOffsetIframeContenedorT = throttle(saveOffsetIframeContenedor, 20);
window['HTMLImageElement'] && overrideGetattribute();
window['lzld'] = onDataSrcImgLoad;
function onDataSrcImgLoad(img) {
if (inArray(img, imgs) === -1) {
if (unsubscribed) {
subscribe();
}
showIfVisible(img, imgs.push(img) - 1);
}
}
function findImages(container) {
var
domreadyImgs = container.getElementsByTagName('img'),
currentImg;
for (var imgIndex = 0, max = domreadyImgs.length; imgIndex < max; imgIndex += 1) {
currentImg = domreadyImgs[imgIndex];
if (currentImg.getAttribute(lazyAttr) && inArray(currentImg, imgs) === -1) {
imgs.push(currentImg);
}
}
showImages();
setTimeout(showImagesT, 25);
}
function onLoad() {
pageHasLoaded = true;
showImagesT();
setTimeout(showImagesT, 25);
}
function throttle(fn, minDelay) {
var lastCall = 0;
return function() {
var now = +new Date();
if (now - lastCall < minDelay) {
return;
}
lastCall = now;
fn.apply(this, arguments);
}
}
function addEvent( el, type, fn ) {
if (el.attachEvent) {
el.attachEvent && el.attachEvent( 'on' + type, fn );
} else {
el.addEventListener( type, fn, false );
}
}
function removeEvent( el, type, fn ) {
if (el.detachEvent) {
el.detachEvent && el.detachEvent( 'on' + type, fn );
} else {
el.removeEventListener( type, fn, false );
}
}
function showIfVisible(img, index) {
if (contains(document.documentElement, img)
&& (img.getBoundingClientRect().top+offsetIframeContenedor) < winH + offset) {
img.onload = null;
img.removeAttribute('onload');
img.onerror = null;
img.removeAttribute('onerror');
img.src = img.getAttribute(lazyAttr);
img.removeAttribute(lazyAttr);
imgs[index] = null;
return true;
} else {
return false;
}
}
function viewport() {
if (iframeAltoVariable && window.parent) {
if (window.parent.document.documentElement.clientHeight >= 0) {
return window.parent.document.documentElement.clientHeight;
} else if (window.parent.document.body && window.parent.document.body.clientHeight >= 0) {
return window.parent.document.body.clientHeight;
} else if (window.parent.innerHeight >= 0) {
return window.parent.innerHeight;
} else {
return 0;
}
} else {
if (document.documentElement.clientHeight >= 0) {
return document.documentElement.clientHeight;
} else if (document.body && document.body.clientHeight >= 0) {
return document.body.clientHeight
} else if (window.innerHeight >= 0) {
return window.innerHeight;
} else {
return 0;
}
}
}
function saveViewport() {
winH = viewport();
}
function showImages() {
var
last = imgs.length,
current,
allImagesDone = true;
for (current = 0; current < last; current++) {
var img = imgs[current];
if(img !== null && !showIfVisible(img, current)) {
allImagesDone = false;
}
}
if (allImagesDone && pageHasLoaded) {
unsubscribe();
}
}
function saveOffsetIframeContenedor() {
if (iframeAltoVariable) {
var offsetIframeContenedorTmp = EPETUtils_calcAbsPositionV2(_objIframeContenedor)[1];
var scrollIframeContenedor = 0;
if( typeof( window.parent.pageYOffset ) == 'number' ) {
scrollIframeContenedor = window.parent.pageYOffset;
} else if( window.parent.document.body && ( window.parent.document.body.scrollLeft || window.parent.document.body.scrollTop ) ) {
scrollIframeContenedor = window.parent.document.body.scrollTop;
} else if( window.parent.document.documentElement && ( window.parent.document.documentElement.scrollLeft || window.parent.document.documentElement.scrollTop ) ) {
scrollIframeContenedor = window.parent.document.documentElement.scrollTop;
}
offsetIframeContenedor = offsetIframeContenedorTmp - scrollIframeContenedor;
}
}
function unsubscribe() {
unsubscribed = true;
removeEvent(window, 'resize', saveViewportT);
removeEvent(window, 'resize', showImagesT);
removeEvent(window, 'scroll', showImagesT);
if (iframeAltoVariable) {
removeEvent(window.parent, 'resize', saveViewportT);
removeEvent(window.parent, 'scroll', showImagesT);
removeEvent(window.parent, 'resize', saveOffsetIframeContenedorT);
removeEvent(window.parent, 'scroll', saveOffsetIframeContenedorT);
removeEvent(window, 'resize', saveOffsetIframeContenedorT);
removeEvent(window, 'scroll', saveOffsetIframeContenedorT);
}
}
function subscribe() {
unsubscribed = false;
if (iframeAltoVariable) {
addEvent(window.parent, 'resize', saveOffsetIframeContenedorT);
addEvent(window.parent, 'scroll', saveOffsetIframeContenedorT);
addEvent(window, 'resize', saveOffsetIframeContenedorT);
addEvent(window, 'scroll', saveOffsetIframeContenedorT);
addEvent(window.parent, 'resize', saveViewportT);
addEvent(window.parent, 'scroll', showImagesT);
}
addEvent(window, 'resize', saveViewportT);
addEvent(window, 'resize', showImagesT);
addEvent(window, 'scroll', showImagesT);
}
function overrideGetattribute() {
var original = HTMLImageElement.prototype.getAttribute;
HTMLImageElement.prototype.getAttribute = function(name) {
if(name === 'src') {
var realSrc = original.call(this, lazyAttr);
return realSrc || original.call(this, name);
} else {
return original.call(this, name);
}
}
}
var contains = document.documentElement.compareDocumentPosition ?
function( a, b ) {
return !!(a.compareDocumentPosition( b ) & 16);
} :
document.documentElement.contains ?
function( a, b ) {
return a !== b && ( a.contains ? a.contains( b ) : false );
} :
function( a, b ) {
while ( (b = b.parentNode) ) {
if ( b === a ) {
return true;
}
}
return false;
};
function inArray(elem, array, i) {
var len;
if ( array ) {
if ( Array.prototype.indexOf ) {
return Array.prototype.indexOf.call( array, elem, i );
}
len = array.length;
i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;
for ( ; i < len; i++ ) {
if ( i in array && array[ i ] === elem ) {
return i;
}
}
}
return -1;
}
if (iframeAltoVariable) {
saveOffsetIframeContenedor();
}
findImages(container);
onLoad();
subscribe();
}(this, document, idContenedor))
}
function muestraMensajesHilo() {
var divContenedor = document.getElementById(_idContenedorHilo);
var html = "";
var idMensajeCompuestoMostrar = "";
if (typeof _hashMsgs.mensajes != "undefined" && _hashMsgs.mensajes.length > 0) {
var arraySubnivelesTransparentes = Array();
var idMensajeCompuesto = "";
for (var i = 0; i != _hashMsgs.numMensajes; i++) {
if (_hashMsgs.mensajes[i]) {
var ultimoSubnivel = "";
var htmlDivSubniveles = "";
var htmlCierreDivSubniveles = "";
var hayEnvoltorio = true;
var visible = true;
arraySubnivelesTransparentes[_hashMsgs.mensajes[i].level] = 0;
if (_hashMsgs.mensajes[i].level > _nivelMinVisibleHilo) {
visible = false;
}
for (var contLevel = _hashMsgs.mensajes[i].level; contLevel > 0; contLevel--) {
var htmlUltimo = "";
if (contLevel == _hashMsgs.mensajes[i].level) {
ultimoSubnivel = "subnivel"+contLevel;
if ((i+1) == _hashMsgs.numMensajes ||
_hashMsgs.mensajes[i].level > _hashMsgs.mensajes[i+1].level) {
htmlUltimo = "ultimo";
hayEnvoltorio = false;
} else {
for (var j = (i+1); j != _hashMsgs.numMensajes; j++) {
htmlUltimo = "ultimo";
hayEnvoltorio = false;
arraySubnivelesTransparentes[_hashMsgs.mensajes[i].level] = 1;
if (_hashMsgs.mensajes[j].level == _hashMsgs.mensajes[i].level) {
htmlUltimo = "";
hayEnvoltorio = true;
arraySubnivelesTransparentes[_hashMsgs.mensajes[i].level] = 0;
break;
}
if (_hashMsgs.mensajes[j].level < _hashMsgs.mensajes[i].level) {
break;
}
}
}
}
var htmlTransparente = "";
if (typeof arraySubnivelesTransparentes[_hashMsgs.mensajes[i].level] != "undefined" &&
arraySubnivelesTransparentes[contLevel] == 1 &&
htmlUltimo == "") {
htmlTransparente = "transparente";
}
var htmlStyle = "";
var htmlIdMensaje = "";
if (contLevel == 1) {
if (typeof _idMsg == "undefined" || _idMsg != _hashMsgs.mensajes[i].idMsg) {
if (!visible) {
htmlStyle = "style='display: none'";
}
htmlIdMensaje = "id='" + idMensajeCompuesto + "|" +  _hashMsgs.mensajes[i].idMsg + "'";
} else {
idMensajeCompuestoMostrar = idMensajeCompuesto;
}
}
htmlDivSubniveles = "<div class='subnivel" + contLevel + htmlUltimo + htmlTransparente + "' " + htmlStyle + " " + htmlIdMensaje + ">" + htmlDivSubniveles;
htmlCierreDivSubniveles += "</div>";
}
if (typeof _idMsg != "undefined" && _idMsg == _hashMsgs.mensajes[i].idMsg) {
html += "<div id='" + idMensajeCompuestoMostrar + "|" + _hashMsgs.mensajes[i].idMsg + "' class='entrada'>";
htmlCierreDivSubniveles += "</div>";
}
html += htmlDivSubniveles;
if (hayEnvoltorio) {
var idPrimerMensaje = "";
if (_hashMsgs.mensajes[i].level == 0) {
idPrimerMensaje = " id = '|" +  _hashMsgs.mensajes[i].idMsg + "' ";
}
html += "<div " + idPrimerMensaje + " class='envoltorio" + ultimoSubnivel + "'>";
htmlCierreDivSubniveles += "</div>";
}
if (_hashMsgs.mensajes[i].borrado == 1) {
html += "<div class=\"borrado\">";
}
html += pintaMensajeHilo(_hashMsgs.mensajes[i], visible);
html += "<div class=\"enlacesconversacion\" id=\"enlacesconversacion_" + _hashMsgs.mensajes[i].idMsg + "\">";
if ((i+1) == _hashMsgs.numMensajes ||
_hashMsgs.mensajes[i].level >= _hashMsgs.mensajes[i+1].level) {
} else if (_hashMsgs.mensajes[i].level < _nivelMinVisibleHilo) {
html += "<a href='javascript:void(0);' title='Ocultar las respuestas a este mensaje' class='cerrar' onClick='javascript:ocultarRespuestas(\"" + _hashMsgs.mensajes[i].idMsg + "\", " + _hashMsgs.mensajes[i].level + ");' id='linkrespuestas_" + _hashMsgs.mensajes[i].idMsg + "'>Cerrar respuestas</a>";
} else {
numMensajesDebajo = 0;
for (var j = (i+1); j != _hashMsgs.numMensajes; j++) {
if (_hashMsgs.mensajes[j].level <= _hashMsgs.mensajes[i].level) {
break;
}
numMensajesDebajo++;
}
html += "<a href='javascript:void(0);' class='primero1'' onClick='javascript:mostrarRespuestas(\"" + _hashMsgs.mensajes[i].idMsg + "\", " + _hashMsgs.mensajes[i].level + ");' title='Mostrar las respuestas a este mensaje' id='linkrespuestas_" + _hashMsgs.mensajes[i].idMsg + "'>" + numMensajesDebajo + " respuestas</a>";
}
html += "</div>";
if (_hashMsgs.mensajes[i].borrado == 1) {
html += "</div>";
}
html += htmlCierreDivSubniveles;
if ((i+1) != _hashMsgs.numMensajes) {
if (_hashMsgs.mensajes[i].level < _hashMsgs.mensajes[i+1].level) {
idMensajeCompuesto += "|" + _hashMsgs.mensajes[i].idMsg;
} else if (_hashMsgs.mensajes[i].level > _hashMsgs.mensajes[i+1].level) {
numNiveles = _hashMsgs.mensajes[i].level-_hashMsgs.mensajes[i+1].level;
idMensajeCompuesto = idMensajeCompuesto.substring(0, idMensajeCompuesto.length-((_longIdMensaje+1)*numNiveles));
}
}
}
}
}
divContenedor.innerHTML = html;
mostrarError('');

}
function pintaNombreUsuario(nickname) {
var nombreUsuario = nickname;
if (_hashMsgs.perfilesUsuarios && _hashMsgs.perfilesUsuarios[nickname]) {
if (_hashMsgs.perfilesUsuarios[nickname].nombre) {
nombreUsuario = _hashMsgs.perfilesUsuarios[nickname].nombre;
}
if (_hashMsgs.perfilesUsuarios[nickname].apellidos) {
nombreUsuario += " " + _hashMsgs.perfilesUsuarios[nickname].apellidos;
}
}
return(nombreUsuario);
}
function pintaImagenUsuario(nickname) {
var strImagen = _url_imagen_usuario_por_defecto;
if (typeof _url_imagen_usuario != "undefined" && _url_imagen_usuario != "" && nickname == _nickname) {
strImagen = _url_imagen_usuario;
} else if (_hashMsgs.perfilesUsuarios && _hashMsgs.perfilesUsuarios[nickname]) {
if (_hashMsgs.perfilesUsuarios[nickname].pathfoto) {
strImagen = _hashMsgs.perfilesUsuarios[nickname].pathfoto;
}
}
return(strImagen);
}
function pintaNombreEvento(evento) {
var nombreEvento = evento;
if (_hashMsgs.perfilesEventos && _hashMsgs.perfilesEventos[evento]) {
if (_hashMsgs.perfilesEventos[evento].nombre) {
nombreEvento = _hashMsgs.perfilesEventos[evento].nombre;
}
}
return(nombreEvento);
}
function pintaBotonSeguirUsuario(idMensaje, nickname) {
var htmlBoton = '';
if (typeof _quitaEnlacesEskup == 'undefined' || _quitaEnlacesEskup!='1'){
var usuarioSeguido = false;
if (typeof _arrayListaSeguidos != "undefined" && _arrayListaSeguidos.indexOf(nickname) != -1) {
usuarioSeguido = true;
}
var estiloBoton      = 'off seguir_al_usuario';
var estiloConfirmar  = 'on confirmar';
var mensajeBoton     = _ESKUPhashMsgByLang[LANGESKUP].seguir_al_usuario;
var mensajeConfirmar = _ESKUPhashMsgByLang[LANGESKUP].confirmar;
var accionEskup      = 'add';
if (usuarioSeguido) {
estiloBoton      = 'on le_estas_siguiendo';
estiloConfirmar  = 'off  dejar_de_seguirle';
mensajeBoton     = _ESKUPhashMsgByLang[LANGESKUP].le_estas_siguiendo;
mensajeConfirmar = _ESKUPhashMsgByLang[LANGESKUP].dejar_de_seguirle;
accionEskup      = 'del';
}
htmlBoton += '<a id="botonseguirusuario_' + idMensaje + '" class="boton favorito favorito_' + estiloBoton + '" href="javascript:void(0);" onclick="mostrarCapaSeguirUsuario(\'' + idMensaje + '\');">' + mensajeBoton + '</a>';
htmlBoton += '<div id="capaseguirusuario_' + idMensaje + '" class="capafavorito oculto" onmouseover="mostrarCapaSeguirUsuario(\'' + idMensaje + '\');" onmouseout="this.ocultando=true; setTimeout(function(){ ocultarCapaSeguirUsuario(\'' + idMensaje + '\'); }, 100);">';
htmlBoton += '<a class="boton favorito favorito_' + estiloBoton + '" href="javascript:void(0);" onclick="ocultarCapaSeguirUsuario(\'' + idMensaje + '\', true);">' + mensajeBoton + '</a>';
htmlBoton += '<a class="boton favorito favorito_' + estiloConfirmar + '" href="javascript:void(0);" onclick="seguirUsuario(\'' + accionEskup + '\',\'' + nickname + '\', callbackSeguirUsuarioComentarios)">' + mensajeConfirmar + '</a>';
htmlBoton += '</div>';
}
return(htmlBoton);
}
function callbackSeguirUsuarioComentarios(httpRequest) {
if (httpRequest.status != 200) {
var texto_mensaje = _ESKUPhashMsgByLang[LANGESKUP].error_al_realizar_la_operacion;
alert(texto_mensaje + " (" + httpRequest.data + ")");
}
else {
var data = httpRequest.responseText;
if (typeof _arrayListaSeguidos != "undefined") {
if (_operacion == 'add') {
_arrayListaSeguidos.push(_nicknameASeguir);
} else {
_arrayListaSeguidos = _arrayListaSeguidos.slice((_arrayListaSeguidos.indexOf(_nicknameASeguir)-1), _arrayListaSeguidos.indexOf(_nicknameASeguir));
}
}
if (_hashMsgs.mensajes) {
for (var contMsg = 0; contMsg != _hashMsgs.mensajes.length; contMsg++) {
var hashMsg = _hashMsgs.mensajes[contMsg];
if (hashMsg.usuarioOrigen == _nicknameASeguir &&
document.getElementById('seguirusuario_'+hashMsg.idMsg)) {
document.getElementById('seguirusuario_'+hashMsg.idMsg).innerHTML = 
pintaBotonSeguirUsuario(hashMsg.idMsg, _nicknameASeguir);
}
}
}
}
}
function pintaMensaje(hashMensaje, esProvisional) {
var html = '';
if (typeof esProvisional == "undefined") {
esProvisional = false;
}
if (typeof _htmlPlantillaPersonalizadaMsg == 'undefined' || _htmlPlantillaPersonalizadaMsg == null) {
html = document.getElementById(_idPlantillaMsg).innerHTML;
html = html.replace(/\n/g, '');
html = html.replace(/\r/g, '');
}
else {
html = _htmlPlantillaPersonalizadaMsg;
}
html = html.replace(_idPlantillaMsg, "mensaje_"+hashMensaje.idMsg);
var ahora = new Date();
var tsAhora = ahora.getTime() / 1000;
if (typeof _tsHoraActual != "undefined" && _tsHoraActual != 0) {
tsAhora = _tsHoraActual;
} else if (typeof _hashMsgs.horaActual != "undefined") {
tsAhora = _hashMsgs.horaActual;
}
var tsMensaje = hashMensaje.tsMensaje;
var fechaMensaje = new Date(hashMensaje.tsMensaje*1000);
var anyo = fechaMensaje.getFullYear();
var mes  = fechaMensaje.getMonth() + 1;
if (mes < 10) { mes = "0" + mes; }
var dia  = fechaMensaje.getDate();
if (dia < 10) { dia = "0" + dia; }
var hora = fechaMensaje.getHours();
if (hora < 10) { hora = "0" + hora; }
var min  = fechaMensaje.getMinutes();
if (min < 10) { min = "0" + min; }
var textoHora = "";
if (tsMensaje+60 > tsAhora) {
textoHora += _ESKUPhashMsgByLang[LANGESKUP].menos_de_un_minuto;
} else if (tsMensaje+3600 > tsAhora) {
var minutosDiff = parseInt((tsAhora-tsMensaje)/60);
if (minutosDiff == 1) {
textoHora += _ESKUPhashMsgByLang[LANGESKUP].hace + " " + minutosDiff + " " + _ESKUPhashMsgByLang[LANGESKUP].minuto;
} else {
textoHora += _ESKUPhashMsgByLang[LANGESKUP].hace + " " + minutosDiff + " " + _ESKUPhashMsgByLang[LANGESKUP].minutos;
}
} else if (tsMensaje+3600*24 > tsAhora) {
var horasDiff = parseInt((tsAhora-tsMensaje)/3600);
if (horasDiff == 1) {
textoHora += _ESKUPhashMsgByLang[LANGESKUP].hace + " " + horasDiff + " " + _ESKUPhashMsgByLang[LANGESKUP].hora;
} else {
textoHora += _ESKUPhashMsgByLang[LANGESKUP].hace + " " + horasDiff + " " + _ESKUPhashMsgByLang[LANGESKUP].horas;
}
} else {
textoHora += dia + '/' + mes + '/' + anyo + ', ' + _ESKUPhashMsgByLang[LANGESKUP].a_las + ' ' + hora + ':' + min;
}
html = html.replace(/#MSG:HORA#/g, textoHora);
var relevancia_mensaje = '';
if ( (_hashExtraMsgs.mensajes) && (_hashExtraMsgs.mensajes[hashMensaje.idMsg]) ) {
var datosExtraMensaje = _hashExtraMsgs.mensajes[hashMensaje.idMsg];
relevancia_mensaje =                      '<div class="barra"><div style="width: ' + datosExtraMensaje.weight + '%;">&nbsp;</div></div><!-- === cierre div barra === -->';
relevancia_mensaje = relevancia_mensaje + '<div class="porcentaje"> <strong>' + datosExtraMensaje.weight + '%</strong> de coincidencia</div><!-- === cierre div porcentaje === -->';
relevancia_mensaje = relevancia_mensaje + '<div class="rompedor"></div>';
html = html.replace(/#MSG:INI_MSG_RELEVANCIA#/g, '');
html = html.replace(/#MSG:FIN_MSG_RELEVANCIA#/g, '');
html = html.replace(/#MSG:RELEVANCIA#/g, relevancia_mensaje);
}
else {
html = html.replace(/#MSG:INI_MSG_RELEVANCIA#.*?#MSG:FIN_MSG_RELEVANCIA#/g, '');
}
if (esProvisional) {
html = html.replace(/#MSG:INI_MSG_PROVISIONAL#/g, '');
html = html.replace(/#MSG:FIN_MSG_PROVISIONAL#/g, '');
} else {
html = html.replace(/#MSG:INI_MSG_PROVISIONAL#.*?#MSG:FIN_MSG_PROVISIONAL#/g, '');
}
if (!esProvisional && (_tablon == "2" || _tablon == "3")) {
if (typeof _hashMsgs.ultimaVisita != "undefined" &&
typeof _hashMsgs.ultimaVisita[_tablon] != "undefined" &&
tsMensaje > _hashMsgs.ultimaVisita[_tablon] && !esProvisional) {
html = html.replace(/#MSG:INI_MSG_NUEVO#/, '');
html = html.replace(/#MSG:FIN_MSG_NUEVO#/, '');
} else {
html = html.replace(/#MSG:INI_MSG_NUEVO#.*?#MSG:FIN_MSG_NUEVO#/, '');
}
} else {
html = html.replace(/#MSG:INI_MSG_NUEVO#.*?#MSG:FIN_MSG_NUEVO#/, '');
}
if (hashMensaje.borrado == 1) {
if (typeof _quiensoy != "undefined" && (_quiensoy == "comentarios" || _quiensoy == "mensajeUnico")) {
html = html.replace(/#MSG:INI_MSG_BORRADO#/g, '');
html = html.replace(/#MSG:FIN_MSG_BORRADO#/g, '');
} else {
html = html.replace(/#MSG:INI_MSG_BORRADO#.*?#MSG:FIN_MSG_BORRADO#/g, '');
}
} else {
if (typeof _quiensoy != "undefined" && (_quiensoy == "comentarios" || _quiensoy == "mensajeUnico")) {
html = html.replace(/#MSG:INI_MSG_BORRADO#.*?#MSG:FIN_MSG_BORRADO#/g, '');
} else {
html = html.replace(/#MSG:INI_MSG_BORRADO#/g, '');
html = html.replace(/#MSG:FIN_MSG_BORRADO#/g, '');
}
}
if ( (typeof _quiensoy != "undefined" && (_quiensoy == "comentarios" || _quiensoy == "mensajeUnico")) &&
(typeof hashMensaje.opinador != "undefined" && hashMensaje.opinador == 1) ) {
html = html.replace(/#MSG:INI_MSG_OPINADOR#/g, '');
html = html.replace(/#MSG:FIN_MSG_OPINADOR#/g, '');
} else {
html = html.replace(/#MSG:INI_MSG_OPINADOR#.*?#MSG:FIN_MSG_OPINADOR#/g, '');
}
if (typeof _quiensoy != "undefined" && (_quiensoy == "comentarios" || _quiensoy == "mensajeUnico")) {
html = html.replace(/#MSG:BOTON_SEGUIR_USUARIO#/, pintaBotonSeguirUsuario(hashMensaje.idMsg, hashMensaje.usuarioOrigen));
}
if (hashMensaje.moderacion != "undefined" && hashMensaje.moderacion == 'pte') {
html = html.replace(/#MSG:INI_MSG_PTE_PREMODERACION#/g, '');
html = html.replace(/#MSG:FIN_MSG_PTE_PREMODERACION#/g, '');
} else {
html = html.replace(/#MSG:INI_MSG_PTE_PREMODERACION#.*?#MSG:FIN_MSG_PTE_PREMODERACION#/g, '');
}
html = html.replace(/#MSG:ID#/g, hashMensaje.idMsg);
html = html.replace(/#MSG:FOTO_USUARIO#/, pintaImagenUsuario(hashMensaje.usuarioOrigen));
html = html.replace(/#MSG:NICKNAME_USUARIO#/g, hashMensaje.usuarioOrigen);
html = html.replace(/#MSG:NOMBRE_USUARIO#/g, pintaNombreUsuario(hashMensaje.usuarioOrigen));
var contenidoMensaje = "";
if (hashMensaje.borrado == 1) {
contenidoMensaje += '(' + _ESKUPhashMsgByLang[LANGESKUP].mensaje_borrado + ')';
} else {
contenidoMensaje  = '' + hashMensaje.contenido;
}
if (typeof hashMensaje.hayVideo != "undefined" && hashMensaje.hayVideo == 1) {
contenidoMensaje = pintaVideoEnMensaje(contenidoMensaje, hashMensaje.idMsg);
}
contenidoMensaje = pintaEmbedEnMensaje(contenidoMensaje, hashMensaje.idMsg);
if (typeof _desactivarEnlaces != "undefined" && _desactivarEnlaces == '1') {
contenidoMensaje = contenidoMensaje.replace(/<a [^>]*>/ig, "");
contenidoMensaje = contenidoMensaje.replace(/<\/a>/ig, "");
}
var mostrar_mensaje_resaltado = false;
if (_nickname != '') {
if (_nickname == hashMensaje.autorMsgRespuesta) {
mostrar_mensaje_resaltado = true;
}
var regExpRefer = new RegExp("(\s*)@(<a [^>]*>)(" + _nickname + ")(</a>*)(\s|\.\s|\.\.\.|,\s|:\s|\\?\s|!\s|\.|,|:|\\?$|!$|$)(.*)", "i");
if (regExpRefer.test(contenidoMensaje)) {
mostrar_mensaje_resaltado = true;
}
if ( !(_tablon1 == 't1-ULTIMOSMENSAJES') && !(_tablon1 == '2') && !(_tablon1.match("ev-")) ) {
mostrar_mensaje_resaltado = false;
}
if ( mostrar_mensaje_resaltado == true ) {
html = html.replace(/#MSG:INI_DIV_REFERENCIADO#/g, '');
html = html.replace(/#MSG:FIN_DIV_REFERENCIADO#/g, '');
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
contenidoMensaje = contenidoMensaje.replace(regExpRefer, "$1@$2<em>$3</em>$4$5$6");
}
}
}
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
contenidoMensaje = contenidoMensaje.replace(/@<a href="http:\/\/([^\/]+)\/([a-z0-9_]+)"([^>]*)>/ig, "@<a href=\"http:\/\/$1\/m\/$2\"$3>");
}
html = html.replace(/#MSG:INI_DIV_REFERENCIADO#.*?#MSG:FIN_DIV_REFERENCIADO#/g, '');
if (_nickname != '') {
if ( (_nickname == hashMensaje.usuarioOrigen) && (_tablon == '3') ) {
html = html.replace(/#MSG:INI_DIV_MIPRIVADO#/g, '');
html = html.replace(/#MSG:FIN_DIV_MIPRIVADO#/g, '');
}
}
html = html.replace(/#MSG:INI_DIV_MIPRIVADO#.*?#MSG:FIN_DIV_MIPRIVADO#/g, '');
html = html.replace(/#MSG:CONTENIDO#/g, contenidoMensaje);
html = html.replace(/#MSG:ETIQUETA_INICIO_IMG#/g, '<img');
html = html.replace(/#MSG:ETIQUETA_FIN_IMG#/g,    ' />');
if (hashMensaje.idMsgRespuesta && hashMensaje.idMsgRespuesta != 0) {
if (typeof _quiensoy != "undefined" && _quiensoy == "comentarios" &&
hashMensaje.idMsgRespuesta == hashMensaje.hilo) {
html = html.replace(/#MSG:INI_DIV_CONVERSACION#.*?#MSG:FIN_DIV_CONVERSACION#/g, '');
} else 
if (typeof _quiensoy != "undefined" && _quiensoy == "widget" && hashMensaje.idMsgRespuesta == hashMensaje.hilo &&
typeof _hashMsgs.perfilesHilos != "undefined" && 
typeof _hashMsgs.perfilesHilos['_'+hashMensaje.hilo] != "undefined" &&
typeof _hashMsgs.perfilesHilos['_'+hashMensaje.hilo].tipo != "undefined" &&
_hashMsgs.perfilesHilos['_'+hashMensaje.hilo].tipo == "comentarios") {
html = html.replace(/#MSG:INI_DIV_CONVERSACION#.*?#MSG:FIN_DIV_CONVERSACION#/g, '');
} else {
if (hashMensaje.idMsgRespuesta != hashMensaje.idMsg) {
html = html.replace(/#MSG:NICKNAME_USUARIO_RESPUESTA#/g,  hashMensaje.autorMsgRespuesta);
html = html.replace(/#MSG:NOMBRE_USUARIO_RESPUESTA#/g,  pintaNombreUsuario(hashMensaje.autorMsgRespuesta));
} else {
html = html.replace(/#MSG:INI_DIV_RESPUESTA#.*?#MSG:FIN_DIV_RESPUESTA#/, '');
}
html = html.replace(/#MSG:ID_HILO#/g, hashMensaje.hilo);
if (hashMensaje.hilo != hashMensaje.idMsg) {
html = html.replace(/#MSG:ID_MSG_RESPUESTA#/g, hashMensaje.idMsgRespuesta);
}
}
} else {
html = html.replace(/#MSG:INI_DIV_CONVERSACION#.*?#MSG:FIN_DIV_CONVERSACION#/g, '');
}
html = html.replace(/#MSG:INI_DIV_CONVERSACION#/g, '');
html = html.replace(/#MSG:FIN_DIV_CONVERSACION#/g, '');
html = html.replace(/#MSG:INI_DIV_RESPUESTA#/g, '');
html = html.replace(/#MSG:FIN_DIV_RESPUESTA#/g, '');
html = html.replace(/#MSG:ID_HILO#/, '');
html = html.replace(/#MSG:ID_MSG_RESPUESTA#/, '');
var numTablonesAMostrar = 0;
var tablonesAMostrar    = Array();
var tablonesRespuesta   = Array();
if (hashMensaje.CopiaEnTablones) {
var tablones = hashMensaje.CopiaEnTablones.split(',');
for (var i = 0; i != tablones.length; i++) {
if (_tablon == 3 && tablones[i] != ("t3-"+_nickname)) {
if (tablones[i] != ("t3-"+hashMensaje.usuarioOrigen)) {
tablonesAMostrar[tablones[i].substring(3)] = pintaNombreUsuario(tablones[i].substring(3));
numTablonesAMostrar++;
}
tablonesRespuesta.push(tablones[i].substring(3));
} else if (/^ev-/.test(tablones[i])) {
tablonesAMostrar[tablones[i].substring(3)] = pintaNombreEvento(tablones[i].substring(3));
numTablonesAMostrar++;
tablonesRespuesta.push(tablones[i].substring(3));
}
}
if (numTablonesAMostrar > 0) {
if (_tablon == 3) {
var estilo_msg_privado = '';
var texto_title = '';
if (_nickname == hashMensaje.usuarioOrigen) {
html = html.replace(/#MSG:INI_DIV_DESTACADO#/g, '');
html = html.replace(/#MSG:FIN_DIV_DESTACADO#/g, '');
html = html.replace(/#MSG:INI_DIV_DESTINATARIOS#/, '');
html = html.replace(/#MSG:FIN_DIV_DESTINATARIOS#/, '');
estilo_msg_privado = 'enrespuesta';
texto_title = 'Mensaje enviado a';
} else {
html = html.replace(/#MSG:INI_DIV_OTROS_DESTINATARIOS#/, '');
html = html.replace(/#MSG:FIN_DIV_OTROS_DESTINATARIOS#/, '');
estilo_msg_privado = 'masdestinatarios';
texto_title = 'Enviado tambi&eacute;n a';
}
var htmlDestinatarios = '';
var styleDisplay = '';
var contDest = 0;
for (var tablonTmp in tablonesAMostrar) {
if (_numUsuariosAMostrar != 0 &&
contDest == _numUsuariosAMostrar &&
numTablonesAMostrar > (_numUsuariosAMostrar+1)) {
styleDisplay = ' style="display: none" ';
htmlDestinatarios += '<p class="vertodos" id="id_destinatarios_' + hashMensaje.idMsg + '_desplegar"><a href="javascript:void(0);" title="Mostrar todos los destinatarios" onclick="javascript:mostrarTodosDestinatarios(\'id_destinatarios_' + hashMensaje.idMsg + '\');"></a></p>';
}
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
htmlDestinatarios += '<p class="' + estilo_msg_privado + '" ' + styleDisplay + '><a class="iconorespuesta" href="/m/' + tablonTmp + '" title="' + texto_title + '" alt="' + texto_title + '"></a><a href="/m/' + tablonTmp + '" title="Ver todos sus mensajes">' + tablonesAMostrar[tablonTmp] + '</a></p>';
} else {
htmlDestinatarios += '<p class="' + estilo_msg_privado + '" ' + styleDisplay + '><a class="iconorespuesta" href="/' + tablonTmp + '" title="' + texto_title + '" alt="' + texto_title + '"></a><a href="/' + tablonTmp + '" title="Ver todos sus mensajes">' + tablonesAMostrar[tablonTmp] + '</a></p>';
}
contDest++;
}
html = html.replace(/#MSG:DESTINATARIOS#/g, htmlDestinatarios);
html = html.replace(/#MSG:INI_DIV_TEMA#.*?#MSG:FIN_DIV_TEMA#/, '');
} else {
var contDest = 0;
var htmlMasTemas = "";
for (var tablonTmp in tablonesAMostrar) {
if (contDest == 0) {
html = html.replace(/#MSG:TEMA#/, tablonesAMostrar[tablonTmp]);
html = html.replace(/#MSG:TEMA_NORM#/, tablonTmp);
}
if (numTablonesAMostrar > 1) {
if (contDest == 1) {
htmlMasTemas = "<ul>";
}
if (contDest != 0) {
if (typeof _quitaEnlacesEskup != 'undefined' && _quitaEnlacesEskup=='1'){
htmlMasTemas += "<li>" + tablonesAMostrar[tablonTmp] + "</li>";
}else if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
htmlMasTemas += "<li><a href=\"/m/" + "*" + tablonTmp + "\" title=\"Ver tema\">" + tablonesAMostrar[tablonTmp] + "</a></li>";
} else {
htmlMasTemas += "<li><a href=\"/" + "*" + tablonTmp + "\" title=\"Ver tema\">" + tablonesAMostrar[tablonTmp] + "</a></li>";
}
}
}
contDest++;
}
if (numTablonesAMostrar > 1) {
htmlMasTemas += "</ul>";
if (typeof _desactivarEnlaces != "undefined" && _desactivarEnlaces == '1') {
htmlMasTemas = htmlMasTemas.replace(/<a [^>]*>/ig, "");
htmlMasTemas = htmlMasTemas.replace(/<\/a>/ig, "");
}
html = html.replace(/#MSG:MAS_TEMAS#/, htmlMasTemas);
} else {
html = html.replace(/#MSG:INI_MAS_TEMAS#.*?#MSG:FIN_MAS_TEMAS#/, '');
}
}
} else {
html = html.replace(/#MSG:INI_DIV_TEMA#.*?#MSG:FIN_DIV_TEMA#/, '');
}
} else {
html = html.replace(/#MSG:INI_DIV_TEMA#.*?#MSG:FIN_DIV_TEMA#/, '');
}
html = html.replace(/#MSG:INI_DIV_DESTACADO#.*?#MSG:FIN_DIV_DESTACADO#/g, '');
html = html.replace(/#MSG:INI_DIV_DESTINATARIOS#.*?#MSG:FIN_DIV_DESTINATARIOS#/, '');
html = html.replace(/#MSG:INI_DIV_OTROS_DESTINATARIOS#.*?#MSG:FIN_DIV_OTROS_DESTINATARIOS#/g, '');
html = html.replace(/#MSG:INI_DIV_TEMA#/, '');
html = html.replace(/#MSG:FIN_DIV_TEMA#/, '');
html = html.replace(/#MSG:MAS_TEMAS#/, '');
html = html.replace(/#MSG:INI_MAS_TEMAS#/, '');
html = html.replace(/#MSG:FIN_MAS_TEMAS#/, '');
html = parseaFoto(html,hashMensaje);
var htmlEnlaces = "";
var prefijoUrlBase = "";
if (typeof _quiensoy != "undefined" && (_quiensoy == "comentarios" || _quiensoy == "widget" || _quiensoy == "mensajeUnico") &&
typeof _url_servidor != "undefined") {
prefijoUrlBase = _url_servidor;
}
var _hayPremoderacion = false;
if (typeof hashMensaje.hilo != "undefined" && hashMensaje.hilo != 0) {
_hayPremoderacion = esHiloPremoderado(hashMensaje.hilo);
} else
if (esEventoPremoderado(_tablon)) {
_hayPremoderacion = true;
}
if (esProvisional == false) {
html = html.replace(/#MSG:INI_DIV_MENU#/g, '');
html = html.replace(/#MSG:FIN_DIV_MENU#/g, '');
if (_nickname != '') {
var strCopiaEnTablones = '';
if (hashMensaje.CopiaEnTablones) {
strCopiaEnTablones = hashMensaje.CopiaEnTablones;
}
if (typeof _quitaEnlacesEskup == 'undefined' || _quitaEnlacesEskup!='1'){
htmlEnlaces += '<li><a href="javascript:void(0);" onClick="javascript:reenviarMensaje(\'' + hashMensaje.idMsg + '\',\'' + hashMensaje.usuarioOrigen + '\', \'' + strCopiaEnTablones + '\', \'' + EPETUtils_fullEncodeURIComponent(hashMensaje.contenido) + '\');" class="reenviar">' + _ESKUPhashMsgByLang[LANGESKUP].reenviar_mensaje + ' (FWD)</a></li>';	
}
if (_nickname == hashMensaje.usuarioOrigen) {
if (_hayPremoderacion && (typeof _soyOpinador == "undefined" ||  _soyOpinador == false)) {
htmlEnlaces += '<li><a href="javascript:void(0);" onClick="javascript:preEditarMensaje(\'' + hashMensaje.idMsg + '\', \'' + EPETUtils_fullEncodeURIComponent(hashMensaje.contenido) + '\');" class="editar">' + _ESKUPhashMsgByLang[LANGESKUP].editar_mensaje + ' </a></li>';
} else {
htmlEnlaces += '<li><a href="javascript:void(0);" onClick="javascript:editarMensaje(\'' + hashMensaje.idMsg + '\', \'' + EPETUtils_fullEncodeURIComponent(hashMensaje.contenido) + '\');" class="editar">' + _ESKUPhashMsgByLang[LANGESKUP].editar_mensaje + ' </a></li>';
}
if (_tablon == 3) {
htmlEnlaces += '<li><a href="javascript:void(0);" onClick="javascript:borrarMensaje(\'' + encodeURIComponent(hashMensaje.idMsg) + '\', \'p\');" class="borrar">' + _ESKUPhashMsgByLang[LANGESKUP].borrar_mensaje + ' </a></li>';
} else {
htmlEnlaces += '<li><a href="javascript:void(0);" onClick="javascript:borrarMensaje(\'' + encodeURIComponent(hashMensaje.idMsg) + '\');" class="borrar">' + _ESKUPhashMsgByLang[LANGESKUP].borrar_mensaje +' </a></li>';
}
}
if (_nickname != hashMensaje.usuarioOrigen && _tablon == 3) {
htmlEnlaces += '<li><a href="javascript:void(0);" onClick="javascript:borrarMensaje(\'' + encodeURIComponent(hashMensaje.idMsg) + '\', \'p\');" class="borrar">' + _ESKUPhashMsgByLang[LANGESKUP].borrar_mensaje +' </a></li>';
}
if (_tablon != 3) {
if (typeof _formatoVisualizacion == "undefined" || _formatoVisualizacion != "movil") {
if (typeof _quitaEnlacesEskup == 'undefined' || _quitaEnlacesEskup!='1'){
htmlEnlaces += '<li><a href="' + prefijoUrlBase + '/' + hashMensaje.idMsg + '" onclick="javascript:ocultarEnlaces(\'' + hashMensaje.idMsg + '\', true);" target="_blank" class="permalink">' + _ESKUPhashMsgByLang[LANGESKUP].enlace_permanente + ' </a></li>';
}
}
}
if (/^ev-/.test(_tablon1) &&
_nickname != "" && _nickname != hashMensaje.usuarioOrigen &&
typeof _hashMsgs.perfilesEventos != "undefined" &&
typeof _hashMsgs.perfilesEventos[_tablon] != "undefined") {
var arrayAdm = _hashMsgs.perfilesEventos[_tablon]["adm"].concat(_hashMsgs.perfilesEventos[_tablon]["prop"]);
var strAdmEvento = "|" + arrayAdm.join("|") + "|";
if (strAdmEvento.indexOf("|"+_nickname+"|") != -1) {
htmlEnlaces += '<li><a href="javascript:void(0);" onClick="javascript:borrarMensaje(\'' + encodeURIComponent(hashMensaje.idMsg) + '\', \'*' + _tablon + '\');" class="borrar">' + _ESKUPhashMsgByLang[LANGESKUP].borrar_mensaje +' </a></li>';
}
}
if (_nickname != hashMensaje.usuarioOrigen) {
if (typeof _formatoVisualizacion == "undefined" || _formatoVisualizacion != "movil") {
htmlEnlaces += '<li><a href="javascript:void(0);" onclick="javascript:notificarMensajeInsulto(\'' + hashMensaje.idMsg + '\');" class="insulto" >' + _ESKUPhashMsgByLang[LANGESKUP].notificar_insulto +' </a></li>';
htmlEnlaces += '<li><a href="javascript:void(0);" onclick="javascript:notificarMensajeSpam(\'' + hashMensaje.idMsg + '\');" class="spam">' + _ESKUPhashMsgByLang[LANGESKUP].marcar_como_spam +' </a></li>';
}
}
}
else {
if (typeof _formatoVisualizacion == "undefined" || _formatoVisualizacion != "movil") {
if (typeof _quitaEnlacesEskup != 'undefined' && _quitaEnlacesEskup=='1'){
html = html.replace(/#MSG:STYLEID#/g, "display:none");
}else {
htmlEnlaces += '<li><a href="' + prefijoUrlBase + '/' + hashMensaje.idMsg + '" onclick="javascript:ocultarEnlaces(\'' + hashMensaje.idMsg + '\', true);" target="_blank" class="permalink">' + _ESKUPhashMsgByLang[LANGESKUP].enlace_permanente + ' </a></li>';
}
}
}
}
else {
html = html.replace(/#MSG:INI_DIV_MENU#.*?#MSG:FIN_DIV_MENU#/g, '');
}
html = html.replace(/#MSG:ENLACES#/, htmlEnlaces);
if (hashMensaje.via && hashMensaje.via != "web") {
if (typeof _desactivarEnlaces != "undefined" && _desactivarEnlaces == '1') {
html = html.replace(/#MSG:VIA#/, 'V&iacute;a SMS');
} else {
html = html.replace(/#MSG:VIA#/, '<a href="/Estaticas/ayuda/faq.html#enviar_mensajes_desde_el_movil" class="via" title="&iquest;Qu&eacute; es esto?">V&iacute;a SMS</a>');
}
}
html = html.replace(/#MSG:VIA#/, "");
var htmlCmdResponder = "";
if (_nickname != '') {
if (_tablon == 3) {
htmlCmdResponder += "crearMensaje('"+hashMensaje.idMsg+"', '" + tablonesRespuesta.join("|") + "')";
} else if (hashMensaje.hilo && hashMensaje.hilo != 0 &&
typeof _hashMsgs.perfilesHilos != "undefined" &&
typeof _hashMsgs.perfilesHilos['_'+hashMensaje.hilo] != "undefined" &&
(_hashMsgs.perfilesHilos['_'+hashMensaje.hilo].estado < 0 ||
(_hashMsgs.perfilesHilos['_'+hashMensaje.hilo].caducidad != "" &&
_hashMsgs.perfilesHilos['_'+hashMensaje.hilo].caducidad < tsAhora)
)
) {
htmlCmdResponder += "alert('" + _ESKUPhashMsgByLang[LANGESKUP].no_es_posible_responder_al_mensaje + "')";
} else {
var strCopiaEnTablones = "";
var idHilo = encodeURIComponent(hashMensaje.idMsg);
if (hashMensaje.hilo != 0) {
idHilo = encodeURIComponent(hashMensaje.hilo);
}
if (typeof hashMensaje.CopiaEnTablones != "undefined" &&
hashMensaje.CopiaEnTablones != 0 && hashMensaje.CopiaEnTablones.search("ev-") != -1) {
strCopiaEnTablones = hashMensaje.CopiaEnTablones;
}
htmlCmdResponder += "responderMensaje('"+hashMensaje.idMsg+"', '"+idHilo+"|"+encodeURIComponent(hashMensaje.idMsg)+"', '"+strCopiaEnTablones+"');";
}
}
else {
htmlCmdResponder += "alert('" + _ESKUPhashMsgByLang[LANGESKUP].para_responder_tienes_que_identificarte + "')";
}
html = html.replace(/#MSG:ETIQUETA_INICIO_A#/g, '<a ');
html = html.replace(/#MSG:ETIQUETA_ANGULO_CIERRE_A#/g, '>');
html = html.replace(/#MSG:ETIQUETA_FIN_A#/g, '</a>' );
html = html.replace(/#MSG:CMD_RESPONDER#/g, htmlCmdResponder );
if (typeof hashMensaje.origen != 'undefined' && hashMensaje.origen) {
html = html.replace(/#MSG:ORIGEN#/g, hashMensaje.origen);
var origenCSS = hashMensaje.origen;
if (hashMensaje.origen == '5d') {
origenCSS = 'cincodias';
}
html = html.replace(/#MSG:ORIGEN_CSS#/g, origenCSS);
} else {
html = html.replace(/#MSG:ORIGEN#/g, '');
html = html.replace(/#MSG:ORIGEN_CSS#/g, '');
}
if (typeof _quitaEnlacesEskup != 'undefined' && _quitaEnlacesEskup=='1'){
html = html.replace(/@<a href="http:\/\/([^\/]+)\/([a-z0-9_]+)"([^>]*)>([a-z0-9_]+)<\/a>/ig,"@$4");
}
return (html);
}
function parseaFoto(html,hashMensaje){
if (hashMensaje.cont_adicional && hashMensaje.cont_adicional_tipo == 'IMAGEN') {
var dimX = hashMensaje.cont_adicional_dimx;
var dimY = hashMensaje.cont_adicional_dimy;
var maxAnchoFoto = _maxAnchoFotoDefecto;
if (typeof _maxAnchoFoto != "undefined") {
maxAnchoFoto = _maxAnchoFoto;
}
var dimension_maxima_imagen_x = _dimension_maxima_imagen_x;
if (dimX > maxAnchoFoto) {
var porcentajeReduccion = maxAnchoFoto/dimX;
dimX = parseInt(dimX * porcentajeReduccion);
dimY = parseInt(dimY * porcentajeReduccion);
}
var texto_izquierda;
if (dimX > dimension_maxima_imagen_x) {
html = html.replace(/#MSG:INI_FOTO_IZQUIERDA#.*?#MSG:FIN_FOTO_IZQUIERDA#/, '');
texto_izquierda=false;
} else {
html = html.replace(/#MSG:INI_FOTO_COMPLETA#.*?#MSG:FIN_FOTO_COMPLETA#/, '');
texto_izquierda=true;
}
var urlImagen      = hashMensaje.cont_adicional;
if (typeof _SSL != 'undefined' && _SSL == true) {
urlImagen = urlImagen.replace("http://skp00.epimg.net", "https://seguro.elpais.com");
}
var urlImagenLarge = '';
if (hashMensaje.cont_adicional_large && hashMensaje.cont_adicional_tipo_large == 'IMAGEN') {
urlImagenLarge = hashMensaje.cont_adicional_large;
if (typeof _SSL != 'undefined' && _SSL == true) {
urlImagenLarge = urlImagenLarge.replace("http://skp00.epimg.net", "https://seguro.elpais.com");
}
}
html = html.replace(/#MSG:FOTO#/g, urlImagen);
html = html.replace(/#MSG:FOTO_WIDTH#/g, dimX);
html = html.replace(/#MSG:FOTO_HEIGHT#/g, dimY);
if ((typeof(_formatoVisualizacionReal)!='undefined' &&  _formatoVisualizacionReal=='m')||_formatoVisualizacion == "movil"||!hashMensaje.cont_adicional_large ||((!ESKUPpuedoAmpliarFoto()&& (typeof _esWidgetJs != 'undefined' && _esWidgetJs==0)))){
html = html.replace(/#MSG:INI_FOTO_COMPLETA_CON_LARGE#.*?#MSG:FIN_FOTO_COMPLETA_CON_LARGE#/, '');
html = html.replace(/#MSG:INI_FOTO_IZQUIERDA_CON_LARGE#.*?#MSG:FIN_FOTO_IZQUIERDA_CON_LARGE#/, '');
} else if (urlImagenLarge) {
html = html.replace(/#MSG:INI_FOTO_IZQUIERDA#.*?#MSG:FIN_FOTO_IZQUIERDA#/, '');
html = html.replace(/#MSG:INI_FOTO_COMPLETA#.*?#MSG:FIN_FOTO_COMPLETA#/, '');
if (texto_izquierda==true){
html = html.replace(/#MSG:INI_FOTO_COMPLETA_CON_LARGE#.*?#MSG:FIN_FOTO_COMPLETA_CON_LARGE#/, '');
}else{
html = html.replace(/#MSG:INI_FOTO_IZQUIERDA_CON_LARGE#.*?#MSG:FIN_FOTO_IZQUIERDA_CON_LARGE#/, '');
}
html = html.replace(/#MSG:FOTO_LARGE#/, urlImagenLarge);
html = html.replace(/#MSG:FOTO_WIDTH_LARGE#/g, hashMensaje.cont_adicional_dimx_large);
html = html.replace(/#MSG:FOTO_HEIGHT_LARGE#/g, hashMensaje.cont_adicional_dimy_large);
}
} else {
html = html.replace(/#MSG:INI_FOTO_IZQUIERDA#.*?#MSG:FIN_FOTO_IZQUIERDA#/, '');
html = html.replace(/#MSG:INI_FOTO_IZQUIERDA_CON_LARGE#.*?#MSG:FIN_FOTO_IZQUIERDA_CON_LARGE#/, '');
html = html.replace(/#MSG:INI_FOTO_COMPLETA#.*?#MSG:FIN_FOTO_COMPLETA#/, '');
html = html.replace(/#MSG:INI_FOTO_COMPLETA_CON_LARGE#.*?#MSG:FIN_FOTO_COMPLETA_CON_LARGE#/, '');
}
html = html.replace(/#MSG:INI_FOTO_IZQUIERDA#/, '');
html = html.replace(/#MSG:FIN_FOTO_IZQUIERDA#/, '');
html = html.replace(/#MSG:INI_FOTO_COMPLETA#/, '');
html = html.replace(/#MSG:FIN_FOTO_COMPLETA#/, '');
html = html.replace(/#MSG:INI_FOTO_IZQUIERDA_CON_LARGE#/, '');
html = html.replace(/#MSG:FIN_FOTO_IZQUIERDA_CON_LARGE#/, '');
html = html.replace(/#MSG:INI_FOTO_COMPLETA_CON_LARGE#/, '');
html = html.replace(/#MSG:FIN_FOTO_COMPLETA_CON_LARGE#/, '');
return html;
}
function pintaMensajeHilo(hashMensaje, esVisible, esFlotante, esProvisional) {
if (typeof esProvisional == "undefined") {
esProvisional = false;
}
if (typeof esFlotante == "undefined") {
esFlotante = false;
}
var html = document.getElementById(_idPlantillaMsgHilo).innerHTML;
html = html.replace(/\n/g, '');
html = html.replace(/\r/g, '');
html = html.replace(_idPlantillaMsgHilo, "mensaje_"+hashMensaje.idMsg);
var ahora = new Date();
var tsAhora = ahora.getTime() / 1000;
if (typeof _tsHoraActual != "undefined" && _tsHoraActual != 0) {
tsAhora = _tsHoraActual;
} else if (typeof _hashMsgs.horaActual != "undefined") {
tsAhora = _hashMsgs.horaActual;
}
var tsMensaje = hashMensaje.tsMensaje;
var fechaMensaje = new Date(hashMensaje.tsMensaje*1000);
var anyo = fechaMensaje.getFullYear();
var mes  = fechaMensaje.getMonth() + 1;
if (mes < 10) { mes = "0" + mes; }
var dia  = fechaMensaje.getDate();
if (dia < 10) { dia = "0" + dia; }
var hora = fechaMensaje.getHours();
if (hora < 10) { hora = "0" + hora; }
var min  = fechaMensaje.getMinutes();
if (min < 10) { min = "0" + min; }
var textoHora = "";
if (tsMensaje+60 > tsAhora) {
textoHora += _ESKUPhashMsgByLang[LANGESKUP].menos_de_un_minuto;
} else if (tsMensaje+3600 > tsAhora) {
var minutosDiff = parseInt((tsAhora-tsMensaje)/60);
if (minutosDiff == 1) {
textoHora += _ESKUPhashMsgByLang[LANGESKUP].hace + " " + minutosDiff + " " + _ESKUPhashMsgByLang[LANGESKUP].minuto;
} else {
textoHora += _ESKUPhashMsgByLang[LANGESKUP].hace + " " + minutosDiff + " " + _ESKUPhashMsgByLang[LANGESKUP].minutos;
}
} else if (tsMensaje+3600*24 > tsAhora) {
var horasDiff = parseInt((tsAhora-tsMensaje)/3600);
if (horasDiff == 1) {
textoHora += _ESKUPhashMsgByLang[LANGESKUP].hace + " " + horasDiff + " " + _ESKUPhashMsgByLang[LANGESKUP].hora;
} else {
textoHora += _ESKUPhashMsgByLang[LANGESKUP].hace + " " + horasDiff + " " + _ESKUPhashMsgByLang[LANGESKUP].horas;
}
} else {
textoHora += hora + ":" + min + ", " + dia + "-" + mes + "-" + anyo;
}
html = html.replace(/#MSG:HORA#/g, textoHora);
if (esProvisional) {
html = html.replace(/#MSG:INI_MSG_PROVISIONAL#/g, '');
html = html.replace(/#MSG:FIN_MSG_PROVISIONAL#/g, '');
html = html.replace(/#MSG:INI_DIV_MENU#.*?#MSG:FIN_DIV_MENU#/g, '');
} else {
html = html.replace(/#MSG:INI_MSG_PROVISIONAL#.*?#MSG:FIN_MSG_PROVISIONAL#/g, '');
html = html.replace(/#MSG:INI_DIV_MENU#/g, '');
html = html.replace(/#MSG:FIN_DIV_MENU#/g, '');
}
if (hashMensaje.borrado == 1) {
if (typeof _quiensoy != "undefined" && (_quiensoy == "comentarios" ||_quiensoy == "mensajeUnico")) {
html = html.replace(/#MSG:INI_MSG_BORRADO#/g, '');
html = html.replace(/#MSG:FIN_MSG_BORRADO#/g, '');
} else {
html = html.replace(/#MSG:INI_MSG_BORRADO#.*?#MSG:FIN_MSG_BORRADO#/g, '');
}
} else {
if (typeof _quiensoy != "undefined" && (_quiensoy == "comentarios" || _quiensoy == "mensajeUnico")) {
html = html.replace(/#MSG:INI_MSG_BORRADO#.*?#MSG:FIN_MSG_BORRADO#/g, '');
} else {
html = html.replace(/#MSG:INI_MSG_BORRADO#/g, '');
html = html.replace(/#MSG:FIN_MSG_BORRADO#/g, '');
}
}
if ( (typeof _quiensoy != "undefined" && (_quiensoy == "comentarios" || _quiensoy == "mensajeUnico")) &&
(typeof hashMensaje.opinador != "undefined" && hashMensaje.opinador == 1) ) {
html = html.replace(/#MSG:INI_MSG_OPINADOR#/g, '');
html = html.replace(/#MSG:FIN_MSG_OPINADOR#/g, '');
} else {
html = html.replace(/#MSG:INI_MSG_OPINADOR#.*?#MSG:FIN_MSG_OPINADOR#/g, '');
}
if (hashMensaje.moderacion != "undefined" && hashMensaje.moderacion == 'pte') {
html = html.replace(/#MSG:INI_MSG_PTE_PREMODERACION#/g, '');
html = html.replace(/#MSG:FIN_MSG_PTE_PREMODERACION#/g, '');
} else {
html = html.replace(/#MSG:INI_MSG_PTE_PREMODERACION#.*?#MSG:FIN_MSG_PTE_PREMODERACION#/g, '');
}
html = html.replace(/#MSG:ID#/g, hashMensaje.idMsg);
html = html.replace(/#MSG:FOTO_USUARIO#/, pintaImagenUsuario(hashMensaje.usuarioOrigen));
html = html.replace(/#MSG:NICKNAME_USUARIO#/g, hashMensaje.usuarioOrigen);
html = html.replace(/#MSG:NOMBRE_USUARIO#/g, pintaNombreUsuario(hashMensaje.usuarioOrigen));
html = html.replace(/#MSG:ID_MSG_RESPUESTA#/g, hashMensaje.idMsgRespuesta);
var contenidoMensaje = "";
if (hashMensaje.borrado == 1) {
contenidoMensaje += '(' + _ESKUPhashMsgByLang[LANGESKUP].mensaje_borrado + ')';
} else {
contenidoMensaje  = '' + hashMensaje.contenido;
}
if (typeof hashMensaje.hayVideo != "undefined" && hashMensaje.hayVideo == 1) {
contenidoMensaje = pintaVideoEnMensaje(contenidoMensaje, hashMensaje.idMsg, true);
}
if (typeof _desactivarEnlaces != "undefined" && _desactivarEnlaces == '1') {
contenidoMensaje = contenidoMensaje.replace(/<a [^>]*>/ig, "");
contenidoMensaje = contenidoMensaje.replace(/<\/a>/ig, "");
}
html = html.replace(/#MSG:CONTENIDO#/g, contenidoMensaje);
html = html.replace(/#MSG:ETIQUETA_INICIO_IMG#/g, '<img');
html = html.replace(/#MSG:ETIQUETA_FIN_IMG#/g,    ' />');
if (hashMensaje.idMsgRespuesta && hashMensaje.idMsgRespuesta != 0) {
if (typeof _quiensoy != "undefined" && _quiensoy == "comentarios" &&
hashMensaje.idMsgRespuesta == hashMensaje.hilo) {
html = html.replace(/#MSG:INI_DIV_CONVERSACION#.*?#MSG:FIN_DIV_CONVERSACION#/g, '');
} else {
if (hashMensaje.idMsgRespuesta != hashMensaje.idMsg) {
html = html.replace(/#MSG:NICKNAME_USUARIO_RESPUESTA#/g,  hashMensaje.autorMsgRespuesta);
html = html.replace(/#MSG:NOMBRE_USUARIO_RESPUESTA#/g,  pintaNombreUsuario(hashMensaje.autorMsgRespuesta));
} else {
html = html.replace(/#MSG:INI_DIV_RESPUESTA#.*?#MSG:FIN_DIV_RESPUESTA#/, '');
}
html = html.replace(/#MSG:ID_HILO#/g, hashMensaje.hilo);
}
} else {
html = html.replace(/#MSG:INI_DIV_CONVERSACION#.*?#MSG:FIN_DIV_CONVERSACION#/g, '');
}
html = html.replace(/#MSG:INI_DIV_CONVERSACION#/g, '');
html = html.replace(/#MSG:FIN_DIV_CONVERSACION#/g, '');
html = html.replace(/#MSG:INI_DIV_RESPUESTA#/, '');
html = html.replace(/#MSG:FIN_DIV_RESPUESTA#/, '');
html = html.replace(/#MSG:ID_HILO#/, '');
if (esFlotante) {
html = html.replace(/#MSG:INI_NO_ES_FLOTANTE#.*?#MSG:FIN_NO_ES_FLOTANTE#/g, '');
}
html = html.replace(/#MSG:INI_NO_ES_FLOTANTE#/g, '');
html = html.replace(/#MSG:FIN_NO_ES_FLOTANTE#/g, '');
var tablonesAMostrar = Array();
var tablonesRespuesta = Array();
if (hashMensaje.CopiaEnTablones && !esFlotante) {
var tablones = hashMensaje.CopiaEnTablones.split(',');
for (var i = 0; i != tablones.length; i++) {
if (/^ev-/.test(tablones[i])) {
tablonesAMostrar.push(pintaNombreEvento(tablones[i].substring(3)));
tablonesRespuesta.push(tablones[i].substring(3));
}
}
if (tablonesAMostrar.length > 0) {
html = html.replace(/#MSG:TEMA#/, tablonesAMostrar[0]);
html = html.replace(/#MSG:TEMA_NORM#/, tablonesRespuesta[0]);
if (tablonesAMostrar.length > 1) {
var htmlMasTemas = "<ul>";
for (var contTemas = 1; contTemas != tablonesAMostrar.length; contTemas++) {
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
htmlMasTemas += "<li><a href=\"/m/" + "*" + tablonesRespuesta[contTemas] + "\" title=\"Ver tema\">" + tablonesAMostrar[contTemas] + "</a></li>";
} else {
htmlMasTemas += "<li><a href=\"/" + "*" + tablonesRespuesta[contTemas] + "\" title=\"Ver tema\">" + tablonesAMostrar[contTemas] + "</a></li>";
}
}
htmlMasTemas += "</ul>";
if (typeof _desactivarEnlaces != "undefined" && _desactivarEnlaces == '1') {
htmlMasTemas = htmlMasTemas.replace(/<a [^>]*>/ig, "");
htmlMasTemas = htmlMasTemas.replace(/<\/a>/ig, "");
}
html = html.replace(/#MSG:MAS_TEMAS#/, htmlMasTemas);
} else {
html = html.replace(/#MSG:INI_MAS_TEMAS#.*?#MSG:FIN_MAS_TEMAS#/, '');
}
} else {
html = html.replace(/#MSG:INI_DIV_TEMA#.*?#MSG:FIN_DIV_TEMA#/, '');
}
} else {
html = html.replace(/#MSG:INI_DIV_TEMA#.*?#MSG:FIN_DIV_TEMA#/, '');
}
html = html.replace(/#MSG:INI_DIV_DESTACADO#.*?#MSG:FIN_DIV_DESTACADO#/g, '');
html = html.replace(/#MSG:INI_DIV_TEMA#/, '');
html = html.replace(/#MSG:FIN_DIV_TEMA#/, '');
html = html.replace(/#MSG:MAS_TEMAS#/, '');
html = html.replace(/#MSG:INI_MAS_TEMAS#/, '');
html = html.replace(/#MSG:FIN_MAS_TEMAS#/, '');
html = parseaFoto(html,hashMensaje);
if (!esFlotante) {
var htmlEnlaces = "";
var prefijoUrlBase = "";
if (typeof _quiensoy != "undefined" && (_quiensoy == "comentarios" || _quiensoy == "widget" || _quiensoy == "mensajeUnico") &&
typeof _url_servidor != "undefined") {
prefijoUrlBase = _url_servidor;
}
if (_nickname != '' && _nickname != hashMensaje.usuarioOrigen) {
htmlEnlaces += "<li><a href=\"javascript:void(0);\" onclick=\"javascript:notificarMensajeSpam('" + hashMensaje.idMsg + "');\" class='spam'>" + _ESKUPhashMsgByLang[LANGESKUP].marcar_como_spam + " </a></li>";
htmlEnlaces += "<li><a href=\"javascript:void(0);\" onclick=\"javascript:notificarMensajeInsulto('" + hashMensaje.idMsg + "');\" class='insulto'>" + _ESKUPhashMsgByLang[LANGESKUP].notificar_insulto + " </a></li>";
}
htmlEnlaces += "<li><a href=\"" + prefijoUrlBase + "/" + hashMensaje.idMsg + "\" onclick=\"javascript:ocultarEnlaces('" + hashMensaje.idMsg + "', true);\" target=\"_blank\" class='permalink'>" + _ESKUPhashMsgByLang[LANGESKUP].enlace_permanente + " </a></li>";
html = html.replace(/#MSG:ENLACES#/, htmlEnlaces);
if (hashMensaje.via && hashMensaje.via != "web") {
if (typeof _desactivarEnlaces != "undefined" && _desactivarEnlaces == '1') {
html = html.replace(/#MSG:VIA#/, 'V&iacute;a SMS');
} else {
html = html.replace(/#MSG:VIA#/, '<a href="/Estaticas/ayuda/faq.html#enviar_mensajes_desde_el_movil" class="via" title="&iquest;Qu&eacute; es esto?">V&iacute;a SMS</a>');
}
}
html = html.replace(/#MSG:VIA#/, "");
var htmlCmdResponder = "";
if (_nickname != '') {
if (hashMensaje.hilo && hashMensaje.hilo != 0 &&
typeof _hashMsgs.perfilesHilos != "undefined" &&
typeof _hashMsgs.perfilesHilos['_'+hashMensaje.hilo] != "undefined" &&
(
(_hashMsgs.perfilesHilos['_'+hashMensaje.hilo].estado != "" && 
_hashMsgs.perfilesHilos['_'+hashMensaje.hilo].estado < 0)||
(_hashMsgs.perfilesHilos['_'+hashMensaje.hilo].caducidad != "" &&
_hashMsgs.perfilesHilos['_'+hashMensaje.hilo].caducidad < tsAhora)
)
) {
htmlCmdResponder += "alert('" + _ESKUPhashMsgByLang[LANGESKUP].no_es_posible_responder_al_mensaje + "')";
} else {
var strCopiaEnTablones = "";
var idHilo = encodeURIComponent(hashMensaje.idMsg);
if (hashMensaje.hilo != 0) {
idHilo = encodeURIComponent(hashMensaje.hilo);
}
if (typeof hashMensaje.CopiaEnTablones != "undefined" &&
hashMensaje.CopiaEnTablones != 0 && hashMensaje.CopiaEnTablones.search("ev-") != -1) {
strCopiaEnTablones = hashMensaje.CopiaEnTablones;
}
htmlCmdResponder += "responderMensajeHilo('"+hashMensaje.idMsg+"', '"+idHilo+"|"+encodeURIComponent(hashMensaje.idMsg)+"', '"+strCopiaEnTablones+"')";
}
}
else {
htmlCmdResponder += "alert('" + _ESKUPhashMsgByLang[LANGESKUP].para_responder_tienes_que_identificarte + "')";
}
html = html.replace(/#MSG:ETIQUETA_INICIO_A#/g, '<a ');
html = html.replace(/#MSG:ETIQUETA_ANGULO_CIERRE_A#/g, '>');
html = html.replace(/#MSG:ETIQUETA_FIN_A#/g, '</a>' );
html = html.replace(/#MSG:CMD_RESPONDER#/g, htmlCmdResponder );
if (hashMensaje.level == 0) {
html = html.replace(/#MSG:INI_ES_PRIMER_MENSAJE#.*?#MSG:FIN_ES_PRIMER_MENSAJE#/, '');
} else {
html = html.replace(/#MSG:INI_ES_PRIMER_MENSAJE#/, '');
html = html.replace(/#MSG:FIN_ES_PRIMER_MENSAJE#/, '');
}
}
return (html);
}
var _headESKUP  = document.head || document.getElementsByTagName('head')[0];
var _styleESKUP = document.createElement('style');
var _styleBotonVideo = ".boton_video { background-image: url('http://ep00.epimg.net/iconos/v1.x/v1.0/varios/boton_video_miniatura.png'); background-position: 0 0; background-repeat: no-repeat; bottom: 15px; display: block; height: 35px; left: 15px; position: absolute; width: 65px;}\n";
_styleESKUP.type = 'text/css';
if (_styleESKUP.styleSheet){
_styleESKUP.styleSheet.cssText = _styleBotonVideo;
} else {
_styleESKUP.appendChild(document.createTextNode(_styleBotonVideo));
}
_headESKUP.appendChild(_styleESKUP);
var VideosEPET_ESKUP = {};
var callbackRedefined = false;
function VDPEP_VideoPlayer_Dinamico(idVideo, ancho, idDiv)
{
if (!callbackRedefined)
{
callbackRedefined = true;
EPET_VideoPlayer_callback = function(datos)
{
if (typeof(VideosEPET_ESKUP[datos.ref_id_video].callback) == 'function')
VideosEPET_ESKUP[datos.ref_id_video].callback(datos);
else
if (MultimediaPEP[id_pidiendoDatos].multimedia)
MultimediaPEP[id_pidiendoDatos].multimedia.cargaDatos(datos);
} 
}
var _id_video = idVideo + UN;
VideosEPET_ESKUP[_id_video] = new Object();
VideosEPET_ESKUP[_id_video].id = idVideo;
VideosEPET_ESKUP[_id_video].contenedor = idDiv;
VideosEPET_ESKUP[_id_video].ancho = ancho;
VideosEPET_ESKUP[_id_video].alto = ancho * 9 / 16;
VideosEPET_ESKUP[_id_video].callback = function(datos)
{
if ( datos.status != 100)
{
var caratula = datos.caratula ? datos.caratula : "http://ep00.epimg.net/t.gif";
VideosEPET_ESKUP[datos.ref_id_video].caratula = caratula;
VideosEPET_ESKUP[datos.ref_id_video].cargado = true;
EPET_VideoPlayerBloqueado(datos.id_video, VideosEPET_ESKUP[datos.ref_id_video].ancho, VideosEPET_ESKUP[datos.ref_id_video].alto, caratula , datos.status, VideosEPET_ESKUP[_id_video].contenedor);
}
else		
{
var caratula;
caratula = datos.caratula.indexOf("/") == 0 ? url_cache + datos.caratula : datos.caratula;
VideosEPET_ESKUP[datos.ref_id_video].caratula = caratula;
VideosEPET_ESKUP[datos.ref_id_video].cargado = true;
datosVideo = {};
datosVideo.playerEPETParams = {"mediaWidth":VideosEPET_ESKUP[datos.ref_id_video].ancho, "mediaHeight":VideosEPET_ESKUP[datos.ref_id_video].alto, "URLMediaFile":"", "URLMediaStill":caratula, "URLFirstFrame":"", "compactMode": 'false'};
datosVideo.anchoPlayer = VideosEPET_ESKUP[datos.ref_id_video].ancho;
datosVideo.altoPlayer = VideosEPET_ESKUP[datos.ref_id_video].alto;
datosVideo.idRefBrightcove = idVideo;
datosVideo.publiActiva = "true";
datosVideo.keywordsVideo = "eskup";
datosVideo.urlNoticia = "";
datosVideo.tituloVideo = "";
datosVideo.playerVideo = '2';  
var video = new EPET_Video(datosVideo, VideosEPET_ESKUP[datos.ref_id_video].contenedor);		
}
VideosEPET_ESKUP[datos.ref_id_video].callback = null;
};
pideDatosVideo(_id_video);
}
function visualizaVideo(pepid, divid)
{
var _id_video = pepid + UN;
if (typeof(VideosEPET_ESKUP[_id_video]) != "undefined")
{
var datosVideo = {};		
datosVideo.anchoPlayer = VideosEPET_ESKUP[_id_video].ancho;
datosVideo.altoPlayer = VideosEPET_ESKUP[_id_video].alto;
datosVideo.idRefBrightcove = pepid;
datosVideo.publiActiva = "true";
datosVideo.keywordsVideo = "eskup";
datosVideo.urlNoticia = "";
datosVideo.tituloVideo = "";
datosVideo.playerVideo = '2'; 		
if (VideosEPET_ESKUP[_id_video].cargado)
{
var caratula = (VideosEPET_ESKUP[_id_video].caratula.indexOf("/") == 0 ? url_cache + VideosEPET_ESKUP[_id_video].caratula : VideosEPET_ESKUP[_id_video].caratula);
var htmlCaratulaVideo = "<a class=\"vervideo\" href=\"javascript:void(0);\" onclick=\"javascript:posicionarEnVideoRepetido('" + VideosEPET_ESKUP[_id_video].contenedor + "')\"><img src=\"" + caratula + "\" width=\"" + VideosEPET_ESKUP[_id_video].ancho + "\" height=\"" + VideosEPET_ESKUP[_id_video].alto + "\" /><span class=\"boton_video\" id=\"boton_video_" + divid + "\"></span></a>";
document.getElementById(divid).innerHTML = htmlCaratulaVideo;
clearInterval(VideosEPET_ESKUP[_id_video].interval)
}
else
{
VideosEPET_ESKUP[_id_video].reintentos = 5;
VideosEPET_ESKUP[_id_video].interval = setInterval(function()
{
if (VideosEPET_ESKUP[_id_video].cargado)
{
var caratula = (VideosEPET_ESKUP[_id_video].caratula.indexOf("/") == 0 ? url_cache + VideosEPET_ESKUP[_id_video].caratula : VideosEPET_ESKUP[_id_video].caratula);
var htmlCaratulaVideo = "<a class=\"vervideo\" href=\"javascript:void(0);\" onclick=\"javascript:posicionarEnVideoRepetido('" + VideosEPET_ESKUP[_id_video].contenedor + "')\"><img src=\"" + caratula + "\" width=\"" + VideosEPET_ESKUP[_id_video].ancho + "\" height=\"" + VideosEPET_ESKUP[_id_video].alto + "\" /><span class=\"boton_video\" id=\"boton_video_" + divid + "\"></span></a>";
document.getElementById(divid).innerHTML = htmlCaratulaVideo;
clearInterval(VideosEPET_ESKUP[_id_video].interval)
}
else
if ( --VideosEPET_ESKUP[_id_video].reintentos <= 0 )
clearInterval(VideosEPET_ESKUP[_id_video].interval)
},500);
}
return;
}
var dimX = _maxAnchoFotoDefecto;
var anchoVideo = _maxAnchoFotoDefecto;
if (typeof _maxAnchoFoto != "undefined") {
anchoVideo = _maxAnchoFoto;
}
if (_maxAnchoFotoDefecto > anchoVideo) {
var porcentajeReduccion = anchoVideo/_maxAnchoFotoDefecto;
dimX = parseInt(dimX * porcentajeReduccion);
}	
VDPEP_VideoPlayer_Dinamico(pepid, dimX, divid);
}
function posicionarEnVideoRepetido(contenedor) {
if (document.getElementById(contenedor)) {
EPETUtils_posicionarScrollEnPagina( (EPETUtils_calcAbsPositionV2(document.getElementById(contenedor))[1])-50);
}
}
function pintaVideoEnMensaje(contenidoMensaje, idMensaje, enHilo) {
if (typeof _mostrarVideosEnMensaje != "undefined" && _mostrarVideosEnMensaje == false) {
return contenidoMensaje;
}
if (typeof enHilo == "undefined") {
enHilo = false;
}
var htmlVideo   = ''; 
var enlaceVideo = '';   
if (contenidoMensaje.match(/(<a [^>]*href=\"(http(s)?:\/\/(\w+\.)?(youtube\.com\/|metacafe\.com\/|dailymotion\.com\/|vimeo\.com\/|current\.com\/|video\.google\.com\/|video\.google\.es\/|vids\.myspace\.com\/|elpais\.com\/videos\/)([^\"]+))"[^>]*>[^<]+<\/a>)/i)) {
enlaceVideo = RegExp.$1;
var urlVideo    = RegExp.$2;
if (typeof _hilo != "undefined" && _hilo != "") {
htmlVideo = "<div class=\"contenedor_vervideo\"><a class=\"vervideo\" href=\"javascript:void(0);\" onclick=\"javascript:this.parentNode.className='';this.parentNode.innerHTML=obtenerHtmlVideo('" + encodeURIComponent(urlVideo) + "','" + idMensaje + "');\">" + _ESKUPhashMsgByLang[LANGESKUP].ver_video + "</a></div>";
} else {
htmlVideo = obtenerHtmlVideo(urlVideo, idMensaje, enHilo);
}
if (htmlVideo != urlVideo) {
contenidoMensaje = contenidoMensaje.replace(enlaceVideo, htmlVideo);
}
if (typeof _formatoVisualizacion != "undefined" && _formatoVisualizacion == "movil") {
contenidoMensaje += "<a class=\"vervideo\" href=\"" + urlVideo + "\">" + _ESKUPhashMsgByLang[LANGESKUP].ver_video + "</a>";
}
}
else
{
if (contenidoMensaje.match(/(<a [^>]*href=\"https?:\/\/.*\?videoid=([^\"]+)"[^>]*>[^<]+<\/a>)/i)) {
enlaceVideo = RegExp.$1
var idvideo = RegExp.$2;
var idDivVideo = "contenedorvideo_epet_" + idMensaje;
var imgCacheServer = "http://skp00.epimg.net";
if (typeof _SSL != 'undefined' && _SSL == true) {
imgCacheServer = "https://seguro.elpais.com";
}
htmlVideo = '<span style="padding: 10px 0 0 0; display: block; clear: both;"><div id="' + idDivVideo + '" style="position:relative"></div><IMG src="' + imgCacheServer + '/t.gif" onload="javascript:visualizaVideo(\'' + idvideo + '\',\'' + idDivVideo + '\')" /></span>';			
contenidoMensaje = contenidoMensaje.replace(enlaceVideo, htmlVideo);
}		
}
return contenidoMensaje;
}
function obtenerSwfVideo(urlPaginaVideo, enHilo) {
if (typeof enHilo == "undefined") {
enHilo = false;
}
var urlBaseYoutube     = "https://www.youtube.com/v/";
var urlBaseMetacafe    = "http://www.metacafe.com/fplayer/";
var urlBaseDailymotion = "https://www.dailymotion.com/swf/";
var urlBaseVimeo       = "https://vimeo.com/moogaloop.swf?clip_id=";
var urlBaseCurrent     = "http://current.com/e/";
var urlBaseGoogle      = "http://video.google.es/googleplayer.swf?docid=";
var urlBaseMySpace     = "http://mediaservices.myspace.com/services/media/embed.aspx/m=";
var urlBaseRTVE        = "http://www.rtve.es/swf/v2/RTVEPlayer.swf?assetID=";
var urlBaseElPais      = "http://www.elpais.com/comunes/multimedia/videoAS3/skins/elpaisMini/PLYVideo_elpaisMini.swf?skin=elpaisMini";
if (!/(http(s)?:\/\/(\w+\.)?(youtube\.com\/|metacafe\.com\/|dailymotion\.com\/|vimeo\.com\/|current\.com\/|video\.google\.com\/|video\.google\.es\/|vids\.myspace\.com\/|elpais\.com\/videos\/)([^\s]+))/.test(urlPaginaVideo)) {
return (urlPaginaVideo);
}
if (/https?:\/\/(\w+\.)?youtube\.com\//.test(urlPaginaVideo)) {
if (urlPaginaVideo.match(/v=([^&]+)/)) {
var idvideo = RegExp.$1;
return (urlBaseYoutube + idvideo);
}
}
if (/https?:\/\/(\w+\.)?metacafe\.com\//.test(urlPaginaVideo)) {
if (urlPaginaVideo.match(/\/watch\/([^\/]+\/[^\/]+)/)) {
var idvideo = RegExp.$1;
return (urlBaseMetacafe + idvideo + ".swf");
}
}
if (/https?:\/\/(\w+\.)?dailymotion\.com\//.test(urlPaginaVideo)) {
if (urlPaginaVideo.match(/\/video\/([^\?]+)/)) {
var idvideo = RegExp.$1;
return (urlBaseDailymotion + idvideo);
}
}
if (/https?:\/\/(\w+\.)?vimeo\.com\//.test(urlPaginaVideo)) {
if (urlPaginaVideo.match(/https?:\/\/(\w+\.)?vimeo\.com\/(\d+)/)) {
var idvideo = RegExp.$2;
return (urlBaseVimeo + idvideo);
}
}
if (/https?:\/\/(\w+\.)?current\.com\//.test(urlPaginaVideo)) {
if (urlPaginaVideo.match(/.*\/(\d+)/)) {
var idvideo = RegExp.$1;
return (urlBaseCurrent  + idvideo);
}
}
if (/https?:\/\/video\.google\.(es|com)\//.test(urlPaginaVideo)) {
if (urlPaginaVideo.match(/docid=([^&]+)/)) {
var idvideo = RegExp.$1;
return (urlBaseGoogle + idvideo);
}
}
if (/https?:\/\/vids\.myspace\.com\//.test(urlPaginaVideo)) {
if (urlPaginaVideo.match(/videoid=(\d+)/)) {
var idvideo = RegExp.$1;
return (urlBaseMySpace + idvideo + ",t=1,mt=video");
}
}
if (/https?:\/\/(\w+\.)?elpais\.com\/videos\//.test(urlPaginaVideo)) {
if (urlPaginaVideo.match(/\/(\d+[a-z]+_\d+)\/Ves\//)) {
var idvideo = RegExp.$1;
return (urlBaseElPais + "&xref=" + idvideo + ".Ves&logo=" + encodeURIComponent("http://www.elpais.com") + "%2Frecorte%2F" + idvideo + "%2FXLCO%2FVes%2F" + idvideo + ".jpg&conf="  + encodeURIComponent("http://www.elpais.com") + "%2Fcomunes%2Fmultimedia%2FvideoAS3%2Fskins%2FelpaisMini%2FconfEskup.xml");
}
}

return (urlPaginaVideo);
}
function obtenerHtmlVideo(urlPaginaVideo, idMsg, enHilo) {
if (typeof enHilo == "undefined") {
enHilo = false;
}
urlPaginaVideo = decodeURIComponent(urlPaginaVideo);
var urlSwfVideo = obtenerSwfVideo(urlPaginaVideo);
if (urlPaginaVideo == urlSwfVideo) {
return (urlPaginaVideo);
}
if (versionFlash >= 8) {
var default_params_Ex = {"menu":"false", "wmode":"transparent", "allowfullscreen":"true" };
var versionMinima_Ex = 7;
var dimX = _maxAnchoFotoDefecto;
var dimY = 350;
var anchoVideo = _maxAnchoFotoDefecto;
if (typeof _maxAnchoFoto != "undefined") {
anchoVideo = _maxAnchoFoto;
}
if (_maxAnchoFotoDefecto > anchoVideo) {
var porcentajeReduccion = anchoVideo/_maxAnchoFotoDefecto;
dimX = parseInt(dimX * porcentajeReduccion);
dimY = parseInt(dimY * porcentajeReduccion);
}
var htmlVideo = '<span style="padding: 10px 0 0 0; display: block; clear: both;">';

if (!isIE) {
var widthVideo         = dimX;
var heightVideo        = dimY;
var styleMaxWidthVideo = '';
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
widthVideo         = '97%';
styleMaxWidthVideo = ' style="max-width: ' + dimX + 'px; max-height: ' + dimY + 'px;" ';
}
htmlVideo += '<object ' + styleMaxWidthVideo + ' id="video_' + idMsg + '" data="' + urlSwfVideo + '" type="application/x-shockwave-flash" width="' + widthVideo + '" height="' + heightVideo + '"><param value="true" name="allowfullscreen"><param value="false" name="menu"><param value="transparent" name="wmode"><param name="allowScriptAccess" value="always"></object>';
} else {
htmlVideo += '<object id="video_' + idMsg + '" codeBase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab#version=7,0,0,0" classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000 width="' + dimX + '" height="' + dimY + '"><PARAM NAME="_cx" VALUE="11430"><PARAM NAME="_cy" VALUE="9260"><PARAM NAME="FlashVars" VALUE=""><PARAM NAME="Movie" VALUE="' + urlSwfVideo + '"><PARAM NAME="Src" VALUE="' + urlSwfVideo + '"><PARAM NAME="WMode" VALUE="Transparent"><PARAM NAME="Play" VALUE="0"><PARAM NAME="Loop" VALUE="-1"><PARAM NAME="Quality" VALUE="High"><PARAM NAME="SAlign" VALUE="LT"><PARAM NAME="Menu" VALUE="0"><PARAM NAME="Base" VALUE=""><PARAM NAME="AllowScriptAccess" VALUE=""><PARAM NAME="Scale" VALUE="NoScale"><PARAM NAME="DeviceFont" VALUE="0"><PARAM NAME="EmbedMovie" VALUE="0"><PARAM NAME="BGColor" VALUE=""><PARAM NAME="SWRemote" VALUE=""><PARAM NAME="MovieData" VALUE=""><PARAM NAME="SeamlessTabbing" VALUE="1"><PARAM NAME="Profile" VALUE="-1"><PARAM NAME="ProfileAddress" VALUE=""><PARAM NAME="ProfilePort" VALUE="1174431096"><PARAM NAME="AllowNetworking" VALUE="all"><PARAM NAME="AllowFullScreen" VALUE="true"><PARAM NAME="allowScriptAccess" VALUE="always"/></object>';
}
htmlVideo += '</span>';
return (htmlVideo);
} else {
return ("<br /><i>[Necesitas instalar una versi&oacute;n reciente del plugin de Flash para ver v&iacute;deos]</i><br />");
}
}
function pintaEmbedEnMensaje(contenidoMensaje, idMensaje) {
if (typeof _mostrarEmbedsEnMensaje != "undefined" && _mostrarEmbedsEnMensaje == false) {
return contenidoMensaje;
}
var hayEmbed         = false;
var jsVisualizaEmbed = ''; 
var enlaceEmbed      = '';   
var idSpanEmbed      = "imgloaderembed_" + idMensaje;
if (contenidoMensaje.match(/(<a [^>]*href=\"(http(s)?:\/\/(\w+\.)?(twitter.com\/)([^\"]+))"[^>]*>[^<]+<\/a>)/i)) {
hayEmbed         = true;
enlaceEmbed      = RegExp.$1;
var urlEmbed     = RegExp.$2;
jsVisualizaEmbed = 'visualizaTweet(\'' + urlEmbed + '\',\'' + idSpanEmbed + '\')';
} else 
if (contenidoMensaje.match(/(<a [^>]*href=\"(http(s)?:\/\/(\w+\.)?(facebook.com\/)([^\"]+))"[^>]*>[^<]+<\/a>)/i)) {
hayEmbed         = true;
enlaceEmbed      = RegExp.$1;
var urlEmbed     = RegExp.$2;
jsVisualizaEmbed = 'visualizaPostFB(\'' + urlEmbed + '\',\'' + idSpanEmbed + '\')';
} else
if (contenidoMensaje.match(/(<a [^>]*href=\"(http(s)?:\/\/(\w+\.)?(instagram.com\/)([^\"]+))"[^>]*>[^<]+<\/a>)/i)) {
hayEmbed         = true;
enlaceEmbed      = RegExp.$1;
var urlEmbed     = RegExp.$2;
jsVisualizaEmbed = 'visualizaInstagram(\'' + urlEmbed + '\',\'' + idSpanEmbed + '\')';
}
if (hayEmbed) {
var htmlEmbed = '<div class="embebido_mensaje" id="' + idSpanEmbed +  '">';
if (typeof _hilo != "undefined" && _hilo != "") {
htmlEmbed += '<a class="vervideo" href="javascript:void(0);" onclick="javascript:' + jsVisualizaEmbed + '">' + _ESKUPhashMsgByLang[LANGESKUP].ver_contenido_externo + '</a>';
} else {
var imgCacheServer = "http://skp00.epimg.net";
if (typeof _SSL != 'undefined' && _SSL == true) {
imgCacheServer = "https://seguro.elpais.com";
}
htmlEmbed += '<IMG src="' + imgCacheServer + '/t.gif" onload="javascript:' + jsVisualizaEmbed + '" />';
}
htmlEmbed += '</div>';
contenidoMensaje = contenidoMensaje.replace(enlaceEmbed, htmlEmbed);
}
return contenidoMensaje;
}
function visualizaTweet(urlTweet, idDiv) {
document.getElementById(idDiv).innerHTML = "<blockquote class=\"twitter-tweet\" lang=\"es\"><a href=\"" + urlTweet + "\"></a></blockquote>";
var twitterJS   = document.createElement("script");
twitterJS.async = true;
twitterJS.src   = "//platform.twitter.com/widgets.js";
document.getElementById(idDiv).parentNode.appendChild(twitterJS);
}
function visualizaPostFB(urlPost, idDiv) {
if (!document.getElementById('fb-root')) {
var divFBroot = document.createElement('div');
divFBroot.id  = 'fb-root';
document.getElementById(_idContenedorMsgs).parentNode.insertBefore(divFBroot, document.getElementById(_idContenedorMsgs));
var facebookJS   = document.createElement("script");
facebookJS.id    = "facebook-jssdk";
facebookJS.src   = "//connect.facebook.net/es_LA/all.js#xfbml=1";
document.getElementById(_idContenedorMsgs).parentNode.insertBefore(facebookJS, document.getElementById(_idContenedorMsgs));
}
var anchoEmbed = _maxAnchoFotoDefecto;
if (typeof _maxAnchoFoto != "undefined") {
anchoEmbed = _maxAnchoFoto;
}
document.getElementById(idDiv).innerHTML = "<div class=\"fb-post\" data-href=\"" + urlPost + "\" data-width=\"" + anchoEmbed + "\"></div>";
if (typeof FB != 'undefined' && typeof FB.XFBML != 'undefined') {
FB.XFBML.parse();
}
}
function visualizaInstagram(urlFoto, idDiv) {
var anchoEmbed = _maxAnchoFotoDefecto;
if (typeof _maxAnchoFoto != "undefined") {
anchoEmbed = _maxAnchoFoto;
}
var altoEmbed = parseInt( ((710/612)+0.1) * anchoEmbed);
if (urlFoto.substr(urlFoto.length-1) != '/') {
urlFoto += '/';
}
urlFoto = urlFoto.replace("http://", "https://");
document.getElementById(idDiv).innerHTML = "<iframe src=\"" + urlFoto + "embed/\" width=\"" + anchoEmbed + "\" height=\"" + altoEmbed + "\" frameborder=\"0\" scrolling=\"no\" allowtransparency=\"true\"></iframe>";
}
function mostrarOcultarVideoInfo(idMsg, enHilo) {
if (typeof enHilo == "undefined") {
enHilo = false;
}
capaInfo = document.getElementById("videocapainfo_" + idMsg);
if (capaInfo.style.display == "none") {
var spanBoton = document.getElementById("videoboton_" + idMsg);
var posBoton  = EPETUtils_calcAbsPositionV2(spanBoton);
var extraLeft = -2;
var extraTop  = -1;
capaInfo.style.display = "block";
capaInfo.style.left = parseInt(posBoton[0] - capaInfo.clientWidth + spanBoton.clientWidth + extraLeft) + "px";
capaInfo.style.top = parseInt(posBoton[1] - capaInfo.clientHeight + extraTop) + "px";
} else {
capaInfo.style.display = "none";
}
}
function pintaRecarga() {
var enRecarga = false;
if (_es_primera_carga || typeof _intRecarga != "undefined") {
enRecarga = true;
}
for (var i = 0; i != _hashMsgs.mensajes.length; i++) {
if (typeof _hashMsgs.mensajes[i]["hayVideo"] != "undefined" &&
_hashMsgs.mensajes[i]["hayVideo"] == 1) {
if (document.getElementById("videocapainfo_" + _hashMsgs.mensajes[i]["idMsg"])) {
if (enRecarga) {
document.getElementById("videocapainfo_" + _hashMsgs.mensajes[i]["idMsg"]).innerHTML =
"Puedes parar la recarga autom&aacute;tica de la p&aacute;gina pulsando el bot&oacute;n de pausa para que no te interrumpa mientras ves el v&iacute;deo.";
} else {
document.getElementById("videocapainfo_" + _hashMsgs.mensajes[i]["idMsg"]).innerHTML =
"Puedes reanudar la recarga pulsando el bot&oacute;n de play para que los nuevos mensajes aparezcan autom&aacute;ticamente.";
}
}
if (document.getElementById("videoboton_" + _hashMsgs.mensajes[i]["idMsg"])) {
if (enRecarga) {
document.getElementById("videoboton_" + _hashMsgs.mensajes[i]["idMsg"]).className = "botonpausa";
} else {
document.getElementById("videoboton_" + _hashMsgs.mensajes[i]["idMsg"]).className = "botonplay";
}
}
if (document.getElementById("videoenlaceexplicacion_" + _hashMsgs.mensajes[i]["idMsg"])) {
if (enRecarga) {
document.getElementById("videoenlaceexplicacion_" + _hashMsgs.mensajes[i]["idMsg"]).innerHTML =
"Pausar recarga de p&aacute;gina";
} else {
document.getElementById("videoenlaceexplicacion_" + _hashMsgs.mensajes[i]["idMsg"]).innerHTML =
"Reanudar la recarga";
}
}
}
}
}

function irAPagina(numPagina) {
if (location.search) {
location.href = location.pathname + location.search + "&p=" + numPagina;
} else {
location.href = location.pathname + "?p=" + numPagina;
}
}
function pintaPaginacion() {
if (typeof _pintarPaginacion != "undefined" && _pintarPaginacion == false) {
return(false);
}
if ( ( _numPagActual == 1) && (parseInt(_hashMsgs.numMensajes) <= _numMsgPag) ) {
return(false);
}
var html = '';
html += '<ul>';
if (_numPagActual == 1) {
html += '<li><span class="inhabilitado" title="' + _ESKUPhashMsgByLang[LANGESKUP].primera_pagina + '">&lt;&lt;</span></li>';
} else {
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
html += '<li><a href="javascript:void(0);" class="flechadoble" onClick="irAPagina(1);" title="' + _ESKUPhashMsgByLang[LANGESKUP].primera_pagina + '">&lt;&lt;</a></li>';
} else {
html += '<li><a href="javascript:void(0);" class="flechadoble" onClick="muestraMensajes(1, true);posicionarEnDivMensajes();" title="' + _ESKUPhashMsgByLang[LANGESKUP].primera_pagina + '">&lt;&lt;</a></li>';
}
}
if (_numPagActual > 1) {
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
html += '<li><a href="javascript:void(0);" onClick="irAPagina(' + (_numPagActual-1) + ');" class="flecha" title="' + _ESKUPhashMsgByLang[LANGESKUP].pagina_anterior + '">&lt;</a></li>';
} else {
html += '<li><a href="javascript:void(0);" onClick="muestraMensajes(' + (_numPagActual-1) + ', true);posicionarEnDivMensajes();" class="flecha" title="' + _ESKUPhashMsgByLang[LANGESKUP].pagina_anterior + '">&lt;</a></li>';
}
} else {
html += '<li><span class="inhabilitado" title="' + _ESKUPhashMsgByLang[LANGESKUP].pagina_anterior + '">&lt;</span></li>';
}
html += '<li class="activo">' + _numPagActual + '</li>';
if (parseInt(_numPagActual*_numMsgPag) < parseInt(_hashMsgs.numMensajes)) {
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
html += '<li><a href="javascript:void(0);" onClick="irAPagina(' + (_numPagActual+1) + ');" class="flecha" title="' + _ESKUPhashMsgByLang[LANGESKUP].pagina_siguiente + '">&gt;</a></li>';
} else {
html += '<li><a href="javascript:void(0);" onClick="muestraMensajes(' + (_numPagActual+1) + ', true);posicionarEnDivMensajes();" class="flecha" title="' + _ESKUPhashMsgByLang[LANGESKUP].pagina_siguiente + '">&gt;</a></li>';
}
} else {
html += '<li><span class="inhabilitado" title="' + _ESKUPhashMsgByLang[LANGESKUP].pagina_siguiente + '">&gt;</span></li>';
}
html += '</ul>';
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
var divContenedorPaginacion           = document.getElementById(_idContenedorPag);
divContenedorPaginacion.innerHTML     = html;
divContenedorPaginacion.style.display = '';
} else {
var divContenedorAbajo           = document.getElementById(_idContenedorPag + '_abajo');
divContenedorAbajo.innerHTML     = html;
divContenedorAbajo.style.display = '';
if (document.getElementById('div_subir_pagina')) {
var divSubir  = document.getElementById('div_subir_pagina');
divSubir.style.display = '';
}
}
}
function comprobarDispNuevosMensajes() {
var host = _hostCDNporDefecto;
if (typeof _hostCDNtsUpdate != 'undefined') {
host = _hostCDNtsUpdate;
}
var url = _urlTSUpdate;
var params = "";
params += 'c=callbackComprobarDispNuevosMensajes';
if (host.indexOf('epimg.net') == -1) {
params += "&rnd=" + Math.random();
}
if (typeof _tablon1 != "undefined" && _tablon1 != "" && _tablon1 != "2" && _tablon1 != "3") {
params += "&t=" + _tablon1;
} else if (typeof _hilo != "undefined" && _hilo != "") {
params += "&m=" + _hilo;
}
if ( (typeof _quiensoy != 'undefined') && _quiensoy == 'widget') {
params += '&u=1';
if ( (typeof _evento_actual_cerrado != 'undefined') && (_evento_actual_cerrado == 1) && !(_es_primera_carga) ){
paraEventosRecarga();
return;
}
} else if ( typeof _hilo != "undefined" && _hilo != "" ) {
if ( typeof _comentariosActivos != 'undefined' && !_comentariosActivos && !_es_primera_carga ) {
paraEventosRecarga();
}
}
ESKUP.peticionJSONP(host + url + params);
}
function callbackComprobarDispNuevosMensajes(data) {
var _hashPeticionUpdate = data;
if (typeof _hashPeticionUpdate != 'object') {
_hashPeticionUpdate = Array();
}
if (typeof _tsHoraActual != "undefined" ) {
_tsHoraActual = _hashPeticionUpdate.horaActual;
}
if (_es_primera_carga ||
typeof _hashPeticionUpdate.status == "undefined" ||
typeof _hashPeticionUpdate.ultimaActualizacion == "undefined" ||
_hashPeticionUpdate.status != 1) {
if (_hashPeticionUpdate.status == -3) {
mostrarError("Error al comprobar actualizaciones de mensajes.");
paraEventosRecarga();
}
else {
recuperarInformacionMensajes();
}
} else {
var hayNuevaInformacion = false;
if ((typeof _hashPeticionUpdate.ultimaActualizacion[_tablon1] != "undefined") &&
(parseInt(_hashPeticionUpdate.ultimaActualizacion[_tablon1]) == -1 ||
parseInt(_hashPeticionUpdate.ultimaActualizacion[_tablon1]) > parseInt(_tsTablon1))) {
hayNuevaInformacion = true;
_tsTablon1 = _hashPeticionUpdate.ultimaActualizacion[_tablon1];
} else if (typeof _hilo != "undefined" && _hilo != "") {
var strTsHilo = _hilo;
if (typeof _tipoHilo != "undefined") {
if (_tipoHilo == "o") {
strTsHilo = 'opinadores';
} else if (_tipoHilo == "2") {
strTsHilo = 't2';
} 
}
if (typeof _hashPeticionUpdate.ultimaActualizacion[strTsHilo] != "undefined" &&
parseInt(_hashPeticionUpdate.ultimaActualizacion[strTsHilo]) > parseInt(_tsTablon1)) {
hayNuevaInformacion = true;
_tsTablon1 = _hashPeticionUpdate.ultimaActualizacion[strTsHilo];
if (typeof _tipoHilo != "undefined") {
if (_tipoHilo == "o") {
_tsTablonOp    = _tsTablon1;
} else if (_tipoHilo == "2") {
_tsTablonSeg   = _tsTablon1;
} else {
_tsTablonTodos = _tsTablon1;
}
}
}
}
if (_nickname != '') {
if ( (typeof _quiensoy != 'undefined') && _quiensoy == 'web') {
var t1_evento = -1;
var mi_t2 = -1;
var mi_t3 = -1;
if (typeof _hashPeticionUpdate.ultimaActualizacion != "undefined" ) {
if ( typeof _hashPeticionUpdate.ultimaActualizacion['t2-' + _nickname] != "undefined" ) {
mi_t2 = _hashPeticionUpdate.ultimaActualizacion['t2-' + _nickname];
}
if ( typeof _hashPeticionUpdate.ultimaActualizacion['t3-' + _nickname] != "undefined" ) {
mi_t3 = _hashPeticionUpdate.ultimaActualizacion['t3-' + _nickname];
}
if ( typeof _hashPeticionUpdate.ultimaActualizacion[_tablon1] != "undefined" ) {
t1_evento = _hashPeticionUpdate.ultimaActualizacion[_tablon1];
}
}
if ( (mi_t2 == -1) && (mi_t3 == -1) ) {
var url_recarga = '';
if ( _tablon1.match("ev-") ) {
url_recarga = '/' + '*' + _tablon;
}
else {
if ( (_tablon1.match("t1-")) && !(_tablon1 == "t1-ULTIMOSMENSAJES") ) {
var id_usuario =  _tablon1.substring(3);
url_recarga = '/' + id_usuario;
}
else {
url_recarga = '/todos.html';
}
}
location.href = url_recarga;
return;
}
}
if (typeof _hashPeticionUpdate.ultimaActualizacion["t2-"+_nickname] != "undefined") {
if ((parseInt(_hashPeticionUpdate.ultimaActualizacion["t2-"+_nickname]) == -1) ||
(parseInt(_hashPeticionUpdate.ultimaActualizacion["t2-"+_nickname]) > parseInt(_tsTablon2))) {
if (parseInt(_hashPeticionUpdate.ultimaActualizacion["t2-"+_nickname]) == -1) {
if (_tablon == "2") {
hayNuevaInformacion = true;
}
} else if (_tablon != "2" && _tsTablon2 != 0) {
cambiaAspectoPestana('1', true);
_tsTablon2 = parseInt(_hashPeticionUpdate.ultimaActualizacion["t2-"+_nickname]);
}
if (_tablon == "2" && parseInt(_hashPeticionUpdate.ultimaActualizacion["t2-"+_nickname]) != -1) {
hayNuevaInformacion = true;
_tsTablon2 = parseInt(_hashPeticionUpdate.ultimaActualizacion["t2-"+_nickname]);
}
}
}
if (typeof _hashPeticionUpdate.ultimaActualizacion["t3-"+_nickname] != "undefined") {
if ((parseInt(_hashPeticionUpdate.ultimaActualizacion["t3-"+_nickname]) == -1) ||
(parseInt(_hashPeticionUpdate.ultimaActualizacion["t3-"+_nickname]) > parseInt(_tsTablon3))) {
if (parseInt(_hashPeticionUpdate.ultimaActualizacion["t3-"+_nickname]) == -1) {
if (_tablon == "3") {
hayNuevaInformacion = true;
}
} else if (_tablon != "3" && _tsTablon3 != 0) {
cambiaAspectoPestana('5', true);
_tsTablon3 = parseInt(_hashPeticionUpdate.ultimaActualizacion["t3-"+_nickname]);
}
if (_tablon == "3" && parseInt(_hashPeticionUpdate.ultimaActualizacion["t3-"+_nickname]) != -1) {
hayNuevaInformacion = true;
_tsTablon3 = parseInt(_hashPeticionUpdate.ultimaActualizacion["t3-"+_nickname]);
}
}
}
}
if (typeof _tipoHilo != "undefined") {
if (typeof _hashPeticionUpdate.ultimaActualizacion[_hilo] != "undefined" &&
parseInt(_hashPeticionUpdate.ultimaActualizacion[_hilo]) > parseInt(_tsTablonTodos)) {
if (_tipoHilo != '') {
if (document.getElementById('flecha_num_comentarios_pestana')) {
document.getElementById('flecha_num_comentarios_pestana').style.display = 'block';
document.getElementById('flecha_num_comentarios_pestana').className = 'nuevos';
}
if (document.getElementById('aviso_nuevos_comentarios_pestana')) {
document.getElementById('aviso_nuevos_comentarios_pestana').style.display = 'block';
}
}
}
if (typeof _hashPeticionUpdate.ultimaActualizacion['opinadores'] != "undefined" &&
parseInt(_hashPeticionUpdate.ultimaActualizacion['opinadores']) > parseInt(_tsTablonOp)) {
if (_tipoHilo != 'o') {
if (document.getElementById('flecha_num_comentarios_pestana_opinadores')) {
document.getElementById('flecha_num_comentarios_pestana_opinadores').style.display = 'block';
document.getElementById('flecha_num_comentarios_pestana_opinadores').className = 'nuevos';
}
if (document.getElementById('aviso_nuevos_comentarios_pestana_opinadores')) {
document.getElementById('aviso_nuevos_comentarios_pestana_opinadores').style.display = 'block';
}
}
}
if (typeof _hashPeticionUpdate.ultimaActualizacion['t2'] != "undefined" &&
parseInt(_hashPeticionUpdate.ultimaActualizacion['t2']) > parseInt(_tsTablonSeg)) {
if (_tipoHilo != '2') {
if (document.getElementById('flecha_num_comentarios_pestana_loquesigo')) {
document.getElementById('flecha_num_comentarios_pestana_loquesigo').style.display = 'block';
document.getElementById('flecha_num_comentarios_pestana_loquesigo').className = 'nuevos';
}
if (document.getElementById('aviso_nuevos_comentarios_pestana_loquesigo')) {
document.getElementById('aviso_nuevos_comentarios_pestana_loquesigo').style.display = 'block';
}
}
}
}
if (hayNuevaInformacion) {
if (_activarRecargaAutomatica != 'undefined' && _activarRecargaAutomatica == true) {
f_forzar_recarga_mensajes();
} else if (document.getElementById(_idContenedorMsgs).firstChild &&
document.getElementById(_idContenedorMsgs).firstChild.id == "provisional") {
if (typeof _quiensoy != "undefined" && (_quiensoy == "comentarios" || _quiensoy == "mensajeUnico")  &&
typeof _tipoHilo != "undefined" && _tipoHilo == "o" &&
typeof _soyOpinador != "undefined" && _soyOpinador == true) {
f_forzar_recarga_mensajes();
} else {
_hayInformacionPendiente = true;
if (document.getElementById(_idContenedorRefr)) {
document.getElementById(_idContenedorRefr).style.display = 'block';
} 
}
} else {
_hayInformacionPendiente = true;
if (document.getElementById(_idContenedorRefr)) {
document.getElementById(_idContenedorRefr).style.display = 'block';
} 
}
}
}
}
function recuperarInformacionMensajes() {
var url = _urlOuteskup;
if ( (typeof _quiensoy != 'undefined') && (_quiensoy == 'widget' || _quiensoy == 'movil') ) {
url = _urlOuteskupSimple;
}
if ( (typeof _tablon1 != 'undefined') && (_tablon1 != '') ) {
if ( (_tablon1.match("ev-")) || (_tablon1.match("t1-")) ) {
url = _urlOuteskupSimple;
}
}
else if ( (typeof _hilo != 'undefined') && (_hilo != '') ) {
url = _urlOuteskupSimple;
}else if ( (typeof _idMsg != 'undefined') && (_idMsg != '') ) {
url = _urlOuteskupSimple;
} else {
return false;
}
var params = "rnd=" + Math.random() + "&";
if (typeof _tablon1 != "undefined" && _tablon1 != "") {
params += "t=" + _tablon1 + "&p=" + _numPagCache + "&nummsg=" + _numMsgCache;
} else if ( typeof _hilo != 'undefined' && _hilo != '' ) {
params += "th=2&msg=" + _hilo + "&p=" + _numPagCache + "&nummsg=" + _numMsgCache;
if (typeof _tipoHilo != "undefined" && _tipoHilo != "") {
params += "&tt=" + _tipoHilo;
}
} else if ( (typeof _idMsg != 'undefined') && (_idMsg != '') ) {
params +="msg="+_idMsg;
} else {
params += "t=info";
}
if (_ultimaRecargaServidor > 0) {
params += "&ts=" + parseInt(_tsTablon1);
}
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status == 200) {
var data = httpRequest.responseText;
var _hashPeticion = Array();
try {
eval("_hashPeticion = " + data);
} catch(e) {
_hashPeticion = Array();
mostrarError(_ESKUPhashMsgByLang[LANGESKUP].no_es_posible_recuperar_los_mensajes);
}

if (_nickname != '') {
if (typeof _hashPeticion.updated != "undefined") {
if ((typeof _hashPeticion.updated["t2-"+_nickname] != "undefined") &&
(parseInt(_hashPeticion.updated["t2-"+_nickname]) > parseInt(_tsTablon2)) &&
_tablon != "2" && _tsTablon2 != 0) {
cambiaAspectoPestana('1', true);
}
if ((typeof _hashPeticion.updated["t3-"+_nickname] != "undefined") &&
(parseInt(_hashPeticion.updated["t3-"+_nickname]) > parseInt(_tsTablon3)) &&
_tablon != "3" && _tsTablon3 != 0) {
cambiaAspectoPestana('5', true);
}
if (_ultimaRecargaServidor == 0 &&
typeof _hashPeticion.ultimaVisita != "undefined") {
if (typeof _hashPeticion.ultimaVisita["2"]        != "undefined" &&
typeof _hashPeticion.updated["t2-"+_nickname] != "undefined" &&
_hashPeticion.updated["t2-"+_nickname] > _hashPeticion.ultimaVisita["2"] &&
_tablon != "2") {
cambiaAspectoPestana('1', true);
}
if (typeof _hashPeticion.ultimaVisita["3"]        != "undefined" &&
typeof _hashPeticion.updated["t3-"+_nickname] != "undefined" &&
_hashPeticion.updated["t3-"+_nickname] > _hashPeticion.ultimaVisita["3"] &&
_tablon != "3") {
cambiaAspectoPestana('5', true);
}
}
}
}
if ((typeof _hashPeticion.mensajes == "undefined" || _hashPeticion.mensajes.length <= 0) && _ultimaRecargaServidor == 0) {
if (typeof _tablon1 != "undefined" && _tablon1 != "") {

mostrarError(_ESKUPhashMsgByLang[LANGESKUP].no_hay_mensajes_disponibles);
}
}
if (typeof _tsHoraActual != "undefined") {
_ultimaRecargaServidor = _tsHoraActual;
}
else {
if (typeof _hashPeticion.horaActual != "undefined") {
_ultimaRecargaServidor = _hashPeticion.horaActual;
}
}
if (_es_primera_carga) {
_tsTablon1 = _ultimaRecargaServidor;
_tsTablon2 = _ultimaRecargaServidor;
_tsTablon3 = _ultimaRecargaServidor;
if (typeof _hilo != "undefined" && _hilo != "") {

_tsTablonOp    = _ultimaRecargaServidor;
_tsTablonSeg   = _ultimaRecargaServidor;
_tsTablonTodos = _ultimaRecargaServidor;
}
}
if (typeof _hashPeticion.mensajes != "undefined" && _hashPeticion.mensajes.length >= 0) {
if (typeof _hashMsgs.mensajes != "undefined") {
for (var i = 0; i != _hashMsgs.mensajes.length; i++) {
if (document.getElementById("divform_"+_hashMsgs.mensajes[i]["idMsg"])) {
return(false);
}
}
}
_hashMsgs = _hashPeticion;
if (typeof _hashMsgs.mensajes[0] != "undefined") {
if (typeof _hashMsgs.orden == "undefined" || _hashMsgs.orden != 1) {
if (_hashMsgs.mensajes[0].tsMensaje > _ultimaRecargaServidor) {
_tsTablon1 = _hashMsgs.mensajes[0].tsMensaje;
_ultimaRecargaServidor = _tsTablon1;
}
if ( typeof _hilo != 'undefined' && _hilo != '' ) {
_tsTablon1 = _ultimaRecargaServidor;
_tsTablonOp    = _ultimaRecargaServidor;
_tsTablonSeg   = _ultimaRecargaServidor;
_tsTablonTodos = _ultimaRecargaServidor;

}
}
}
muestraMensajes(_numPagActual);
}
}
else {
mostrarError(_ESKUPhashMsgByLang[LANGESKUP].no_es_posible_recuperar_los_mensajes);
}
if (_es_primera_carga == 1)  {
_es_primera_carga = 0;
}
if ( typeof _hilo != 'undefined' && _hilo != '' ) {
comprobarHiloAbierto();
}
}, url + "&" + params);
}
function recuperarInformacionMensajesHilo() {
var url    = _urlOuteskup;
if ( (typeof _quiensoy != 'undefined') && (_quiensoy == 'widget' || _quiensoy == 'movil') ) {
url = _urlOuteskupSimple;
}
var params = "th=1&msg=" + _idHilo + "&rnd=" + Math.random();
if (_ultimaRecargaServidor > 0) {
params += "&ts=" + parseInt(_ultimaRecargaServidor);
}
if (_idHilo != "") {
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status == 200) {
var data = httpRequest.responseText;
var _hashPeticion = Array();
try {
eval("_hashPeticion = " + data);
} catch(e) {
_hashPeticion = Array();
}
if (typeof _hashPeticion.horaActual != "undefined") {
_ultimaRecargaServidor = _hashPeticion.horaActual;
}
if (typeof _hashPeticion.mensajes != "undefined" &&_hashPeticion.mensajes.length > 0) {
if (typeof _hashMsgs.mensajes != "undefined") {
for (var i = 0; i != _hashMsgs.mensajes.length; i++) {
if (document.getElementById("divform_"+_hashMsgs.mensajes[i]["idMsg"])) {
return(false);
}
}
}
_hashMsgs = _hashPeticion;
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
muestraMensajesHilo_movil();
} else {
muestraMensajesHilo();
}
}
}
}, url + "&" + params);
}
}
function lanzaEventosRecarga() {
if (window.attachEvent) {
window.attachEvent('onfocus', recargaRapida);
window.attachEvent('onblur', recargaLenta);
} else if (window.addEventListener) {
window.addEventListener('focus', recargaRapida, false);
window.addEventListener('blur', recargaLenta, false);
} else if (document.addEventListener) {
document.addEventListener('focus', recargaRapida, false);
document.addEventListener('blur', recargaLenta, false);
}
}
function paraEventosRecarga() {
if (window.detachEvent) {
window.detachEvent('onfocus', recargaRapida);
window.detachEvent('onblur', recargaLenta);
} else if (window.removeEventListener) {
window.removeEventListener('focus', recargaRapida, false);
window.removeEventListener('blur', recargaLenta, false);
} else if (document.addEventListener) {
document.removeEventListener('focus', recargaRapida, false);
document.removeEventListener('blur', recargaLenta, false);
}
clearInterval(_intRecarga);
_intRecarga = undefined;
}
function f_lanza_eventos_carga_mensajes() {

lanzaEventosRecarga();
if (_ultimaRecargaProteccion == 0) {
recargaRapida();
}
recarga();
}
function recarga() {
var f = new Date();
if ((_ultimaRecargaProteccion+(_segsMinEntreRecargas*1000))>f.getTime()) {
return(false);
}
comprobarDispNuevosMensajes();
_ultimaRecargaProteccion = f.getTime();
}
function recargaRapida() {
recarga();
if (typeof _intRecarga != "undefined") {
clearInterval(_intRecarga);
}
_intRecarga = setInterval(recarga, _segsRecRapida * 1000);
}
function recargaLenta() {
if (typeof _intRecarga != "undefined") {
clearInterval(_intRecarga);
}
_intRecarga = setInterval(recarga, _segsRecLenta * 1000);
}
function recargaHilo() {
var f = new Date();
if ((_ultimaRecargaProteccion+(_segsMinEntreRecargas*1000))>f.getTime()) {
return(false);
}
recuperarInformacionMensajesHilo();
if (_tsHilo == 0) {
_tsHilo = _ultimaRecargaServidor;
}
_ultimaRecargaProteccion = f.getTime();
}
function recargaRapidaHilo() {
recargaHilo();
if (typeof _intRecarga != "undefined") {
clearInterval(_intRecarga);
}
_intRecarga = setInterval(recargaHilo, _segsRecRapida * 1000);
}
function recargaLentaHilo() {
if (typeof _intRecarga != "undefined") {
clearInterval(_intRecarga);
}
_intRecarga = setInterval(recargaHilo, _segsRecLenta * 1000);
}
function cambiaAspectoPestana(idPestana, hayNuevo) {
var idEnlacePestana = "enlace_pestana_" + idPestana;
if (document.getElementById(idEnlacePestana)) {
var divEnlacePestana = document.getElementById(idEnlacePestana);
if (hayNuevo) {
divEnlacePestana.className = "nuevosmensajes";
divEnlacePestana.title     = _ESKUPhashMsgByLang[LANGESKUP].tienes_nuevos_mensajes;
} else {
divEnlacePestana.className = "";
divEnlacePestana.title     = "";
}
}
}
function pintaHtmlNumComentarios() {
if (typeof _hashMsgs != "undefined" && typeof _hashMsgs.numMensajes != "undefined" &&
typeof _idNumMensajesHilo != "undefined" && document.getElementById(_idNumMensajesHilo) != "undefined") {
document.getElementById(_idNumMensajesHilo).style.display = "block";
document.getElementById(_idNumMensajesHilo).innerHTML = _hashMsgs.numMensajes + " comentarios";
}
}
function gestionarHtmlHilo(estado) {
pintaHtmlNumComentarios();
if (estado == "activo") {
if (typeof document.getElementById(_idContenedorEscribeMsg) != "undefined" &&
document.getElementById(_idContenedorEscribeMsg) != null) {
document.getElementById(_idContenedorEscribeMsg).style.display = "block";
}
if (typeof document.getElementById(_idContenedorHiloCerrado) != "undefined") {
document.getElementById(_idContenedorHiloCerrado).style.display = "none";
}
_comentariosActivos = true;
} else {
if (typeof document.getElementById(_idContenedorEscribeMsg) != "undefined" &&
document.getElementById(_idContenedorEscribeMsg) != null) {
document.getElementById(_idContenedorEscribeMsg).style.display = "none";
}
if (typeof document.getElementById(_idContenedorHiloCerrado) != "undefined") {
document.getElementById(_idContenedorHiloCerrado).style.display = "block";
}
_comentariosActivos = false;
}   
}
function comprobarHiloAbierto() {
if (typeof _hashMsgs.perfilesHilos != "undefined" &&
typeof _hashMsgs.perfilesHilos['_'+_hilo] != "undefined" &&
(typeof _hashMsgs.perfilesHilos['_'+_hilo].estado == "undefined" ||
_hashMsgs.perfilesHilos['_'+_hilo].estado == 0) &&
(typeof _hashMsgs.perfilesHilos['_'+_hilo].caducidad == "undefined" ||
_hashMsgs.perfilesHilos['_'+_hilo].caducidad == "" ||
_hashMsgs.perfilesHilos['_'+_hilo].caducidad > _ultimaRecargaServidor)
) {
gestionarHtmlHilo("activo");
} else if (typeof _hashMsgs.perfilesHilos == "undefined") {
gestionarHtmlHilo("activo");
} else {
gestionarHtmlHilo("cerrado");
}
}
function esHiloPremoderado(idHilo) {
var hiloPremoderado = false;
if (typeof idHilo != "undefined" &&
typeof _hashMsgs != "undefined" &&
typeof _hashMsgs.perfilesHilos != "undefined" &&
typeof _hashMsgs.perfilesHilos['_'+idHilo] != "undefined" &&
typeof _hashMsgs.perfilesHilos['_'+idHilo].premoderacion != "undefined" &&
_hashMsgs.perfilesHilos['_'+idHilo].premoderacion == 1) {
hiloPremoderado = true;
}
return hiloPremoderado;
}
function esEventoPremoderado(idEvento) {
var eventoPremoderado = false;
if (typeof _hashMsgs != "undefined" &&
typeof _hashMsgs.perfilesEventos != "undefined" &&
typeof _hashMsgs.perfilesEventos[idEvento] != "undefined" &&
typeof _hashMsgs.perfilesEventos[idEvento].premoderacion != "undefined" &&
_hashMsgs.perfilesEventos[idEvento].premoderacion == 1) {
eventoPremoderado = true;
}
return eventoPremoderado;
}
function marcarMensajePendienteModeracion(idMensaje) {
for (var i = 0; i != _hashMsgs.mensajes.length; i++) {
if (_hashMsgs.mensajes[i].idMsg == idMensaje) {
_hashMsgs.mensajes[i].moderacion = 'pte';
}
}
}
function esMensajePendienteModeracion(idMensaje) {
for (var i = 0; i != _hashMsgs.mensajes.length; i++) {
if (_hashMsgs.mensajes[i].idMsg == idMensaje) {
if (_hashMsgs.mensajes[i].moderacion == 'pte') {
return true;
} else {
return false;
}
}
}
return false;
}
function mostrarOcultarMasTemas(idMensaje, estilo) {
var capaTemas = document.getElementById("capatemas_"+idMensaje);
var iconoMasTemas = document.getElementById("botondesplegartemas_"+idMensaje);
if (capaTemas.style.display == "none") {
capaTemas.style.display = "block";
iconoMasTemas.innerHTML = '-';
iconoMasTemas.className = estilo + ' abierto';
} else {
capaTemas.style.display = "none";
iconoMasTemas.innerHTML = '+';
iconoMasTemas.className = estilo;
}
}
function mostrarTodosDestinatarios(idCajaDestinatarios) {
if (!document.getElementById(idCajaDestinatarios)) {
return false;
}
var caja_destinarios_ocultos = document.getElementById(idCajaDestinatarios);
for (var contChild = 0; contChild != caja_destinarios_ocultos.childNodes.length; contChild++) {
if (caja_destinarios_ocultos.childNodes[contChild].nodeName == 'P') {
caja_destinarios_ocultos.childNodes[contChild].style.display = 'block';
}
}
if (document.getElementById(idCajaDestinatarios + '_desplegar')) {
document.getElementById(idCajaDestinatarios + '_desplegar').style.display = 'none';
}
if (document.getElementById(idCajaDestinatarios + '_ocultar')) {
document.getElementById(idCajaDestinatarios + '_ocultar').style.display = '';
}
else {
caja_destinarios_ocultos.innerHTML += '<p class="vertodos cerrar" id="' + idCajaDestinatarios + '_ocultar"><a href="javascript:void(0);" title="Ocultar los destinatarios" onclick="javascript:ocultarDestinatarios(\'' + idCajaDestinatarios + '\');"></a></p>';
}

}
function ocultarDestinatarios(idUlDestinatarios) {
if (!document.getElementById(idUlDestinatarios)) {
return false;
}
var UlDestinatarios = document.getElementById(idUlDestinatarios);
var contLI = 0;
for (var contChild = 0; contChild != UlDestinatarios.childNodes.length; contChild++) {
if (UlDestinatarios.childNodes[contChild].nodeName == "P") {
if (_numUsuariosAMostrar != 0 && contLI >= _numUsuariosAMostrar) {
UlDestinatarios.childNodes[contChild].style.display = "none";
}
contLI++;
}
}
if (document.getElementById(idUlDestinatarios + "_ocultar")) {
document.getElementById(idUlDestinatarios + "_ocultar").style.display = 'none';
document.getElementById(idUlDestinatarios + "_desplegar").style.display = '';
}
}
function borrarMensaje(idMensaje, tablon) {
ocultarEnlaces(idMensaje, true);
if (confirm(_ESKUPhashMsgByLang[LANGESKUP].estas_seguro_de_borrar_el_mensaje)) {
var params = "c=delete&x=" + encodeURIComponent(idMensaje);
if (typeof tablon != "undefined") {
params += "&t=" + tablon;
}
params += "&s=" + _s;
params += "&f=json";
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status == 200) {
var data = httpRequest.responseText;
eval("hashResultado = " + data);
if ( hashResultado.status != 'ok') {
alert(_ESKUPhashMsgByLang[LANGESKUP].error_al_borrar_el_mensaje);
}
else {
if (document.getElementById("mensaje_"+idMensaje)) { 
if (document.getElementById("mensaje_"+idMensaje).parentNode.className == "menombran" ||
document.getElementById("mensaje_"+idMensaje).parentNode.className == "mio") {
document.getElementById(_idContenedorMsgs).removeChild(document.getElementById("mensaje_"+idMensaje).parentNode);
} else {
document.getElementById(_idContenedorMsgs).removeChild(document.getElementById("mensaje_"+idMensaje));
}
} else {
alert("Mensaje borrado correctamente");
}
}
} else {
alert(_ESKUPhashMsgByLang[LANGESKUP].error_al_borrar_el_mensaje);
}
}, _urlIneskup + "?" + params);
}
}
function crearFormularioMensaje(idMensaje) {
var divTplForm = document.getElementById(_idContenedorForm);
var htmlForm = divTplForm.innerHTML.replace(/#ID#/g, idMensaje);
htmlForm = htmlForm.replace(/#NUMERO_CARACTERES_MENSAJE#/g, _numero_maximo_caracteres_mensaje);
var divMsgForm = document.createElement('DIV');
divMsgForm.id = 'divform_' + idMensaje;
divMsgForm.innerHTML = htmlForm;
return divMsgForm;
}
function crearIframeTargetFormulario(idMensaje, accion, enHilo) {
if (typeof enHilo == "undefined") {
enHilo = false;
}
var divIFrameTarget = document.createElement('DIV');
divIFrameTarget.id = "diviframe_"+idMensaje;
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
divIFrameTarget.innerHTML = "<iframe class='esconder' width='1' height='1' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='about:blank' id='iframe_"+idMensaje+"' name='iframe_"+idMensaje+"' onLoad='comprobarPost(\""+idMensaje+"\", \"" + accion + "\")'></iframe>";
} else {
if (!enHilo) {
if (accion == 'privadoperfil') {
divIFrameTarget.innerHTML = "<iframe style='display:none' src='about:blank' id='iframe_"+idMensaje+"' name='iframe_"+idMensaje+"' onLoad='comprobarPost(\""+idMensaje+"\", \"" + accion + "\")'></iframe>";
}
else {
divIFrameTarget.innerHTML = "<iframe style='display:none' src='about:blank' id='iframe_"+idMensaje+"' name='iframe_"+idMensaje+"' onLoad='comprobarPost(\""+idMensaje+"\", \"" + accion + "\")'></iframe>";
}
} else {
divIFrameTarget.innerHTML = "<iframe style='display:none' src='about:blank' id='iframe_"+idMensaje+"' name='iframe_"+idMensaje+"' onLoad='comprobarPostHilo(\""+idMensaje+"\", \"" + accion + "\")'></iframe>";
}
}
document.body.appendChild(divIFrameTarget);
}
function crearMensaje(idMensaje, destinoMensaje) {
if (typeof destinoMensaje == "undefined") {
destinoMensaje = '';
}

var divBotonResponder = document.getElementById("linkresponder_" + idMensaje);
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
divBotonResponder.innerHTML = _ESKUPhashMsgByLang[LANGESKUP].cancelar;
} else {
divBotonResponder.className = 'boton responder activo';
}
if (document.getElementById("tipos_" + idMensaje)) {
f_cerrar_panel("tipos_" + idMensaje);
}
var divContenedorFormularioMensaje = document.getElementById("contenedor_formulario_" + idMensaje);
if (divContenedorFormularioMensaje.childNodes.length != 0) {
if (document.getElementById("linkresponder_" + idMensaje).innerHTML == _ESKUPhashMsgByLang[LANGESKUP].cancelar) {
document.getElementById("linkresponder_" + idMensaje).innerHTML = _ESKUPhashMsgByLang[LANGESKUP].responder;
divContenedorFormularioMensaje.innerHTML = "";
return;
}
}
else {
var divMsgForm = crearFormularioMensaje(idMensaje);
divContenedorFormularioMensaje.appendChild(divMsgForm);
}
f_muestra_servicios_externos(idMensaje, false);
if (document.getElementById("id_recipientes_" + idMensaje)) {
var divDestinatarios = document.getElementById("id_recipientes_" + idMensaje);
var listaDestinatarios = null;
var numeroDestinarios = 0;
if (destinoMensaje != '') {
listaDestinatarios = destinoMensaje.split('|');
numeroDestinarios = listaDestinatarios.length;
var html = '<p>Para:</p>';
html = html + '<ul id="id_lista_usuarios_privado_' + idMensaje + '">';
for (i=0; i<numeroDestinarios; i++) {
var nombre_usuario = listaDestinatarios[i];
var idElemento = nombre_usuario + '_' + idMensaje;
html = html + '<li id="' + nombre_usuario + '"><a class="" id="li_' + idElemento + '" href="javascript:void(0);" onclick="javascript:f_marca_elemento(\'' + idElemento + '\', \'' + nombre_usuario + '\', \'eliminado\',  \'\');" title="Quitar de la lista">' + nombre_usuario + '</a></li>';
}
html = html + '</ul>';
html = html + '<div class="rompedor"></div>';
var divEleccionDestinatarios = document.getElementById("id_recipientes_" + idMensaje);
divEleccionDestinatarios.innerHTML = html;
}
if (numeroDestinarios > 1) {
divDestinatarios.style.display = '';
}
else {
divDestinatarios.style.display = 'none';
}
}
document.getElementById("c_" + idMensaje).value = 'add';
document.getElementById("t_" + idMensaje).value = destinoMensaje;
if (document.getElementById("diviframe_"+idMensaje)) {
document.body.removeChild(document.getElementById("diviframe_"+idMensaje));
}
if (typeof _texto_inicializacion_textarea_responder != "undefined" &&
document.getElementById(_texto_inicializacion_textarea_responder)) {
f_inicia_caja_escribir("m_" + idMensaje, _texto_inicializacion_textarea_responder, 'cajareposo', 'secundario');
}
var divBotonPublicar = document.getElementById("submitresponder_" + idMensaje);
divBotonPublicar.innerHTML = _ESKUPhashMsgByLang[LANGESKUP].responder;
crearIframeTargetFormulario(idMensaje, 'add');
document.getElementById("form_" + idMensaje).target = "iframe_"+idMensaje;
divContenedorFormularioMensaje.style.display = '';
}
function preEditarMensaje(idMensaje, contenido) {
ocultarEnlaces(idMensaje, true);
var pteModeracion = esMensajePendienteModeracion(idMensaje);
var divContenedorFormularioMensaje = document.getElementById("contenedor_formulario_" + idMensaje);
var divAvisoModeracion = document.createElement('div');
divAvisoModeracion.className = 'editar_mensaje_moderado';
if (pteModeracion) {
divAvisoModeracion.innerHTML = '<p>'+_ESKUPhashMsgByLang[LANGESKUP].no_editar+'</p>';
} else {
divAvisoModeracion.innerHTML = '<p>'+_ESKUPhashMsgByLang[LANGESKUP].edicion_mensaje+'</p>';
}
var pBotonesModeracion = document.createElement('p');
pBotonesModeracion.className = 'botones_aceptar_moderacion';
if (!pteModeracion) {
var botonContinuar = document.createElement('a');
botonContinuar.href = 'javascript:void(0);';
botonContinuar.className = 'boton_aceptar_moderacion';
botonContinuar.innerHTML = _ESKUPhashMsgByLang[LANGESKUP].continuar;
botonContinuar.onclick   = function() {
document.getElementById('contenedor_formulario_' + idMensaje).innerHTML = '';
editarMensaje(idMensaje, contenido);
}
pBotonesModeracion.appendChild(botonContinuar);
}
var botonCancelar = document.createElement('a');
botonCancelar.href = 'javascript:void(0);';
botonCancelar.className = 'boton_cancelar_moderacion';
botonCancelar.innerHTML = _ESKUPhashMsgByLang[LANGESKUP].cancelar;
botonCancelar.onclick = function() {
document.getElementById('contenedor_formulario_' + idMensaje).innerHTML     = '';
document.getElementById('contenedor_formulario_' + idMensaje).style.display = 'none';
}
pBotonesModeracion.appendChild(botonCancelar);
divAvisoModeracion.appendChild(pBotonesModeracion);
divContenedorFormularioMensaje.innerHTML     = '';
divContenedorFormularioMensaje.appendChild(divAvisoModeracion);
divContenedorFormularioMensaje.style.display = '';
}
function editarMensaje(idMensaje, contenido) {
ocultarEnlaces(idMensaje, true);
var divContenedorFormularioMensaje = document.getElementById("contenedor_formulario_" + idMensaje);
if (divContenedorFormularioMensaje.childNodes.length == 0) {
var divMsgForm = crearFormularioMensaje(idMensaje);
divContenedorFormularioMensaje.appendChild(divMsgForm);
}
if (document.getElementById("boton_adjuntar_"+idMensaje)) {
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
document.getElementById("boton_adjuntar_"+idMensaje).innerHTML = "Imagen";
}
else {
document.getElementById("boton_adjuntar_"+idMensaje).innerHTML = "Imagen";
}
}
if (document.getElementById("submitresponder_"+idMensaje)) {
document.getElementById("submitresponder_"+idMensaje).innerHTML = "Actualizar";
}
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
document.getElementById("linkresponder_"+idMensaje).innerHTML = _ESKUPhashMsgByLang[LANGESKUP].cancelar;
}
document.getElementById("c_" + idMensaje).value = "edit";
document.getElementById("x_" + idMensaje).value = idMensaje;
if (document.getElementById("id_recipientes_" + idMensaje)) {
document.getElementById("id_recipientes_" + idMensaje).style.display = 'none';
}
contenido = decodeURIComponent(contenido);
contenido = contenido.replace(/<a.*?>/g, '');
contenido = contenido.replace(/<\/a>/g, '');
contenido = contenido.replace(/&lt;/g, '<');
contenido = contenido.replace(/&gt;/g, '>');
contenido = contenido.replace(/&#39;/g, '\'');
contenido = contenido.replace(/&amp;/g, '&');
f_inicia_caja_escribir("m_" + idMensaje, contenido, 'cajaactiva', 'secundario activo');
f_tecleando('', 'm_' + idMensaje, 'etiqueta_numero_maximo_caracteres_' + idMensaje);
if (document.getElementById("diviframe_"+idMensaje)) {
document.body.removeChild(document.getElementById("diviframe_"+idMensaje));
}
crearIframeTargetFormulario(idMensaje, 'edit');
document.getElementById("form_" + idMensaje).target = "iframe_"+idMensaje;
f_mostrar_ocultar_panel_eventos_donde_publicar(idMensaje, false);
if (document.getElementById('boton_borrar_adjunto_' + idMensaje)) {
var tieneImagen = false;
for (var i = 0; i != _hashMsgs.numMensajes; i++) {
if (_hashMsgs.mensajes[i].idMsg == idMensaje) {
if (_hashMsgs.mensajes[i].cont_adicional != '0') {
tieneImagen = true;
}
break;
}
}
if (tieneImagen) {
document.getElementById('boton_borrar_adjunto_' + idMensaje).style.display = '';
}
}
if (document.getElementById('rp_' + idMensaje)) {
document.getElementById('rp_' + idMensaje).value = 0;
}
f_muestra_servicios_externos(idMensaje, false);
f_mostrar_ocultar_panel_avisos_responder(idMensaje, false);
divContenedorFormularioMensaje.style.display = '';
}
function reenviarMensaje(idMensaje, usuarioOrigen, strCopiaEnTablones, contenido) {
ocultarEnlaces(idMensaje, true);
var divContenedorFormularioMensaje = document.getElementById("contenedor_formulario_" + idMensaje);
if (divContenedorFormularioMensaje.childNodes.length == 0) {
var divMsgForm = crearFormularioMensaje(idMensaje);
divContenedorFormularioMensaje.appendChild(divMsgForm);
}
if (document.getElementById("boton_adjuntar_"+idMensaje)) {
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
document.getElementById("boton_adjuntar_"+idMensaje).innerHTML = "Imagen";
}
else {
document.getElementById("boton_adjuntar_"+idMensaje).innerHTML = "Imagen";
}
}
if (document.getElementById("submitresponder_"+idMensaje)) {
document.getElementById("submitresponder_"+idMensaje).innerHTML    = "Reenviar";
}
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
document.getElementById("linkresponder_"+idMensaje).innerHTML = _ESKUPhashMsgByLang[LANGESKUP].cancelar;
}
document.getElementById("c_" + idMensaje).value = "add";
document.getElementById("x_" + idMensaje).value = idMensaje;
if (document.getElementById("id_recipientes_" + idMensaje)) {
document.getElementById("id_recipientes_" + idMensaje).style.display = 'none';
}
contenido = decodeURIComponent(contenido);
contenido = contenido.replace(/<a.*?>/g, '');
contenido = contenido.replace(/<\/a>/g, '');
contenido = contenido.replace(/&lt;/g, '<');
contenido = contenido.replace(/&gt;/g, '>');
contenido = contenido.replace(/&#39;/g, '\'');
contenido = contenido.replace(/&amp;/g, '&');
contenido = "fwd @" + usuarioOrigen + ": " + contenido;
f_inicia_caja_escribir("m_" + idMensaje, contenido, 'cajaactiva', 'secundario activo');
f_tecleando('', 'm_' + idMensaje, 'etiqueta_numero_maximo_caracteres_' + idMensaje)
if (document.getElementById("tm_" + idMensaje)) {
document.getElementById("tm_" + idMensaje).value = strCopiaEnTablones;
}
if (document.getElementById("diviframe_"+idMensaje)) {
document.body.removeChild(document.getElementById("diviframe_"+idMensaje));
}
crearIframeTargetFormulario(idMensaje, 'add');
document.getElementById("form_" + idMensaje).target = "iframe_"+idMensaje;
f_mostrar_ocultar_panel_eventos_donde_publicar(idMensaje, true);
if (document.getElementById('boton_borrar_adjunto_' + idMensaje)) {
document.getElementById('boton_borrar_adjunto_' + idMensaje).style.display = 'none';
}
if (document.getElementById('rp_' + idMensaje)) {
document.getElementById('rp_' + idMensaje).value = 0;
}
f_muestra_servicios_externos(idMensaje, true);
f_mostrar_ocultar_panel_avisos_responder(idMensaje, false);
divContenedorFormularioMensaje.style.display = '';
}
function responderMensajeHilo(idMensaje, idsHilo, strCopiaEnTablones) {
cerrarMensajesFlotantes();
var enHilo = true;
responderMensaje(idMensaje, idsHilo, strCopiaEnTablones, enHilo, 1);
}
function f_ocultar_formulario_mensaje(idMensaje) {
var divLinkSegundo = document.getElementById('linksegundo_' + idMensaje);
if (divLinkSegundo) {
divLinkSegundo.className = 'boton opciones';
}
var divTipos = document.getElementById("tipos_"+idMensaje);
if (divTipos) {
divTipos.style.display = 'none';
}
var divBotonResponder = document.getElementById('linkresponder_' + idMensaje);
if (divBotonResponder) {
divBotonResponder.className = 'boton responder';
}
var divBotonPrivado = document.getElementById('boton_privado_' + idMensaje);
if (divBotonPrivado) {
divBotonPrivado.className = 'boton privado';
}
var divContenedorFormularioMensaje = document.getElementById('contenedor_formulario_' + idMensaje);
if (divContenedorFormularioMensaje) {
if (divContenedorFormularioMensaje.childNodes.length != 0) {
divContenedorFormularioMensaje.innerHTML = '';
divContenedorFormularioMensaje.style.display = 'none';
}
}
cerrarMensajesFlotantes();
}
function responderMensaje(idMensaje, idsHilo, strCopiaEnTablones, enHilo) {
if (typeof enHilo == "undefined") {
enHilo = false;
}
if (document.getElementById("tipos_" + idMensaje)) {
f_cerrar_panel("tipos_" + idMensaje);
}
if (document.getElementById("linksegundo_"+idMensaje)) {
var divLinkSegundo = document.getElementById("linksegundo_"+idMensaje);
divLinkSegundo.className = 'boton opciones';
}
var divContenedorFormularioMensaje = document.getElementById("contenedor_formulario_" + idMensaje);
var boton_responder = document.getElementById("linkresponder_" + idMensaje)
if (divContenedorFormularioMensaje.childNodes.length == 0) {
var divMsgForm = crearFormularioMensaje(idMensaje);
divContenedorFormularioMensaje.appendChild(divMsgForm);
} else {
if (document.getElementById("linkresponder_" + idMensaje).innerHTML == _ESKUPhashMsgByLang[LANGESKUP].cancelar) {
document.getElementById("linkresponder_" + idMensaje).innerHTML = _ESKUPhashMsgByLang[LANGESKUP].responder;
divContenedorFormularioMensaje.innerHTML = "";
return;
}
}
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
boton_responder.innerHTML = _ESKUPhashMsgByLang[LANGESKUP].cancelar;
} else {
boton_responder.className = 'boton responder activo';
}
if (document.getElementById("submitresponder_" + idMensaje)) {
var divBotonPublicar = document.getElementById("submitresponder_" + idMensaje);
divBotonPublicar.innerHTML = _ESKUPhashMsgByLang[LANGESKUP].enviar;
}
document.getElementById("c_" + idMensaje).value = 'reply';
document.getElementById("x_" + idMensaje).value = idsHilo;
document.getElementById("t_" + idMensaje).value = strCopiaEnTablones;
if (document.getElementById("tm_"+idMensaje)) {
document.getElementById("tm_"+idMensaje).value = strCopiaEnTablones;
}
if (typeof _texto_inicializacion_textarea_responder != "undefined") {
f_inicia_caja_escribir("m_" + idMensaje, _texto_inicializacion_textarea_responder, 'cajareposo', 'secundario');
}
var etiqueta = document.getElementById('etiqueta_numero_maximo_caracteres_' + idMensaje);
etiqueta.innerHTML = _numero_maximo_caracteres_mensaje;
if (document.getElementById("diviframe_"+idMensaje)) {
document.body.removeChild(document.getElementById("diviframe_"+idMensaje));
}
crearIframeTargetFormulario(idMensaje, 'reply', enHilo);
document.getElementById("form_" + idMensaje).target = "iframe_"+idMensaje;
f_mostrar_ocultar_panel_eventos_donde_publicar(idMensaje, true);
if (document.getElementById('boton_borrar_adjunto_' + idMensaje)) {
document.getElementById('boton_borrar_adjunto_' + idMensaje).style.display = 'none';
}
if (document.getElementById('rp_' + idMensaje)) {
document.getElementById('rp_' + idMensaje).value = 0;
}
f_muestra_servicios_externos(idMensaje, true);
if (strCopiaEnTablones != '') {

divContenedorFormularioMensaje.style.display = 'none';
f_obtener_eventos_para_escribir_en_respuesta(idMensaje, strCopiaEnTablones);
}
else {
f_mostrar_ocultar_panel_avisos_responder(idMensaje, false);
divContenedorFormularioMensaje.style.display = '';
}
}
function crearMensajeTemporal(idMensaje) {
var comando     = '';
var idsHilo     = '';
var destino     = '';
var contenido   = '';
if (typeof idMensaje == 'undefined') {
comando = document.getElementById("c").value;
idsHilo = document.getElementById("x").value;
destino = document.getElementById("t").value;
contenido = document.getElementById("m").value;
}
else {
comando = document.getElementById("c_" + idMensaje).value;
idsHilo = document.getElementById("x_" + idMensaje).value;
destino = document.getElementById("t_" + idMensaje).value;
contenido = document.getElementById("m_" + idMensaje).value;
}
contenido = contenido.replace(/\n/g, '');
contenido = contenido.replace(/\r/g, '');
contenido = contenido.replace(/<b>/gi, "[b]");
contenido = contenido.replace(/<\/b>/gi, "[/b]");
contenido = contenido.replace(/<i>/gi, "[i]");
contenido = contenido.replace(/<\/i>/gi, "[/i]");
contenido = contenido.replace(/</g, "&lt;");
contenido = contenido.replace(/>/g, "&gt;");
contenido = contenido.replace(/\'/g, "&#39;");
contenido = contenido.replace(/&/g, "&amp;");
contenido = contenido.replace(/\[b\]/gi, "<b>");
contenido = contenido.replace(/\[\/b\]/gi, "</b>");
contenido = contenido.replace(/\[i\]/gi, "<i>");
contenido = contenido.replace(/\[\/i\]/gi, "</i>");
var hashMensaje = Array();
var ahora = new Date();
var tsAhora = ahora.getTime() / 1000;
if (typeof _tsHoraActual != "undefined" && _tsHoraActual != 0) {
tsAhora = _tsHoraActual;
} else if (typeof _hashMsgs.horaActual != "undefined") {
tsAhora = _hashMsgs.horaActual;
}
hashMensaje["idMsg"] = tsAhora + "-temporal";
hashMensaje["tsMensaje"] = tsAhora;
hashMensaje["usuarioOrigen"] = _nickname;
hashMensaje["contenido"] = contenido;
return hashMensaje;
}
function cancelarMensaje(idMensaje) {
if (confirm(_ESKUPhashMsgByLang[LANGESKUP].estas_seguro_de_cancelar_el_mensaje)) {
var divIFrameTarget = document.getElementById("diviframe_"+idMensaje);
document.body.removeChild(divIFrameTarget);
var divContenedorFormularioMensaje = document.getElementById("contenedor_formulario_" + idMensaje);
var divMsgForm = document.getElementById("divform_"+idMensaje);
divContenedorFormularioMensaje.removeChild(divMsgForm);
}
}
function comprobarCargaIframeFormulario(idMensaje) {
var i = document.getElementById("iframe_"+idMensaje);
if (i.contentDocument) {
var d = i.contentDocument;
} else if (i.contentWindow) {
var d = i.contentWindow.document;
} else {
var d = window.frames["iframe_"+idMensaje].document;
}
if (d.location.href == "about:blank") {
return true;
}
if (!d.getElementById("status")) {
errorResponderMensajes(idMensaje, _ESKUPhashMsgByLang[LANGESKUP].ha_ocurrido_un_error);
return false;
}
if (d.getElementById("status").innerHTML != "OK") {
errorResponderMensajes(idMensaje, d.getElementById("info").innerHTML + " (Error "+d.getElementById("code").innerHTML+")");
return false;
}
return d;
}
function comprobarPost(idMensaje, comando) {
var htmlMensajeTemporal = '';
var hashMensajeTemporal = '';
var d = comprobarCargaIframeFormulario(idMensaje);
if (d == true || d == false) {
f_restablecer_boton_publicar("submitresponder_" + idMensaje);
return d;
}
if (comando == 'privadoperfil') {
htmlMensajeTemporal = htmlMensajeTemporal + '<div class="capainfo todocorrecto" id="capainfo" style="">';
htmlMensajeTemporal = htmlMensajeTemporal + '  <p>' + _ESKUPhashMsgByLang[LANGESKUP].mensaje_enviado_correctamente + '</p>';
var retorno_mensaje = d.getElementById("info").innerHTML;
if (retorno_mensaje != "") {
htmlMensajeTemporal = htmlMensajeTemporal + '  <p>(' + aviso + ')</p>';
}
htmlMensajeTemporal = htmlMensajeTemporal + '  <a class="boton aceptar cerrar" href="javascript:void(0);" onClick="javascript:f_ocultar_formulario_mensaje(\'' + idMensaje + '\');">' + _ESKUPhashMsgByLang[LANGESKUP].cerrar + '</a>';
htmlMensajeTemporal = htmlMensajeTemporal + '  <div class="rompedor"></div>';
htmlMensajeTemporal = htmlMensajeTemporal + '</div><!-- === cierre .capainfo === -->';
var divContenedorFormularioMensaje = document.getElementById('contenedor_formulario_' + idMensaje);
divContenedorFormularioMensaje.innerHTML = htmlMensajeTemporal;
return true;
}
var _hayPremoderacion = false;
if ( (typeof _hilo != "undefined"   && esHiloPremoderado(_hilo)) || 
(typeof _tablon != "undefined" && esEventoPremoderado(_tablon)) ) {
_hayPremoderacion = true;
}
avisoResponderMensajes(idMensaje, d.getElementById("info").innerHTML, _hayPremoderacion);
if (document.getElementById("linkresponder_" + idMensaje)) {
document.getElementById("linkresponder_" + idMensaje).innerHTML = _ESKUPhashMsgByLang[LANGESKUP].responder;
}
if ((_tipoTablon == '1' || _tipoTablon == '2' ||_tipoTablon == '3' ||_tipoTablon == '4') ||
(_tipoTablon == '5' &&
typeof _hashDatosEvento != "undefined" &&
typeof _hashDatosEvento.estado_seguimiento != "undefined" &&
_hashDatosEvento.estado_seguimiento == 1) ||
( _tipoTablon == '5' && comando == "edit" )
) {
hashMensajeTemporal = crearMensajeTemporal(idMensaje);
htmlMensajeTemporal = pintaMensaje(hashMensajeTemporal, true);
if (typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') {
if (document.getElementById("procesando")) {
document.getElementById("procesando").className     = "procesando";
document.getElementById("procesando").innerHTML     = "<strong>" + _ESKUPhashMsgByLang[LANGESKUP].mensaje_disponible_en_unos_segundos + "</strong><div style=\"clear: both\"></div>";
document.getElementById("procesando").style.display = "block";
setTimeout(function() {
document.getElementById("procesando").className = "recargar";
document.getElementById("procesando").innerHTML = "<a href=\"javascript:void(0);\" onclick=\"javascript:location.reload();\" class=\"boton_recargar\">Recargar ahora</a><div style=\"clear: both\"></div>";
if (document.getElementById("boton_publicar")) {
var botonPublicar = document.getElementById("boton_publicar");
botonPublicar.style.visibility = "visible";
}
}, 5000);
}
}
}
if (comando == "edit") {
if (document.getElementById("mensaje_" + idMensaje)) {
var divTmpMensaje = document.createElement("DIV");
divTmpMensaje.innerHTML = htmlMensajeTemporal;
var divMensaje = document.getElementById("mensaje_" + idMensaje);
if (divMensaje.parentNode.className == "menombran" || divMensaje.parentNode.className == "mio") {
divMensaje = divMensaje.parentNode;
}
divMensaje.parentNode.insertBefore(divTmpMensaje, divMensaje);
divMensaje.parentNode.removeChild(divMensaje);
} else {
if (document.getElementById("divform_" + idMensaje) && document.getElementById("contenedor_formulario_" + idMensaje)) {
var divContenedorFormularioMensaje = document.getElementById("contenedor_formulario_" + idMensaje);
divContenedorFormularioMensaje.removeChild(document.getElementById("divform_" + idMensaje));
}
}
var htmlRecarga = '';
if (_hayPremoderacion && (typeof _soyOpinador == "undefined" ||  _soyOpinador == false)) {
marcarMensajePendienteModeracion(idMensaje);
htmlRecarga = _ESKUPhashMsgByLang[LANGESKUP].mensaje_pendiente_moderacion;
} else {
htmlRecarga = "<a href='javascript:location.reload(true);' class='recargar'>" + _ESKUPhashMsgByLang[LANGESKUP].recargar_la_pagina + "</a>";
}
if ( document.getElementById("explicacion_" + hashMensajeTemporal["idMsg"]) ) {
document.getElementById("explicacion_" + hashMensajeTemporal["idMsg"]).innerHTML = _ESKUPhashMsgByLang[LANGESKUP].estamos_procesando_tu_mensaje;
setTimeout ( function() {
document.getElementById("explicacion_" + hashMensajeTemporal["idMsg"]).innerHTML = htmlRecarga;
}, 5000);
document.getElementById("explicacion_" + hashMensajeTemporal["idMsg"]).style.display = '';
} else if (document.getElementById("avisoresponder_"+idMensaje)) {
setTimeout ( function() {
document.getElementById("avisoresponder_" + idMensaje).innerHTML = htmlRecarga;
}, 5000);
}
} else {
for (var contMsg = 0; contMsg != _hashMsgs.mensajes.length; contMsg++) {
if (document.getElementById("divform_"+_hashMsgs.mensajes[contMsg].idMsg)) {
var divContenedorFormularioMensaje = document.getElementById("contenedor_formulario_" + _hashMsgs.mensajes[contMsg].idMsg);
divContenedorFormularioMensaje.removeChild(document.getElementById("divform_"+_hashMsgs.mensajes[contMsg].idMsg));
}
}
if (typeof _idContenedorMsgs != "undefined" && document.getElementById(_idContenedorMsgs)) {
var divContenedor = document.getElementById(_idContenedorMsgs);
divContenedor.innerHTML = htmlMensajeTemporal + divContenedor.innerHTML;
}
if (typeof _quiensoy != "undefined" && _quiensoy == "comentarios" &&
typeof _tipoHilo != "undefined" && _tipoHilo == "o" &&
typeof _soyOpinador != "undefined" && _soyOpinador == false) {
if ( document.getElementById("explicacion_" + hashMensajeTemporal["idMsg"]) ) { 
document.getElementById("explicacion_" + hashMensajeTemporal["idMsg"]).innerHTML = _ESKUPhashMsgByLang[LANGESKUP].no_perteneces_al_foro + " <a href=\"javascript:void(0);\" onclick=\"javascript:cambiarPestanaComentarios('');\" title=\"" + _ESKUPhashMsgByLang[LANGESKUP].ver_todos_los_mensajes + "\">\"" + _ESKUPhashMsgByLang[LANGESKUP].todos_los_comentarios + "\"</a>";
}   
}
}
if (typeof _quiensoy != "undefined" && (_quiensoy == "comentarios" || _quiensoy == "mensajeUnico") && (comando == "reply" || comando == "add")) {
f_contabiliza_publicacion_comentario();
}
return true;
}
function comprobarPostHilo(idMensaje, comando) {
var d = comprobarCargaIframeFormulario(idMensaje);
if (d == true || d == false) {
f_restablecer_boton_publicar("submitresponder_" + idMensaje);
return d;
}
var _hayPremoderacion = false;
if (typeof _hilo != "undefined" && esHiloPremoderado(_hilo)) {
_hayPremoderacion = true;
}
if (d.getElementById("info").innerHTML != "") {
avisoResponderMensajes(idMensaje, d.getElementById("info").innerHTML, _hayPremoderacion);
}
document.getElementById("linkresponder_" + idMensaje).innerHTML = _ESKUPhashMsgByLang[LANGESKUP].responder;
var htmlMensajeTemporal = "";
var hashMensajeTemporal = crearMensajeTemporal(idMensaje);
htmlMensajeTemporal = pintaMensajeHilo(hashMensajeTemporal, true, false, true);
htmlMensajeTemporal += "<div class=\"enlacesconversacion\"></div>";
var divMensaje = document.getElementById("mensaje_" + idMensaje);
if (comando == "edit") {
var divTmpMensaje = document.createElement("DIV");
divTmpMensaje.innerHTML = htmlMensajeTemporal;
document.getElementById(_idContenedorHilo).insertBefore(divTmpMensaje, divMensaje);
document.getElementById(_idContenedorHilo).removeChild(divMensaje);
} else {
for (var contMsg = 0; contMsg != _hashMsgs.mensajes.length; contMsg++) {
if (document.getElementById("divform_"+_hashMsgs.mensajes[contMsg].idMsg)) {
var divContenedorFormularioMensaje = document.getElementById("contenedor_formulario_" + _hashMsgs.mensajes[contMsg].idMsg);
divContenedorFormularioMensaje.removeChild(document.getElementById("divform_"+_hashMsgs.mensajes[contMsg].idMsg));
}
}
var divContenedor = document.getElementById(_idContenedorHilo);
var divMensaje = null;
for (var contElem = 0; contElem != divContenedor.childNodes.length; contElem++) {
divMensaje = divContenedor.childNodes[contElem];
if (divMensaje.id.search(idMensaje) != -1) {
break;
}
}
var fechaMsgTemporal  = new Date();
var tsMensajeTemporal = Math.round(fechaMsgTemporal.getTime() / 1000);
var idMensajeTemporal = " id='" + divMensaje.id + "|" + tsMensajeTemporal + "-00000000000000000000000000000tmp' ";
var divTmp = divMensaje;
var nivel = 0;
var htmlInicioEnvoltorio = "";
var htmlFinEnvoltorio    = "";
if (divTmp.firstChild.id != ("mensaje_"+idMensaje)) {
if (divTmp.className.search("entrada") == -1) {
nivel++;
}
htmlInicioEnvoltorio = "<div " + idMensajeTemporal + " class='" + divTmp.className + "'>";
htmlFinEnvoltorio    = "</div>";
while (divTmp.firstChild && divTmp.firstChild.id != ("mensaje_"+idMensaje)) {
divTmp = divTmp.firstChild;
if (divTmp.className.search("envoltorio") == -1) {
nivel++;
if (divTmp.className.search("ultimo") != -1) {
htmlInicioEnvoltorio += "<div class='subnivel" + nivel + "transparente'>";
} else {
htmlInicioEnvoltorio += "<div class='" + divTmp.className + "'>";
}
htmlFinEnvoltorio += "</div>";
}
}
idMensajeTemporal = "";
}
var esUltimo = false;
for (var contMsg = 0; contMsg != _hashMsgs.mensajes.length; contMsg++) {
if (_hashMsgs.mensajes[contMsg].idMsg == idMensaje) {
if ((contMsg+1) == _hashMsgs.mensajes.length) {
esUltimo = true;
break;
} else if ((_hashMsgs.mensajes[contMsg].level+1) != _hashMsgs.mensajes[contMsg+1].level) {
esUltimo = true;
break;
}
}
}
nivel++;
if (esUltimo) {
if (divTmp == divContenedor.firstChild) {
htmlInicioEnvoltorio += "<div " + idMensajeTemporal + " class='subnivel" + nivel + "ultimo'>";
htmlFinEnvoltorio += "</div>";
} else if (nivel == 1) {
htmlInicioEnvoltorio += "<div " + idMensajeTemporal + " class='subnivel" + nivel + "transparente'><div class='subnivel" + (nivel+1) + "ultimo'>";
htmlFinEnvoltorio += "</div></div>";
} else {
if (divTmp.className.search("envoltorio") != -1) {
divTmp = divTmp.parentNode;
}
htmlInicioEnvoltorio += "<div class='subnivel" + nivel + "ultimo'>";
htmlFinEnvoltorio += "</div>";
}
} else {
if (nivel == 1 && divTmp != divContenedor.firstChild) {
htmlInicioEnvoltorio += "<div " + idMensajeTemporal + " class='subnivel" + nivel + "transparente'>";
htmlFinEnvoltorio += "</div>";
idMensajeTemporal = "";
nivel++;
}
htmlInicioEnvoltorio += "<div " + idMensajeTemporal + " class='subnivel" + nivel + "'><div class='envoltoriosubnivel" + nivel + "'>";
htmlFinEnvoltorio += "</div></div>";
}
var divMensajeTemporal = document.createElement("DIV");
divMensajeTemporal.innerHTML = htmlInicioEnvoltorio + htmlMensajeTemporal + htmlFinEnvoltorio;
divContenedor.insertBefore(divMensajeTemporal.firstChild, divMensaje.nextSibling);
if (!document.getElementById("linkrespuestas_"+idMensaje)) {
if (document.getElementById("enlacesconversacion_"+idMensaje)) {
document.getElementById("enlacesconversacion_"+idMensaje).innerHTML = "<a href='javascript:void(0);' title='Ocultar las respuestas a este mensaje' class='cerrar' onClick='javascript:ocultarRespuestas(\"" + idMensaje + "\", " + (nivel-1) + ");' id='linkrespuestas_" + idMensaje + "'>Cerrar respuestas</a>";
}
}
if (document.getElementById("linkrespuestas_"+idMensaje) &&
document.getElementById("linkrespuestas_"+idMensaje).className == "primero1") {
mostrarRespuestas(idMensaje, (nivel-1));
}
}
setTimeout ( function() {
document.getElementById("explicacion_" + hashMensajeTemporal["idMsg"]).innerHTML = "<a href='javascript:location.reload(true);' class='recargar'>" + _ESKUPhashMsgByLang[LANGESKUP].recargar_la_pagina + "</a>";
}, 5000);
return true;
}
function submitFormularioMensaje(idMensaje) {
cerrarMensajesFlotantes();
var valor_campo = document.getElementById("m_"+idMensaje).value;
if (/^\s*$/.test(valor_campo)) {
errorResponderMensajes(idMensaje, _ESKUPhashMsgByLang[LANGESKUP].el_contenido_del_mensaje_no_puede_ser_vacio);
return false;
}
if (typeof _texto_inicializacion_textarea_responder != "undefined" &&
valor_campo == _texto_inicializacion_textarea_responder) {
errorResponderMensajes(idMensaje, _ESKUPhashMsgByLang[LANGESKUP].el_contenido_del_mensaje_no_puede_ser_vacio);
return false;
}
if ( document.getElementById('id_lista_usuarios_privado_' + idMensaje) ) {
var divUL = document.getElementById('id_lista_usuarios_privado_' + idMensaje);
var numeroUsuarios = divUL.childNodes.length;
if (numeroUsuarios == 0) {
alert('No hay seleccionado ningún usuario para enviar el privado.');
return false;
}
var hayErrores = false;
var lista_usuarios = '';
for (var i = 0; i < numeroUsuarios; i++) {
li_usuario = divUL.childNodes[i];
valor_id = li_usuario.id;
if (valor_id != '') {
lista_usuarios = lista_usuarios + valor_id + '|';
}
}
if (lista_usuarios == '') {
alert('No has seleccionado ningún usuario para enviar el privado');
return false;
}
var campo_usuarios = document.getElementById('t_' + idMensaje);
campo_usuarios.value = lista_usuarios;
document.getElementById('d_' + idMensaje).value = '';
}
else {
var lista_servicios_externos = f_obtener_lista_servicios_externos_seleccionado(idMensaje);
document.getElementById('d_' + idMensaje).value = lista_servicios_externos;
}
if ( document.getElementById('id_eventos_para_escribir_' + idMensaje) ) {
var panelEventos = document.getElementById('id_eventos_para_escribir_' + idMensaje);
var numero_li = panelEventos.childNodes.length;
var lista_eventos = '';
var numero_temas_seleccionados = 0;
for (var i = 0; i < numero_li; i++) {
campo    = panelEventos.childNodes[i];
var estaSeleccionado = false;
id_evento = campo.id;
if (id_evento != '') {
estaSeleccionado = true;
}
if (estaSeleccionado) {
lista_eventos = lista_eventos + '*' + id_evento + '|';
_arrayEventosSeleccionadosParaEscribir[numero_temas_seleccionados] = id_evento;
numero_temas_seleccionados++;
}
}
document.getElementById("t_" + idMensaje).value = lista_eventos;
}
if (document.getElementById("capaopciones_adjuntar_"+idMensaje)) {
document.getElementById("capaopciones_adjuntar_"+idMensaje).style.display = "none";
}
var divContenedorEscribirMensaje = document.getElementById("escribirmensaje_" + idMensaje);
if (document.getElementById("errorresponder_"+idMensaje)) {
divContenedorEscribirMensaje.removeChild(document.getElementById("errorresponder_"+idMensaje));
}
if (document.getElementById("submitresponder_"+idMensaje)) {
document.getElementById("submitresponder_"+idMensaje).className = "trabajando";
}
var objFormulario = document.getElementById("form_"+idMensaje);
objFormulario.submit();
}
function mostrarOcultarElemento(idElemento) {
var divElemento = document.getElementById(idElemento);
if (divElemento.style.display != "none") {
divElemento.style.display = "none";
} else {
divElemento.style.display = "block";
}
}
function mostrarOcultarAdjuntarImagen(idMensaje) {
cerrarMensajesFlotantes();
if (document.getElementById('boton_adjuntar_' + idMensaje)) {
var boton_adjuntar = document.getElementById('boton_adjuntar_' + idMensaje);
if (boton_adjuntar.className == 'boton imagen') {
boton_adjuntar.className = 'boton imagen activo';
}
else {
boton_adjuntar.className = 'boton imagen';
}
}
if (document.getElementById('capaopciones_adjuntar_' + idMensaje)) {
mostrarOcultarElemento('capaopciones_adjuntar_' + idMensaje);
}
if (document.getElementById('capaopciones_destino_' + idMensaje)) {
var divCajaDestino  = document.getElementById('capaopciones_destino_' + idMensaje);
divCajaDestino.style.display = 'none';
}
var boton_donde_publicar = document.getElementById('boton_donde_publicar_' + idMensaje);
if (boton_donde_publicar != null) {
boton_donde_publicar.className = 'boton temas';
}
var boton_destinatarios = document.getElementById('boton_destinatario_' + idMensaje);
if (boton_destinatarios != null) {
boton_destinatarios.className = 'boton destinatario';
}
}
function muestraOcultaImagen(imagenMostrar,imagenOcultar){
document.getElementById(imagenMostrar).style.display="";	
document.getElementById(imagenOcultar).style.display="none";	
}
function mostrarEnlaces(idMensaje) {
var divLinkSegundo = document.getElementById("linksegundo_"+idMensaje);
divLinkSegundo.className = 'boton opciones activo';
if ( document.getElementById("linkresponder_"+idMensaje) ) {
var divBotonResponder = document.getElementById("linkresponder_"+idMensaje);
if ((typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') ||
(typeof _dndWidget != "undefined")) {

} else {
divBotonResponder.className = 'boton responder';
}
divLinkSegundo.onclick = function () {
ocultarEnlaces(idMensaje, true);
}
}
var divTipos = document.getElementById("tipos_"+idMensaje);
divTipos.ocultando = false;
if ((typeof _formatoVisualizacion == "undefined" || _formatoVisualizacion != "movil") &&
typeof _dndWidget == "undefined") {
var posDivEnlaces = EPETUtils_calcAbsPositionV2(divLinkSegundo);
divTipos.style.left = parseInt(posDivEnlaces[0]) + "px";
divTipos.style.top = parseInt(posDivEnlaces[1] + divLinkSegundo.clientHeight) + "px";
}
if (typeof _dndWidget != "undefined") {
divTipos.style.clear    = "both";
divTipos.style.position = "static";
divTipos.style.width    = "176px";
}
divTipos.style.display = 'block';
}
function ocultarEnlaces(idMensaje, forzado) {
if (typeof forzado == "undefined") {
forzado = false;
}
var divTipos = document.getElementById("tipos_"+idMensaje);
if (divTipos) {
if (typeof divTipos.ocultando != "undefined" && divTipos.ocultando == false && !forzado) {
return;
}
}
var divLinkSegundo = document.getElementById("linksegundo_"+idMensaje);
if (divLinkSegundo) {
divLinkSegundo.className = 'boton opciones';
}
if ( document.getElementById("linkresponder_"+idMensaje) ) {
var divBotonResponder = document.getElementById("linkresponder_"+idMensaje);
if ((typeof _formatoVisualizacion != 'undefined' && _formatoVisualizacion == 'movil') ||
(typeof _dndWidget != "undefined")) {
} else {
divBotonResponder.className = 'boton responder';
}
if (divLinkSegundo) {
divLinkSegundo.onclick = function () {
mostrarEnlaces(idMensaje);
}
}
}
if (divTipos) {
divTipos.style.display = 'none';
divTipos.ocultando = false;
}
}
function mostrarCapaSeguirUsuario(idMensaje) {
var divBotonSeguir = document.getElementById("botonseguirusuario_"+idMensaje);
var divCapaSeguir  = document.getElementById("capaseguirusuario_"+idMensaje);
divCapaSeguir.ocultando = false;
if ((typeof _formatoVisualizacion == "undefined" || _formatoVisualizacion != "movil") &&
typeof _dndWidget == "undefined") {
var posDivCapa = EPETUtils_calcAbsPositionV2(divBotonSeguir);
divCapaSeguir.style.left = parseInt(posDivCapa[0]) + "px";
divCapaSeguir.style.top = parseInt(posDivCapa[1]) + "px";
}
divCapaSeguir.className = 'capafavorito visible';
}
function ocultarCapaSeguirUsuario(idMensaje, forzado) {
if (typeof forzado == "undefined") {
forzado = false;
}
var divCapaSeguir  = document.getElementById("capaseguirusuario_"+idMensaje);
if (typeof divCapaSeguir.ocultando != "undefined" && divCapaSeguir.ocultando == false && !forzado) {
return;
}
divCapaSeguir.className = 'capafavorito oculto';
divCapaSeguir.ocultando = false;
}
function errorResponderMensajes(idMensaje, error) {
var divEscribirMensaje = document.getElementById("escribirmensaje_"+idMensaje);
if (document.getElementById("errorresponder_"+idMensaje)) {
divEscribirMensaje.removeChild(document.getElementById("errorresponder_"+idMensaje));
}
var divError = document.createElement("DIV");
divError.id = "errorresponder_"+idMensaje;
divError.className = "comunicaciones";
divError.innerHTML = "<p>" + error + "</p>";
divEscribirMensaje.appendChild(divError);
if (document.getElementById("trabajando_"+idMensaje)) {
divEscribirMensaje.removeChild(document.getElementById("trabajando_"+idMensaje));
}
}
function avisoResponderMensajes(idMensaje, aviso, hayPremoderacion) {
if (!document.getElementById("comentario_"+idMensaje)) {
return false;
}
if (typeof hayPremoderacion == "undefined") {
hayPremoderacion = false;
}
var divContenedorTextoMensaje = document.getElementById("comentario_"+idMensaje);
if (document.getElementById("avisoresponder_"+idMensaje)) {
divContenedorTextoMensaje.removeChild(document.getElementById("avisoresponder_"+idMensaje));
}
var divAviso = document.createElement("DIV");
divAviso.id = "avisoresponder_"+idMensaje;
divAviso.className = "comunicaciones";
if (aviso != "") {
aviso = " (" + aviso + ")";
}
var txtPremoderacion = "";
if (hayPremoderacion && !(typeof _soyOpinador != "undefined" && _soyOpinador == true)) {
txtPremoderacion = " (" + _ESKUPhashMsgByLang[LANGESKUP].pendiente_moderacion + ")";
}
divAviso.innerHTML = "<p>" + _ESKUPhashMsgByLang[LANGESKUP].mensaje_enviado_correctamente + aviso + txtPremoderacion + "</p>";
divContenedorTextoMensaje.appendChild(divAviso);

}
function cerrarMensajesFlotantes() {
if (typeof _quiensoy != "undefined" && (_quiensoy == "comentarios" || _quiensoy=="widget" || _quiensoy == "mensajeUnico")) {
return;
}
if (document.getElementById(_idContenedorHilo)) {
var divContenedorMensajes = document.getElementById(_idContenedorHilo);
for (var contElem = 0; contElem != divContenedorMensajes.childNodes.length; contElem++) {
if (divContenedorMensajes.childNodes[contElem].id) {
var idMsgFlotante = divContenedorMensajes.childNodes[contElem].id.substring(divContenedorMensajes.childNodes[contElem].id.length-(_longIdMensaje));
var idFlotante = "flotante_" + idMsgFlotante;
if (document.getElementById(idFlotante)) {
mostrarMensajeRespuesta(idMsgFlotante);
}
}
}
}
}
function mostrarMensajeRespuesta(idMensaje) {
if (typeof _hashMsgs.mensajes == "undefined") {
return false;
}
var divLinkRespondeA = document.getElementById("linkrespondea_"+idMensaje);
var divContenedorMensajes = document.getElementById(_idContenedorHilo);
for (var contElem = 0; contElem != divContenedorMensajes.childNodes.length; contElem++) {
var idMsgFlotante = divContenedorMensajes.childNodes[contElem].id.substring(divContenedorMensajes.childNodes[contElem].id.length-(_longIdMensaje));
var idFlotante = "flotante_" + idMsgFlotante;
if (document.getElementById(idFlotante)) {
document.body.removeChild(document.getElementById(idFlotante));
document.getElementById("linkrespondea_"+idMsgFlotante).title = _ESKUPhashMsgByLang[LANGESKUP].ver_mensaje_al_que_responde;
if (idMensaje == idMsgFlotante) {
return true;
}
}
}
var idMsgRespuesta = "";
var hashMensaje = null;
for (var i = 0; i != _hashMsgs.numMensajes; i++) {
if (_hashMsgs.mensajes[i].idMsg == idMensaje) {
idMsgRespuesta = _hashMsgs.mensajes[i].idMsgRespuesta;
break;
}
}
if (idMsgRespuesta == "") {
return false;
}
for (var i = 0; i != _hashMsgs.numMensajes; i++) {
if (_hashMsgs.mensajes[i].idMsg == idMsgRespuesta) {
hashMensaje = _hashMsgs.mensajes[i];
break;
}
}
if (hashMensaje == null) {
return false;
}
if (document.getElementById("flotante_"+idMensaje)) {
divLinkRespondeA.title = _ESKUPhashMsgByLang[LANGESKUP].ver_mensaje_al_que_responde;
document.body.removeChild(document.getElementById("flotante_"+idMensaje));
} else {
var esVisible = true;
var esFlotante = true;
var htmlMensajeFlotante = pintaMensajeHilo(hashMensaje, esVisible, esFlotante);
arrayPosEnlace = EPETUtils_calcAbsPositionV2(divLinkRespondeA);
var divFlotante = document.createElement("DIV");
divFlotante.id = "flotante_"+idMensaje;
divFlotante.className = "flotante";
divFlotante.innerHTML = htmlMensajeFlotante;
divFlotante.style.left = parseInt(arrayPosEnlace[0] - 10) + "px";
divFlotante.style.top = parseInt(arrayPosEnlace[1] + divLinkRespondeA.clientHeight + 2) + "px";
divLinkRespondeA.title = _ESKUPhashMsgByLang[LANGESKUP].cerrar;
document.body.appendChild(divFlotante);
}
}
function ocultarRespuestas(idMensaje, nivel) {
if (!document.getElementById("linkrespuestas_"+idMensaje)) {
return false;
}
var divLinkRespuestas     = document.getElementById("linkrespuestas_"+idMensaje);
var divContenedorMensajes = document.getElementById(_idContenedorHilo);
var longitudId            = (nivel+2)*(_longIdMensaje+1);
var i = 0;
for (i = 0; i != _hashMsgs.numMensajes; i++) {
if (_hashMsgs.mensajes[i].idMsg == idMensaje) {
break;
}
}
var numMensajesDebajo = 0;
for (var j = (i+1); j != _hashMsgs.numMensajes; j++) {
if (_hashMsgs.mensajes[j].level <= _hashMsgs.mensajes[i].level) {
break;
}
if (_hashMsgs.mensajes[j].level == (_hashMsgs.mensajes[i].level+1)) {
ocultarRespuestas(_hashMsgs.mensajes[j].idMsg, (nivel+1));
}
numMensajesDebajo++;
}
for (var contElem = 0; contElem != divContenedorMensajes.childNodes.length; contElem++) {
if (divContenedorMensajes.childNodes[contElem].id.search(idMensaje) != -1) {
if (divContenedorMensajes.childNodes[contElem].id.length == longitudId) {
divContenedorMensajes.childNodes[contElem].style.display = "none";
} else if (divContenedorMensajes.childNodes[contElem].id.search("tmp") != -1) {
divContenedorMensajes.childNodes[contElem].style.display = "none";
}
if (divContenedorMensajes.childNodes[contElem].id.search("tmp") != -1) {
numMensajesDebajo++;
}
}
}
cerrarMensajesFlotantes();
divLinkRespuestas.className = "abrir";
divLinkRespuestas.title     = "Mostrar las respuestas a este mensaje";
divLinkRespuestas.innerHTML = numMensajesDebajo + " respuestas";
eval ("divLinkRespuestas.onclick   = function() { mostrarRespuestas(\"" + idMensaje + "\", " + nivel + "); }");
}
function mostrarRespuestas(idMensaje, nivel) {
if (!document.getElementById("linkrespuestas_"+idMensaje)) {
return false;
}
var divLinkRespuestas     = document.getElementById("linkrespuestas_"+idMensaje);
var divContenedorMensajes = document.getElementById(_idContenedorHilo);
var longitudId            = (nivel+2)*(_longIdMensaje+1);
divLinkRespuestas.className = "cerrar";
divLinkRespuestas.title     = "Ocultar las respuestas a este mensaje";
divLinkRespuestas.innerHTML = "Cerrar respuestas";
eval ("divLinkRespuestas.onclick   = function() { ocultarRespuestas(\"" + idMensaje + "\", " + nivel + "); }");
for (var contElem = 0; contElem != divContenedorMensajes.childNodes.length; contElem++) {
if (divContenedorMensajes.childNodes[contElem].id.length == longitudId) {
if (divContenedorMensajes.childNodes[contElem].id.search(idMensaje) != -1 ||
divContenedorMensajes.childNodes[contElem].id.search("tmp") != -1) {
divContenedorMensajes.childNodes[contElem].style.display = "block";
}
}
}
cerrarMensajesFlotantes()
}
function ESKUPisIframe(){
return !(window.self === window.top);
}
function ESKUPisIframeMismoDominio(){
var dominio_padre = null;
try {
dominio_padre = parent.document.domain;
} catch(e) {}
return (dominio_padre==document.domain);
}

function EPEThasTelonID(){
var documento = ESKUPgetDocument();
if(!documento.styleSheets) return '';
if(typeof s== 'string') s= RegExp('\\b'+s+'\\b','i');
var A, S, DS= documento.styleSheets, n= DS.length, SA= [];
while(n){
S= DS[--n];
A= (S.rules)? S.rules: S.cssRules;
for(var i= 0, L= A.length; i<L; i++){
tem= A[i].selectorText? [A[i].selectorText, A[i].style.cssText]: [A[i]+''];
if(s.test(tem[0])) SA[SA.length]= tem;
}
}
return SA.join('\n\n');
}

function ESKUPpuedoAmpliarFoto(){
var iframeValido = (!ESKUPisIframe()||ESKUPisIframeMismoDominio());
var documento = ESKUPgetDocument();
var nameCss = "eskup_ampliar_foto";
var e = documento.getElementById(nameCss);
if (e == undefined &&  iframeValido) {
var cssLink=documento.createElement("link");
cssLink.setAttribute("rel", "stylesheet");
cssLink.setAttribute("type", "text/css");
if (typeof _domainCss != "undefined" && _domainCss != null) {
var domain = _domainCss;
} else {
var imgCacheServer = "http://skp00.epimg.net";
if (typeof _SSL != 'undefined' && _SSL == true) {
imgCacheServer = "https://seguro.elpais.com";
}
var domain = imgCacheServer;
}
cssLink.setAttribute("href", domain+"/Estilos/v1.x/v1.0/"+nameCss+".css");
cssLink.setAttribute("id",nameCss);
documento.getElementsByTagName("head")[0].appendChild(cssLink);
}
return iframeValido;
}

function ampliaFotoEskup(boton, url_foto, ancho_foto, alto_foto, pie_foto)
{
if (ESKUPpuedoAmpliarFoto()){
var nodoCentral = parent.document.getElementById("contenedor_central_telon");
if (!nodoCentral)
ESKUPcrearTelonMultimedia();
setTimeout(function() {
if (ancho_foto > 0 && alto_foto > 0) 
{    
setTimeout(function(){
ESKUPampliaFotoCallback(boton, url_foto, ancho_foto, alto_foto, pie_foto);
}, 100);
}    
else 
{    
var oculto = parent.document.createElement('div');
oculto.style.width = '0px';
oculto.style.height = '0px';
oculto.style.overflow = 'hidden';
document.body.appendChild(oculto);     
var oImg=parent.document.createElement("img");
oImg.onload = function() { ESKUPampliaFotoCallback(boton, url_foto, (this.naturalWidth != undefined ? this.naturalWidth : this.offsetWidth), (this.naturalHeight != undefined ? this.naturalHeight : this.offsetHeight), pie_foto); oculto.parentNode.removeChild(oculto) };
oImg.setAttribute('src', url_foto + "?" + Math.random());
oculto.appendChild(oImg);
}
}, 100); 
}else{
funcionAmpliar = encodeURI(ESKUPampliaFotoCallback.toString().replace(/'/g,'"'));
parent.postMessage("{'funcionAmpliar':'"+funcionAmpliar+"','command':'ampliaFotoEskup','params':['"+url_foto+"',"+ancho_foto+","+alto_foto+",'"+pie_foto+"']}", "*");
}
}

function ESKUPgetDocument(){
if (_documento==null){
if (ESKUPisIframe()&& ESKUPisIframeMismoDominio()){
_documento = parent.document;
}	
else
_documento = document;
}
return _documento;
}

function ESKUPgetWindow(){
if (_ventana==null){
if (ESKUPisIframe())
_ventana= parent.window;
else
_ventana = window;
}
return _ventana;
}
function ESKUPteclaPulsada(key){
var ventana = ESKUPgetWindow();
var keycode;
if (ventana.event) 
keycode = ventana.event.keyCode;
else 
if (key) 
keycode = key.which;
if (keycode == 27)
ESKUPcerrarTelonMultimediaEskup();
}
function ESKUPteclaTelonEvent(e){
if (e.keyCode == 27 ){
ESKUPcerrarTelonMultimediaEskup();
}
}
function ESKUPbloqueaClick(e){
var ventana = ESKUPgetWindow();
if (!e) var e = ventana.event;
e.cancelBubble = true;
if (e.stopPropagation) e.stopPropagation();
}
function ESKUPampliaFotoCallback(boton, url_foto, ancho_foto, alto_foto, pie_foto)
{
var documento = ESKUPgetDocument();
var ventana = ESKUPgetWindow();
var telon = documento.getElementById('id_telon');
var capaFlotante = documento.getElementById('id_contenedorCapaFlotante');
documento.getElementById('ampliar').className = 'boton_eskup_ampliar_foto ampliar_eskup_ampliar_foto';
documento.getElementById('ampliar').innerHTML= _ESKUPhashMsgByLang[LANGESKUP].tamano_real;  
fotoTamanioReal = false;
var altoPie = 0 ;
if (telon != undefined  && capaFlotante != undefined )
{
pie_foto = pie_foto.replace(new RegExp("\&amp;", "gm"), "&");
pie_foto = pie_foto.replace(new RegExp("\&lt;", "gm"), "<");
pie_foto = pie_foto.replace(new RegExp("\&gt;", "gm"), ">");
documento.getElementById('pie_contenedor').onclick = ESKUPbloqueaClick;
documento.getElementById('pie_contenedor').innerHTML = pie_foto;
ESKUPalternacamposEskup('id_telon','block', 'id_contenedorCapaFlotante','block');
var dimsNavegador = ESKUPBrowserDimsEskup();
if (dispositivoMovil)
{
var altoBody = document.body.scrollHeight;
telon.style.position = 'absolute';
telon.style.height = altoBody + 'px';
telon.style.width = dimsNavegador.ancho + 'px';
capaFlotante.style.position = 'absolute';
}
else
{
capaFlotante.style.position = 'fixed';
telon.style.position = 'fixed';
}
altoPie = documento.getElementById('pie_contenedor').offsetHeight;
var YscrollVertical = ESKUPgetVScrollPositionEskup();
var altoBloqueCentral = parseInt(alto_foto) + parseInt(altoPie) + 70;
if (altoBloqueCentral <= dimsNavegador.alto)
{
documento.getElementById('ampliar').style.display = 'none';
if (dispositivoMovil)
{
capaFlotante.style.top =  Math.round(YscrollVertical + (dimsNavegador.alto - altoBloqueCentral ) / 2 ) + 'px';
}
else{
var top = Math.round(dimsNavegador.alto / 2 - altoBloqueCentral / 2);
if (top<0) top=0;
capaFlotante.style.top=top+"px";
}
capaFlotante.style.left = '0px';
documento.getElementById('imagen_contenedor').style.height = alto_foto + 'px';
documento.getElementById('imagen_contenedor').style.width = ancho_foto + 'px';
documento.getElementById('flotante_foto').style.width = (parseInt(ancho_foto) + 20) + "px";
}
else
{
if (dispositivoMovil)
{
capaFlotante.style.top =  YscrollVertical + 'px';
}
else
capaFlotante.style.top = '0px' ;
altoPie = 55;
var imgH = dimsNavegador.alto - parseInt(altoPie) - 60;
var imgW = Math.round(imgH * ancho_foto / alto_foto);
documento.getElementById('imagen_contenedor').style.height = imgH + "px";
documento.getElementById('imagen_contenedor').style.width = imgW + "px";
documento.getElementById('flotante_foto').style.width = (imgW + 20) + "px";
documento.getElementById('ampliar').style.display = 'block';
documento.getElementById('ampliar').onclick = function (e) {
ESKUPbloqueaClick(e);
if (!fotoTamanioReal)
{
documento.getElementById('ampliar').className = 'boton_eskup_ampliar_foto reducir_eskup_ampliar_foto';
documento.getElementById('ampliar').innerHTML= _ESKUPhashMsgByLang[LANGESKUP].tamano_ventana;
capaFlotante.style.position = 'absolute';
var YscrollVertical = ESKUPgetVScrollPositionEskup(); 
capaFlotante.style.top = YscrollVertical + 'px';
documento.getElementById('flotante_foto').style.width = (parseInt(ancho_foto) + 20) + "px";
documento.getElementById('imagen_contenedor').style.width = ancho_foto + 'px';
documento.getElementById('imagen_contenedor').style.height = alto_foto + 'px';
}
else
{
documento.getElementById('ampliar').className = 'boton_eskup_ampliar_foto ampliar_eskup_ampliar_foto';
documento.getElementById('ampliar').innerHTML= _ESKUPhashMsgByLang[LANGESKUP].tamano_real;
if (dispositivoMovil)
{
capaFlotante.style.position = 'absolute';
capaFlotante.style.top = YscrollVertical + 'px';
}
else
{
capaFlotante.style.position = 'fixed';
capaFlotante.style.top = '0px';
}
documento.getElementById('imagen_contenedor').style.height = (dimsNavegador.alto - parseInt(altoPie) - 60) + "px";
documento.getElementById('imagen_contenedor').style.width = imgW + "px";
documento.getElementById('flotante_foto').style.width = (imgW + 20) + "px";
}
fotoTamanioReal = !fotoTamanioReal;
};
}
documento.getElementById('imagen_contenedor').onclick = ESKUPbloqueaClick;
documento.getElementById('imagen_contenedor').src    =  url_foto;
if (ventana.addEventListener){
ventana.addEventListener('keydown', ESKUPteclaTelonEvent,true);
}else{
documento.onkeydown = ESKUPteclaPulsada;
}
}
}
function ESKUPcrearTelonMultimedia()
{
var documento = ESKUPgetDocument();
if (documento.getElementById("id_telon"))
documento.getElementById("id_telon").parentNode.removeChild(documento.getElementById("id_telon"));
if (documento.getElementById("id_contenedorCapaFlotante"))
documento.getElementById("id_contenedorCapaFlotante").parentNode.removeChild(documento.getElementById("id_contenedorCapaFlotante"));
var telon =documento.createElement('div');
var htmlCapaCentralESKUP = '<img src="/t.gif" id="imagen_contenedor" width="" height="" alt="' + _ESKUPhashMsgByLang[LANGESKUP].foto + '"/><p id="pie_contenedor" class="figcaption estirar"></p>';
telon.id = 'id_telon';
telon.style.display = 'none';
telon.className = 'telon_eskup_ampliar_foto';
telon.onclick = function() { ESKUPcerrarTelonMultimediaEskup();};
documento.body.appendChild(telon);     		
var textoCerrar = _ESKUPhashMsgByLang[LANGESKUP].cerrar;
var textoTamanyoReal = _ESKUPhashMsgByLang[LANGESKUP].tamano_real;
var contenedor =documento.createElement('div');
contenedor.id = 'id_contenedorCapaFlotante';
contenedor.style.top = '0px';
contenedor.style.left = '0px';
contenedor.style.display = 'none';
contenedor.className = 'telon_eskup_ampliar_foto contenedor_capa_flotante_eskup_ampliar_foto';
contenedor.onclick = function() { ESKUPcerrarTelonMultimediaEskup();};
htmlCapaFlotanteEskup = '<div id="flotante_foto" class="flotante_foto_eskup_ampliar_foto">\n' +
'        <div class="contenedor_foto_eskup_ampliar_foto estirar">\n' +
'            <a title="' + textoCerrar + '" href="javascript:void(0);" id="id_cerrar_arriba" class="cerrar_eskup_ampliar_foto" >' + textoCerrar + '</a>\n' +
'            <a id="ampliar" style="display:none" class="boton_eskup_ampliar_foto ampliar" href="javascript:void(0);">' + textoTamanyoReal      + '</a>\n' +
'            <div id="contenedor_central_telon" class="foto_eskup_ampliar_foto figure">' + htmlCapaCentralESKUP + '</div>' +
'        </div>\n' +
'</div>\n';
contenedor.innerHTML = htmlCapaFlotanteEskup;
documento.body.appendChild(contenedor);		
}
function ESKUPgetVScrollPositionEskup()
{
var documento = ESKUPgetDocument();
var ventana = ESKUPgetWindow();
if (typeof(documento.documentElement.scrollTop) != "undefined" && documento.documentElement.scrollTop)
return documento.documentElement.scrollTop;
else 
if (typeof(ventana.pageYOffset) != "undefined")
return ventana.pageYOffset;
else
return 0;
}
function ESKUPalternacamposEskup(id_campo1, estilo_campo1, id_campo2, estilo_campo2) {
var documento = ESKUPgetDocument();
documento.getElementById(id_campo1).style.display = estilo_campo1;
documento.getElementById(id_campo2).style.display = estilo_campo2;
}
function ESKUPcerrarTelonMultimediaEskup()
{
var documento = ESKUPgetDocument();
var ventana = ESKUPgetWindow();
if (documento.getElementById("id_telon").style.display != "none")
{
ESKUPalternacamposEskup('id_telon', 'none', 'id_contenedorCapaFlotante', 'none');
var nodoCentral = documento.getElementById("contenedor_central_telon");        
if (nodoCentral)
nodoCentral.innerHTML = '<img src="/t.gif" id="imagen_contenedor" width="" height="" alt="' + _ESKUPhashMsgByLang[LANGESKUP].foto + '"/><p id="pie_contenedor" class="figcaption estirar"></p>';
if (window.addEventListener)
ventana.removeEventListener('keydown', ESKUPteclaTelonEvent,true);	
else
documento.onkeydown = null;
}
}

function ESKUPBrowserDimsEskup()
{
var documento = ESKUPgetDocument();
var ventana = ESKUPgetWindow();
var viewportwidth = 0; 
var viewportheight = 0; 
if (typeof ventana.innerWidth != 'undefined') {
viewportwidth = ventana.innerWidth,
viewportheight = ventana.innerHeight
}    
else if (typeof documento.documentElement != 'undefined'
&& typeof documento.documentElement.clientWidth !=
'undefined' && documento.documentElement.clientWidth != 0) { 
viewportwidth = documento.documentElement.clientWidth,
viewportheight = documento.documentElement.clientHeight
}    
else {
viewportwidth = documento.getElementsByTagName('body')[0].clientWidth,
viewportheight = documento.getElementsByTagName('body')[0].clientHeight
}    
return {"ancho" : viewportwidth , "alto" : viewportheight};
}
function mostrarComentarioRespuesta(idMensaje, idHilo, idMensajeRespuesta) {
if (typeof _hashMsgs.mensajes == "undefined") {
return false;
}
if (document.getElementById("flotante_" + idMensaje).innerHTML != '') {
document.getElementById("flotante_" + idMensaje).innerHTML = '';
document.getElementById("enlacemostrarrespuesta_" + idMensaje).title = _ESKUPhashMsgByLang[LANGESKUP].ver_mensaje_al_que_responde;
return;
}
var hashMensaje = null;
if (typeof _hashMsgs.perfilesHilos != "undefined" &&
typeof _hashMsgs.perfilesHilos['_'+idHilo] != "undefined" &&
typeof _hashMsgs.perfilesHilos['_'+idHilo].msgs_respuesta != "undefined" &&
typeof _hashMsgs.perfilesHilos['_'+idHilo].msgs_respuesta['_'+idMensajeRespuesta] != "undefined") {
hashMensaje = _hashMsgs.perfilesHilos['_'+idHilo].msgs_respuesta['_'+idMensajeRespuesta];
}
if (hashMensaje == null) {
return false;
}
var htmlMensajeRespuesta = pintaMensajeHilo(hashMensaje);
document.getElementById("flotante_" + idMensaje).innerHTML = htmlMensajeRespuesta;
if (document.getElementById("enlacemostrarrespuesta_" + idMensaje)) {
document.getElementById("enlacemostrarrespuesta_" + idMensaje).title = _ESKUPhashMsgByLang[LANGESKUP].cerrar;
}
}
function posicionarEnDivMensajes() {
if (typeof _quiensoy != "undefined" && _quiensoy == 'widget') {
if (typeof _iframeAltoVariable != "undefined" && _iframeAltoVariable == '1') {
if (typeof _objIframeContenedor != "undefined" && _objIframeContenedor != null) {
window.parent.EPETUtils_posicionarScrollEnPagina(EPETUtils_calcAbsPositionV2(_objIframeContenedor)[1]);
} else if (parent.postMessage && typeof _identificadorWidget != "undefined") {
parent.postMessage("{'id':'" + _identificadorWidget + "','command':'setScrollToWidget','params':[]}", "*");
}
} else {
}
EPETUtils_posicionarScrollEnPagina(0);
if (typeof _dndWidget != "undefined" && 
typeof _posInicialContenedor != "undefined" && 
document.getElementById("contenedor_interior")) {
document.getElementById("contenedor_interior").style.top = _posInicialContenedor + "px";
}
} else if (typeof _hilo != "undefined" && _hilo != "") {
if (typeof _objIframeContenedor != "undefined" && _objIframeContenedor != null) {
window.parent.EPETUtils_posicionarScrollEnPagina(EPETUtils_calcAbsPositionV2(_objIframeContenedor)[1]);
} else if (parent.postMessage && typeof _identificadorWidget != "undefined") {
parent.postMessage("{'id':'" + _identificadorWidget + "','command':'setScrollToWidget','params':[]}", "*");
} else {
}
EPETUtils_posicionarScrollEnPagina(0);
} else {
posicionarEnDiv('id_contenedor_paginacion');
}
}
function posicionarEnDiv(id_contenedor) {
if ( document.getElementById(id_contenedor) ) {
var posYDivMensajes = parseInt(EPETUtils_calcAbsPosition(document.getElementById(id_contenedor))[1]);
EPETUtils_posicionarScrollEnPagina(posYDivMensajes);
}
}
function mostrarError(textoError) {
var divContenedorError = document.getElementById(_idContenedorErr);
divContenedorError.innerHTML = "<p>" + textoError + "</p>";
if (textoError == '') {
divContenedorError.style.display = 'none';
}
else {
divContenedorError.style.display = '';
}
}
function notificarMensajeInsulto(idMensaje) {
ocultarEnlaces(idMensaje, true);
var cadena_params = "reason=abuse&msg=" + idMensaje;
if (typeof _medioOrigen!= 'undefined'){
cadena_params+="&medio="+_medioOrigen;
}
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status != 200) {
alert(_ESKUPhashMsgByLang[LANGESKUP].no_se_ha_podido_hacer_la_notificacion);
}
else {
var data = httpRequest.responseText;
alert(_mensaje_respuesta_notificacion_insulto);
}
}, _urlNOTIFICACIONES + "?" + cadena_params);
}
function notificarMensajeSpam(idMensaje) {
ocultarEnlaces(idMensaje, true);
var cadena_params = "reason=spam&msg=" + idMensaje;
if (typeof _medioOrigen!= 'undefined'){
cadena_params+="&medio="+_medioOrigen;
}
EPETUtils_makeHttpRequestGet(function(httpRequest) {
if (httpRequest.status != 200) {
alert(_ESKUPhashMsgByLang[LANGESKUP].no_se_ha_podido_hacer_la_notificacion);
}
else {
var data = httpRequest.responseText;
alert(_mensaje_respuesta_notificacion_spam);
}
}, _urlNOTIFICACIONES + "?" + cadena_params);
}
