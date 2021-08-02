var audioExtensions = ["mp3", "ogg"];
var audioExtension = audioExtensions[0];
var canPlayMp3 = false;
var canPlayOgg = false;

// Note that to change the src attribute of an audio object or element,
// you'll need to recreate the object or element with the new value for its src attribute or alternatively change the src URL and then issue a myAudio.load() command.
function checkAudio(document, audio)
{
    // Need to check the canPlayType first or an exception
    // will be thrown for those browsers that don't support it
    var useAudio = false;

    if (audio.canPlayType)
    {

        // Currently canPlayType(type) returns: "", "maybe" or "probably"
        canPlayMp3 = canUseMp3(audio);
        canPlayOgg = canUseOgg(audio);
        audioExtension = (!canPlayMp3 && canPlayOgg) ? audioExtensions[1] : audioExtensions[0];
        useAudio = canPlayMp3 || canPlayOgg;
        if (canPlayMp3 && !canPlayOgg) useAudio = true;
    }
    return useAudio;
}

/**
 * Check if audio tag can play mp3
 */
function canUseMp3(audio) {
//        alert("audio.canPlayType('audio/mpeg'): " + audio.canPlayType('audio/mpeg'));
    var canPlayMp3 = !!audio.canPlayType && (("" !== audio.canPlayType('audio/mpeg')));
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
    {
        canPlayMp3 = false; // change to variablele
    }
    return canPlayMp3;
}

/**
 * Check if audio tag can play ogg
 */
function canUseOgg(audio) {
    //alert("audio.canPlayType('audio/ogg'): " + audio.canPlayType('audio/ogg'));
    return !!audio.canPlayType && "" !== audio.canPlayType('audio/ogg');
}
