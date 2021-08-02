/*
 * Funciones genericas para encuestas
 */



//
// Funcion para cerrar la ventana actual
//
function f_cerrar_ventana() {
    // Se cierra la ventana
    window.close()
}

/* ESTA SE USA?? */

/* Para visualizar los resultados desde verResultados.php */
function f_carga_datos() {

    var html = '';
    var divEncuestas = null;

    // Se comprueba si hay resultados
    var numero_votos_encuesta = 0;
    var lista_resultado_preguntas = new Array();
    if (typeof _hashResultadosEncuesta.numero_votos != 'undefined') {
        numero_votos_encuesta = _hashResultadosEncuesta.numero_votos;
        lista_resultado_preguntas = _hashResultadosEncuesta.preguntas;
    }

    // Se comprueba que vienen los datos de la encuesta
    if (typeof _hashDatosEncuesta.codigo_encuesta == 'undefined') {
        // Se compone el html de error
        html = html + '<div class="pregunta" id="pregunta_0">No hay resultados disponibles</div>';

        // Se pinta el HTML obtenido en el div
        divEncuestas = document.getElementById('resultados_encuesta');
        divEncuestas.innerHTML = html;
        return;
    }

    //
    // TODO: Comprobar que son hash y que vienen resultados...
    //

    // Se obtienen datos de la encuesta
    var titulo_encuesta  = _hashDatosEncuesta.titulo_encuesta;
    var numero_preguntas = _hashDatosEncuesta.numero_preguntas;
    var lista_preguntas  = _hashDatosEncuesta.preguntas;

    html = html + '<div class="encuesta">';
    html = html + 'Titulo encuesta: <span class="texto_titulo">' + titulo_encuesta + '</span><br/>';
    html = html + 'Votos: <span class="texto_votos">' + numero_votos_encuesta + '</span>';
    html = html + '</div>';
    html = html + '<hr/>';

    if (numero_preguntas > 0) {
        // Se compone el html para las preguntas

        for (i = 1; i <= numero_preguntas; i++) {
            var clave_pregunta = 'pregunta_' + i;
            var datos_pregunta = lista_preguntas[clave_pregunta];

            // Se obtiene el titulo de la pregunta
            var titulo_pregunta = '';
            if (datos_pregunta.titulo_pregunta) {
                titulo_pregunta = datos_pregunta.titulo_pregunta;
            }

            var tipo_pregunta = 1; // Por defecto, radio button
            if (datos_pregunta.tipo_pregunta) {
                tipo_pregunta = datos_pregunta.tipo_pregunta;
            }

            var lista_resultado_respuestas = new Array();
            if (lista_resultado_preguntas[clave_pregunta]) {
                lista_resultado_respuestas = lista_resultado_preguntas[clave_pregunta].respuestas;
            }

            // Se inicia el html para la pregunta
            html = html + '<div class="pregunta" id="' + clave_pregunta + '">';
            html = html + '<span class="titulo_pregunta"><strong>' + titulo_pregunta + '</strong></span>';

            // Se procesan las respuestas
            var numero_respuestas = datos_pregunta.numero_respuestas;
            var lista_respuestas  = datos_pregunta.respuestas;

            for (j = 1; j <= numero_respuestas; j++) {

                // Se obtiene la respuesta y su titulo
                var clave_respuesta = 'respuesta_' + j;
                var titulo_respuesta = lista_respuestas[clave_respuesta];

                // En funcion del tipo de la pregunta se obtiene la respuesta (votos o texto)
                var valor_respuesta = '';
                if (tipo_pregunta == 3) {
                    if (lista_resultado_respuestas[clave_respuesta]) {
                        valor_respuesta = lista_resultado_respuestas[clave_respuesta];
                    }
                    valor_respuesta = '<strong>' + valor_respuesta + '</strong>';
                }
                else {
                    // Se obtiene el numero de votos para esa respuesta
                    var numero_votos_respuesta = 0;
                    if (lista_resultado_respuestas[clave_respuesta]) {
                        numero_votos_respuesta = lista_resultado_respuestas[clave_respuesta];
                    }
                    valor_respuesta = numero_votos_respuesta;
                }

                // Se pone la respuesta....y sus votos
                html = html + '<p>';
                html = html + '<span class="titulo_respuesta">' + titulo_respuesta + '</span>:&nbsp;';
                html = html + '<span class="votos_respuesta">' + valor_respuesta + '</span>';
                html = html + '</p>';
            }
            
            // Fin de pregunta
            html = html + '</div>';
        }
    }
    else {
        
    }

    // Se pinta el HTML obtenido en el div
    divEncuestas = document.getElementById('resultados_encuesta');
    divEncuestas.innerHTML = html;
}





function f_obtener_resultados_encuesta(codigoEncuesta) {

    var urlResultados = "";
    eval("urlResultados = _urlResultados_"+codigoEncuesta+";");

    EPETUtils_makeHttpRequestGet(function(httpRequest) {

        if (httpRequest.status != 200) {
            ////alert("Se ha producido un error al obtener los resultados de la encuesta (" + urlResultados + "')");
            eval("_hashResultadosEncuesta_"+codigoEncuesta+" = {};");
        }
        else {
            // Todo OK. Recibida respuesta
            var data = httpRequest.responseText;

            // Se obtiene el has de resultado
            eval("_hashResultadosEncuesta_"+codigoEncuesta+" = " + data);

            // Se pinta el numero de votos
            f_pintar_numero_votos(codigoEncuesta);

            // Se pintan los resultados
            f_pintar_votos(codigoEncuesta);
        }
    }, urlResultados + "?rnd=" + Math.random());
}


function f_pintar_numero_votos(codigoEncuesta) {

    // Se comprueba si hay resultados
    var numero_votos_encuesta = 0;
    var cadena_numero_respuestas = numero_votos_encuesta + ' respuesta';

    var hashResultadosEncuesta = Array();
    eval("hashResultadosEncuesta = _hashResultadosEncuesta_"+codigoEncuesta+";");

    if (typeof hashResultadosEncuesta.numero_votos != 'undefined') {
        // Se obtiene el dato del numero de votos
        numero_votos_encuesta = hashResultadosEncuesta.numero_votos;

        cadena_numero_respuestas = numero_votos_encuesta + ' respuesta';
        if ( (numero_votos_encuesta == 0) || (numero_votos_encuesta > 1) ) {
            cadena_numero_respuestas = cadena_numero_respuestas + 's';
        }
    }
    else {
        // No existe el numero de votos
        cadena_numero_respuestas = '--';
    }

    // Se pone el valor en el div del numero de votos
    if (document.getElementById('div_numero_respuestas_'+codigoEncuesta)) {
        var divNumeroEncuestas = document.getElementById('div_numero_respuestas_'+codigoEncuesta);
        divNumeroEncuestas.innerHTML = cadena_numero_respuestas;
    }
}


function f_pintar_votos(codigoEncuesta) {

    // Se comprueba si hay resultados
    var numero_votos_encuesta = 0;
    var lista_preguntas = new Array();
    var hashResultadosEncuesta = Array();
    eval("hashResultadosEncuesta = _hashResultadosEncuesta_"+codigoEncuesta+";");

    if (typeof hashResultadosEncuesta.numero_votos != 'undefined') {
        numero_votos_encuesta = hashResultadosEncuesta.numero_votos;
    }

    // Se obtiene el numero de preguntas
    var numero_preguntas = 0;
    if (typeof hashResultadosEncuesta.numero_preguntas != 'undefined') {
        numero_preguntas = hashResultadosEncuesta.numero_preguntas;
        lista_preguntas  = hashResultadosEncuesta.preguntas;
    }

    // Si no hay votos o preguntas no se hace nada...
    if ( (numero_votos_encuesta == 0) || (numero_preguntas == 0) )  {
        return;
    }

    // Se procesan las preguntas
    for (i = 1; i <= numero_preguntas; i++) {

        // Se obtiene la pregunta
        var clave_pregunta = 'pregunta_' + i;
        var datos_pregunta = lista_preguntas[clave_pregunta];

        // Se obtiene la lista de respuestas de esa pregunta
        var lista_respuestas = new Array();
        if (lista_preguntas[clave_pregunta]) {
            lista_respuestas = lista_preguntas[clave_pregunta].respuestas;
        }


        ////////////////////////////////////////////////////////////////////////
        // Se obtiene el numero total de respuestas de esa pregunta
        var numero_total_votos_pregunta = 0;
        var numero_respuestas = datos_pregunta.numero_respuestas;
        for (j = 1; j <= numero_respuestas; j++) {
            // Se obtiene la clave respuesta
            var clave_respuesta = 'respuesta_' + j;

            // Se obtiene el numero de votos
            var numero_votos_respuesta = 0;
            if (lista_respuestas[clave_respuesta]) {
                // Se asigna el numero de votos
                numero_votos_respuesta = lista_respuestas[clave_respuesta];
                numero_total_votos_pregunta = numero_total_votos_pregunta + numero_votos_respuesta;
            }
        }
        ////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////


        // Se procesan las respuestas de esa pregunta
        var numero_respuestas = datos_pregunta.numero_respuestas;
        for (j = 1; j <= numero_respuestas; j++) {

            // Se obtiene la clave respuesta
            var clave_respuesta = 'respuesta_' + j;

            // Se obtiene el numero de votos
            var numero_votos_respuesta = 0;
            var valor_porcentaje_votos = 0;
            var valor_porcentaje_barra = 0;
            if (lista_respuestas[clave_respuesta]) {

                // Se asigna el numero de votos
                numero_votos_respuesta = lista_respuestas[clave_respuesta];

                // Se obtiene el porcentaje de los votos
                //valor_porcentaje_votos = (numero_votos_respuesta / numero_votos_encuesta) * 100;
                valor_porcentaje_votos = (numero_votos_respuesta / numero_total_votos_pregunta) * 100;
                valor_porcentaje_votos = valor_porcentaje_votos.toPrecision(4);

                // Se obtiene el porcentaje de la barra
                // Es el 85% del valor, para que entre el literal
                valor_porcentaje_barra = valor_porcentaje_votos * 0.85;
                valor_porcentaje_barra = valor_porcentaje_barra.toPrecision(4);
            }

            // Se pintan los datos obtenidos de la respuesta
            var codigo_campo = i + '_' + j;
            var divBarraRespuesta = document.getElementById('valor_barra_' + codigo_campo + '_' + codigoEncuesta);
            var divVotosRespuesta = document.getElementById('valor_votos_' + codigo_campo + '_' + codigoEncuesta);

            divBarraRespuesta.style.width = valor_porcentaje_barra + '%';
            //divVotosRespuesta.innerHTML   = valor_porcentaje_votos + '% (' + numero_votos_respuesta + ')';
            divVotosRespuesta.innerHTML   = valor_porcentaje_votos + '%';
        }
    }

}



/*
 * Para las pestanas
 *
 */
function f_mostrar_votacion(codigoEncuesta) {

    // Se resetean los campos de la votacion..por si acaso
//    document.formulario.reset();
    document.getElementById('formulario_'+codigoEncuesta).reset();

    // Se activan las pestana correspondientes
    var pestana_votacion   = document.getElementById('pestana_votacion_'+codigoEncuesta);
    pestana_votacion.className = 'activo';
    var pestana_resultados = document.getElementById('pestana_resultados_'+codigoEncuesta);
    pestana_resultados.className = '';

    // Se oculta el div de resultados y se muestra el de la votacion (preguntas)
    var div_votacion   = document.getElementById('contenido_votacion_'+codigoEncuesta);
    div_votacion.style.display = '';
    var div_resultado = document.getElementById('contenido_resultado_'+codigoEncuesta);
    div_resultado.style.display = 'none';

    // Se oculta el div de info
    f_mostrar_capa_info('', '', 'none', codigoEncuesta);

}

function f_mostrar_resultados(codigoEncuesta) {

    // Se activan las pestana correspondientes
    if ( document.getElementById('pestana_votacion_'+codigoEncuesta) ) {
        var pestana_votacion   = document.getElementById('pestana_votacion_'+codigoEncuesta);
        pestana_votacion.className = '';
    }
    if ( document.getElementById('pestana_resultados_'+codigoEncuesta) ) {
        var pestana_resultados = document.getElementById('pestana_resultados_'+codigoEncuesta);
        pestana_resultados.className = 'activo';
    }

    // Se obtiene el fichero JSON con los resultados de la encuesta
    // y se pintan los datos
    f_obtener_resultados_encuesta(codigoEncuesta);

    // Se oculta el div de preguntas y se muestra el de los resultados
    if (document.getElementById('contenido_votacion_'+codigoEncuesta)) {
        var div_votacion = document.getElementById('contenido_votacion_'+codigoEncuesta);
        div_votacion.style.display = 'none';
    }

    if (document.getElementById('contenido_resultado_'+codigoEncuesta)) {
        var div_resultado = document.getElementById('contenido_resultado_'+codigoEncuesta);
        div_resultado.style.display = '';
    }

}

function f_mostrar_capa_info(mensaje, class_estado, estilo_visible, codigoEncuesta) {

    // Se muestra el div de informacion
    var div_mensaje_votacion = null;
    if ( document.getElementById('div_mensaje_votacion_'+codigoEncuesta) ) {
        div_mensaje_votacion                = document.getElementById('div_mensaje_votacion_'+codigoEncuesta);
        div_mensaje_votacion.className      = 'info ' + class_estado;
        div_mensaje_votacion.style.display  = estilo_visible;
        div_mensaje_votacion.innerHTML      = mensaje;
    }
    
}



/*
 * Para votar
*/
function f_enviar_votos_por_AJAX(codigoEncuesta) {

    var encuesta_completa = f_esta_encuesta_completa(codigoEncuesta);
    if (encuesta_completa == false) {
        var capa_error_votacion = document.getElementById('capa_error_votacion');
        capa_error_votacion.style.display = 'block';
    }
    else {
        var firma           = document.getElementById('firma_'+codigoEncuesta).value;
        var firma_encuesta  = document.getElementById('firma_encuesta_'+codigoEncuesta).value;

        var _urlVotacion = '/encuestas/votarEncuesta.php';
        var cadena_params = "codigo_encuesta=" + codigoEncuesta;
        cadena_params = cadena_params + '&firma=' + firma;
        cadena_params = cadena_params + '&firma_encuesta=' + firma_encuesta;
        EPETUtils_makeHttpRequest(function(httpRequest) {

            if (httpRequest.status != 200) {
                //alert("Se ha producido un error al enviar los datos. Por favor, inténtalo más tarde");
            }
            else {
                // Todo OK. Recibida respuesta
                var data = httpRequest.responseText;
                //alert("recibido: " + data);

                // Se obtiene el has de resultado
                eval("_hashResultado = " + data);

                var mensaje = '<p><strong>Se ha producido un error en el registro de tu voto.</strong> Por favor, int&eacute;ntalo de nuevo m&aacute;s tarde</p>';
                var codigo_error = _hashResultado.codigo_error;
                if ( (codigo_error == 1) || (codigo_error == -4) ) {
                    // Todo OK o voto ya repetido
                    mensaje = '<p><strong>Gracias por participar.</strong> Tu voto se ha registrado correctamente</p>';
                    f_mostrar_capa_info(mensaje, 'ok', 'block', codigoEncuesta);
                }
                else {
                    if (codigo_error == -2) {
                        // Error. Encuesta cerrada
                        mensaje = '<p>Por motivos informativos la encuesta ya est&aacute; cerrada al voto</p>';
                        f_mostrar_capa_info(mensaje, 'cerrado', 'block', codigoEncuesta);
                    }
                    else {
                        // Otro. Error generico
                        // Error. Firma no valida
                        f_mostrar_capa_info(mensaje, 'error', 'block', codigoEncuesta);
                    }
                }

                // Muestra resultados de los votos
                f_mostrar_resultados(codigoEncuesta);
            }
        }, _urlVotacion, cadena_params);
    }
}


function f_enviar_votos(codigoEncuesta) {
    f_votar_encuesta(codigoEncuesta);
}

function f_votar_encuesta(codigoEncuesta) {
    //location.href='/encuestas/votarEncuesta.php?&codigo_encuesta=' + idEncuesta;
    var encuesta_completa = f_esta_encuesta_completa(codigoEncuesta);
    if (encuesta_completa == false) {
        var capa_error_votacion = document.getElementById('capa_error_votacion');
        capa_error_votacion.style.display = 'block';
    }
    else {
        // Se envian los datos
        document.getElementById('formulario_'+codigoEncuesta).submit();
    }
}


function f_procesar_voto(codigoEncuesta) {

    var iframe_votar = document.getElementById('iframe_votar_'+codigoEncuesta);
    if (iframe_votar.contentDocument) {
        var d = iframe_votar.contentDocument;
    } else if (iframe_votar.contentWindow) {
        var d = iframe_votar.contentWindow.document;
    } else {
        var d = window.frames['iframe_votar_'+codigoEncuesta].document;
    }
    if (d.location.href == "about:blank") {
        return true;
    }

    if (d == null) {
        return true;
    }

    var cuerpo = d.body;
    ///var cuerpo = d.documentElement;
    var html_cuerpo = cuerpo.innerHTML;
    if (html_cuerpo == '') {
      html_cuerpo = '{}';
    }
    //else {
    //  alert(html_cuerpo);
    //}

    // Se evalua el "json" devuelto
    eval("_hashResultado = " + html_cuerpo);
    var codigo_error = _hashResultado.codigo_error;
    var mensaje = '<p><strong>Se ha producido un error en el registro de tu voto.</strong> Por favor, int&eacute;ntalo de nuevo m&aacute;s tarde</p>';
    if ( (codigo_error == 1) || (codigo_error == -4) ) {
        // Todo OK o voto ya repetido
        mensaje = '<p><strong>Gracias por participar.</strong> Tu voto se ha registrado correctamente</p>';
        f_mostrar_capa_info(mensaje, 'ok', 'block', codigoEncuesta);
    }
    else {
        if (codigo_error == -2) {
            // Error. Encuesta cerrada
            mensaje = '<p>Por motivos informativos la encuesta ya est&aacute; cerrada al voto</p>';
            f_mostrar_capa_info(mensaje, 'cerrado', 'block', codigoEncuesta);
        }
        else {
            // Otro. Error generico
            // Error. Firma no valida
            f_mostrar_capa_info(mensaje, 'error', 'block', codigoEncuesta);
        }
    }

    // Muestra resultados de los votos
    f_mostrar_resultados(codigoEncuesta);

    //
    // VOTO CORRECTO
    //
    return true;
}








function f_ver_pagina_resultados(urlEncuesta) {
    //location.href='/encuestas/verResultados.php?codigo_encuesta=' + codigoEncuesta;
    location.href=urlEncuesta;
}



//
// Para comprobar los campos de la encuesta
//
function f_esta_encuesta_completa(codigoEncuesta) {

    var encuesta_completa = true;

    // Se obtiene el campo de datos de la firma que contiene la informacion de la encuesta
    var campo_firma = document.getElementById('firma_encuesta_'+codigoEncuesta);
    var valor_firma = campo_firma.value;

    // Se obtienen cada uno de los datos de la firma
    var datos_firma = valor_firma.split('#');
    var numero_campos = datos_firma.length;

    // Se obtiene el campo de las preguntas de la encuesta
    var cadena_preguntas = datos_firma[2];

    // Se obtiene cada una de las preguntas
    var lista_preguntas = cadena_preguntas.split(':');
    var numero_preguntas = lista_preguntas.length;
    for (var i = 0; i < numero_preguntas; i++) {

        // Se obtiene una pregunta de la lista
        var pregunta = lista_preguntas[i];
        if (pregunta != '') {
            var datos_pregunta = pregunta.split('|');

            // Se obtienen los datos de esa pregunta
            var numero_pregunta   = datos_pregunta[0];
            var tipo_pregunta     = datos_pregunta[1];
            var numero_respuestas = datos_pregunta[2];

            var respuesta_completa = false;

            // Campo radio button
            if (tipo_pregunta == 1) {
                respuesta_completa = f_comprobar_respuesta_campo_radio(numero_pregunta, numero_respuestas, codigoEncuesta);
            }

            // Campo checkbox
            if (tipo_pregunta == 2) {
                respuesta_completa = f_comprobar_respuesta_campo_check(numero_pregunta, numero_respuestas, codigoEncuesta);
            }

            // Campo input text
            if (tipo_pregunta == 3) {
                respuesta_completa = f_comprobar_respuesta_campo_texto(numero_pregunta, numero_respuestas, codigoEncuesta);
            }

            if (respuesta_completa == false) {
                encuesta_completa = false;
            }
        }

    }

    // Se devuelve el resultado
    return encuesta_completa;
}


function f_comprobar_respuesta_campo_radio(idPregunta, numero_respuestas, codigoEncuesta) {

    var campo_seleccionado = false;

    // Se recorren todas las respuestas para ver si hay alguna seleccionada
    for (i = 1; i <= numero_respuestas; i++) {

        // Se compone el nombre del campo
        var nombre_campo = 'radio_respuesta_' + idPregunta + '_' + i + '_' + codigoEncuesta;

        // Se obtiene el campo
        var campo = document.getElementById(nombre_campo);
        if (campo.checked == true) {
            campo_seleccionado = true;
        }
    }

    // Se devuelve el resultado
    return campo_seleccionado;
}

function f_comprobar_respuesta_campo_check(idPregunta, numero_respuestas, codigoEncuesta) {

    var campo_seleccionado = false;

    // Se recorren todas las respuestas para ver si hay alguna seleccionada
    for (i = 1; i <= numero_respuestas; i++) {

        // Se compone el nombre del campo
        var nombre_campo = 'check_respuesta_' + idPregunta + '_' + i + '_' + codigoEncuesta;

        // Se obtiene el campo
        var campo = document.getElementById(nombre_campo);
        if (campo.checked == true) {
            campo_seleccionado = true;
        }
    }

    // Se devuelve el resultado
    return campo_seleccionado;
}

function f_comprobar_respuesta_campo_texto(idPregunta, numero_respuestas, codigoEncuesta) {

    var campo_seleccionado = false;

    // Se recorren todas las respuestas para ver si hay alguna seleccionada
    for (i = 1; i <= numero_respuestas; i++) {

        // Se compone el nombre del campo
        var nombre_campo = 'text_respuesta_' + idPregunta + '_' + i + '_' + codigoEncuesta;

        // Se obtiene el campo
        var campo = document.getElementById(nombre_campo);
        if (campo.value != '') {
            campo_seleccionado = true;
        }
    }

    // Se devuelve el resultado
    return campo_seleccionado;
}
