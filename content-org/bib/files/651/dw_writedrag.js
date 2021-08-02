/*************************************************************************
  
  dw_writedrag.js - version date Nov 2003
  requires dw_event.js, dw_drag.js, and dw_viewport.js
  
  This code is from Dynamic Web Coding at http://www.dyn-web.com/
  Copyright 2003 by Sharon Paine 
  See Terms of Use at http://www.dyn-web.com/bus/terms.html
  regarding conditions under which you may use this code.
  This notice must be retained in the code as is!
  
*************************************************************************/

var draggableBoxes = [];

function WriteDrag(dragId) {
  // offX and offY can be numbers or "c"
  this.offX = 20;
  this.offY = 20;
  this.dragId = dragId != undefined ? dragId : "dragDiv";  // id of positioned div to be dragged
  draggableBoxes[this.dragId] = this;
  this.handleId = "";         // optional, place null or "" if no handle
  this.writeId = "";    // optional, will write to dragId if null or empty string
  // end of settings area - no need to edit below this line
  
  this.draggable = false;   // set true once dragObj.init called
  this.hideFlag = true;     // used in checkHide (document click)
  this.doNotHideFlag = false;

  this.init = function() {   // initialize for dragging
    if (this.handleId) dragObj.init(this.handleId, this.dragId);
    else dragObj.init(this.dragId);
    this.draggable = true;
    // add handlers for hiding layer (esc key and doc click)
    dw_event.add( document, "click",   this.checkHide, false );
    dw_event.add( document, "keydown", this.checkKey,  true );
  };

  // called onclick of links (from wrapContent)
  this.set = function(e, cntnt, wd, offx, offy, postponedEvent, height) {
    this.hideFlag = false;  // click on link to show layer is also document click, which would hide it
    var wobj = this.writeId? document.getElementById( this.writeId ): document.getElementById( this.dragId );
    var dobj = document.getElementById( this.dragId );
    if ( !this.draggable ) this.init();
    this.hide();
    if(cntnt != undefined){
      wobj.innerHTML = cntnt;
    }
    if (wd) {
      // wd might be width of image, so add border and padding
      // rely on styles set inline (or lengthy code needed)
      var bw = dobj.style.borderWidth? parseInt(dobj.style.borderWidth): 0;
      var pw = wobj.style.padding? parseInt(wobj.style.padding): 0;
      wd += 2 * bw + 2 * pw;
      dobj.style.width = wd + "px";
    }
      if(height) {
            var bh = dobj.style.borderWidth? parseInt(dobj.style.borderWidth): 0;
            var ph = wobj.style.padding? parseInt(wobj.style.padding): 0;
            height += 2 * bh + 2 * ph;
            dobj.style.height = height + "px";
      }
    this.positionIt(e, dobj, offx, offy, postponedEvent, height);
  };
  
  this.positionIt = function(e, o, offx, offy, postponedEvent, height) {
    var x=0, y=0; viewport.getAll();
    // check positioning choices
    if ( offx == "c" ) {
      x = Math.round( (viewport.width - o.offsetWidth)/2 ) + viewport.scrollX;
    } else {  // use mouse location onclick to position
      if(!postponedEvent){
        if(e.pageX){
          x = e.pageX;
        }else{
          x = e.clientX + viewport.scrollX;
        }
      }
      offx = offx || this.offX;  // check for passed offsets
      if ( x + o.offsetWidth + offx > viewport.width + viewport.scrollX ) 
        x = viewport.width + viewport.scrollX - o.offsetWidth;
      else x = x + offx;
    }
    if ( offy == "c" ) {
      var oh = height || o.offsetHeight;
      y = Math.round( (viewport.height - oh)/2 ) + viewport.scrollY;
    } else {
      if(!postponedEvent){
        y = e.pageY? e.pageY: e.clientY + viewport.scrollY;
      }
      offy = offy || this.offY; 
      if ( y + o.offsetHeight + offy > viewport.height + viewport.scrollY )
        y = viewport.height + viewport.scrollY - o.offsetHeight;
      else y = y + offy;
    }
    o.style.left = x + "px"; o.style.top = y + "px";
    document.getElementById(this.dragId).style.visibility = "visible";

    setTimeout("draggableBoxes['" + this.dragId + "'].hideFlag = true", 200);  // delayed until after checkHide
  };
  
  this.checkKey = function(e) { // check for esc key
    e = e? e: window.event;
    if ( e.keyCode == 27 ){
      for(i in draggableBoxes){
        hideDragId(i);
      }
    }
  };

  this.hide = function() {
    hideDragId(this.dragId);
  };

  this.checkHide = function(e) {
    dw_event.DOMit(e);
    // hide the layer if you click anywhere in the document 
    // except a link that displays the layer (hideFlag), or on the layer itself, 
    // unless that click on the layer is on the layer's close box    
    if (e.tgt.nodeType && e.tgt.nodeType == 3) e.tgt = e.tgt.parentNode;  // text node?
    for(i in draggableBoxes){
      var dragId = i;
      if ( contained( e.tgt, document.getElementById(dragId) ) ) {
        if ( e.tgt.tagName && e.tgt.tagName == "IMG" ) e.tgt = e.tgt.parentNode;
        if ( e.tgt.tagName == "A" && e.tgt.href.indexOf("writeDrag.hide") != -1 ) hideDragId(dragId);
          else return;
        if(i.doNotHideFlag)
          return;
      }
    }
    for(i in draggableBoxes){
      //if (draggableBoxes[i].hideFlag) hideDragId(i);
    }
  };

  hideDragId = function(dragId){
    if(document.getElementById(dragId)){
      Events.fireEvent('WriteDrag.hide')
      document.getElementById(dragId).style.visibility = "hidden";
      if (document.getElementById("cntnt")!=null && dragId == "dragDiv") { document.getElementById("cntnt").innerHTML = ""}
    }
  };

}

// returns true of oNode is contained by oCont (container)
function contained(oNode, oCont) {
  while ( oNode.parentNode ) {
    oNode = oNode.parentNode;
    if ( oNode == oCont ) return true;
  }
  return false;
}

var writeDrag = new WriteDrag();

function closePrompt() {
  writeDrag.hide();
}
