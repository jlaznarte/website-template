/* - - - - - - - - - - - - - - - - - - - - - - -
 Fichier JavaScript
 Créé le mardi 2 mars 2004 16:20:58
 avec HAPedit 3.0.11.102
  - - - - - - - - - - - - - - - - - - - - - - - */
/* HE 18 Janvier 2005*/
function copy_clip(meintext){
 if (window.clipboardData) 
   {
   
   // the IE-manier
   window.clipboardData.setData("Text", meintext);
   
   // waarschijnlijk niet de beste manier om Moz/NS te detecteren;
   // het is mij echter onbekend vanaf welke versie dit precies werkt:
   }
   else if (window.netscape) 
   { 
   
   // dit is belangrijk maar staat nergens duidelijk vermeld:
   // you have to sign the code to enable this, or see notes below 
   netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
   
   // maak een interface naar het clipboard
   var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
   if (!clip) return;
   
   // maak een transferable
   var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
   if (!trans) return;
   
   // specificeer wat voor soort data we op willen halen; text in dit geval
   trans.addDataFlavor('text/unicode');
   
   // om de data uit de transferable te halen hebben we 2 nieuwe objecten nodig   om het in op te slaan
   var str = new Object();
   var len = new Object();
   
   var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
   
   var copytext=meintext;
   
   str.data=copytext;
   
   trans.setTransferData("text/unicode",str,copytext.length*2);
   
   var clipid=Components.interfaces.nsIClipboard;
   
   if (!clip) return false;
   
   clip.setData(trans,null,clipid.kGlobalClipboard);
   
   }
   alert("Le texte suivant est copié dans le presse-papier :\n\n" + meintext);
   return false;
}

function copier2clipBoard(Code)
{
   var textRange = document.body.createTextRange();
   textRange.moveToElementText(Code);
   textRange.execCommand("Copy");
}

function copystring2clipBoard(str)
{
   var st = new string(str);
      st.execCommand("Copy");
}

function isSite() {var result, st; result = false;
result = true;
  if (parent.location.href == self.location.href) {
    result = false;
    }
    return result;}

//<!-- ---------------------------------------------------- -->
//<!-- Fonctions utilisées par la Barre de navigation       -->
//<!-- ---------------------------------------------------- -->
//<!-- Copyright 2000 by Mike Hall                          -->
//<!-- Please see http://www.brainjar.com for terms of use. -->
//<!-- ---------------------------------------------------- -->
function Browser() {
  var ua, s, i;
  this.isIEPC    = false;  // Pocket Internet Explorer
  this.isIE    = false;  // Internet Explorer
  this.isNS    = false;  // Netscape
  this.version = null;
  ua = navigator.userAgent;

  s = "MSIE";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isIE = true;
    this.version = parseFloat(ua.substr(i + s.length));
    return;
  }

  s = "Netscape6/";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isNS = true;
    this.version = parseFloat(ua.substr(i + s.length));
    return;
  }

  // Treat any other "Gecko" browser as NS 6.1.

  s = "Gecko";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isNS = true;
    this.version = 6.1;
    return;
  }
  s = "Pocket";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isIE = true;
    this.isIEPC = true;
    this.version = 4.0;
    return;
  }
}

var browser = new Browser();

// Global variable for tracking the currently active button.

var activeButton = null;

// Capture mouse clicks on the page so any active button can be
// deactivated.

if (browser.isIE)
  document.onmousedown = pageMousedown;
if (browser.isNS)
  document.addEventListener("mousedown", pageMousedown, true);

function pageMousedown(event) {

  var el;

  // If there is no active menu, exit.

  if (!activeButton)
    return;

  // Find the element that was clicked on.

  if (browser.isIE)
    el = window.event.srcElement;
  if (browser.isNS)
    el = (event.target.className ? event.target : event.target.parentNode);

  // If the active button was clicked on, exit.

  if (el == activeButton)
    return;

  // If the element clicked on was not a menu button or item, close the
  // active menu.

  if (el.className != "menuButton"  && el.className != "menuItem" && el.className != "menuItemSep" && el.className != "menu")
    resetButton(activeButton);
}

function buttonClick(button, menuName) {

  // Blur focus from the link to remove that annoying outline.

  button.blur();

  // Associate the named menu to this button if not already done.

  if (!button.menu)
    button.menu = document.getElementById(menuName);

  // Reset the currently active button, if any.

  if (activeButton && activeButton != button)
    resetButton(activeButton);

  // Toggle the button's state.

  if (button.isDepressed)
    resetButton(button);
  else
    depressButton(button);

  return false;
}

function buttonMouseover(button, menuName) {

  // If any other button menu is active, deactivate it and activate this one.
  // Note: if this button has no menu, leave the active menu alone.

  if (activeButton && activeButton != button) {
    resetButton(activeButton);
    if (menuName)
      buttonClick(button, menuName);
  }
}

function depressButton(button) {

  var w, dw, x, y;

  // Change the button's style class to make it look like it's depressed.

  button.className = "menuButtonActive";

  // For IE, set an explicit width on the first menu item. This will
  // cause link hovers to work on all the menu's items even when the
  // cursor is not over the link's text.

  if (browser.isIE && !button.menu.firstChild.style.width) {
    w = button.menu.firstChild.offsetWidth;
    button.menu.firstChild.style.width = w + "px";
    dw = button.menu.firstChild.offsetWidth - w;
    w -= dw;
    button.menu.firstChild.style.width = w + "px";
  }

  // Position the associated drop down menu under the button and
  // show it. Note that the position must be adjusted according to
  // browser, styling and positioning.

  x = getPageOffsetLeft(button);
  y = getPageOffsetTop(button) + button.offsetHeight;
  if (browser.isIE) {
    x += 2;
    y += 2;
  }
  if (browser.isNS && browser.version < 6.1)
    y--;

  // Position and show the menu.

  button.menu.style.left = x + "px";
  button.menu.style.top  = y + "px";
  button.menu.style.visibility = "visible";

  // Set button state and let the world know which button is
  // active.

  button.isDepressed = true;
  activeButton = button;
}

function resetButton(button) {

  // Restore the button's style class.

  button.className = "menuButton";

  // Hide the button's menu.

  if (button.menu)
    button.menu.style.visibility = "hidden";

  // Set button state and clear active menu global.

  button.isDepressed = false;
  activeButton = null;
}

function getPageOffsetLeft(el) {

  // Return the true x coordinate of an element relative to the page.

  return el.offsetLeft + (el.offsetParent ? getPageOffsetLeft(el.offsetParent) : 0);
}

function getPageOffsetTop(el) {

  // Return the true y coordinate of an element relative to the page.

  return el.offsetTop + (el.offsetParent ? getPageOffsetTop(el.offsetParent) : 0);
}

//<!-- Fin Fonctions utilisées par la Barre de navigation       -->

