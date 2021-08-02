// USAGE:
// * favicon.change("/icon/active.ico");
//      (Optional 1st arg is icon URL. Default value is favicon.icons.defaultIcon)
//      (Optional 2nd arg shows if this icon has priority.)
//      (Optional 3rd arg is new title.)
// * favicon.remove("/icon/active.ico");
// * favicon.animate(new Array("icon1.ico", "icon2.ico", ...));
//     Tip: Use "" as the last element to make an empty icon between cycles.
//     To stop the animation, call change() and pass in the new arg.
//     (Optional 2nd arg is animation pause in millis, overwrites the default.)
// * favicon.defaultPause = 5000;

var favicon = {

// -- "PUBLIC" ----------------------------------------------------------------

  defaultPause:2000,
  icons:{
    defaultIcon:"/favicon.ico",
    playIcon:Config.is4Sync ? "/images/favicon/4syncPlay.ico" : "/images/favicon/play.ico",
    uploadIcon:Config.is4Sync ? "/images/favicon/4syncUpload.ico" : "/images/favicon/upload.ico"
  },
  currentIcon:"/favicon.ico",
  sequence: {},

  change:function (iconURL, isPriority, optionalDocTitle) {
    clearTimeout(this.loopTimer);
    if (isPriority || !this.getObjectLength(this.sequence)) {
      if (optionalDocTitle) document.title = optionalDocTitle;
      this.addLink(iconURL, true);
      this.currentIcon = iconURL;
    }
    if (iconURL && iconURL != this.icons.defaultIcon) this.sequence[iconURL] = optionalDocTitle
  },

  remove:function (iconURL) {
    if (!this.sequence.hasOwnProperty(iconURL)) return;
    delete this.sequence[iconURL]
    if (iconURL != this.currentIcon) return;
    if (this.getObjectLength(this.sequence) > 0) {
      for (var i in this.sequence) {
        this.change(i, true, this.sequence[i]);
        return;
      }
    } else this.change();
  },

  animate:function (iconSequence, optionalDelay) {
    this.preloadIcons(iconSequence);
    this.iconSequence = iconSequence;
    this.sequencePause = (optionalDelay) ? optionalDelay : this.defaultPause;
    favicon.index = 0;
    favicon.change(iconSequence[0]);
    this.loopTimer = setInterval(function () {
      favicon.index = (favicon.index + 1) % favicon.iconSequence.length;
      favicon.currentIcon = favicon.iconSequence[favicon.index];
      favicon.addLink(favicon.currentIcon, false);
    }, favicon.sequencePause);
  },

// -- "PRIVATE" ---------------------------------------------------------------

  loopTimer:null,

  preloadIcons:function (iconSequence) {
    var dummyImageForPreloading = document.createElement("img");
    for (var i = 0; i < iconSequence.length; i++) {
      dummyImageForPreloading.src = iconSequence[i];
    }
  },

  addLink:function (iconURL) {
    var link = document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = iconURL || this.icons.defaultIcon;
    this.removeLinkIfExists();
    this.docHead.appendChild(link);
  },

  removeLinkIfExists:function () {
    var links = this.docHead.getElementsByTagName("link");
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (link.type == "image/x-icon" && link.rel == "shortcut icon") {
        this.docHead.removeChild(link);
        return; // Assuming only one match at most.
      }
    }
  },

  getObjectLength:function(obj) {
    var length = 0;
    for (var i in obj)
      length++;
    return length;
  },

  docHead:document.getElementsByTagName("head")[0]
}

