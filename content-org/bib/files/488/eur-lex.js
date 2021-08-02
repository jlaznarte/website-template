var dateLineTemplate ="";
var maxNbDayForCookie = 30;
var lastFocusElement = null;
if (typeof(legislativeUrl)!='undefined') {
	var toolbox = '<div class="toolsList"><a href="'+legislativeUrl+'">'+legDraftLabel+'<\/a> <a href="'+eurovocUrl+'">Eurovoc<\/a><a href="'+interStyleGuideUrl+'">'+interStyleGuideLabel+'<\/a><a href="'+otherLink+'">'+otherLinksLabel+'<\/a><\/div>';	
}

$(document).ready(function(){
		docReady();
});

function docReady(){
	if(isWebTrendsEnabled == "true") {
		sendDcsMultiTrack();
	}
	
	// bug leaving single whitespace when removing class, breaks Selenium tests
	// see http://bugs.jquery.com/ticket/5988 (resolved in jQuery 1.4.2)
	var oldRemoveClass = jQuery.fn.removeClass;
	jQuery.fn.removeClass = function() {
		oldRemoveClass.apply(this, arguments);
		if ($(this).attr('class') == ' ') {
			$(this).attr('class', '');
		}
		return this;
	}
	
	if (navigator.userAgent.indexOf('MSIE') == -1){
		// ELX-2041 -> Gif is not displayed while the page is reloading when submitting a form, this will preload it. Known browser issue for Google Chrome and Mozilla Firefox.
		$("body").prepend('<img style="position:absolute; top:-1000px;" src="' + imageMap['ajax-loader'] + '" name="load" id="load" alt="Loading, please wait..." />');
	}
	
	$("#freetextEditorial,#freetext").focus(function(){
		if (navigator.userAgent.indexOf('MSIE 7')!=-1 || navigator.userAgent.indexOf('MSIE 8')!=-1){
			$(this).data('placeholder').addClass('placeholder-hide-except-screenreader');
		}
	}).change(function(){
		showPlaceholderIfEmpty($(this));
	});
	
	// Set timeout for session expiration
	if (sessionTimeout != -1) {
		setTimeout(function() {
			sessionExpired = true;
		}, sessionTimeout);
	}
	
	$(".hideInJs, .hideInJsInline").css({display:'none'});
	$(".absoluteInJs").css({position:'absolute', left:'-9995em'});
	$(".onlyJs").css({display:'block'});
	$(".onlyJsInline").css({display:'inline'});
	$(".onlyJsSeparator").removeClass("onlyJsSeparator");
	$("a.noJsCancel").each( function(){ $(this).before("<input style='"+$(this).attr('style')+"' type='button' class='button' value=\""+$(this).text()+"\" onclick='window.location=\""+this.href+"\"' />"); $(this).remove(); });
	
	// old function to remove old separator in dropdown menu
	// $(".op-lv2-tabs li a.selected").parent('li').prev().children('a').css({background:'none'});
	

	$(".simpleJsTree a.expandLink").live('click', function() {
  													toggleNextTreeLevel(this)
	});
	$("a.advancedSearchTitleLink").click(function() { $(this).parent().find(".widgetControl a").first().click()});
	
	// Tooltip for EU summaries
    $('#containerthemes li').hover(function(){
        // Hover over code
    	var li = $(this);
		var parentUl = $(li).parent('ul');
		var hiddenBox = $(li).children('.hidden');
    	var t = setTimeout(function() {
    		hiddenBox.addClass('displayedTooltip');
    		var boxHeight = hiddenBox.outerHeight()+6;
    		var padding = boxHeight - (parentUl.height() - (li.position().top + li.height()));
    		if (padding < 0) {
    			padding = 0;
    		}
    		var paddingPx = padding+"px";
    		parentUl.css("padding-bottom",paddingPx);
    		hiddenBox.addClass('displayedTooltip').toggle();
        }, 500);
        $(this).data('timeout', t);
    }, function() {
        // Hover out code
    	clearTimeout($(this).data('timeout'));
		$(this).parent('ul').css("padding-bottom",0);
		$('.displayedTooltip').removeClass('displayedTooltip').toggle();
    });
	
	$(".modal").live('click', function() {
								var callback = this.rel;
								var url = this.href;
								showModal(url, callback);
								return false;
	});
	
	$(".authentication_required").live('click', function() {
		var callback = this.rel;
		var url = this.href;
		if(sessionExpired) {
			showAuthenticationRequiredModal(url, callback);
			return false;
		}
	});
	
	$(".imgWithHover").hover( 
		function() {
			var img = $(this).attr("src");
			if (img.indexOf("-hover")<0) {
				img = img.replace(/\.png/, "-hover.png")
				$(this).attr("src", img);
			}
			$(this).attr("src", img);
		}, function() {
			var img = $(this).attr("src");
			img = img.replace(/-hover\.png/, ".png")
			$(this).attr("src", img);
		}
	);
	
	if(navigator.userAgent.toLowerCase().indexOf('msie 6') < 0){
		$(".formWithBubble label").live('mouseover',function(){ $('#'+$(this).attr('for')).mouseover(); });
		$(".formWithBubble input, .formWithBubble select, .formWithBubble textarea").live('mouseover',function(){
			if($(this).attr("class").indexOf("noBubble") == -1) {
				showHelpBubble(this.id,this.type);
			}});
	}
	
	$(window).resize(function() {
		checkOpBannerDisplay();
	});
	checkOpBannerDisplay();
	
	$('.loadingElement').each(function() {
		var loadingElement = $(this);
		var cellarId = $(this).prev('input[type=hidden]').val();
		$.ajax({
			type: "GET",
			cache: false,
			url: 'search.html',
			data: {'type':'boosted', 'cellarId':cellarId, 'qid':$("[name=qid]").first().val()},
			success: function(data){
				if(data != ''){
					var element = $("tbody", data);
					var uls = element.find("tr td ul");
					uls.first().addClass("leftUlMetadata");
					uls.last().addClass("rightUlMetadata");
					loadingElement.after(uls);
					loadingElement.remove();
					$(".hideInJs").css({display:'none'});
					$(".onlyJs").css({display:'block'});
				} else {
					loadingElement.remove();
				}
			}
		  });
	});
	
	$('a.zoomHidden').first().click();
	
	if($(".dateLine").length > 0)
		dateLineTemplate = ($(".dateLine").first().html());
	$.ajaxSetup({ cache: false });
	// Init Ajax navigation
	try{
		$.history.init(callbackHistory);
		$("a.history").click(function(){
			$.history.load(this.href.replace(/^.*#/, ''));
			return false;
		});
	}
	catch(e){return;}
	
}

//DROPDOWN
var myTimeout;

function resetSubInSec(){
	myTimeout = window.setTimeout(resetSub,200);	
}

function cancelTimeOut(){
	clearTimeout(myTimeout);	
}

function showSubMenu(el){
	cancelTimeOut();
	resetSub();
	var leftpx=$(el).position().left +'px';
	var minSize=Math.max($(el).width(), 200);
	var liList = $(el).parent('li').parent('ul').children('li');
	for (var i = 0, len = liList.length; i < len; i++) {
		  minSize=Math.max($(liList[i]).children('a').width()+18, minSize);
	}
	var minSizepx=minSize +'px';
	
	//var toppx=$(el).position().top + $(el).innerHeight() +'px';
	var heigthTopMenu=$(el).parent('li').parent('ul').height();
	var paddingTopMenu=8;
	//var heigthTopMenu=22;
	var toppx=paddingTopMenu + heigthTopMenu +'px';
	
	$(el).addClass('lv1Hover');
	$(el).parent('li').children('ul').css({left:leftpx,top:toppx,display:'block'});
	$(el).parent('li').children('ul').css("width",minSizepx);
	$(el).parent('li').children('ul').children('li').css("width",minSizepx);
	$(el).parent('li').children('ul').animate({opacity:'1'},200);
}
function resetSub(){
	$('.lv1Hover').removeClass('lv1Hover')
	$('.subM').css({left:'545em',display:'none',opacity:'0.2'});
}
//END DROPDOWN


function checkOpBannerDisplay(){
	var larg2el = $('.op-quicksearch').innerWidth();
	if( $('#op-header').innerWidth() > 470 + larg2el ){
	$('#op-header').addClass('forNormalScreen');
	}
	else{
		$('#op-header').removeClass('forNormalScreen');		  
	}
}

function callbackHistory(hash)
{
	if(hash.indexOf('nal-') < 0){
		$("#documentView a.selectedTab").removeClass("selectedTab");
		if(hash){
			$(".tabContent").load(hash+".html .forAjaxLoading", ajaxDocumentReady );
			$("."+hash+" a.history").addClass("selectedTab");
		}
		else{
			var alternativeUrl = (location.href).substring(location.href.lastIndexOf("/")+1);
			var UrlWithoutExt = alternativeUrl.substring(0,alternativeUrl.lastIndexOf("."));
			$(".tabContent").load(alternativeUrl+" .forAjaxLoading", ajaxDocumentReady );
			$("."+UrlWithoutExt+" a.history").addClass("selectedTab");
		}
	}
}

function ajaxDocumentReady(){
	$(".hideInJs").css({display:'none'});
	$(".absoluteInJs").css({position:'absolute', left:'-9995em'});
	$(".jsOnly").css({display:'block'});
}
/* Callback */
/*var dynParam = new Array();
	dynParam.push('34');
	callFunction('testAlert', dynParam);
*/	
function callFunction(fnc, prm){
	if (typeof(fnc)!='undefined' && '' != fnc) {
		if(typeof(prm)!='undefined' && '' != prm) {
			eval(fnc)(prm);
		} else {
			eval(fnc);
		}
	}
}
/*function testAlert(prm){
	alert(prm[0]);
}*/
/* Fin callBack */

function callbackMetadataTree() {
	$('.selectedTab').removeClass('selectedTab');
	$('#simpleSelectionLi').children('a').addClass('selectedTab');
	$('#simpleSelectionLi').css({display:'block'});	
	$('#tabs-4, #tabs-5').toggle();	

	loadMetadataCheckBoxes();
}
function callbackMetadataTreeAjaxDocReady() {
	$(".hideInJsInline").css({display:'none'});
	$(".absoluteInJs").css({position:'absolute', left:'-9995em'});
	$(".jsOnly").css({display:'block'});
	$('.selectedTab').removeClass('selectedTab');
	$('#simpleSelectionLi').children('a').addClass('selectedTab');
	$('#simpleSelectionLi').css({display:'block'});	
	$(".hideInJs").css({display:'none'});
	$('#tabs-4, #tabs-5').toggle();	

	loadMetadataCheckBoxes();
}

function smartToogle(el) {
    var isVisible = $(el).css('display') !== 'none';
    var nav = navigator.userAgent.toLowerCase();
    if (nav.indexOf("msie 6") > -1 || nav.indexOf("msie 7") > -1){
        //$(el).toggle(); unexpected behavior: http://bugs.jquery.com/ticket/11436
        if(isVisible) {
            $(el).hide();
        } else {
            $(el).show();
        }
    } else {
        //$(el).slideToggle(); unexpected behavior: http://bugs.jquery.com/ticket/11436
        if(isVisible) {
            $(el).slideUp().hide();
        } else {
            $(el).slideDown().show();
        }
    }

}

function minimizeMe(linkedId,el,crCook){
	smartToogle($("#"+linkedId));
	var curImg = $(el).children().attr("src");
	if(curImg.indexOf('mini') > -1){
		curImg = imageMap['box-maximize'];
		$(el).children().attr("title","maximize");
		if(crCook)
			createCookie(linkedId,'mini',30);
	}
	else{
		curImg = imageMap['box-minimize'];
		$(el).children().attr("title","minimize");
		if(crCook)
			createCookie(linkedId,'maxi',30);
	}
	$(el).children().attr("src",curImg);
}

function createCookie(name,val,expDays) {
	// Check if the user accept to store cookies, and if he did it, store the cooky. 
	if(acceptedCookies == "true") {
		if (expDays > maxNbDayForCookie) {
			expDays = maxNbDayForCookie;
		}
		var expireDate = new Date();
		expireDate.setTime(expireDate.getTime() + expDays*24*3600*1000);
		document.cookie = name + "=" + escape(val) + "; expires=" + expireDate.toGMTString() +"; path=/";
	}
	// Else just keep the cooky in session mode (expire in 0)
	else {
		document.cookie = name + "=" + escape(val) + "; expires=" + 0 +"; path=/";
	}
}
     
function readCookie(name) {
	var st,end;
	st = document.cookie.indexOf(name + "=");
	if (st >= 0) {
		st += name.length + 1;
		end = document.cookie.indexOf(";",st);
		if (end < 0) 
			end = document.cookie.length;
		return unescape(document.cookie.substring(st,end));
	}
	return "";
}

function getCookie(cookie) {
	var name;
	var value;
	var cookies=document.cookie.split(";");
	for(var i=0;i<cookies.length;i++) {
		name=cookies[i].substr(0,cookies[i].indexOf("="));
		value=cookies[i].substr(cookies[i].indexOf("=")+1);
		name=name.replace(/^\s+|\s+$/g,"");
		if (name==cookie){
			return unescape(value);
		}
	}
}

function loadWidgetState(){
	for(var i=0; i < document.cookie.split(';').length; i++){
	   var cooVal = readCookie( (document.cookie.split(';')[i]).split("=")[0] );
	   if( cooVal == 'mini'){
		   minimizeMe( (document.cookie.split(';')[i]).split("=")[0].replace(' ',''),  ("#control_"+((document.cookie.split(';')[i]).split("=")[0]).replace(' ','')), false);
		   //$("#control_"+((document.cookie.split(';')[i]).split("=")[0]).replace(' ','')).click();
	   }
	}
}

function loadLeftMenuState() {
	$(".leftMenuInter a" ).each( function(){
		if(this.id != "" && typeof(this.id) != 'undefined') {
			var cooVal = readCookie( $(this).parent('div').attr('id'));
			if(cooVal == "") {
				if($(this).parent('div').parent('div').next('ul').size() > 0) {
					createLeftMenuCookie(this);	
				}
		   } else if((cooVal == 'miniLeft' && ($(this).attr('class').indexOf('extended') != -1)) || (cooVal == 'maxiLeft' && ($(this).attr('class').indexOf('extended') == -1))){
			   toggleLeftMenu(this);
		   }
		}
	});
}

function advancedSearchFormFreeTextKeyPressed(myfield,e) {
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	else return true;
	
	if (keycode == 13) {
		if($('.focus').length > 0){
			$(myfield).val($('.focus').text());
		}
		return false;
	}
}

function submitQuickSearch(id){
	if($('.focus').length > 0){
		$("#"+id).val($('.focus').text());
	}
}

function quickSearchKeyPressed(myfield,e,id){
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	else return true;
	
	if (keycode == 13) {
		if($('.focus').length > 0){
			$("#"+id).val($('.focus').text());
		}
	}
	return true;
}

function removeQS(el,doNotClean) {
	if(!doNotClean) {
		$(el).val("");
	}
}

function disableFormSubmit(myfield) {
//	myfield.form.setAttribute("onsubmit", "return false;");
	formSubmit = false;
}

function enableFormSubmit(myfield) {
//	myfield.form.setAttribute("onsubmit", "return true;");
	formSubmit = true;
}

function slideDiv(divId){
	smartToogle($("#"+divId));
}

function toggle(id) {
	$("#"+id).toggle();
}

function showTab(el,linkedId, parent){
	var parentEl;
	if(parent!=null)
		parentEl="#"+parent;
	else
		parentEl='body';
		
	
	if($(parentEl+" #"+linkedId).css('display')=='block'){
		$("#"+linkedId).focus();
		return;
	}
	$(parentEl+" .selectedTab").removeClass("selectedTab");
	$(el).addClass("selectedTab");
	$(parentEl+" .tabContent").hide();	
	$(parentEl+" #"+linkedId).show();	
	$("#"+linkedId).focus();
}
function showTabAjax(el, linkedId, parent, forceReload){
	var parentEl;
	var isforceReload = (typeof(forceReload) != 'undefined' && forceReload=='true');
	if(parent!=null)
		parentEl="#"+parent;
	else
		parentEl='body';
	
	if(!isforceReload && $(parentEl+" #"+linkedId).css('display')=='block') {
		hideHourglass();
		$("#"+linkedId).focus();
		return;
	}
	if(!isforceReload && $(parentEl+" #"+linkedId).length > 0) {
		$(parentEl+" .selectedTab").removeClass("selectedTab");
		$(el).addClass("selectedTab");
		$(parentEl+" .tabContent").hide();
		$(parentEl+" #"+linkedId).show();
		hideHourglass();
		$("#"+linkedId).focus();
		return;
	}
	
	if($(el).hasClass("nextSelected")){
		return;
	}else{
		$(parentEl+" .nextSelected").removeClass("nextSelected");
		$(el).addClass("nextSelected");
	}
	
	$.ajax({
		   type: "GET",
		   url: $(el).attr("href") + '&isAjaxRequest=true&widget='+parent,
		   success: function(msg){
				if(isforceReload) {
					$("#"+parent+" .allTabs .tabContent").remove();
				}
				$(parentEl+" .selectedTab").removeClass("selectedTab");
				$(el).addClass("selectedTab");
				$(parentEl+" .tabContent").hide();
				$("#"+parent+" .allTabs").append(msg);
				hideHourglass();
				$("#"+linkedId).focus();
		   }
		});
}
function toggleLeftMenu(el,fromLink){
	var toogle = toggleLeftMenuNoImg(el,fromLink);
	if(toogle && $(el).children('img').attr('src') != null) {
		if( $(el).children('img').attr('src').indexOf('extended') > 0) {
			$(el).children('img').attr('src',imageMap['collapse-menu-tree']);
		}
		else {
			$(el).children('img').attr('src',imageMap['expand-menu-tree']);
		}
	}
}

function toggleLeftMenuNoImg(el,fromLink) {
	var toogle = false;
	$(el).parent('div').children('a').each(
			function() {
				if(fromLink) {
					if($(this).attr('class') == null || $(this).attr('class').indexOf('extended') == -1) {
						$(this).toggleClass('extended');
						toogle = true;
					}
				} else {
					$(this).toggleClass('extended');
					toogle = true;
				}
			}
	);
	if(toogle) {
		smartToogle($(el).parent('div').parent('div').next('ul'));
	}
	return toogle;
}

function createLeftMenuCookie(el){
	if(($(el).attr('class') == null) || ($(el).attr('class').indexOf('extended') == -1)) {
		createCookie($(el).parent('div').attr('id'),'miniLeft',30);
	}
	else {
		createCookie($(el).parent('div').attr('id'),'maxiLeft',30);
	}
}

function toggleAndSaveLeftMenu(el,fromLink) {
	toggleLeftMenu(el,fromLink);
	createLeftMenuCookie(el);
}

function createDocPartCookie(el){
	if($(el).children('img').first().attr('src').indexOf('mini') > -1)
		createCookie(el.id,'maxiDoc',30);
	else
		createCookie(el.id,'miniDoc',30);
}

function loadDocState(){
	for(var i=0; i < document.cookie.split(';').length; i++){
	   var cooVal = readCookie( (document.cookie.split(';')[i]).split("=")[0] );
	   if( cooVal == 'miniDoc'){
		   toggleNextElement( "#"+(document.cookie.split(';')[i]).split("=")[0].replace(/ /g,''));
	   }
	}
}

function transfertQuery(el){
	$("#"+el.id).effect("transfer", { to: $("#nbQuery") }, 1000);
}
function transfertRSS(el){
	$("#"+el.id).effect("transfer", { to: $("#nbRSSFeeds") }, 1000);
}
function toggleRelativeAbsolute(elId){
	if($("#"+elId).css('position') == 'relative')
		$('#'+elId).css({position:'absolute',left:'-9855em'});
	else
		$('#'+elId).css({position:'relative',left:'auto'});
}
function toggleNextHElement(el){
	$(el).toggleClass('collapsed');
	smartToogle($(el).parent('h3').next());
}
function toggleNextElement(el){
	smartToogle($(el).parents('.boxTitle').first().next('.tabContent'));
	if($(el).children('img').first().attr('src') != null) {
		if ($(el).children('img').first().attr('src').indexOf('mini') > -1) {
			$(el).children('img').first().attr('src', imageMap['box-maximize']);
			$(el).children('img').first().attr('alt', '+');
		} else {
			$(el).children('img').first().attr('src', imageMap['box-minimize']);
			$(el).children('img').first().attr('alt', '-');
		}
	}
}
function loadAdvancedSearchState(){
	for(var i=0; i < document.cookie.split(';').length; i++){
	   var cooVal = readCookie( (document.cookie.split(';')[i]).split("=")[0] );
	   if( cooVal == 'miniDoc'){
		   toggleAdvancedNextElement( "#"+(document.cookie.split(';')[i]).split("=")[0].replace(/ /g,''),'advancedSearchBox','advancedSearchContent');
	   }
	}
}
function toggleAdvancedNextElement(el,parentClass,contentClass){
	smartToogle($(el).parents('.' + parentClass).children('.'+contentClass));
	if($(el).children('img').first().attr('src') != null) {
		if ($(el).children('img').first().attr('src').indexOf('mini') > -1) {
			$(el).children('img').first().attr('src', imageMap['box-maximize']);
			$(el).children('img').first().attr('alt', '+');
		} else {
			$(el).children('img').first().attr('src', imageMap['box-minimize']);
			$(el).children('img').first().attr('alt', '-');
	}
	}
}
function collapseAll(){
	$('.widgetControl a').each(function() {
		if ($(this).children('img').first().attr('src').indexOf('mini') > -1) {
			$(this).click();
		}
	});
}
function expandAll(){
	$('.widgetControl a').each(function() {
		if ($(this).children('img').first().attr('src').indexOf('maxi') > -1) {
			$(this).click();
		}
	});
}

function collapseAllTree(treeClass){
	$("."+treeClass+" li" ).each( function(){
										if($(this).children('a').first().children('img').first().length > 0 && $(this).children('a').first().children('img').first().attr('src').indexOf('collapse-tree') > -1)
											$(this).children('a').first().click();
										} );	
}

function expandAllTree(treeClass){
	$("."+treeClass+" li" ).each( function(){
										if($(this).children('a').first().children('img').first().length > 0 && $(this).children('a').first().children('img').first().attr('src').indexOf('expand-tree') > -1)
											$(this).children('a').first().click();
										} );	
}

var myToolsTimeout;
function showToolsList(el){
	cancelToolsTimeOut();
	if($('.toolsList').length < 1){
		$("body").append(toolbox);
		$(".toolsList a").mouseover(function(){cancelToolsTimeOut();});
		$(".toolsList a").mouseout(function(){hideToolsListInSec();});
		$(".toolsList").css({top:$('.op-tools').offset().top+26+'px', left:$('.op-tools').offset().left+'px'});
	}
}
function hideToolsListInSec(){
	myToolsTimeout = window.setTimeout(hideToolsList,200);	
}
function hideToolsList(){
	$(".toolsList").remove();
}
function cancelToolsTimeOut(){
	clearTimeout(myToolsTimeout);	
}

function showModal(url, callback, fillUrlCode){
	lastFocusElement = $(':focus');
	
	$("#selectBox").remove();
	//hide <select> useful for ie6
	if(navigator.userAgent.toLowerCase().indexOf("msie 6") > -1){
		var selects = document.getElementsByTagName("select");
		for (var i = 0; i < selects.length; i++) { 
			selects[i].style.visibility ="hidden";
		}
	}
	showHourglass();
	
	if(typeof(fillUrlCode) != 'undefined' && fillUrlCode != '') {
		url = url + fillUrl(fillUrlCode);
	}
	if (sessionExpired && url.match('(.*)\/protected\/(.*)')) {
		var towardUrl = url;
		if (towardUrl.indexOf('/protected') > -1) {
			towardUrl = towardUrl.substring(towardUrl.indexOf('/protected'), towardUrl.length);
		}
		url = authenticationRequiredUrl + '?towardUrl=' + encodeURIComponent(towardUrl) + '&callingUrl=' + encodeURIComponent(pageUrl + '?' + queryString);
	}
	if(url.indexOf('isAjaxRequest=true') == -1) {
		url = url + (url.indexOf('?') == -1 ? '?' : '&') + 'isAjaxRequest=true';
	}
	
	loadModal(url, callback);
}

function showAuthenticationRequiredModal(url, callback){
	lastFocusElement = $(':focus');
	
	$("#selectBox").remove();
	// hide <select> useful for ie6
	if(navigator.userAgent.toLowerCase().indexOf("msie 6") > -1){
		var selects = document.getElementsByTagName("select");
		for (var i = 0; i < selects.length; i++) { 
			selects[i].style.visibility ="hidden";
		}
	}
	showHourglass();
	
	var towardUrl = url;
	if (towardUrl.indexOf(frontOfficeUrl) > -1) {
		towardUrl = towardUrl.substring(towardUrl.indexOf(frontOfficeUrl) + frontOfficeUrl.length, towardUrl.length);
	}
	
	var callingUrl = pageUrl;
	if(queryString) {
		callingUrl += '?' + queryString;
	}
	
	url = authenticationRequiredUrl + '?towardUrl=' + encodeURIComponent(towardUrl) + '&callingUrl=' + encodeURIComponent(callingUrl);
	if(url.indexOf('isAjaxRequest=true') == -1) {
		url = url + (url.indexOf('?') == -1 ? '?' : '&') + 'isAjaxRequest=true';
	}
	
	loadModal(url, callback);
}

function loadModal(url, callback) {
	$("#tempData").load(url+' #mainContainer', function(){ 
		  $("#modalContent").html($("#tempData .ajaxContent"));
		  $("#selectBox>h4").html($("#tempData .ajaxtitle"));
		  $(".hideInModal").css({display:'none'}); $(".onlyJsInline").css({display:'inline'});
		  if(navigator.userAgent.toLowerCase().indexOf('msie 6') > -1) {
			  $('.overflowed').css({'height':screen.height/3+'px'});
		  }
		  else {
			  $('.overflowed').css({'max-height':screen.height/3+'px'});
		  }
		  callFunction(callback);
		  $("#modalContent").focus();
	});
}

function ajaxPostOnModal(url, formId, callback) {
	$("#selectBox").remove();
	//hide <select> useful for ie6
	if(navigator.userAgent.toLowerCase().indexOf("msie 6") > -1){
		var selects = document.getElementsByTagName("select");
		for (var i = 0; i < selects.length; i++) { 
			selects[i].style.visibility ="hidden";
		}
	}
	showHourglass();
	if(url.indexOf('isAjaxRequest=true') == -1) {
		url = url + (url.indexOf('?') == -1 ? '?' : '&') + 'isAjaxRequest=true';
	}
	$.ajax({
		   type: "POST",
		   url: url,
		   data: $('#' + formId).serialize(),
		   success: function(data) {
					$("#tempData").html(data);
					$("#modalContent").html($("#tempData .usermsgInfo"));
					$("#modalContent").append($("#tempData .usermsgSuccess"));
					$("#modalContent").append($("#tempData .usermsgWarning"));
					$("#modalContent").append($("#tempData .usermsgError"));
					$("#modalContent").append($("#tempData .ajaxContent"));
					$("#selectBox>h4").html($("#tempData .ajaxtitle"));
					$(".hideInModal").css({display:'none'}); $(".onlyJsInline").css({display:'inline'});
					if(navigator.userAgent.toLowerCase().indexOf('msie 6') > -1) {
						$('.overflowed').css({'height':screen.height/3+'px'});
					}
					else {
						$('.overflowed').css({'max-height':screen.height/3+'px'});
					}
					$("#tempData").remove();
					callFunction(callback);
					$("#modalContent").focus();
				}
		});
}
function ajaxPost(url, formId) {
	$.ajax({
		   type: "POST",
		   url: url,
		   data: $('#' + formId).serialize()
		 });
}

function showHourglass(noHideOnClick){
	var modalPos = (document.body.clientHeight/10) + $(window).scrollTop()+'px' 
	var modalminWidth = ' min-width:' + 500 + 'px;';
	if(noHideOnClick) {
		$("body").prepend("<div id='tempData' style='display:none'></div><div id='foreground'></div>");
	} else {
		$("body").prepend("<div id='tempData' style='display:none'></div><div id='foreground' onclick='hideModal()'></div>");
	}
	$("body").prepend("<div id='selectBox' class='draggable' style='top:"+modalPos+";"+modalminWidth+"'><h4> </h4><div id='modalContent' tabindex='0'><center>"+pleaseWait+"...<br/><br/><img src='"+ imageMap['ajax-loader'] + "' width='32px' height='32px' /></center></div></div>");
	var screenHeight = document.body.clientHeight;
	var utilHeight = $(".com-footer").offset().top+50;
	if(screenHeight < utilHeight)
		screenHeight = utilHeight;
	$("#foreground").css({height : screenHeight+"px", top:"0px", left:"0px", zIndex:10000}) ;
	if(navigator.userAgent.toLowerCase().indexOf("msie") > -1){
		$("#foreground").css({display:'block'});
		$("#selectBox").css({display:'block'});
	}
	else{
		$("#foreground").fadeIn();
		$("#selectBox").fadeIn();
	}
	$(".draggable").draggable({handle:'h4',cursor: 'move', opacity: 0.9, zIndex: 12700 });
}

function hideHourglass(){
	if(lastFocusElement != null) {
		lastFocusElement.focus();
		lastFocusElement = null;
	}
	
	$("#foreground").remove();
	$("#selectBox").empty(); // Remove all child nodes of the set of matched elements from the DOM.
	$("#selectBox").remove(); // Remove the set from the DOM	
	$("#tempData").remove();
}

function hideModal(){
	hideHourglass();
	if(navigator.userAgent.toLowerCase().indexOf("msie 6") > -1){
		var selects = document.getElementsByTagName("select");
		for (var i = 0; i < selects.length; i++) { 
			selects[i].style.visibility ="visible";
		}
	}
}

function hideModalTemp(){
	$("#foreground").remove();
	$("#selectBox").css({left:'-1500em'});
	$("#tempData").remove();
	if(navigator.userAgent.toLowerCase().indexOf("msie 6") > -1){
		var selects = document.getElementsByTagName("select");
		for (var i = 0; i < selects.length; i++) { 
			selects[i].style.visibility ="visible";
		}
	}
}

function selectAll(chkClass, updateSession, saveSessionPath, sessionContainerId){
	$("."+chkClass).each(function() {
		if(!this.checked) {
			$(this).attr('checked','checked');
			if(updateSession == 'true') {
				updateDocumentToSave(this, saveSessionPath, sessionContainerId);
			}
		}
	});
}
function deselectAll(chkClass, updateSession, saveSessionPath, sessionContainerId){
	$("."+chkClass).each(function() {
		if(this.checked) {
			$(this).removeAttr('checked');
			if(updateSession == 'true') {
				updateDocumentToSave(this, saveSessionPath, sessionContainerId);
			}
		}
	});
}
function toggleFullQuery(el){
	var fullQuery = $(el).next('.fullQuery');
	if($(fullQuery).css('display') == 'none') {
		 $(el).html(hideQueryLabel);
		 fullQuery.show();
	 }
	 else {
		 $(el).html(viewQueryLabel);
		 fullQuery.hide();
	 }
}

function checkChildrenBoxes(el){
	if(el.checked) {
		$(el).parent("li").find("input").each( function(){ if(!this.disabled) { 
			$(this).attr('checked','checked');
			synchroChk(this);
		}
		} );
	}
	else {
		$(el).parent("li").find("input").each( function(){  if(!this.disabled) {
			$(this).removeAttr('checked');
			synchroChk(this);
			}} );			
	}
}

function uncheckParentBox(el){
	if(!el.checked){
		var input = $(el).parent("li").parent("ul").parent("li").children("input");
		$(input).attr('checked','');
	}
}

function showHelpBubble(forLabel,inpType){
	/*var label = $("label[for='"+forLabel+"'][class!='hidden']");
	var img = "<img src='"+imageMap['images']+"help-bub.png' alt='Help' class='helpBubble' onmouseover='cancelRemove(); showMyTooltip(this,\""+forLabel+"\")' onmouseout='hideMyTooltip()' />"
	removeHelpBubble();
	if(inpType == 'checkbox')
		label.after(" "+img);
	else
		label.before(img+" ");*/
	
	// Variables for the bubble size
	var bubbleWidth = 16;
	var bubbleHeight = 16;
	
	if (forLabel.lastIndexOf('_disabled')>=0) {forLabel=forLabel.substring(0,forLabel.lastIndexOf('_disabled'));}
	var forLabelTmp = forLabel; 
	if (forLabel.indexOf('__')>=0) {
		forLabelTmp=forLabel.substring(0,forLabel.indexOf('__'));
	}
	var label = $("label[for='"+forLabel+"'][class!='hidden']");
	if ($(label).position() == null) {return;}

	// If the label used as for is hidden at the top of the page
	if ($(label).hasClass("screenreaderNoDisplay")) {
		var input = $("input#"+forLabel);
		// If it is not an input, test if it's a textarea
		if ($(input).position() == null) {
			var textarea = $("textarea#"+forLabel);
			if ($(textarea).position() == null) {return;}
			var x = Math.floor($(textarea).position().left - (bubbleWidth+4));
			var y = Math.floor($(textarea).position().top);
		} else {
			var x = Math.floor($(input).position().left - (bubbleWidth+4));
			var y = Math.floor($(input).position().top + (($(input).outerHeight(true))/2 - bubbleHeight/2));
		}
	} else {
		var x = $(label).position().left-(bubbleWidth+2);
		var y = $(label).position().top-1;
		if($(label).parents().hasClass('boxRadioContainer') || $(label).parents().hasClass('boxRadioLineContainer')) {
			if(!$(label).parents().hasClass('allTabs') && $(label).parents().hasClass('labelAbove') && !$(label).hasClass('bubble')){
				x = 4;
			} else if ($(label).parents().hasClass('boxRadioLineContainer')) {
				x = x - (bubbleWidth+2);
			}
		} else if($(label).hasClass('rightHelp')){
			x = x + (bubbleWidth+2) + $(label).outerWidth(true)+4;
		} else if(inpType == 'checkbox'){
			x = x - (bubbleWidth+2) - 2;
		} else if (!$(label).hasClass('likeLabel') && $(label).parents().hasClass('labelAbove')) {
			y = y + 1;
		}
	}
	
	var img = "<img style='position:absolute; left:"+x+"px; top:"+y+"px;' src='"+imageMap['help-bub']+"' alt='"+altHelp+"' class='helpBubble imgWithHover' onmouseover='cancelRemove(); showMyTooltip(this,\""+forLabelTmp+"\")' onmouseout='hideMyTooltip()' />"
	removeHelpBubble();
	label.after(img);
}
function removeHelpBubble(){
	$(".helpBubble").remove();
}


/* AJAX Tree */
function loadNextLevel(el, path, queryString, callback){
	
	$.ajax({
	   type: "GET",
	   url: path,
	   data: queryString + "&isAjaxRequest=true",
	   success: function(msg){
		 $(el).parent('li').append(msg);
		 callFunction(callback);
	   }
	});
	
	if($(el).attr('nodeName').toLowerCase() == 'a') {
		if( $(el).children('img').attr('src').indexOf('expand') > 0)
			$(el).children('img').attr('src',imageMap['collapse-tree']);
		else
			$(el).children('img').attr('src',imageMap['expand-tree']);
	}
	else if($(el).attr('nodeName').toLowerCase() == 'input') {
		if( $(el).attr('src').indexOf('expand') > 0)
			$(el).attr('src',imageMap['collapse-tree']);
		else
			$(el).attr('src',imageMap['expand-tree']);
	}
	
	$(el).attr('onclick','');
	$(el).click(function() {
						toggleNextTreeLevel(this); return false;
	});
	return false;
}

function toggleNextTreeLevel(el){
	if($(el).parent('li').children('ul').length > 0){
		smartToogle($(el).parent('li').children('ul')); 
		if($(el).attr('nodeName').toLowerCase() == 'a') {
			if( $(el).children('img').attr('src').indexOf('expand') > 0)
				$(el).children('img').attr('src',imageMap['collapse-tree']);
			else
				$(el).children('img').attr('src',imageMap['expand-tree']);
		}
		else if($(el).attr('nodeName').toLowerCase() == 'input') {
			if( $(el).attr('src').indexOf('expand') > 0)
				$(el).attr('src',imageMap['collapse-tree']);
			else
				$(el).attr('src',imageMap['expand-tree']);
		}
	}
}

function fillHierarchyTree() {
	var idValues = $("#idValues").val();
	var el = $("#" + idValues);
	var children = el.children();
	children.each(function(){
		var id = this.value;
		var chk = $("input[value='"+id+"']"); 
		$(chk).attr('checked','checked');
		selectHierarchyValue(document.getElementById("chk_"+id));
	})
}

function switchDirectoryOfCaseLaw(id, value) {
	$("#" + id).attr('onclick', '').unbind('click');
	
	if(value == 'RJ') {
		$("#" + id).click(function() {
			showModal('next-tree-level.html?fromId=directoryCaseLawCode&fillType=fillHierarchyForm&code=RJ_1_CODED', 'fillHierarchyTree()', 'RJ,generatedHierarchyValues_DirCaseLaw'); return false;
		});
	}
	else{
		$("#" + id).click(function() {
			showModal('next-tree-level.html?fromId=directoryCaseLawCode&fillType=fillHierarchyForm&code=RJ_NEW_1_CODED', 'fillHierarchyTree()', 'RJ,generatedHierarchyValues_DirCaseLaw'); return false;
		});
	}
}

function filterAdvancedSearch() {
	var filter = $("#advancedFilter").val();
	var fromId = $("#fromId2").val();
	var qId = $("#qid2").val();
	var code = $("#code2").val();
	var idValues = $("#idValues2").val();
	var labelId = $("#labelId2").val();
	var oneElementPickField = $("#oneElementPickField2").val();
	var subdomain = $("#subdomain2").val();
	
	var href = $("#filterForm").attr('action') + "&isAjaxRequest=true&filter=" + encodeURI(filter) + "&labelId=" + labelId + "&fromId=" + fromId + "&code="+code+"&idValues="+idValues+"&oneElementPickField="+oneElementPickField+"&subdomain="+subdomain;
	if(typeof(qId)!='undefined') {
		href = href + "&qid=" + qId;
	}
	$("#referenceDataValues").empty();
	if(!$("#filter").children().last().is("img")){
		$("#filter").append('<img class=\"ajaxLoader\" align=\"top\" id=\"loadingImg\" src=\"' + imageMap['ajax-loader-small'] + '\"/>');
	}
	$("#referenceDataValues").load(href, 
		function() {
			fillSelectedHierarchyValue();
			$("#filter #loadingImg").remove();
		});
	$("#referenceDataValues").fadeIn();
}

function fillUrl(code) {
	var tab = code.split(",");
	var el = $("#" + tab[1]);
	var children = el.children();
	var idValues = "&idValues="+tab[1];
	if(tab.length >= 3) {
		idValues = idValues + "&labelId="+tab[2];
	}
	var data = "&values=";
	var flag = false;
	var metadataCode = tab[0];
	children.each(function(){
		if(this.value.indexOf(metadataCode) == 0) {
			flag = true;
			var tabValueIndex = this.value.indexOf("--");
			var checkedValue = this.value.substring(tabValueIndex + 2);
			data = data + checkedValue + ";";
		}
	})
	if(flag == true) {
		return idValues+data.substring(0, data.length-1);
	}
	else return idValues;
}

function selectHierarchyValue(checkbox) {
	if (checkbox) {
		if (checkbox.checked) {
			if ($('#selectedValues input[id='+checkbox.id+']').length == 0) { // avoid duplicate entries for same id (i.e. Eurovoc)
				$("#selectedValues").append("<input type='checkbox' id='"+checkbox.id+"' value='"+checkbox.value+"' checked='checked'></input>");
				var label = $('label[for='+checkbox.id+']').first().text();

				$("#selectedValues").append("<label for='"+checkbox.id+"'>"+label+"</label>");
			}
		} else {
			if ($("#referenceDataValues input[id='"+ checkbox.id +"']:checked").length == 0) {
				$("#selectedValues input[id='"+ checkbox.id +"']").remove();
				$("#selectedValues label[for='"+ checkbox.id +"']").remove();
			}
		}
	}
}

function fillSelectedHierarchyValue() {
	$("#selectedValues input[type='checkbox']").each(function(){ 
		if(this.checked) {
			var chk = $("input[id='"+this.id+"']"); 
			$(chk).attr('checked','checked');
		}
	});
}

function fillSimplePickField(value) {
	var fromID = $("#fromId").val();
	$("#"+fromID).val(value);
	hideModal();
	return false;
}

function fillEurovocForm_js(){
	var val="";
	var fromID = $("#fromId").val();
	var idValues = $("#idValues").val();
	var prefix = ($("#prefix").val());
	
	if ($("#"+fromID).attr('nodeName').toLowerCase() == 'input'){
		var array = [];
		$("#selectedValues input[type='checkbox']").each(function(){ 
			if(this.checked) {
				var labelVal = $('#selectedValues label[for='+this.id+']').text();
				var indexNt = labelVal.indexOf('NT'); 
				if(indexNt != -1) {
					var indexSpace = labelVal.indexOf(' ');
					labelVal = labelVal.substring(indexSpace + 1);
				}
				if($.inArray(labelVal, array) == -1) {
					array.push(labelVal);
				}
			}
		})
		
		// surround label with double quotes
		for (var i=0; i<array.length; i++) {
			val += "\"" + array[i] + "\"; ";
		}
		val = val.substring(0, val.length -2);
		$("#"+fromID).val(val);
		
		var options = $("#"+idValues + " option[value*='"+prefix+"']");
		options.remove(); 
		$("#selectedValues input[type='checkbox']").each(function(){ 
			if(this.checked) {
				var tabValueIndex = this.value.indexOf("--");
				var checkedValue = this.value.substring(tabValueIndex + 2);
				if ($('#'+idValues+' option[value='+this.value+']').length == 0) { // avoid duplicate entry with same id (i.e. Eurovoc)
					$("#"+idValues).append("<option value='"+ this.value +"' selected='selected'></option>");
				}
			}
		})
	}
	hideModal();
}

function fillHierarchyFormInsCited_js(){
	var checked = false;
	$(".ajaxContent input[type='checkbox']").each(function(){ 
		if(this.checked) {
			checked = true; 
			return false;
		}
	})
	fillHierarchyForm_js();
	if(checked) {
		$("#instrumentCitedTreaties").attr('checked','checked');
	}
}

function fillSummaryCodeForm_js(){
	fillHierarchyForm_js();
}

function fillHierarchyForm_js(){
	var val="";
	var fromID = $("#fromId").val();
	var idValues = $("#idValues").val();
	var prefix = ($("#prefix").val());
	
	if($("#"+fromID).attr('nodeName').toLowerCase() == 'textarea') {
		$("#selectedValues input[type='checkbox']").each(
				function(){ if(this.checked) val += $('#selectedValues label[for='+this.id+']').text() +"\r\n"; })
		val = val.substring(0, val.length -2);
		$("#"+fromID).val(val);	
	}
	else if ($("#"+fromID).attr('nodeName').toLowerCase() == 'input'){
		var options = $("#"+idValues + " option[value*='"+prefix+"']");
		options.remove(); 
		$("#selectedValues input[type='checkbox']").each(function(){
			if(this.checked) {
				var tabValueIndex = this.value.indexOf("--");
				var checkedValue = this.value.substring(tabValueIndex + 2);
				val += $('#selectedValues label[for='+this.id+']').text()+"; ";
				//val += getHierarchySelectedValue(checkedValue)+"; ";
				$("#"+idValues).append("<option value='"+ this.value +"' selected='selected'></option>")
			}
		})
		val = val.substring(0, val.length -2);
		$("#"+fromID).val(val);	
	}
	else {
		$("#selectedValues input[type='checkbox']").each(function(){ if(this.checked) val += this.value+"; "; })
		val = val.substring(0, val.length -2);
		$("#"+fromID).text(val);	
	}
	$("#"+fromID).change();
	hideModal();
}

function fillHierarchyFormAuthorEli_js(){
	fillHierarchyForm_js();
}

function clearHierarchyForm_js() {
	$("#selectedValues").empty();
	$(".ajaxContent input[type='checkbox']").each(
		function(){
			this.checked = false;
		}
	);
}

function getHierarchySelectedValue(el) {
	var tab = el.split(",");
	return tab[tab.length - 1];
}

function fillForm(){
	var val="";
	var fromID = $("#fromID").val();
	$(".ajaxContent input[type='checkbox']").each(function(){ if(this.checked) val += this.value+"; "; })
	val = val.substring(0, val.length -2);
	if ($("#"+fromID).attr('nodeName').toLowerCase() != 'input'){
		$("#"+fromID).text(val);	
	}
	else{
		$("#"+fromID).val(val);	
	}
	
	hideModal();
}

function fillElement(){
	var val="";
	var fromID = $("#fromId").val();
	$(".ajaxContent input[type='checkbox']").each(function(){ if(this.checked) val += this.value+"; "; })
	val = val.substring(0, val.length -2);
	$("#"+fromID).html(val);
	hideModal();
}
var baseHref;
function updateHref(el, chkClass, link){
	if(!baseHref) {
		baseHref = $(el).attr('href');
	} 
	var suite = "";
	$("."+chkClass).each( function(){ 
								   if(this.checked) {
									   var id = this.value.replace(':', '_');
									   var fullUrl = $("#"+id).attr('name');
									   if (fullUrl == '') {
										   var str = link.replace(/{v}/g, this.value);
										   suite= suite + encodeURIComponent(str) + "%0A";
									   } else {
										   suite= suite + encodeURIComponent(fullUrl) + "%0A";
									   }
								   }
								   } );
	var href = baseHref + "%0A" + suite;
	$(el).attr('href', href);
}

function updateHrefLink(el, chkClass, queryString){
	var suite = "";
	$("."+chkClass).each( function(){ 
								   if(this.checked)
								   		suite+=this.value+",";
								   } );
	suite = suite.substr(0, suite.length-1);
	var href = $(el).attr('href');
	if (href.indexOf('?') > -1) {
		href = href.substr(0, href.indexOf('?') + 1);
	} else {
		href = href + '?';
	}
	$(el).attr('href', href + queryString + suite);
}

function setMaxHeightForHistoric(){
	var offTop = $("#middleColumn").offset().top;
	var screenHeight = $(window).height();
	var maxH = screenHeight - offTop;
	$("#middleColumn").css({'overflow-y':'scroll', 'height':maxH+170 +'px'});
	$(".descEvent").css({'width':'99.9%'});
	
	
}

function loadMetadataCheckBoxes(){
	 $("input[id^='advanced']").each( function(){
	            synchroChk(this); 
	            
    });
}

function collapseAdvancedEmptyMetadataGroup(){
	// ELX-1364
	$("#tabs-5 .simpleJsTree a.expandLink").each(function() {
		var ulElement = $(this).parent('li').find('ul:first');
		// verify if there are checked boxes for that category
		var nbChecked = ulElement.parent('li').find('input:checked').size();
		if (nbChecked == 0 && ulElement.is(':visible')) {
			// collapse empty categories
			$(this).click();
		}
	});
}

function synchroChk(el){
	var typ = 'advanced';
	if( (el.id).indexOf('advanced') > -1 )
		typ='simple';
	if (el.checked){
		$("#"+typ+(el.id).substring( (el.id).indexOf('_'), (el.id).length )).attr('checked','checked');
	}
	else{
		$("#"+typ+(el.id).substring( (el.id).indexOf('_'), (el.id).length )).attr('checked','');
		uncheckParentBox(el);
		uncheckParentBox($("#"+typ+(el.id).substring( (el.id).indexOf('_'), (el.id).length )));
	}
}

function loadMetadataCheckBoxesSimple(){
	 $("input[id^='simple']").each( function(){
	            synchroChk(this); 
	            
   });
}

function switchDomainSelection(){
	 $("input[id^='chkMultiple']").each( function(){
		 if (this.checked){
				$("#"+this.id).attr('checked','');
			}
         
	 });
	$("#multipleDomain, #normalDomain").toggle();
}
function switchTextSearch(option){
	if(option == "more") {
		$("label[for='fullText']").html(allTheseWordsLabel);
	}
	else {
		$("label[for='fullText']").html(fullTextLabel);
	}
	$("#moreTextSearch, #normalTextSearch").toggle();
}

function switchDateChoice(){
	var publicationDate = document.getElementsByName("exDate")[0];
	var publicationDateChoice = document.getElementsByName("dateChoice")[0];
	var fromPublicationDate = document.getElementsByName("fromDate")[0];
	var toPublicationDate = document.getElementsByName("toDate")[0];
	var tt = $(fromPublicationDate).next().children('img');
	
	if(!publicationDateChoice.checked){
		//disable exact publication date
		publicationDate.disabled = "disabled";
		publicationDate.value = "";
		//publicationDate.className = "field blueBg disabled";
		$(publicationDate).next('a').css({visibility:'hidden'}); // hide datepicker img
		
		//enable from/to Date
		fromPublicationDate.disabled = "";
		toPublicationDate.disabled = "";
		
		$(fromPublicationDate).next('a').css({visibility:'visible'}); // hide datepicker img
		$(toPublicationDate).next('a').css({visibility:'visible'}); // hide datepicker img
	}
	else{
		//disable exact publication date
		publicationDate.disabled = "";
		//publicationDate.className = "field blueBg disabled";
		$(publicationDate).next('a').css({visibility:'visible'}); // hide datepicker img
		
		//enable from/to Date
		fromPublicationDate.disabled = "disabled";
		toPublicationDate.disabled = "disabled";
		fromPublicationDate.value = "";
		toPublicationDate.value = "";
		
		$(fromPublicationDate).next('a').css({visibility:'hidden'}); // hide datepicker img
		$(toPublicationDate).next('a').css({visibility:'hidden'}); // hide datepicker img
	}
}

function addFavorite(url,name,errorUrl){
	var callback = this.rel;
	url = removeAttributes(url,'qid,rid');
	if(name==null || url==null){
		showModal(encodeURI(errorUrl),callback);
		return;
	}
	if (url != null && url.indexOf("http:") < 0){
		showModal(encodeURI(errorUrl),callback);
		return;
	}
	if(window.external && !window.sidebar && navigator.userAgent.toLowerCase().indexOf('chrome')< 0) { // add IE favorite
		external.AddFavorite(url,name);
	} else if(window.sidebar && sidebar.addPanel && navigator.userAgent.toLowerCase().indexOf('chrome')< 0) { // add to FF bookmarks
		sidebar.addPanel(name,url,'');
	} else {   // unknown browser: report user
		showModal(encodeURI(errorUrl),callback);
	}
}

var dateL = 0;
function addDateLine(el){
	dateL++;
	$(el).before("<hr class='clear' style='border:0; border-top:1px solid #cfe4ff'/>"+(dateLineTemplate).replace(/dateType/g,'dateType'+dateL).replace(/dateChoice/g,'dateChoice'+dateL).replace(/exactDateChoice/g,'exactDateChoice'+dateL).replace(/rangeDateChoice/g,'rangeDateChoice'+dateL).replace(/fromDate/g,'fromDate'+dateL).replace(/toDate/g,'toDate'+dateL).replace(/exDate/g,'exDate'+dateL).replace(/targetDate/g,'targetDate'+dateL));
}

function loadDynamicPart(arr){
	var destID ="";
	var urlToLoad="";
	for (var i=0; i<arr.length; i++){
		destID=arr[i][0];
		urlToLoad=arr[i][1];
		$("#"+destID).load(urlToLoad);
	}
}

function eurlexDcsMultiTrack() {
	if(isWebTrendsEnabled == "true") {
		var tab = eurlexDcsMultiTrack.arguments;
		var args = "dcsMultiTrack(";
		for(i = 0; i < tab.length; i++) {
			args = args + "'" + tab[i] + "'";
			if(i < tab.length - 1) {
				args = args + ",";
			}
		}
		args = args + ")";
		eval(args);
	}
}

function updateDocumentToSave(ob, qid, url) {
	var arg;
	if(ob.checked) {
		arg = "action=addDocToSave";
	}else {
		arg = "action=removeDocToSave"
	}
	arg = arg + "&legalContentId=" + ob.value + "&" + qid + "&isAjaxRequest=true";
	$.ajax({
		   type: "GET",
		   url: url,
		   data:arg,
		   success: function(msg){
		   }
		});
}

Date.prototype.toSimpleString=function(){
	return this.getDate()+'/'+(this.getMonth()+1 < 10 ? '0':'')+(this.getMonth()+1)+'/'+this.getFullYear();
}

function toggleTable(id,el) {
	smartToogle('#'+id);
	if($(el).children('img').first().attr('src') != null) {
		if ($(el).children('img').first().attr('src').indexOf('mini') > -1) {
			$(el).children('img').first().attr('src', imageMap['box-maximize']);
			$(el).children('img').first().attr('alt', '+');
		} else {
			$(el).children('img').first().attr('src', imageMap['box-minimize']);
			$(el).children('img').first().attr('alt', '-');
		}
	}
}

function collapseAllTable() {
	$("a[id^='toggleTHead']").each(function() {
		if($(this).children('img').first().attr('src').indexOf("minimize")>-1) {
			$(this).click();
		}
	});
}

function expandAllTable() {
	$("a[id^='toggleTHead']").each(function() {
		if($(this).children('img').first().attr('src').indexOf("maximize")>-1) {
			$(this).click();
		}
	});	
}
function selectRadioButton(id,el) {
	if(($(el).attr('nodeName').toLowerCase() == 'input' && el.value != '' & typeof(el.value) != 'undefined') || ($(el).attr('nodeName').toLowerCase() == 'select' && el.value != 'ALL')){
		$("#"+id).attr('checked','checked');
	}
}
var radioStatus;
function selectRadioButtonGlobal(id,el) {
	if(($(el).attr('nodeName').toLowerCase() == 'input' && el.value != '' & typeof(el.value) != 'undefined') || ($(el).attr('nodeName').toLowerCase() == 'select' && el.value != 'ALL')){
		if(el.value != radioStatus) {
			$("#"+id).attr('checked','checked');
		}
	}
}
function uncheckSelection() {
	$('input[id^="selectedDocument"]').each(function() {
		$(this).removeAttr("checked");
	});
}

function checkDocuments(el, saveSessionPath, sessionContainerId){
	$('input[id^="selectedDocument"]').each(function() {
		if(el.checked) {
			if(!this.checked) {
				$(this).attr('checked','checked');
				updateDocumentToSave(this, saveSessionPath, sessionContainerId);
			}
		} else {
			if(this.checked) {
				$(this).removeAttr("checked");
				updateDocumentToSave(this, saveSessionPath, sessionContainerId);
			}
		}
	});
}

function toggleHistoricalElements(el,id) {
	$("#"+id).children("span[id^='expElement_']").each(
			function() {
				var classEl = $(this).attr('class');
				if(classEl.indexOf('extended')>-1) {
					$(this).attr('style','display:none');
					$(this).attr('class', 'hideInJsInline');
				} else {
					$(this).attr('style','display:inline');
					$(this).attr('class', classEl + ' extended');
				}
			}
	);
	if($(el).children('img').attr('src') != null) {
		if( $(el).children('img').attr('src').indexOf('maximize') > -1) {
			$(el).children('img').attr('src',imageMap['box-minimize']);
			$(el).children('img').attr('alt', '-');
		}
		else {
			$(el).children('img').attr('src',imageMap['box-maximize']);
			$(el).children('img').attr('alt', '+');
		}
	}
}

function collapseAllHistoricalElements() {
	$("a[id$='HistProcHref']").each(function() {
		if($(this).children('img').first().attr('src').indexOf("minimize")>-1) {
			$(this).click();
		}
	});
}

function expandAllHistoricalElements() {
	$("a[id$='HistProcHref']").each(function() {
		if($(this).children('img').first().attr('src').indexOf("maximize")>-1) {
			$(this).click();
		}
	});	
}

function submitPaging(el, nbreOfPage) {
	try {
		if($(el).val() == '') {
			$(el).attr('class', 'paging');
			return;
		}
		var currentPage = parseInt($(el).val());
		if(parseFloat($(el).val()) != currentPage || isNaN(currentPage) || endWith($(el).val(), '.')) {
			$(el).attr('class', 'paging pagingError');
			return false;
		}
		var maxPage = parseInt(nbreOfPage);
			if(currentPage > maxPage || currentPage == 0) {
				$(el).attr('class', 'paging pagingError');
				return false
			} else {
				$(el).attr('class', 'paging');
				return true;
			}
	} catch (e) {
		$(el).attr('class', 'paging pagingError');
		return false;
	}
}

function checkNumeric(e) {
    var k = e.keyCode;
    if( e.which ){
    	k = e.which;        
    }
    if(k != '48' && k != '49' && k != '50' && k != '51' && k != '52' && k != '53' && k != '54' && k != '55' && k != '56' && k != '57'
    	&& k != '13' && k != '8' && k != '37' && k != '39' && k != '9' && k != '46'){
        if(e.preventDefault) {
        	e.preventDefault();
        }
        else {
        	event.returnValue = false;
        }
    }
}

function checkPaging(el, nbreOfPage) {
	try {
		if($(el).val() == '') {
			$(el).attr('class', 'paging');
			return;
		}
		var currentPage = parseInt($(el).val());
		if(parseFloat($(el).val()) != currentPage || isNaN(currentPage) || endWith($(el).val(), '.')) {
			$(el).attr('class', 'paging pagingError');
			return;
		}
		var maxPage = parseInt(nbreOfPage);
			if(currentPage > maxPage || currentPage == 0) {
				$(el).attr('class', 'paging pagingError');
			} else {
				$(el).attr('class', 'paging');
			}
	} catch (e) {
		$(el).attr('class', 'paging pagingError');
	}
}

function endWith(val, endStr) {
	var lastIndex = val.lastIndexOf(endStr);
	return (lastIndex != -1) && (lastIndex + endStr.length == val.length);
}

// INPUT FILTER
function fadeOut(id) {
	if($("#"+id).is(":visible")) {
		$("#"+id).fadeTo('fast', 0, function() {
			$(this).css({visibility: "hidden"});
	    });
	}
}

function fadeIn(id) {
	if($("#"+id).is(":hidden") || $("#"+id).css("visibility") == 'hidden') {
		$("#"+id).fadeTo('fast', 1, function() {
			$(this).css({visibility: "visible"});
	    });
	}
}

function advancedSearchKeyUp(input, imageId) {
	if ($.trim($("#"+input).val()) == "") {
		hideClearSearchFieldButton(imageId);
	} else {
		showClearSearchFieldButton(input, imageId);
	}
}

function clearAdvancedSearchClick(input, imageId, clearButtonId) {
	hideClearSearchFieldButton(imageId);
	$("#"+input).val('');
	$("#"+clearButtonId).click();
}

function hideClearSearchFieldButton(imageId) {
	fadeOut(imageId);
}

function showClearSearchFieldButton(input, imageId) {
	if ($.trim($("#"+input).val()) != "") {
		fadeIn(imageId);
	}
}
// END INPUT FILTER

function selectAllPreferences(id, select) {
	$('input[id^="'+id+'"]').each(function() {
		if(select == 'true') {
			$(this).attr('checked','checked');
		} else {
			$(this).removeAttr('checked');
		}	
	});
}

function loadTogglePreferences(array, toCollapse) {
	for (var i=0; i<array.length; i++) {
		var cookie = getCookie(array[i]);
		if (cookie == null) {
			if (toCollapse == 'true') {
				createCookie(array[i],'miniDoc',30);
			} else {
				createCookie(array[i],'maxiDoc',30);
			}
		}
	}
}

function instrumentInvolvedChanged(checkBox, input) {
	if (checkBox.checked) {
		$("#"+input).attr('disabled', false);
	} else {
		$("#"+input).attr('disabled', true);
	}
}

// Reset a list of fields to default value.
// @param fields the list of fields to reset
function resetFields(fields) {
	for (i=0;i<fields.length;i++) {
		var field = $("#" + fields[i]);
		if (field.is("select")) { // drop down 
			field.attr('selectedIndex', 0); 
		}
		else if (field.is("input")) { // input field 
			field.attr('value', ''); 	
		}
	}
}

//Enable a list of fields.
//@param fields the list of fields to enable
function enableFields(fields) {
	for (i=0;i<fields.length;i++) {
		var field = $("#" + fields[i]);
		field.attr('disabled', false);
	}
}

//Disable a list of fields.
//@param fields the list of fields to disable
function disableFields(fields) {
	for (i=0;i<fields.length;i++) {
		var field = $("#" + fields[i]);
		field.attr('disabled', true);
	}
}

function initDatePicker(datePicker, locale, buttonImage, buttonText, yearRange, dateFormat) {
	// locale
	$.datepicker.setDefaults($.datepicker.regional[locale]);
	
	// Date picker configuration
	var img = buttonImage + ".png";
	var hover = buttonImage + "-hover.png";

	$(".datepicker.from").datepicker({
		changeMonth: true,
		changeYear: true,
		showOn: "button",
		buttonImageOnly: true,
		buttonImage: imageMap['images'] + img,
		buttonText: buttonText,
		yearRange: yearRange,
		dateFormat: dateFormat,
		numberOfMonths: 2,
		onSelect: function( selectedDate ) {
			if (navigator.userAgent.indexOf('MSIE 7')== -1 && navigator.userAgent.indexOf('MSIE 8')== -1){
				var toValue = $("#" + $(this).attr("id").replace("From", "To")).val();
				var dateFrom = selectedDate.split("/");
				$("#" + $(this).attr("id").replace("From", "To")).datepicker("option", "minDate", new Date(dateFrom[2],dateFrom[1]-1,dateFrom[0]));
				// store and set again the value of the field, otherwise the plugin tries to parse the value when changing an option, fails, and sets the field to the current date
				$("#" + $(this).attr("id").replace("From", "To")).val(toValue);
			}
			$("#" + $(this).attr("id").replace("From", "Range")).click();
			showPlaceholderIfEmpty($(this));
		}
	}).change(function(){
		if (navigator.userAgent.indexOf('MSIE 7')== -1 && navigator.userAgent.indexOf('MSIE 8')== -1){
			var toValue = $("#" + $(this).attr("id").replace("From", "To")).val();
			$("#" + $(this).attr("id").replace("From", "To")).datepicker("option", "minDate", null);
			// store and set again the value of the field, otherwise the plugin tries to parse the value when changing an option, fails, and sets the field to the current date
			$("#" + $(this).attr("id").replace("From", "To")).val(toValue);
		}
		$("#" + $(this).attr("id").replace("From", "Range")).click();
		showPlaceholderIfEmpty($(this));
	}).focus(function(){
		if (navigator.userAgent.indexOf('MSIE 7')!=-1 || navigator.userAgent.indexOf('MSIE 8')!=-1 || navigator.userAgent.indexOf('MSIE 9')!=-1){
			$(this).data('placeholder').addClass('placeholder-hide-except-screenreader');
		}
	});
	$(".datepicker.to").datepicker({
		changeMonth: true,
		changeYear: true,
		showOn: "button",
		buttonImageOnly: true,
		buttonImage: imageMap['images'] + img,
		buttonText: buttonText,
		yearRange: yearRange,
		dateFormat: dateFormat,
		numberOfMonths: 2,
		onSelect: function( selectedDate ) {
		if (navigator.userAgent.indexOf('MSIE 7')== -1 && navigator.userAgent.indexOf('MSIE 8')== -1){
				var fromValue = $("#" + $(this).attr("id").replace("To", "From")).val();
				var dateTo = selectedDate.split("/");
				$("#" + $(this).attr("id").replace("To", "From")).datepicker("option", "maxDate", new Date(dateTo[2],dateTo[1]-1,dateTo[0]));
				// store and set again the value of the field, otherwise the plugin tries to parse the value when changing an option, fails, and sets the field to the current date
				$("#" + $(this).attr("id").replace("To", "From")).val(fromValue);
			}
			$("#" + $(this).attr("id").replace("To", "Range")).click();
			showPlaceholderIfEmpty($(this));
		}
	}).change(function(){
		if (navigator.userAgent.indexOf('MSIE 7')== -1 && navigator.userAgent.indexOf('MSIE 8')== -1){
			var fromValue = $("#" + $(this).attr("id").replace("To", "From")).val();
			$("#" + $(this).attr("id").replace("To", "From")).datepicker("option", "maxDate", null);
			// store and set again the value of the field, otherwise the plugin tries to parse the value when changing an option, fails, and sets the field to the current date
			$("#" + $(this).attr("id").replace("To", "From")).val(fromValue);
		}
			$("#" + $(this).attr("id").replace("To", "Range")).click();
		showPlaceholderIfEmpty($(this));
	}).focus(function(){
		if (navigator.userAgent.indexOf('MSIE 7')!=-1 || navigator.userAgent.indexOf('MSIE 8')!=-1 || navigator.userAgent.indexOf('MSIE 9')!=-1){
			$(this).data('placeholder').addClass('placeholder-hide-except-screenreader');
		}
	});
	
	$("."+datePicker).not(".from, .to").datepicker({
		changeMonth: true,
		changeYear: true,
		showOn: "button",
		buttonImageOnly: true,
		buttonImage: imageMap['images'] + img,
		buttonText: buttonText,
		yearRange: yearRange,
		dateFormat: dateFormat,
		onSelect: function( selectedDate ) {
			$(this).change();
			showPlaceholderIfEmpty($(this));
		}
	}).change(function(){
		$("#" + $(this).attr("id").replace("Exact", "Specific")).click();
		showPlaceholderIfEmpty($(this));
	}).focus(function(){
		if (navigator.userAgent.indexOf('MSIE 7')!=-1 || navigator.userAgent.indexOf('MSIE 8')!=-1 || navigator.userAgent.indexOf('MSIE 9')!=-1){
			$(this).data('placeholder').addClass('placeholder-hide-except-screenreader');
		}
	});
	
	$("[id^=dateSpecific]").click(function() {
		var idValue = $(this).attr("id");
		resetFields([idValue.replace("Specific", "From"), idValue.replace("Specific", "To")]);
		showPlaceholderIfEmpty($("#"+idValue.replace("Specific", "From")));
		$("#" + $(this).attr("id").replace("Specific", "From")).datepicker("option", "maxDate", null);
		showPlaceholderIfEmpty($("#"+idValue.replace("Specific", "To")));
		$("#" + $(this).attr("id").replace("Specific", "To")).datepicker("option", "minDate", null);
	});
	
	$("[id^=dateRange]").click(function() {
		var idValue = $(this).attr("id");
		resetFields([idValue.replace("Range", "Exact")]);
		showPlaceholderIfEmpty($("#"+idValue.replace("Range", "Exact")));
	});
		
	$("img[src$='"+img+"']").hover(function() {
      $(this).attr("src", imageMap['images'] + hover);
	},
	function() {
	      $(this).attr("src", imageMap['images'] + img);
		}
	);	
}

function showPlaceholderIfEmpty(input) {
	if (navigator.userAgent.indexOf('MSIE 7')!=-1 || navigator.userAgent.indexOf('MSIE 8')!=-1 || navigator.userAgent.indexOf('MSIE 9')!=-1){
	    if( input.val() === '' ){
	        input.data('placeholder').removeClass('placeholder-hide-except-screenreader');
	    }else{
	        input.data('placeholder').addClass('placeholder-hide-except-screenreader');
	    }
	}
}

function refreshImage(id, url) {
	$("#"+id).attr("src", url + "?r=" + Math.random());
}

function removeAttributes(url, csvAttributeNames) {
	var attributeNames = csvAttributeNames.split(',');
	var array = url.split("?");
	var pageUrl = array[0];
	var queryString = array[1];
	
	if (queryString && queryString != "") {
		array = queryString.split("&");
		for (var i = array.length - 1; i >= 0; i -= 1) {
	        param = array[i].split("=")[0];
	        if ($.inArray(param, attributeNames) != -1) {
	            array.splice(i, 1);
	        }
	    }
		
		if(array.length >= 1) {
			pageUrl += "?" + array.join("&");
		}
	}
	
	return pageUrl;
}

function checkUploadFileSize(inputId, errorId) {
	var input = document.getElementById(inputId+"_js");
	if(input.files != undefined && input.files[0] != undefined) {
       if(input.files[0].size > maxUploadSize) {
    	   $("#"+errorId).addClass('fieldError');
    	   $("#input-file").append('<span id=\"'+inputId+'.errors\" class=\"fieldHelp red\" style="margin-left:5px;">' + fileTooBigLabel + '</span>');
    	   return false;
       }
    }
	return true;
}


function showAllMneTransposedDir(caller){
	$(caller).hide();
	var curElem = $(caller);
	while(curElem.next().hasClass('hiddenTransposedDir')){
		curElem = curElem.next();
		curElem.show();
	}
	curElem.next().show();
}

function showLessMneTransposedDir(caller){
	$(caller).hide();
	var curElem = $(caller);
	while(curElem.prev().hasClass('hiddenTransposedDir')){
		curElem = curElem.prev();
		curElem.hide();
	}
	curElem.prev().show();
}

function zoom(element, selectDocumentColumnId, cellarId, qid) {
	var spinner = '<img id=\"loadingImg\" class=\"printNone\" src=\"' + imageMap['ajax-loader'] + '\" title=\"' + zoomingTextMetadataLabel + '\" alt=\"' + zoomingTextMetadataLabel + '\" />';
	var rowspan = $('#'+selectDocumentColumnId).attr('rowspan');
	$('#'+selectDocumentColumnId).attr('rowspan', rowspan + 1);
	$('tr.zoomHidden td').first().append(spinner);
	$('tr.zoomHidden').first().removeClass('zoomHidden');
	$.ajax({type: 'GET', 
			url: 'zoom.html', 
			data: { cellarId: cellarId, qid: qid },
			timeout: 90000,
			cache: false,
			success: function(json) {
						if(json) {
							$('tr.zoom td').first().empty();
							$.each(json.zoom, function(izoom, zoom) {
								var onematch = false;
								$.each(zoom.content, function(icontent, content) {
									var value = content.value.replace(/&lt;em&gt;/g,"<em>").replace(/&lt;\/em&gt;/g,"</em>");
									if(!onematch && value) {
										$('tr.zoom td').first().append('<ul><li class=\"zoom-metadata\">' + zoom.metadata + '</li></ul>');
										onematch = true;
									}
									
									if(value){
										$('tr.zoom td ul').last().append('<li lang="' + json.language + '">' + '... ' + value + ' ...' + '</li>');
									}
								});
					        });
						}
						$(element).remove();
						if ($('tr.zoom td').first().text()) {
							$('tr.zoom td').first().addClass('zoomed');
						}  else {
							$('#'+selectDocumentColumnId).attr('rowspan', rowspan);
							$('tr.zoom').first().addClass('hidden');
						}
						$('tr.zoom').first().removeClass('zoom');
						$('a.zoomHidden').first().click(); // next zoom
			},
			error: function() {
				$(element).remove();
				$('tr.zoom td').first().empty();
				$('tr.zoom td').first().append('<ul><li class=\"zoom-metadata\"><span class=\"usermsgError homepageMessage\">' + zoomingErrorLabel + '</span></li></ul>');
				$('tr.zoom td').first().addClass('zoomed');
				$('tr.zoom').first().removeClass('zoom');
				$('a.zoomHidden').first().click(); // next zoom
			}
	});
}
