({name:"adtlgcen_Cookie",set:function(h,a,g){var f,b="";f=new Date();if(g){f.setTime(f.getTime()+g*60*60*1000)}b="; expires="+f.toGMTString();document.cookie=escape(h)+"="+a+b+"; path=/"},get:function(h){var f,a,d,g=document.cookie;d=h+"=";a=g.indexOf("; "+d);if(a==-1){a=g.indexOf(d);if(a!==0){return""}}else{a+=2}f=g.indexOf(";",a);if(f==-1){f=g.length}return unescape(g.substring(a+d.length,f))},unset:function(a){return this.set(a,"")},init:function(){window[this.name]=this}}).init();function validateEvIdCookieAR(a){return adtlgcen_Cookie.get(a)&&adtlgcen_Cookie.get(a)!="-entered"}function en_ar_onunload(){adtlgcen_Cookie.unset("evid_set_0024")}window.attachEvent?window.attachEvent("onbeforeunload",en_ar_onunload):window.addEventListener("unload",en_ar_onunload,false);function ARDataRequest(){this.send=function(b){window.onerror=function(e,d,c){return true};var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("charset","utf-8");a.setAttribute("src",b);a.setAttribute("defer","true");a.setAttribute("async","true");document.getElementsByTagName("head")[0].appendChild(a)};this.callback=function(a){if(a){adtlgcen_Cookie.set("evid_0024",a.evId,18*30*24);adtlgcen_Cookie.set("evid_set_0024","2",1/60)}}}function en_smart_decode(b){var f=b.split("%");var a=f[0];for(var c=1;c<f.length;c++){try{if(f[c].length==2&&f.length>c&&f[c+1].length>=2){try{a+=decodeURIComponent("%"+f[c]+"%"+f[c+1].substring(0,2));a+=f[c+1].substring(2,f[c+1].length);c++;continue}catch(d){}}if(f[c].length>=2){a+=decodeURIComponent("%"+f[c].substring(0,2))+f[c].substring(2,f[c].length);continue}}catch(d){}a+="%"+f[c]}return a}if(!window.egrupp_admp_ar){try{window.loc_=(window.location.href=="undefined"&&JSON&&JSON.parse&&JSON.stringify)?JSON.parse(JSON.stringify(window.location)):window.location}catch(err){window.loc_=window.location}window.egrupp_admp_ar=true;(function(){if(adtlgcen_Cookie.get("evid_set_0024")=="1"){setTimeout(arguments.callee,200)}else{window.adapt_dataRequest_egrupp_admp_ar=new ARDataRequest();if(!validateEvIdCookieAR("evid_0024")){adtlgcen_Cookie.set("evid_set_0024",1,1/60)}var a=en_smart_decode(window.loc_.href);adapt_dataRequest_egrupp_admp_ar.send(window.loc_.protocol+"//admp-tc.elconfidencial.com/event/v3/arstat?location="+(encodeURIComponent||escape)(a)+"&callback=adapt_dataRequest_egrupp_admp_ar.callback&cb="+new Date().getTime())}})()};