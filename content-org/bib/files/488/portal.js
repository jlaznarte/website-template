var canDrag=false;
$(document).ready(function(){
	$(".boxTitle").mouseover(function(){canDrag=true;});
	$(".boxTitle").mouseout(function(){canDrag=false;});
    $(".draggable").draggable({handle:'div.boxTitle', cursor: 'move', opacity: 0.35, zIndex: 12700, axis:'y' });
    $('.draggable').bind('dragstart', function(event, ui) {
			if(canDrag){
    		var originalWidth = this.clientWidth+"px";
    		var originalHeight = this.clientHeight+"px";
			
			$("<div id='temp'>&nbsp;</div>").insertBefore("#"+this.id);
    		//set original div to absolute with same height width 
    		$("#"+this.id).css({position:'absolute',width:originalWidth, height:originalHeight});
    		//set height and width for temp div
    		$("#temp").css({display:'block',width:originalWidth, height:originalHeight});
			
			}
    		
    	});
    $('.draggable').bind('dragstop', function(event, ui) {
    		var body100 = document.body.clientWidth / 100;
			var columnId = "C0";
			if($(this).parent("#C1").length > 0)
				columnId = "C1";
    		//choose container
        	/*if(this.offsetLeft < body100 * 33 -100){
        		placeMe(this,"C0");
            }
        	/*else if(this.offsetLeft > body100 * 49){
        		placeMe(this,"c3");
            }
        	else{
        		placeMe(this,"C1");
            }
			*/
			placeMe(this,columnId);

            //replace automatically
        	this.style.left="0px";
        	this.style.top="0px";
        	
        	//little move animation
        	$("#"+this.id).animate({ 
        		left : "10px"                
              }, 75, "swing"  );
        	$("#"+this.id).animate({ 
        		left : "-10px"                
              }, 75, "swing"  );
        	$("#"+this.id).animate({ 
        		left : "0px"                
              }, 75, "swing"  );

            //Keep the draggable attribute after drag stop
        	$(".draggable").draggable({ cursor: 'crosshair', opacity: 0.35, zIndex: 2700 });
    		 
  	});
    $('.draggable').bind('drag', function(event, ui) {
    	var body100 = document.body.clientWidth / 100;
		var columnId = "C0";
		if($(this).parent("#C1").length > 0)
			columnId = "C1";
    	/*if(this.offsetLeft < body100 * 33 -100){
        	placeTemp(this,"C0");
		}
		/*else if(this.offsetLeft > body100 * 49){
			placeMe(this,"c3");
		}
		else{
			placeTemp(this,"C1");
		}*/
		placeTemp(this,columnId);
    });
  });
 
    function placeTemp(el,container){
    	// Place the temp div a right place during drag
    	var isPlaced = false;
    	var arrayDiv = $("#"+container+" div.draggable");
     	for(var i=0; i < arrayDiv.length; i++){
     		if(arrayDiv[i].style.display != 'none'){
     			if((el.id != arrayDiv[i].id) && (el.offsetTop < arrayDiv[i].offsetTop + (arrayDiv[i].clientHeight / 3))){
     				$("#temp").insertBefore($("#"+arrayDiv[i].id));
     				isPlaced=true;
     				break;
     			}
     		}
     	}
     	if(!isPlaced)
     		$("#"+container).append($("#temp"));
     	isPlaced=false;
    }
    
    function numberOfElementsChanged(widget, numberOfElements, tab, el) {
		showHourglass();
    	$.ajax({
    		   type: "POST",
    		   url: formMap['homepage'],
    		   data: "action=updateWidgetNumberOfElements&element=" + widget +"&numberOfElements="+numberOfElements,
    		   success: function(msg){
    				showTabAjax(el,tab,widget,'true');
					//hideHourglass();
    		   }
    	 });
    }
    
    function toggleWidgetMinimization(widget) {
    	$.ajax({
    		   type: "POST",
    		   url: formMap['homepage'],
    		   data: "action=toggleWidgetMinimization&element=" + widget,
    		   success: function(msg){
    		   }
    	 });
    }
    
    function placeMe(el,container){
		var isPlaced = false;
		var arrayDiv = $("#"+container+" div.draggable");
	 	for(var i=0; i < arrayDiv.length; i++){
	 		if(arrayDiv[i].style.display != 'none'){
	 			var myCalc = Math.round(arrayDiv[i].clientHeight/3) + arrayDiv[i].offsetTop;
	 			if((el.id != arrayDiv[i].id) && (el.offsetTop < myCalc)){
	 				//reset to default css position, width and height and insert before
	 				$("#"+el.id).css({position:'relative',width:'auto', height:'auto'});
	 				$("#"+el.id).insertBefore($("#"+arrayDiv[i].id));
					isPlaced=true;
	 				break;
	 			}
	 		}
	 	}
	 	if(!isPlaced){
	 		//reset to default css position, width and height and insert after
	 		$("#"+el.id).css({position:'relative',width:'auto', height:'auto'});
	 		$("#"+container).append(el);
	 	}
	 	isPlaced=false;
	 	// Disable temp div
	 	$("#temp").remove();
	 	//alert( "element="+el.id+"&column="+container+"&place="+i);
		$.ajax({
		   type: "POST",
		   url: formMap['homepage'],
		   data: "action=moveWidgets"+"&element="+el.id+"&column="+container+"&place="+i,
		   success: function(msg){
			 //alert( "Data Saved: " + msg );
		   }
	 	});
    }
	 function addWidget(id){
		 var widget = $("#"+id);
		 $("#c1 div:first").prepend(widget);
		 widget.fadeIn();
		 widget.animate({ 
	 		left : "10px"                
	       }, 150, "swing"  );
		 widget.animate({ 
	 		left : "-10px"                
	       }, 150, "swing"  );
		 widget.animate({ 
	 		left : "0px"                
	       }, 150, "swing"  );
	 }
	 
	 function hideMe(el){
		 $("#"+el.id).fadeOut('normal',checkWidgetList);
	 }
	 
	 function hideDivAndShowButton(num){
		 $("#div"+num).fadeOut();
		 $("#buttonW"+num).fadeIn();
	 }
	 
	 function transfertBorder(el,divId){
			$("#"+el.id).effect("transfer", { to: $("#"+divId) }, 500);
		}
	 
	 function checkWidgetList(){
		 var stillWidgetInList = false;
		 var widArray = $(".widgetButton");
		 for(var i=0; i< widArray.length; i++){
			 if(widArray[i].style.display!='none')
				 stillWidgetInList = true;
		 }
		 if(!stillWidgetInList)
			 $('.widgetList').slideToggle();
	 }