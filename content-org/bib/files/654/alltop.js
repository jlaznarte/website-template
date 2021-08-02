
function writeJavaScriptCookie()
{document.cookie="javaScript=true; path=/";}
function newImage(arg){if(document.images){rslt=new Image();rslt.src=arg;return rslt;}}
function changeImages(){if(document.images&&(preloadFlag==true)){for(var i=0;i<changeImages.arguments.length;i+=2){document[changeImages.arguments[i]].src=changeImages.arguments[i+1];}}}
function loadImg(imgObj,newImgSrc)
{if(imgObj.src!=newImgSrc)
{imgObj.src=newImgSrc;}}
function swapSection(idA,idB){var divA=document.getElementById(idA);var divB=document.getElementById(idB);if(!divA.style.display||divA.style.display=="block"){divA.style.display="none";divB.style.display="block";}else{divA.style.display="block";divB.style.display="none";}}