/*!
* Jquery CBplayer 1.2.4
* Copyright 2018 Christin Bombelka
*/

(function($){
	$.fn.cbplayer = function(options){
		var playerVersion = '1.2.4',
			hls,
			watchProgress,
			watchFullscreen,
			timeoutMeta;

		function isTouchDevice(){
			return 'ontouchstart' in window || navigator.maxTouchPoints;
		}

		function timeRangesToString(r) {
		  var log = [];
		  for (var i = 0; i < r.length; i++) {
		    log.push(Math.round(r.start(i)) + "," + Math.round(r.end(i)));
		  }
		  return log;
		}

		function videoBuffer(container) {
		    var player = container.find('.cb-player-media')[0];
		    var buffer = player.buffered;
		    var bufferingDuration;

	   		if (buffer) {
	    		var pos = player.currentTime,bufferLen;
			      for (var i=0, bufferLen=0; i < buffer.length; i++) {
			      	var start = buffer.start(i) / player.duration;
	        		var end = buffer.end(i) / player.duration;
			        if(pos >= buffer.start(i) && pos < buffer.end(i)) {
			          bufferLen = buffer.end(i) - pos;
			        }
			    }

				container.data({
					'buffer' : bufferLen,
			  	});
		  	}

			if(!container.data('duration')){
				var timeRanges = timeRangesToString(player.played),
			 		duration = 0;

				if(timeRanges.length){
					var t = timeRanges[0];
					duration = t.split(',')[0];

					if(duration == 0){
						duration = player.duration;
					}
				}

				container.data({
					'duration': Math.round(duration),
				});
			}

			var timeRanges = timeRangesToString(player.seekable),
			 	currentDuration = 0;

			if(timeRanges.length){
				var t = timeRanges[0];
				currentDuration = t.split(',')[1];
			}

		  	container.data({
				'currentDuration' : currentDuration,
		  	});
		}

		function displayError(container, message){
			container.find('.cb-player-error-message').text(message);
			container.addClass('cb-media-is-error');
			container.removeClass('cb-player-is-loaded');
		}

		function getPlayerSrc(container, autostart){
			if(container.hasClass('cb-player-is-loaded') || container.hasClass('cb-media-is-ready')){
				return;
			}

			if (typeof autostart === 'undefined' || autostart === null) {
				var autostart = true;
			}

			if(!container.data('backtracking')){
				container.addClass("cb-player-progressbar-off");
			}

			container.removeClass("cb-payer-is-replay");

			var media = container.find(".cb-player-media");

			if(media.attr('src')){
				mediaSrcEl = media;
				mediaSrc = mediaSrcEl.attr('src');
			}else if(media.data('src')){
				mediaSrcEl = media;
				mediaSrc = mediaSrcEl.data('src');
			}else if(media.find("source").attr('src')){
				mediaSrcEl = media.find("source");
				mediaSrc = mediaSrcEl.attr('src');
			}else if(media.find("source").data('src')){
				mediaSrcEl = media.find("source");
				mediaSrc = media.find("source").data('src');
			}else{
				return
			}

			if(mediaSrc.match(/(.m3u8)/) && typeof Hls === 'undefined'){
				displayError(container, 'hls.js ist not found');
				return;
			}

			if(mediaSrc.match(/(.m3u8)/) && Hls.isSupported()){
				var config = {
					startPosition : -1,
					capLevelToPlayerSize: false,
					debug: false,
					defaultAudioCodec: undefined,
					initialLiveManifestSize: 1,
					maxBufferLength: 30,
					maxMaxBufferLength: 600,
					maxBufferSize: 60*1000*1000,
					maxBufferHole: 0.5,
					lowBufferWatchdogPeriod: 0.5,
					highBufferWatchdogPeriod: 3,
					nudgeOffset: 0.1,
					nudgeMaxRetry : 3,
					maxFragLookUpTolerance: 0.2,
					liveSyncDurationCount: 3,
					// liveMaxLatencyDurationCount: 10,
					enableWorker: true,
					enableSoftwareAES: true,
					manifestLoadingTimeOut: 10000,
					manifestLoadingMaxRetry: 1,
					manifestLoadingRetryDelay: 500,
					manifestLoadingMaxRetryTimeout : 64000,
					startLevel: undefined,
					levelLoadingTimeOut: 10000,
					levelLoadingMaxRetry: 4,
					levelLoadingRetryDelay: 500,
					levelLoadingMaxRetryTimeout: 64000,
					fragLoadingTimeOut: 20000,
					fragLoadingMaxRetry: 6,
					fragLoadingRetryDelay: 500,
					fragLoadingMaxRetryTimeout: 64000,
					startFragPrefetch: false,
					appendErrorMaxRetry: 3,
					enableWebVTT: true,
					enableCEA708Captions: true,
					stretchShortVideoTrack: false,
					maxAudioFramesDrift : 1,
					forceKeyFrameOnDiscontinuity: true,
					abrEwmaFastLive: 5.0,
					abrEwmaSlowLive: 9.0,
					abrEwmaFastVoD: 4.0,
					abrEwmaSlowVoD: 15.0,
					abrEwmaDefaultEstimate: 500000,
					abrBandWidthFactor: 0.95,
					abrBandWidthUpFactor: 0.7,
					minAutoBitrate: 0
				}

				hls = new Hls(config);
				hls.attachMedia(media[0]);
				hls.loadSource(mediaSrc);
				container.addClass("cb-media-is-ready");

				hls.on(Hls.Events.ERROR,function(event, data) {
					if(container.hasClass('cb-player-is-playing')){
						return;
					}

					switch(data.details) {
						case Hls.ErrorDetails.MANIFEST_LOAD_ERROR:
							try {
								displayError(container, 'cannot Load Manifest' + data.context.url);
							    if(data.response.code === 0) {
							    	displayError(container, "this might be a CORS issue, consider installing <a href=\"https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi\">Allow-Control-Allow-Origin</a> Chrome Extension");
							    }
							} catch(err) {
							  	displayError(container, 'cannot Load' + data.context.url);
						}
						break;
					case Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT:
						displayError(container, 'timeout while loading manifest');
						break;
					case Hls.ErrorDetails.MANIFEST_PARSING_ERROR:
						displayError(container, 'error while parsing manifest:' + data.reason);
						break;
					case Hls.ErrorDetails.LEVEL_LOAD_TIMEOUT:
						displayError(container, 'timeout while loading level playlist');
						break;
					case Hls.ErrorDetails.FRAG_LOAD_ERROR:
						displayError(container, 'error while loading fragment');
						break;
					case Hls.ErrorDetails.FRAG_LOAD_TIMEOUT:
						displayError(container, 'timeout while loading fragment');
						break;
					case Hls.ErrorDetails.BUFFER_APPEND_ERROR:
						displayError(container, 'Buffer Append Error');
						break;
					default:
            			break;
					}

					if(data.fatal){
						displayError(container, 'The Livestream is not available.');

						container.removeClass("cb-player-is-loaded");
						hls.destroy();
						return;
					}
				});

				hls.on(Hls.Events.MEDIA_ATTACHED, function (event, data){
			 		container.addClass("cb-player-is-loaded");
				});

				hls.on(Hls.Events.MANIFEST_PARSED,function(event, data) {
			 		container.removeClass('cb-player-initialized');

			 		setVolume(container, container.data('volume'));

			 		if(autostart){
			 			toggleMediaStartSTopp(container);
			 		}

			 		container.data({
						'levels': data.levels,
						'level': hls.currentLevel + 1,
						'is_hls': true,
						'videowidth': data.levels[0].width,
						'videoheight': data.levels[0].height
					});
			 	});

				var firstLoad = true,
					watchLiveDuration = 0;
				hls.on(Hls.Events.LEVEL_LOADED,function(event,data) {

					if(data.details.live){
						container.addClass('cb-player-is-livestream');
						container.data({
							'is-livestream': data.details.live,
							'fragmentDuration': data.details.averagetargetduration,
						});
					}

					if(firstLoad){

						if(container.data('is-livestream')){
							container.find('.cb-player-progress').attr('aria-valuenow', 100);
						}

						container.find('.cb-player-time-duration').text(formatTime(data.details.totalduration, container));

						if(!mediaSrcEl.attr('video')){
							mediaSrcEl.remove();
						}

						firstLoad = false;
					}
				});

				hls.on(Hls.Events.FRAG_BUFFERED,function(event, data) {

			 		if(!container.data('bufferTimer')){
			            container.data('bufferTimer', true);

			            hls.bufferTimer = window.setInterval(function(){
			            	videoBuffer(container);
			            }, 200);
			        }

			        container.data({
						'level': hls.currentLevel + 1,
					});

					container.removeClass("cb-player-is-loaded");
			 	});

			}else if(mediaSrc.match(/(.mp4)/) || (mediaSrc.match(/(.m3u8)/) && Hls) ){
				// (Hls && (!isSupported() && mediaSrc.match(/(.m3u8)/)) || mediaSrc.match(/(.mp4)/)
				mediaSrcEl.attr("src", mediaSrc);
				media.load();

				container.addClass("cb-player-is-loaded");

				media.on('loadstart', function(){
					timeoutMeta = setTimeout(function(){
						displayError(container, 'Timeout - File cant loaded');
					}, 3000);
				});

				media.on('loadedmetadata', function(){

					clearTimeout(timeoutMeta);

					var mediaDuration = formatTime(media[0].duration, media.closest(".cb-player"));
					media.closest(".cb-player").find(".cb-player-time-duration").text(mediaDuration);

					container.addClass("cb-media-is-ready");
					container.removeClass('cb-player-initialized');

					container.data({
						'videowidth': media[0].videoWidth,
						'videoheight': media[0].videoHeight
					});

					setVolume(container, container.data('volume'));

					if(autostart){
						toggleMediaStartSTopp(container);
					}
				});

			}else if (mediaSrc.match(/(.mp3)/)){
				mediaSrcEl.attr("src", mediaSrc);
				media.load();

				container.addClass("cb-player-is-loaded");

				media.on('loadstart', function(){
					timeoutMeta = setTimeout(function(){
						displayError(container, 'Timeout - File cant loaded');
					}, 3000);
				});

				media.on('loadedmetadata', function(){
					var mediaDuration = formatTime(media[0].duration, media.closest(".cb-player"));

					clearTimeout(timeoutMeta);

					media.closest(".cb-player").find(".cb-player-time-duration").text(mediaDuration);

					container.addClass("cb-media-is-ready");
					container.removeClass('cb-player-initialized');

					if(autostart){
						toggleMediaStartSTopp(container);
					}
				});

			}else{
				displayError(container, 'File Type not Supported.');
			}
		}

		function stopPlayingAll(el){
			$('.cb-player-is-playing').not(el).each(function(){
				var container = $(this),
					player = container.find('.cb-player-media')[0];

				if(!container.data('backgroundMode')){
					if(container.hasClass('cb-media-is-ready') && !player.paused){
						//video item

						//Fix Clear DOM before call pause
						$('body').height();

						player.pause();
					}
				}
			});
		}

		function videoStart(container, player){
			if(typeof hls !== 'undefined' && container.data('hlsStopLoad')){
				hls.startLoad();
			}

			var promise = player.play();

			if (promise !== undefined) {
				promise.then(_ => {
					container.addClass("cb-player-is-playing");

					clearInterval(watchProgress);

					watchProgress = setInterval(function(){
						watchProgressLoading(player);
					}, 500);
				}).catch(error => {
					console.log(promise);
				});
			}
		}

		function videoStop(player){
			player.pause();

			clearInterval(watchProgress);
		}

		function toggleMediaStartSTopp (container){
			var player = container.find('.cb-player-media')[0];

			if(!container.data('backgroundMode')){
				stopPlayingAll(container);
			};

			if (player.paused) {

				videoStart(container, player);

			} else {

				videoStop(player);
			}

			container.removeClass('cb-player-initialized');
		}

		function initPlayer(container) {
			if(container.hasClass('cb-player-initialized')){
				return;
			}

			container.addClass('cb-player-initialized');

			if(container.hasClass("cb-media-is-ready")){
				toggleMediaStartSTopp(container);
			}else{
				getPlayerSrc(container);
			}
		}

		function watchProgressLoading(player){
			var container = $(player).closest(".cb-player");

			if(container.data('backtracking') == true){
				for (var i = 0; i < player.buffered.length; i++) {
					var buffer = player.buffered,
		    			time = player.currentTime;

					if(buffer.start(i) <= time && time <= buffer.end(i)){
						var loadPercentage = buffer.end(i) / player.duration * 100;
					}
				}

				container.find('.cb-player-progress-load').css('width', loadPercentage + '%');
			}
		}

		function setVolume(container, volume) {
			var player = container.find('.cb-player-media'),
				slider = container.find(".cb-player-volume-hide"),
				progress = container.find(".cb-player-volume-bar");

			if(volume.target){
				var e = volume;

				var sliderContainerV = container.find(".cb-player-volume-vertical"),
					sliderContainerH = container.find(".cb-player-volume-horizontal");

				if(sliderContainerH.length){
					volume =(e.pageX - slider.offset().left) / slider.width() * 100;
				}else if(sliderContainerV.length){
					volume = ((e.pageY - slider.offset().top - slider.width()) / slider.width()) * -1;
					volume = volume  * 100;
				}

				volume = Math.round(volume);

				if(volume < 0){
					volume = 0;
				}

				if(volume > 100){
					volume = 100;
				}
			}

			if(typeof volume === 'undefined'){
				return;
			}

			player[0].volume = volume / 100;

			if(slider.length && progress.length){
				slider.attr('aria-valuenow', volume);
				progress.css('width', volume + '%');
			}

			if(volume == 0){
				container.addClass("cb-player-is-muted");
				player.prop('muted', true);
			}else{
				container.removeClass("cb-player-is-muted");
				player.prop('muted', false);
			}
		}

		function formatTime(time, el){
			var time = time,
				timeNegative = false;

			if(typeof el === 'undefined'){
				el = false;
			}

			if(time < 0){
				//negative time
				time = Math.abs(time);
				timeNegative = true;
			}

			h = Math.floor(time / 3600);
			h = (h >= 10) ? h : "0" + h;

			m = Math.floor(time / 60) % 60;
			m = (m >= 10) ? m : "0" + m;

			s = Math.floor(time % 60);
			s = (s >= 10) ? s : "0" + s;

			if(el && !el.data('timeformat')){
				if(h > 0){
					el.data('timeformat', 'hh:mm:ss');
				}else{
					el.data('timeformat', 'mm:ss');
				}
			}

			var t = timeNegative ? '-' : '';
			if(el && (el.data('timeformat') == 'hh:mm:ss' || (el.data('is-livestream') && h > 0))){
				t = t + h + ':' + m + ':' + s;
			}else{
				t = t + m + ':' + s;
			}

			return t;
		}

		function setCurrentTime(container, time){
			var player = container.find('.cb-player-media');

			player[0].currentTime = time;
		}

		function playPosition(player, value) {
			var container = player.closest('.cb-player');

			if(container.data('is-livestream')){

				var totalDuration = container.data('duration'),
					duration = Math.ceil(totalDuration * (value / 100));

				playbacktime = totalDuration - duration
				currentDuration = container.data('currentDuration');

				setCurrentTime(container, currentDuration - playbacktime);

			}else{
				setCurrentTime(container, player[0].duration * (value / 100));
			}
		}

		function watchTimer(container) {
			var player = container.find('.cb-player-media'),
				progress = container.find('.cb-player-progress');
				progressVisibile = container.find('.cb-player-progress-play');


			if(container.data('is-livestream')){
				var duration = container.data('duration');
				var progresstime = (container.data('currentDuration') / duration) * 100;

				var playtime = player[0].currentTime;

				if(container.data('backtracking')){
					playtime = playtime - duration;
				}

			}else{
				var progresstime = player[0].currentTime * (100 / player[0].duration);
				var playtime = player[0].currentTime;
			}

			if(container.data('contextInfo') && container.data('is_hls')){
				container.find('.cb-debug-resolution').text(player[0].videoWidth + 'x' + player[0].videoHeight);
				container.find('.cb-debug-levels').text(container.data('level') + ' of ' + container.data('levels').length);
				container.find('.cb-debug-buffer').text(Math.round(container.data('buffer')) + 's');
				container.find('.cb-debug-duration').text(container.data('duration') + 's');
				container.find('.cb-debug-current').text(Math.round(player[0].currentTime) + 's');
			}

			if(container.data('is-livestream')){
				ariaValue = progress.attr('aria-valuenow');

				var value = ariaValue;
					progressTime = Math.ceil(duration / 100 * value);
					progressPercentage = progressTime / duration * 100;

				if(container.data('backtracking')){
					//check livestream position
					progressVisibile.css('width', progressPercentage + '%');

					if(Math.round(ariaValue) >= 99){
						playtime = 'Live';
					}else{
						playtime = -Math.abs((progressPercentage - 100) / 100 * duration);
					}
				}
			}else{
				progressVisibile.css('width', progresstime + '%');
				container.find('.cb-player-progress').attr('aria-valuenow', progresstime);
			}

			if($.isNumeric(playtime)){
				var playtime = formatTime(playtime, player.closest(".cb-player"))
			}

			player.closest(".cb-player").find(".cb-player-time-current").text(playtime);
		}

		function watchFullscreenStart(){
			if(!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement && !document.webkitDisplayingFullscreen) {
				$(".cb-player-is-fullscreen").removeClass("cb-player-is-fullscreen cb-player-control-hide");

				clearInterval(watchFullscreen);
			}
		}

		function toggleFullscreen(container, player){
			if(!$('.cb-player-is-fullscreen').length){

				if (player.requestFullScreen) {
				    player.requestFullScreen();
				} else if (player.mozRequestFullScreen) {
				    container[0].mozRequestFullScreen();
				} else if (player.webkitRequestFullscreen) {
					if(isTouchDevice()){
						player.webkitEnterFullScreen();
					}else{
						// container[0].webkitEnterFullScreen(Element.ALLOW_KEYBOARD_INPUT);
						container[0].webkitRequestFullscreen();
					}
				} else if (player.msRequestFullscreen) {
				    player.msRequestFullscreen();
				}else if(player.webkitSupportsFullscreen){
					//fullscreen support for ios
					player.webkitEnterFullScreen();
				}

				watchFullscreen = setInterval(watchFullscreenStart, 250);
				container.addClass("cb-player-is-fullscreen");

			} else {
				if (document.cancelFullScreen) {
				    document.cancelFullScreen();
				} else if (document.mozCancelFullScreen) {
				    document.mozCancelFullScreen();
				} else if (document.webkitCancelFullScreen) {
				    document.webkitCancelFullScreen();
				} else if (document.msExitFullscreen) {
				    document.msExitFullscreen();
				}
			}
		};

		function displayTime(container, position){
			if(container.data('is-livestream')){
				var duration = container.data('duration');
				displaytime = (position / 100 * duration) - duration;
			}else{
				var player = container.find('.cb-player-media');
				displaytime = player[0].duration * position / 100;
			}

			if(displaytime < 0 && !container.data('is-livestream')){
				displaytime = 0;
			}

			return displaytime;
		}

		function tooltip(container, position){
			var tip = container.find('.cb-player-progress-tooltip');

			tip.css('left', position + '%').text(formatTime(displayTime(container, position), container));
		}

		var lastTouchCoordinate = null;
		function seeking(e, container){
			if(e.type == 'touchmove' || e.type == 'touchstart'){
				var x = e.originalEvent.touches[0].pageX;

				lastTouchCoordinate = x;
			}else if(e.type == 'touchend'){
				x = lastTouchCoordinate;

				lastTouchCoordinate = null;
			}else{
				var x = e.pageX;
			}

			var progress = container.find('.cb-player-progress'),
				position = (x - progress.offset().left) / progress.width() * 100,
				position = position.toFixed(4);

			// container.find('.cb-player-poster').remove();

			if(position < 0){
				position = 0;
			}

			if(position > 100){
				position = 100
			}

			if(container.hasClass('cb-media-is-ready') && container.data('backtracking')){
				progress.attr('aria-valuenow', position);
				container.find('.cb-player-time-current').text(formatTime(displayTime(container, position), container));

				tooltip(container, position);

				if(e.type != 'touchmove'){
					playPosition(container.find(".cb-player-media"), position);
				}

				if(e.type == 'touchmove'){
					container.find('.cb-player-progress-play').css('width', position + '%');
				}
			}
		}

		if (!$(document).data('cb-media-initialized')) {

			var touchtimer = false;
			$(document).on('touchstart', '.cb-player-toggle-play, .cb-player-media', function(e){
				var container = $(this).closest(".cb-player");

				if(container.data('backgroundMode')){
					return;
				}

				if(container.hasClass('cb-player-control-hide')){
					//show controls on tocuh start
					container.removeClass('cb-player-control-hide');

				}else{
					touchtimer = true

					setTimeout(function(){
						touchtimer = false;
					}, 300);
				}
			});

			$(document).on(isTouchDevice() ? 'touchend' : 'click', '.cb-player-toggle-play, .cb-player-media, .cb-player-overlayer-button', function(e){
				var container = $(this).closest(".cb-player");

				if(container.hasClass('cb-player-is-loaded') || container.data('backgroundMode')){
					return;
				}

				if(e.type == 'touchend'){
					if(touchtimer){
				        initPlayer(container);

				        touchtimer = false;
					}
				}else{
					initPlayer(container);
				}
			});

			$(document).on(isTouchDevice() ? 'touchstart' : 'mouseenter', '.cb-player-progress-hide', function(e){
				var container = $(this).closest('.cb-player');

				if(!container.hasClass('cb-media-is-ready')){
					return;
				}

				if(container.data('backtracking') && e.type == "mouseenter"){
					container.find('.cb-player-progress-tooltip').stop().fadeIn(250);
				}
			});

			$(document).on('mouseleave', '.cb-player-progress-hide', function(e){
				var container = $(this).closest('.cb-player');

				if(container.hasClass('cb-player-is-seeking')){
					return;
				}

				container.find('.cb-player-progress-tooltip').stop().fadeOut(250);
			});

			$(document).on('mousemove', '.cb-player-progress-hide', function(e){
				var progress = $(this).closest('.cb-player-progress');
					container = progress.closest('.cb-player'),
					position = (e.pageX - progress.offset().left) / progress.width() * 100,
					position = position.toFixed(4);

				if(!container.hasClass('cb-media-is-ready')){
					return;
				}

				if(container.data('backtracking')){
					tooltip(container, position);
				}
			});

			$(document).on(isTouchDevice() ? 'touchstart' : 'mousedown' ,'.cb-player-progress', function(e){
				if(e.type == "mousedown"){
					if(e.which != 1){
						return false;
					}
				}

				var progress = $(this),
					container = $(this).closest('.cb-player'),
					player = container.find('.cb-player-media');

				container.addClass("cb-player-is-seeking");

				seeking(e, container);

				$(document).bind('mousemove.cbplayer-seeking touchmove.cbplayer-seeking', function(e){
					var e = e;

					if(container.data('is-livestream')){

						//fire seeking after mouseup

					}else{

						if(container.hasClass('cb-player-is-playing') && !player[0].paused && !container.hasClass('cb-player-is-loaded')){
							container.data('stopTemporary', true);
							player[0].pause();
						}

						seeking(e, container);
					}
				});

				e.stopPropagation();
				//e.preventDefault();
			});

			$(document).on(isTouchDevice() ? 'touchend' : 'mouseup', function(e){
				var container = $('.cb-player-is-seeking'),
					progress = container.find('.cb-player-progress'),
					player = container.find('.cb-player-media');

				if((e.type == 'touchend' || e.type == "mouseup") && container.hasClass("cb-player-is-seeking")){
					if(e.which != 1 && e.type == "mouseup"){
						return false;
					}

					$(this).unbind("mousemove.cbplayer-seeking");
					$(this).unbind("touchmove.cbplayer-seeking");

					container.removeClass("cb-player-is-seeking");

					if(!$(e.target).hasClass('cb-player-progress-hide')){
						container.find('.cb-player-progress-tooltip').fadeOut(250);
					}

					if(container.data('stopTemporary') && player[0].paused && !container.hasClass('cb-player-is-loaded')){
						container.data('stopTemporary', false);
						player[0].play();
					}

					if(e.type == 'touchend'){
						seeking(e, container);
					}

					e.stopPropagation();
				}
			});

			$(document).on('mousedown','.cb-player-volume-hide', function(e){
				if(e.type == "mousedown"){
					if(e.which != 1){
						return false;
					}
				}

				var progress = $(this),
					container = $(this).closest('.cb-player');

				container.addClass("cb-player-is-setvolume");

				setVolume(container, e);

				$(document).bind('mousemove.cbplayer-setvolume', function(e){
					var e = e;

					setVolume(container, e);
				});

				e.preventDefault();
				e.stopPropagation();
			});

			$(document).on('mouseup', function(e){
				var container = $('.cb-player-is-setvolume');

				if(e.type == "mouseup" && container.hasClass("cb-player-is-setvolume")){
					if(e.which != 1){
						return false;
					}

					$(this).unbind("mousemove.cbplayer-setvolume");

					container.removeClass("cb-player-is-setvolume");
				}

				e.stopPropagation();
				e.preventDefault();
			});

			$(document).on(isTouchDevice() ? 'touchstart' : 'click', '.cb-player-toggle-mute', function(){
				var container = $(this).closest(".cb-player"),
					player = container.find('.cb-player-media');

				if(player.prop('muted')){
					var volumevalue = 100;
				}else{
					var volumevalue = 0;
				}

				setVolume(container, volumevalue);
			});

			$(document).on(isTouchDevice() ? 'touchstart' : 'click', '.cb-player-toggle-fullscreen', function(){
				var container = $(this).closest(".cb-player");
					player = container.find(".cb-player-media")[0];

				toggleFullscreen(container, player);
			});

			$(document).on('contextmenu', function(e){
				var container = $(e.target).closest('.cb-player');

				if(container.length){
					var context = container.find('.cb-player-context');

					if(context.hasClass('cb-player-context-active')){
						context.removeClass('cb-player-context-active');
						return false;
					}

					context.addClass('cb-player-context-active');

					var cursorX = e.pageX - container.offset().left,
						cursorY = e.pageY - container.offset().top,
						contextXEnd = cursorX + context.width(),
						contextYEnd = cursorY + context.height();

					if(container.width() > contextXEnd){
						context.css('left', cursorX);
					}else{
						context.css('left', cursorX - context.width());
					}

					if(container.height() > contextYEnd){
						context.css('top', cursorY);
					}else{
						context.css('top', cursorY - context.height());
					}
					return false;
				}
			});

			$(document).on('click', function(){
				if($('.cb-player-context-active').length){
					$('.cb-player-context-active').removeClass('cb-player-context-active');
				}
			});

			$(document).on('click', '.cb-player-context-item.link', function(){
				var item = $(this),
					container = item.closest('.cb-player');

				container.find('.cb-player-' + item.data('link')).css('display', 'block');
			});

			$(document).on('click', '.cb-player-overlayer-close', function(){
				$(this).closest('.cb-player-overlayer').css('display', 'none');
			});

			$(document).data('cb-media-initialized', true);
		}

		if(options == 'initSource'){
			var el = $(this),
				container = el;

			if(el.is("video")){
				container = el.closest('.cb-player');
			}

			if(container.data('is-livestream')){
				return;
			}

			getPlayerSrc(container, false);
			return;
		}

		if (options == "mediaStopAll") {
			stopPlayingAll();
			return;
		}

		if(options == 'mediaStop'){
			var container = $(this);

			if(container.is("video")){
				container = container.closest('.cb-player');
			}

			video = container.find('.cb-player-media')[0];

			videoStop(video);
		}

		if(options == 'mediaPlay'){
			var container = $(this);

			if(container.is("video")){
				container = container.closest('.cb-player');
			}

			if(!container.hasClass('cb-media-is-ready')){
				initPlayer(container);
			}else{
				video = container.find('.cb-player-media')[0];
				videoStart(container, video);
			}
		}

		if (options == "mediaRestart") {
			var container = $(this),
				media = container.find('.cb-player-media');

			media[0].currentTime = 0;

			initPlayer(container);

			return;
		}

		return $(this).each(function(){
			var el = $(this),
				watchControlHide;

			if(el.is('video') || el.is('audio')){
				if(el.closest('.cb-player').data('initialized')){
					return;
				}

				if(el.closest('.cb-player').length){
					el = el.closest('.cb-player');
				}

			}else{
				if(el.data('initialized')){
					return;
				}
			}

			var settings = {
				tpl : 'default',
				/*
					use custom player template
					settings: default, false
				*/
				controlBar: true,
				/* enable/disable complete controls */
				controlTime: true,
				/* enable/disable  current/duration time */
				controlProgress: true,
				/* enable/disable progress bar */
				controlFullscreen: true,
				/* enable/disable fullscreen button */
				controlAudio: true,
				/* enable/disable mute/volume */
				overlayButton: true,
				/* enable/disable overlay play button*/
				controlHide: true,
				/* hide controls on leave container or mousemove stop longer as 'controlHideTimeout' */
				controlHideTimeout: 3000,
				/* timeout to hide control on mousemove */
				backtracking: true,
				/* disable duratuon/progressbar */
				hlsStopLoad: false,
				/* stop buffering hls stream on video stop*/
				volume: 100,
				/* set volume */
				volumeOrientation: 'vertical',
				/* set volumeslider orientation - vertival/horizontal */
				contextInfo: false,
				/* set context info - debug mode */
				backgroundMode: false,
				/* video autostart/loop/muted - never stop on start other videos */
				autoplay: false,
				/* video autoplay */
				muted: false,
				/* video muted*/
				loop: false,
				/* video loop*/
				mediaIsInit: false,
				/* callback media container create */
				mediaIsPlay: false,
				/* callback media start play */
				mediaIsPause: false,
				/* callback media stop */
				mediaIsEnd: false,
				/* callback media end play*/
			}

			settings = $.extend(settings, options);

			var	spinner = $('<div class="cb-player-spinner-wrap"><div class="cb-player-spinner"></div></div>'),
				overlayerButton = $('<div class="cb-player-overlayer-button"></div>');

			if(el.is("audio")){
				el.addClass('cb-player-media');

				el.wrap('<div class="cb-player"></div>');
				var wrap = el.closest('.cb-player');
			}else if(el.is("video")){
				el.addClass('cb-player-media');

				el.wrap('<div class="cb-player"></div>');
				var wrap = el.closest('.cb-player');
			}else{
				var wrap = el;

				el = wrap.find("video, audio");
				el.addClass('cb-player-media');
			}

			if(el.is("video")){

				if(!wrap.find('.cb-player-spinner-wrap').length){
					spinner.appendTo(wrap);
				}

				if(settings.overlayButton && !wrap.find('.cb-player-overlayer-button').length){
					overlayerButton.appendTo(wrap);
				}
			}

			if(!el.find("source").data("src") && !el.find("source").attr('src') && !el.attr('src') && !el.data('src')){
				console.warn('Source is empty');
				return;
			}

			// if(el.attr('poster')){
			// 	$('<div class="cb-player-poster" style="background-image: url('" + el.attr('poster') + "')"></div>').appendTo(wrap);
			// }

			var control = $('<div class="cb-player-controls"></div>');
			var play = $('<div class="cb-player-play cb-player-toggle-play"><span class="cb-player-button-play"></span><span class="cb-player-button-pause"></span><span class="cb-player-button-replay"></span></div>');
			var time = $('<div class="cb-player-time"><span class="cb-player-time-current">00:00</span><span class="cb-player-time-seperator">/</span><span class="cb-player-time-duration">00:00</span></div>');
			var progress = $('<span class="cb-player-progress" role="slider" aria-valuenow="0"><div class="cb-player-progress-hide"></div><div class="cb-player-progress-play"></div><div class="cb-player-progress-load"></div></span>');
			var mute = $('<div class="cb-player-volume-wrap"><div class="cb-player-toggle-mute"><span class="cb-player-button-sound"></span><span class="cb-player-button-mute"></span></div></div>');
			var volume = $('<div class="cb-player-volume-' + settings.volumeOrientation + '"><span class="cb-player-volume"><div class="cb-player-volume-hide" role="slider" aria-valuenow=""></div><div class="cb-player-volume-bar"></div></span></div>');
			var fullscreen = $('<div class="cb-player-fullscreen cb-player-toggle-fullscreen"><span class="cb-player-button-fullscreen-on"></span><span class="cb-player-button-fullscreen-off"></span></div>');

			var tooltip = $('<span class="cb-player-progress-tooltip"></span>').prependTo(progress);

			var context = $('<ul class="cb-player-context"><li class="cb-player-context-item">CBplayer ' + playerVersion + '</li></ul>');

			if(settings.contextInfo){

				var debugLink = $('<li class="cb-player-context-item link" data-link="debug">Debug-info</li>');
				context.append(debugLink);

				var debug = $('<div class="cb-player-overlayer cb-player-debug"><div class="cb-player-overlayer-close"></div></div>');

				debug.append($('<div class="cb-player-debug-item"><div class="cb-player-debug-item-type">Resolution:</div><div class="cb-player-debug-item-value cb-debug-resolution"></div></div>'));
				debug.append($('<div class="cb-player-debug-item"><div class="cb-player-debug-item-type">QualityLevels:</div><div class="cb-player-debug-item-value cb-debug-levels"></div></div>'));
				debug.append($('<div class="cb-player-debug-item"><div class="cb-player-debug-item-type">Buffer:</div><div class="cb-player-debug-item-value cb-debug-buffer"></div></div>'));
				debug.append($('<div class="cb-player-debug-item"><div class="cb-player-debug-item-type">Duration:</div><div class="cb-player-debug-item-value cb-debug-duration"></div></div>'));
				debug.append($('<div class="cb-player-debug-item"><div class="cb-player-debug-item-type">CurrentTime:</div><div class="cb-player-debug-item-value cb-debug-current"></div></div>'));

				wrap.append(debug);
			}

			if(el.is("video")){
				wrap.append(context);
			}

			if(settings.tpl == 'default' && !settings.backgroundMode){

				control.append(play);

				if(settings.controlTime){
					control.append(time);
				}

				if(settings.controlProgress){
					control.append(progress);
				}

				if(settings.controlAudio){
					volume.appendTo(mute);
					control.append(mute);
				}

				if(!el.is("audio") && settings.controlFullscreen){
					control.append(fullscreen);
				}

				if(settings.controlBar){
					wrap.append(control);
				}
			}

			$('<div class="cb-player-error"><div class="cb-player-error-message"></div></div>').appendTo(wrap);

			var volume = settings.volume;
			if(settings.muted || settings.backgroundMode || el.attr('muted')){
				el.prop('muted', true);
				volume = 0;
			}

			var autoplay = settings.autoplay;
			if(el.attr('autoplay')){

				el.removeAttr('autoplay');

				autoplay = true;
			}

			var loop = settings.loop;
			if(settings.backgroundMode || el.attr('loop')){

				el.removeAttr('loop');

				loop = true;
			}

			wrap.data({
				'initialized': true,
				'backtracking': settings.backtracking,
				'contextInfo': settings.contextInfo,
				'backgroundMode': settings.backgroundMode,
				'autoplay': autoplay,
				'volume': volume,
				'loop': loop,
				'hlsStopLoad': settings.hlsStopLoad,
			});

			function getbacktrackingPosition(container){
				var media = container.find('video, audio'),
					durationTime = Math.round((media[0].duration) - container.data('duration')),
					playTime = Math.round(media[0].currentTime - container.data('duration'));

				return durationTime - playTime;
			}

			function startWatchControlHide(container){
				if(container.hasClass("cb-player-is-playing") && settings.controlHide){
					clearTimeout(watchControlHide);
					container.removeClass('cb-player-control-hide');

					watchControlHide = setTimeout(function(){
						container.addClass('cb-player-control-hide');
					}, settings.controlHideTimeout);
				}
			}

			el.on("timeupdate", function(){
				var container = $(this).closest(".cb-player"),
					progress = container.find(".cb-player-progress-play");

				if(container.hasClass("cb-media-is-ready") && progress.length){
					watchTimer(container);
				}
			});

			el.on('durationchange', function(e){
				var container = $(this).closest(".cb-player"),
					progress = container.find(".cb-player-progress"),
					slider = progress.find(".cb-player-progress-hide");

				if(container.data('pause') && container.data('is-livestream') && container.data('backtracking')){

					if(slider.length){
						//media backtracking duration - current duration - current playtime / backtracking duration * 100
						var position = (container.data('duration') - getbacktrackingPosition(container)) / container.data('duration') * 100,
							position = position.toFixed(4);

						progress.attr('aria-valuenow', position);

						container.data('pause', false);
					}
				}
			});

			var setLevel;

			el.on('play', function(e){
				var container = $(this).closest(".cb-player"),
					progress = container.find(".cb-player-progress");

				//container.find('.cb-player-poster').remove();

				//is current position behind media duration, set new position
				if(getbacktrackingPosition(container) >= container.data('duration') && container.data('backtracking') && container.data('is-livestream')){
					position = 0.01;

					progress.attr('aria-valuenow', position);
					playPosition(el, position);
				}

				if ($.isFunction(settings.mediaIsPlay)) {
				    settings.mediaIsPlay.call(this, wrap);
				}
			});

			el.on('playing', function(e){
				var container = $(this).closest(".cb-player");

				container.addClass("cb-player-is-playing");
			});

			el.on('pause', function(e){

				var container = $(this).closest(".cb-player");

				clearTimeout(watchControlHide);

				//set new current position for livestreaming after media stoped
				container.data('pause', true);

				if ($.isFunction(settings.mediaIsPause)) {
				    settings.mediaIsPause.call(this, wrap);
				}

				if(container.hasClass('cb-player-is-seeking')){
					return;
				}

				container.removeClass("cb-player-is-playing cb-player-control-hide");

				if(typeof hls !== 'undefined' && container.data('hlsStopLoad')){
					hls.stopLoad();
				}
			});

			el.on('seeking', function(e){
				var container = $(this).closest(".cb-player");

				clearTimeout(watchControlHide);
				container.removeClass('cb-player-control-hide');
			});

			el.on('seeked', function(e){
				var container = $(this).closest(".cb-player");
				startWatchControlHide(container);
			});

			el.on('waiting', function(){
				var container = $(this).closest(".cb-player");
				container.addClass("cb-player-is-loaded");
			});

			el.on('canplay', function(){
				var container = $(this).closest(".cb-player");
				container.removeClass("cb-player-is-loaded");
			});

			el.on('ended', function(){
				var container = $(this).closest(".cb-player");

				container.removeClass("cb-player-is-playing cb-player-control-hide").addClass("cb-payer-is-replay");

				if ($.isFunction(settings.mediaIsEnd)) {
				    settings.mediaIsEnd.call(this, wrap);
				}

				if(wrap.data('loop')){
					toggleMediaStartSTopp(wrap);
				}
			});

			wrap.mouseenter(function(){
				var container = $(this);

				if(container.hasClass("cb-player-is-playing") && settings.controlHide){
					clearTimeout(watchControlHide);
					container.removeClass('cb-player-control-hide');
				}
			});

			wrap.mouseleave(function(){
				var container = $(this);

				if(container.hasClass("cb-player-is-playing") && settings.controlHide){
					container.addClass('cb-player-control-hide');
				}
			});

			wrap.mousemove(function(){
				var container = $(this);
				startWatchControlHide(container);
			});

			if ($.isFunction(settings.mediaIsInit)) {
			    settings.mediaIsInit.call(this, wrap);
			}

			setTimeout(function(){
				if((wrap.data('autoplay') && $('.cb-player-is-playing').length == 0) || wrap.data('backgroundMode')){
					initPlayer(wrap);
				}
			});
		});
	}
})(jQuery);
