if(typeof tsedge=="undefined"){var tsedge={};tsedge.instr={PL_GO_IMG:"pageend.jpg",onLoadEventAttached:false,prmSent:false,random:Math.floor(Math.random()*1000000),pagestart_ts:new Date().getTime(),pageend_ts:0,counter:0,url:null,version:"0.9.5",bind:function(A,B){if(arguments.length<2&&Object.isUndefined(arguments[0])){return this}return function(){return A.apply(B)}},getCounter:function(){return(this.counter.toString().indexOf(".")>=0)?this.counter.toString():this.counter.toString()+".00"},getHost:function(E){var C="";var A=new RegExp("http[s]?://([^/]*)/(.*)");if(A.exec(E)){C=E}else{var B=A.exec(window.location);var D=E.indexOf("/");C=location.protocol+"//"+location.hostname;if(D==0){C=C+E}else{C=C+location.pathname.substring(0,location.pathname.lastIndexOf("/")+1)+E}}return C},sendPageRenderMarker:function(){if(!this.prmSent){this.pageend_ts=new Date().getTime();this.counter+=0.01;this.host=tsedge.instr.getHost(this.PL_GO_IMG);var B=[];B.push(this.host);B.push("?crd_ver=");B.push(this.version);B.push("&crd_rnd=");B.push(this.random);B.push("&crd_cnt=");B.push(this.getCounter());if(this.pageend_ts>0){B.push("&crd_tpb=");B.push(this.pagestart_ts);B.push("&crd_olt=");B.push(this.pageend_ts-this.pagestart_ts)}this.url=B.join("");var A=new Image();A.src=this.url;this.prmSent=true}},attachOnLoadPageRenderMarker:function(){if(this.onLoadEventAttached){return }try{this._sendPageRenderMarker=tsedge.instr.bind(tsedge.instr.sendPageRenderMarker,this);if(window.attachEvent){window.attachEvent("onload",this._sendPageRenderMarker)}else{if(window.addEventListener){window.addEventListener("load",this._sendPageRenderMarker,false)}else{if(document.addEventListener){document.addEventListener("load",this._sendPageRenderMarker,false)}}}this.onLoadEventAttached=true}catch(A){}}};tsedge.instr.attachOnLoadPageRenderMarker()};