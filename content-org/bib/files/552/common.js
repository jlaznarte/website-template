var MAP_CANVAS_ID = "map-canvas";
var mapAdvancerSuffix;

var HOST = window.location.host;

// url refresh timer vars
var timer;
var timer_is_on=false;

var url = document.referrer.toLowerCase() ; 
var e_url = '' ;
var p = 0 ; 
var p2 = 0 ;
p = url.indexOf("//") ;
e_url = url.substring(p+2) ;
p2 = e_url.indexOf("/") ;
var ELS_GadgetBase = url.substring(0,p+p2+3) + 'science';

var kmlURLs;
var map;
var geoXml;
var kmlLayer;
var defaultViewport;
var position;
var previous;
var next;
var mapCount;
var stopIdleListener=false;

function isObject(object) {
	return (object === null || object === undefined || $.isEmptyObject(object))?false:true;
}
function isEmptyOrBlank(str) {
    return (!str || 0 === str.length || /^\s*$/.test(str));
}
function viewInGoogleEarth(kmlLink) {
	logSCUsage('File downloaded');
	
	setTimeout("window.location = '" + kmlLink + "';", 500);

	//window.location.href = kmlLink;
}
function setAltText(direction,text) {
	var ID = formatMapAdvancerID(direction);
	$(ID).attr('alt',text);
	$(ID).attr('title',text);
}
function removeHover(direction) {
	var ID = formatMapAdvancerID(direction);
	$(ID).removeClass('cursorON');
	$(ID).unbind('mouseenter mouseleave');
}
function addHover(direction) {
	var ID = formatMapAdvancerID(direction);
	$(ID).hover(
        function() { $(this).addClass('cursorON'); }, 
        function() { $(this).removeClass('cursorON'); }
	);
}
function formatMapAdvancerID(direction) {
	return formatElementID(direction + mapAdvancerSuffix);
}
function formatElementID(ID) {
	return '#' + ID;
}
function formatMapCanvasID(position) {
	return "map-canvas-"+position;
}
function loadSingleMap() {
    var ID = formatElementID(MAP_CANVAS_ID);
    loadGoogleMap(ID,kmlURLs.urls[0]);
}
function swapGoogleMap(position) {
    var ID = formatElementID(MAP_CANVAS_ID);
    loadGoogleMap(ID,kmlURLs.urls[position-1]);
}
function loadGoogleMap(containerID,kmlLink) {
    if (parseFloat(GM_apiVersion) < 3.0) {
        loadGoogleMapV2(containerID,kmlLink);
    } else {
        loadGoogleMapV3(containerID,kmlLink);
    }
}
function loadGoogleMapV2(containerID,kmlLink) {
    if (GBrowserIsCompatible()) {
	    var EARTH_MAP_TYPE = new GMapType( [ new GTileLayer(new GCopyrightCollection("Earth"),
		    0, G_NORMAL_MAP.getMaximumResolution()) ], new GMercatorProjection(
		    20), "Earth", {
		    alt : "Show map in Google Earth"
	    });
        map = new GMap2($(containerID)[0],{
            mapTypes : [ G_NORMAL_MAP, G_SATELLITE_MAP, G_HYBRID_MAP, G_PHYSICAL_MAP, EARTH_MAP_TYPE ]
        });
        var prevMapTypeId = G_HYBRID_MAP;
        GEvent.addListener(map, "maptypechanged", function() {
        	var mapTypeId = map.getCurrentMapType();
            if (mapTypeId == EARTH_MAP_TYPE) {
			    map.setMapType(prevMapTypeId);
			    viewInGoogleEarth(kmlLink);;
		    } else {
			    prevMapTypeId = mapTypeId;
            }
        });
        map.setCenter(new GLatLng(myLatitude, myLongitude), myZoom);
        map.addControl(new GLargeMapControl());
        map.addControl(new GScaleControl());
        map.addControl(new GMenuMapTypeControl());
        map.enableContinuousZoom();
        map.enableScrollWheelZoom();
        map.setMapType(G_HYBRID_MAP);
        new GKeyboardHandler(map);
        geoXml = new GGeoXml(kmlLink);
        GEvent.addListener(geoXml, "load", 
            function() {
                var zoomLevel = map.getBoundsZoomLevel(geoXml.getDefaultBounds());
                map.setCenter(geoXml.getDefaultCenter(), determineZoomLevel(zoomLevel));
                var ID = formatElementID(MAP_CANVAS_ID);
                $(ID).css("visibility","visible");
            }
        );
        map.addOverlay(geoXml);
    }
}

function myBaseMapType() { }

function loadGoogleMapV3(containerID,kmlLink) {
	var myLatLng = new google.maps.LatLng(myLatitude, myLongitude);

	myBaseMapType.prototype.tileSize = new google.maps.Size(256,256);
	myBaseMapType.prototype.maxZoom = myMaxZoom;
	
	myBaseMapType.prototype.getTile = function(coord, zoom, ownerDocument) {
	    var div = ownerDocument.createElement('DIV');
	    return div;
	};
	
	myBaseMapType.prototype.name = "Earth";
	myBaseMapType.prototype.alt = "Show map in Google Earth";
	
	var oEarthMapType = new myBaseMapType();

	var myOptions = {
	        center : myLatLng,
			zoom : myZoom,
	        mapTypeId : google.maps.MapTypeId.HYBRID,
	        mapTypeControlOptions : {
	            mapTypeIds : [
	               google.maps.MapTypeId.HYBRID,
	               google.maps.MapTypeId.ROADMAP,
	               google.maps.MapTypeId.SATELLITE,
	               google.maps.MapTypeId.TERRAIN,
	               EARTH_MAP_TYPE_ID
	            ],
	            position : google.maps.ControlPosition.TOP_RIGHT,
	            style : google.maps.MapTypeControlStyle.DROPDOWN_MENU
	        }
	    };

    map = new google.maps.Map($(containerID)[0], myOptions);
    
    map.mapTypes.set(EARTH_MAP_TYPE_ID, oEarthMapType);
    
    var prevMapTypeId = google.maps.MapTypeId.HYBRID;

    google.maps.event.addListener(
        map, 'maptypeid_changed',
        function() {
    	    var mapTypeId = map.getMapTypeId();
    	    if (mapTypeId == EARTH_MAP_TYPE_ID) {
    	    	logSCUsage('Map type changed');
    	    	
    	        map.setMapTypeId(prevMapTypeId);
    	    	viewInGoogleEarth(kmlLink);
            }
    	    else {
        	    prevMapTypeId = mapTypeId;
    	    }
        } 
    );

    kmlLayer = new google.maps.KmlLayer(kmlLink);

    google.maps.event.addListener(
        kmlLayer, 'defaultviewport_changed',
        function(event) {
            var defaultViewportListener = google.maps.event.addListener(
                map, 'bounds_changed',
                function(event) {
                    var ID = formatElementID(MAP_CANVAS_ID);
                    $(ID).css("visibility","visible");
                    defaultViewport = kmlLayer.getDefaultViewport();
                    this.fitBounds(defaultViewport);
                    google.maps.event.removeListener(defaultViewportListener);
                }
            );
        }
    );

    
    google.maps.event.addListener(map, 'dragend', function() {
    	logSCUsage('Map dragged');
    });
    
    google.maps.event.addListener(
        map, 'center_changed',
        function(event) {
        	var centerChangedBoundsListener = google.maps.event.addListener(
        	    map, 'bounds_changed',
        	    function(event) {
        	    	if (isObject(defaultViewport) && this.initialCenter) {
                        var zoom = determineZoomLevel(this.getZoom());
                        this.setZoom(zoom);
        	            var center = defaultViewport.getCenter();
        	            this.setCenter(center);
        	            this.initialCenter = false;
            	        google.maps.event.removeListener(centerChangedBoundsListener);
        	    	}
        	    }
        	);
        }
    );

    google.maps.event.addListener(
        map, 'zoom_changed', function(event) {
        	if (!this.initialZoom) {
            	logSCUsage('zoom changed');
        	}
        	
            var zoomChangedBoundsListener = google.maps.event.addListener(
                map, 'bounds_changed',
                function(event) {
                    if (isObject(defaultViewport) && this.initialZoom) {
                        var zoom = determineZoomLevel(this.getZoom());
                        this.setZoom(zoom);
        	            var center = defaultViewport.getCenter();
        	            this.setCenter(center);
                        this.initialZoom = false;
                        google.maps.event.removeListener(zoomChangedBoundsListener);
                    }
                }
            );
        }
    );

    map.initialZoom = true;
    map.initialCenter = true;

    kmlLayer.setMap(map);
}
function refreshPage() {
	location.reload();
}
function refreshTimer() {
	if (timer_is_on) {
		loadURLArray();
	}
	var refreshRate = GM_refreshRate * 1000;
    timer = setTimeout("refreshTimer()", refreshRate);
}
function startRefreshTimer() {
    if (!timer_is_on && GM_refreshRate > 0) {
    	refreshTimer();
    	timer_is_on = true;
    }
}
function stopRefreshTimer() {
	if (timer_is_on) {
        clearTimeout(timer);
	}
    timer_is_on = false;
}
function loadURLArray() {
    var ajaxURL = 'MapsServlet';
    var ajaxDATA = 'doi=' + QS_doi;
    if(QS_eid){
    	ajaxDATA += "&eid=" + QS_eid;
    }
    if(QS_doi){
	    $.ajax({
	        async : false,
	        url : ajaxURL,
	        data : ajaxDATA,
	        success : function(data) { kmlURLs = data; },
	        error : function(data) { alert(data);stopRefreshTimer(); refreshPage(); },
	        dataType : "json"
	    });
	}
}
function determineZoomLevel(zoomLevel) {
	var defaultZoomLevel = zoomLevel;
    if (zoomLevel < myMinZoom) {
        defaultZoomLevel = myMinZoom;
    } else if (zoomLevel > myMaxZoom) {
    	defaultZoomLevel = myMaxZoom;
    }
    return defaultZoomLevel;
}
