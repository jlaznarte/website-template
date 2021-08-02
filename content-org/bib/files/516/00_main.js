/**
 * Created by Zohaib Khan on 12/2/2015.
 */


var CWAuthorTip = function(authorArray){
    var _authorList = authorArray;
    var indexedAuthorList = {};
    var isAuthorProfActive = false;
    var callDelayTime = 30, ajaxTimer;
    var target = undefined;
    var xhrInstance;
    function _init(){
        indexedAuthorList = _authorList;
        registerAuthBtnEvents();
        AuthorTipUtils.CWComApi.init();
    }

    function _setPopupPosition(target, mouseEvent){
        var elem = CwZ("#auProfNewUI");
        CwZ("#auProfNewUI .tab-container a").on("click", function(e){//toggle tabs
            CwZ(".tab-container a").removeClass("selected");
            CwZ(this).addClass("selected");
            CwZ(".auth-main-container [data-tab]").hide();
            CwZ(".auth-main-container [data-tab='" + CwZ(this).attr("data-tab") + "']").show();
        });
        CwZ(".cw-follow").on("click",function(e){
            var authId =  CwZ(this).attr("data-id");
            CWPDFReader.followAuth(authId);
        });
        var pos = _getPopPosCustom(target, mouseEvent);
        elem.css("top", pos.top + "px");
        elem.css("left", pos.left + "px");
        _setPopupTip(pos.tip);
    }
    function _getPopPosCustom(target, mouseEvent){
        var pos = {tip: {}};
        var frame = CwZ("#auProfNewUI");
        var verticalThreshold = 5,
            horizontalThreshold = (CwZ(target).outerWidth() / 2) + (frame.outerWidth() / 2);
        var newHorizontalThreshold = 20,
            newVerticalThreshold = 50;

        var targetRight = CwZ(target)[0].getBoundingClientRect().right;
        var targetLeft = CwZ(target)[0].getBoundingClientRect().left;
        var targetTop = CwZ(target)[0].getBoundingClientRect().top;
        var targetBottom = CwZ(target)[0].getBoundingClientRect().bottom;
        var tipHeight = CwZ("#auProfNewUI .tooltip-pointer").outerHeight();

        if(target.height() > 20){ //case when link split in two lines
            var rect = CwZ(target)[0].getClientRects();
            if(mouseEvent.clientX < window.innerWidth / 2){
                rect = rect[rect.length - 1];
            }
            else{
                rect = rect[0];
            }
            targetRight = rect.right;
            targetLeft = rect.left;
            targetTop = rect.top;
            targetBottom = rect.bottom;
        }

        if((targetRight + frame.outerWidth()) < window.innerWidth){ //show it on right side
            pos.left = targetRight + newHorizontalThreshold + window.scrollX ;

            pos.tip.cls = "dir-left";

            if(targetTop - frame.outerHeight() + newVerticalThreshold > 0){
                pos.top = targetTop - frame.outerHeight() + window.scrollY + newVerticalThreshold;
                pos.tip.top = targetTop + window.scrollY - pos.top - (tipHeight / 2);
            }
            else if(targetTop < newVerticalThreshold){ //if it is on edge lets check if we can show on top or bottom
                if(targetTop - frame.outerHeight() > 0){ // show on top
                    pos.left = targetRight - (frame.outerWidth() / 2) - window.scrollX;
                    pos.tip.cls = "dir-bottom";
                    pos.tip.left = (targetRight + window.scrollX) - (target.outerWidth() / 2) - pos.left - 20;
                }
                else if(targetBottom + frame.outerHeight() < window.innerHeight){ // show on bottom
                    pos.left = CwZ(target)[0].getBoundingClientRect().left - frame.outerWidth() + horizontalThreshold + window.scrollX;
                    pos.tip.cls = "dir-top";
                    pos.tip.left = (targetRight + window.scrollX) - (target.outerWidth() / 2) - pos.left - 20;
                }
                else{
                    pos.top = window.scrollY - newVerticalThreshold;
                    pos.tip.top = targetTop + window.scrollY - pos.top - (tipHeight / 2);
                }
            }
            else{
                pos.top = newVerticalThreshold + window.scrollY;
                pos.tip.top = targetTop + window.scrollY - pos.top - (tipHeight / 2);
            }
        }
        else if(targetLeft - frame.outerWidth() > 0){ // show on left side
            pos.left = targetLeft - frame.outerWidth() - newHorizontalThreshold + window.scrollX ;
            pos.tip.cls = "dir-right";

            if(targetTop - frame.outerHeight() - window.scrollY - newVerticalThreshold > 0){
                pos.top = targetTop - frame.outerHeight() - window.scrollY + newVerticalThreshold;
            }
            else if(targetTop < newVerticalThreshold){ //if it is on edge lets check if we can show on top or bottom
                if(targetTop - frame.outerHeight() > 0){ // show on top
                    pos.left = targetRight - (frame.outerWidth() / 2) - window.scrollX;
                    pos.tip.cls = "dir-bottom";
                    pos.tip.left = (targetRight + window.scrollX) - (target.outerWidth() / 2) - pos.left - 20;
                }
                else if(targetBottom + frame.outerHeight() < window.innerHeight){ // show on bottom
                    pos.left = CwZ(target)[0].getBoundingClientRect().left - frame.outerWidth() + horizontalThreshold + window.scrollX;
                    pos.tip.cls = "dir-top";
                    pos.tip.left = (targetRight + window.scrollX) - (target.outerWidth() / 2) - pos.left - 20;
                }
                else{
                    pos.top = window.scrollY - newVerticalThreshold;
                    pos.tip.top = targetTop + window.scrollY - pos.top - (tipHeight / 2);
                }
            }
            else{
                pos.top = newVerticalThreshold + window.scrollY;
                pos.tip.top = targetTop + window.scrollY - pos.top - (tipHeight / 2);
            }
        }
        else if(targetTop - frame.outerHeight() > 0){ // show on top
            pos.left = targetRight - (frame.outerWidth() / 2) + window.scrollX;
            pos.tip.cls = "dir-bottom";
            pos.tip.left= frame.width() + ((targetRight + window.scrollX) - (pos.left + frame.width()) - (target.width() / 2))
        }
        else{ // show on bottom
            pos.left = CwZ(target)[0].getBoundingClientRect().left - frame.outerWidth() + horizontalThreshold + window.scrollX;
            pos.tip.cls = "dir-top";
            pos.tip.left= frame.width() + ((targetRight + window.scrollX) - (pos.left + frame.width()) - (target.width() / 2));
        }

        if(typeof pos.top === 'undefined'){ //case when showing top or bottom
            if(targetTop - frame.outerHeight() > 0){
                pos.top = targetTop - frame.outerHeight() - (verticalThreshold * 2) + window.scrollY;
                pos.tip.cls = "dir-bottom";
            }
            else{
                pos.top = targetBottom + verticalThreshold + window.scrollY;
                pos.tip.cls = "dir-top";
            }
        }

        if(target.height() > 20){//case when showing on left side, override tip values
            if(mouseEvent.clientX < window.innerWidth / 2){
                pos.tip.left = Math.abs(pos.tip.left);
            }
            else{
                pos.tip.left = frame.width() + ((targetRight + window.scrollX) - (pos.left + frame.width()) + (target.width() / 2));
            }
            pos.tip.left = targetLeft - pos.left + window.scrollX;
        }
        return pos;
    }
    function _setPopupTip(tipPos){
        try {
            if(typeof tipPos.top !== 'undefined'){
                CwZ("#auProfNewUI .tooltip-pointer").removeClass("dir-top dir-left dir-right dir-bottom").css('top', tipPos.top +'px').addClass(tipPos.cls);
                if(tipPos.top > CwZ("#auProfNewUI .author-info:first").offset().top)
                    CwZ("#auProfNewUI .tooltip-pointer").css("background-color", "#FFF")
            }
            else{
                CwZ("#auProfNewUI .tooltip-pointer").removeClass("dir-top dir-left dir-right dir-bottom").css('left', tipPos.left +'px').addClass(tipPos.cls);
            }
        }catch(e){}
    }
    function showAuthorTip (mouseEvent){
        try{
            var elem = CwZ(mouseEvent.target).closest(".cw-authorLink");
            target = elem;
            var authorId = elem.attr('auid');
            var pubId = elem.attr('pubid');
            var authObj = indexedAuthorList[authorId];
            var customTitle = elem.attr('cw-autitle');
            try{
                var strHtml = "";
                AuthorTipUtils.CWComApi.get("https://" + AuthorTipUtils.cPDF.domain + "/auapi/checkfollow").then(function(data){
                    AuthorTipUtils.authorsFollowed = data;

                    if(authObj.CoAuthors) {
                        strHtml = getAuthorPopup(authObj, customTitle);
                        CwZ("body").append(strHtml);
                        _setPopupPosition(elem, mouseEvent);
                        CwZ("#auProfNewUI").find(".cw-loading-author").hide();
                        CwZ("#auProfNewUI").stop( true, true ).fadeIn();
                    }
                    else{
                        var params = {
                            url: 'https://www.colwiz.com/auapi?x=1&fmt=json&authorId=' + authObj.id + "&appId=" + publisher.appId,
                            success: function (data) {
                                try {
                                    if(typeof data[0].fullName === "undefined"){
                                        CwZ("#auProfNewUI").remove();
                                    }
                                    else{
                                        strHtml = getAuthorPopup(data[0], customTitle);
                                        CwZ("body").append(strHtml);
                                        _setPopupPosition(elem, mouseEvent);
                                        CwZ("#auProfNewUI .cw-loading-author").hide();
                                        CwZ("#auProfNewUI").show();
                                    }

                                }catch(e){
                                    //AuthorTipUtils.postMessage('hideAuthTooltip',{view:'mainExt'});
                                }
                            },
                            failure: function (error) {
                                if(error.statusText !== "abort")
                                    CwZ("#auProfNewUI").remove();
                            }
                        };
                        ajaxTimer = setTimeout(function(){
                            xhrInstance = AuthorTipUtils.get(params);
                            if(callDelayTime < 500)
                                callDelayTime += 100;
                        }, callDelayTime);

                        strHtml = getAuthorPopup();
                        CwZ("body").append(strHtml);
                        _setPopupPosition(elem, mouseEvent);
                        CwZ("#auProfNewUI").stop( true, true ).fadeIn();
                    }
                }, function(error){
                    //error
                });

            }
            catch(e){}
            //sendMsgToIframe('showAuthProfile',{authorObj:authorId, pubId:pubId});
            if(authorId === "-1")
                CwZ("#auProfNewUI").hide();
        }
        catch(ex){

        }
    };

    function getAuthorPopup(author, customTitle){
        var template = CwH.templates['getAuthorPopup'];
        var context = {};
        if(!author){
            var refBody = template();
            CwZ("#auProfNewUI").remove(); //remove any previous instances if exists
            return refBody;
        }
        var initials = AuthorTipUtils.getInitials(author.fullName);
        author.title = typeof customTitle  !== 'undefined' ? customTitle : coalesce(author.fullName, author.bestName);
        if(author.Affiliations.length > 0){
            var str = "";
            var finalArr = [];
            author.Affiliations.map(function(affiliation){
                finalArr.push(affiliation.full);
                return affiliation;
            });
            if(finalArr.length > 1){
                var oneLineArr = finalArr.join('| ').substr(0,57).split('| ');
                context.affiliations = oneLineArr.length == 1 ? oneLineArr : oneLineArr.splice(0,oneLineArr.length-1);
                context.moreAffs = finalArr.length - context.affiliations.length;
            }
            else{
                context.affiliations = finalArr;
            }
        }
        var newKeywordsArr = [];
        var moreKeywords = 0;
        if(author.Keywords.length > 0){
            var finalArr = [];
            author.Keywords.map(function(keyword){
                finalArr.push(keyword.val);
                return keyword;
            });
            var oneLineArr = finalArr.join(', ').substr(0,95).split(', ');
            newKeywordsArr = oneLineArr.splice(0,oneLineArr.length-1);
            moreKeywords = finalArr.length-newKeywordsArr.length;
        }
        if(typeof author.Awards != 'undefined' && author.Awards.length > 0){
            author.awardsStr = "";
            author.Awards.map(function(award){
                author.awardsStr += award.title + ", ";
            });
            author.awardsStr = author.awardsStr.slice(0, author.awardsStr.lastIndexOf(","));
        }
        if(typeof author.Editor != 'undefined' && author.Editor.length > 0){
            if(author.Editor.length > 1){
                var oneLineArr = author.Editor.join('| ').substr(0,80).split('| ');
                context.editors = oneLineArr.length > 1 ? oneLineArr.splice(0,oneLineArr.length-1): oneLineArr[0] = [oneLineArr[0].slice(0, 65)];
                context.moreEditors = author.Editor.length - context.editors.length;
            }
            else{
                var finalArr = [];
                author.Editor.map(function(editor){
                    editor.length > 70 ? finalArr.push(editor.substr(0, 70) + "..."): finalArr.push(editor);
                });
                context.editors = finalArr;//.join(", ");
            }
        }
        context.authorObj = author;
        context.hasAuthors = author.coCount > 0;
        context.initials = initials;
        context.keywords = newKeywordsArr;
        context.domainURL = 'https://' + AuthorTipUtils.cPDF.domain;//AuthorTipUtils.cPDF.staticDomainURL.indexOf("https") > - 1 ? "https://" + AuthorTipUtils.cPDF.staticDomainURL : AuthorTipUtils.cPDF.staticDomainURL.indexOf("http") > -1 ? AuthorTipUtils.cPDF.staticDomainURL : "https://" + AuthorTipUtils.cPDF.staticDomainURL;;
        context.moreKeywords = moreKeywords;
        var refBody = template(context);
        CwZ("#auProfNewUI").remove(); //remove any previous instances if exists
        return refBody;
    };
    function hideAuthorTip (){
        CwZ("#auProfNewUI").stop( true, true ).fadeOut(200,function(){
            CwZ("#auProfNewUI").remove();
        });
    };
    var registerAuthBtnEvents = function(){
        var tOut;
        CwZ("body").on("mouseenter", ".cw-authorLink", function(e){
            clearTimeout(tOut);
            tOut = setTimeout(function(){
                showAuthorTip(e,true);
            }, 200);
        });
        CwZ("body").on("mouseleave", ".cw-authorLink", function(e){
            tOut = setTimeout(function(){
                CwZ("#auProfNewUI").fadeOut();
                clearTimeout(ajaxTimer);
                if(xhrInstance){
                    xhrInstance.abort();
                    xhrInstance = undefined;
                }
            }, 300);
        });
        CwZ("body").on("mouseenter", "#auProfNewUI", function(e){
            clearTimeout(tOut);
        });
        CwZ("body").on("mouseleave", "#auProfNewUI", function(e){
            tOut = setTimeout(function(){
                CwZ("#auProfNewUI").fadeOut();
            }, 300);
        });
        CwZ("body").on("click", function(e){
            if(CwZ("#auProfNewUI:visible").length > 0 && CwZ("#auProfNewUI").has(event.target).length == 0){
                CwZ("#auProfNewUI").fadeOut();
            }
        });
    };

    function _followAuthor(authorId){
        if(AuthorTipUtils.authorsFollowed.indexOf(authorId) > -1)
            return;
        if(AuthorTipUtils.appData){
            var params = {
                os: 72,
                rf: authorId
            };
            AuthorTipUtils.CWComApi.post(AuthorTipUtils.appData.pbxURL, params).then(function(resp){
                if(resp.success){
                    CwZ(".cw-follow[data-id='" + authorId + "'] span").text("Followed");
                    CwZ(".cw-follow[data-id='" + authorId + "'] i").removeClass("icon-add").addClass("icon-check");
                    AuthorTipUtils.authorsFollowed.push(authorId);
                }
            }, function(error){
                console.log(error);
            });
        }
        else{
            AuthorTipUtils.CWComApi.get("https://" + AuthorTipUtils.cPDF.domain + "/app?x=1b").then(function(resp){
                if(typeof resp === "string"){
                    AuthorTipUtils.appData = JSON.parse(resp);
                }
                else{
                    AuthorTipUtils.appData = resp;
                }

                var params = {
                    os: 72,
                    rf: authorId
                };
                AuthorTipUtils.CWComApi.post(AuthorTipUtils.appData.pbxURL, params).then(function(resp){
                    if(resp.success){
                        CwZ(".cw-follow[data-id='" + authorId + "'] span").text("Followed");
                        CwZ(".cw-follow[data-id='" + authorId + "'] i").removeClass("icon-add").addClass("icon-check");
                        AuthorTipUtils.authorsFollowed.push(authorId);
                    }
                }, function(error){
                    console.log(error);
                });
            });
        }
    }

    this.followAuthor = _followAuthor;

    function coalesce(v1, v2){
        if(v1) return v1
        else return v2;
    }
    _init();
};
var AuthorTipUtils = {
    authorsFollowed: [],
    cPDF : {
        staticDomainURL: "www.colwiz.com",
        domain: "www.colwiz.com",
        version: "16.01.26-372-44",
        js: {
            handlebar: "js/webpdf/lib/handlebars.runtime.js",
            template: 'js/extraction/authortooltip/js/template.js',
            libraries: ['js/extraction/authortooltip/js/lib/jquery.min.js', 'js/extraction/authortooltip/js/lib/please.js', 'js/extraction/authortooltip/js/lib/initials-avatar.js']
        },
        css: 'js/extraction/authortooltip/css/author-tooltip.css'
    },
    init: function(){
        for(var i = 0; i < AuthorTipUtils.cPDF.js.libraries.length; i++){
            if(!!~AuthorTipUtils.cPDF.js.libraries[i].indexOf("please")){
                AuthorTipUtils.addScript(AuthorTipUtils.cPDF.js.libraries[i], function(){
                    please.init(window);
                });
            }
            else if(!!~AuthorTipUtils.cPDF.js.libraries[i].indexOf("jquery.min")){
                if(typeof CwZ === "undefined"){
                    AuthorTipUtils.addScript(AuthorTipUtils.cPDF.js.libraries[i]);
                }
            }
            else{
                AuthorTipUtils.addScript(AuthorTipUtils.cPDF.js.libraries[i]);
            }
        }
        if(typeof(CwH) === 'undefined'){
            AuthorTipUtils.addScript(AuthorTipUtils.cPDF.js['handlebar'], function(){
                CwH = Handlebars;
                Handlebars.noConflict();
                AuthorTipUtils.addScript(AuthorTipUtils.cPDF.js['template']);
                AuthorTipUtils.addHandlebarCustomFunc();
            });
        }
        else{
            AuthorTipUtils.addScript(AuthorTipUtils.cPDF.js['template']);
            AuthorTipUtils.addHandlebarCustomFunc();
        }
        AuthorTipUtils.addCSS(AuthorTipUtils.cPDF.css);
    },
    addHandlebarCustomFunc: function(){
    CwH.registerHelper('ifCond', function (v1, operator, v2, options) {
        switch (operator) {
            case '==':
                return (v1 == v2) ? options.fn(this) : options.inverse(this);
            case '===':
                return (v1 === v2) ? options.fn(this) : options.inverse(this);
            case '<':
                return (v1 < v2) ? options.fn(this) : options.inverse(this);
            case '<=':
                return (v1 <= v2) ? options.fn(this) : options.inverse(this);
            case '>':
                return (v1 > v2) ? options.fn(this) : options.inverse(this);
            case '>=':
                return (v1 >= v2) ? options.fn(this) : options.inverse(this);
            case '&&':
                return (v1 && v2) ? options.fn(this) : options.inverse(this);
            case '||':
                return (v1 || v2) ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this);
        }
    });

    CwH.registerHelper('getInitials', function(options){
        var initials = AuthorTipUtils.getInitials(options.fn(this));
        return new CwH.SafeString(initials);
    });
    CwH.registerHelper('isFollowed', function(v1, options){
        return AuthorTipUtils.authorsFollowed.indexOf(v1) > -1 ? options.fn(this) : options.inverse(this);
    });
},
    getInitials: function(name) {
        var nameSplit = name.toUpperCase().split(/[\s.]+/);
        var initials = "";
        if (nameSplit.length == 1) {
            initials = nameSplit[0].charAt(0)
        }
        else {
            initials = nameSplit[0].charAt(0) + nameSplit[nameSplit.length - 1].charAt(0);
        }
        return initials;
    },
    addScript: function(path, callback) {
        try {
            var sc = document.createElement("script");
            var s = document.getElementsByTagName('script')[0];
            if (callback)
                sc.onload = callback;
            sc.type = 'text/javascript';
            var domain = AuthorTipUtils.cPDF.staticDomainURL;

            if (domain.indexOf("http") >= 0)
                sc.src = domain + "/" + path;
            else
                sc.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + domain + "/" + path + '?v=' + AuthorTipUtils.cPDF.version;
            s.parentNode.appendChild(sc);
        }
        catch (e) {
        }
    },
    addCSS: function(path) {
        try {
            var sc = document.createElement("link"),
                s = document.getElementsByTagName("head")[0];
            var filename;
            if (AuthorTipUtils.cPDF.staticDomainURL.indexOf("http") >= 0)
                filename = AuthorTipUtils.cPDF.staticDomainURL + "/" + path;
            else
                filename = ('https:' === document.location.protocol ? 'https://' : 'http://') + AuthorTipUtils.cPDF.staticDomainURL + "/" + path + '?v=' + AuthorTipUtils.cPDF.version;
            sc.setAttribute("rel", "stylesheet");
            sc.setAttribute("type", "text/css");
            sc.setAttribute("href", filename);
            s.appendChild(sc);
        }
        catch (e) {
            console.log(e);
        }
    },
    get: function(params){
        return jQuery.ajax({
            type: "GET",
            url: params.url,
            success: function(data, status, xhr) {
                params.success(data);
            },
            error: function(response){
                params.failure(response);
            }
        });
    },
    post:function(url ,type , data , success , failure){
        return jQuery.ajax({
            type:type,
            url:url,
            data:data,
            dataType:"text",
            success:success,
            error:failure

        })
    },
    postMessage:function(message , data){
        window.parent.postMessage({
            message	: message,
            data	: data
        }, '*');
    },
    CWComApi: {
        init: function(){
            if(CwZ("#cw-colwizComFrame").length == 0){
                var strColwizFrame = "<iframe id='cw-colwizComFrame' style='display: none; position: fixed; top: 0px; left:0px; z-index:0; border: 0px;' width='0%' height='0%' onload='"+ AuthorTipUtils.CWComApi.onFrameInit + "' src='https://" + AuthorTipUtils.cPDF.domain + "/js/extraction/authortooltip/pages/helper.html' data-version='" + AuthorTipUtils.cPDF.version + "'></iframe>";
                CwZ("body").append(strColwizFrame);
            }

        },
        get: function(url){
            var promise = CwZ.Deferred();
            please(CwZ("#cw-colwizComFrame").get(0).contentWindow).call('get', [url]).then(promise.resolve, promise.reject);
            return promise;
        },
        post: function(url, data){
            var promise = CwZ.Deferred();
            please(CwZ("#cw-colwizComFrame").get(0).contentWindow).call('post', [url, data]).then(promise.resolve, promise.reject);
            return promise;
        }
    },
    onFrameInit: function(){
        please.init(window);
    }
};

AuthorTipUtils.init();