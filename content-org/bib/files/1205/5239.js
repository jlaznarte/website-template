(function(w, d, t) {
    function supportAjaxUploadWithProgress(win, doc) {
        function supportFileAPI(doc) {
            var fi = doc.createElement('INPUT');
            fi.type = 'file';
            return 'files' in fi;
        }

        function supportAjaxUploadProgressEvents() {
            var xhr = new XMLHttpRequest();
            return !! (xhr && ('upload' in xhr) && ('onprogress' in xhr.upload));
        }

        function supportFormData(win) {
            return !! win.FormData;
        }

        try {
            return supportFileAPI(doc) && supportAjaxUploadProgressEvents() && supportFormData(win);
        } catch (e) {
            return false;
        }
    }

    var hasLoaded = false;
    var nativeJSON = (typeof w.JSON === 'object' && (typeof w.JSON.parse === 'function') && (typeof w.JSON.stringify === 'function')) ? '1' : '0';
    var needsPostMessage = (!supportAjaxUploadWithProgress(w, d)) ? '1' : '0';
    function l() { if (hasLoaded) { return; } hasLoaded = true; var g = d.createElement(t);g.type = 'text/javascript';g.async = true;g.src = 'https://embed.doorbell.io/button/5239/1552998471/init';g.src += "?native_json="+nativeJSON+"&needs_postmessage="+needsPostMessage;g.src += "&referrer=" + encodeURIComponent(window.location.href);(d.getElementsByTagName('head')[0]||d.getElementsByTagName('body')[0]).appendChild(g); }
    if (w.doorbellOptions.windowLoaded) {
        l();
    } else {
        if (w.attachEvent) { w.attachEvent('onload', l); } else if (w.addEventListener) { w.addEventListener('load', l, false); } else { l(); }
        if (d.readyState == 'complete') { l(); }
    }
}(window, document, 'script'));