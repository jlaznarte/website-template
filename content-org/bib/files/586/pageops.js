/* ----- cookie_functions.js ----- */
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name+"="+escape(value)+expires+"; path=/;";
};

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return unescape(c.substring(nameEQ.length,c.length));
        }
    }
    return null;
};


/* ----- nodeutilities.js ----- */

function hasClassName(node, class_name) {
    return new RegExp('\\b'+class_name+'\\b').test(node.className);
};

function addClassName(node, class_name) {
    if (!node.className) {
        node.className = class_name;
    } else if (!hasClassName(node, class_name)) {
        var className = node.className+" "+class_name;
        // cleanup
        node.className = className.split(/\s+/).join(' ');
    }
};

function removeClassName(node, class_name) {
    var className = node.className;
    if (className) {
        // remove
        className = className.replace(new RegExp('\\b'+class_name+'\\b'), '');
        // cleanup
        className = className.replace(/\s+/g, ' ');
        node.className = className.replace(/\s+$/g, '');
    }
};

function replaceClassName(node, old_class, new_class, ignore_missing) {
    if (ignore_missing && !hasClassName(node, old_class)) {
        addClassName(node, new_class);
    } else {
        var className = node.className;
        if (className) {
            // replace
            className = className.replace(new RegExp('\\b'+old_class+'\\b'), new_class);
            // cleanup
            className = className.replace(/\s+/g, ' ');
            node.className = className.replace(/\s+$/g, '');
        }
    }
};

/* ----- fullscreenmode.js ----- */
function toggleFullScreenMode() {
    var body = document.body;
    if (hasClassName(body, 'fullscreen')) {
        // unset cookie
        removeClassName(body, 'fullscreen');
        createCookie('fullscreenMode', '');
    } else {
        // set cookie
        addClassName(body, 'fullscreen');
        createCookie('fullscreenMode', '1');
    }
};

function fullscreenModeLoad() {
    // based on cookie
    if (readCookie('fullscreenMode') == '1') {
        var body = document.body;
        addClassName(body, 'fullscreen');
    }
};

function startList() {
    if (document.all && document.getElementById) {
        navRoot = document.getElementById("dropdowns");
        for (i=0; i<navRoot.childNodes.length; i++) {
            node = navRoot.childNodes[i];
            if (node.nodeName=="LI") {
                node.onmouseover=function() {
                    addClassName(this, 'over');
                }
                node.onmouseout=function() {
                    removeClassName(this, 'over');
                }
            }
        }
    }
}

/* Use attachEvent for IE */
function addEvent(obj, evType, fn){
 if (obj.addEventListener){
   obj.addEventListener(evType, fn, false);
   return true;
 } else if (obj.attachEvent){
   var r = obj.attachEvent("on"+evType, fn);
   return r;
 } else {
   return false;
 }
}
/* - mark_special_links.js - */
/* Scan all links in the document and set classes on them if
 * they point outside the site, or are special protocols
 * To disable this effect for links on a one-by-one-basis,
 * give them a class of 'link-plain'
 */

// check for ie5 mac
var bugRiddenCrashPronePieceOfJunk = (
    navigator.userAgent.indexOf('MSIE 5') != -1
    &&
    navigator.userAgent.indexOf('Mac') != -1
)

// check for W3CDOM compatibility
var W3CDOM = (!bugRiddenCrashPronePieceOfJunk &&
               document.getElementsByTagName &&
               document.createElement);

function getContentArea(){
    if(W3CDOM){
        var node=document.getElementById('workarea');
        return node
    }
}

function wrapNode(node, wrappertype, wrapperclass){
    /* utility function to wrap a node in an arbitrary element of type "wrappertype"
     * with a class of "wrapperclass" */
    var wrapper = document.createElement(wrappertype)
    wrapper.className = wrapperclass;
    var innerNode = node.parentNode.replaceChild(wrapper,node);
    wrapper.appendChild(innerNode);
};

function scanforlinks() {
    contentarea = getContentArea(); 
    scanforlinksinarea(contentarea);
}

function scanforlinksinarea(contentarea) {
    // terminate if we hit a non-compliant DOM implementation
    if (!W3CDOM) { return false; }

    // scan for links only in content area or the area supplied
    if (!contentarea) { return false; }

    links = contentarea.getElementsByTagName('a');
    for (i=0; i < links.length; i++) {
        if ( links[i].getAttribute('target'))
        {
            var tval = links[i].getAttribute('target');
            if (tval.toLowerCase() == '_blank') {
                links[i].removeAttribute('target');
            }
        }
        if ( (links[i].getAttribute('href'))
             && (links[i].className.indexOf('link-plain')==-1) ) {
            var linkval = links[i].getAttribute('href');

            // ADD CSS CLASSES FOR FILE EXTENSIONS
            // grab file extension 
            colonIdx = linkval.lastIndexOf(':');
            // add host name if relative links (for FireFox)
            if (colonIdx < 0) {linkval = 'http://'+window.location.host+'/'+linkval; }
            ext_idx0 = linkval.lastIndexOf('.');
            slashIdx = linkval.lastIndexOf('/');
            colonIdx = linkval.lastIndexOf(':');
            if(slashIdx > colonIdx+2 && slashIdx < ext_idx0) {
                extension = linkval.substring(ext_idx0+1);
            // add class name = link-extension
            // it can be styled as you prefer in your css
               if (ext_idx0 > 0 && links[i].getElementsByTagName('img').length == 0  ) {
                  wrapNode(links[i], 'span', 'link-'+extension.toLowerCase());
                }
	    }
            // ADD CSS CLASSES FOR SPECIAL PROTOCOLS
            // check if the link href is a relative link, or an absolute link to
            // the current host.
            if (linkval.toLowerCase().indexOf('://')>0 && (linkval.toLowerCase().indexOf(window.location.host)>0 || linkval.toLowerCase().indexOf('eionet.eu.int')>0 || linkval.toLowerCase().indexOf('eionet.europa.eu')>0)){
                // absolute link internal to our host
            } else if (linkval.indexOf('http:') != 0) {
                // not a http-link. Possibly an internal relative link, but also
                // possibly a mailto or other protocol add tests for relevant
                // protocols as you like.
                protocols = ['mailto', 'ftp', 'news', 'irc', 'h323', 'sip',
                             'callto', 'https', 'feed', 'webcal'];
                // h323, sip and callto are internet telephony VoIP protocols
                for (p=0; p < protocols.length; p++) {
                    if (linkval.indexOf(protocols[p]+':') == 0) {
                        // if the link matches one of the listed protocols, add
                        // className = link-protocol
                        wrapNode(links[i], 'span', 'link-'+protocols[p]);
                        break;
                    }
                }
            } else {
                // we are in here if the link points to somewhere else than our
                // site.
                if ( links[i].getElementsByTagName('img').length == 0 ) {
                    // we do not want to mess with those links that already have
                    // images in them
                    wrapNode(links[i], 'span', 'link-external');
                    // uncomment the next line if you want external links to be
                    // opened in a new window.
                    // links[i].setAttribute('target', '_blank');
                }
            }
        }
    }
};

addEvent(window,'load',startList);
addEvent(window,'load',fullscreenModeLoad);
addEvent(window,'load',scanforlinks);
