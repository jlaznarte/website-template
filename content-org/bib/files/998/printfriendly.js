var PF_VERSION = "2018-01-15-064654076", data = document.getElementById("printfriendly-data");

if (data) {
  var pfData = JSON.parse(data.getAttribute("data"));
  pfstyle = pfData.pfstyle, pfOptions = pfData.pfOptions;
}

var pfMod = window.pfMod || function(t, e) {
  var i = t.document, n = "https:", o = {
    environment: "production",
    disableUI: !1,
    protocol: "https:",
    dir: "ltr",
    usingBM: !1,
    maxImageWidth: 750,
    filePath: "/assets/versions/",
    platform: "unknown",
    hosts: {
      cdn: "https://cdn.printfriendly.com",
      pf: "https://www.printfriendly.com",
      ds: "https://www.printfriendly.com",
      translations: "https://www.printfriendly.com",
      ds_cdn: "https://ds-4047.kxcdn.com",
      pdf: "https://pdf.printfriendly.com",
      email: "https://www.printfriendly.com",
      page: t.location.host.split(":")[0]
    },
    domains: {
      page: t.location.host.split(":")[0].split("www.").pop()
    }
  }, r = {
    removeEmailsFromUrl: function(t) {
      for (var e = (t = t.split("?")[0]).split("/"), i = e.length; i-- > 0; ) -1 !== e[i].indexOf("@") && e.splice(i, 1);
      return e.join("/");
    },
    isDynamicPage: function() {
      return !!(t.React || t.angular || t.ng && t.ng.coreTokens || t.Backbone || t.Ember || t.Vue || document.querySelector && (document.querySelector("[ng-version]") || document.querySelector("*[data-reactroot]")));
    },
    isLocalHost: function() {
      var e = t.location.host, i = t.location.hostname;
      return -1 !== e.indexOf(":") || !!i.match(/\d+\.\d+\.\d+\.\d+/) || "localhost" === i || !!i.split(".").pop().match(/invalid|test|example|localhost|dev/);
    }
  }, a = {
    isReady: !1,
    readyBound: !1,
    ready: function() {
      if (!a.isReady) {
        if (!document.body) return setTimeout(a.ready, 13);
        a.isReady = !0, a.readyFunc.call();
      }
    },
    doScrollCheck: function() {
      if (!a.isReady) {
        try {
          document.documentElement.doScroll("left");
        } catch (t) {
          return setTimeout(a.doScrollCheck, 50);
        }
        a.detach(), a.ready();
      }
    },
    detach: function() {
      document.addEventListener ? (document.removeEventListener("DOMContentLoaded", a.completed, !1), 
      t.removeEventListener("load", a.completed, !1)) : document.attachEvent && "complete" === document.readyState && (document.detachEvent("onreadystatechange", a.completed), 
      t.detachEvent("onload", a.completed));
    },
    completed: function(t) {
      (document.addEventListener || "load" === t.type || "complete" === document.readyState) && (a.detach(), 
      a.ready());
    },
    bindReady: function() {
      if (!a.readyBound) {
        if (a.readyBound = !0, "complete" === document.readyState) return a.ready();
        if (document.addEventListener) document.addEventListener("DOMContentLoaded", a.completed, !1), 
        t.addEventListener("load", a.completed, !1); else if (document.attachEvent) {
          document.attachEvent("onreadystatechange", a.completed), t.attachEvent("onload", a.completed);
          var e = !1;
          try {
            e = null == t.frameElement && document.documentElement;
          } catch (t) {}
          e && e.doScroll && a.doScrollCheck();
        }
      }
    },
    domReady: function(t) {
      this.readyFunc = t, this.bindReady();
    },
    canonicalize: function(t) {
      if (t) {
        var e = document.createElement("div");
        return e.innerHTML = "<a></a>", e.firstChild.href = t, e.innerHTML = e.innerHTML, 
        e.firstChild.href;
      }
      return t;
    }
  }, s = {
    headerImageUrl: a.canonicalize(t.pfHeaderImgUrl),
    headerTagline: t.pfHeaderTagline,
    imageDisplayStyle: t.pfImageDisplayStyle,
    customCSSURL: a.canonicalize(t.pfCustomCSS),
    disableClickToDel: t.pfdisableClickToDel,
    disablePDF: t.pfDisablePDF,
    disablePrint: t.pfDisablePrint,
    disableEmail: t.pfDisableEmail
  };
  -1 !== "|full-size|remove-images|large|medium|small|".indexOf(t.pfImagesSize) ? s.imagesSize = t.pfImagesSize : s.imagesSize = 1 == t.pfHideImages ? "remove-images" : "full-size";
  var c = {
    version: PF_VERSION,
    initialized: !1,
    finished: !1,
    onServer: !1,
    hasContent: !1,
    messages: [],
    errors: [],
    waitDsCounter: 0,
    autoStart: !1,
    stats: {},
    init: function(e) {
      try {
        this.initialized = !0, this.configure(e), this.onServerSetup(), c.onServer || this.getAdSettingsFromPFServer(), 
        this.setVariables(), this.detectBrowser(), this.startIfNecessary(), t.print = this.start;
      } catch (t) {
        d.log(t);
      }
    },
    configure: function(e) {
      if (this.config = o, e) {
        this.config.environment = e.environment || "development";
        for (var i in e.hosts) this.config.hosts[i] = e.hosts[i];
        e.filePath && (this.config.filePath = e.filePath), e.ssLocation && (this.config.ssLocation = e.ssLocation), 
        e.ssStyleSheetHrefs && (this.config.ssStyleSheetHrefs = e.ssStyleSheetHrefs);
      }
      this.userOptions = {
        redirect: {
          disableForiPad: !!this.getVal(t.pfUserOptions, "redirect.disableForiPad")
        }
      };
    },
    getVal: function(t, e) {
      for (var i = e.split("."); void 0 !== t && i.length; ) t = t[i.shift()];
      return t;
    },
    startIfNecessary: function() {
      (t.pfstyle || this.autoStart) && this.start();
    },
    urlHasAutoStartParams: function() {
      return -1 !== this.config.urls.page.indexOf("pfstyle=wp");
    },
    start: function() {
      if (this.waitDsCounter += 1, this.autoStart && this.waitDsCounter < 20 && !c.dsData) return setTimeout(function() {
        c.start();
      }, 100);
      c.isRedirectNecessary() ? c.redirect() : c.supportedSiteType() && a.domReady(function() {
        try {
          c.startTime = new Date().getTime(), c.sanitizeLocation(), c.config.disableUI || c.createMask(), 
          c.loadCore();
        } catch (t) {
          d.log(t);
        }
      });
    },
    sanitizeLocation: function() {
      url = document.location.href.split("?")[0], url = r.removeEmailsFromUrl(url), url !== document.location.href && (history && "function" == typeof history.pushState ? history.pushState({
        pf: "sanitized"
      }, document.title, url) : c.urlHasPII = !0);
    },
    unsanitizeLocation: function() {
      history && history.state && "sanitized" == history.state.pf && history.back();
    },
    onServerSetup: function() {
      t.onServer && (this.onServer = !0, this.config.disableUI = !0);
    },
    setVariables: function() {
      var e = this, i, n = "";
      "production" !== this.config.environment && (n = "?_=" + Math.random());
      var o = e.config.hosts.cdn + e.config.filePath + e.version, r = this.config.disableUI ? "" : o + "/pf-app/main.css" + n, a = this.config.disableUI ? "" : o + "/content/main.css" + n;
      this.config.urls = {
        version: o,
        js: {
          jquery: "https://cdn.printfriendly.com/assets/unversioned/jquery/1.12.4.min.js",
          core: o + "/core.js" + n,
          algo: o + "/algo.js" + n
        },
        css: {
          pfApp: r,
          content: a
        },
        pdfMake: e.config.hosts.pdf + "/pdfs/make",
        email: e.config.hosts.email + "/email/new"
      };
      try {
        i = top.location.href;
      } catch (e) {
        i = t.location.href;
      }
      this.config.urls.page = i, this.userSettings = s, !t.pfstyle || "bk" !== t.pfstyle && "nbk" !== t.pfstyle && "cbk" !== t.pfstyle || (this.config.usingBM = !0), 
      this.autoStart = this.urlHasAutoStartParams();
    },
    detectBrowser: function() {
      this.browser = {};
      var t = navigator.appVersion;
      t && -1 !== t.indexOf("MSIE") ? (this.browser.version = parseFloat(t.split("MSIE")[1]), 
      this.browser.isIE = !0) : this.browser.isIE = !1;
    },
    loadScript: function(t, e) {
      var i = document.getElementsByTagName("head")[0], n = document.createElement("script");
      n.type = "text/javascript", n.src = t, n.onreadystatechange = e, n.onload = e, i.appendChild(n);
    },
    createIframe: function(t) {
      var e = t.createElement("iframe");
      return e.src = "javascript:false", e.frameBorder = "0", e.allowTransparency = "true", 
      e;
    },
    loadHtmlInIframe: function(t, e, i) {
      var n, o;
      try {
        o = e.contentWindow.document;
      } catch (i) {
        n = t.domain, e.src = "javascript:var d=document.open();d.domain='" + n + "';void(0);", 
        o = e.contentWindow.document;
      }
      o.write(i), o.close();
    },
    redirect: function() {
      var t = [ "source=cs", "url=" + encodeURIComponent(top.location.href) ], e;
      for (var i in s) void 0 !== s[i] && t.push(i + "=" + encodeURIComponent(s[i]));
      e = this.config.hosts.pf + "/print/?" + t.join("&"), this.autoStart ? top.location.replace(e) : top.location.href = e;
    },
    supportedSiteType: function() {
      return "about:blank" !== c.config.urls.page && ("http:" === c.config.protocol || "https:" === c.config.protocol);
    },
    isRedirectNecessary: function() {
      var e = t.pfstyle && "wp" != t.pfstyle, i = r.isDynamicPage(), n = r.isLocalHost();
      if (c.stats.page = {
        bm: e,
        dynamic: i,
        local: n
      }, c.dsData) {
        var o = c.dsData.domain_settings.ad_free, a = c.dsData.domain_settings.redirect, s = "2" === t.pfBtVersion;
        if (!e && !o && (s || a) && !i && !n) return !0;
      }
      try {
        var l = navigator.userAgent.match(/Edge\/(\d+.\d+)/);
        return !!(!history || "function" != typeof history.pushState || navigator.userAgent.match(/(ipod|opera.mini|blackberry|playbook|bb10)/i) || this.browser.isIE && this.browser.version < 11 || this.browser.isIE && t.adsbygoogle || "undefined" != typeof $ && $.jcarousel && this.browser.isIE || l && 2 === l.length && parseFloat(l[1]) < 13.10586);
      } catch (t) {
        return d.log(t), !1;
      }
    },
    createMask: function() {
      var t = document.createElement("div");
      t.innerHTML = '<div id="pf-mask" style="z-index: 2147483627!important; position: fixed !important; top: 0pt !important; left: 0pt !important; background-color: rgb(0, 0, 0) !important; opacity: 0.8 !important;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=80); height: 100% !important; width: 100% !important;"></div>', 
      document.body.appendChild(t.firstChild);
    },
    closePreview: function() {
      a.readyBound = !1, a.isReady = !1, c.unsanitizeLocation();
      var t = document.getElementById("pf-core");
      t.parentElement.removeChild(t);
      var e = document.getElementById("pf-mask");
      e.parentElement.removeChild(e);
      var i = document.getElementById("gaiframe");
      i && i.parentElement.removeChild(i);
    },
    removeDoubleSemiColon: function(t) {
      return t.replace(/;{2}/g, ";");
    },
    loadCore: function() {
      var t = '<!DOCTYPE html><html><head><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1"><script src="' + this.config.urls.js.jquery + '"><\/script><script src="' + this.config.urls.js.core + '"><\/script><link media="screen" type="text/css" rel="stylesheet" href="' + this.config.urls.css.pfApp + '"></head><body class="cs-core-iframe pf-app-container" onload="core.init();"></body>', e = this.createIframe(document);
      e.id = "pf-core", e.name = "pf-core", document.body.appendChild(e);
      var i = e.style.cssText + ";width: 100% !important;max-width:100% !important;height: 100% !important; display: block !important; overflow: hidden !important; position: absolute !important; top: 0px !important; left: 0px !important; background-color: transparent !important; z-index: 2147483647!important";
      e.style.cssText = this.removeDoubleSemiColon(i), this.loadHtmlInIframe(document, e, t);
    },
    getAdSettingsFromPFServer: function() {
      var t = document.createElement("script");
      t.src = c.config.hosts.ds_cdn + "/api/v3/domain_settings/a?callback=pfMod.saveAdSettings&hostname=" + c.config.hosts.page + "&client_version=" + c.version, 
      document.getElementsByTagName("head")[0].appendChild(t);
    },
    saveAdSettings: function(t) {
      c.dsData = t, c.configureAdSettings && c.configureAdSettings();
    }
  }, d = {
    _window: t.top,
    _doc: t.top.document,
    installInitiated: !1,
    validFile: /d3nekkt1lmmhms|printfriendly\.com|printnicer\.com|algo\.js|printfriendly\.js|core\.js/,
    setVars: function() {
      this._window.frames["pf-core"] && this._window.frames["pf-core"].document && (this._window = this._window.frames["pf-core"], 
      this._doc = this._window.document);
    },
    install: function() {
      if (this.installInitiated) return !0;
      this.installInitiated = !0, this.setVars();
      var t = this._doc.createElement("script"), e = this._doc.getElementsByTagName("script")[0];
      t.src = "//cdn.ravenjs.com/3.2.0/raven.min.js", e.parentNode.appendChild(t), this.wait();
    },
    wait: function() {
      if (!this._window.Raven) return setTimeout(function() {
        d.wait();
      }, 100);
      this.configure(), this.pushExistingErrors();
    },
    configure: function() {
      var t = "https://5463b49718cd4266911eab9e5c0e114d@app.getsentry.com/22091", e = {
        dataCallback: function(t) {
          var e, i;
          try {
            (e = t.stacktrace.frames[0]).filename.match(d.validFile) && "onload" !== e.function || t.stacktrace.frames.shift();
          } catch (t) {}
          return t;
        },
        shouldSendCallback: function(t) {
          return !!(t && t.extra && t.extra.file);
        },
        release: c.version
      };
      this._window.Raven.config(t, e).install();
    },
    sendError: function(t, e) {
      (e = void 0 !== e ? {
        file: e.file
      } : {
        file: "printfriendly.js"
      }).usingBM = c.config.usingBM, e.url = c.config.urls.page, "production" === c.config.environment && this._window.Raven.captureException(t, {
        extra: e
      });
    },
    pushExistingErrors: function() {
      for (var t = 0; t < c.errors.length; t++) this.sendError(c.errors[t].err, c.errors[t].opts);
    },
    log: function(t, e) {
      "development" === c.config.environment && console.error(t), c.finished = !0, e = e || {
        file: "printfriendly.js"
      };
      try {
        this._window.Raven ? this.sendError(t, e) : (c.errors.push({
          err: t,
          opts: e
        }), this.install(), c.messages.push(t.name + " : " + t.message), c.messages.push(t.stack));
      } catch (t) {}
    }
  };
  return c.exTracker = d, c;
}(window), priFri = pfMod;

pfMod.initialized && data ? pfMod.start() : "algo" === window.name || "pf-core" === window.name || pfMod.initialized || pfMod.init(window.pfOptions);