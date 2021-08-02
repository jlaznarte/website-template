
function openFormhelp(pageToLoad,winName,width,height,center){args=getArgs(width,height,center,0,0);if((parseInt(navigator.appVersion)>=4)&&(center)){if(window.formhelp){formhelp.close();formhelp=window.open(pageToLoad,winName,args);}}
formhelp=window.open(pageToLoad,winName,args);return false;}
function openSeperateWindow(pageToLoad,winName,width,height,center)
{if(winName=='popuptip'){loc=2}else{loc=0}
args=getArgs(width,height,center,0,loc);if((parseInt(navigator.appVersion)>=4)&&(center)){if(window.sepwindow){sepwindow.close();sepwindow=window.open(pageToLoad,winName,args);}}
sepwindow=window.open(pageToLoad,winName,args);return false;}
function openGlobalhelp(pageToLoad,winName,width,height,center){if(winName=='popuptip'){loc=2}else{loc=0}
args=getArgs(width,height,center,0,loc);if((parseInt(navigator.appVersion)>=4)&&(center)){if(window.globalhelp){globalhelp.close();globalhelp=window.open(pageToLoad,winName,args);}}
globalhelp=window.open(pageToLoad,winName,args);return false;}
function getArgs(width,height,center,menu,loc){xposition=10;yposition=10;if((parseInt(navigator.appVersion)>=4)&&(center)){if(loc==0){xposition=(screen.width-width)-10;yposition=(screen.height-height)-58;}
else if(loc==1){xposition=(screen.width-width)/2;yposition=((screen.height-height)/2)-67;}
else if(loc==2){xposition=(screen.width-width)-10;yposition=0;}}
if(navigator.appName=='Netscape'){width=width+25;height=height+25;}
args="width="+width+",height="+height
+",toolbar="+menu+",menubar="+menu
+",screenx="+xposition+",screeny="+yposition
+",left="+xposition+",top="+yposition
+",resizable=1,scrollbars=1,";return args;}
function openSizedWindow(url,winname){if((navigator.appName=="Microsoft Internet Explorer")&&(parseFloat(navigator.appVersion)<4))
{return false;}
var parms='width=750'+',height=450'+',screenX=0'+',screenY=0'+',left=0'+',top=0'+',status=yes,toolbar=yes,menubar=yes,location=yes'+',scrollbars=yes,resizable=yes';win=window.open(url,winname,parms);win.focus();return false;}
function openBareWindow(url,winname){if((navigator.appName=="Microsoft Internet Explorer")&&(parseFloat(navigator.appVersion)<4))
{return false;}
var parms='width=750'+',height=450'+',screenX=0'+',screenY=0'+',left=0'+',top=0'+',status=no,toolbar=no,menubar=no,location=no'+',scrollbars=no,resizable=no';win=window.open(url,winname,parms);win.focus();return false;}
function openPopUpWindow(url,title,width,height,pos,menubar,toolbar,status,resizable,scrollbars,location){var features=createWindowFeatures(width,height,pos,menubar,toolbar,status,resizable,scrollbars,location);return window.open(url,title,features);}
function createWindowFeatures(width,height,pos,menubar,toolbar,status,resizable,scrollbars,location){var xpos=0;var ypos=0;var xfudge=20;var yfudge=40;switch(pos){case 1:xpos=0;ypos=0;break;case 2:xpos=(screen.width-width-xfudge)/2;ypos=0;break;case 3:xpos=screen.width-width-xfudge;ypos=0;break;case 4:xpos=0;ypos=(screen.height-height-yfudge)/2;break;case 5:xpos=(screen.width-width-xfudge)/2;ypos=(screen.height-height-yfudge)/2;break;case 6:xpos=screen.width-width-xfudge;ypos=(screen.height-height-yfudge)/2;break;case 7:xpos=0;ypos=(screen.height-height-yfudge);break;case 8:xpos=(screen.width-width-xfudge)/2;ypos=(screen.height-height-yfudge);break;case 9:xpos=(screen.width-width-xfudge);ypos=(screen.height-height-yfudge-20);break;case 10:xpos=(screen.width-width-10);ypos=0;break;}
args="width="+width+",height="+height+",screenx="+xpos+",left="+xpos+",screeny="+ypos+",top="+ypos+",menubar="+menubar+",toolbar="+toolbar+",location="+location+",status="+status+",resizable="+resizable+",scrollbars="+scrollbars;return args;}
function getJSCheckedUrl(url){url=url+"&javascript=t";return url;}
function onBodyLoad()
{preloadImages();writeScreenInfoCookie();}
function writeScreenInfoCookie()
{document.cookie="screenInfo="+screen.height+":"+screen.width+"; path=/";}
function clearForm(form){for(var i=0;i<form.elements.length;i++){if(form.elements[i].type!="hidden"){if(form.elements[i].type=="checkbox"){form.elements[i].checked=false;}else{form.elements[i].value="";}}}
return false;}
var InfoBubble={bubbleTimeout:2,currentBubble:null,timeoutBubbleID:null,show:function(aID){var aBubble=document.getElementById(aID);if(aBubble&&aBubble!=this.currentBubble){this.hide();aBubble.style.display='inline';this.currentBubble=aBubble;}
if(this.timeoutBubbleID){clearTimeout(this.timeoutBubbleID);}},hide:function(){if(this.currentBubble){this.currentBubble.style.display='none';this.currentBubble=null;if(this.timeoutBubbleID){clearTimeout(this.timeoutBubbleID);}}},timeout:function(){this.timeoutBubbleID=setTimeout('InfoBubble.hide()',this.bubbleTimeout*1000);}}<!--
function assertNotEmpty(control){assertNotEmpty(control,'');}
function assertNotEmpty(control,message){var reg=/\S/g
if(control.value==null||control.value==''||control.value.match(reg)==null){if(message!=null&&message!=''){alert(message);}
control.focus();control.select();return false;}
return true;}
function assertNotEmptyString(thisString){var reg=/\S/g
if(thisString==null||thisString==''||thisString.match(reg)==null){return false;}
return true;}