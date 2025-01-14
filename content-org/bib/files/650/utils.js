$.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());
if ($.browser.chrome) {
  $.browser.safari = false
}

function Utils() {
  return this;
}

/**
 * Small function in Jquery PROTO for getting outerHTML of element
 * @param s
 * @return {*}
 */
jQuery.fn.outerHTML = function(s) {
  return s
      ? this.before(s).remove()
      : jQuery("<p>").append(this.eq(0).clone()).html();
}

//help determine caps-look
jQuery.fn.caps = function(cb) {
  return this.keypress(function(e) {
    var w = e.which ? e.which : (e.keyCode ? e.keyCode : -1);
    var s = e.shiftKey ? e.shiftKey : (e.modifiers ? !!(e.modifiers & 4) : false);
    var c = (((w >= 65 && w <= 90) || (w >= 1040 && w <= 1071)) && !s) || ((w >= 97 && w <= 122) && s);

    cb.call(this, c);
  });
};

/**
 * Add end with method into string proto
 */
if (typeof String.prototype.endsWith !== 'function') {
  String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };
}

Utils.indexOf = function(arr, obj, start) {
  for (var i = (start || 0), j = arr.length; i < j; i++) {
    if (arr[i] === obj) { return i; }
  }
  return -1;
}

/**
 * Why we need it??
 * Cause in Internet Explorer when we do eighter event.stopPropogation or return false in mouseup event
 * it will not stop click event, like in other browsers. So, i'm add additional method preventClick into Jquery Event Prototype.
 *
 * Be aware, that method will not stop clicks binded handly(not  trought jquer)
 *
 * @param eventConstructor
 * @return {Function} - wrapped constructor
 */
Utils.preventClickEventDecorator = function(eventConstructor){
  var preventClick = false;

  function wrappedEvent(){

    //let add initialization by call, not just by constructor (it realized in Jquery)
    var res = eventConstructor.apply(this, arguments);

    //when it is "NEW" call, we will add check and put method into proto
    if (this.preventDefault){
      if(preventClick && this.type=="click"){

        //Let stop click event!
        this.stopImmediatePropagation();
        this.stopPropagation()
        this.preventDefault()
        this.exclusive = true;
        this.namespace_re = /SOME_KIND_OF_NOT_EXISTING_NAMESPACE/;
      }

      this.preventClick = function(){
        preventClick =  true;
        setTimeout(function(){
          preventClick =  false;
        },1000)
      }
      return this
    }

    return res;
  }

  //JUST SAVE PROTO!!
  wrappedEvent.prototype = eventConstructor.prototype;

  return wrappedEvent;
}

if($.browser.msie){
  $.Event = Utils.preventClickEventDecorator($.Event);
} else {
  $.Event.prototype.preventClick = function(){};
}


Utils.isHtml5UploadSupport = !!('multiple' in document.createElement('input'));

Utils.checkMultiupload = function(){
  //safari have issues with getting files size for multiselect
  //opera now on form upload
  return $.browser.safari || $.browser.opera || !('multiple' in document.createElement('input')) || !UploadModule.FileSupported() || !UploadModule.XhrUploadSupported()
}

Utils.isFunctionExists = function(functionName) {
  return (eval('typeof ' + functionName) == 'function');
}

Utils.fixEventCoords = function(e) {
  // Calculate pageX/Y if missing and clientX/Y available
  // note: IE seems to be the only one that needs this because
  //       jQuery will add it for others. Don't know why not
  //       for IE.
  if (e.pageX == null && e.clientX != null) {
    var e = document.documentElement, b = document.body
    e.pageX = e.clientX + (e && e.scrollLeft || b.scrollLeft || 0)
    e.pageY = e.clientY + (e && e.scrollTop || b.scrollTop || 0)
  }

  return e
}

Utils.getFlashVersion = function() {
  var version;

  try {
    version = navigator.plugins['Shockwave Flash'];
    version = version.description;
  } catch (e1) {
    try {
      version = new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version');
    } catch (e2) {
      version = '0.0';
    }
  }

  version = version.match(/\d+/g);

  return parseFloat(version[0] + '.' + version[1]);
}

Utils.getCpuArch = function() {
  try {
    var cpu = window.navigator.oscpu
    if (!cpu)
      cpu = window.navigator.cpuClass

    return cpu.indexOf('64') > 0 ? 64 : 32
  } catch (err) {
    return 64
  }
}

Utils.getSelection = function() {
  if (window.getSelection) {
    return window.getSelection().toString()
  } else if(document.getSelection) {
    return document.getSelection()
  } else if(document.selection) {
    return document.selection.createRange().text
  }
}

Utils.validateUrl = function(url) {
  return (/^([a-z0-9]([a-z]|\d|\+|-|\.)*):?(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url))
}

Utils.extractDomain = function(url){
  return url.replace('http://','').replace('https://','').split(/[/?#]/)[0];
}

Utils.validateDomain = function(domain){
  return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(domain);
}

Utils.toShortString = function(str, limit) {
  return str.length <= limit ? str : (str.substring(0, limit) + '...')
}

Utils.indexOf = function(arr, obj) {
  if (arr.indexOf) {
    return arr.indexOf(obj)
  }

  for(var i = 0; i < arr.length; i++) {
    if (arr[i] == obj) {
      return i
    }
  }

  return -1
}

Utils.copyToClipboard = function(meintext) {
  if (window.clipboardData)
    window.clipboardData.setData("Text", meintext)
  else if (window.netscape) {
    netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect')

    var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard)
    if (!clip)
      return false

    var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable)
    if (!trans)
      return false

    trans.addDataFlavor('text/unicode')
    var str = new Object()
    var len = new Object()
    var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString)
    str.data = meintext
    trans.setTransferData("text/unicode", str, meintext.length * 2)
    var clipid = Components.interfaces.nsIClipboard
    if (!clipid)
      return false;

    clip.setData(trans, null, clipid.kGlobalClipboard)
  }
  return false;
}

Utils.getSearchNameCharFilter = function(string){
  return typeof(string) != 'string' ? string : $.trim(string.replace(/\\/g, '').replace(/\//g, '').replace(/%/g, ''))
}

Utils.getSearchName = function(string) {
  if (typeof(string) != 'string') return string
  string = Utils.getSearchNameCharFilter(string)
  return encodeURIComponent(getSearchNameForSeo(string)).replace(/%2B/g, '+')

  function getSearchNameForSeo(string) {
    if (!Config.isReplaceSearchNameForSeo) return string
    var arr = string.split("")
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == " ") arr[i] = "-"
      else if (arr[i] == "+") arr[i] = "-"
      else if (arr[i] == "-") arr[i] = "+"
    }
    return arr.join("")
  }
}

Utils.convertToPlainArray = function(arrObj){
  if(arrObj.length != undefined){
    if(arrObj == Array)
      return arrObj;
    else{
      var res = [];
      for(var i=0; i<arrObj.length; i++){
        res.push(arrObj[i]);
      }
      return res;
    }
  } else {
    return [arrObj];
  }
}

Utils.getFilesAndFolderIds = function(files){
  var fileIdsArr = [];
  var folderIdsSet = {};
  for(var i=0; i<files.length; i++){
    if(files[i]._fileId) fileIdsArr.push(files[i]._fileId);
    folderIdsSet[files[i]._uploadDir] = true;
  }
  var folderIdsArr = [];
  for(var i  in folderIdsSet){
    folderIdsArr.push(i);
  }
  return {fileIdsArr : fileIdsArr, folderIdsArr: folderIdsArr};
}

Utils.clearInput = function(input){
  $(input).replaceWith($(input).clone(true).val(""));
}

Utils.stopFrame = function(iframe, remove){
  iframe = $(iframe);
  iframe.attr('src','');
  if(remove){
    iframe.remove();
  }
}

Utils.getTime = function(){
  return new Date().getTime();
}

Utils.timeLeftCalculator =  function(ratesDeep, minDeep){

  var stats = [];
  var startTime = Utils.getTime();

  var progressTime = 0, progressLoaded = 0, statTotalTime = 0, statTotalLoaded = 0;

  var MIN_STAT_SIZE = 10*1024*1024;
  var MAX_SHOW_TIME = 25*1000;

  var LOG_10 = Math.log(10);

  var APPR_SPEED_PERC = 0.07;

  var MIN_REFRESH_TIME = 4 * 1000;


  var lastRate = 0;
  var lastRateRefreshTime = 0;

  this.putStat = function(loaded, total){
    var currTime = Utils.getTime();

    var elapsedTime = currTime - startTime;
    progressTime = elapsedTime - statTotalTime;
    progressLoaded = loaded - statTotalLoaded;

    progressLoaded = progressLoaded > 0 ? progressLoaded : 0;

    if(progressLoaded){
      statTotalTime+=progressTime;
      statTotalLoaded+=progressLoaded;

      if(!stats.length || stats[stats.length-1].progressLoaded>MIN_STAT_SIZE){
        stats.push({progressTime:progressTime, progressLoaded:progressLoaded, count:1});
      } else {
        stats[stats.length-1].progressTime += progressTime
        stats[stats.length-1].progressLoaded += progressLoaded
      }
    }

    while(stats.length>5){
      var statForRemove = stats.shift();
      statTotalTime-=statForRemove.progressTime;
      statTotalLoaded-=statForRemove.progressLoaded;
    }

    var currTime = new Date().getTime();
    if(currTime - lastRateRefreshTime > MIN_REFRESH_TIME){
      var rate = (statTotalTime ? statTotalLoaded / (statTotalTime / 1000) : 0);
      var roundBy = (Math.pow(10, Math.round(Math.log(rate*APPR_SPEED_PERC) / LOG_10)));
      rate = Math.round(rate/(roundBy))*roundBy;
      lastRate = rate;
      lastRateRefreshTime = currTime;
    }
  }

  this.calculateTimeLeft = function(loaded, total){

    var leftTime = lastRate ? (total-loaded)/lastRate : 0;

    if(statTotalTime>MAX_SHOW_TIME ){
      return {
        leftTime : leftTime,
        rate : lastRate
      }
    } else {
      return {};
    }
  }

}

Utils.median = function(values){
    values.sort( function(a,b) {return a - b;} );

    var half = Math.floor(values.length/2);

    if(values.length % 2)
      return values[half];
    else
      return (values[half-1] + values[half]) / 2.0;

};

Utils.readablizeBytes = function (bytes, forceRound) {
  if (bytes == 0) return '0 В'

  var str = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  var index = Math.floor(Math.log(bytes) / Math.log(1024));
  bytes = (bytes / Math.pow(1024, Math.floor(index)));
  bytes = (index > 1 && !forceRound) ? bytes.toFixed((index >= 3) ? 2 : 1) : Math.round(bytes);

  return bytes + " " + str[index];
}

Utils.readablizeTime = function(seconds, options) {

  options = options || {}

  options = $.extend(true,{
    i18n : {
      seconds : 'sec',
      minutes : 'min',
      hours : 'hours'
    }
  }, options)

  seconds = Math.round(seconds);

  if (seconds < 56)
    return seconds + " " + options.i18n.seconds;

  if (seconds < 3600) {
    var mins = Math.round(seconds / 60) || 0;
    mins++;
    return mins + " " + options.i18n.minutes
  }

  var hours = Math.floor(seconds / 3600)
  var mins = Math.floor((seconds - hours * 3600) / 60);
  return hours + " " + options.i18n.hours + " " + mins + " " + options.i18n.minutes;
};

Utils.checkConnectionAvaliable = function (callback, sync) {
  $.ajax({
    type: 'get',
    url: '/blank.jsp',
    async : !sync,
    success: function() {
      callback(true)
    },
    error: function() {
      callback(false)
    }
  });
};

(function( $ ){

  $.fn.dragTip = function( options ) {

    if (!UploadModule.dropFilesAvailable()) return;

    var settings = $.extend( {
      beforeShow  : function(){},
      afterHide   : function(){},
      showJustForFile : true,
      tipElement  : '',
      droppedEventName : 'fileDropped'
    }, options);

    settings.tipElement = $(settings.tipElement);

    function isFileDrag(event){
      if (!event.originalEvent.dataTransfer) return false;
      var dataTransfer = event.originalEvent.dataTransfer;

      if(dataTransfer.files && dataTransfer.files.length) return true;

      if(dataTransfer.types){
        for(var i=0; i<dataTransfer.types.length; i++){
          if(dataTransfer.types[i].toLowerCase()=='files')return true;
        }
      }
      return false;
    }

    function isValid(event){
      return (!settings.showJustForFile || (settings.showJustForFile && isFileDrag(event))) && !(settings.beforeShow()===false)
    }

    function showDragUpload(event) {
      if(isValid(event)){
        settings.tipElement.show();
      }
    }

    function hideDragUpload(event) {
      settings.tipElement.hide();
      settings.afterHide(event)
    }

    return this.each(function() {
      var $this = $(this)

      var stepEnter = [];
      var timer = null;

      $this.bind('dragenter', function (event) {
        if (!stepEnter.length) showDragUpload(event)
        stepEnter.push(event.target)
        event.stopPropagation();
      })

      $this.bind('dragleave', function (event) {
        stepEnter.pop();
        if(!$.browser.webkit){
          if(!$(stepEnter[stepEnter.length-1]).is(':visible'))stepEnter.pop()
        }
        if(timer)clearTimeout(timer);
        timer = setTimeout(function () {
          if (!stepEnter.length){
            hideDragUpload(event);
            stepEnter = [];
          }
        }, 100)
        event.stopPropagation();
      })


      $(document).bind(settings.droppedEventName, function (event) {
        stepEnter = []
        hideDragUpload(event);
      })


      $(document).bind('mouseout', function(event){
        if(stepEnter.length){
          stepEnter = []
          hideDragUpload(event);
        }
      })


    });

  };
})( jQuery );


Utils.Timer = function(options){
  options = $.extend({
    countDownElement : null,
    onTimeOut : function(){},
    time : 10000,
    timeStep : 1000,
    usePrettyTimePrint : true
  }, options);

  var timeToLeft = options.time;

  if(options.countDownElement){
    var lcTimeout = options.usePrettyTimePrint ? Utils.readablizeTime(timeToLeft/1000, true) : timeToLeft
    $(options.countDownElement).text(lcTimeout).show();
  }

  var timeout = setTimeout(function(){
    processTimer()
  }, options.timeStep);

  function processTimer(){
    if((timeToLeft-=options.timeStep)<=0){
      if(options.countDownElement){
        $(options.countDownElement).hide();
      }
      clearTimeout(timeout);
      options.onTimeOut();
    } else {
      if(options.countDownElement){
        var lcTimeout = options.usePrettyTimePrint ? Utils.readablizeTime(timeToLeft/1000, true) : timeToLeft
        $(options.countDownElement).text(lcTimeout).show();
      }
      timeout = setTimeout(function(){
        processTimer()
      }, options.timeStep);
    }

  }

  this.getTimeoutTimeInMiliSeconds = function(){
    return options.time;
  }

  this.getTimeToLeftInMiliSeconds = function(){
    return timeToLeft;
  }

  this.stopTimer = function(){
    clearTimeout(timeout);
    if(options.countDownElement){
      $(options.countDownElement).hide();
    }
  }
}

Utils.getDomain = function (url) {
  return url.match(/\/\/(.[^/]+)/)[1];
};


(function(){
  Utils.unload = false;

  Utils.isUnload = function(){
    return Utils.unload;
  }

  $(window).bind("beforeunload unload", function(){
    Utils.unload = true;
  });
})();



Utils.scrollToElement =  function (selector, time, verticalOffset) {
  time = typeof(time) != 'undefined' ? time : 1000;
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
  element = $(selector);
  offset = element.offset();
  offsetTop = offset.top + verticalOffset;
  $('html, body').animate({
    scrollTop: offsetTop
  }, time);
}

Utils.showPopUnder = function (params) {
  var win = window.open('#', params.name, 'width=800,height=600')
  win.location.href = params.url
  $(win).blur()
}


Utils.extractExtension = function(filename){
  var indx = filename.lastIndexOf(".")
  if(indx==-1)
    return "";
  else
    return filename.substr(indx+1, filename.length-indx).toLowerCase();
}

Utils.trim = function (str) {
  return str.replace(/^[\s\u00A0][\s\u00A0]*/, '').replace(/[\s\u00A0][\s\u00A0]*$/, '')
}


Utils.isTouchDevice = function(){
  if(Utils.isTouchDevice.res===undefined){
    //lets detect touch device
    try{
      document.createEvent("TouchEvent");
      if (window.opera) Utils.isTouchDevice.res = /Opera Mobi/.test(navigator.userAgent) || /Opera Mini/.test(navigator.userAgent)
      else Utils.isTouchDevice.res = true
    } catch(e){
      Utils.isTouchDevice.res = false;
    }
  }
  return Utils.isTouchDevice.res;
};

/**
 * Result of this function you should insert just like HTML, cause insertion as text will cause XML escape of BRW.
 *
 * If you set isHtml to false, inside this funcrion text will be escaped, so, you will be albe safely insert text as HTML using eighter native innerHTML
 * or html() method of JQUERY
 *
 * @param {String} text - some text, where we wanna add <brw/> tags
 * @param {Number} [howOften=35]  - how often insert BRW, default is 35
 * @param {Boolean} [isHtml=false] - text can contain html tags, which can not be breaked by BRW, default if False
 * @return {String}
 */
Utils.insertBRW = function(text, howOften, isHtml){
  var BRW = "<brw/>";

  howOften = howOften || 35;

  var builderArray = [];

  if(!isHtml) text = $('<div/>').text(text.toString()).html();

  var from = 0;
  while(from<text.length){
    var to = findNextIndex(from);
    builderArray.push(text.substr(from, to-from))
    if(to<text.length)
      builderArray.push(BRW)
    from = to;
  }

  return builderArray.join("");


  function findNextIndex(from){
    var iter = 0;

    var TAG_OPEN = "<";
    var TAG_CLOSE = ">";
    var ESCAPE_OPEN = "&";
    var ESCAPE_CLOSE = ";";

    var i=from
    for(; i<=text.length && iter<howOften; i++){
      if(text.charAt(i)==TAG_OPEN){
        while(text.charAt(i)!=TAG_CLOSE && i<=text.length)i++;
      }else {
        if(text.charAt(i)==ESCAPE_OPEN)
          while(text.charAt(i)!=ESCAPE_CLOSE && i<=text.length)i++;
        iter++;
      }
    }
    return i;
  }
}

Utils.deselectText = function(item) {
  item.value += ' '
  item.value = item.value.slice(0, -1)
}

Utils.imgExtensions = ["bmp", "dwg", "gif", "jpg", "jpeg", "png", "psd", "tif", "tiff"]
Utils.getExtension = function(name) {
  var parts = Utils.trim(name).split('.')
  if (parts.length <= 1)
    return ''
  return parts.pop().toLowerCase()
}
Utils.isImage = function(name) {
  return ($.inArray(Utils.getExtension(name), Utils.imgExtensions) != -1)
}

/**
 * Format the path to folder.
 *
 * @param names - array with names of folders
 * @param isLongLast - default false (is the last folder name is very long)
 * @param maxLength - default 30 (of each folder name)
 */
Utils.formatDirPath = function(names, isLongLast, maxLength) {
  if (names.length < 3) return names;
  if (isLongLast) return [names[0], names[names.length - 1]];
  for (var i = 1; i < names.length - 1; i++) {
    names[i] = Utils.cutWithDots(names[i], maxLength);
  }
  return names;
}

/**
 * Cut string to max length and add "..." at the end of the str
 *
 *
 * @param str - string to cut, default is empty string
 * @param maxLength - default 30
 */
Utils.cutWithDots = function(str, maxLength){
  str = str || "";
  maxLength = maxLength || 30;

  return str.length <=  maxLength ? str : (str.substr(0, maxLength)+"...")
}


Utils.topPos = function(elem) {
  var curTop = 0;
  if (elem.offsetParent) {
    do { curTop += elem.offsetTop; } while (elem = elem.offsetParent);
  }
  return curTop;
}

Utils.leftPos = function(elem) {
  var curleft = 0;
  if (elem.offsetParent) {
    do { curleft += elem.offsetLeft; } while (elem = elem.offsetParent);
  }
  return curleft;
}

/**
 * Display message into console when console obj presented
 *
 * @param message
 */
Utils.log = function(message){
  if(typeof console=="undefined" || typeof console.log != "function") return;

  console.log(message);
};

Utils.checkCORSAvailable = function() {
  try {
    var xdr = new window.XDomainRequest();
    xdr.open('get', '/blank.jsp', true);
    xdr.send(null);
  } catch (ex) {
    return false;
  }
  return true;
}

Utils.escapeXSS = function(s) {
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}