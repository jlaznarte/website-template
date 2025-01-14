// |=======================================================================
// |
// |  Description:
// |   Common JavaScript functions for Cxense products
// |
// |
// |  Copyright 2010-2015 Cxense AS
// |======================================================================

try {
var cX = cX || {};
cX.callQueue = cX.callQueue || [];
if (!cX.library) {
    cX.library = {

        eventReceiverBaseUrl: cX.eventReceiverBaseUrl || ('http' + (location.protocol == 'https:' ? 's://s' : '://') + 'comcluster.cxense.com/Repo/rep.html'),
        eventReceiverBaseUrlGif: cX.eventReceiverBaseUrlGif || ('http' + (location.protocol == 'https:' ? 's://s' : '://') + 'comcluster.cxense.com/Repo/rep.gif'),
        p1BaseUrl: cX.p1BaseUrl || (location.protocol == 'https:' ? 'https://scdn.cxense.com/sp1.html' : 'http://cdn.cxense.com/p1.html'),
        backends: {
            production: {
                baseAdDeliveryUrl: 'http://adserver.cxad.cxense.com/adserver/search',
                secureBaseAdDeliveryUrl: 'https://s-adserver.cxad.cxense.com/adserver/search'
            },
            sandbox: {
                baseAdDeliveryUrl: 'http://adserver.sandbox.cxad.cxense.com/adserver/search',
                secureBaseAdDeliveryUrl: 'https://s-adserver.sandbox.cxad.cxense.com/adserver/search'
            }
        },
        cdn: {
            template: {
                direct: { http: 'http://cdn.cxpublic.com/', https: 'https://faeb92b469b40c9d72e4-dc920caace12a27e58d45a42e86d29a2.ssl.cf2.rackcdn.com/' },
                mapped: { http: 'http://cdn-templates.cxpublic.com/', https: 'https://98f8988636d08005d94d-f5f0f91519a07fe70687d9356cf15804.ssl.cf2.rackcdn.com/' }
            }
        },

        initializePage: function() {
            this.m_rnd = this._randomString();
            this.m_widgetSpecs = {};
            this.clearCustomParameters();
            this.m_previousPageViewReport = null;
            this.m_scriptStartTime = new Date().getTime();
            this.m_activityState = {
                parentMetrics: undefined,
                prevActivityTime: new Date().getTime(),
                prevTime: new Date().getTime(),
                exitLink: '',
                activeTime: 0,
                prevScreenX: 0,
                prevScreenY: 0,
                maxViewLeft: 0,
                maxViewTop: 0,
                prevScrollLeft: 0,
                prevScrollTop: 0,
                prevWindowWidth: 0,
                prevWindowHeight: 0
            };
            this.m_atfr = null;
            this.m_externalUserIds = [];
            this.m_documentSizeRequestedFromChild = false;

            try {
                // Copy out previous visit state before it gets overwritten
                if (this.hasLocalStorage()) {
                    this.m_atfr = localStorage.getItem('_cX_atfr');
                    localStorage.removeItem('_cX_atfr');
                    if (typeof this.m_atfr !== 'string' || this.m_atfr[0] !== '&') {
                        this.m_atfr = null;
                    }
                }
            } catch (e) {}

            try {
                // Parse the current URL + SPA Recs URL and forward matching parameters as custom parameters
                var spaArgs = this.m_spaRecsClickUrl ? this.decodeUrlEncodedNameValuePairs(this.m_spaRecsClickUrl.split('?')[1] || '') : {};
                var allArgs = this.combineArgs(this.parseUrlArgs(), this.parseHashArgs(), spaArgs);
                var customParametersFromUrl = {};
                for (var arg in allArgs) {
                    if (allArgs.hasOwnProperty(arg) && arg.indexOf('cx_') === 0) {
                        customParametersFromUrl[arg.substr(3)] = allArgs[arg];
                    }
                }
                this.setCustomParameters(customParametersFromUrl);
            } catch (e) {}
            this.m_isSpaRecsDestination = !!this.m_spaRecsClickUrl;
            this.m_spaRecsClickUrl = null;

        },


        // Properties
        m_accountId: '0',
        m_siteId: '0',
        m_goalId: null,
        m_prevLocationHash: location.hash,
        m_rnd: 0,
        m_widgetSpecs: {},
        m_knownMessageSources: [],
        m_customParameters: [],
        m_scriptStartTime: new Date().getTime(),
        m_activityState: null,
        m_atfr: null,
        m_externalUserIds: [],
        m_isSpaRecsDestination: false,
        m_spaRecsClickUrl: null,
        m_clientStorage: {
            messageContexts: {},
            messageQueue: [],
            iframeEl: null,
            iframeIsLoaded: false,
            iframeOrigin: 'https://clientstorage.cxense.com',
            iframePath: '/clientstorage_v2.html'
        },


        _createCommsIFrame: function(args) {
            var iframeEl = document.createElement('iframe');
            if (args.onloadHandler) {
                this.addEventListener(iframeEl, 'load', args.onloadHandler);
            }
            if (args.id) {
                iframeEl.id = id;
                iframeEl.name = id;
            }
            iframeEl.width = 0;
            iframeEl.height = 0;
            iframeEl.scrolling = 'no';
            iframeEl.frameBorder = 0;
            iframeEl.src = args.src;
            iframeEl.style.display = 'none';
            (document.getElementById(args.targetElementId || 'cX-root') || document.body).appendChild(iframeEl);
            return iframeEl;
        },

        _initClientStorageIFrame: function() {
            if (!this.m_clientStorage.iframeEl) {
                this.m_clientStorage.iframeEl = this._createCommsIFrame({
                    src: this.m_clientStorage.iframeOrigin + this.m_clientStorage.iframePath,
                    onloadHandler: this.createDelegate(this, function() {
                        this.m_clientStorage.iframeIsLoaded = true;
                        var encodedMessage;
                        while (encodedMessage = this.m_clientStorage.messageQueue.shift()) {
                            try {
                                this.m_clientStorage.iframeEl.contentWindow.postMessage(encodedMessage, this.m_clientStorage.iframeOrigin);
                            } catch (e) {
                                try {
                                    var message = this.decodeUrlEncodedNameValuePairs(encodedMessage);
                                    if (message.id) {
                                        var context = this.m_clientStorage.messageContexts[message.id];
                                        if (context.error) {
                                            context.error('PostMessageError: ' + e);
                                        }
                                    }
                                } catch (f) { }
                            }
                        }
                    })
                });
            }
        },

        _handleClientStorage: function(object) {
            var context = this.m_clientStorage.messageContexts[object.id];
            if (context) {
                var value = (typeof object.value === 'undefined') ? null : object.value;
                if (object.result !== 'OK') {
                    if (context.error) {
                        context.error(object.result);
                    }
                } else {
                    if (context.success) {
                        context.success(value);
                    }
                }
                this.m_clientStorage.messageContexts[object.id] = undefined;
            }
        },

        _sendClientStorageMessage: function(message, context) {
            if (context && (context.error || context.success)) {
                message.id = this._randomString();
                this.m_clientStorage.messageContexts[message.id] = context;
            }
            if (this.hasLocalStorage() && this.hasPostMessage()) {
                this._initClientStorageIFrame();
                var encodedMessage = this._encodeUrlEncodedNameValuePairs(message);
                if (this.m_clientStorage.iframeIsLoaded) {
                    this.m_clientStorage.iframeEl.contentWindow.postMessage(encodedMessage, this.m_clientStorage.iframeOrigin);
                } else {
                    this.m_clientStorage.messageQueue.push(encodedMessage);
                }
            } else {
                if (context && context.error) {
                    context.error('MissingPostMessageOrLocalStorage');
                }
            }
        },

        setClientStorageVariable: function(namespace, name, value, context) {
            var message = { method: 'clientStorageSet', namespace: namespace, name: name, value: '' + value };
            if (context && context.allow) { message.allow = context.allow; }
            if (context && context.deny) { message.deny = context.deny; }
            return this._sendClientStorageMessage(message, context);
        },

        getClientStorageVariable: function(namespace, name, context) {
            return this._sendClientStorageMessage({ method: 'clientStorageGet', namespace: namespace, name: name }, context);
        },

        removeClientStorageVariable: function(namespace, name, context) {
            return this._sendClientStorageMessage({ method: 'clientStorageRemove', namespace: namespace, name: name }, context);
        },

        setSiteId: function(siteId) {
            this.m_siteId = siteId;
        },

        setAccountId: function(accountId) {
            this.m_accountId = accountId;
        },

        addExternalId: function(params) {
            if (!params.id || typeof params.id !== 'string' || cX.Array.some(['null', 'undefined', '[object Object]', 'false', 'true', 'NaN', '0'], function(t) { return params.id === t; })) {
                return;
            }
            var isDuplicate = this.Array.some(this.m_externalUserIds, function(externalId) {
                return params.id === externalId.id && params.type === externalId.type;
            });
            if (!isDuplicate && this.m_externalUserIds.length < 5) {
                if ((('' + params.id).length <= 40) && (('' + params.type).length <= 10)) {
                    this.m_externalUserIds.push(params);
                }
            }
        },

        _getExternalIdsAsUrlParameters: function() {
            var result = '';
            this.Array.forEach(this.m_externalUserIds, function(externalId, i) {
                result += '&eid' + i + '=' + encodeURIComponent('' + externalId.id);
                result += '&eit' + i + '=' + encodeURIComponent('' + externalId.type);
            });
            return result;
        },

        setCustomParameters: function(parameters, prefix) {
            if (typeof parameters !== 'object' || parameters === null) {
                return;
            }
            if (typeof prefix === 'undefined') {
                prefix = '';
            }
            var key, value;
            for (key in parameters) {
                if (parameters.hasOwnProperty(key)) {
                    value = parameters[key];
                    // Use a maximum length of 20 the key and 20 for the value.
                    // The actual maximum length could be lower on the server
                    // side. See official API documentation for more details.
                    key = prefix + ('' + key).substring(0, 20);
                    if (this.isArray(value)) {
                        value = value.slice(0, 10);
                        for (var i = 0; i < value.length; i++) {
                            value[i] = ('' + value[i]).substring(0, 20);
                        }
                        value = value.sort().join(',');
                    } else {
                        value = ('' + value).substring(0, 20);
                    }
                    var newCustomParameter = 'cp_' + encodeURIComponent(key) + '=' + encodeURIComponent(value);
                    if (!this.Array.some(this.m_customParameters, function(existingCustomParameter) {
                        return newCustomParameter === existingCustomParameter;
                        })) {
                        this.m_customParameters.push(newCustomParameter);
                    }
                }
            }
        },

        clearCustomParameters: function() {
            this.m_customParameters = [];
        },

        setRetargetingParameters: function(parameters) {
            this.setCustomParameters(parameters, 't_');
        },

        setUserProfileParameters: function(parameters) {
            this.setCustomParameters(parameters, 'u_');
        },

        startSessionAnnotation: function(newAnnotations) {
            this._setSessionAnnotations(this.combineArgs(this._getSessionAnnotations(), newAnnotations));
        },

        stopSessionAnnotation: function(removeAnnotations) {
            var currentAnnotations = this._getSessionAnnotations();
            var newAnnotations = {};
            for (var annotationName in currentAnnotations) {
                if (currentAnnotations.hasOwnProperty(annotationName)) {
                    var currentAnnotationValue = currentAnnotations[annotationName];
                    var removeAnnotationValue = removeAnnotations[annotationName];
                    if (typeof currentAnnotationValue === 'string') {
                        if (typeof removeAnnotationValue === 'undefined' || (removeAnnotationValue !== null && removeAnnotationValue !== currentAnnotationValue)) {
                            newAnnotations[annotationName] = currentAnnotationValue;
                        }
                    }
                }
            }
            this._setSessionAnnotations(newAnnotations);
        },

        stopAllSessionAnnotations: function() {
            this._setSessionAnnotations({});
        },

        _getSessionAnnotations: function() {
            var annotations = {};
            if (this.hasSessionStorage()) {
                var annotationsString = sessionStorage.getItem('_cX_SA');
                if (annotationsString) {
                    annotations = this.decodeUrlEncodedNameValuePairs(annotationsString);
                }
            }
            return annotations;
        },

        _setSessionAnnotations: function(annotations) {
            if (this.hasSessionStorage()) {
                sessionStorage.setItem('_cX_SA', this._encodeUrlEncodedNameValuePairs(annotations));
            }
        },

        _isInternalRequest: function() {
            try { return (null != navigator.userAgent.match(/cXense/i)); } catch (e) { return false; }
        },

        _isTemplateCdnUrl: function(url) {
            var t = this.cdn.template;
            var cdnBaseUrls = [t.direct.http, t.direct.https, t.mapped.http, t.mapped.https];
            url = url.toLowerCase();
            return cX.Array.some(cdnBaseUrls, function(cdnBaseUrl) {
                return url.indexOf(cdnBaseUrl.replace(/^https?/, '')) > -1;
            });
        },

        isRecsDestination: function(locationHref, documentReferrer) {
            locationHref = '' + (locationHref || location.href);
            documentReferrer = '' + (documentReferrer || document.referrer);
            return !!(locationHref.indexOf('cxrecs_s') > -1 || documentReferrer.match(/cdn\.cxpublic\.com\/generic_v[0-9]+\.html/)) || this.m_isSpaRecsDestination;
        },

        isSafari: function() {
            try { return (navigator.userAgent.indexOf('Safari') > -1); } catch (e) { return false; }
        },

        isIE6Or7: function() {
            try { return navigator.appName === 'Microsoft Internet Explorer' && (navigator.userAgent.indexOf('MSIE 6.') > -1 || navigator.userAgent.indexOf('MSIE 7.') > -1); } catch (e) { return false; }
        },

        isTopWindow: function() {
            return window.top === window.self;
        },

        isArray: function(item) {
            return Object.prototype.toString.call(item) === '[object Array]';
        },

        isObject: function(item) {
            return typeof item === 'object' && item !== null && !this.isArray(item);
        },

        _isEmptyObject: function(object) {
            for (var property in object) {
                if (object.hasOwnProperty(property)) {
                    return false;
                }
            }
            return true;
        },

        _clone: function(item) {
            return this.isObject(item) ? this._cloneObject(item) : this.isArray(item) ? this._cloneArray(item) : item;
        },

        _cloneArray: function(array) {
            return this._applyArray([], array);
        },

        _cloneObject: function(object) {
            return this._applyObject({}, object);
        },

        _applyArray: function(target, source) {
            for (var i = 0; i < source.length; i++) {
                target.push(this._clone(source[i]));
            }
            return target;
        },

        _applyObject: function(target, source) {
            for (var propertyName in source) {
                if (source.hasOwnProperty(propertyName)) {
                    if (this.isObject(source[propertyName])) {
                        if (!this.isObject(target[propertyName])) {
                            target[propertyName] = {};
                        }
                        this._applyObject(target[propertyName], source[propertyName]);
                    } else if (this.isArray(source[propertyName])) {
                        if (!this.isArray(target[propertyName])) {
                            target[propertyName] = [];
                        }
                        this._applyArray(target[propertyName], source[propertyName]);
                    } else {
                        target[propertyName] = source[propertyName];
                    }
                }
            }
            return target;
        },

        Array: {
            forEach: function(array, callback, thisArg) {
                for (var i = 0; i < array.length; i++) {
                    callback.call(thisArg, array[i], i, array);
                }
            },

            some: function(array, callback, thisArg) {
                var someMatch = false;
                this.forEach(array, function(element) {
                    someMatch = someMatch || callback.call(thisArg, element);
                });
                return someMatch;
            }
        },

        Object: {
            forEach: function(object, callback, thisArg) {
                for (var prop in object) {
                    if (object.hasOwnProperty(prop)) {
                        callback.call(thisArg, object[prop], prop, object);
                    }
                }
            },

            some: function(object, callback, thisArg) {
                var someMatch = false;
                this.forEach(object, function(element) {
                    someMatch = someMatch || callback.call(thisArg, element);
                });
                return someMatch;
            }
        },

        hasPostMessage: function() {
            return !!(window.postMessage && typeof window.postMessage !== 'number' && typeof window.postMessage !== 'string' && typeof window.postMessage !== 'boolean');
        },

        hasLocalStorage: function() {
            try { return typeof window.localStorage === 'object' && typeof window.localStorage.getItem === 'function'; } catch (e) { return false; }
        },

        hasHistory: function() {
            try { return typeof window.history === 'object' && typeof window.history.replaceState === 'function'; } catch (e) { return false; }
        },

        hasSessionStorage: function() {
            try { return typeof window.sessionStorage === 'object' && typeof window.sessionStorage.getItem === 'function'; } catch (e) { return false; }
        },

        _findRealReferrer: function() {
            var realReferrer = document.referrer || '';
            if (this._isTemplateCdnUrl(realReferrer)) {
                var matches = realReferrer.match(/[?&]ref=([^&#$]+)/);
                if (matches && matches.length === 2) {
                    realReferrer = decodeURIComponent(matches[1]);
                }
            }
            return realReferrer;
        },

        _isAutoRefresh: function() {
            var isAutoRefresh = false;
            try {
                if (location.href && document.referrer && (location.href != '') && (location.href == document.referrer)) {
                    isAutoRefresh = true;
                }
            } catch (e) { }
            return isAutoRefresh;
        },

        sendPageViewEvent: function(args, callback) {
            var allArgs = args || {};
            var locationHref = allArgs.location || location.href;
            var documentReferrer = allArgs.referrer || this._findRealReferrer();

            // Add #cxrecs_s for recs destinations
            if (this.isRecsDestination(locationHref) && locationHref.indexOf('cxrecs_s') < 0) {
                locationHref += ((locationHref.indexOf('#') < 0 ? '#' : '&') + 'cxrecs_s');
            }

            // Don't skew the statistics.
            if (this._isInternalRequest()) {
                return;
            }

            // Don't report for paused sites
            var pausedSiteIds = ['9222306886254430887'];
            for (var l = 0; l < pausedSiteIds.length; l++) {
                if (this.m_siteId === pausedSiteIds[l]) {
                    return;
                }
            }
            if (('' + locationHref).indexOf('/vitrines.globo.com/') > -1) {
                return;
            }

            // Don't send event on programmatic refresh
            var isAutoRefresh = false;
            if (allArgs.useAutoRefreshCheck !== false) {
                isAutoRefresh = this._isAutoRefresh();
            }

            // Make sure we are not re-reporting the previous page view report.
            var pageView = this.m_accountId + '_' + this.m_siteId + '_' + locationHref;
            if (this.m_previousPageViewReport !== pageView) {
                this.m_previousPageViewReport = pageView;

                if (document.images) {
                    var isNewUser = !(this.getUserId(false));
                    var sessionUserId = this.getSessionId();
                    var persistentUserId = this.getUserId();

                    var now = new Date().getTime();
                    var useP1 = false;
                    try {
                        if (this.hasLocalStorage()) {
                            var lastP1Time = parseInt(localStorage.getItem('cX_lastP1Time') || '0');
                            if (isNaN(lastP1Time) || lastP1Time < now - 1000 * 60 * 60 * 24 * 5 || lastP1Time > now) {
                                useP1 = true;
                                localStorage.setItem('cX_lastP1Time', '' + now);
                            }
                        }
                    } catch (e) {
                       useP1 = true;
                    }
                    var baseUrl = (useP1 ? (this.p1BaseUrl + '#') : (this.eventReceiverBaseUrlGif + '?'));
                    var repSrc = baseUrl + 'ver=1&typ=pgv&rnd=' + this.m_rnd;
                    try { repSrc += '&acc=' + encodeURIComponent(this.m_accountId); } catch (e) { }
                    try { repSrc += '&sid=' + encodeURIComponent(this.m_siteId); } catch (e) { }
                    try { repSrc += '&loc=' + encodeURIComponent(locationHref); } catch (e) { }
                    try { repSrc += '&ref=' + encodeURIComponent(documentReferrer); } catch (e) { }
                    try { repSrc += '&gol=' + (this.m_goalId ? encodeURIComponent(this.m_goalId) : ''); } catch (e) { }
                    try { repSrc += '&pgn=' + ''; } catch (e) { }
                    try { repSrc += '&ltm=' + this.m_scriptStartTime; } catch (e) { }
                    try { repSrc += '&new=' + (isNewUser ? '1' : '0'); } catch (e) { }
                    try { repSrc += '&arf=' + (isAutoRefresh ? '1' : '0'); } catch (e) { }
                    try { repSrc += '&tzo=' + encodeURIComponent('' + this.getTimezoneOffset()); } catch (e) { }
                    try { repSrc += '&res=' + encodeURIComponent('' + window.screen.width + 'x' + window.screen.height); } catch (e) { }
                    try { repSrc += '&dpr=' + encodeURIComponent(typeof devicePixelRatio === 'undefined' ? '' : '' + devicePixelRatio); } catch (e) { }
                    try { repSrc += '&col=' + encodeURIComponent('' + window.screen.colorDepth); } catch (e) { }
                    try { repSrc += '&jav=' + (navigator.javaEnabled() ? '1' : '0'); } catch (e) { }
                    try { repSrc += '&bln=' + (navigator.browserLanguage ? encodeURIComponent(navigator.browserLanguage) : (navigator.language ? encodeURIComponent(navigator.language) : 'OO1OO')); } catch (e) { }
                    try { repSrc += '&cks=' + encodeURIComponent(sessionUserId); } catch (e) { }
                    try { repSrc += '&ckp=' + encodeURIComponent(persistentUserId); } catch (e) { }
                    try { repSrc += '&chs=' + encodeURIComponent(document.charset || ''); } catch (e) { }
                    try { if (typeof allArgs.assetId === 'string') { repSrc += '&asi=' + encodeURIComponent(allArgs.assetId); } } catch (e) { }
                    try { var windowSize = this.getWindowSize();
                        repSrc += '&wsz=' + encodeURIComponent(windowSize.width + 'x' + windowSize.height); } catch (e) { }
                    repSrc += this._getExternalIdsAsUrlParameters();

                    var explicitCustomParameters = this.m_customParameters.slice(0);
                    try { this.setCustomParameters(this._getSessionAnnotations()); } catch (e) { }
                    if (this.m_customParameters.length > 0) {
                        repSrc += '&' + this.m_customParameters.join('&');
                    }
                    this.m_customParameters = explicitCustomParameters;

                    try { if (this.m_atfr) { repSrc += this.m_atfr; } this.m_atfr = null; } catch (e) { } // Only report once

                    // Flash detection
                    var flashVersion = '';
                    try {
                        var hasFlash = false;

                        var flashMimeTypeStr = 'application/x-shockwave-flash';
                        if (navigator.mimeTypes && navigator.mimeTypes[flashMimeTypeStr]) {
                            hasFlash = true;

                            try {
                                var flashMimeType = navigator.mimeTypes[flashMimeTypeStr];
                                if (flashMimeType.enabledPlugin && flashMimeType.enabledPlugin.description)
                                    flashVersion = flashMimeType.enabledPlugin.description;
                            }
                            catch (e) { flashVersion = ''; }
                        }
                        else if (navigator.plugins) {
                            try {
                                for (var i = 0; i < navigator.plugins.length; i++) {
                                    if (navigator.plugins[i].indexOf('Shockwave Flash') === 0) {
                                        hasFlash = true;
                                        break;
                                    }
                                }
                            } catch (e) { }
                        }
                        if (!hasFlash) {
                            try {
                                var axo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                                try { flashVersion = axo.GetVariable('$version'); }
                                catch (e) { flashVersion = ''; }
                                hasFlash = true;
                            } catch (e) { }
                        }

                        try { repSrc += '&fls=' + encodeURIComponent(hasFlash ? '1' : '0'); } catch (e) { }
                        try { repSrc += '&flv=' + encodeURIComponent(flashVersion); } catch (e) { }
                    } catch (e) { }

                    var repEl;
                    if (useP1) {
                        var iframeId = 'cx_rep_iframe_' + Math.random();
                        repEl = document.createElement('iframe');
                        repEl.id = iframeId;
                        repEl.name = iframeId;
                        repEl.width = '1';
                        repEl.height = '1';
                        repEl.scrolling = 'no';
                        repEl.frameBorder = '0';
                        repEl.src = repSrc;
                        repEl.style.display = 'none';
                        var cxRootEl = document.getElementById('cX-root');
                        if (cxRootEl) {
                            cxRootEl.appendChild(repEl);
                        } else {
                            function pollAppendToDocumentBody() {
                                if (document.body) {
                                    document.body.appendChild(repEl);
                                } else {
                                    setTimeout(pollAppendToDocumentBody, 100);
                                }
                            }
                            pollAppendToDocumentBody();
                        }
                    } else {
                        repEl = new Image();
                        repEl.src = repSrc;
                    }
                    if (typeof callback === 'function') {
                        repEl.onload = function() { callback({ url: repSrc, context: allArgs }); };
                    }
                }
            }
        },

        onP1: function(scriptToken) {
            var repSrc = this.eventReceiverBaseUrlGif + '?' + this.getHashFragment();
            repSrc += '&cst=' + encodeURIComponent(scriptToken);
            if (this.hasLocalStorage()) {
                try {
                    var localStorageToken = localStorage.getItem('cX_lst');
                    if (localStorageToken) {
                        repSrc += '&lst=' + encodeURIComponent(localStorageToken);
                    } else {
                        localStorage.setItem('cX_lst', scriptToken);
                    }
                } catch (e) { }
            }
            new Image().src = repSrc;
        },

        getSessionId: function(createIfMissing) {
            var sessionUserId = this.getCookie('cX_S');
            if (!sessionUserId) {
                try { if (this.hasSessionStorage()) { sessionUserId = sessionStorage.getItem('_cX_S'); } } catch (e) { }
            }
            if (!sessionUserId && createIfMissing !== false) {
                sessionUserId = this._randomString();
                try { this.setCookie('cX_S', sessionUserId, null, '/', this.getTopLevelDomain()); } catch (e) { }
                try { if (this.hasSessionStorage()) { sessionStorage.setItem('_cX_S', sessionUserId); } } catch (e) { }
            }
            return sessionUserId;
        },

        getUserId: function(createIfMissing) {
            try {
                if (typeof cXNative === 'object' && typeof cXNative.getUserId === 'function') {
                    var persistentUserIdNative = cXNative.getUserId();
                    if (persistentUserIdNative) {
                        return persistentUserIdNative;
                    }
                }
            } catch (e) { }

            var persistentUserIdCookie = this.getCookie('cX_P');
            var persistentUserIdLocalStorage = null;
            try { if (this.hasLocalStorage()) { persistentUserIdLocalStorage = localStorage.getItem('_cX_P'); } } catch (e) { }
            var persistentUserId = persistentUserIdCookie || persistentUserIdLocalStorage;
            if (createIfMissing !== false) {
                if (!persistentUserId) {
                    persistentUserId = this._randomString();
                }
                try { this.deleteCookie('cX_P', '/'); } catch (e) { }
                try { this.deleteCookie('cX_P', '/', location.hostname); } catch (e) { }
                try { this.setCookie('cX_P', persistentUserId, 365, '/', this.getTopLevelDomain()); } catch (e) { }
                try { if (this.hasLocalStorage()) { localStorage.setItem('_cX_P', persistentUserId); } } catch (e) { }
            }
            return persistentUserId;
        },

        getNowSeconds: function() {
            return Math.round(new Date().getTime() / 1000);
        },

        setEventAttributes: function(attributes) {
            this.m_customEventAttributes = attributes;
        },

        sendEvent: function(type, customParameters, providedArgs) {
            customParameters = customParameters || {};
            var args = this.combineArgs(this.m_customEventAttributes || {}, providedArgs || {});
            var identities = args.identities || [];
            if (!cX.Array.some(identities, function(id) { return id.type === 'cx'; })) {
                identities.push({ id: this.getUserId(), type: 'cx' });
            }
            var apiFormattedCustomParameters = [];
            cX.Object.forEach(customParameters, function(value, name) {
                apiFormattedCustomParameters.push({ group: name, item: value });
            });
            var requestObject = {
                events: [{
                    type: type,
                    rnd: this._randomString(),
                    siteId: this.m_siteId,
                    prnd: this.m_rnd,
                    userIds: identities,
                    origin: args.origin,
                    customParameters: apiFormattedCustomParameters
                }]};
            var url = 'https://api.cxense.com/dmp/push?callback={{callback}}' +
                '&persisted=' + encodeURIComponent(args.persistedQueryId) +
                '&json=' + encodeURIComponent(cX.JSON.stringify(requestObject));
            this.jsonpRequest(url, function(data) { if (args.callback) { args.callback(); } }, { synchronous: args.synchronous });
        },

        getUserSegmentIds: function(args, requestObject) {
            // Read cache
            var cachedSegmentTime = parseInt(this.getCookie('_cX_segmentTime') || '0');
            var cachedSegmentIds = this.getCookie('_cX_segmentIds');
            var segmentIds = cachedSegmentIds ? cachedSegmentIds.split(',') : (args.defaultValue || []);

            // If cache has expired, refresh cache from server
            var now = Math.round(new Date().getTime() / 1000);
            var maxAge = typeof args.maxAge === 'number' ? args.maxAge : 5 * 60;
            if (isNaN(cachedSegmentTime) || (cachedSegmentTime < now - maxAge) || cachedSegmentTime > now) {
                this.setCookie('_cX_segmentTime', '' + now, 365, '/', this.getTopLevelDomain());

                requestObject = requestObject || {};
                requestObject.identities = requestObject.identities || [];
                if (!cX.Array.some(requestObject.identities, function(id) { return id.type === 'cx'; })) {
                    requestObject.identities.push({ id: this.getUserId(), type: 'cx' });
                }
                var url = 'https://api.cxense.com/profile/user/segment?callback={{callback}}' +
                    '&persisted=' + encodeURIComponent(args.persistedQueryId) +
                    '&json=' + encodeURIComponent(cX.JSON.stringify(requestObject));

                this.jsonpRequest(url, function(data) {
                    var segments = ((data || {}).response || {}).segments;
                    if (cX.isArray(segments)) {
                        cX.setCookie('_cX_segmentIds', segments.join(','), 365, '/', cX.getTopLevelDomain());
                    }
                    if (args.callback) {
                        args.callback(segments || args.defaultValue || []);
                    }
                }, { synchronous: args.synchronous });
            } else {
                if (args.callback) {
                    setTimeout(function() { args.callback(segmentIds); }, 1);
                }
            }

            return segmentIds;
        },

        getTimezoneOffset: function() {
            var date = new Date();
            var tzo = date.getTimezoneOffset();
            try {
                if ((Math.abs(tzo) > 14 * 60) || (tzo % 15 !== 0)) {
                    var invalidTzo = tzo;
                    var hourDiff = Math.round(date.getUTCHours() - date.getHours()) % 24;
                    hourDiff += hourDiff < -12 ? 24 : (hourDiff > 12 ? -24 : 0);
                    tzo = Math.round((hourDiff * 60 + date.getUTCMinutes() - date.getMinutes()) / 30) * 30;
                }
            } catch (e) { }
            return tzo;
        },

        setCookie: function(name, value, expireDays, path, domain, secure) {
            document.cookie =
                name + '=' + escape(value) +
                (expireDays ? ';expires=' + new Date(new Date().getTime() + expireDays * 1000 * 60 * 60 * 24).toGMTString() : '') +
                (path ? ';path=' + path : '') +
                (domain ? ';domain=' + domain : '') +
                (secure ? ';secure' : '');
        },

        getCookie: function(check_name) {
            var a_all_cookies = document.cookie.split(';');
            var a_temp_cookie = '';
            var cookie_name = '';
            var cookie_value = '';
            var b_cookie_found = false;

            for (var i = 0; i < a_all_cookies.length; i++) {
                a_temp_cookie = a_all_cookies[i].split('=');

                cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');

                if (cookie_name == check_name) {
                    b_cookie_found = true;
                    if (a_temp_cookie.length > 1) {
                        cookie_value = unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g, ''));
                    }
                    return cookie_value;
                    break;
                }

                a_temp_cookie = null;
                cookie_name = '';
            }

            if (!b_cookie_found) {
                return null;
            }
        },

        deleteCookie: function(name, path, domain, secure) {
            return this.setCookie(name, '', -1, path, domain, secure);
        },

        getTopLevelDomain: function() {
            var tld = undefined;
            var domainParts = ('' + location.hostname).split('.');
            var testName = 'cX_T';
            var testValue = this._randomString();
            for (var i = 0; i < domainParts.length; i++) {
                try {
                    var candidate = domainParts.slice(-(i + 1)).join('.');
                    this.setCookie(testName, testValue, 1, '/', candidate);
                    var allowed = (this.getCookie(testName) === testValue);
                    this.deleteCookie(testName, '/', candidate);
                    if (allowed) {
                        tld = candidate;
                        break;
                    }
                } catch (e) {}
            }
            return tld;
        },

        renderTemplate: function(templateElementId, targetElementId, data, context) {

            // Phase 1: Combine main template and nested templates
            var templateElement = document.getElementById(templateElementId);
            var templateHtml = ' ' + templateElement.innerHTML + ' ';
            var depth = 0;
            while (templateHtml.indexOf('<!--<') > -1) {
                var htmlReplaceFunc = function(str, p1, p2, offset, s) {
                    return document.getElementById(p1).innerHTML;
                };
                templateHtml = templateHtml.replace(/<!--<\s*"([^"]*)"\s*>-->/g, htmlReplaceFunc);
                depth++;
                if (depth > 40) { // Sanity check, break out of infinite template reference loops
                    break;
                }
            }

            // Phase 2: Invert the HTML with JavaScript to become a JavaScript function that writes HTML,
            // extracts values from local references, stores values to global variables and insert references
            // to the global variables.
            var code = '\nvar html = \'\';\n';
            code += 'var varPrefix = \'cXTmplMgck\' + Math.round(Math.random() * 2147483647).toString(36) + (new Date().getTime()).toString(36);\n';
            code += 'var varIndex = 0;\n';
            var parts = templateHtml.split('%-->');
            for (var i = 0; i < parts.length; i++) {
                var pair = parts[i].split('<!--%');
                var textPart = pair[0];
                if (cX.library.trim(textPart).length > 0) {
                    textPart = textPart.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/'/g, '\\\'');
                    if (textPart.indexOf('{{') > -1) {

                        // To avoid XSS, do not insert values before HTML is parsed, but rather extract values
                        // and store to global variables that can be references and replaced later.
                        code += 'var localText = \'' + textPart + '\';\n';
                        code += 'var replaceFunc = function (str, p1, p2, offset, s) {\n';
                        code += '    var varName = varPrefix + varIndex;\n';
                        code += '    varIndex++;\n';
                        code += '    window[varName] = eval(p1);\n';
                        code += '    return \'{{window[\\\'\' + varName + \'\\\']}}\';\n';
                        code += '}\n';
                        code += 'localText = localText.replace(/{{([^}]*)}}/g, replaceFunc);\n';
                        code += 'html += localText;\n';

                    } else {
                        code += 'html += \'' + textPart + '\';\n';
                    }
                }

                var codePart = '';
                if (pair.length > 1) {
                    codePart = cX.library.trim(pair[1]);
                    codePart = codePart.replace(/(cX\.(library\.)?defaultAdRenderer)/g, 'html += $1');
                    codePart = codePart.replace(/(cX\.(library\.)?renderContainedImage)/g, 'html += $1');
                }
                code += codePart + '\n';
            }
            code += 'return html;\n';
            var renderFunc = new Function('data', 'context', code);

            // Phase 3: Run the function to create the final HTML with only global variable references

            /**********************************************************************************
             * TIP: This is a good place to set a breakpoint when debugging inline JavaScript
             * template code. Set the breakpoint on the line below, and "step into" when the
             * debugger breaks here:
             **********************************************************************************/
            var renderedHtml = renderFunc(data, context); // <-- Set breakpoint here

            // Phase 4: Browser parses HTML and creates DOM elements
            var targetElement = document.getElementById(targetElementId);
            targetElement.innerHTML = renderedHtml;

            // Phase 5: Finish up DOM elements by replacing references to global variables with values and
            // moving attributes in the tmp: namespace out to the global namespace.

            // Process a node
            function processNode(node, searchResult, ad) {
                // Process attributes
                if (node.attributes && node.attributes.length && node.attributes.length > 0) {
                    var tmpAttrs = [];
                    for (var i = 0; i < node.attributes.length; i++) {
                        var attribute = node.attributes[i];
                        // IE8 (and lower) iterates over all supported attributes.
                        // We only want to look at attributes that are specified on this element.
                        if (typeof attribute.specified === 'undefined' || attribute.specified) {
                            processText(attribute);
                            if (attribute.nodeName.indexOf('tmp:') == 0) {
                                tmpAttrs[tmpAttrs.length] = attribute;
                            }
                        }
                    }
                    for (var j = 0; j < tmpAttrs.length; j++) {
                        var tmpAttribute = tmpAttrs[j];
                        var newName = tmpAttribute.nodeName.replace(/^tmp:/, '');
                        if (newName === 'style') {
                            node.style.cssText = tmpAttribute.nodeValue;
                        } else if (newName === 'class') {
                            node.className = tmpAttribute.nodeValue;
                        } else {
                            node[newName] = tmpAttribute.nodeValue;
                        }
                        // Remove old, if possible (not really necessary)
                        try { if (node.removeAttribute) { node.removeAttribute(tmpAttribute.nodeName); } } catch (e) { }
                    }
                }
                // Process text nodes
                if (node.nodeName.toLowerCase() == '#text') {
                    processText(node);
                }
                // Process child elements
                if (node.childNodes && node.childNodes.length && node.childNodes.length > 0) {
                    for (var k = 0; k < node.childNodes.length; k++) {
                        var child = node.childNodes[k];
                        processNode(child);
                    }
                }
            }

            function processText(node, searchResult, ad) {
                if (node.nodeValue && node.nodeValue.indexOf) {
                    if (node.nodeValue.indexOf('{{') > -1) {
                        var replaceFunc = function(str, p1, p2, offset, s) {
                            var value = window[p1];
                            try { // IE 8 and lower will throw exception on delete
                                delete window[p1];
                            } catch (e) { }
                            return value;
                        };
                        node.nodeValue = node.nodeValue.replace(/{{window\[\'([^\]]*)\'\]}}/g, replaceFunc);
                    }
                }
            }

            // Process the inserted nodes and replace temp tokens with actual values
            for (var k = 0; k < targetElement.childNodes.length; k++) {
                var childNode = targetElement.childNodes[k];
                processNode(childNode);
            }
        },

        loadScript: function(src, async, charset, elementId) {
            if (async !== false) {
                var scriptEl = document.createElement('script');
                scriptEl.async = 'async'; // Async if undefined
                scriptEl.type = 'text/javascript';
                if (typeof charset === 'string') {
                    scriptEl.charset = charset;
                }
                if (typeof elementId === 'string') {
                    scriptEl.id = elementId;
                }
                scriptEl.src = src;
                var headEl = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
                headEl.insertBefore(scriptEl, headEl.firstChild);
            } else {
                document.write('<scr' + 'ipt type="text/javascript" src="' + src + '"' +
                    (typeof elementId === 'string' ? ' id="' + elementId + '"' : '') +
                    (typeof charset === 'string' ? ' charset="' + charset + '"' : '') +
                    '></scr' + 'ipt>');
            }
        },

        jsonpRequest: function(url, callback, options) {
            var opts = options || {};
            var callbackName = 'cXJsonpCB' + this._randomString();
            var scriptId = callbackName + 'script';
            window[callbackName] = function() {
                window[callbackName] = undefined;
                try { callback.apply(window, arguments); } catch (e) { }
                var scriptEl = document.getElementById(scriptId);
                if (scriptEl) {
                    scriptEl.parentElement.removeChild(scriptEl);
                }
            };
            this.loadScript(url.replace(/\{\{callback\}\}/, encodeURIComponent(callbackName)), opts.async, opts.charset, scriptId);
        },

        getAllText: function(object) {
            var allText = '';
            var count = 0;
            for (var key in object) {
                var node = object[key];
                count++;
                if (typeof node === 'string') {
                    allText += node;
                } else if (typeof node === 'object') {
                    allText += this.getAllText(node);
                }
            }
            if (count === 0 && typeof object === 'string') {
                return object;
            } else {
                return allText;
            }
        },

        createDelegate: function(instance, method) {
            var outerArgs = Array.prototype.slice.call(arguments, 2);
            return function() {
                return method.apply(instance, outerArgs.length > 0 ? Array.prototype.slice.call(arguments, 0).concat(outerArgs) : arguments);
            };
        },

        combineKeywordsIntoArray: function() {
            var allKeywords = [];
            for (var j = 0; j < arguments.length; j++) {
                var keywords = arguments[j];
                if (typeof keywords === 'string') {
                    allKeywords.push(keywords);
                } else if (this.isArray(keywords)) {
                    for (var i = 0; i < keywords.length; i++) {
                        if (typeof keywords[i] === 'string') {
                            allKeywords.push(keywords[i]);
                        }
                    }
                }
            }
            return allKeywords;
        },

        combineArgs: function() {
            var allArgs = {};
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i]) {
                    this._applyObject(allArgs, arguments[i]);
                }
            }
            return allArgs;
        },

        trim: function(string) {
            return string.replace(/^\s*/, '').replace(/\s*$/, '');
        },

        parseMargins: function(marginsString) {
            var margins = { left: 0, top: 0, right: 0, bottom: 0 };
            try {
                if (marginsString) {
                    var marginParts = this.trim(marginsString).replace(/\s+/g, ' ').split(' ');
                    for (var i = 0; i < marginParts.length; i++) {
                        marginParts[i] = parseInt(marginParts[i].replace(/px/gi, ''), 10);
                    }

                    if (marginParts.length == 1) {
                        margins.top = marginParts[0];
                        margins.right = marginParts[0];
                        margins.bottom = marginParts[0];
                        margins.left = marginParts[0];
                    }
                    if (marginParts.length == 2) {
                        margins.top = marginParts[0];
                        margins.right = marginParts[1];
                        margins.bottom = marginParts[0];
                        margins.left = marginParts[1];
                    }
                    if (marginParts.length == 3) {
                        margins.top = marginParts[0];
                        margins.right = marginParts[1];
                        margins.bottom = marginParts[2];
                        margins.left = marginParts[1];
                    }
                    if (marginParts.length == 4) {
                        margins.top = marginParts[0];
                        margins.right = marginParts[1];
                        margins.bottom = marginParts[2];
                        margins.left = marginParts[3];
                    }
                }
            } catch (e) { }
            return margins;
        },

        getHashFragment: function() {
            var href = location.href || '';
            var hashIndex = href.indexOf('#');
            return (hashIndex > -1) ? href.substr(hashIndex + 1) : '';
        },

        parseHashArgs: function() {
            return this.decodeUrlEncodedNameValuePairs(this.getHashFragment());
        },

        parseUrlArgs: function() {
            return this.decodeUrlEncodedNameValuePairs(location.search);
        },

        _filterHashArgs: function(allHashArgs) {
            var hashArgs = {};
            for (var argName in allHashArgs) {
                if ((argName === 'media') ||
                    (argName === 'renderTemplateUrl') ||
                    (argName === 'useMappedRenderTemplate') ||
                    (argName === 'rnd') ||
                    (argName.indexOf('lf-') === 0)) {
                    // Do not forward.
                } else if (argName === 'asId') {
                    hashArgs.adSpaceId = allHashArgs[argName];
                } else if (argName === 'auw') {
                    hashArgs.adUnitWidth = parseInt(allHashArgs.auw);
                } else if (argName === 'auh') {
                    hashArgs.adUnitHeight = parseInt(allHashArgs.auh);
                } else {
                    hashArgs[argName] = allHashArgs[argName];
                }
            }
            return hashArgs;
        },

        sendSpaRecsClick: function(clickUrl, callback) {
            var img = new Image();
            img.src = this.m_spaRecsClickUrl = clickUrl.replace(/\/widget\/click\/(image\/)?/, '/widget/click/image/');
            if (callback) {
                img.onload = callback;
                img.onerror = callback;
            }
        },

        clickTracker: function(clickUrl) {
            var linkId = 'cXLinkId' + this._randomString();
            if (clickUrl) {
                setTimeout(function() {
                    var linkEl = document.getElementById(linkId);
                    cX.addEventListener(linkEl, 'mousedown', function() { linkEl.href = clickUrl; });
                    cX.addEventListener(linkEl, 'touchstart', function() { linkEl.href = clickUrl; });
                }, 1);
            }
            return linkId;
        },

        renderContainedImage: function(args) {
            var imageDimensions = (args.image.dimensions || ('' + args.image.width + 'x' + args.image.height)).split('x');
            var imageWidth = parseInt(imageDimensions[0]);
            var imageHeight = parseInt(imageDimensions[1]);
            var imageAspectRatio = imageWidth / imageHeight;
            var containerAspectRatio = args.container.width / args.container.height;

            // Scale image
            var fitScaleFactor = args.container.width / imageWidth;
            var zoomScaleFactor = args.container.height / imageHeight;
            var scaleFactor = ((args.tooWideStrategy || 'zoom') === 'zoom' ? zoomScaleFactor : fitScaleFactor);
            if (imageAspectRatio < containerAspectRatio) {
                fitScaleFactor = args.container.height / imageHeight;
                zoomScaleFactor = args.container.width / imageWidth;
                scaleFactor = ((args.tooTallStrategy || 'zoom') === 'zoom' ? zoomScaleFactor : fitScaleFactor);
            }
            scaleFactor = Math.min(Math.max(scaleFactor, args.scaleFactorMin || 0.001), args.scaleFactorMax || 1.0);
            var scaledWidth = imageWidth * scaleFactor;
            var scaledHeight = imageHeight * scaleFactor;

            // Position image
            var imageOffsetLeftFactor = (scaledWidth > args.container.width) ?
                imageOffsetLeftFactor = (typeof args.tooWideFocusPoint === 'number' ? args.tooWideFocusPoint : 0.5) :
                ({left: 0, center: 0.5, right: 1})[args.horizontalAlign || 'left'];
            var imageOffsetTopFactor = (scaledHeight > args.container.height) ?
                imageOffsetTopFactor = (typeof args.tooTallFocusPoint === 'number' ? args.tooTallFocusPoint : 0) :
                ({top: 0, middle: 0.5, bottom: 1})[args.verticalAlign || 'top'];

            // Render image
            return '<div' +
                (args.container.cssClass ? ' class="' + args.container.cssClass + '"' : '') +
                ' style="width: ' + args.container.width + 'px; height: ' + args.container.height + 'px;' +
                '  overflow: hidden; position: relative;"' +
                '><img' +
                (args.image.cssClass ? '  class="' + args.image.cssClass + '"' : '') +
                '  style="position: relative;' +
                '   left: ' + ((args.container.width - scaledWidth) * imageOffsetLeftFactor) + 'px;' +
                '   top: ' + ((args.container.height - scaledHeight) * imageOffsetTopFactor) + 'px;"' +
                '  src="' + args.image.src + '"' +
                '  width="' + scaledWidth + '"' +
                '  height="' + scaledHeight + '"' +
                '  tmp:alt="' + this._tempStore(args.image.alt || '') + '"' +
                (args.image.id ? '  tmp:id="' + this._tempStore(args.image.id) + '"' : '') +
                (args.image.title ? '  tmp:title="' + this._tempStore(args.image.title) + '"' : '') +
                ' /></div>\n';
        },

        defaultAdRenderer: function(adSpace, ad) {
            var adHtml = '';
            var type = ad.creative.type;
            if (type.indexOf('ImageCreativeFeature') > -1) { adHtml += this._defaultImageCreativeRenderer(adSpace, ad); }
            else if (type.indexOf('TextCreativeFeature') > -1) { adHtml += this._defaultTextCreativeRenderer(adSpace, ad); }
            else if (type.indexOf('FlashCreativeFeature') > -1) { adHtml += this._defaultFlashCreativeRenderer(adSpace, ad); }
            else if (type.indexOf('ComboCreativeFeature') > -1) { adHtml += this._defaultComboCreativeRenderer(adSpace, ad); }
            else if (type.indexOf('ThirdPartyCreativeFeature') > -1) { adHtml += this._defaultThirdPartyCreativeRenderer(adSpace, ad); }
            return adHtml;
        },

        _defaultImageCreativeRenderer: function(adSpace, ad) {
            var html = '';
            html += '<a class="ad" rel="nofollow" tmp:href="' + this._tempStore(ad.clickUrl) + '" target="_blank">\n';
            html += '<img tmp:src="' + this._tempStore(ad.creative.source) + '" border="0" alt=""';
            html += ' width="' + ad.creative.spec.width + '"';
            html += ' height="' + ad.creative.spec.height + '" />\n';
            html += '</a>\n';
            return html;
        },

        _defaultTextCreativeRenderer: function(adSpace, ad) {
            var html = '';
            html += '<a class="ad" rel="nofollow" tmp:href="' + this._tempStore(ad.clickUrl) + '" target="_blank"';
            html += ' style="height: ' + adSpace.adUnitHeight + 'px; width: ' + adSpace.adUnitWidth + 'px;">\n';
            html += '<span class="title">' + this._tempStore(ad.creative.title) + '</span>\n';
            html += '<span class="body">\n';
            for (var i = 0; i < ad.creative.content.length; i++) {
                html += '<span>' + this._tempStore(ad.creative.content[i]) + '</span><br />\n';
            }
            html += '</span>\n';
            if (ad.creative.displayUrl) {
                html += '<span class="url">' + this._tempStore(ad.creative.displayUrl) + '</span>\n';
            }
            html += '</a>\n';
            return html;
        },

        _defaultFlashCreativeRenderer: function(adSpace, ad) {
            var width = ad.creative.spec.width;
            var height = ad.creative.spec.height;
            var clickTag = encodeURIComponent(ad.clickUrl);
            var movieUrl = ad.creative.source + (ad.creative.source.indexOf('?') > -1 ? '&' : '?') +
                'clickTAG=' + clickTag + '&' +
                'clickTag=' + clickTag + '&' +
                'clicktag=' + clickTag + '&' +
                'clickTARGET=' + '_blank';
            var elId = 'cXFlashObj' + this._randomString();
            var imageSource = ad.creative.imageSource;
            var html = '' +
                '<div style="width: ' + width + 'px; height: ' + height + 'px; margin: 0; padding: 0; border: 0; outline: 0; display: inline-block;">\n' +
                '<object id="' + elId + 'obj" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="' + width + '" height="' + height + '">\n' +
                '  <param name="AllowScriptAccess" value="never" />\n' +
                '  <param name="movie" value="' + movieUrl + '" />\n' +
                '  <param name="wmode" value="transparent" />\n' +
                '  <!--[if !IE]>-->\n' +
                '  <object id="' + elId + 'obj2" type="application/x-shockwave-flash" data="' + movieUrl + '" width="' + width + '" height="' + height + '">\n' +
                '    <param name="AllowScriptAccess" value="never" />\n' +
                '    <param name="movie" value="' + movieUrl + '" />\n' +
                '    <param name="wmode" value="transparent" />\n' +
                '  <!--<![endif]-->\n' +
                '    <a class="ad" rel="nofollow" href="' + ad.clickUrl + '" target="_blank" style="width: ' + width + 'px; height: ' + height + 'px;">\n' +
                (imageSource ? '    <img src="' + imageSource + '" width="' + width + '" height="' + height + '" alt="Flash ad" />\n' : '') +
                '    </a>\n' +
                '  <!--[if !IE]>-->\n' +
                '  </object>\n' +
                '  <!--<![endif]-->\n' +
                '</object>\n' +
                '</div>\n';
            return html;
        },

        _defaultComboCreativeRenderer: function(adSpace, ad) {
            var html = '';
            html += '<a class="ad" rel="nofollow" tmp:href="' + this._tempStore(ad.clickUrl) + '" target="_blank">\n';
            html += '<span class="title">' + this._tempStore(ad.creative.title) + '</span>\n';
            html += '<span class="body">\n';
            for (var i = 0; i < ad.creative.content.length; i++) {
                var content = ad.creative.content[i];
                html += '<span>' + this._tempStore(content.value) + '</span><br />\n';
            }
            html += '</span>\n';
            if (ad.creative.displayUrl) {
                html += '<span class="url">' + this._tempStore(ad.creative.displayUrl) + '</span>\n';
            }
            for (var j = 0; j < ad.creative.images.length; j++) {
                var image = ad.creative.images[j];
                html += '<img tmp:src="' + this._tempStore(image.source) + '" border="0" alt=""';
                html += ' width="' + image.width + '"';
                html += ' height="' + image.height + '" />\n';
            }
            for (var k = 0; k < ad.creative.flashFiles.length; k++) {
                var flashFile = ad.creative.flashFiles[k];
                // Construct normal flash ad structure
                var flashAd = { creative: { source: flashFile.source, type: 'FlashCreativeFeature',
                    spec: { width: flashFile.width, height: flashFile.height } }, clickUrl: ad.clickUrl };
                html += this._defaultFlashCreativeRenderer(adSpace, flashAd);
            }
            html += '</a>\n';
            return html;
        },

        _defaultThirdPartyCreativeRenderer: function(adSpace, ad) {
            var html = '';
            var elId = 'cXThirdParty' + this._randomString();
            html += '<iframe id="' + elId + '" width="' + adSpace.adUnitWidth + '" height="' + adSpace.adUnitHeight + '" frameborder="0"></iframe>';
            // The target IFRAME is not in the DOM yet, so we need to delay the rendering into the iframe:
            var renderer = (function(elIdParam, thirdPartyTagParam) {
                var elId = elIdParam;
                var thirdPartyTag = thirdPartyTagParam;
                return function() {
                    // Since the thirdParty tags use document.write, and this document is most likely already closed, we must open a new document stream in an IFRAME:
                    var thirdPartyIFrameEl = document.getElementById(elId);
                    var contentDoc = thirdPartyIFrameEl.contentDocument || thirdPartyIFrameEl.contentWindow.document;
                    contentDoc.open();
                    // Write a proper DOCTYPE, so that we avoid Quirksmode in IE:
                    contentDoc.write('<!DOCTYPE HTML>\n');
                    contentDoc.write('<html>\n');
                    contentDoc.write('<head>\n<title></title>\n');
                    contentDoc.write('<style type="text/css">html, body, div { margin:0; padding: 0; }</style>\n');
                    contentDoc.write('</head>\n<body style="overflow:hidden;">\n');
                    contentDoc.write('' + thirdPartyTag + '\n</body>\n</html>\n');
                    // Cannot close the stream b/c of old IE bug where closing a streamed document that itself does document.write(..) hangs the browser
                    // This also means that the onload event might not fire in the child iframe, so the third party ad tag must not depend on onload
                    // contentDoc.close();
                };
            })(elId, ad.creative.thirdPartyAdCode);
            setTimeout(renderer, 1);
            return html;
        },

        _randomString: function() {
            var randomString = (new Date().getTime()).toString(36);
            while (randomString.length < 16) {
                randomString += Math.round(Math.random() * 2147483647).toString(36);
            }
            return randomString.substr(0, 16);
        },

        _tempStore: function(data) {
            var varName = 'cXTmplMgck' + this._randomString();
            window[varName] = data;
            return '{{window[\'' + varName + '\']}}';
        },

        addEventListener: function(object, eventName, handler) {
            if (object.addEventListener) {
                object.addEventListener(eventName, handler, false);
            } else if (object.attachEvent) {
                object.attachEvent('on' + eventName, handler);
            }
        },

        decodeUrlEncodedNameValuePairs: function(urlEncodedNameValuePairs) {
            var object = {};
            var pairs = urlEncodedNameValuePairs.replace(/\?/, '').replace(/#/, '').split('&');
            for (var i = 0; i < pairs.length; i++) {
                var pairElements = pairs[i].split('=');
                if (pairElements.length === 2) {
                    var name = decodeURIComponent(pairElements[0]);
                    var value = decodeURIComponent(pairElements[1]);

                    if (typeof object[name] !== 'undefined') { // Check if we already have a value for this name
                        if (!this.isArray(object[name])) { // If so, convert to array if not already an array
                            object[name] = [object[name]];
                        }
                        object[name].push(value);
                    } else {
                        object[name] = value;
                    }
                }
            }
            return object;
        },

        _encodeUrlEncodedNameValuePairs: function(object) {
            var encodedString = '';
            for (var attrName in object) {
                if (object.hasOwnProperty(attrName)) {
                    var attrValue = object[attrName];
                    if (typeof attrValue === 'string' || typeof attrValue === 'number' || typeof attrValue === 'boolean') {
                        encodedString += (encodedString.length > 0 ? '&' : '') + encodeURIComponent(attrName) + '=' + encodeURIComponent('' + attrValue);
                    } else if (this.isArray(attrValue)) {
                        for (var i = 0; i < attrValue.length; i++) {
                            encodedString += (encodedString.length > 0 ? '&' : '') + encodeURIComponent(attrName) + '=' + encodeURIComponent('' + attrValue[i]);
                        }
                    }
                }
            }
            return encodedString;
        },

        postMessageToParent: function(message, domain) {
            var messageSent = false;
            if (this.isIE6Or7() && !parent.postMessage) {
                // For IE6 and IE7, we pass the message in the hash fragment of the parent page
                var allArgs = this.combineArgs(this.parseUrlArgs(), this.parseHashArgs());
                if (allArgs.loc && allArgs.uhm) { // "uhm" parameter must be set and true
                    var parentUrl = allArgs.loc;
                    var parentIsTop = false;
                    try { parentIsTop = parentIsTop || (parent === parent.parent); } catch (e) { }
                    try { parentIsTop = parentIsTop || (!parent.parent); } catch (e) { }
                    if (parentIsTop) {
                        parentUrl += (parentUrl.indexOf('#') > -1) ? '&' : '#';
                        parentUrl += 'cXPostMsg=' + encodeURIComponent(message);
                        setTimeout(function() { parent.location.replace(parentUrl) }, 3000);
                        messageSent = true;
                    }
                }
            } else if (parent.postMessage) {
                // For modern browsers, use the native postmessage
                parent.postMessage(message, domain);
                messageSent = true;
            }
            return messageSent;
        },

        _sendMessageToChild: function(childFrame, childSrc, message, domain) {
            if (this.hasPostMessage()) {
                if (childFrame.contentWindow && childFrame.contentWindow.postMessage) {
                    // For modern browsers, use the native postMessage
                    childFrame.contentWindow.postMessage(message, domain);
                }
            } else {
                // For older browser lacking postMessage() (IE7, IE6, etc), we pass the message in the hash fragment
                childSrc += (childSrc.indexOf('#') > -1) ? '&' : '#';
                childSrc += 'cXPostMsg=' + encodeURIComponent(message);
                // childFrame.src = childSrc;
            }
        },

        _handlePostMessage: function(message) {
            try {
                if (typeof message === 'object' && typeof message.data === 'string') {
                    var origin = message.origin; // Don't need to check origin as the security is enforced by verification of the message.
                    var object = this.decodeUrlEncodedNameValuePairs(message.data);
                    if (typeof object.elementId !== 'undefined' && object.method === 'updateAdSpace') {
                        this._updateWidget(object);
                    } else if (object.method === 'updateParentMetrics') {
                        this._updateParentMetrics(object);
                    } else if (object.method === 'requestParentMetrics') {
                        this._handleParentMetricsRequest(object, message);
                    } else if (object.method === 'clientStorageResult' && origin === this.m_clientStorage.iframeOrigin) {
                        this._handleClientStorage(object);
                    }
                }
            } catch (e) { }
        },

        _handleParentMetricsRequest: function(request, message) {
            // Check if we have communicated with this source before
            if (!cX.Array.some(this.m_knownMessageSources, function(messageSource) { return messageSource === message.source; })) {
                this.m_knownMessageSources.push(message.source);
                // Find the corresponding frame element
                cX.Array.forEach(document.getElementsByTagName('iframe'), function(frameEl) {
                    if (frameEl.src.replace(/#.*$/, '') === request.framesrc.replace(/#.*$/, '')) {
                        // Check if already tracking
                        if (!cX.Object.some(this.m_widgetSpecs, function(widgetElId) {
                            return this.m_widgetSpecs[widgetElId].element === frameEl; }, this)) {
                            this.trackElement({ element: frameEl });
                        }
                    }
                }, this);
            }
            cX.Array.forEach(request.metricNames.split(','), function(metricName) {
                if (metricName === 'documentSize') {
                    this.m_documentSizeRequestedFromChild = true;
                }
            }, this);
        },

        _updateParentMetrics: function(update) {
            var values = update.parentMetrics.split(',');
            for (var i = 0; i < values.length; i++) {
                values[i] = parseInt(values[i], 10);
            }
            this.m_activityState.parentMetrics = {
                updateTime: values[0],
                scrollPos: { left: values[1], top: values[2] },
                windowSize: { width: values[3], height: values[4] },
                widgetPos: { left: values[5], top: values[6] },
                widgetSize: { width: values[7], height: values[8] },
                overlapPos: { left: values[9], top: values[10] },
                overlapSize: { width: values[11], height: values[12] },
                documentSize: { width: values[13], height: values[14] }
            };
        },

        _updateWidget: function(update) {
            var elementId = update.elementId;
            var specs = this.m_widgetSpecs[elementId];
            if (specs) {
                var matchedAdCount = parseInt(update.matchedAdCount, 10);
                var isVerticallyOriented = update.isVerticallyOriented !== 'false';
                var cancelEvent = false;
                if (specs.onImpressionResult && (typeof specs.onImpressionResult === 'function')) {
                    // Execute callback to custom function, allowing cancelling of default behavior.
                    var event = {
                        elementId: elementId,
                        matchedAdCount: matchedAdCount,
                        isVerticallyOriented: isVerticallyOriented,
                        contentWidth: update.contentWidth,
                        contentHeight: update.contentHeight
                    };
                    cancelEvent = specs.onImpressionResult(event) === false;
                }
                if (!cancelEvent) {
                    var iframeEl = document.getElementById(elementId);
                    if (!specs.resizeToContentSize && specs.adUnitWidth && specs.adUnitHeight) {
                        if (isVerticallyOriented) {
                            iframeEl.style.height = '' + this.calculateAdSpaceSize(matchedAdCount, specs.adUnitHeight, specs.margins.top, specs.margins.bottom) + 'px';
                            if (specs.initialHorizontalAdUnits === 0) {
                                iframeEl.style.width = '' + this.calculateAdSpaceSize(1, specs.adUnitWidth, specs.margins.left, specs.margins.right) + 'px';
                            }
                        } else {
                            iframeEl.style.width = '' + this.calculateAdSpaceSize(matchedAdCount, specs.adUnitWidth, specs.margins.left, specs.margins.right) + 'px';
                            if (specs.initialVerticalAdUnits === 0) {
                                iframeEl.style.height = '' + this.calculateAdSpaceSize(1, specs.adUnitHeight, specs.margins.top, specs.margins.bottom) + 'px';
                            }
                        }
                    } else {
                        if (specs.resizeToContentSize !== false) {
                            if (typeof update.contentWidth !== 'undefined') { iframeEl.style.width = '' + update.contentWidth + 'px'; }
                            if (typeof update.contentHeight !== 'undefined') { iframeEl.style.height = '' + update.contentHeight + 'px'; }
                        }
                    }
                }
            }
        },

        calculateAdSpaceSize: function(adCount, adUnitSize, marginA, marginB) {
            // Because of the floats, the margins aren't overlapping like normal, otherwise it would have had to be:
            // return adCount > 0 ? marginA + (adCount * adUnitSize) + ((adCount - 1) * Math.max(marginA, marginB)) + marginB : 0;
            return adCount * (adUnitSize + marginA + marginB);
        },

        insertMultipleAdSpaces: function(argsArray, optionalCommonArgs) {
            var adSpaceIds = [];
            var masterFrameId = 'cXMaster' + Math.random();
            var masterTargetElementId;
            var isUsingRenderTemplates = false;
            for (var i = 0; i < argsArray.length; i++) {
                var args = argsArray[i];
                if (args) {
                    if (typeof args.adSpaceId === 'string') {
                        adSpaceIds.push(args.adSpaceId);
                    }
                    if (typeof args.renderTemplateUrl === 'string' || args.useMappedRenderTemplate === true) {
                        isUsingRenderTemplates = true;
                    }
                    masterTargetElementId = masterTargetElementId || args.targetElementId || args.appendToElementId || args.insertBeforeElementId;
                }
            }

            // Onload handler for the master iframe
            var masterOnLoadHandler = this.createDelegate(this, function() {
                // Render the slave iframes
                for (var i = 0; i < argsArray.length; i++) {
                    var args = argsArray[i];
                    args.isSlave = true;
                    args.masterId = masterFrameId;
                    if (this.isObject(optionalCommonArgs)) {
                        // We need to set these to get the correct URL for the mapped render template
                        args.backend = optionalCommonArgs.backend;
                        args.baseAdDeliveryUrl = optionalCommonArgs.baseAdDeliveryUrl;
                        args.secureBaseAdDeliveryUrl = optionalCommonArgs.secureBaseAdDeliveryUrl;
                    }
                    this.insertAdSpace(args);
                }
            });

            // Render the master iframe
            var masterArgs = { adSpaceIds: adSpaceIds, masterOnLoadHandler: masterOnLoadHandler, masterId: masterFrameId, masterTargetElementId: masterTargetElementId };
            masterArgs = this.combineArgs(optionalCommonArgs, masterArgs);
            if (isUsingRenderTemplates) {
                masterArgs.renderTemplateUrl = this.cdn.template.direct.http + 'master-data-template.html';
            }
            this.insertAdSpace(masterArgs);
        },

        insertAdSpace: function(args) {
            return this._insertWidget(args);
        },

        insertWidget: function(args, requestObject) {
            args = args || {};
            if (args.renderTemplateUrl === 'auto') {
                args.renderTemplateUrl = this.cdn.template.direct.http + 'generic_v1.html';
            }
            if (this._isTemplateCdnUrl(args.renderTemplateUrl || '') && !this.hasHistory()) {
                args.renderTemplateUrl += '?ref=' + encodeURIComponent(location.href);
            }
            if (typeof args.forwardHashArgs === 'undefined' && !this.isTopWindow() && location.hash.indexOf('parentElementId') > -1) {
                args.forwardHashArgs = true;
            }
            args.resizeToContentSize = (args.resizeToContentSize !== false);
            return this._insertWidget(args, requestObject);
        },

        _insertWidget: function(args, requestObject) {
            requestObject = requestObject || {};

            // Don't skew the statistics.
            if (this._isInternalRequest()) {
                return;
            }

            var persistentUserId = this.getUserId();

            var allArgs = window.cx_props ? this.combineArgs(window.cx_props, args) : args;
            allArgs.k = window.cx_props ? this.combineKeywordsIntoArray(window.cx_props.k, args.k) : this.combineKeywordsIntoArray(args.k);
            if (allArgs.forwardHashArgs) {
                var hashArgs = this._filterHashArgs(this.parseHashArgs());
                allArgs.k = this.combineKeywordsIntoArray(allArgs.k, hashArgs.k);
                allArgs = this.combineArgs(hashArgs, allArgs);
                if (hashArgs.requestObject) {
                    var tmpVarName = 'cxParse_' + this._randomString();
                    if (window.JSON && window.JSON.parse) {
                        window[tmpVarName] = JSON.parse(hashArgs.requestObject);
                    } else {
                        unescape.constructor('window[\'' + tmpVarName + '\'] = ' + hashArgs.requestObject)();
                    }
                    requestObject = this._applyObject(window[tmpVarName], requestObject);
                }
            }
            requestObject = this._applyObject({ context: { referrer: this._findRealReferrer() }}, requestObject);
            if (this.isTopWindow()) {
                requestObject.context.autoRefresh = this._isAutoRefresh();
            }

            // There are six modes we can be in when insertWidget is called:
            // Traditional approach:
            //  - Render an Iframe element that loads HTML media from the AdServer passing args as URL params
            // Steps 1 and 2 of templating approach:
            //  1. Render an Iframe element that loads HTML media template from a static URL passing args in the URL hash fragment
            //  2a. Render a template into a target element on the page using data from the adserver passing args in URL params
            //  2b. Render a template into a target element on the page using data from Content passing args as JSON
            // Slave and master iframes for multiple adspaces approach:
            //  1. Render master Iframe element that loads multipart JSON HTML media from the AdServer passing args as URL params
            //  2. Render slave iframe that loads HTML from master iframe and passing args in the URL hash fragment

            var media = 'html';
            var params = '?';
            var isRenderTemplateRequest = !!(allArgs.renderTemplateUrl || allArgs.useMappedRenderTemplate);
            if (isRenderTemplateRequest || args.isSlave) {
                params = '#';
                if (allArgs.widgetId || requestObject.widgetId) {
                    params += 'requestObject=' + encodeURIComponent(cX.JSON.stringify(requestObject)) + '&';
                }
            } else if (allArgs.templateElementId || allArgs.renderFunction || allArgs.widgetId || requestObject.widgetId) {
                media = 'javascript';
                if (!allArgs.adSpaceId && !allArgs.adSpaceIds && (allArgs.widgetId || requestObject.widgetId)) {
                    requestObject.widgetId = requestObject.widgetId || allArgs.widgetId;
                    if (allArgs.backend) {
                        requestObject.backend = allArgs.backend;
                        allArgs.backend = 'production';
                    }
                    var user = requestObject.user || (requestObject.user = { ids: {} });
                    (user.ids || (user.ids = {})).usi = allArgs.usi || persistentUserId;

                    var context = requestObject.context || (requestObject.context = {});
                    if (!context.url) {
                        context.url = allArgs.ctx || location.href;
                    }
                    requestObject.prnd = allArgs.prnd || this.m_rnd;
                    params += 'json=' + encodeURIComponent(cX.JSON.stringify(requestObject)) + '&';
                    allArgs.templateElementId = allArgs.templateElementId || 'templateElement';
                    allArgs.targetElementId = allArgs.targetElementId || 'targetElement';
                }

            }
            if (allArgs.adSpaceIds) {
                media = 'multipart-html-json';
                params += 'asId=' + allArgs.adSpaceIds.join('&asId=') + '&';
            }
            if (allArgs.adSpaceId && this.isArray(allArgs.adSpaceId)) {
                media = 'javascript';
                params += 'asId=' + allArgs.adSpaceId.join('&asId=') + '&';
            }
            params += 'media=' + encodeURIComponent(media);
            var adSpaceId = allArgs.adSpaceId;
            if (adSpaceId) {
                if (!this.isArray(allArgs.adSpaceId)) {
                    params += '&asId=' + encodeURIComponent(adSpaceId);
                }

                allArgs.initialHorizontalAdUnits = allArgs.initialHorizontalAdUnits || 0;
                allArgs.initialVerticalAdUnits = allArgs.initialVerticalAdUnits || 0;
                allArgs.adUnitWidth = allArgs.adUnitWidth || 0;
                allArgs.adUnitHeight = allArgs.adUnitHeight || 0;
            }
            if (typeof allArgs.siteId !== 'undefined') {
                params += '&sid=' + encodeURIComponent(allArgs.siteId);
            } else if (this.m_siteId !== '0') {
                params += '&sid=' + encodeURIComponent(this.m_siteId);
            }


            for (var argName in allArgs) {

                // Don't add functions or the base params, only the custom params
                if (typeof allArgs[argName] !== 'function' &&
                    (argName !== 'parentElementId' || media === 'html') &&
                    argName !== 'k' &&
                    argName !== 'delayImpression' &&
                    argName !== 'forwardHashArgs' &&
                    argName !== 'renderTemplateUrl' &&
                    argName !== 'requestObject' &&
                    argName !== 'useSecureUrls' &&
                    argName !== 'useMappedRenderTemplate' &&
                    argName !== 'templateElementId' &&
                    argName !== 'targetElementId' &&
                    argName !== 'onImpressionResult' &&
                    argName !== 'siteId' &&
                    argName !== 'adSpaceId' &&
                    argName !== 'adSpaceIds' &&
                    argName !== 'parentId' &&
                    argName !== 'appendToElementId' &&
                    argName !== 'insertBeforeElementId' &&
                    argName !== 'adUnitWidth' &&
                    argName !== 'adUnitHeight' &&
                    argName !== 'loc' &&
                    argName !== 'synchronous' &&
                    argName !== 'masterTargetElementId' &&
                    argName !== 'initialVerticalAdUnits' &&
                    argName !== 'initialHorizontalAdUnits' &&
                    argName !== 'destinationUrlParameters' &&
                    argName !== 'destinationUrlPrefix' &&
                    (isRenderTemplateRequest || (
                        argName !== 'backend' &&
                        argName !== 'secureBaseAdDeliveryUrl' &&
                        argName !== 'baseAdDeliveryUrl' &&
                        argName !== 'width' &&
                        argName !== 'height'))
                    ) {
                    params += '&' + encodeURIComponent(argName) + '=' + encodeURIComponent(allArgs[argName]);
                }

                // Add all keywords
                if (argName == 'k') {
                    var keywords = allArgs[argName];
                    for (var i = 0; i < keywords.length; i++) {
                        params += '&k=' + encodeURIComponent(keywords[i]);
                    }
                }

                // Pack and append all custom destination URL parameters as one parameter
                if (argName == 'destinationUrlParameters') {
                    var packedParameters = '';
                    var firstItem = true;
                    var destinationUrlParameters = allArgs.destinationUrlParameters;
                    for (var destinationUrlParameterName in destinationUrlParameters) {
                        var destinationUrlParameter = destinationUrlParameters[destinationUrlParameterName];
                        if (typeof destinationUrlParameter !== 'function') {
                            if (!firstItem) {
                                packedParameters += '&';
                            }
                            packedParameters += encodeURIComponent(destinationUrlParameterName) + '=' + encodeURIComponent(destinationUrlParameter);
                            firstItem = false;
                        }
                    }
                    params += '&' + encodeURIComponent(argName) + '=' + encodeURIComponent(packedParameters);
                }

                if (argName == 'destinationUrlPrefix') {
                    params += '&' + encodeURIComponent('dup') + '=' + encodeURIComponent(allArgs[argName]);
                }

            }

            var baseDeliveryUrl = allArgs.baseAdDeliveryUrl || this.backends[allArgs.backend || 'production'].baseAdDeliveryUrl;
            try {
                if (location.protocol == 'https:') {
                    params += '&useSecureUrls=true';
                    baseDeliveryUrl = allArgs.secureBaseAdDeliveryUrl || this.backends[allArgs.backend || 'production'].secureBaseAdDeliveryUrl;
                }
            } catch (e) { }

            if (allArgs.renderTemplateUrl || allArgs.useMappedRenderTemplate) {
                if (allArgs.renderTemplateUrl) {
                    baseDeliveryUrl = allArgs.renderTemplateUrl;
                    if (location.protocol == 'https:') {
                        baseDeliveryUrl = baseDeliveryUrl.replace(/https?:\/\/cdn\.cxpublic\.com\//gi, this.cdn.template.direct.https);
                    }
                }
                if (allArgs.useMappedRenderTemplate) {
                    if (allArgs.widgetId) {
                        baseDeliveryUrl = this.cdn.template.mapped.http + 'Widget_' + allArgs.widgetId + '.html';
                        if (!this.hasHistory()) {
                            baseDeliveryUrl += '?ref=' + encodeURIComponent(location.href);
                        }
                    } else {
                        var widgetNamespace = baseDeliveryUrl.indexOf('sandbox') > -1 ? 'AdSpaceSandbox' : 'AdSpaceProduction';
                        baseDeliveryUrl = this.cdn.template.mapped.http + widgetNamespace + '_' + adSpaceId + '.html';
                    }
                    if (location.protocol == 'https:') {
                        baseDeliveryUrl = baseDeliveryUrl.replace(/https?:\/\/cdn-templates\.cxpublic\.com\//gi, this.cdn.template.mapped.https);
                    }
                }

                // Always set the ctx param for pages that use templates in an IFrame, because the HTTP referrer header
                // will then not hold the URL to use for the context for content matching. Need to strip the URL
                // fragment here, as the # is not accepted by the restlet framework, even if it is properly URLEncoded.
                if (!allArgs.ctx) {
                    try { params += '&ctx=' + encodeURIComponent(location.href.replace(/#.*$/, '')); } catch (e) { }
                }
            } else if (args.isSlave) {
                baseDeliveryUrl = 'http' + (location.protocol == 'https:' ? 's://s' : '://') + 'cdn.cxense.com/adspace-slave.html';
            } else if (requestObject.widgetId) {
                baseDeliveryUrl = 'http' + (location.protocol == 'https:' ? 's' : '') + '://api.cxense.com/public/widget/data';
            }

            if (!isRenderTemplateRequest && media === 'html' && adSpaceId && allArgs.adUnitWidth && allArgs.adUnitHeight) {
                try { params += '&sz=' + encodeURIComponent('' + allArgs.adUnitWidth + 'x' + allArgs.adUnitHeight); } catch (e) { }
            }
            if (!allArgs.usi) {
                try { params += '&usi=' + encodeURIComponent(persistentUserId); } catch (e) { }
            }
            params += this._getExternalIdsAsUrlParameters();
            try { params += '&rnd=' + Math.round(Math.random() * 2147483647); } catch (e) { }
            if (!allArgs.prnd) {
                try { params += '&prnd=' + this.m_rnd; } catch (e) { }
            }
            // Only set the Timezone if one hasn't been passed from the page
            if (!allArgs.tzo) {
                try { params += '&tzo=' + encodeURIComponent('' + this.getTimezoneOffset()); } catch (e) { }
            }
            // If the caller wants to use hash fragment messaging on IE6+7:
            if (allArgs.uhm) {
                try { if (location.href.length < 1000) { params += '&loc=' + encodeURIComponent(location.href); } } catch (e) { }
            }

            var margins = this.parseMargins(allArgs['lf-am']);

            var initialWidth = typeof allArgs.width !== 'undefined' ? allArgs.width : this.calculateAdSpaceSize(allArgs.initialHorizontalAdUnits, allArgs.adUnitWidth, margins.left, margins.right);
            var initialHeight = typeof allArgs.height !== 'undefined' ? allArgs.height : this.calculateAdSpaceSize(allArgs.initialVerticalAdUnits, allArgs.adUnitHeight, margins.top, margins.bottom);

            var widgetElId = 'cxWidget_' + Math.random();

            if (!allArgs.adSpaceIds) {
                // Store spec data needed for later
                this.m_widgetSpecs[widgetElId] = {
                    adSpaceId: adSpaceId,
                    widgetId: allArgs.widgetId,
                    margins: margins,
                    visible: { maxPercent: 0, prevPercent: 0, timeNone: 0, timePartly: 0, timeHalf: 0, timeFully: 0 },
                    callbacks: [],
                    triggers: [],
                    initialHorizontalAdUnits: allArgs.initialHorizontalAdUnits,
                    initialVerticalAdUnits: allArgs.initialVerticalAdUnits,
                    adUnitWidth: allArgs.adUnitWidth,
                    adUnitHeight: allArgs.adUnitHeight,
                    resizeToContentSize: allArgs.resizeToContentSize,
                    onImpressionResult: allArgs.onImpressionResult
                };
            }

            if (args.adSpaceIds) {

                params += '&synchronous=true';

                var ifr = document.createElement('iframe');
                this.addEventListener(ifr, 'load', args.masterOnLoadHandler);
                ifr.id = args.masterId;
                ifr.name = args.masterId; // Required to work around the WebKitIFrameUrlCache bug!
                ifr.width = 0;
                ifr.height = 0;
                ifr.setAttribute('style', 'display: none;');
                ifr.src = baseDeliveryUrl + params;

                var masterTargetElement;
                if (args.masterTargetElementId) {
                    masterTargetElement = document.getElementById(args.masterTargetElementId);
                } else {
                    // If no element was explicitly defined, look for the implicit target for the first adSpace
                    var masterTargetElement = document.getElementById('insertAdSpaceBeforeThis_' + args.adSpaceIds[0]);
                    if (!masterTargetElement) {
                        masterTargetElement = document.getElementById('scriptForAdSpace_' + args.adSpaceIds[0]);
                    }
                }
                masterTargetElement.appendChild(ifr);

            } else if (media === 'html') {

                try { params += '&parentElementId=' + encodeURIComponent(widgetElId); } catch (e) { }

                var ifr = document.createElement('iframe');
                ifr.id = widgetElId;
                ifr.name = widgetElId; // Required to work around the WebKitIFrameUrlCache bug!
                ifr.width = initialWidth;
                ifr.height = initialHeight;
                ifr.allowTransparency = true;
                if (allArgs.delayImpression === true) {
                    this.m_widgetSpecs[widgetElId].delayImpressionSrc = baseDeliveryUrl + params;
                    // Must set src to avoid security warning on IE6. IE6 also does not allow dynamic write() before added to DOM.
                    this.m_widgetSpecs[widgetElId].src = 'http' + (location.protocol == 'https:' ? 's://s' : '://') + 'cdn.cxense.com/empty.html';
                } else {
                    this.m_widgetSpecs[widgetElId].src = baseDeliveryUrl + params;
                }
                ifr.src = this.m_widgetSpecs[widgetElId].src;

                ifr.setAttribute('style', 'display: block;');
                ifr.setAttribute('scrolling', 'no');
                ifr.frameBorder = '0';

                if (args.appendToElementId) {
                    document.getElementById(args.appendToElementId).appendChild(ifr);
                } else {
                    var targetElementId = args.insertBeforeElementId || args.targetElementId; // Backward compatibility
                    if (!targetElementId) {
                        targetElementId = 'insertAdSpaceBeforeThis_' + adSpaceId;
                    }
                    var targetElement = document.getElementById(targetElementId);
                    if (!targetElement) { // Backward compatibility
                        targetElementId = 'scriptForAdSpace_' + adSpaceId;
                        targetElement = document.getElementById(targetElementId);
                    }
                    targetElement.parentNode.insertBefore(ifr, targetElement);
                }

                this.m_widgetSpecs[widgetElId].element = ifr;

            } else {

                var onGotDataCallback = this.createDelegate(this, function(data) {
                    if (typeof allArgs.renderFunction === 'function') {
                        allArgs.renderFunction(data, allArgs);
                    }
                    if (allArgs.templateElementId) {
                        this.renderTemplate(allArgs.templateElementId, allArgs.targetElementId, data, allArgs);
                    }

                    if (allArgs.parentElementId && allArgs.resizeToContentSize && requestObject.widgetId) {
                        // Measure content width and height, and resize this IFRAME now that content size is known:
                        var bodyEl = document.getElementsByTagName('body')[0];

                        // Add dummy divs to the top and bottom of body to avoid common problems with measuring content size
                        function createDummyDiv() {
                            var dummyDiv = document.createElement('div');
                            dummyDiv.innerHTML = '&nbsp;'; // Avoids vertical collapsing margins
                            dummyDiv.style.clear = 'both'; // Avoids floated layouts getting 0 height
                            dummyDiv.style.width = '0';
                            dummyDiv.style.height = '0';
                            dummyDiv.style.border = '0';
                            dummyDiv.style.margin = '0';
                            dummyDiv.style.padding = '0';
                            dummyDiv.style.outline = '0';
                            dummyDiv.style.overflow = 'hidden';
                            return dummyDiv;
                        }
                        var topDummyDiv = createDummyDiv();
                        var bottomDummyDiv = createDummyDiv();
                        bodyEl.insertBefore(topDummyDiv, bodyEl.firstChild);
                        bodyEl.appendChild(bottomDummyDiv);

                        var currentEl = document.getElementById(allArgs.targetElementId);
                        var contentWidth = bodyEl.clientWidth || bodyEl.offsetWidth;
                        while (currentEl && currentEl !== bodyEl) {
                            contentWidth = currentEl.clientWidth || currentEl.offsetWidth;
                            currentEl = currentEl.offsetParent;
                        }
                        var message = 'method=updateAdSpace' +
                                '&contentWidth=' + contentWidth +
                                '&contentHeight=' + (bodyEl.offsetHeight || bodyEl.clientHeight) +
                                '&elementId=' + encodeURIComponent(allArgs.parentElementId);
                        // It's safe to use '*' as targetOrigin here, because the message content is not secret.
                        this.postMessageToParent(message, '*');

                        bodyEl.removeChild(topDummyDiv);
                        bodyEl.removeChild(bottomDummyDiv);
                    }

                    // Execute callback to custom function if present
                    if (typeof allArgs.onImpressionResult === 'function') {
                        var event = {};
                        if (data && data.searchResult && data.searchResult.spaces && data.searchResult.spaces[0]) {
                            var space = data.searchResult.spaces[0];
                            event.matchedAdCount = space.ads ? space.ads.length : 0;
                            event.isVerticallyOriented = space.isVerticallyOriented;
                        }
                        allArgs.onImpressionResult(event, data, allArgs);
                    }
                });
                params += '&callback={{callback}}';
                if (allArgs.isSlave) {
                    if (document.domain.indexOf('.cxpublic.com') > -1) { document.domain = 'cxpublic.com'; }
                    if (document.domain.indexOf('.ssl.cf2.rackcdn.com') > -1) { document.domain = 'ssl.cf2.rackcdn.com'; }
                    var adResponse = parent.frames[allArgs.masterId].adResponse;

                    // Make a copy of the response data, but only include data for this particular ad space
                    var adResponseCopy = { searchResult: { spaces: [] } };
                    for (var dataName in adResponse.searchResult) {
                        if (adResponse.searchResult.hasOwnProperty(dataName) && dataName !== 'spaces') {
                            adResponseCopy.searchResult[dataName] = adResponse.searchResult[dataName];
                        }
                    }
                    for (var j = 0; j < adResponse.searchResult.spaces.length; j++) {
                        var adSpace = adResponse.searchResult.spaces[j];
                        if (adSpace.id === allArgs.adSpaceId) {
                            adResponseCopy.searchResult.spaces.push(adSpace);
                            break;
                        }
                    }
                    onGotDataCallback(adResponseCopy);
                } else {
                    this.jsonpRequest(baseDeliveryUrl + params, onGotDataCallback, { async: !args.synchronous });
                }

                if (allArgs.targetElementId) {
                    var widgetTargetElement = document.getElementById(allArgs.targetElementId);
                    if (widgetTargetElement) {
                        this.m_widgetSpecs[widgetElId].element = widgetTargetElement;
                    }
                }
            }
        },

        trackElement: function(params) {
            var element = params.element || document.getElementById(params.elementId);
            var elementId = element.id || ('cXElId' + this._randomString());

            if (!this.m_widgetSpecs[elementId]) {
                this.m_widgetSpecs[elementId] = {
                    element: element,
                    widgetElId: elementId,
                    visible: { maxPercent: 0, prevPercent: 0, timeNone: 0, timePartly: 0, timeHalf: 0, timeFully: 0 },
                    callbacks: [],
                    triggers: []
                };
            }
            if (params.callback) {
                this.m_widgetSpecs[elementId].callbacks.push(params.callback);
            }
            if (params.trigger) {
                this.m_widgetSpecs[elementId].triggers.push(params.trigger);
            }
        },

        JSON: {
            stringify: function(item) {
                if (typeof JSON !== 'undefined' && typeof JSON.stringify === 'function') { return JSON.stringify(item); }

                function _stringify(item, depth) {
                    if (depth > 30) throw 'JSON.stringify depth limit reached';
                    if (item === null) return 'null';
                    var str = '';
                    switch (typeof item) {
                        case 'number': str += Number.prototype.toString.call(item); break;
                        case 'boolean': str += Boolean.prototype.toString.call(item); break;
                        case 'string':
                            var escapedStr = item.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\f/g, '\\f').replace(/\u0008/g, '\\b');
                            for (var k = 0; k < 32; k++) {
                                escapedStr = escapedStr.replace(new RegExp(String.fromCharCode(k), 'g'), '\\u00' + (k < 16 ? '0' : '') + k.toString(16));
                            }
                            str += '"' + escapedStr + '"'; break;
                        case 'object':
                            if (cX.library.isArray(item)) {
                                str += '[';
                                for (var i = 0; i < item.length; i++) {
                                    str += ((i !== 0) ? ',' : '') + _stringify(item[i], depth + 1);
                                }
                                str += ']';
                            } else {
                                str += '{';
                                var firstTime = true;
                                for (var prop in item) {
                                    if (item.hasOwnProperty(prop) && typeof item[prop] !== 'undefined') {
                                        str += (firstTime ? '' : ',') + _stringify(prop, depth + 1) + ':' + _stringify(item[prop], depth + 1);
                                        firstTime = false;
                                    }
                                }
                                str += '}';
                            } break;
                    }
                    return str;
                }

                return _stringify(item, 0);
            }
        },

        getElementPosition: function(el) {
            var elementPos = { left: 0, top: 0 };
            if (el.offsetParent) {
                do {
                    elementPos.left += el.offsetLeft;
                    elementPos.top += el.offsetTop;
                } while (el = el.offsetParent);
            }
            return elementPos;
        },

        getWindowSize: function() {
            var windowSize = { width: 0, height: 0 };
            if (typeof(window.innerWidth) == 'number') {
                //Non-IE
                windowSize.width = window.innerWidth;
                windowSize.height = window.innerHeight;
            } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
                //IE 6+ in 'standards compliant mode'
                windowSize.width = document.documentElement.clientWidth;
                windowSize.height = document.documentElement.clientHeight;
            } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
                //IE 4 compatible
                windowSize.width = document.body.clientWidth;
                windowSize.height = document.body.clientHeight;
            }
            return windowSize;
        },

        getDocumentSize: function() {
            var b = document.body || {}, d = document.documentElement || {};
            var width = Math.max(d.clientWidth || 0, b.scrollWidth || 0, d.scrollWidth || 0, b.offsetWidth || 0, d.offsetWidth || 0);
            var height = Math.max(d.clientHeight || 0, b.scrollHeight || 0, d.scrollHeight || 0, b.offsetHeight || 0, d.offsetHeight || 0);
            return { width: width, height: height };
        },

        getScrollPos: function() {
            var scrollPos = { left: 0, top: 0 };
            if (typeof(window.pageYOffset) == 'number') {
                //Netscape compliant
                scrollPos.top = window.pageYOffset;
                scrollPos.left = window.pageXOffset;
            } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                //DOM compliant
                scrollPos.top = document.body.scrollTop;
                scrollPos.left = document.body.scrollLeft;
            } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                //IE6 standards compliant mode
                scrollPos.top = document.documentElement.scrollTop;
                scrollPos.left = document.documentElement.scrollLeft;
            }
            return scrollPos;
        },

        _onHIDEvent: function(event) {
            try {
                this.m_activityState.hadHIDActivity = true;
            } catch (e) {}
            return true;
        },

        _onMouseMoveEvent: function(event) {
            try {
                var event = event || window.event;
                if (event) {
                    // Filter out jitter
                    if ((Math.abs(this.m_activityState.prevScreenX - event.screenX) > 1) ||
                        (Math.abs(this.m_activityState.prevScreenY - event.screenY) > 1)) {
                        this.m_activityState.prevScreenX = event.screenX;
                        this.m_activityState.prevScreenY = event.screenY;
                        this.m_activityState.hadHIDActivity = true;
                    }
                }
            } catch (e) {}
            return true;
        },

        _onClickEvent: function(event) {
            try {
                this.m_activityState.hadHIDActivity = true;

                var event = event || window.event;
                if (event) {
                    var target = event.target || event.srcElement;
                    // Search at most 10 leves up for a "<a href" tag
                    for (var i = 0; (i < 10) && (typeof target !== 'undefined') && (target); i++) {
                        if (target.nodeType === 1 && (target.nodeName === 'a' || target.nodeName === 'A') && typeof target.href === 'string') {
                            this.m_activityState.exitLink = target.href;
                            this._writeAtfr();
                            break;
                        }
                        target = target.parentNode;
                    }
                }
            } catch (e) {}
            return true;
        },

        reportActivity: function() {
            this.m_activityState.hadHIDActivity = true;
        },

        _onPollActivity: function() {
            var hadActivity = false;

            // Check if window has been resized
            try {
                var windowSize = this.getWindowSize();
                if ((this.m_activityState.prevWindowWidth != windowSize.width) ||
                    (this.m_activityState.prevWindowHeight != windowSize.height)) {
                    this.m_activityState.prevWindowWidth = windowSize.width;
                    this.m_activityState.prevWindowHeight = windowSize.height;
                    hadActivity = true;
                }
            } catch (e) {}

            // Check if window has been scrolled
            try {
                var scrollPos = this.getScrollPos();
                if ((this.m_activityState.prevScrollLeft != scrollPos.left) ||
                    (this.m_activityState.prevScrollTop != scrollPos.top)) {
                    this.m_activityState.prevScrollLeft = scrollPos.left;
                    this.m_activityState.prevScrollTop = scrollPos.top;
                    hadActivity = true;
                }
                this.m_activityState.maxViewLeft = Math.max(scrollPos.left + windowSize.width, this.m_activityState.maxViewLeft);
                this.m_activityState.maxViewTop = Math.max(scrollPos.top + windowSize.height, this.m_activityState.maxViewTop);
            } catch (e) {}

            if (hadActivity || this.m_activityState.hadHIDActivity) {
                this.m_activityState.hadHIDActivity = false;

                var now = new Date().getTime();
                var activeTimeDelta = Math.min(30000, now - this.m_activityState.prevActivityTime);
                this.m_activityState.activeTime += activeTimeDelta;
                this.m_activityState.prevActivityTime = now;
                this._writeAtfr();
            }

            // Visibility tracking of widgets
            // We must be the top frame or have information from the top frame before we can track
            if (this.isTopWindow() || this.m_activityState.parentMetrics) {
                var now = new Date().getTime();
                var timeDelta = now - this.m_activityState.prevTime;
                this.m_activityState.prevTime = now;
                for (var widgetElId in this.m_widgetSpecs) {
                    try {
                        if (this.m_widgetSpecs.hasOwnProperty(widgetElId)) {
                            var widgetSpec = this.m_widgetSpecs[widgetElId];
                            if (widgetSpec && widgetSpec.hasOwnProperty('element') && widgetSpec.element) {
                                // Calculate the overlap of the current view and the widget
                                var widgetEl = widgetSpec.element;
                                var widgetPos = this.getElementPosition(widgetEl);
                                var widgetSize = { width: widgetEl.offsetWidth, height: widgetEl.offsetHeight };

                                var overlapLeft = Math.max(widgetPos.left, scrollPos.left);
                                var overlapRight = Math.min(widgetPos.left + widgetSize.width, scrollPos.left + windowSize.width);
                                var overlapTop = Math.max(widgetPos.top, scrollPos.top);
                                var overlapBottom = Math.min(widgetPos.top + widgetSize.height, scrollPos.top + windowSize.height);

                                // Limit by parent visible viewport if this is not the top window
                                var parentMetrics = this.m_activityState.parentMetrics;
                                if (parentMetrics) {
                                    // Calculate the intersection of the parent visible rectangle and the child visible rectangle
                                    overlapLeft = Math.max(parentMetrics.overlapPos.left + scrollPos.left, overlapLeft);
                                    overlapRight = Math.min(parentMetrics.overlapPos.left + parentMetrics.overlapSize.width + scrollPos.left, overlapRight);
                                    overlapTop = Math.max(parentMetrics.overlapPos.top + scrollPos.top, overlapTop);
                                    overlapBottom = Math.min(parentMetrics.overlapPos.top + parentMetrics.overlapSize.height + scrollPos.top, overlapBottom);
                                }

                                var overlapWidth = Math.max(overlapRight - overlapLeft, 0);
                                var overlapHeight = Math.max(overlapBottom - overlapTop, 0);
                                var visiblePercent = Math.round((overlapWidth * overlapHeight) / (widgetSize.width * widgetSize.height) * 100);

                                // Increment time for the various degrees of visibility
                                if (visiblePercent === 100 && widgetSpec.visible.prevPercent === 100) {
                                    widgetSpec.visible.timeFully += timeDelta;
                                }
                                if (visiblePercent >= 50 && widgetSpec.visible.prevPercent >= 50) {
                                    widgetSpec.visible.timeHalf += timeDelta;
                                }
                                if (visiblePercent > 0 && widgetSpec.visible.prevPercent > 0) {
                                    widgetSpec.visible.timePartly += timeDelta;
                                } else {
                                    widgetSpec.visible.timeNone += timeDelta;
                                }

                                // Fire triggers and update the max visible percentage seen
                                if (visiblePercent > widgetSpec.visible.maxPercent) {

                                    // Trigger1: log("Visible for the first time!");
                                    if (widgetSpec.visible.maxPercent === 0) {
                                        try {
                                            if (typeof widgetSpec.delayImpressionSrc === 'string') {
                                                widgetSpec.src = widgetSpec.delayImpressionSrc;
                                                widgetEl.src = widgetSpec.src;
                                            }
                                        } catch (e) { }
                                    }
                                    // Trigger2: if (visiblePercent === 100) log("Fully visible for the first time!");
                                    widgetSpec.visible.maxPercent = visiblePercent;
                                }

                                if (widgetSpec.callbacks.length > 0 || widgetSpec.triggers.length > 0) {
                                    var state = {
                                        visibility: {
                                            percent: visiblePercent,
                                            previousPercent: widgetSpec.visible.prevPercent,
                                            maxPercent: widgetSpec.visible.maxPercent,
                                            timeNone: widgetSpec.visible.timeNone / 1000,
                                            timeSome: widgetSpec.visible.timePartly / 1000,
                                            timeHalf: widgetSpec.visible.timeHalf / 1000,
                                            timeFull: widgetSpec.visible.timeFully / 1000
                                        }
                                    };
                                    for (var j = 0; j < widgetSpec.callbacks.length; j++) {
                                        try { widgetSpec.callbacks[j](state); } catch (e) { }
                                    }
                                    for (var k = 0; k < widgetSpec.triggers.length; k++) {
                                        var trigger = widgetSpec.triggers[k];
                                        try {
                                            if (trigger.on(state)) {
                                                if (trigger.callback) { try { trigger.callback(state); } catch (e) { } }
                                                if (trigger.imageUrl) { new Image().src = trigger.imageUrl; }
                                                widgetSpec.triggers.splice(k, 1); // Remove fired trigger
                                                k--;
                                            }
                                        } catch (e) { }
                                    }
                                }

                                widgetSpec.visible.prevPercent = visiblePercent;

                                // Child iframes must get parent frame metrics to do proper visibility tracking
                                if ((typeof widgetEl.nodeName === 'string') && (widgetEl.nodeName.toUpperCase() === 'IFRAME')) {
                                    var documentSize = this.m_documentSizeRequestedFromChild ? this.getDocumentSize() : { width: -1, height: -1 };
                                    var metrics = [now,
                                        scrollPos.left, scrollPos.top, windowSize.width, windowSize.height,
                                        widgetPos.left, widgetPos.top, widgetSize.width, widgetSize.height,
                                        overlapLeft - widgetPos.left, overlapTop - widgetPos.top, overlapWidth, overlapHeight,
                                        documentSize.width, documentSize.height];
                                    for (var i = 0; i < metrics.length; i++) {
                                        metrics[i] = Math.round(metrics[i]); // Shorten to int to make message shorter
                                    }
                                    var message = 'method=updateParentMetrics&parentMetrics=' + metrics.join(',');
                                    if (this.isTopWindow()) {
                                        this._sendMessageToChild(widgetEl, widgetSpec.src, message, '*'); // It's safe to use '*' as target origin here, because the message content is not secret.
                                    }
                                }
                            }
                        }
                    } catch (e) { }
                }
                this._writeAtfr();
            }
        },

        _onPollFragmentMessage: function() {
            // For older browsers lacking postMessage (IE6, IE7, etc) we pass the message in the hash fragment
            // hashChange event support is less than postMessage, so we need to poll the hash
            if (location.hash !== this.m_prevLocationHash) {
                var hashArgs = this.parseHashArgs();
                try {
                    if (typeof hashArgs.cXPostMsg !== 'undefined') {
                        this._handlePostMessage({origin: '', data: hashArgs.cXPostMsg});
                        if (this.isTopWindow()) {
                            var newHash = this.m_prevLocationHash.replace(/^#/, '');
                            if (newHash === '') {
                                newHash = '!'; // Set a dummy value to avoid scrolling to the top of the page
                            }
                            location.hash = newHash;
                        }
                    }
                } catch (e) { }
                this.m_prevLocationHash = location.hash; // Update the prev hash value
            }
        },

        _writeAtfr: function() {
            if (this.hasLocalStorage() && this.m_activityState.activeTime > 0) {
                var atfr = '';
                atfr += '&altm=' + this.m_scriptStartTime;
                atfr += '&arnd=' + this.m_rnd;
                atfr += '&aatm=' + Math.round(this.m_activityState.activeTime / 1000);
                atfr += '&axtl=' + encodeURIComponent(this.m_activityState.exitLink);

                var windowSize = this.getWindowSize();
                atfr += '&awsz=' + encodeURIComponent('' + windowSize.width + 'x' + windowSize.height);
                atfr += '&amvw=' + encodeURIComponent('' + this.m_activityState.maxViewLeft + 'x' + this.m_activityState.maxViewTop);

                var ids = '';
                var sizes = '';
                var times = '';
                var positions = '';
                var visibility = '';
                var widgetIndex = 0;
                for (var widgetElId in this.m_widgetSpecs) {
                    var widgetSpec = this.m_widgetSpecs[widgetElId];
                    if (widgetSpec && widgetSpec.element && (typeof widgetSpec.adSpaceId === 'string' || typeof widgetSpec.widgetId === 'string')) {
                        var widgetId = widgetSpec.adSpaceId || widgetSpec.widgetId;
                        var position = this.getElementPosition(widgetSpec.element);
                        ids += (widgetIndex == 0 ? '&aaid=' : ',') + encodeURIComponent(widgetId);
                        visibility += (widgetIndex == 0 ? '&aavp=' : ',') + encodeURIComponent('' + widgetSpec.visible.maxPercent);
                        positions += (widgetIndex == 0 ? '&aaps=' : ',') + encodeURIComponent('' + position.left + 'x' + position.top);
                        sizes += (widgetIndex == 0 ? '&aasz=' : ',') + encodeURIComponent('' + widgetSpec.element.offsetWidth + 'x' + widgetSpec.element.offsetHeight);
                        times += (widgetIndex == 0 ? '&aavt=' : ',') + encodeURIComponent('' + Math.round(widgetSpec.visible.timePartly / 1000) + 'x' + Math.round(widgetSpec.visible.timeFully / 1000));
                        widgetIndex++;
                        if (widgetIndex > 10) {
                            break;
                        }
                    }
                }
                atfr += ids + visibility + times + sizes + positions;

                localStorage.setItem('_cX_atfr', atfr);
            }
        },

        _logRemote: function(parameters) {
            try {
                var key, logUrl = 'http' + (location.protocol == 'https:' ? 's' : '') + '://difgeaod9qv82.cloudfront.net/log.gif?';
                for (key in parameters) {
                    if (parameters.hasOwnProperty(key)) {
                        logUrl += encodeURIComponent(key) + '=' + encodeURIComponent(parameters[key]) + '&';
                    }
                }
                new Image().src = logUrl + 'rnd=' + Math.random();
            } catch (e) {}
        },

        sync: function() {
            cX.Array.forEach(arguments, function(provider) {
                switch (provider) {
                    case 'xl8': new Image().src = 'http' + (location.protocol === 'https:' ? 's' : '') + '://loadm.exelator.com/load/?p=204&g=820&j=0'; break;
                }
            });
        },

        invoke: function(func) {
            func.apply(window, Array.prototype.slice.call(arguments, 1));
        },

        _registerEventListeners: function() {
            this.addEventListener(window, 'message', this.createDelegate(this, this._handlePostMessage));
            this.addEventListener(document, 'keypress', this.createDelegate(this, this._onHIDEvent));
            this.addEventListener(document, 'keydown', this.createDelegate(this, this._onHIDEvent));
            this.addEventListener(document, 'keyup', this.createDelegate(this, this._onHIDEvent));
            this.addEventListener(document, 'mousedown', this.createDelegate(this, this._onClickEvent));
            this.addEventListener(document, 'mouseup', this.createDelegate(this, this._onClickEvent));
            // this.addEventListener(document, 'click', this.createDelegate(this, this._onClickEvent));
            this.addEventListener(document, 'mousemove', this.createDelegate(this, this._onMouseMoveEvent));
        }
    };

    cX.library.initializePage();

    function cx_callQueueExecute() {
        try {
            var currCall = null;
            while (currCall = cX.callQueue.shift()) {
                try {
                    var fnName = currCall[0];
                    var fnArgs = currCall.slice(1);
                    cX.library[fnName].apply(cX.library, fnArgs);
                } catch (e) {}
            }
        } catch (e) {}
    }

    setTimeout(cx_callQueueExecute, 25);

    cX.callQueue.push = function() {
        Array.prototype.push.apply(this, arguments);
        setTimeout(cx_callQueueExecute, 1);
        return this.length;
    };

    function cx_pollActivity() {
        try {
            cX.library._onPollActivity();
        } catch (e) {}
        setTimeout(cx_pollActivity, 500);
    }
    setTimeout(cx_pollActivity, 200);
    cX.library._registerEventListeners();

    function cx_pollFragmentMessage() {
        try {
            cX.library._onPollFragmentMessage();
        } catch (e) {}
        setTimeout(cx_pollFragmentMessage, 250);
    }
    if (!cX.library.hasPostMessage()) {
        setTimeout(cx_pollFragmentMessage, 200);
    }

    (function() {
        for (var propName in cX.library) {
            if (cX.library.hasOwnProperty(propName)) {
                var prop = cX.library[propName];
                if (typeof prop === 'function' && propName.indexOf('_') !== 0) {
                    cX[propName] = cX.library.createDelegate(cX.library, prop);
                }
            }
        }
        cX.JSON = cX.library.JSON;
        cX.Array = cX.library.Array;
        cX.Object = cX.library.Object;

        if (cX.library._isTemplateCdnUrl(location.href) && cX.hasHistory() &&
            (('' + location.href).indexOf('widgetId') > -1 || ('' + location.href).indexOf('asId=') < 0)) {
            var urlArgs = cX.parseUrlArgs();
            urlArgs.ref = document.referrer;
            var newLocation = location.href.replace(/[?#].*$/, '') +
                '?' + cX.library._encodeUrlEncodedNameValuePairs(urlArgs) +
                '#' + cX.library._encodeUrlEncodedNameValuePairs(cX.parseHashArgs());
            history.replaceState(0, '', newLocation);
        }
    })();
}
} catch (e) {}
