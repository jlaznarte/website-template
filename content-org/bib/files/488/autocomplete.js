$(document).ready(function() 
    { 	
		$(".autocompleteField").live('keydown', function(e) {
			if(e.keyCode==13){
				if(this.id == 'freetext') {
					updateAutocomplete(this,e,true);
				}
			}
		});
	
		$(".autocompleteField").live('keyup', function(e) {
			if(this.id == 'freetext') {
				updateAutocomplete(this,e,true);
			} else {
				updateAutocomplete(this,e,false);
			}
		});
		$(".autocompleteField").live('blur', function() {
			hideAutocompleteInXSec();
		});
		
		$("textarea#freetext").live('keyup', function(e) {
			if(e.keyCode==13){
				$('#quick-search-submit').click();
			}
		});
	} 
); 

var myTimeout;
var myJSONTimeout;
function updateAutocomplete(el,e,submit){
	if(e.keyCode==16 || e.keyCode==9)
		return false;
	if($(el).val().length > 2){
		if(e.keyCode==38)
			selectPrevious();
		else if(e.keyCode==40)
			selectNext();
		else if(e.keyCode==13){
			if($('.focus').length > 0){
				if(currentMenu != -1){
					$(el).val($('.focus').text());
					if(submit){
						$('#quick-search-submit').click();
					}
				}
				hideAutocomplete();
			}
			/*$(el).parents('form').submit(
				function(){return true;}							
			);
			$(el).parents('form').submit();*/
		}
		else{
			clearTimeout(myJSONTimeout);
			myJSONTimeout = window.setTimeout(function(){
				$.getJSON(formMap['autocomplete'], { searchString: $(el).val(), quickSearch: submit }, function(json){
				if(navigator.userAgent.toLowerCase().indexOf("msie 6") > -1){
					var selects = document.getElementsByTagName("select");
					for (var i = 0; i < selects.length; i++) { 
						selects[i].style.visibility ="hidden";
					}
				}
				if ($('.autocomplete').length < 1)
					$('body').append("<div class='autocomplete'></div>");
				$(".autocomplete").html("");	
				$(".autocomplete").css({width:$(el).innerWidth()+'px', top:$(el).offset().top+$(el).innerHeight()+5+'px', left:$(el).offset().left+'px', zIndex:9999});
				var submitStr = "";
				if(submit) {
					submitStr = "$('#quick-search-submit').click()";
				}
				for (var i=0; i < json.values.length; i++){
					$(".autocomplete").append("<a href='javascript:;' onmouseout=\"$('.focus').attr('class','');\" onmouseover=\"$('.focus').attr('class',''); this.className='focus'; cancelHide()\" onfocus=\"$('.focus').attr('class',''); this.className='focus'; cancelHide()\" onblur=\"this.className=''; hideAutocompleteInXSec()\" onclick=\"updateField(this,'"+el.id+"');"+submitStr+"\">"+json.values[i].text.replace($(el).val(),"<b>"+$(el).val()+"</b>")+"</a>")	
				}
			});}, 500);
			
		}
	}
}

function updateField(el,dest){
	$("#"+dest).val($(el).text());
	$("#"+dest).focus();
	$(".autocomplete").remove();
}
function hideAutocompleteInXSec(){
	myTimeout = window.setTimeout(hideAutocomplete,250);
}
function hideAutocomplete(){
	if(navigator.userAgent.toLowerCase().indexOf("msie 6") > -1){
		var selects = document.getElementsByTagName("select");
		for (var i = 0; i < selects.length; i++) { 
			selects[i].style.visibility ="visible";
		}
	}
	$(".autocomplete").remove();
	currentMenu=-1;
}
function cancelHide(){
	clearTimeout(myTimeout);
}
var currentMenu= -1;
function selectNext(){
	$(".focus").attr('class','');
	if(currentMenu == -1 || currentMenu == $(".autocomplete").children('a').length)
		currentMenu=0;
	$(".autocomplete").children('a')[currentMenu].className='focus';
	currentMenu = currentMenu+1;
}
function selectPrevious(){
	if(currentMenu == -1)
		currentMenu=2;
	currentMenu = currentMenu-2;
	selectNext();
	
}