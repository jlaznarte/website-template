
function f_pinta_pestanas(listaTablones, tablon_actual) {
var html = '';
var html_inicio_contenedor = '';
var html_fin_contenedor = '';
var divPestanas;
if (document.getElementById("pestanas_tablones")) {
divPestanas = document.getElementById("pestanas_tablones");
if (_htmlPlantillaPersonalizadaPestana == null) {
html_plantilla = document.getElementById('plantilla_pestana').innerHTML;
html_plantilla = html_plantilla.replace(/\n/g, '');
html_plantilla = html_plantilla.replace(/\r/g, '');
html_inicio_contenedor  = '<ul>';
html_fin_contenedor     = '</ul>';
}
else {
html_plantilla = _htmlPlantillaPersonalizadaPestana;
}
var numero_tablones = listaTablones.length;
if (numero_tablones > 0) {
html = '';
for (var i=0; i < numero_tablones; i++) {
var _datosTablon = listaTablones[i];
var html_convertido = html_plantilla;
var html_class           = '';
var html_primera_pestana = '';
var html_pestana         = '';
var reclamo_tablon = _datosTablon.reclamo;
var nombre_tablon  = _datosTablon.nombre_tablon;
var tablon         = _datosTablon.tablon;
var tipo_tablon    = _datosTablon.tipo_tablon;
var cadena_tablon = '/';
if (tipo_tablon == 'event') {
cadena_tablon = cadena_tablon + '*';
if (_hashDatosEventos.perfilesEventos) {
if (_hashDatosEventos.perfilesEventos[nombre_tablon]) {
var datosTema = _hashDatosEventos.perfilesEventos[nombre_tablon];
if ( (typeof datosTema.reclamo != 'undefined') && (datosTema.reclamo != '') ) {
reclamo_tablon = datosTema.reclamo;
}
}
}
}
cadena_tablon = cadena_tablon + nombre_tablon;
if (tablon_actual == nombre_tablon) {
html_class = 'activo';
var url_base_eskup = "";
if (typeof _url_servidor != "undefined") {
url_base_eskup = _url_servidor;
}
html_pestana = '<a href="' + url_base_eskup + cadena_tablon + '" title="Ver el tema" target="_blank">' + reclamo_tablon + '</a>';
}
else {
html_class = 'inactivo';
html_pestana = '<a href="javascript:void(0);" onClick="cambiarTablon(\'' + nombre_tablon + '\', \'' + tablon + '\', ' + i + ');">' + reclamo_tablon + '</a>';
}
if (i == 0) {
html_primera_pestana = 'border-left: 0pt none;';
}
html_convertido = html_convertido.replace(/#MSG:PESTANA_CLASS#/g,   html_class);
html_convertido = html_convertido.replace(/#MSG:PESTANA_PRIMERA#/g, html_primera_pestana);
html_convertido = html_convertido.replace(/#MSG:PESTANA_ID#/g,      nombre_tablon);
html_convertido = html_convertido.replace(/#MSG:PESTANA_HTML#/g,    html_pestana);
html = html + html_convertido;
}
html = html_inicio_contenedor + html + html_fin_contenedor;
}
divPestanas.innerHTML = html;
}
var campo_cabecera_tema = document.getElementById('cabecera_tema');
if ( document.getElementById('cabecera_tema') ) {
var campo_cabecera_tema = document.getElementById('cabecera_tema');
var reclamo = tablon_actual;
if (_hashDatosEventos.perfilesEventos[tablon_actual].reclamo) {
var reclamo = _hashDatosEventos.perfilesEventos[tablon_actual].reclamo
}
campo_cabecera_tema.innerHTML = reclamo;
}
}
function cambiarTablon(nombreTablon, tablon, indice_tablon) {
_tablon       = nombreTablon;
_tablon1      = tablon;
_numPagCache  = 1;
_numPagActual = 1;
_hashMsgs      = Array();
_ultimaRecargaServidor   = 0;
_ultimaRecargaProteccion = 0;
location.href = "#" + _numPagActual;
document.getElementById(_idContenedorMsgs).innerHTML = "";
document.getElementById(_idContenedorPag).innerHTML = "";
document.getElementById(_idContenedorErr).innerHTML = "";
if (document.getElementById('contenedor_paginacion')) {
document.getElementById('contenedor_paginacion').style.display = 'none';
}
if (document.getElementById('contenedor_paginacion_abajo')) {
document.getElementById('contenedor_paginacion_abajo').style.display = 'none';
}
if (document.getElementById('id_info_usuario')) {
document.getElementById('id_info_usuario').style.display = 'none';
}
if (document.getElementById('id_info_evento')) {
document.getElementById('id_info_evento').style.display = 'none';
}
recuperarInformacionMensajes();
f_pinta_pestanas(_listaTablones.tablones, nombreTablon);
if (_listaTablones.tablones[indice_tablon].tipo_tablon == 'user') {
_mostrandoUsuario = 1;
f_pinta_caja_html_perfil_usuario(nombreTablon);
}
else {
_mostrandoUsuario = 0;
f_pinta_caja_html_perfil_evento(nombreTablon);
}
f_recalcular_numero_maximo_caracteres_mensaje();
}
function f_recalcular_numero_maximo_caracteres_mensaje() {
_numero_maximo_caracteres_mensaje = 280;
if (typeof _hashDatosEventos.perfilesEventos != "undefined" &&
typeof _hashDatosEventos.perfilesEventos[_tablon] != "undefined" &&
typeof _hashDatosEventos.perfilesEventos[_tablon].numero_caracteres_mensaje != "undefined" &&
_hashDatosEventos.perfilesEventos[_tablon].numero_caracteres_mensaje != _numero_maximo_caracteres_mensaje) {
_numero_maximo_caracteres_mensaje = _hashDatosEventos.perfilesEventos[_tablon].numero_caracteres_mensaje;
}
var divNumCaracteres = document.getElementById('etiqueta_numero_maximo_caracteres');
if (divNumCaracteres) {
divNumCaracteres.innerHTML = _numero_maximo_caracteres_mensaje;
}
}
function f_lanzador_enviar_mensaje() {
if (_mostrandoUsuario == 1) {
f_publica('multiple');
}
else {
f_publica('evento');
}
}
function f_obtener_div_html_perfil_evento(idPlantilla, htmlPlantillaPersonalizada, hashDatosEvento, idEvento) {
var html = '';
if (htmlPlantillaPersonalizada == null) {
html = document.getElementById(idPlantilla).innerHTML;
html = html.replace(/\n/g, '');
html = html.replace(/\r/g, '');
}
else {
html = htmlPlantillaPersonalizada;
}
html = html.replace(/#MSG:NOMBRE_EVENTO#/g, hashDatosEvento.nombre);
html = html.replace(/#MSG:URL_EVENTO#/g, '/' + '*' + idEvento);
html = html.replace(/#MSG:DESCRIPCION_EVENTO#/g, hashDatosEvento.descripcion);
var fotoEvento = hashDatosEvento.pathfoto;
if (fotoEvento == '') {
fotoEvento = _url_imagen_por_defecto;
}
html = html.replace(/#MSG:INI_DIV_FOTO#/g, '<div class="fotoymas">');
html = html.replace(/#MSG:FIN_DIV_FOTO#/g, '</div>');
html = html.replace(/#MSG:FOTO_EVENTO#/g, fotoEvento);
html = html.replace(/#MSG:FOTO_EVENTO_WIDTH#/g,   140);
html = html.replace(/#MSG:FOTO_EVENTO_HEIGHT#/g,  100);
html = html.replace(/#MSG:ETIQUETA_INICIO_IMG#/g, '<img');
html = html.replace(/#MSG:ETIQUETA_FIN_IMG#/g,    ' />');
var cadena_mensaje = '';
var cadena_estado = '';
var date_actual = new Date();
var ts_actual = Math.round(date_actual.getTime() / 1000);
var evento_cerrado = 0;
if (ts_actual > hashDatosEvento.ts_final) {
evento_cerrado = 1;
}
if ( (hashDatosEvento.activo == 0) || (evento_cerrado == 1) ) {
if (hashDatosEvento.activo == 0) {
cadena_mensaje = 'El evento no est&aacute; activo';
}
else {
cadena_mensaje = 'El evento est&aacute; cerrado';
}
cadena_estado = 'cerrado';
_evento_actual_cerrado = 1;
html = html.replace(/#MSG:ESTADO_EVENTO#/g, cadena_estado);
html = html.replace(/#MSG:DESCRIPCION_ESTADO_EVENTO#/g, cadena_mensaje);
html = html.replace(/#MSG:INI_DIV_ESTADO_EVENTO#/g, '');
html = html.replace(/#MSG:FIN_DIV_ESTADO_EVENTO#/g, '');
}
else {
cadena_mensaje = 'Evento activo';
cadena_estado = 'activo';
html = html.replace(/#MSG:INI_DIV_ESTADO_EVENTO#.*?#MSG:FIN_DIV_ESTADO_EVENTO#/g, '');
_evento_actual_cerrado = 0;
}
html = html.replace(/#MSG:NUMERO_SEGUIDORES_EVENTO#/g, hashDatosEvento.numero_seguidores_evento);
html = html.replace(/#MSG:NUMERO_ESCRITORES_EVENTO#/g, hashDatosEvento.numero_writers_evento);
html = html.replace(/#MSG:NUMERO_MENSAJES_EVENTO#/g,   hashDatosEvento.num_mensajes);
if (hashDatosEvento.num_mensajes > 0) {
html = html.replace(/#MSG:INI_DIV_FECHAULTIMO_MENSAJE#/g, '');
html = html.replace(/#MSG:FIN_DIV_FECHAULTIMO_MENSAJE#/g, '');
html = html.replace(/#MSG:FECHA_ULTIMO_MENSAJE_EVENTO#/g, f_obtener_fecha_visible(hashDatosEvento.ts_ultimo_mensaje, 0) );
}
else {
html = html.replace(/#MSG:INI_DIV_FECHAULTIMO_MENSAJE#.*?#MSG:FIN_DIV_FECHAULTIMO_MENSAJE#/g, '');
}
html = html.replace(/#MSG:URL_SEGUIDORES_EVENTO#/g, _url_servidor + '/*' + idEvento + '/seguidores');
html = html.replace(/#MSG:URL_ESCRITORES_EVENTO#/g, _url_servidor + '/*' + idEvento + '/escritores');
html = html.replace(/#MSG:URL_MENSAJES_EVENTO#/g,   _url_servidor + '/*' + idEvento);
return (html);
}
function f_obtener_div_html_perfil_usuario(idPlantilla, htmlPlantillaPersonalizada, hashDatosUsuario, nick) {
var html = '';
if (htmlPlantillaPersonalizada == null) {
html = document.getElementById(idPlantilla).innerHTML;
html = html.replace(/\n/g, '');
html = html.replace(/\r/g, '');
}
else {
html = htmlPlantillaPersonalizada;
}
var nombre = '';
if (hashDatosUsuario.nombre != '') {
nombre = hashDatosUsuario.nombre + ' ' + hashDatosUsuario.apellidos;
}
else {
nombre = nick;
}
html = html.replace(/#MSG:NOMBRE_USUARIO#/g, nombre);
html = html.replace(/#MSG:NICK_USUARIO#/g,   nick);
html = html.replace(/#MSG:URL_USUARIO#/g, '/' + nick);
var pathFoto = hashDatosUsuario.pathfoto;
if (pathFoto == '') {
pathFoto = _url_imagen_usuario_por_defecto;
}
html = html.replace(/#MSG:INI_DIV_FOTO#/g, '');
html = html.replace(/#MSG:FIN_DIV_FOTO#/g, '');
html = html.replace(/#MSG:FOTO_USUARIO#/g, pathFoto);
html = html.replace(/#MSG:FOTO_USUARIO_WIDTH#/g,   75);
html = html.replace(/#MSG:FOTO_USUARIO_HEIGHT#/g,  75);
html = html.replace(/#MSG:ETIQUETA_INICIO_IMG#/g, '<img');
html = html.replace(/#MSG:ETIQUETA_FIN_IMG#/g,    ' />');
if (hashDatosUsuario.activo == 1) {
html = html.replace(/#MSG:ESTADO_USUARIO#/g, 'activo');
html = html.replace(/#MSG:DESCRIPCION_ESTADO_USUARIO#/g, 'Conectado');
}
else {
html = html.replace(/#MSG:ESTADO_USUARIO#/g, 'noactivo');
html = html.replace(/#MSG:DESCRIPCION_ESTADO_USUARIO#/g, 'No conectado');
}
if (hashDatosUsuario.profesion != '') {
html = html.replace(/#MSG:INI_DIV_PROFESION#/g, '');
html = html.replace(/#MSG:FIN_DIV_PROFESION#/g, '');
html = html.replace(/#MSG:PROFESION_USUARIO#/g, hashDatosUsuario.profesion);
}
else {
html = html.replace(/#MSG:INI_DIV_PROFESION#.*?#MSG:FIN_DIV_PROFESION#/g, '');
}
if ( (hashDatosUsuario.urlwebpersonal != '') || (hashDatosUsuario.urlblog != '') || (hashDatosUsuario.urltwitter != '') ) {
html = html.replace(/#MSG:INI_DIV_URL#/g, '');
html = html.replace(/#MSG:FIN_DIV_URL#/g, '');
}
else {
html = html.replace(/#MSG:INI_DIV_URL#.*?#MSG:FIN_DIV_URL#/g, '');
}
if (hashDatosUsuario.urlwebpersonal != '') {
html = html.replace(/#MSG:INI_DIV_WEB#/g, '');
html = html.replace(/#MSG:FIN_DIV_WEB#/g, '');
html = html.replace(/#MSG:WEB_USUARIO#/g, hashDatosUsuario.urlwebpersonal);
}
else {
html = html.replace(/#MSG:INI_DIV_WEB#.*?#MSG:FIN_DIV_WEB#/g, '');
}
if (hashDatosUsuario.urlblog != '') {
html = html.replace(/#MSG:INI_DIV_BLOG#/g, '');
html = html.replace(/#MSG:FIN_DIV_BLOG#/g, '');
html = html.replace(/#MSG:WBLOG_USUARIO#/g, hashDatosUsuario.urlblog);
}
else {
html = html.replace(/#MSG:INI_DIV_BLOG#.*?#MSG:FIN_DIV_BLOG#/g, '');
}
if (hashDatosUsuario.urltwitter != '') {
html = html.replace(/#MSG:INI_DIV_TWITTER#/g, '');
html = html.replace(/#MSG:FIN_DIV_TWITTER#/g, '');
html = html.replace(/#MSG:TWITTER_USUARIO#/g, hashDatosUsuario.urltwitter);
}
else {
html = html.replace(/#MSG:INI_DIV_TWITTER#.*?#MSG:FIN_DIV_TWITTER#/g, '');
}
if (hashDatosUsuario.descripcion != '') {
html = html.replace(/#MSG:INI_DIV_DESCRIPCION#/g, '');
html = html.replace(/#MSG:FIN_DIV_DESCRIPCION#/g, '');
html = html.replace(/#MSG:DESCRIPCION_USUARIO#/g, hashDatosUsuario.descripcion);
}
else {
html = html.replace(/#MSG:INI_DIV_DESCRIPCION#.*?#MSG:FIN_DIV_DESCRIPCION#/g, '');
}
html = html.replace(/#MSG:SEGUIDORES_USUARIO#/g,        hashDatosUsuario.numero_seguidores);
html = html.replace(/#MSG:SEGUIDOS_USUARIO#/g,          hashDatosUsuario.numero_usuarios);
html = html.replace(/#MSG:EVENTOS_SEGUIDOS_USUARIO#/g,  hashDatosUsuario.numero_eventos);
html = html.replace(/#MSG:MENSAJES_USUARIO#/g,          hashDatosUsuario.numero_mensajes_propios);
html = html.replace(/#MSG:REFERENCIAS_USUARIO#/g,       hashDatosUsuario.numero_mensajes_referenciados);
var numero_eventos_escribe = 0;
if (hashDatosUsuario.numero_eventos_escribe) {
numero_eventos_escribe = hashDatosUsuario.numero_eventos_escribe;
}
html = html.replace(/#MSG:EVENTOS_ESCRITOS_USUARIO#/g,  numero_eventos_escribe);
html = html.replace(/#MSG:URL_SEGUIDORES_USUARIO#/g,        _url_servidor + '/' + nick + '/seguidores');
html = html.replace(/#MSG:URL_SEGUIDOS_USUARIO#/g,          _url_servidor + '/' + nick + '/seguidos');
html = html.replace(/#MSG:URL_EVENTOS_SEGUIDOS_USUARIO#/g,  _url_servidor + '/' + nick + '/temasseguidos');
html = html.replace(/#MSG:URL_EVENTOS_ESCRITOS_USUARIO#/g,  _url_servidor + '/' + nick + '/temasescritos');
html = html.replace(/#MSG:URL_MENSAJES_USUARIO#/g,          _url_servidor + '/' + nick);
html = html.replace(/#MSG:URL_REFERENCIAS_USUARIO#/g,       _url_servidor + '/' + nick  + '/referencias');
return (html);
}
function f_obtener_div_error_html() {
var html = "Se ha producido un error al obtener los datos. Por favor, revisa que el valor del parámetro 'gta' es correcto";
return (html);
}
function f_pinta_caja_html_perfil_usuario(idUsuario) {
var html = '';
if ( (typeof _hashDatosUsuarios.perfilesUsuarios == "undefined") || (typeof _hashDatosUsuarios.perfilesUsuarios[idUsuario] == "undefined") ) {
if (_mostrarDatosPerfilUsuario == 1) {
html = f_obtener_div_error_html();
}
}
else {
html = f_obtener_div_html_perfil_usuario(_idPlantillaUsuario, _htmlPlantillaPersonalizadaUsuario, _hashDatosUsuarios.perfilesUsuarios[idUsuario], idUsuario);
}
var divCajaUsuario = document.getElementById('id_info_usuario');
if (_mostrarDatosPerfilUsuario == 1) {
divCajaUsuario.style.display = '';
}
else {
divCajaUsuario.style.display = 'none';
}
divCajaUsuario.innerHTML = html;
var divCajaEvento = document.getElementById('id_info_evento');
divCajaEvento.style.display = 'none';
divCajaEvento.innerHTML = '';
if (document.getElementById('boton_publicar')) {
var botonPublicar = document.getElementById('boton_publicar');
botonPublicar.innerHTML = 'Enviar';
}
var estado_escribir = '';
if (idUsuario != _nickname) {
estado_escribir = 'none';
}
else {
estado_escribir = '';
}
if (document.getElementById('id_escribir_mensaje')) {
var divEscribir= document.getElementById('id_escribir_mensaje');
divEscribir.style.display = estado_escribir;
}
if (document.getElementById('id_aviso_escribir_mensaje')) {
var divAvisoEscribir= document.getElementById('id_aviso_escribir_mensaje');
divAvisoEscribir.style.display = 'none';
}
}
function f_pinta_caja_html_perfil_evento(idEvento) {
var html    = '';
if ( (typeof _hashDatosEventos.perfilesEventos == "undefined") || (typeof _hashDatosEventos.perfilesEventos[idEvento] == "undefined") ) {
if (_mostrarDatosPerfilEvento == 1) {
html = f_obtener_div_error_html();
}
}
else {
html = f_obtener_div_html_perfil_evento(_idPlantillaEvento, _htmlPlantillaPersonalizadaEvento, _hashDatosEventos.perfilesEventos[idEvento], idEvento);
}
var divCajaEvento = document.getElementById('id_info_evento');
if (_mostrarDatosPerfilEvento == 1) {
divCajaEvento.style.display = '';
}
else {
divCajaEvento.style.display = 'none';
}
divCajaEvento.innerHTML = html;
var divCajaUsuario = document.getElementById('id_info_usuario');
divCajaUsuario.style.display = 'none';
divCajaUsuario.innerHTML = '';
if (document.getElementById('boton_publicar')) {
var botonPublicar = document.getElementById('boton_publicar');
botonPublicar.innerHTML = 'Enviar';
}
if (_hashDatosEventos.perfilesEventos[idEvento]) {
var datosTema = _hashDatosEventos.perfilesEventos[idEvento];
var tipoSuscripcion = datosTema.tipo_suscripcion;
var puedeEscribir = datosTema.estado_escritura;
var html = '';
var estado_aviso_escribir = '';
var estado_escribir = '';
var mostrar_boton_responder = '';
if (tipoSuscripcion == 0) {
estado_escribir = 'none';
estado_aviso_escribir = 'none';
mostrar_boton_responder = 0;
}
else {
if (puedeEscribir == 1) {
estado_escribir = '';
estado_aviso_escribir = 'none';
mostrar_boton_responder = 1;
}
else {
var date_actual = new Date();
var ts_actual = Math.round(date_actual.getTime() / 1000);
var evento_cerrado = 0;
if (ts_actual > datosTema.ts_final) {
evento_cerrado = 1;
}
if ( (datosTema.activo == 0) || (evento_cerrado == 1) ) {
estado_escribir = 'none';
estado_aviso_escribir = 'none';
mostrar_boton_responder = 0;
}
else {
estado_escribir = 'none';
estado_aviso_escribir = '';
mostrar_boton_responder = 0;
var msg_aviso = '';
if (_nickname == '') {
msg_aviso = msg_aviso + '    <p class="variaslineas">Para poder escribir en este tema necesitas registrarte. Si est&aacute;s registrado ya puedes participar.</p>';
}
else {
msg_aviso = msg_aviso + '    <p class="variaslineas">Si quieres escribir en este tema <b>pulsa el botón</b>. ¡Gracias!<br>';
msg_aviso = msg_aviso + '    <a class="solicitar" href="javascript:solicitaAutorizacion(\''+idEvento+'\');">Solicitar</a>';
}
html = html + '  <div class="aviso" id="id_aviso">';
html = html + msg_aviso;
html = html + '  </div><!-- === cierre div aviso === -->';
}
}
}
if (document.getElementById('id_escribir_mensaje')) {
var divEscribir= document.getElementById('id_escribir_mensaje');
divEscribir.style.display = estado_escribir;
}
if (document.getElementById('id_aviso_escribir_mensaje')) {
var divAvisoEscribir= document.getElementById('id_aviso_escribir_mensaje');
divAvisoEscribir.innerHTML = html;
divAvisoEscribir.style.display = estado_aviso_escribir;
}
}
}
function solicitaAutorizacion(idEvento){
f_peticion_eskup_escritura(idEvento);
document.getElementById("id_aviso").style.display="none";
}
function cambiarPestanaComentarios(tipoHilo) {
_tipoHilo                = tipoHilo;
_numPagCache             = 1;
_numPagActual            = 1;
_hashMsgs                = Array();
_ultimaRecargaServidor   = 0;
location.href = "#" + _numPagActual;
document.getElementById(_idContenedorMsgs).innerHTML = "";
document.getElementById(_idContenedorPag).innerHTML = "";
document.getElementById(_idContenedorErr).innerHTML = "";
if (document.getElementById(_idContenedorRefr)) {
_hayInformacionPendiente = false;
document.getElementById(_idContenedorRefr).style.display = 'none';
}
if (document.getElementById('contenedor_paginacion')) {
document.getElementById('contenedor_paginacion').style.display = 'none';
}
if (document.getElementById('contenedor_paginacion_abajo')) {
document.getElementById('contenedor_paginacion_abajo').style.display = 'none';
}
f_pinta_pestanas_comentarios(_tipoHilo);
if (tipoHilo == 'o') {
_tsTablon1 = _tsTablonOp;
} else if (tipoHilo == '2') {
_tsTablon1 = _tsTablonSeg;
} else {
_tsTablon1 = _tsTablonTodos;
}
recuperarInformacionMensajes();
}
function f_pinta_pestanas_comentarios(tipoHiloActivo) {
if (tipoHiloActivo == 'o') {
document.getElementById('li_pestana_opinadores').className = 'estirar activo';
document.getElementById('flecha_num_comentarios_pestana_opinadores').className = '';
document.getElementById('aviso_nuevos_comentarios_pestana_opinadores').style.display = 'none';
} else {
document.getElementById('li_pestana_opinadores').className = 'estirar inactivo';
}
if (tipoHiloActivo == '2') {
document.getElementById('li_pestana_loquesigo').className = 'estirar activo';
document.getElementById('flecha_num_comentarios_pestana_loquesigo').className = '';
document.getElementById('aviso_nuevos_comentarios_pestana_loquesigo').style.display = 'none';
} else {
document.getElementById('li_pestana_loquesigo').className = 'estirar inactivo';
}
if (tipoHiloActivo == '') {
document.getElementById('li_pestana_todo').className = 'todos_mensajes activo';
document.getElementById('flecha_num_comentarios_pestana').className = '';
document.getElementById('aviso_nuevos_comentarios_pestana').style.display = 'none';
} else {
document.getElementById('li_pestana_todo').className = 'todos_mensajes inactivo';
}
}
