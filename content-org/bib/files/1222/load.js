(function(win,doc){if(win.$wt){return;}win.isIE=(function(){var myNav=navigator.userAgent.toLowerCase();return(myNav.indexOf('msie')!==-1)? parseInt(myNav.split('msie')[1]):false;})();win.$wt=function(s){return document.querySelectorAll(s)};$wt.extend=function(o){for(var i in o){this[i]=o[i];}};$wt.extend({isMobile:('ontouchstart' in window),inProgress:false,components:{},css:{},dictionary:[],alias:{"twitter":"smk","chart":"charts","share":"sbkm","maps":"map","piwik":"analytics","alert":"announcement"},force:function(P){return(P.render || ["laco","gnav","announcement"].indexOf(P.service)!==-1)||(P.service==="sbkm" && P.selection);},ready:function(f){/^(in|com)/.test(doc.readyState)? f():setTimeout($wt.ready,0,f);},on:function(o,e,f){(e==="load" && doc.readyState==="complete")? f():(o.addEventListener)? o.addEventListener(e,f,false):"";},insertBefore:function(from,to){from.insertBefore(to,from.firstChild);},before:function(n,t){(t.parentNode)? t.parentNode.insertBefore(n,t):"";},after:function(n,t){var p=t.parentNode;(p.lastchild===t)? p.appendChild(n):p.insertBefore(n,t.nextSibling);},remove:function(e){(e && e.parentNode)? e.parentNode.removeChild(e):"";},trigger:function(d,n){var e,v=document.createEvent;if(v){e=document.createEvent("HTMLEvents");e.initEvent(n,true,true);}else{e=document.createEventObject();e.eventType=n;}e.eventName=n;if(v){d.dispatchEvent(e);}else{d.fireEvent("on" + e.eventType,e);}},ext:function(s){s=((s || "").toLowerCase()).split("#")[0].split("?")[0];return((/[.]/.exec(s))?(/[^.]+$/.exec(s)):undefined)+ "";},visible:function(e){var c=e.getBoundingClientRect();return(c.top >=-200 && c.top <=(win.innerHeight || doc.documentElement.clientHeight)+ 200);},mergeParams:function(defaultJSON,customJSON){(function r(a,b){for(var k in b){if(b.hasOwnProperty(k)){if(!a[k] && a[k] !=='' && a[k] !==0){a[k]=undefined;}if(typeof b[k]==="function" || typeof b[k]==="string" || typeof b[k]==="number" || typeof b[k]==="boolean" || b[k]===null ||(typeof b[k]==="object" &&(typeof a[k]==="string" || typeof a[k]==="number" || typeof a[k]==="boolean"))){a[k]=b[k];}else if(typeof b[k]==="object"){if(!a[k]){if(b[k].length !==undefined){a[k]=[];}else{a[k]={};}}r(a[k],b[k]);}}}}(defaultJSON,customJSON));return defaultJSON;},include:function(srcFile,callback,ext,forceReload){if(!$wt.isLoad){$wt.isLoad=[];}var i,s=srcFile;var f=callback;var t=($wt.isLoad[s])? true:false;var j,e,h,r;if(t===false || forceReload){e=(ext)? ext:$wt.ext(s);if(e==="css"){i=doc.createElement("link");i.setAttribute("type","text/css");i.setAttribute("rel","stylesheet");i.setAttribute("media","all");i.setAttribute("href",s);h=doc.getElementsByTagName("head")[0];}else{i=doc.createElement("script");i.setAttribute("type","text/javascript");i.setAttribute("src",s);h=doc.getElementsByTagName("body")[0];}if(typeof f==="function"){if(isIE){i.onreadystatechange=function(){j=this.readyState;if(j==="loaded" || j==="complete"){f(i);}};}else{i.onload=f;}i.onerror=function(){f("error");};}if(h){h.appendChild(i);}$wt.isLoad[s]=i;}else if(typeof f==="function"){f();}return i;},load:function(s,c){var toLoad=(typeof s==="string")? [s]:s;$wt.include(toLoad[0],function(){toLoad.shift();if(toLoad.length===0){if(typeof c==="function"){c();}return;}$wt.load(toLoad,c);},$wt.ext(toLoad[0]));},lang:function(d){if(doc.lang){return doc.lang;}var l=d || "en";var a=doc.getElementsByTagName("html");var n=doc.querySelectorAll("meta[http-equiv='Content-Language']");var g=(win.location + "").replace(/(.*)(_|-|::|=|\/)([a-zA-Z]{2})(\.|&|#|$|\?|\/)(.*)/ig,"$3");if(a[0] && a[0].lang){l=(a[0].lang).split("_")[0].split("-")[0];}else if(n[0]){l=n[0].content;}else if(g.length===2){l=g.toLowerCase();}doc.lang=l;return l;},getUrlParams:function(s){var p={};(s || window.location.search).replace(/[?&]+([^=&]+)=([^&]*)/gi,function(str,key,value){value=decodeURIComponent(value);if(key.indexOf("[")!==-1){var k=key.replace("[]","");if(!p[k]){p[k]=[];}p[k].push(value);}else{p[key]=value;}});return p;},next:function(E){try{window[E.snippet.params.events.onready](E);}catch(e){}$wt.inProgress=false;$wt.collect();},id:function(){return Math.random().toString(36).substr(2,16);},uniqueID:function(E){if(E.params){$wt.components[(E.params.name ||((E.params.service || E.params.utility)+ "_" + $wt.id()))]=E;}},regenerate:function(N){[].forEach.call(doc.querySelectorAll("script[type='application/json']"),function(E){if(E.reset){E.reset();}});$wt.components=[];$wt.collect();},collect:function(){if(isIE && isIE < 9){return;}var U=[],R=[],S=[];[].forEach.call(doc.querySelectorAll("script[type='application/json']"),function(E){if(!E.isProcess && !E.getAttribute("data-process")){if(!E.params){try{E.params=JSON.parse(E.innerHTML);}catch(e){E.isProcess=true;console.log("WTINFO:JSON is not correctly formatted:",E);return;}$wt.uniqueID(E);E.params.render=$wt.force(E.params);}if(!E.container){var t='';if(E.params.renderTo &&(t=document.getElementById(E.params.renderTo))){E.container=t;delete E.params.renderTo;E.container.innerHTML='';E.container.className="wtWidgets wtWaiting";}else{E.container=document.createElement("div");E.container.className="wtWidgets wtWaiting";$wt.before(E.container,E);}}if(E.params.service==="search"){E.container.style.height="52px";}}if(!E.isProcess && !E.getAttribute("data-run")){if(E.params.utility){U.push(E);}else if(E.params.render){R.push(E);}else if($wt.visible(E.container)){S.push(E);}}});var N=U[0] || R[0] || S[0];if(N){N.setAttribute("data-process",true);$wt.process(N);}},storeStatistics:function(){if(this.statsSending){return;}this.statsSending=true;var stats={};stats["url"]=window.location.protocol + "//" + window.location.hostname + window.location.pathname;var allComponents={};for(var key in $wt.components){var component=$wt.components[key];allComponents[key]={service:component.params.name || component.params.utility || component.params.service,version:component.params.version || "none",provider:component.params.provider || "none"};}stats["components"]=JSON.stringify(allComponents);$wt.post($wt.root + '/rest/stats/index.php',stats);},process:function(E,P){if(!E || $wt.inProgress){return;}P=E.params || P ||{};var self=this;var N=P.service || P.utility || false;N=$wt.alias[N] || N;if(!N){console.log("WTINFO:Unknow component:",P);return;}$wt.inProgress=true;if(!E.container){E.container=document.createElement("div");$wt.before(E.container,E);}E.reset=function(){if(E.container && E.params && !E.params.utility){var API=$wt[E.params.service];if(API && API.onRemove){[].forEach.call(API.onRemove(),function(e){$wt.remove(e);});}E.remove();E.container=false;E.isProcess=false;E.params=false;E.removeAttribute("data-run");E.removeAttribute("data-process");}};E.remove=function(){$wt.remove(E.container);E.container=false;};E.regenerate=function(){E.reset();$wt[N].run(E.container,P);};if(E.container){E.container.params=P;E.container.className=N + " wt wt-" + N + " " +(P["class"] || "");}E.container.snippet=E;if(N !=="gnav" && !P.utility && !self.css["__" + N]){var GETCSS=$wt.root + "/webtools." + N + ".css";var NIELS=[];(Object.keys(self.css).length===0)? NIELS.push("utilities=true"):"";((P.version)? NIELS.push("version=" + P.version):"");if(NIELS.length){GETCSS +="?" + NIELS.join("&");}self.css["__" + N]=true;$wt.include(GETCSS);}var runMe=function(){if($wt[N] && $wt[N].run && !E.getAttribute("data-run")){E.setAttribute("data-run",true);$wt[N].run(E.container,P);}};var GETJS=$wt.root + "/webtools." + N + ".js";if(P.version){GETJS +="?version=" + P.version;}$wt.include(GETJS,function(msg){if(msg==="error"){console.log("WTERROR:'" + N + "' doesn't exist!");$wt.process.start=false;$wt.remove(E.container);$wt.remove(E);self.next();}else if($wt[N] && $wt[N].run){runMe();}},"js");},render:function(n,p){var createSnippet=function(P){var s=document.createElement("script");s.type="application/json";s.params=P;s.innerHTML=JSON.stringify(P);return s;};var C=false;if($wt.components[n]){C=$wt.components[n];}else if(typeof n==="string"){C=document.querySelectorAll("#" + n + ",." + n);C=C[0] || false;}else if(typeof n==="object"){C=n;}if(!C){console.log("WTINFO:Your container doesn't exist.");return;}var P=$wt.mergeParams((C.params ||{}),(p ||{}));P.render=true;if(!C.container){var S=createSnippet(P);C.innerHTML="";C.appendChild(S);$wt.uniqueID(S);}else if(C.container && p){C.reset();C.params=P;C.innerHTML=JSON.stringify(P);C.isProcess=false;$wt.uniqueID(C);}else if(C.isProcess && !p){C.container.innerHTML="";$wt[C.params.service].run(C);}else if(C.params && C.params.service && !p){}$wt.collect();},frame:{init:function(){if(top.window !==window){if(window.name.indexOf("WT_FRAME_")!==-1){var O={position:"absolute",left:0,right:0,display:"inline-block",margin:0,overflow:"hidden"};for(var x in O){if(document.body){document.body.style[x]=O[x];}}$wt.on(window,"load",function(){$wt.frame.resize();$wt.on(window,"resize",$wt.frame.resize);$wt.on(window,"orientationchange",$wt.frame.resize);if("MutationObserver" in window){var O=new MutationObserver($wt.frame.resize);O.observe(document.body,{childList:true,subtree:true});}});$wt.on(document.getElementById('nexteuropasearch__search-results')|| window,'click',function(e){var e=window.event || e;var t=e.target || e.srcElement;while(t && !t.href){t=t.parentNode;}if(t && t.href&& !t.getAttribute("aria-controls")&& !t.isTracked&& !t.href.match(/^(javascript|mailto|#|sms)/i)&&($wt.urlParams['render']==="iframe" &&  t.href.indexOf('europa.eu/search')< 0)){e.preventDefault();e.stopPropagation();window.parent.postMessage({service:'frame-analytics',link:t.href},'*');setTimeout(function(){t.isTracked=true;t.click();},350);}});var isSearchPage=document.getElementById('internal-search');if(isSearchPage){var countElement=document.querySelector("meta[property='nexteuropasearch:count']");var count=countElement && +countElement.getAttribute("content")|| 0;parent.postMessage({service:"frame-search-track",keyword:isSearchPage.value,count:count,location:location.href},"*");}}}else{$wt.on(window,"message",$wt.frame.parent);}},resize:function(){if(top.window===window && !parent.postMessage){return;}parent.postMessage({service:"frame",name:window.name,height:document.body.offsetHeight},"*");},parent:function(e){var d=e.data ||{};if(d.service==='frame-search-track'){if($wt.analytics){$wt.analytics.parameters.search={keyword:d.keyword,category:"Europa Search",count:d.count};$wt.trackPageView($wt.analytics.parameters);window.name=d.location;}}else if(d.service==='frame-analytics'){$wt.trackLinks(d.link);}else if(d.service==="frame"){var x=d.name;var h=d.height;var d=0;var I=document.querySelectorAll("iframe[name='" + x + "']")[0];var W=I.offsetWidth;var P=I.previousWidth;if(W===P && I.offsetHeight===h){I.previousHeight=h;I.previousWidth=W;}else{if(W > P && I.previousHeight){d=Math.round((W - P)*(h / W));h=(((I.previousHeight)- d));}I.previousHeight=h;I.previousWidth=I.offsetWidth;I.height=h;I.setAttribute("style",I.getAttribute("style").split(";height:")[0] + ";height:" + h + "px !important");}}}},trackLinks:function(){},trackPageView:function(params){$wt.trackPageViewParams=params ||{};},isArray:function(o){return(Object.prototype.toString.call(o)==="[object Array]");},arrayToUrl:function(a){var n="";for(var key in a){n +="&" + key + "=" + a[key];}return n;},absolute:function(s){var a=document.createElement('a');a.href=s;return a.href;},template:function(t,e){return t.replace(/{([\w_\-]+)}/g,function(k,n){return e[n] || "";});},alphaOrder:function(dataSrc,options){if(!$wt.isArray(dataSrc)){console.log("WTERROR:alphaOrder need a real ARRAY in first argument!");return;}var orderConf={"default":"aAªáÁàÀăĂâÂåÅǻǺäÄǟǞãÃǡǠąĄāĀæÆǽǼǣǢbBḃḂcCćĆĉĈčČċĊçÇ℅dDďĎḋḊđĐðÐeEéÉèÈĕĔêÊěĚëËęĘēĒėĖəƏfFḟḞƒﬁﬂgGğĞĝĜǧǦġĠģĢǥǤhHĥĤȟȞħĦiIíÍìÌĭĬîÎïÏĩĨİįĮīĪıĳĲjJĵĴkKǩǨķĶĸlLĺĹľĽļĻłŁŀĿmMṁṀnⁿNńŃňŇñÑņŅŋŊŉ№oOºóÓòÒŏŎôÔöÖőŐõÕǫǪǭǬōŌøØǿǾœŒpPṗṖqQrRŕŔřŘŗŖɼsSśŚŝŜšŠṡṠşŞșȘſẛßtTťŤṫṪţŢțȚŧŦ™uUúÚùÙŭŬûÛůŮüÜűŰũŨųŲūŪvVwWẃẂẁẀŵŴẅẄxXyYýÝỳỲŷŶÿŸzZźŹžŽżŻʒƷǯǮ","greek":"αΑἀἈἄἌἂἊἆἎἁἉἅἍἃἋἇἏάΆὰᾺᾶάΆᾳᾼᾀᾈᾄᾌᾂᾊᾆᾎᾁᾉᾅᾍᾃᾋᾇᾏᾴᾲᾷᾰᾸᾱᾹβϐΒγΓδΔεΕἐἘἔἜἒἚἑἙἕἝἓἛέΈὲῈέΈϝϜϛϚζΖηΗἠἨἤἬἢἪἡἩἥἭἣἫἧἯήΉὴῊῆἦἮήΉῃῌᾐᾘᾔᾜᾒᾚᾖᾞᾑᾙᾕᾝᾓᾛᾗᾟῄῂῇθϑΘιιΙἰἸἴἼἲἺἶἾἱἹἵἽἳἻἷἿίΊὶῚῖίΊῐῘϊΪΐῒῗΐῑῙκϰΚϗλΛμµΜνΝξΞοΟὀὈὄὌὂὊὁὉὅὍὃὋόΌὸῸόΌπϖΠϟϞρϱΡῤῥῬσςΣτΤυΥὐὔὒὖὑὙὕὝὓὛὗὟύΎὺῪῦύΎῠῨϋΫΰῢῧΰῡῩφϕΦχΧψΨωΩΩὠὨὤὬὢὪὦὮὡὩὥὭὣὫὧὯώΏὼῺῶώΏῳῼᾠᾨᾤᾬᾢᾪᾦᾮᾡᾩᾥᾭᾣᾫᾧᾯῴῲῷϡϠ","cyrillic":"аАӑӐӓӒәӘӛӚӕӔбБвВгГґҐғҒҕҔдДђЂѓЃҙҘеЕѐЀёЁӗӖєЄжЖӂӁӝӜҗҖзЗӟӞѕЅӡӠиИѝЍӣӢӥӤіІїЇйЙјЈкКқҚӄӃҡҠҟҞҝҜлЛљЉмМнНңҢӈӇҥҤњЊоОӧӦөӨӫӪпПҧҦрРсСҫҪтТҭҬћЋќЌуУӯӮўЎӱӰӳӲүҮұҰфФхХҳҲһҺцЦҵҴчЧӵӴҷҶӌӋҹҸҽҼҿҾџЏшШщЩъЪыЫӹӸьЬэЭюЮяЯҩҨӀ"},options=options ||{lang:doc.lang || "default"},langGroup={"el":"greek","bg":"cyrillic","uk":"cyrillic","mk":"cyrillic","sr":"cyrillic"},orderLang={"default":["default","greek","cyrillic"],"greek":["greek","default","cyrillic"],"cyrillic":["cyrillic","default","greek"]};dataSrc.sort();var lang=langGroup[options.lang] || "default";var p=orderLang[lang];var o='';var word='';var order=[];var tmp=[];var index='';for(var val in p){o=orderConf[p[val]].split("");for(var k in o){for(var kk in dataSrc){word=dataSrc[kk];if(word.charCodeAt(0)===o[k].charCodeAt(0)){order.push(dataSrc[kk]);tmp.push(dataSrc[kk]);}}}for(var k in tmp){index=dataSrc.indexOf(tmp[k]);dataSrc.splice(index,1);}tmp=[];}return order.concat(dataSrc);},isjsonstat:function(j){return((typeof j==="object")&&(typeof j.dimension==="object")&&(typeof j.extension==="object")&&(typeof j.id==="object")&&(typeof j.source==="string" && j.source==="Eurostat"));},shadeColor:function(color,percent){var f=parseInt(color.slice(1),16);var t=percent <(0)? 0:255;var p=percent <(0)? percent * -1:percent;var R=f >> 16;var G=f >> 8 & 0x00FF;var B=f & 0x0000FF;return "#" +(0x1000000 +(Math.round((t - R)* p)+ R)* 0x10000 +(Math.round((t - G)* p)+ G)* 0x100 +(Math.round((t - B)* p)+ B)).toString(16).slice(1);},label:function(l,a,b,n,x){var d=$wt.dictionary[l];var t="";b=b || doc.lang;n=n || [];x=x || 0;if(d){var l=d[b];if(l){var s=l[a];if(s){t=(typeof s==="string")? s:s[x];if(typeof s==="object"){return s;}else if(t==="string"){t=t.replace(/{(\d+)}/g,function(match,k){return(typeof n[k - 1] !=="undefined")? n[k - 1]:"";});}}}if(t==="" || !t){if(d["en"]){if(d["en"][a]){t=d["en"][a];}}}}return t || "UNKNOWN LABEL";},addTranslation:function(json,mode){var t=$wt.dictionary;var n=json;for(var i in n){if(typeof t[i] !=="object"){t[i]={};}for(var l in n[i]){t[i][l]=n[i][l];}}$wt.dictionary=t;},mergeTranslation:function(json){var t=$wt.dictionary;var n=json;for(var i in n){if(typeof t[i] !=="object"){t[i]={};}t[i]=$wt.mergeParams(t[i],json[i]);}$wt.dictionary=t;},jsonp:function(url,callback){if(!$wt.json_retval){$wt.json_retval=[];}var extra_url=($wt.urlParams["wtenv"])? "&wtenv=" + $wt.urlParams["wtenv"]:"";extra_url +=($wt.urlParams["wtdebug"])? "&wtdebug=" + $wt.urlParams["wtdebug"]:"";var url=$wt.absolute(url);if(url.indexOf("?")!==-1){url=encodeURIComponent(url);}var kemopi=(url.indexOf("countries.php")!==-1);$wt.jsonpCounter=$wt.jsonpCounter || 68448510;var id=(kemopi)?($wt.jsonpCounter++):Math.random();var u=($wt.root + "/jsonp.php?url=" + url)+ "&wtid=" + id;var s=document.createElement("script");if(kemopi){u +="&kemopi=enabled";}s.setAttribute("type","text/javascript");s.setAttribute("src",u + extra_url);function success(json){if(json.wtstatus.success===0){console.log("WTERROR:",json.wtstatus.status);callback(json,json.wtstatus.status);return;}callback(json);}if(isIE){s.onreadystatechange=function(){var j=this.readyState;if(j==="loaded" || j==="complete"){success($wt.json_retval[id]);}};}else{s.onload=function(){success($wt.json_retval[id]);};}s.onerror=function(){callback({},"error");};h=document.getElementsByTagName("body")[0];h.appendChild(s);return s;},jsonstat:function(opt){var sanitizeLabels=function(jsonstat){try{jsonstat.dimension.geo.category.label["DE"]=jsonstat.dimension.geo.category.label["DE"].replace(/Germany +\(until.+/gi,"Germany").replace(/Allemagne +\(jusqu.+/gi,"Allemagne").replace(/Deutschland +\(bis.+/gi,"Deutschland");}catch(err){}return jsonstat;};var toLasko=function(dataSet,options){var buildSeries=function(c){var o=[];for(var k=0,l=c.length;k < l;k++){o[k]={"label":c[k].label,"data":[]};}return o;};var output={label:dataSet.label,length:dataSet.length,id:dataSet.id,size:dataSet.size,categories:[],sheets:[]};var cat=options.categories;var series=options.series;var sheets=options.sheets;if(cat){try{var catDim=dataSet.Dimension(cat);var c=catDim.Category();for(var i=0,ll=c.length;i < ll;i++){output.categories[i]={"label":c[i].label,"id":catDim.id[i]};}}catch(err){c="";console.log("WTERROR:undefined categories " + cat + " in your dataset");}}if(series){try{var cy=dataSet.Dimension(series).Category();if(sheets){var ci=dataSet.Dimension(sheets).Category();for(var j=0;j < ci.length;j++){output.sheets[j]={"label":ci[j].label,"series":[]};output.sheets[j].series=buildSeries(cy);}}else{output.sheets[0]={"label":null,"series":[]};output.sheets[0].series=buildSeries(cy);}}catch(err){cy="";ci="";console.log("WTERROR:undefined series " + series + " or sheets " + sheets + " in your dataset");}}if(cat && series){for(var h=0;h < 1 ||(ci && h < ci.length);h++){for(var i=0;i < c.length;i++){var total=0;var tmp=[];for(var j=0;j < cy.length;j++){var matrix=Array(dataSet.length);for(var m=0;m < dataSet.length;m++){if(dataSet.id[m]===cat){matrix[m]=i;}else if(dataSet.id[m]===series){matrix[m]=j;}else if(sheets && dataSet.id[m]===sheets){matrix[m]=h;}else{matrix[m]=0;}}var value=dataSet.Data(matrix).value;total +=value;tmp[j]=value;if(options.metrics && options.metrics==="percentage"){if(j===(cy.length - 1)){for(var k=0;k <=j;k++){output.sheets[h].series[k].data[i]={"value":(tmp[k] / total * 100).toFixed(2)};}}}else{output.sheets[h].series[j].data[i]={"value":value,"id":catDim.id[i]};}}}}}return output;};var convertTo=function(opt){var from=(opt && opt.from)? opt.from:false;var to=(opt && opt.to)? opt.to:false;var fnc=(opt && opt.ready)? opt.ready:false;var jsonp=(typeof from==="object")? true:false;if(!from && !jsonp){console.log("WTERROR:jsonstat - 'from' parameter is missing.");return;}else if(typeof fnc !=="function" && !jsonp){console.log("WTERROR:jsonstat - 'ready' parameter is missing.");return;}var callFunc=function(json){json=sanitizeLabels(json);var jsonStat=JSONstat(json),data;if(to==="html"){data=JSONstatUtils.datalist(jsonStat);}else if(to==="csv"){data=JSONstatUtils.toCSV(jsonStat);}else if(to==="lasko"){data=toLasko(jsonStat,opt);}else{data=jsonStat;}fnc(data,opt);};if(JSONstat){if(!jsonp){$wt.jsonp(from,function(json,error){if(!error){callFunc(json);}else{console.log("WTERROR:jsonstat - ",error," from:",from);}});}else{callFunc(opt.from);}}else{console.log("WTERROR:JSONstat is not available");}};if(window.JSONstat){convertTo(opt);}else{$wt.include("//europa.eu/webtools/libs/json-stat/jsonstat.php",function(){convertTo(opt);},"js",true);}},ajax:function(c){var u=c["url"];var e=c["error"];var s=c["success"];var d=c["data"];var f=c["dataType"];var credential=c["withCredentials"] || false;var m="GET";if(u !=="" && u !==undefined && u !==null){if(d){m='POST';}if(!f){f="application/x-www-form-urlencoded";}var r=(function(){var x=false;var w=window;if(w.XMLHttpRequest){x=new XMLHttpRequest();}else if(w.ActiveXObject){x=new ActiveXObject("Microsoft.XMLHTTP");}return x;})();if(!r){return;}u=u.replace(/&amp;/ig,"&");r.onreadystatechange=function(){if(r.readyState===4){if(r.status !==200 && r.status !==304){if(typeof e==="function"){e(c);}}else{if(typeof s==="function"){s(r.responseText,r.responseXML,c);}else{return{txt:r.responseText,xml:r.responseXML};}}}};r.open(m,u,true);if(credential){r.withCredentials=true;}if(m==='POST'){r.setRequestHeader("Content-Type",f);var url='';for(var prop in d){url +=encodeURIComponent(prop)+ '=' +encodeURIComponent(d[prop])+ '&';}d=url.substring(0,url.length - 1);r.send(d);}else{r.send(null);}}},post:function(url,params){if(!params.target || params.target==="iframe"){var ifrm=document.createElement("iframe");ifrm.name="phiflochri";ifrm.style.display="none";$wt.after(ifrm,document.body);}var form=document.createElement("form");form.method="post";form.style.display="none";form.action=url;form.target=params.target || "phiflochri";function populateInput(n,v){if(Array===v.constructor){for(var i=0,l=v.length;i < l;i++){populateInput(n + "[" + i + "]",v[i]);}}else if(v){var inp=document.createElement("INPUT");inp.type="hidden";inp.name=n;inp.value=decodeURIComponent(v);form.appendChild(inp);}}for(var name in params){populateInput(name,params[name]);}$wt.after(form,document.body);form.submit();},pop:function(c){c=c ||{};var currentFocusableElement=doc.activeElement || false;doc.body.setAttribute("aria-hidden",true);$wt.pop.close=function(){$wt.pop.wtOverlayer.style.display="none";$wt.remove($wt.pop.wtPopup);doc.body.removeAttribute("aria-hidden");if(currentFocusableElement){currentFocusableElement.focus();}if(typeof $wt.pop.wtPopup.onClose==="function"){$wt.pop.wtPopup.onClose();}};if(!$wt.pop.wtOverlayer){$wt.pop.wtOverlayer=doc.createElement("div");$wt.pop.wtOverlayer.className="wtOverlayer";$wt.after($wt.pop.wtOverlayer,doc.body);$wt.on(document,"keydown",function(evt){evt=evt || window.event;if(evt.keyCode===27){$wt.pop.close();}});$wt.on($wt.pop.wtOverlayer,"click",$wt.pop.close);}$wt.pop.wtOverlayer.style.display="block";$wt.pop.wtPopup=document.createElement("div");$wt.pop.wtPopup.className="wtPopup " +((c["fullscreen"])? "wtPopupFullscreen ":"")+ c["class"];$wt.after($wt.pop.wtPopup,$wt.pop.wtOverlayer);$wt.pop.wtPopup.setAttribute("tabindex","0");$wt.pop.wtPopup.setAttribute("role","dialog");$wt.pop.wtPopup.setAttribute("aria-describedby","modalDescription");$wt.pop.wtPopup.dialogDesc=doc.createElement("div");$wt.pop.wtPopup.dialogDesc.id="modalDescription";$wt.pop.wtPopup.dialogDesc.className="offscreen";$wt.pop.wtPopup.appendChild($wt.pop.wtPopup.dialogDesc);$wt.pop.wtPopup.dialogDesc.innerHTML="Escape will cancel and close the window";var hh=c["head"] || c["title"];var hh=(hh)? "<h1><span>" + hh + "</span></h1>":"<h1 aria-hidden='true'>&nbsp;</h1>";$wt.pop.wtPopup.head=doc.createElement("div");$wt.pop.wtPopup.head.className="wtPopupHead";$wt.pop.wtPopup.head.innerHTML=hh;$wt.pop.wtPopup.appendChild($wt.pop.wtPopup.head);$wt.pop.wtPopup.content=doc.createElement("div");$wt.pop.wtPopup.content.className="wtPopupContent";$wt.pop.wtPopup.content.innerHTML=(c["content"])? c["content"]:"";$wt.pop.wtPopup.appendChild($wt.pop.wtPopup.content);$wt.pop.wtPopup.footer=doc.createElement("div");$wt.pop.wtPopup.footer.className="wtPopupFooter";$wt.pop.wtPopup.footer.innerHTML=(c["footer"])? c["footer"]:"";$wt.pop.wtPopup.appendChild($wt.pop.wtPopup.footer);var x="Close";var k=doc.createElement("a");k.className="wtPopupCloseBtn";k.title=x;k.href="javascript:$wt.pop.close()";k.innerHTML=x + '<b><span>&times;</span></b>';$wt.pop.wtPopup.appendChild(k);$wt.pop.focusableElements=$wt.pop.wtPopup.querySelectorAll("a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,*[tabindex],*[contenteditable]");$wt.pop.wtPopup.focus();function trapTabKey(obj,evt){if(evt.which===9){$wt.pop.focusableElements=$wt.pop.wtPopup.querySelectorAll("a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,*[tabindex],*[contenteditable]");var focusedItem=doc.activeElement;var numberOfFocusableItems=$wt.pop.focusableElements.length;var focusedItemIndex=0;for(var i=0,l=numberOfFocusableItems;i < l;i++){if($wt.pop.focusableElements[i]===focusedItem){focusedItemIndex=i;}}if(evt.shiftKey){if(focusedItemIndex===0){$wt.pop.focusableElements[$wt.pop.focusableElements.length - 1].focus();evt.preventDefault();}}else{if(focusedItemIndex===numberOfFocusableItems - 1){$wt.pop.focusableElements[0].focus();evt.preventDefault();}}}}$wt.pop.wtPopup.onkeydown=function(e){var e=e || window.event;trapTabKey(this,e);};if(typeof c["callback"]==="function"){c["callback"]($wt.pop.wtPopup);}return $wt.pop.wtPopup;}});$wt.extend({_queue:$wt.next,addEvent:$wt.on});$wt.ready(function(){$wt.urlParams=$wt.getUrlParams();$wt.root="//europa.eu/webtools";if((isIE && isIE < 9)|| !doc.querySelectorAll){$wt.include($wt.root + "/webtools.analytics.js?polyfill=true");return;}var a=$wt.urlParams["wtApi"] || false;if(a){$wt.include($wt.root + "/webtools." + a + ".js?api=true",function(){$wt[a].api();});return;}$wt.root=(function(){var R=doc.querySelectorAll('script[src*="/load.js"]');var O=((R[0])? R[0].src:"").split("/");return(O.slice(0,O.length - 1)).join("/");})();$wt.lang();$wt.collect();if(isIE){setTimeout($wt.collect,10);}$wt.on(win,"scroll",function(){clearTimeout($wt.timer);$wt.timer=setTimeout($wt.collect,100);});var createPanel=function(e){if((((e.keyCode || e.which)===87 && e.altKey)|| $wt.urlParams["wtpanel"]==="open")&& !$wt.panelDebug){$wt.panelDebug=document.createElement("div");$wt.after($wt.panelDebug,document.body);$wt.render($wt.panelDebug,{"service":"panel"});}};$wt.on(document,"keydown",createPanel);createPanel(this);if($wt.urlParams["widgets"]){var widgets=document.createElement("div");widgets.className="wt-widgets wt-widgets-" + $wt.urlParams["widgets"];$wt.before(widgets,document.body.firstChild);$wt.render(widgets,{"service":$wt.urlParams["widgets"]});}$wt.frame.init();});$wt.on(win,"load",$wt.storeStatistics);})(window,document);