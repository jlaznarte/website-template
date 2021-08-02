
/* JavaScript Browser Sniffer. Eric Krok, Andy King, Michel Plungjan Jan. 31, 2002 */
function inAgt(str){return agt.indexOf(str);}

var objClient = new Object();
var agt=navigator.userAgent.toLowerCase();
var appVer = navigator.appVersion.toLowerCase();
var isT = true;
var isF = false;

var intMinor = parseFloat(appVer);
var intMajor = parseInt(intMinor);

objClient.isOpera = (inAgt("opera") != -1);
objClient.intOperaVer = (objClient.isOpera ? agt.substr(inAgt("opera")+6) : 0);

var iePos = appVer.indexOf('msie');
if (iePos !=-1) {
	intMinor = parseFloat(appVer.substring(iePos+5,appVer.indexOf(';',iePos)))
	intMajor = parseInt(intMinor);
}

objClient.isKonq = isF;
var kqPos = inAgt('konqueror');
if (kqPos !=-1) {
	objClient.isKonq  = isT;
	intMinor = parseFloat(agt.substring(kqPos+10,inAgt(';',kqPos)));
	intMajor = parseInt(intMinor);
}

objClient.isSafari = ((inAgt('safari')!=-1)&&(inAgt('mac')!=-1))?isT:isF;
objClient.isKhtml  = (objClient.isSafari || objClient.isKonq);

objClient.isGecko = ((!objClient.isKhtml)&&(navigator.product)&&(navigator.product.toLowerCase()=="gecko"))?isT:isF;
objClient.intGver  = 0;
if (objClient.isGecko) objClient.intGver=Number(navigator.productSub);

objClient.isMoz = ((inAgt('mozilla/5')!=-1) && (inAgt('spoofer')==-1) && (inAgt('compatible')==-1) &&
					(inAgt('opera')==-1) && (inAgt('webtv')==-1) && (inAgt('hotjava')==-1) &&
					(objClient.isGecko) && ((navigator.vendor=="")||(navigator.vendor=="Mozilla")||(navigator.vendor=="Debian")));
objClient.isFb = ((inAgt('mozilla/5')!=-1) && (inAgt('spoofer')==-1) &&
					(inAgt('compatible')==-1) && (inAgt('opera')==-1)  &&
					(inAgt('webtv')==-1) && (inAgt('hotjava')==-1)     &&
					(objClient.isGecko) && (navigator.vendor=="Firebird"));
objClient.isFx = ((inAgt('mozilla/5')!=-1) && (inAgt('spoofer')==-1) &&
					(inAgt('compatible')==-1) && (inAgt('opera')==-1)  &&
					(inAgt('webtv')==-1) && (inAgt('hotjava')==-1)     &&
					(objClient.isGecko) && (navigator.vendor=="Firefox"));

if ((objClient.isMoz)||(objClient.isFb)||(objClient.isFx)) {  // 032504 - dmr
	objClient.intMozVer = (navigator.vendorSub)?navigator.vendorSub:0;
	if(!(objClient.intMozVer)) {
		objClient.intMozVer = inAgt('rv:');
		objClient.intMozVer = agt.substring(objClient.intMozVer+3);
		is_paren   = objClient.intMozVer.indexOf(')');
		objClient.intMozVer = objClient.intMozVer.substring(0,is_paren);
	}
	intMinor = objClient.intMozVer;
	intMajor = parseInt(objClient.intMozVer);
}
objClient.intFbVer = objClient.intMozVer;
objClient.intFxVer = objClient.intMozVer;

objClient.isNav  = ((inAgt('mozilla')!=-1) && (inAgt('spoofer')==-1)
					&& (inAgt('compatible') == -1) && (inAgt('opera')==-1)
					&& (inAgt('webtv')==-1) && (inAgt('hotjava')==-1)
					&& (!objClient.isKhtml) && (!(objClient.isMoz)) && (!objClient.isFb) && (!objClient.isFx));

if ((navigator.vendor)&&((navigator.vendor=="Netscape6")||(navigator.vendor=="Netscape"))&&(objClient.isNav)) {
	intMajor = parseInt(navigator.vendorSub);
	intMinor = parseFloat(navigator.vendorSub);
}

objClient.isNav7   = (objClient.isNav && intMajor == 7);
objClient.isNav7up = (objClient.isNav && intMinor >= 7);

objClient.isIE   = ((iePos!=-1) && (!objClient.isOpera) && (!objClient.isKhtml));
objClient.isIE5_5  = (objClient.isIE && (inAgt("msie 5.5") !=-1)); // 020128 new - abk
objClient.isIE5_5up =(objClient.isIE && intMinor >= 5.5);                // 020128 new - abk
objClient.isIE6 = (objClient.isIE && intMinor == 6);
objClient.isIE6up = (objClient.isIE && intMinor >= 6);

objClient.isAOL   = (inAgt("aol") != -1);
objClient.isAOL5  = (inAgt("aol 5") != -1);
objClient.isAOL6  = (inAgt("aol 6") != -1);
objClient.isAOL7  = ((inAgt("aol 7")!=-1) || (inAgt("aol7")!=-1));
objClient.isAOL8  = ((inAgt("aol 8")!=-1) || (inAgt("aol8")!=-1));

objClient.isWin   = ( (inAgt("win")!=-1) || (inAgt("16bit")!=-1) );
objClient.isWin95 = ((inAgt("win95")!=-1) || (inAgt("windows 95")!=-1));

objClient.isWinME = ((inAgt("win 9x 4.90")!=-1));    // new 020128 - abk
objClient.isWin2k = ((inAgt("windows nt 5.0")!=-1) || (inAgt("windows 2000")!=-1)); // 020214 - dmr
objClient.isWinXP = ((inAgt("windows nt 5.1")!=-1) || (inAgt("windows xp")!=-1)); // 020214 - dmr
objClient.isWin98 = ((inAgt("win98")!=-1) || (inAgt("windows 98")!=-1));
objClient.isWinNT = ((inAgt("winnt")!=-1) || (inAgt("windows nt")!=-1) && !objClient.isWinXP);

objClient.isMac    = (inAgt("mac")!=-1);
if (objClient.isMac) objClient.isWin = !objClient.isMac; // dmr - 06/20/2002

objClient.isJava = (navigator.javaEnabled());

objClient.isFlash = isF;
objClient.intFlashVer = 0;

if ((objClient.isNav||objClient.isOpera||objClient.isMoz||objClient.isFb||objClient.isFx)||(objClient.isMac&&objClient.isIE5up)) {
	var plugin = (navigator.mimeTypes &&
				navigator.mimeTypes["application/x-shockwave-flash"] &&
				navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) ?
				navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
	if (plugin) {
		objClient.isFlash = isT;
		objClient.intFlashVer = parseInt(plugin.description.substring(plugin.description.indexOf(".")-1));
	}
}

if (objClient.isWin&&objClient.isIE4up) {
	document.write(
		'<scr' + 'ipt language=VBScript>' + '\n' +
		'Dim hasPlayer, playerversion' + '\n' +
		'hasPlayer = false' + '\n' +
		'playerversion = 10' + '\n' +
		'Do While playerversion > 0' + '\n' +
		'On Error Resume Next' + '\n' +
		'hasPlayer = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & playerversion)))' + '\n' +
		'If hasPlayer = true Then Exit Do' + '\n' +
		'playerversion = playerversion - 1' + '\n' +
		'Loop' + '\n' +
		'objClient.intFlashVer = playerversion' + '\n' +
		'objClient.isFlash = hasPlayer' + '\n' +
		'<\/sc' + 'ript>');
}

function hideSelects() {
	var aSelects = document.getElementsByTagName('select');
	for (i=0;i<aSelects.length;i++) {
		if(aSelects[i].className.indexOf('popupSelect') == -1 ) {
			setObjVisibility(returnObjById(aSelects[i].id),'hidden');
		}
	}
}

function showSelects() {
	var aSelects = document.getElementsByTagName('select');
	for (i=0;i<aSelects.length;i++) {
		if(aSelects[i].className.indexOf('popupSelect') == -1 ) {
			setObjVisibility(returnObjById(aSelects[i].id),'visible');
		}
	}
}

function getMouseCoords(e) {
	var posx = 0;
	var posy = 0;
	if(!e) var e = window.event;
	if(e) {
		if (e.pageX || e.pageY) 	{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) 	{
			posx = e.clientX + document.body.scrollLeft
				+ document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop
				+ document.documentElement.scrollTop;
		}
	}

	var aCoords = new Array();
	aCoords[0] = posx;
	aCoords[1] = posy;
	return aCoords;
}

function openJumpToMenu(e) {
	var aMouseCoords = getMouseCoords(e);
	setObjDisplay(returnObjById('jumpToContainer'),'block');
	setObjPosition(returnObjById('jumpToContainer'),aMouseCoords[0]-125,aMouseCoords[1]+5);
}

function closeJumpToMenu() {
    setObjDisplay(returnObjById('jumpToContainer'), 'none');
}

function openCalendar(e) {
	//var aMouseCoords = getMouseCoords(e);
	setObjDisplay(returnObjById('datePicker1'),'block');
	setObjPosition(returnObjById('datePicker1'),275,-105);
}

function returnImg(strSrc) {
	var objImg = new Image();
	objImg.src = strSrc;
	return objImg;
}

function returnObjById(strId) {
	var tempObj = document.getElementById(strId);
	return tempObj;
}

function setImgSrc(targetID, strSrc) {
	if (typeof targetID == "string") var objImg = returnObjById(targetID);
	else if (typeof targetID == "object") var objImg = targetID;
	objImg.setAttribute("src",strSrc);
}

function setObjInnerHTML(objLayer,strHTML) {
	objLayer.innerHTML = strHTML;
}

function setObjPosition(objLayer,intX,intY) {
	strX = String(intX);
	strY = String(intY);
	objLayer.style.top = intY + (strY.indexOf("px") == -1 ? "px" : "");
	objLayer.style.left = intX + (strX.indexOf("px") == -1 ? "px" : "");
}

function setObjVisibility(objLayer,strState) {
	objLayer.style.visibility = strState;
}

function setObjDisplay(objLayer,strState) {
	objLayer.style.display = strState;
}

function returnObjPosition(target){
	var x = 0;
	var y = 0;
	var tempObj = new Object();
	var obj = (typeof target == "object" ? target : returnObjById(target));
	while (obj.offsetParent != null) {
		x += obj.offsetLeft;
		y += obj.offsetTop;
		obj = obj.offsetParent;
	}
	x += obj.offsetLeft;
	y += obj.offsetTop;
	tempObj.x = x;
	tempObj.y = y;
	return tempObj;
}

function clearBox(box) {
 if(box.value==box.defaultValue) {
 	 box.value = "";
 }
}

function setObjClassName(objLayer, strClassName) {
	if (objLayer == 'body') {
		document.getElementsByTagName('body')[0].className = strClassName;
	}
	else objLayer.className = strClassName;
}


/**
 *	synchornize checkboxes between alpha list and category list
 */
function syncAlphaCatCbx(aCbx, aCheckParentNode) {
	if (aCbx.name != "publication") {
		return;
	}

	var alphaMode;
	var pubId;
	if (aCbx.id.indexOf("alpha_check") == 0) {
		pubId = aCbx.id.substring("alpha_check".length);
		alphaMode = true;
	} else if (aCbx.id.indexOf("category_check") == 0) {
		pubId = aCbx.id.substring("category_check".length);
		alphaMode = false;
	}
/*
	alert("id = " + aCbx.id +
			"\nname = " + aCbx.name +
			"\nchecked = " + aCbx.checked +
			"\npubId = " + pubId +
			"\nalphaMode = " + alphaMode);
*/
	var currentCb;
	if (alphaMode) {
		var catCb = $("category_check"+pubId);
		if (catCb) {
			catCb.checked = aCbx.checked;
			currentCb = catCb;
		}
	} else {
		var alphaCb = $("alpha_check"+pubId);
		if (alphaCb) {
			alphaCb.checked = aCbx.checked;
		}
		currentCb = aCbx;
	}

	if (aCheckParentNode && currentCb) {
		var parent = $(currentCb).up(".selectContainer");
		if (parent) {
			var group = parent.previous(".categorySelect");
			if (group) {
				var arrCbx = document.getElementsByClassName('checkbox', parent);
				group.checked = isAllChecked(arrCbx);
			}
		}
	}
}

function isAllChecked(aCbxArray) {
	for (var i=0; i<aCbxArray.length; i++) {
		if (! aCbxArray[i].checked) {
			return false;
		}
	}
	return true;
}

function searchPub()
{
	var frm = document.forms['frmSearch'];
	if (! frm) {
		return;
	}
	var elmts = frm.elements;
	for (var i=0; i<elmts.length; i++) {
		var e = elmts[i];
		if ((e.name == "publication") &&
			(e.type == "radio") &&
			(e.value == "")) {
			e.checked = true;
			break;
		}
	}
}
function validateMediaInquiriesForm() {
    var elmts = document.forms['mediaInquiriesForm'].elements;
    var count = 0;
    var allJournals = document.getElementById("allJournals");
    var exempt = allJournals.checked;
    if (!exempt){
        for (var i=0; i<elmts.length; i++) {
            var e = elmts[i];
            if (e.name != "publication") {
                continue;
            }
            if (! e.checked) {
                continue;
            }
            if (e.type == "checkbox") {
                count++;
            }
        }
        if (count == 0) {
            alert("Please select a publication / category.");
            return false;
        }
    }
    return checkCity();
}
function checkCity(){
    var address1 = document.getElementById("address1");
    var address2 = document.getElementById("address2");
    var city = document.getElementById("city");
    if (!(address1.value == "" && address2.value == "") ){
        if (city.value == ""){
            alert ("If address is entered, city is required.");
            return false;
        }
    }
    return true;
}
function validateSearchForm() {
	var elmts = document.forms['frmSearch'].elements;
	var filter = false;
	var count = 0;
	for (var i=0; i<elmts.length; i++) {
		var e = elmts[i];
		if (e.name != "publication") {
			continue;
		}

		if (! e.checked) {
			continue;
		}

		if ((e.type == "radio") &&
			(e.value == "")) {
			filter = true;
			continue;
		}

		if (e.type == "checkbox") {
			count++;
		}
	}

	if (filter && (count == 0)) {
		alert("Please select a publication / category.");
		return false;
	}
	return true;
}

function searchSyncSetting() {
	var frmSearch = document.forms['frmSearch'];
	var frmSetting = document.forms['frmSearchSetting'];

	var index = frmSetting.pageSize.selectedIndex;
	var ps = frmSetting.pageSize.options[index].value;

	var ds;
	var elmts = frmSetting.elements;
	for (var i=0; i<elmts.length; i++) {
		var e = elmts[i];
		if ((e.name == "displaySummary") &&
			(e.checked)) {
			ds = e.value;
			break;
		}
	}

	frmSearch.pageSize.value = ps;
	frmSearch.displaySummary.value = ds;
	frmSearch.submit();
}

function suggest(aQuery) {
	var frm = document.forms['frmSearch'];
	frm.searchText.value = aQuery;
	frm.submit();
}

function searchTarget(aTarget) {
    var frm = document.forms['frmSearch'];
    frm.target.value = aTarget;
    frm.submit();
}

function addFlashMovie(id, flv) {
    var so = new SWFObject('/flvplayer.swf',id,'352','288','7');
	so.addParam('allowfullscreen','false');
	so.addVariable('file',flv);
	so.addVariable('type','flv');
    if (navigator.appName.indexOf("Microsoft") != -1) {
        // this is needed for IE, but i breaks Gecko
        so.addVariable('width','352');
        so.addVariable('height','288');
    }
    so.write(id);
}
function XaddFlashMovie(id, flv) {
    var fo = new SWFObject("/FlowPlayerWhite.swf", "FlowPlayer", "320", "288", "7", "#ffffff", true);
    fo.addParam("flashVars", "config={fullScreenScriptURL:'/FlowPlayerFullScreen.js',autoPlay:false,playList:[{url:'"+flv+"',type:'flv'}]}");
    fo.write(id);
}