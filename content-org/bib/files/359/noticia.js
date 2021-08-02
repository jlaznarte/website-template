<!--

function EPETalternacampos(id_campo1, estilo_campo1, id_campo2, estilo_campo2) {

    document.getElementById(id_campo1).style.display = estilo_campo1;
    document.getElementById(id_campo2).style.display = estilo_campo2;
}


function EPETavanzaAutor(id_autor, id_autor_siguiente, id_autor_anterior) {

    document.getElementById('caja_autor_' + id_autor_siguiente).style.display = '';
    document.getElementById('paginacion_' + id_autor_siguiente).style.display = '';

    document.getElementById('caja_autor_' + id_autor).style.display = 'none';
    document.getElementById('paginacion_' + id_autor).style.display = 'none';
}

function EPETretrocedeAutor(id_autor, id_autor_siguiente, id_autor_anterior) {

    document.getElementById('caja_autor_' + id_autor_anterior).style.display = '';
    document.getElementById('paginacion_' + id_autor_anterior).style.display = '';

    document.getElementById('caja_autor_' + id_autor).style.display = 'none';
    document.getElementById('paginacion_' + id_autor).style.display = 'none';
}

function EPETshowHideTags (divId) {
    var objTags = document.getElementById(divId);
    objTags.className+=" alto_limitado";
    var height = objTags.scrollHeight;
    if ( height < 47 ) {
        // No hay mas de dos filas de tags, dibujo una linea
        var span =  document.createElement("SPAN");
        span.className = 'linea';
        span.style.display = 'block';
        objTags.parentNode.appendChild(span);

    } else {
        objTags.style.maxHeight    = '';
        // Hay mas de dos filas, saco el boton para mostrar
        var linkOpen = document.createElement('A');
        linkOpen.className = 'mostrar';
        linkOpen.title = 'Mostrar más';
        linkOpen.style.display = 'block';
        linkOpen.href = "javascript:void(0);";

        var linkClose = document.createElement('A');
        linkClose.className = 'ocultar';
        linkClose.title = 'Ocultar';
        linkClose.style.display = 'none';
        linkClose.href = "javascript:void(0);";


        linkOpen.onclick = function() { 
            //objTags.style.maxHeight    = '';
            linkOpen.style.display  = 'none';
            linkClose.style.display = 'block';
	    objTags.className+=" alto_libre";
	    objTags.className=objTags.className.replace(' alto_limitado',"");


        };
        linkClose.onclick = function() { 
            //objTags.style.maxHeight    = '37px';
            linkOpen.style.display  = 'block';
            linkClose.style.display = 'none';
	    objTags.className+=" alto_limitado";
	    objTags.className=objTags.className.replace(' alto_libre',"");

        };

        objTags.parentNode.appendChild(linkOpen);
        objTags.parentNode.appendChild(linkClose);
    }
} // EPETshowHideTags


function getTitleFromMeta() { 
    var metas = document.getElementsByTagName('meta'); 
    for (i=0; i<metas.length; i++) { 
        if (metas[i].getAttribute("name") == "DC.title") { 
            return metas[i].getAttribute("content"); 
        } 
    } 
    return "";
} 

/*
 * Objeto Twitter
 *
 */

var GlobRecvCount = {
    twitterObjs:  new Array(),
    facebookObjs: new Array(),
    googleObjs:   new Array()
}

function EPETTwitter(_aElement, _countDiv, ParameterObj) {
    /* The ref to the caller and the countDiv element is a must */
    if ( !_aElement )
        return false;

    if ( !_countDiv )
        return false;

    if ( typeof(ParameterObj) != 'object' ) {
        ParameterObj = 0;
    }

    /* Properties */
    var aElement = _aElement;
    var countDiv = _countDiv;

    var objNum = GlobRecvCount.twitterObjs.push(this) - 1;

    var via = 'el_pais';
    var url = window.location.href;
    var text = ( document.getElementsByTagName('title') )? encodeURI(document.getElementsByTagName('title')[0].innerHTML.split('|')[0]) : '';

    if ( ParameterObj ) {
        if ( ParameterObj['via'] ) {
            via = ParameterObj['via'];
        }
        if ( ParameterObj['url'] ) {
            url = ParameterObj['url'];
        }
        if ( ParameterObj['text'] ) {
            text = ParameterObj['text'];
        }
    }

    var regex = /(^.+\.html)(\?|#).*$/;
    if ( regex.test (url) ) {
        url = url.replace(regex, '$1' );
    }

    var call        = 'http://twitter.com/share?url=' + url + '&text=' + text + '&via=' + via;
    var twittedCall = 'http://twitter.com/search?q=' + url;
    var countCall  = 'http://urls.api.twitter.com/1/urls/count.json?url=' + url + '&callback=GlobRecvCount.t' + objNum + '.recvCount';

    /* Methods */

    /* Open a window centered on the screen with the SN */
    function clicked() {

        var width   = 550;
        var height  = 450;
        var sheight = screen.height;
        var swidth  = screen.width;

        var left = Math.round((swidth/2)-(width/2));

        var top  = (sheight>height)? Math.round((sheight/2)-(height/2)) : 0;
    

        var win  = window.open(call, "tweet", "left="+left+",top="+top+",width="+width+",height="+height+",personalbar=0,toolbar=0,scrollbars=1,resizable=1");
        if (win) { 
            win.focus();
        }
        return;
    } // clicked

    function twitted() {

        var width   = 750;
        var height  = 650;
        var sheight = screen.height;
        var swidth  = screen.width;

        var left = Math.round((swidth/2)-(width/2));

        var top  = (sheight>height)? Math.round((sheight/2)-(height/2)) : 0;
    

        var win  = window.open(twittedCall, "twitted", "left="+left+",top="+top+",width="+width+",height="+height+",personalbar=0,toolbar=0,scrollbars=1,resizable=1");
        if (win) { 
            win.focus();
        }
        return;
    } //twitted


    /* Create a script tag to load count */
    function fillCount() {
        var scriptElement = document.createElement("script");
        scriptElement.type  = "text/javascript";
        scriptElement.src   = countCall;
        document.body.appendChild(scriptElement);
    } // fillCount


    /* Receive twitter count from the callback and fill in */
    function _recvCount(json) {
        var count = processCount(json.count);

        countDiv.innerHTML = count;
    } // _recvCount

    this.recvCount = function(_json) { _recvCount(_json); }

    /* Separate thousands with dot */
    function processCount(count) {
        count += '';
        var regex = /(\d+)(\d{3})/;
        while (regex.test(count)) {
            count = count.replace(regex, '$1' + '.' + '$2');
        }

        return count;
    } // processCount

    /* Running actual code */

    aElement.onclick = function() { clicked(); }
    countDiv.onclick = function() { twitted(); }
    //fillCount();
    setTimeout(fillCount, 500);

    eval('GlobRecvCount.t'+ objNum + ' = this;');
} // EPETTwitter

function EPETFacebook(_aElement, _countDiv, ParameterObj) {
    /* The ref to the caller and the countDiv element is a must */
    if ( !_aElement )
        return false;

    if ( !_countDiv )
        return false;

    if ( typeof(ParameterObj) != 'object' ) {
        ParameterObj = 0;
    }

    /* Properties */
    var aElement = _aElement;
    var countDiv = _countDiv;

    var objNum = GlobRecvCount.facebookObjs.push(this) - 1;

    var via  = 'el_pais';
    var url  = window.location.href;
    var text = ( document.getElementsByTagName('title') )? encodeURI(document.getElementsByTagName('title')[0].innerHTML.split('|')[0]) : '';

    var regex = /(^.+\.html)(\?|#).*$/;
    if ( regex.test (url) ) {
        url = url.replace(regex, '$1' );
    }

    if ( ParameterObj ) {
        if ( ParameterObj['via'] ) {
            via = ParameterObj['via'];
        }
        if ( ParameterObj['url'] ) {
            url = ParameterObj['url'];
        }
        if ( ParameterObj['text'] ) {
            text = ParameterObj['text'];
        }
    }

    var call       = 'http://www.facebook.com/sharer.php?u='+encodeURI(url)+'&t='+encodeURI(text);
    var countCall  = 'https://api.facebook.com/method/fql.query?query=select%20total_count%20from%20link_stat%20where%20url=%22' + url + '%22&format=json&callback=' +
                     'GlobRecvCount.f' + objNum + '.recvCount';

    /* Methods */

    /* Open a window centered on the screen with the SN */
    function clicked() {

        var width   = 650;
        var height  = 450;
        var sheight = screen.height;
        var swidth  = screen.width;

        var left = Math.round((swidth/2)-(width/2));

        var top  = (sheight>height)? Math.round((sheight/2)-(height/2)) : 0;
    

        var win  = window.open(call, "Recomendar", "left="+left+",top="+top+",width="+width+",height="+height+",personalbar=0,toolbar=0,scrollbars=1,resizable=1");
        if (win) { 
            win.focus();
        }
        return;
    } // clicked

    function fillCount() {
        var scriptElement = document.createElement("script");
        scriptElement.type  = "text/javascript";
        scriptElement.src   = countCall;
        document.body.appendChild(scriptElement);
    } // fillCount

    /* Receive facebook count from the callback and fill in */
    function _recvCount(js) {
        if ( typeof js.length == 'undefined')
            return;
        var count = processCount(js[0].total_count);

        countDiv.innerHTML = count;
    } // _recvCount

    this.recvCount = function(_json) { _recvCount(_json); }

    /* Separate thousands with dot */
    function processCount(count) {
        count += '';
        var regex = /(\d+)(\d{3})/;
        while (regex.test(count)) {
            count = count.replace(regex, '$1' + '.' + '$2');
        }

        return count;
    } // processCount

    function fillButton() {
        //alert('Poniendo el boton');
        var buttonElement       = document.createElement('A');
        buttonElement.title     = "Recomendar en Facebook";
        buttonElement.className = 'servicio';
        buttonElement.innerHTML = "Recomendar en Facebook";
        buttonElement.href      = "javascript:void(0)";
        buttonElement.onclick   = function () {
                window.open('http://www.facebook.com/sharer.php?u='+encodeURI(url)+'&t='+encodeURI(text), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=700');
                return false;
            }

        spanElement.insertBefore(buttonElement, countDiv);
    } // fillButton

    /* Running actual code */

    aElement.onclick = function() { clicked(); }
    //fillButton();
    //fillCount();
    setTimeout(fillCount, 500);

    eval('GlobRecvCount.f'+ objNum + ' = this;');
} // EPETFacebook

function EPETGooglePlus(_spanElement, _countDiv, ParameterObj) {

    /* Show button */
    var show = 1;

    /* The ref to the caller and the countDiv element is a must */
    if ( !_spanElement )
        return false;

    // Aqui no se puede consultar el contador de manera independiente
    //if ( !_countDiv )
    //    return false;

    if ( typeof(ParameterObj) != 'object' ) {
        ParameterObj = 0;
    }

    /* Properties */
    var spanElement = _spanElement;
    var divElement;
    var divFalseElement;
    var countDiv = _countDiv;

    var objNum = GlobRecvCount.googleObjs.push(this) - 1;

    var via  = 'el_pais';
    var url  = window.location.href;
    var text = ( document.getElementsByTagName('title') )? encodeURI(document.getElementsByTagName('title')[0].innerHTML.split('|')[0]) : '';

    var regex = /(^.+\.html)(\?|#).*$/;
    if ( regex.test (url) ) {
        url = url.replace(regex, '$1' );
    }

    if ( ParameterObj ) {
        if ( ParameterObj['via'] ) {
            via = ParameterObj['via'];
        }
        if ( ParameterObj['url'] ) {
            url = ParameterObj['url'];
        }
        if ( ParameterObj['text'] ) {
            text = ParameterObj['text'];
        }
    }

    //this.call       = 'http://twitter.com/share?url=' + this.url + '&text=' + this.text + '&via=' + this.via;
    //this.countCall  = 'http://urls.api.twitter.com/1/urls/count.json?url=' + this.url + '&callback=GlobRecvCount.f' + this.objNum + '.recvCount';
    //this.call       = 'http://www.facebook.com/share.php?u=' + this.url;
    //var countCall  = '0from%20link_stat%20where%20url=%22' + url + '%22&format=json&callback=' + 'GlobRecvCount.f' + objNum + '.recvCount';

    /* Methods */

    function fillCount() {
    } // fillCount

    /* Receive facebook count from the callback and fill in */
    function _recvCount(js) {
    } // _recvCount

    //this.recvCount = function(_json) { _recvCount(_json); }

    /* Separate thousands with dot */
    function processCount(count) {
    } // processCount

    function createWrapper() {
        var divFalseGElement       = document.createElement('DIV');
        divFalseGElement.className = 'googleplus_falso googleplus_inicio';
        divFalseGElement.title     = 'Enviar a Google +';
        divFalseGElement.onclick   = function () {
                window.open('https://plus.google.com/share?url='+encodeURI(url), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
                return false;
            }

        divFalseElement = divFalseGElement;

        var divHideElement         = document.createElement('DIV');
        divHideElement.className   = 'googleplus_ocultar';
        divHideElement.onclick     = function () {
                window.open('https://plus.google.com/share?url='+encodeURI(url), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
                return false;
            }

        divElement = divHideElement;

        spanElement.appendChild(divFalseGElement);
        spanElement.appendChild(divHideElement);
        //<div class="googleplus_falso googleplus_inicio" title="Enviar a Google +"></div>
        //<div class="googleplus_ocultar"></div>
    }

    function fillIFrame() {
        var iframeElement = document.createElement('IFRAME');
        iframeElement.frameBorder       = "0";
        iframeElement.scrolling         = "no";
        iframeElement.allowTransparency = "true";
        iframeElement.allowtransparency = "true";
        iframeElement.height            = "30";
        iframeElement.width             = "85";
        iframeElement.hspace            = "0";
        iframeElement.marginheight      = "0";
        iframeElement.marginwidth       = "0";
        iframeElement.src               = 'https://plusone.google.com/u/0/_/+1/fastbutton?url='+encodeURI(url)+'&parent='+ 
                                          encodeURI('http://elpais.com') + '&size=medium&count=true';

        iframeElement.onload            = function () { divFalseElement.className = 'googleplus_falso' };
        if ( isIE )
            if ( isIE < 9 ) 
                iframeElement.attachEvent('onload', function () { divFalseElement.className = 'googleplus_falso' });
        
        divElement.appendChild(iframeElement);
    }

    /* Running actual code */

    if ( show ) {
        createWrapper();
        //fillIFrame();
        setTimeout(fillIFrame, 500);
        //fillCount();
    } else {
        spanElement.parentNode.removeChild(spanElement);
    }

    eval('GlobRecvCount.g'+ objNum + ' = this;');
} // EPETGooglePlus

function EPETLinkedin(_aElement, _countDiv, ParameterObj) {
    /* The ref to the caller and the countDiv element is a must */
    if ( !_aElement )
        return false;

    if ( !_countDiv )
        return false;

    if ( typeof(ParameterObj) != 'object' ) {
        ParameterObj = 0;
    }

    /* Properties */
    var aElement = _aElement;
    var countDiv = _countDiv;

    var objNum = GlobRecvCount.twitterObjs.push(this) - 1;

    var via = 'el_pais';
    var url = window.location.href;
    var text = ( document.getElementsByTagName('title') )? encodeURI(document.getElementsByTagName('title')[0].innerHTML.split('|')[0]) : '';

    if ( ParameterObj ) {
        if ( ParameterObj['via'] ) {
            via = ParameterObj['via'];
        }
        if ( ParameterObj['url'] ) {
            url = ParameterObj['url'];
        }
        if ( ParameterObj['text'] ) {
            text = ParameterObj['text'];
        }
    }

    var regex = /(^.+\.html)(\?|#).*$/;
    if ( regex.test (url) ) {
        url = url.replace(regex, '$1' );
    }

    var ts = new Date().getTime();
    var call        = 'http://www.linkedin.com/cws/share?url=' + encodeURI(url) + '&original_referer=' + encodeURI(url) +
                      '&token=&isFramed=false&lang=es_ES&_ts=' + ts;

    var countCall   = 'http://www.linkedin.com/countserv/count/share?url=' + encodeURI(url) + '&callback=GlobRecvCount.l' + objNum + '.recvCount';

    /* Methods */

    /* Open a window centered on the screen with the SN */
    function clicked() {

        var width   = 550;
        var height  = 450;
        var sheight = screen.height;
        var swidth  = screen.width;

        var left = Math.round((swidth/2)-(width/2));

        var top  = (sheight>height)? Math.round((sheight/2)-(height/2)) : 0;
    

        var win  = window.open(call, "Recomendar", "left="+left+",top="+top+",width="+width+",height="+height+",personalbar=0,toolbar=0,scrollbars=1,resizable=1");
        if (win) { 
            win.focus();
        }
        return;
    } // clicked

    /* Create a script tag to load count */
    function fillCount() {
        var scriptElement = document.createElement("script");
        scriptElement.type  = "text/javascript";
        scriptElement.src   = countCall;
        document.body.appendChild(scriptElement);
    } // fillCount


    /* Receive twitter count from the callback and fill in */
    function _recvCount(json) {
        var count = processCount(json.count);

        countDiv.innerHTML = count;
    } // _recvCount

    this.recvCount = function(_json) { _recvCount(_json); }

    /* Separate thousands with dot */
    function processCount(count) {
        count += '';
        var regex = /(\d+)(\d{3})/;
        while (regex.test(count)) {
            count = count.replace(regex, '$1' + '.' + '$2');
        }

        return count;
    } // processCount

    /* Running actual code */

    aElement.onclick = function() { clicked(); }
    //fillCount();
    setTimeout(fillCount, 500);

    eval('GlobRecvCount.l'+ objNum + ' = this;');
} // EPETLinkedin

function EPETChangeBuzz2GPlus() {
    // DEPRECATED
    return;
}

function EPETShare(call, _ancho, _alto) {
    if ( !call )
        return false;

    var width   = 550;
    if ( _ancho )
        width   = _ancho;

    var height  = 450;
    if ( _alto )
        height  = _alto;

    var sheight = screen.height;
    var swidth  = screen.width;

    var left = Math.round((swidth/2)-(width/2));
    var top  = (sheight>height)? Math.round((sheight/2)-(height/2)) : 0;

    var win  = window.open(call, "Recomendar", "left="+left+",top="+top+",width="+width+",height="+height+",personalbar=0,toolbar=0,scrollbars=1,resizable=1");
    if (win) { 
        win.focus();
    }
    return;

}


/*
 * Objeto para el envio de una noticia por correo
 *
 */

function EPETMail( _button, _div, _user ) {
    /* Properties */
	if ( !_user )
        return false;

	if ( _user == '' )
		return false;

    var QueryUrl = '/s/enviaNoticiaCorreo.plr?url=';

    var SelfUrl = window.location.pathname;

    var Header;

    var Greeting;
    var SendForm;

    var Ok;
    var Error;

    var Address;
    var Comment;

    var User   = _user;
    var Button = _button;
    var Div    = _div;

    var req;

    /* Methods */

    function sendData() {
        var url = QueryUrl + SelfUrl + '&to=' + Address.value;
        if ( Comment.value )
            url += '&txt=' + Comment.value;

        // branch for native XMLHttpRequest object
        if (window.XMLHttpRequest) {
            req = new XMLHttpRequest();
            req.onreadystatechange = showResult;
            req.open("GET", url, true);
            req.send(null);
            // branch for IE/Windows ActiveX version
        } else if (window.ActiveXObject) {
            isIE = true;
            req = new ActiveXObject("Microsoft.XMLHTTP");
            if (req) {
                req.onreadystatechange = showResult;
                req.open("GET", url, true);
                req.send();
            }
        }
        return true;
    } // sendData

    function showResult() {
     // only if req shows "loaded"
        if (req.readyState == 4) {
            // only if "OK"
            if (req.status == 200) {
                var json;
                eval( 'json = ' + req.responseText  + ';');

                if ( json.status == 'ok' ) {
                    //Div.innerHTML = '';
                    //Div.appendChild ( Header );
                    if ( SendForm )
                        if ( SendForm.parentNode )
                            SendForm.parentNode.removeChild(SendForm);

                    if ( Greeting )
                        if ( Greeting.parentNode )
                            Greeting.parentNode.removeChild(Greeting);

                    Div.appendChild ( Ok );
                } else if ( json.status == 'error' ) {
                    //Div.innerHTML = '';
                    //Div.appendChild ( Header );
                    if ( SendForm )
                        if ( SendForm.parentNode )
                            SendForm.parentNode.removeChild(SendForm);

                    if ( Greeting )
                        if ( Greeting.parentNode )
                            Greeting.parentNode.removeChild(Greeting);
                    Error.innerHTML = json.info;
                    Div.appendChild ( Error );
                }
            } else {
                alert("There was a problem retrieving the data:\n" + req.statusText);
            }
        }
    }


    function createHeader() {
        var headerDiv = document.createElement('DIV');
        headerDiv.className = 'encabezado estirar';

        var hrefElement = document.createElement('A');
        hrefElement.onclick   = function() {
            Div.style.display = 'none'; 
        }
        hrefElement.title     = 'Cerrar' ;
        hrefElement.className = 'boton enviar';
        hrefElement.href      = 'javascript:void(0);';
        hrefElement.innerHTML = 'Enviar noticia por correo electrónico';
        
        var closeElement = document.createElement('A');
        closeElement.onclick   = function() {
            Div.style.display = 'none';
        }
        closeElement.title     = "Cerrar";
        closeElement.className = "cerrar";
        closeElement.href      = "javascript:void(0);";
    
        headerDiv.appendChild(hrefElement);
        headerDiv.appendChild(closeElement);

        Header = headerDiv;

        return true;

    } // createHeader

    function createSendForm() {

        if ( ! Greeting ) {
            var greetingElement = document.createElement('P');
            greetingElement.innerHTML  = 'Hola, <a title="Ver perfil" href="javascript:void(0);">' + User + '</a>';  // FIXME Hay que poner lo del perfil

            Greeting = greetingElement;
        }

        if ( ! SendForm ) {
            var formElement = document.createElement('FORM');
            var fieldsetElement = document.createElement('FIELDSET');

            var legendElement = document.createElement('LEGEND');
            legendElement.innerHTML = 'Enviar noticia por correo electrónico';

            var labelElement = document.createElement('LABEL');
            //labelElement.for = 'direccion';
            labelElement.innerHTML = 'Introduce la dirección de correo del destinatario:';

            var inputElement        = document.createElement('INPUT');
            inputElement.type       = 'text';
            inputElement.autofocus  = 'autofocus';
            inputElement.name       = 'direccion';
            inputElement.id         = 'direccion';

            Address = inputElement;

            var labelCommentElement       = document.createElement('LABEL');
            //labelCommentElement.for       = 'comentario';                
            labelCommentElement.innerHTML = 'Tu comentario (opcional):';

            var textAreaElement  = document.createElement('TEXTAREA');
            //textAreaElement.cols = 0;
            textAreaElement.rows = 20;
            textAreaElement.name = 'comentario';
            Comment = textAreaElement;

            var divElement       = document.createElement('DIV');
            divElement.className = 'estirar';

                var textElement = document.createElement('P');
                textElement.className = 'aclaracion';
                textElement.innerHTML = 'El correo llegará al destinatario firmado con tu nombre';

                var submitElement = document.createElement('INPUT');
                submitElement.className = 'enviar';
                submitElement.type = 'submit';
                submitElement.value = 'Enviar';
                submitElement.onclick = function() {
                        if ( Address.value == '' )
                            return false;

                        sendData();
                        return false;
                    }

            divElement.appendChild(textElement);
            divElement.appendChild(submitElement);

            
            fieldsetElement.appendChild(legendElement);
            fieldsetElement.appendChild(labelElement);
            fieldsetElement.appendChild(inputElement);
            fieldsetElement.appendChild(labelCommentElement);
            fieldsetElement.appendChild(textAreaElement);
            fieldsetElement.appendChild(divElement);

            formElement.appendChild(fieldsetElement);

            SendForm = formElement;
        }

        return true;

    } // createSendForm

    function createReturnElements() {
        if ( ! Ok ) {
            var okElement = document.createElement('P');
            okElement.className = 'ok';
            okElement.innerHTML = 'Tu correo se ha enviado correctamente';

            Ok = okElement;
        }

        if ( ! Error ) {
            var errorElement = document.createElement('P');
            errorElement.className = 'error';

            Error = errorElement;
        }

        return true;
    } // createReturnElements


    function initialize() {

        if ( Header )
            if ( Header.parentNode )
                Header.parentNode.removeChild(Header);

        createHeader();


        if ( SendForm )
            if ( SendForm.parentNode )
                SendForm.parentNode.removeChild(SendForm);

        if ( Greeting )
            if ( Greeting.parentNode )
                Greeting.parentNode.removeChild(Greeting);

        createSendForm();


        if ( Ok )
            if ( Ok.parentNode )
                Ok.parentNode.removeChild(Ok);

        if ( Error )
            if ( Error.parentNode )
                Error.parentNode.removeChild(Error);
            
        createReturnElements();

        Address.value = '';
        Comment.value = '';

        Div.innerHTML = '';
        Div.appendChild ( Header );
        Div.appendChild ( Greeting );
        Div.appendChild ( SendForm );

    } // initialize

    /* Code */


    Button.onclick = function() {
        initialize()
        Div.style.display = 'block';
        Address.focus();
    }
} // EPETMail


-->
