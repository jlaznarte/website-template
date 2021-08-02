/**
 * ELSEVIER PLAYER
 *
 * IOS hide volume controls. Not possible to set the volume in ios.
 */

// in JSplayer plaatsen
function rewind() {
    previousSlide();
}

function play() {
    playPresentation();
}

function forward() {
    nextSlide();
}

function mute() {
    toggleVolume();
}

function setVolume() {
    changeVolume();
}

var utilityStyle =
{
    getStyle : function(el,cssProperty)
    {

        if (getComputedStyle !== 'undefined')
        {
            return getComputedStyle(el,null).getPropertyValue(cssProperty);
        } else {
              return el.currentStyle[cssProperty];
        }

    }
};

var JSPlayer = new function()
{
    var viewerAudio;

    this.init = function (viewerAudio)
    {
        //console.log("init jsPlayer");
        this.viewerAudio = viewerAudio;

        if (iOS !== false) this.hideVolumeControls();
        setJSView(viewerWidth, viewerHeight);
    }

    this.hideVolumeControls = function()
    {
        document.getElementById("volumecontrols").style.display = 'none';
    }

    this.getPercentagePlayed = function()
    {
        return playerState.percentagePlayed;
    }

    this.resetPercentagePlayed = function()
    {
        playerState.percentagePlayed = 0;
    }

    this.saveState = function(id, slideNum, percentagedPlayed, currentPlayTime, totalPlayTime, playingState, volume)
    {
        playerState.saveState(id, slideNum, percentagedPlayed, currentPlayTime, totalPlayTime, playingState, volume);
    }

    this.doSlide = function(slideIndex)
    {
        doSlide(slideIndex);
    }

    // size
    this.getComputedHeight = function(elem)
    {
        return utilityStyle.getStyle(elem, "height");
    }

    this.getComputedWidth = function (elem)
    {
        return utilityStyle.getStyle(elem, "width");
    }

    this.loadXML = function(dataURL)
    {
        var request = $.get(dataURL, function (data)
        {
            var xmlData = request.responseXML;
            var jsonData = xmlToJson(xmlData);

            var infoSlides = jsonData.data.infoSlide;
            var slides = jsonData.data.audioSlides.slide;
            var allSlidesLength = infoSlides.length + slides.length;

            allSlides = [];
            for (var a = 0; a < infoSlides.length; a++)
            {
                if (a == 0)
                {
                    allSlides.push(infoSlides[a]);
                }
            }

            for (var b = 0; b < slides.length; b++)
            {
                allSlides.push(slides[b]);
            }
            totalNumberOfSlides = allSlides.length;

            if (slideIndex > totalNumberOfSlides)
            {
                slideIndex = totalNumberOfSlides;
            }
            JSPlayer.doSlide(slideIndex);
        });
    }
}

var playerState = new function()
{
    var playerStateHistory = [];

    var id;
    var slideNum;
    var percentagePlayed;
    var currentPlayTime;
    var totalPlayTime;
    var playingState;
    var volume;
    var presentationMode;

    /**
     * id = doi
     * percentagedPlayed = percenatge played from current slide
     * currentPlayTime = audio played in ms
     * totalPlayTime = total audio from this slide in ms
     * playingState = paused || playing
     * volume = curent volume setting
     * presentationMode = is presentation in autoplay mode
     */
    this.saveState = function(id, slideNum, percentagedPlayed, currentPlayTime, totalPlayTime, playingState, volume)
    {
        //this.saveToHistory(id, slideNum, percentagedPlayed, currentPlayTime, totalPlayTime, playingState, volume);
        this.id = id;
        this.slideNum = slideNum;
        this.percentagePlayed = percentagedPlayed;
        this.currentPlayTime = currentPlayTime;
        this.totalPlayTime = totalPlayTime;
        this.playingState = playingState;
        this.volume = volume;
        this.presentationMode = presentationMode;
    }

    this.saveToHistory = function(id, slideNum, percentagedPlayed, currentPlayTime, totalPlayTime, playingState, volume)
    {
        if ((slideNum != this.slideNum))
        {
            var stateToSave = {};
            stateToSave.id = id;
            stateToSave.slideNum = slideNum;
            stateToSave.percentagePlayed = percentagedPlayed;
            stateToSave.currentPlayTime = currentPlayTime;
            stateToSave.totalPlayTime = totalPlayTime;
            stateToSave.playingState = playingState;
            stateToSave.volume = volume;
            stateToSave.presentationMode = presentationMode;
            playerStateHistory.push(playerStateHistory);
        }
        //console.log("length: " + playerStateHistory.length);
    }
}



///////////////////////////////////////////////////////////////////
// HELPERS
///////////////////////////////////////////////////////////////////

var utilityStyle =
{
    getStyle: function (el, cssProperty)
    {
        var domEl = document.getElementById(el);
        var calculatedStyle = "";
        if (getComputedStyle !== 'undefined')
        {
            calculatedStyle = getComputedStyle(domEl, null).getPropertyValue(cssProperty);
        } else {
            calculatedStyle = domEl.currentStyle[cssProperty];
        }
        return calculatedStyle.replace(/[^-\d\.]/g, '');
    }
};

/*
 * Outputs a float representing the iOS version if user is using an iOS browser i.e. iPhone, iPad
 * Possible values include:
 *    3 - v3.0
 *    4.0 - v4.0
 *    4.14 - v4.1.4
 *    false - Not iOS
 */
var iOS = parseFloat(
    ('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1])
    .replace('undefined', '3_2').replace('_', '.').replace('_', '')
) || false;

function xmlToJson(xml)
{
    var obj = {};

    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.value;
            }
        }
    } else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof (obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
};
