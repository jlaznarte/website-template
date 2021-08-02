var EARTH_MAP_TYPE_ID = "earth";

var myLatitude = parseInt(GM_defaultLat);
var myLongitude = parseInt(GM_defaultLng);
var myZoom = parseInt(GM_minZoomLevel);
var myMinZoom = parseInt(GM_minZoomLevel);
var myMaxZoom = parseInt(GM_maxZoomLevel);
var myEmbedAppHeight = parseInt(GM_embedWindowHeight);

function initialize() {
    loadURLArray();
    mapAdvancerSuffix = '-button';
    if ($.isArray(kmlURLs.urls) && kmlURLs.urls.length > 0) {
    	logSCDisplay();
    	
        if (kmlURLs.urls.length > 1) {
            nextIsActive = true;
            position = 1;
            previous = 0;
            next = 2;
            mapCount = kmlURLs.urls.length;
            initMapCountBar();
            initNavigationButtons();
            resizeMapCanvas();
            swapGoogleMap(1);
        } else {
        	loadSingleMap();
        }

        //start refresh timer for expired URLs
        startRefreshTimer();

        //for IE browsers only - 
        //add bottom padding to make room for the horizontal scroll bar
        if ($.browser.msie) $("#inner-frame").css('padding-bottom', '16px');
        try {
        	ELS_showGadget(myEmbedAppHeight);
        } catch(err) {
        	// this is generating a javascript error if not found - 
        	//bypass the error and do nothing
        }
	} else {
		$("#outer-frame").css("display", "none");
		try {
			ELS_hideGadget();
		} catch(err) {
        	// this is generating a javascript error if not found - 
        	//bypass the error and do nothing
		}
	}
}
function initMapCountBar() {
	var ID = formatElementID('map-position-text');
    $(ID).html(position+' of '+kmlURLs.urls.length+' maps');
    ID = formatElementID('map-count-bar');
    $(ID).css('display','inline');
}
function resizeMapCanvas() {
    var ID = formatElementID(MAP_CANVAS_ID);
    $(ID).css("width","100%");
    $(ID).css("height","94%");
    $(ID).css("margin-top", "8px");
}
function initNavigationButtons() {
    setButtons(1);
    var pID = formatMapAdvancerID('prev');
    $(pID).click(function() {
    	logSCUsage('Previous button clicked');
        goBackward(); 
    });
    var nID = formatMapAdvancerID('next');
    $(nID).click(function() {
    	logSCUsage('Next button clicked');
        goForward();
    });
}
function setButtons(pos) {
    position = pos;
    previous = position-1;
    next = position+1;
    setPreviousButton();
    setNextButton();
}
function setPreviousButton() {
	var altText = "";
	var direction = 'prev';
	if (previous > 0) {
		altText = "";
		addHover(direction);
		enableButton(direction);
	} else {
		removeHover(direction);
		disableButton(direction);
	}
	setAltText(direction,altText);
}
function setNextButton() {
	var altText = "";
	var direction = 'next';
	if (next <= mapCount) {
		altText = "";
		addHover(direction);
		enableButton(direction);
	} else {
		removeHover(direction);
		disableButton(direction);
	}
	setAltText(direction,altText);
}
function enableButton(direction) {
    var ID = formatMapAdvancerID(direction);
    $(ID).addClass('button-enabled');
    $(ID).removeAttr('disabled');
    $(ID).fadeTo(0,1);
}
function disableButton(direction) {
    var ID = formatMapAdvancerID(direction);
    $(ID).removeClass('button-enabled');
    $(ID).attr('disabled','disabled');
    $(ID).fadeTo(0,0.5, function() {  });
}
function goBackward() {
	var pos = position-1;
	if (pos > 0) {
		swapGoogleMap(pos);
		setButtons(pos);
	}
    setPositionText(position);
}
function goForward() {
	var pos = position+1;
	if (pos <= mapCount) {
		swapGoogleMap(pos);
		setButtons(pos);
	}
    setPositionText(position);
}
function setPositionText(position) {
	var ID = formatElementID('map-position-text');
    $(ID).html(position+' of '+kmlURLs.urls.length+' maps');
}

window.onload = initialize;
