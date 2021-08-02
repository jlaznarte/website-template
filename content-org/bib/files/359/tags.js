<!--
/*
 * Objeto para buscar tags para el editor
 *
 */

function EPETTag ( _divSearchBox, _button ) {

    /* Properties */
    var Tags = new Array();

    var inputBaseName = "id_campo_formulario_tags_x2F_tag";
    var req;
    var maxPosition;
    var position=-1;
    var prevPosition;

    var optionsDiv;

    var inputElement;

    var divTags;
    var divContainer;
    var input;
    var divSearchBox = _divSearchBox;
    
    var insideDiv = 0;

    /* Private methods */

    function keyboardCallback (evt) {
        evt = (evt) ? evt : ((window.event) ? window.event : null);
        var target = evt.target ? evt.target : window.event.srcElement;
        if ( position == undefined )
            position = -1;

        if (evt.keyCode==40) { // Down
            position++;
            if ( position > maxPosition )
                position = maxPosition;
            lightUp();
            return false;
        } else if (evt.keyCode==38) { // Up
            position--;
            lightUp();
            return false;
        } else if (evt.keyCode==37||evt.keyCode==39) { // Left || Right
            return false;
        } else if (evt.keyCode==13||evt.keyCode==3) { // Enter
            if (optionsDiv.childNodes[0].childNodes[position])
                selectedTag();

            clearTagsList(1);
            initialize(inputElement);
            return false;
        } else {
            if (target.value==0) {
                initialize(target);
                return false;
            }
            try {
                queryTags ( "/tags/tags_editor_json.pl?q=" + target.value );
            }
            catch(e) {
                var msg = (typeof e == "string") ? e : ((e.message) ? e.message : "Unknown Error");
                alert("Unable to get XML data:\n" + msg);
                return false;
            }
        }
        return true;
    } // keyboardCallback


    function initialize (_input) {

        if ( optionsDiv ) {
            if (optionsDiv.parentNode) {
                optionsDiv.parentNode.removeChild(optionsDiv);
            }
        }

        var ulElement = document.createElement("UL");

        optionsDiv           = document.createElement("DIV");
        optionsDiv.className = "desplegable_temas";
        optionsDiv.style.visibility="hidden";

        optionsDiv.style.zIndex    = "502";
        optionsDiv.style.position  = "absolute";

        var pos = calcAbsPosition(_input);

//        optionsDiv.style.top       = (calcular(_input,"offsetTop")+_input.offsetHeight+1)+"px";
//        optionsDiv.style.left      = (calcular(_input,"offsetLeft"))+"px";
        optionsDiv.style.left      = pos[0]+'px';
        optionsDiv.style.top       = (pos[1]+_input.offsetHeight+1)+'px';
        optionsDiv.style.width     = _input.offsetWidth-2+"px";

        optionsDiv.ulElement = ulElement;
        optionsDiv.appendChild(ulElement);

        _input.onkeyup    = keyboardCallback;
        _input.onkeypress = deactivateEnter;
        inputElement      = _input;

        position = -1;
        document.body.appendChild(optionsDiv);
        optionsDiv.onmouseover = function() {
            insideDiv = 1;
        };
        optionsDiv.onmouseout = function() {
            insideDiv = 0;
//            alert("Saliendo del div");
        };

        insideDiv = 0;
    } // initialize

    function lightUp() {
        if (position <= -1) {
            if (optionsDiv.childNodes[0].childNodes[prevPosition]) {
                optionsDiv.childNodes[0].childNodes[prevPosition].className = "reposo";
            }
            prevPosition = 10000000;
            position = -1;

            return false;
        }
        if (optionsDiv.childNodes[0].childNodes[position]) {
            if (optionsDiv.childNodes[0].childNodes[prevPosition]) {
                optionsDiv.childNodes[0].childNodes[prevPosition].className = "reposo";
            }
            optionsDiv.childNodes[0].childNodes[position].className = "encima";
            prevPosition = position;
        }
        return true;
    } // lightUp

    function deactivateEnter(evt) {
        evt = (evt) ? evt : ((window.event) ? window.event : null);
        if (evt.keyCode==13||evt.keyCode==3) {
            return false;
        }
        return true;
    } // deactivateEnter

    function queryTags(url) {
        // branch for native XMLHttpRequest object
        if (window.XMLHttpRequest) {
            req = new XMLHttpRequest();
            req.onreadystatechange = processJSON;
            req.open("GET", url, true);
            req.send(null);
            // branch for IE/Windows ActiveX version
        } else if (window.ActiveXObject) {
            isIE = true;
            req = new ActiveXObject("Microsoft.XMLHTTP");
            if (req) {
                req.onreadystatechange = processJSON;
                req.open("GET", url, true);
                req.send();
            }
        }
    } // queryTags

    function processJSON() {
        // only if req shows "loaded"
        if (req.readyState == 4) {
            // only if "OK"
            if (req.status == 200) {
                clearTagsList();
                buildTopicList();
            } else {
                alert("There was a problem retrieving the data:\n" + req.statusText);
            }
        }
    } // processJSON

    // empty Tags select list content
    function clearTagsList(cleanAll) {
        if ( optionsDiv.childNodes[0].childNodes[0] )
            while (optionsDiv.childNodes[0].childNodes[0]) {
                optionsDiv.childNodes[0].removeChild(optionsDiv.childNodes[0].childNodes[0]);
            }

        if ( cleanAll )
            if ( optionsDiv )
                if ( optionsDiv.parentNode ) {
                    optionsDiv.parentNode.removeChild(optionsDiv);
                    optionsDiv = null;
                }
        
    } // clearTagsList

    function addOption(json, pos, query){
        var temp  = document.createElement("LI");

        query = prepareRegExp(query);
        var nombrebonito  = json.nombrebonito;
        nombrebonito = nombrebonito.replace(query, "<strong>$1</strong>");

        temp.innerHTML    = nombrebonito;
        temp.position     = pos;
        temp.tag_id       = json.id;
        temp.nombrebonito = json.nombrebonito;
        temp.url          = json.url;
        temp.className    = "reposo";
        temp.onclick      = function() {
            if (optionsDiv.childNodes[0].childNodes[position]) {
                selectedTag();
            }

            clearTagsList(1);
            initialize(inputElement);
        }

        temp.onmouseover = function() {
            position = pos;
            lightUp();
        }

        var UL = optionsDiv.ulElement;
        UL.appendChild(temp);
        optionsDiv.style.visibility = "visible";
    } // addOption


    // fill Tags select list with items from the current JSON
    function buildTopicList() {
        var json;
        eval( 'json = ' + req.responseText  + ';');

        var items = json.answers;

        for (var i = 0; i < items.length; i++) {
            addOption(items[i],i,json.query);
        }
        maxPosition=items.length - 1;
        position = -1;
        prevPosition = 1000000000000;
    } // buildTopicList


    function calcAbsPosition(el) {
        if (document.documentElement.getBoundingClientRect && el.getBoundingClientRect) { // IE
            var box = el.getBoundingClientRect();
            var rootNode;
            if (el.ownerDocument) {
                rootNode = el.ownerDocument;
            } else {
                rootNode = document;
            }
            return [box.left + Math.max(rootNode.documentElement.scrollLeft, rootNode.body.scrollLeft),
                   box.top + Math.max(rootNode.documentElement.scrollTop, rootNode.body.scrollTop)];
        } else {
            var pos = [el.offsetLeft, el.offsetTop];
            var parentNode = el.offsetParent;

            // safari: subtract body offsets if el is abs (or any offsetParent), unless body is offsetParent
            var accountForBody = (isSafari &&
                    el.style.position == 'absolute' &&
                    el.offsetParent == el.ownerDocument.body);

            if (parentNode != el) {
                while (parentNode) {
                    pos[0] += parentNode.offsetLeft;
                    pos[1] += parentNode.offsetTop;
                    if (!accountForBody && isSafari &&
                            parentNode.style.position == 'absolute' ) {
                        accountForBody = true;
                    }
                    parentNode = parentNode.offsetParent;
                }
            }

            if (accountForBody) { //safari doubles in this case
                pos[0] -= el.ownerDocument.body.offsetLeft;
                pos[1] -= el.ownerDocument.body.offsetTop;
            }

            if (el.parentNode) {
                parentNode = el.parentNode;

                // account for any scrolled ancestors
                var ROOT_TAG = /^body|html$/i; // body for quirks mode, html for standards
                while ( parentNode.tagName && !ROOT_TAG.test(parentNode.tagName) ) {
                    // work around opera inline/table scrollLeft/Top bug
                    if (parentNode.style.display.search(/^inline|table-row.*$/i)) {
                        pos[0] -= parentNode.scrollLeft;
                        pos[1] -= parentNode.scrollTop;
                    }

                    parentNode = parentNode.parentNode;
                }
            }

            return pos;
        }
    } // calcAbsPosition



    function selectedTag() {

        var dataElement     = optionsDiv.childNodes[0].childNodes[position];

        if ( checkTag(dataElement.tag_id) ) {
            inputElement.value = '';
            return true;
        }

        var liElement       = document.createElement('LI');
        liElement.className = 'estirar';
        liElement.tag_id    = dataElement.tag_id;

        var spanElement       = document.createElement('SPAN');
        spanElement.className = 'nombre_etiqueta';
        spanElement.innerHTML = dataElement.nombrebonito;

        var hrefElement       = document.createElement('A');
        hrefElement.className = 'cerrar';
        hrefElement.title     = "Eliminar etiqueta";
        hrefElement.href      = "javascript:void(0);";
        hrefElement.onclick   = function() {
                deleteTag(dataElement.tag_id);
            }

        liElement.appendChild(spanElement);
        liElement.appendChild(hrefElement);

        divTags.appendChild(liElement);

        var obj = new Array( dataElement.tag_id, dataElement.nombrebonito, dataElement.url );
        Tags.push(obj);
        inputElement.value = '';
        generateOutput();
    } // selectedTag

    function deleteTag(id) {
        for (var i=0; i<Tags.length; i++) {
            if (Tags[i][0] == id) {
                Tags.splice(i,1);
                divTags.removeChild(divTags.childNodes[i]);
            }
        }
        generateOutput();
    } // deleteTag

    function checkTag(id) {
        for (var i=0; i<Tags.length; i++) {
            if (Tags[i][0] == id) {
                return 1;
            }
        }
        return 0;
    } // checkTag

    function generateOutput() {
        /* Recorro el array entero y voy componiendo la formula */
        var str = '';
        for (var i=0; i<Tags.length; i++) {
            str += '<span class="etiqueta">' + Tags[i][1] + '</span>';
            if ( (i+1) < Tags.length )
                str += ' + ';
        }

        if ( str != '' ) {
            divContainer.innerHTML = str;
            divContainer.parentNode.style.display = 'block';
        } else {
            divContainer.parentNode.style.display = 'none';
        }

    } // generateOutput

    function prepareRegExp(str) {
        str = str.replace(/[aáàä]/g, '[aáàä]');
        str = str.replace(/[eéèë]/g, '[eéèë]');
        str = str.replace(/[iíìï]/g, '[iíìï]');
        str = str.replace(/[oóòö]/g, '[oóòö]');
        str = str.replace(/[uúùü]/g, '[uúùü]');

        str = new RegExp('('+str+')','');
        return str
    } // prepareRegExp

    // This creates a DOM tree similar to the one showed below the function
    function createSearcherHTML() {
        /* Header */
        var headerDiv = document.createElement('DIV');
        headerDiv.className = 'encabezado estirar';

            var nameHref = document.createElement('A');
            nameHref.className = 'nombre';
            nameHref.tittle    = 'Cerrar';
            nameHref.innerHTML = 'Buscar temas';
            nameHref.href      = "javascript:void(0);"
            nameHref.onclick   = function() {
                    divSearchBox.style.display = 'none';
                };

            var closeHref = document.createElement('A');
            closeHref.className  = 'cerrar';
            closeHref.tittle     = 'Cerrar';
            closeHref.href       = "javascript:void(0);"
            closeHref.onclick    = function() {
                    divSearchBox.style.display = 'none';
                };
                
        headerDiv.appendChild(nameHref);
        headerDiv.appendChild(closeHref);
        /* END Header */

        /* Greeting */
        var greetingElement = document.createElement('P');
        greetingElement.innerHTML = 'Selecciona, <strong>uno por uno</strong>, los temas que quieras para hacer una b&uacute;squeda compuesta de los temas que te interesen:';
        /* END Greeting */

        /* Selector */
        var selectorDiv = document.createElement('DIV');
        selectorDiv.className = 'eleccion_temas estira';

            var formElement = document.createElement('FORM');

                var inputElement = document.createElement('INPUT');
                inputElement.type      = 'search';
                inputElement.className = 'temas';
                input = inputElement;

                var ulElement = document.createElement('UL');
                ulElement.className = 'lista_temas';
                divTags = ulElement;

                var formulaDiv = document.createElement('DIV');
                formulaDiv.className     = 'formula_busqueda estirar';
                formulaDiv.style.display = 'none';

                    var picoSpan = document.createElement('SPAN');
                    picoSpan.className = 'pico';

                    var tagContainerDiv = document.createElement('DIV');
                    tagContainerDiv.className = 'contenedor_etiquetas';
                    divContainer = tagContainerDiv;

                    var searchButton = document.createElement('A');
                    searchButton.className = 'boton buscar';
                    searchButton.innerHTML = 'Buscar';
                    searchButton.href      = 'javascript:void(0);';
                    searchButton.onclick   = ''; // FIXME codigo para lanzar la busqueda

                formulaDiv.appendChild(picoSpan);
                formulaDiv.appendChild(tagContainerDiv);
                formulaDiv.appendChild(searchButton);

           formElement.appendChild(inputElement); 
           formElement.appendChild(ulElement); 
           formElement.appendChild(formulaDiv);

        selectorDiv.appendChild(formElement);
        /* END Selector */

        divSearchBox.appendChild(headerDiv);
        divSearchBox.appendChild(greetingElement);
        divSearchBox.appendChild(selectorDiv);

    } // createSearcherHTML

/**
<div id="capaBuscarTemas" class="capa_buscar_temas" style="display: none;">
    <div class="encabezado estirar">
        <a href="javascript:void(0);" onClick="javascript:f_cambiar_styles(document.getElementById('capaBuscarTemas'), 'none',document.getElementById('capaBuscarTemas'), 'none');" class="nombre" title="Cerrar">Buscar temas</a>
        <a href="javascript:void(0);" onClick="javascript:f_cambiar_styles(document.getElementById('capaBuscarTemas'), 'none',document.getElementById('capaBuscarTemas'), 'none');" class="cerrar" title="Cerrar"></a>
    </div> <!-- === .encabezado === -->
    <p>Selecciona, <strong>uno por uno</strong>, los temas que quieras para hacer una b&uacute;squeda compuesta de los temas que te interesen:</p>
    <div class="eleccion_temas estirar">
        <form>
            <input id="busqueda_tags" type="search" class="temas">
            <ul id="listado_tags" class="lista_temas"></ul>
            <div class="formula_busqueda estirar" style="display:none">
                <span class="pico"></span>
                <div id="contenedor_etiquetas" class="contenedor_etiquetas"></div> <!-- === .contenedor_etiquetas === -->
                <a href="javascript:void(0);" class="boton buscar">Buscar</a>
            </div> <!-- === .formula_busqueda === -->
        </form>
    </div> <!-- === .eleccion_temas === -->
</div> <!-- === .capa_buscar_temas === -->

    <script> 
        new EPETTag(document.getElementById('busqueda_tags'), document.getElementById('listado_tags'), document.getElementById('contenedor_etiquetas')); 
    </script>

**/


    /* code */

    createSearcherHTML();

    /* Imprescindible dejar esto vacio para que el arbol DOM funcionae luego correctamente */
    //_divTags.innerHTML = '';
    input.onfocus = function() { initialize(input); }
    input.onblur  = function(evt) { 
            if ( optionsDiv && insideDiv ) {
                return true;
            }
            clearTagsList(1); 
            return true;
        }

    _button.onclick = function() { divSearchBox.style.display = 'block'; input.focus(); }
    
}

-->
