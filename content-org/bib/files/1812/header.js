function ou_init()
{
	ou_linksline();
	ou_tsinit();
}

function ou_linksline()
{
	if (navigator.appName == "Netscape" && parseFloat(navigator.appVersion) < 5) return;
	ele = document.getElementById("ou-row2");
	if (ele == null) ele = document.getElementById("ou-row3b");
	if (ele == null) return;
	sb_ln = "<ul>";
	sb_c = document.cookie + ";";
	sb_p = sb_c.indexOf("SAMSsession");
	sb_h = 0;
	if (sb_p >= 0)
	{
		for (i=sb_p+12 ; ; i++ ) 
		{
			if (sb_c.substr(i, 1) == ';') break;
			sb_h += sb_c.charCodeAt(i);
		}
		sb_p = sb_c.indexOf("%2E", sb_p);
	}
	sb_id = "";
	sb_pi = "";
	if (sb_p >= 0)
	{
		sb_ln += "<li>";
		sb_p2 = sb_c.indexOf("HS7BDF=");
		if (sb_p2 >= 0)
		{
			sb_p3 = sb_c.indexOf(";", sb_p2);
			sb_p4 = sb_c.indexOf("\\", sb_p2);
			if (sb_p4 > 0 && sb_p4 < sb_p3)
			{
				if (parseFloat(sb_c.substr(sb_p4+1)) != sb_h) sb_p2 = -1;
				sb_p3 = sb_p4;
			}
			if (sb_p2 >= 0)
			{
				sb_nm = sb_c.substr(sb_p2+7,sb_p3-sb_p2-7);
				sb_nm2 = "";
				for (i=0 ; i < sb_nm.length ; i++)
				{
					j = sb_nm.charCodeAt(i) % 256;
					if (j >= 192 && j <= 223 && i < sb_nm.length-1)
					{
						k = sb_nm.charCodeAt(i+1) % 256;
						sb_nm2 += String.fromCharCode((j-192)*64 + (k-128));
						i++;
					}
					else
						sb_nm2 += String.fromCharCode(j);
				}
				sb_ln += sb_nm2 + " ";
			}
		}
		sb_p2 = sb_c.indexOf("%2E", sb_p+3);
		if (sb_p2 - sb_p == 11)
		{
			sb_pi = sb_c.substr(sb_p+3,8);
			sb_ln += "(" + sb_pi + ")</li><li><a id=\"ou-studenthome\" href=\"https://msds.open.ac.uk/students/\">StudentHome</a></li>";
		}
		else
		{
			sb_id = "";
			sb_p = sb_c.indexOf("%2E", sb_p2+3);
			if (sb_p - sb_p2 == 11) 
				sb_id = sb_c.substr(sb_p2+3,8);
			else
			{
				sb_p2 = sb_c.indexOf("%2E", sb_p+3);
				if (sb_p2 - sb_p == 11)
					sb_id = sb_c.substr(sb_p+3,8);
				else
				{
					sb_p = sb_c.indexOf("%2E", sb_p2+3);
					if (sb_p - sb_p2 == 11) sb_id = sb_c.substr(sb_p2+3,8);
				}
			}
			sb_ln += "(" + sb_id + ")</li><li>";
			sb_ln += "<li><a id=\"ou-studenthome\" href=\"https://msds.open.ac.uk/students/\">StudentHome</a></li>";
			sb_ln += "<li><a id=\"ou-tutorhome\" href=\"https://msds.open.ac.uk/tutorhome/\">TutorHome</a></li>";
			sb_ln += "<li><a id=\"ou-intranethome\" href=\"http://intranet.open.ac.uk/\">IntranetHome</a></li>";
		}
		sb_ln += "<li><a id=\"ou-signout\" href=\"https://msds.open.ac.uk/signon/samsoff.aspx\">Sign out</a></li></ul>";
		ele.innerHTML = sb_ln;
	}
	else
	{
		ele.innerHTML = "<ul><li><a id=\"ou-signin\" href=\"https://msds.open.ac.uk/signon/SAMSDefault/SAMS001_Default.aspx?URL=" + document.location.href + "\">Sign in</a></li></ul>";
	}
}

function ou_tsinit(x)
{
	s = document.cookie + ";";
	i = s.indexOf("P14TS");
	if (i < 0) return;
	j = s.indexOf(";", i);
	if (j < 0) return;
	n = parseFloat(s.substr(i+6, j-i-6));
	if (n < 2 || n > 4) return;
	ou_tschange(n);
}

function ou_tschange(n)
{
	// Grab the area we want to resize
	e = document.getElementById("tsxcontent");
	if (e == null) return;
	
	// Read the cookie
	document.cookie = "P14TS=" + n + "; expires=Sun, 01 Dec 2030 23:59:59 GMT; path=/; domain=open.ac.uk;";
	
	// Set the display to show the cookie info
	if (document.getElementById("ou-smalltext"))
	{
		if (n == 1) document.getElementById("ou-smalltext").style.borderColor='#547FBD'; else document.getElementById("ou-smalltext").style.borderColor='#ccc';
		if (n == 2) document.getElementById("ou-mediumtext").style.borderColor='#547FBD'; else document.getElementById("ou-mediumtext").style.borderColor='#ccc';
		if (n == 3) document.getElementById("ou-largetext").style.borderColor='#547FBD'; else document.getElementById("ou-largetext").style.borderColor='#ccc';
		if (n == 4) document.getElementById("ou-extralargetext").style.borderColor='#547FBD'; else document.getElementById("ou-extralargetext").style.borderColor='#ccc';
	}
	
	// Figure out the font size based on the option chosen
	if (n == 4)
		n = 140;
	else
		n = 90 + n * 10;
		
	// Set anything that can obviously be resized
	e.style.fontSize = n + "%";
		

	// Find all elements with tsx in the id or the classname
	// saves having to code an incrementor for the id, and
	// keeps compatibilty with older sites that already use the incrementor method
	var inc=0;
	var alltags= e.getElementsByTagName("span")
	// change font size of tags that need resizing
	for (i=0; i<alltags.length; i++)
	{
		if (alltags[i].id.indexOf("tsx") != -1 || alltags[i].className.indexOf("tsx") != -1)
			alltags[i].style.fontSize = n + "%";
	}
}


// Change these to match your requirements
var siTrackerUrl    = "/includes/si-tracker.gif";
var siCookieName    = "SIVISITOR";
var siCookieQPName  = "simigvis";
var siCookiePath    = "/";
var siCookieTimeout = 315360000000;
var siDomainList    = new Array(".ac.uk",".net",".co.uk");
var siAutoTracer    = true;
// These will be set by functions below - note image set is needed to stop variables going out of scope
var siCookieValue   = "";
var siPageID        = "";
var siTracerPath    = "";
var siTracerQuery   = "";
var siImageSet      = new Array(1);

function EncodeString(Input)
{
  var TransChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var Output     = "";
  for (var i = 0; i < Input.length; i += 3)
  {
    var NumBytesLeft = Input.length - i;
    var Value        = 0;
    Value  = (Input.charCodeAt(i) << 16) & 0x00ff0000;
    Value |= (NumBytesLeft > 1)? (Input.charCodeAt(i + 1) << 8) & 0x0000ff00 : 0;
    Value |= (NumBytesLeft > 2)? Input.charCodeAt(i + 2) & 0x000000ff : 0;
    Output += TransChars.charAt((Value & 0x00fC0000) >> 18);
    Output += TransChars.charAt((Value & 0x0003f000) >> 12);
    Output += (NumBytesLeft > 1)? TransChars.charAt((Value & 0x00000fc0) >> 6) : '_';
    Output += (NumBytesLeft > 2)? TransChars.charAt((Value & 0x0000003f)) : '_';
  }
  return Output;
}

//---------------------------------------------------------------------------------------------
// Encode all the relevent detals into a string
//---------------------------------------------------------------------------------------------
function EncodeDetails(Format)
{
   var Output = "";
   for (var i = 0; i < Format.length; i++)
   {
      var Data;
      switch (Format.charAt(i))
      {
      case 'r':
         Data = document.referrer;
         break;
      case 'p':
         Data = document.URL;      
         break;
      case 'd':
         Data = screen.availWidth+"x"+screen.availHeight+"x"+screen.colorDepth+"."+navigator.javaEnabled();
         if (navigator.plugins) Data += "."+navigator.plugins.length;
         break;
      case 'c':
         Data = siCookieValue;
         break;
      case 'u':
         Data = window.history.length+"."+(Math.random()*1000)+"."+(new Date()).getTime();
         break;
      case 't':
         Data = siPageID;
         break;
      case 'f':
         Data = siTracerPath;
         break;
      case 'q':
         Data = siTracerQuery;
         break;
      }
      Output += EncodeString(Data)+"*";
   }  
   return Output;
}

function GetDomain()
{
  var DomainValue = null;
  var firstDot;
  var secondDot;
  var lastDot;
  var useHostname=document.location.hostname;
  if (useHostname != null)
  {
     var arIndex;
     for (arIndex = 0; (arIndex < siDomainList.length) && (DomainValue == null); arIndex++)
     {
        var tldIndex = useHostname.lastIndexOf(siDomainList[arIndex]);
        if (tldIndex > 0)
        {
           var nextDot = useHostname.lastIndexOf('.',tldIndex-1);
           if (nextDot >= 0)
           {
              DomainValue = useHostname.substring(nextDot);
           }
           else
           {
              DomainValue = "." + useHostname;
           }
        }
     }
  }
  return DomainValue;
}

function SetCookie(Name,Value,Path) 
{
  var Expiry=new Date;
  Expiry.setTime(Expiry.getTime()+siCookieTimeout);
  var Domain=GetDomain();
  var CookieDetails=Name+"="+Value+"; expires=\""+Expiry.toGMTString()+"\" "+((siCookiePath) ? "; path=" + siCookiePath : "")+((Domain) ? "; domain="+Domain : "");
  document.cookie=CookieDetails;
}

function GetCookie(Name,DataSource,DataEndChar) 
{
  var Prefix = Name+"=";
  var Value  = null;
  var Begin  = DataSource.indexOf(Prefix);
  if ((Begin != -1) && (Name.length > 0))
  {
    var End = DataSource.indexOf(DataEndChar,Begin);
    if (End == -1) End = DataSource.length;
    Value = DataSource.substring(Begin+Prefix.length,End);
  } 
  return Value;
}

function BuildCookie()
{
   var CookieValue=GetCookie(siCookieQPName,document.URL,"&");
   if (CookieValue != null) 
   {
      SetCookie(siCookieName,CookieValue);
   }
   else
   {
      CookieValue=GetCookie(siCookieName,document.cookie,";");
      if (CookieValue == null)
      {
         CookieValue=EncodeDetails("u");
         SetCookie(siCookieName,CookieValue);
      }
   }
   CookieValue = GetCookie(siCookieName,document.cookie,";");
   return CookieValue;
}

function SiMigrateCookie(link)
{
   var CookieValue=GetCookie(siCookieName,document.cookie,";");
   if (CookieValue != null) link.href=link.href+((link.href.indexOf('?') > 0) ? "&" : "?")+siCookieQPName+"="+CookieValue;
   return true;
}

function SiSendTracer(cookieForm,noCookieForm)
{
   var Tracker = new Image();
   Tracker.src = (siCookieValue == null) ? siTrackerUrl+"?f="+noCookieForm+"&d="+EncodeDetails(noCookieForm) : siTrackerUrl+"?f="+cookieForm+"&d="+EncodeDetails(cookieForm);
   siImageSet[siImageSet.length] = Tracker;
}

function SiTrackForm(filePath,form,list)
{
   siTracerPath = filePath;
   siTracerQuery = "";
   if (form.elements && (form.elements.length > 0))
   {
      var doamp=false;
      for (var i=0; i<form.elements.length; i++)
      {
         var el=form.elements[i];
         if (el.name)
         {
            var capture=(list == null);
            if (list != null)
            {
               for (var j=0; !capture && (j<list.length); j++)
               {
                  if (el.name == list[j]) capture = true;      
               }
            }
            if (capture && (el.type == "radio")) capture = el.checked;
            if (capture) 
            {
               if (doamp) siTracerQuery += "&";
               siTracerQuery += escape(el.name)+"="+escape(el.value);
               doamp=true;
            }
         }
      }
   } 
   SiSendTracer("fqcrt","fqdrt");
   return true;
}

function SiTrackTracer(filePath,queryString)
{
   siTracerPath = filePath;
   siTracerQuery = queryString;
   SiSendTracer("fqcrt","fqdrt");
}

function SiTrackPage()
{
   siCookieValue = BuildCookie();
   siPageID = "t"+(new Date()).getTime()+"h"+window.history.length;
   if (siAutoTracer) SiSendTracer("pcrt","pdrt");
}

SiTrackPage();
