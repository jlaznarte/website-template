//var oas_tag       = {};
oas_tag.url       = 'oascentral.sciencemag.org'; // Define OAS URL

var site_page = document.location.hostname;
var site_path = document.location.pathname;

if(location.host.indexOf('www.') === 0){
    site_page = location.host.replace('www.','');
}

if(document.location.hostname === "sciencedev.aaas.org" || document.location.hostname === "dtmdemoads.dev" || document.location.hostname === "sciencecore.dev" || document.location.hostname === "dmanalytics.aaas.org") {
	site_page = "sciencedev.aaas.org";
	site_path = "";
}

//add front if landing page
if(document.location.pathname === "/") {
	site_page += "/front";
	site_path = "";
}

//GHP, News and Careers Landing Pages
if(document.location.hostname === "www.sciencemag.org" && document.location.pathname === "/") {
	site_page = "sciencemag.org";
	site_path = "/ghp"
}

if(site_page === "sciencemag.org" && document.location.pathname === "/news") {
 	site_page = "sciencemag.org/newshomepage";
 	site_path = "";
}

if(site_page === "sciencemag.org" && document.location.pathname === "/careers") {
 	site_page = "sciencemag.org/careershomepage";
 	site_path = "";
}

oas_tag.site_page = site_page + site_path;

oas_tag.allowSizeOverride = true; // Needed for responsive sizes
oas_tag.lazyload = false; // Async loading
oas_tag.anchorElementPrefix = "aaas-oas"; // This customization has been requested from HW for Jcore
oas_tag.analytics = true;

(function() {
  oas_tag.version ='1'; oas_tag.loadAd = oas_tag.loadAd || function(){}; var oas = document.createElement('script'),
  protocol = 'https:' == document.location.protocol?'https://':'http://', node = document.getElementsByTagName('script')[0];
  oas.type = 'text/javascript'; oas.async = true;
  oas.src = protocol + oas_tag.url + '/om/' + oas_tag.version + '.js'; node.parentNode.insertBefore(oas, node);
})();

oas_tag.sizes = function() {
  oas_tag.definePos('Top',    [728, 90]);
  oas_tag.definePos('Right2', [300, 600]);
  oas_tag.definePos('x30',    [1280, 60]);
  oas_tag.definePos('x51',    [300, 250]);
  oas_tag.definePos('x60',    [300, 250]);
};

var sheet = (function() {
  var style = document.createElement("style");
  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);
  return style.sheet;
})();

sheet.insertRule("[id^=aaas-oas]:not(#aaas-oas_x30) { position: relative; }", 0);

sheet.insertRule(".ad__label {position: relative; font-size: .75rem; font-family: Benton Sans, Helvetica, Arial, sans-serif; margin: 0; text-align: center; line-height: 1.1; color: gray; }", 0);

sheet.insertRule("#aaas-oas_Top .ad__label {display: inline-block; transform: rotate(-90deg); text-align: left; transform-origin: left bottom; bottom: 4px; left: 0; position: absolute; color: white; }", 0);

sheet.insertRule("#aaas-oas_x30 .ad__label {display: inline-block;  top: 10; left: 0;  text-align: left;  }", 0);

sheet.insertRule(".oas-position-x30 .container--footer {padding-bottom: 70px;  text-align: center;  }", 0);

sheet.insertRule("#aaas-oas_x51, #aaas-oas_Right2, #aaas-oas_x60 { text-align: center; }", 0);

sheet.insertRule("#aaas-oas_x30 {  line-height: 0; bottom: 0;  position: fixed;  max-width: 1280px;  right: 0;  left: 0;  margin: 0px auto;  z-index: 10000; } ", 0);

sheet.insertRule("#aaas-oas_x30 a {  line-height: 0;  display: block;  } ", 0);

sheet.insertRule("#aaas-oas_x30 .ad__zapper {  right: -10px; position: absolute; z-index: 1;  cursor: pointer;  } ", 0);

oas_tag.callbackHandler = function() {

  Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
  }

  NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
      if(this[i] && this[i].parentElement) {
        this[i].parentElement.removeChild(this[i]);
      }
    }
  }

  oas_tag.addHandler('callbackId', function(data) {

    var pageAds = document.querySelectorAll("[id^=" + oas_tag.anchorElementPrefix + "]"),
        adPositions = {};

    for (var i=0; i < pageAds.length; i++) {
      posKey = pageAds[i].id;
      posVal = pageAds[i].id.split('_')[1];
      adPositions[posKey] = posVal;
    }

    for (var key in adPositions) {
      var posData = adPositions[key];

      document.body.classList.add("oas-position-" + adPositions[key]);

      if (data[posData] && data[posData].creativeId != "empty.gif") {
        document.getElementById(key).insertAdjacentHTML("afterbegin", '<p class="ad__label">Advertisement</p>');

        if (data[posData].position === "x30") {
          document.getElementById(key).insertAdjacentHTML("afterbegin", "<img onclick=\"this.parentNode.remove()\" width=\"24\" height=\"24\" class=\"ad__zapper\" src=\"data:image/svg+xml;utf8,<svg viewBox=\'0 0 22 22\' xmlns=\'http://www.w3.org/2000/svg\'><g transform=\'translate(1 1)\' stroke=\'#fff\' stroke-width=\'2\' fill=\'none\' fill-rule=\'evenodd\'><circle fill-opacity=\'.8\' fill=\'#000\' cx=\'10\' cy=\'10\' r=\'10\'/><g stroke-linecap=\'square\'><path d=\'M5.5 5.5l9 9M14.5 5.5l-9 9\'/></g></g></svg>\">");
        }
      }

    }
  })
};
