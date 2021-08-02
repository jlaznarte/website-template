var timeID;
function showMyTooltip(el,msgId){
		$("body").append("<div class='tooltip jstooltip' onmouseover='cancelRemove()' onmouseout='hideMyTooltip()'><img src='"+imageMap['images']+"loading.gif' alt='loading...'/></div>");	
		// Appel ajax pr remplir le tooltip
		$(".jstooltip").load(contextualHelp + " p[rel='"+msgId+"']");	
		$('.jstooltip').css({left:$(el).offset().left+($(el).innerWidth()/1.25)+'px'});
		$('.jstooltip').css({top:$(el).offset().top+$(el).innerHeight()+5+'px'}).fadeIn();
}
function hideMyTooltip(){
	timeID = window.setTimeout(removeTooltip,250);
}
function removeTooltip(){
	$('.jstooltip').remove();
}
function cancelRemove(){
	clearTimeout(timeID);
}