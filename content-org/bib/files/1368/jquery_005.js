// rev 15.4

// From https://github.com/jquery/jquery-ui/blob/1.8.23/ui/jquery.ui.core.js
if (!$.isFunction($.fn.disableSelection)) {
	$.fn.disableSelection = function() {
		return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
			".ui-disableSelection", function( event ) {
				event.preventDefault();
			});
	};
}

(function ($) {
	var slideshowId = 0;

	$.fn.onLoad = function (fn) {
		$(this).each(function () {
			var el = $(this),
				img = new Image(),
				that = this;

			img.onload = function () {
				fn.call(that);
			};
			img.src = this.src;
		});
	};

	$.fn.slideshow = function(options, name, value) {
		function startAuto(container) {
			if (container.data("intervalInterval")) {
				// Already running, do nothing
				return;
			}

			if (container.data("interval")) {
				// Not running and interval set, so start
				container.data("intervalInterval", window.setInterval(function () {
					container.trigger("next");
				}, container.data("interval")));
			}
		}

		function stopAuto(container) {
			clearInterval(container.data("intervalInterval"));
			container.data("intervalInterval", null);
		}

		if (options == "remove") {
			var container = $(this),
				options = container.data("sys-slideshow-options");

			if (typeof options == "undefined") {
				// This element has not been initialized as a slideshow
				return container;
			}

			// Remove views
			container.find(".slideshow-navigation-arrows, .slideshow-navigation-bullets, .slideshow-navigation-thumbs")
				.remove();

			// Remove slide styles
			container.find(options.slideSelector)
				.removeClass("current")
				.css({
					display: "",
					opacity: "",
					position: "",
					top: "",
					left: "",
					zIndex: ""
				});

			// Remove slides container height
			container.find(".slides")
				.css({
					height: ""
				});

			// Remove container styles
			container
				.css({
					height: "",
					position: "",
					paddingBottom: ""
				});

			// Stop transitions
			container.find(".slides").stop();
			container.find(options.slideSelector).stop();

			// Stop auto advance interval
			stopAuto(container);

			// Remove events
			container.off(".sys-slideshow-" + container.data("sys-slideshow-id"));
			$(document).off(".sys-slideshow-" + container.data("sys-slideshow-id"));
			$(window).off(".sys-slideshow-" + container.data("sys-slideshow-id"));

			return $(this);
		}

		if (options == "start") {
			// Start auto advance interval
			return $(this).each(function () {
				startAuto($(this));
			});
		}

		if (options == "stop") {
			// Stop auto advance interval
			return $(this).each(function () {
				stopAuto($(this));
			});
		}

		// Helper function to add cross-browser transitions
		function setTransition(el, values) {
			var transition = "";
			if (typeof values == typeof []) {
				for (var i in values) {
					transition = transition + ", " + values[i];
				}
				transition = transition.substr(2);
			} else {
				transition = values;
			}
			el.css({
				"transition": transition,
				"-webkit-transition": transition,
				"-moz-transition": transition
			});
		}

		return $(this).each(function () {
			if (options == "option") {
				var container = $(this);

				// Set an option
				var newOptions = $.extend({}, container.data("sys-slideshow-options"));
				newOptions[name] = value;

				container
					.slideshow("remove")
					.slideshow(newOptions);

				return;
			}

			options = $.extend({
				// Settings
				arrows: false,
				bullets: false,
				thumbnails: false,
				slideClick: false,
				keyboard: true,
				duration: false,
				interval: false,
				cyclic: true,
				transition: "crossfade",
				easing: "linear",
				direction: "auto",
				autoHeight: true,
				slideInit: false,
				fadeOnTransition: false,
				slideSelector: ".slide",

				// Callbacks
				beforeslidechange: null
			}, options);

			var container = $(this),
				zIndex = 1, // Needed for cross fade
				h = 0, // Needed for cross fade
				touchStartX = 0,
				touchStartY = 0,
				touchTriggered;

			// Save options
			container.data("sys-slideshow-options", options);

			// Save internal ID required for event namespacing
			slideshowId = slideshowId + 1;
			container.data("sys-slideshow-id", slideshowId);

			// Special slideshow functions
			container
				.on("update-height.sys-slideshow-" + slideshowId, function () {
					if (options.autoHeight) {
						var slidesContainer = container.find(".slides"),
							slides = container.find(options.slideSelector);

						// Get max height of all slides
						var h = 0;
						slides.each(function () {
							var thisH = $(this).outerHeight();
							h = Math.max(h, thisH);
							// TODO If height is 0, wait for loading of images
						});

						// Set height of .slides
						slidesContainer.height(h);
						container.height(h);
					}

					// Adjust postion of slideshow navigation arrows
					if (options.arrows) {
						container.find(".slideshow-navigation-arrows .arrow").css("top", container.find(".slide, .slide-item").find("img:eq(0)").height() / 2 );
					}

				})
				.each(function () {
					var slidesContainer = container.find(".slides"),
						slides = container.find(options.slideSelector);

					container.trigger("update-height");

					// Tag slideshows that only have one slide
					if (slides.length==1) {
						container.addClass("single-slide");
					}
				});

			// Wait for image loading
			container.find("img").onLoad(function () {
				container.trigger("update-height");
			});

			function initSlide(slide, slideInitializedCallback) {
				if (slide.length == 0) {
					// No slide defined
					return;
				}

				if (slide.hasClass("sys-slideshow-initialized")) {
					// Already initialized
					return;
				}

				if (slide.hasClass("sys-slideshow-initializing")) {
					// Already initializing
					return;
				}

				slide.addClass("sys-slideshow-initializing");

				var slideInitCallback = function () {
					// "this" is the slide
					var slide = this;

					slide.removeClass("sys-slideshow-initializing");
					slide.addClass("sys-slideshow-initialized");

					if ($.isFunction(slideInitializedCallback)) {
						slideInitializedCallback.call(slide, slide);
					}
				};

				if (!$.isFunction(options.slideInit)) {
					// No callback defined -> mark slide as initialized
					slideInitCallback.call(slide);
					return;
				}

				// Call callback to initialize slide
				options.slideInit.call(slide, slide, $.proxy(slideInitCallback, slide));
			}

			function _goto(slideIndex, duration, reason) {
				// Go to specified slide
				var slides = container.find(options.slideSelector),
					nextSlide = slides.eq(slideIndex),
					currentSlide = container.find(".slide.current");

				if (container.hasClass("is-animating")) {
					// Slideshow is still running
					return;
				}
				if (nextSlide.length == 0) {
					// There is no such slide
					return;
				}
				if (nextSlide.is(".current")) {
					// Already showing that slide
					return;
				}
				if (!nextSlide.hasClass("sys-slideshow-initialized")) {
					// Not initialized yet -> wait for initialization
					initSlide(nextSlide, function () {
						_goto(slideIndex, duration, reason);
					});
					return;
				}

				// Animate slideshow
				var slideChangeOk = $.isFunction(options.beforeslidechange)
					? options.beforeslidechange.call(container, nextSlide, slideIndex)
					: true;
				if (slideChangeOk == null) {
					// We didn’t receive a return value from the callback, so assume it’s OK to proceed
					slideChangeOk = true;
				}
				if (!slideChangeOk) {
					// Do not change slides
					return;
				}

				container.trigger("beforeslidechange", nextSlide);

				if (options.transition == "crossfade" && duration) {
					// Cross fade
					container.addClass("is-animating");

					// Fade out current
					currentSlide
						.css({
							"z-index": 1,
							opacity: 1
						})
						.fadeTo(duration, 0)
						.queue(function (n) {
							// Hide current slide
							currentSlide.css({
								display: "none",
								opacity: "",
								zIndex: ""
							});

							n();
						});

					// Fade in next
					nextSlide
						.css({
							display: "block",
							opacity: 0
						})
						.fadeTo(duration, 1)
						.queue(function (n) {
							nextSlide
								.css({
									display: ""
								})
								.addClass("current")
								.siblings()
									.removeClass("current");

							// Trigger events
							container.trigger("slidechanged", nextSlide);

							// Reset classes
							container.removeClass("is-animating");

							n();
						});
				} else if (options.transition == "slide" && duration) {
					// Slide horizontally
					container.addClass("is-animating");

					// Determine direction
					var direction;
					switch (options.direction) {
						case "left":
						case "rtl":
						case "to left":
						case -1:
							direction = reason == "forward" || (reason != "backward" && slides.index(currentSlide) < slides.index(nextSlide))
								? -1
								: 1;
							break;
						case "always left":
						case "always to left":
							direction = -1;
							break;
						case "right":
						case "ltr":
						case "to right":
						case 1:
							direction = reason == "forward" || (reason != "backward" && slides.index(currentSlide) < slides.index(nextSlide))
								? 1
								: -1;
							break;
						case "always right":
						case "always to right":
							direction = 1;
							break;
						case "auto":
						default:
							direction = slides.index(currentSlide) < slides.index(nextSlide)
								? -1
								: 1;
					}

					// Slide out current
					currentSlide.css("margin-left", 0);
					var transitions = ["margin-left " + duration + "ms " + options.easing];
					if (options.fadeOnTransition) {
						transitions.push("opacity " + duration + "ms " + options.easing);
					}
					setTransition(currentSlide, transitions);
					currentSlide
						.css({
							"margin-left": (direction * 100) + "%",
							"opacity": options.fadeOnTransition ? 0 : 1
						})
						.delay(duration)
						.queue(function (n) {
							// Reset styles
							setTransition(currentSlide, "");
							currentSlide.css({
								"display": "none",
								"margin-left": "",
								"opacity": ""
							});
							n();
						});

					// Slide in next
					nextSlide.css({
						"display": "block",
						"margin-left": (direction * -100) + "%",
						"opacity": options.fadeOnTransition ? 0 : 1
					});
					setTransition(nextSlide, transitions);

					// Do slide
					setTimeout(function () {
						nextSlide
							.css({
								"margin-left": 0,
								"opacity": 1
							})
							.delay(duration)
							.queue(function (n) {
								// Reset styles
								setTransition(nextSlide, "");
								nextSlide.css({
									"margin-left": "",
									"opacity": ""
								});

								// Update status classes
								nextSlide
									.addClass("current")
									.siblings()
										.removeClass("current");

								// Trigger events
								container.trigger("slidechanged", nextSlide);

								// Reset classes
								container.removeClass("is-animating");

								n();
							});
					});
				} else {
					// No transition
					currentSlide.css("display", "none");
					nextSlide.css("display", "block");

					nextSlide
						.addClass("current")
						.siblings()
							.removeClass("current");

					container.trigger("slidechanged", nextSlide);
				}

				container.trigger("update-counter", slideIndex);
			}

			// Add handler
			container
				.disableSelection()
				.on("goto.sys-slideshow-" + slideshowId, function (e, slideIndex, customDuration) {
					container.trigger("user-navigated");
					_goto(slideIndex, customDuration == null ? options.duration : customDuration);
				})
				.on("update-counter.sys-slideshow-" + slideshowId, function (e, slideIndex) {
					container
						.find(".slideshow-counter-current")
							.text(slideIndex + 1);

				})
				.on("next.sys-slideshow-" + slideshowId, function () {
					// Show next slide
					var slides = container.find(options.slideSelector),
						currentSlide = $(this).find(".slide.current"),
						nextSlide = currentSlide.nextAll(options.slideSelector).eq(0);

					if (nextSlide.length==0 && options.cyclic) {
						nextSlide = slides.eq(0); // Take first slide if cyclic is set to true (otherwise there is no next slide)
					}

					if (nextSlide.length) {
						// Show/Hide slideshow navigation arrows
						var nextNextSlide = nextSlide.nextAll(options.slideSelector).eq(0);
						if (nextNextSlide.length==0 && !options.cyclic) {
							container.find(".slideshow-navigation-arrows .slideshow-navigation-arrow-next").addClass("slideshow-navigation-arrow-hidden");
						}
						container.find(".slideshow-navigation-arrows .slideshow-navigation-arrow-prev").removeClass("slideshow-navigation-arrow-hidden");
					}

					_goto(slides.index(nextSlide), options.duration, "forward");
				})
				.on("prev.sys-slideshow-" + slideshowId, function () {
					// Show prev slide
					var slides = container.find(options.slideSelector),
						currentSlide = $(this).find(".slide.current"),
						nextSlide = currentSlide.prevAll(options.slideSelector).eq(0);

					if (nextSlide.length==0 && options.cyclic) {
						nextSlide = slides.eq(-1) // Take last slide if cyclic is set to true (otherwise there is no next slide)
					}

					if(!container.find(".slideshow-navigation-arrow-prev").hasClass("slideshow-navigation-arrow-hidden")){
						_goto(slides.index(nextSlide), options.duration, "backward");
					}

					if (nextSlide.length) {
						// Show/Hide slideshow navigation arrows
						var prevPrevSlide = nextSlide.prevAll(options.slideSelector).eq(0);
						if (prevPrevSlide.length==0 && !options.cyclic) {
							container.find(".slideshow-navigation-arrows .slideshow-navigation-arrow-prev").addClass("slideshow-navigation-arrow-hidden");
						}
						container.find(".slideshow-navigation-arrows .slideshow-navigation-arrow-next").removeClass("slideshow-navigation-arrow-hidden");
					}
				})
				.on("touchstart.sys-slideshow-" + slideshowId, function (e) {
					var event = e.originalEvent;
					touchStartX = event.touches[0].pageX;
					touchStartY = event.touches[0].pageY;
					touchTriggered = false;
				})
				.on("touchmove.sys-slideshow-" + slideshowId, function (e) {
					var event = e.originalEvent;
					var touchEnd = event.changedTouches[0],
						deltaX = touchEnd.pageX - touchStartX,
						deltaY = touchEnd.pageY - touchStartY;
					if (deltaX==0 || Math.abs(deltaX)<Math.abs(deltaY)) {
						return;
					}
					if (touchTriggered) {
						return;
					}
					e.preventDefault();
					if (deltaX < -50) {
						// Swiped left
						$(this).trigger("next");
						// Avoid continuous triggering
						touchTriggered = true;
					} else if (deltaX > 50){
						// Swiped right
						$(this).trigger("prev");
						// Avoid continuous triggering
						touchTriggered = true;
					}
				})
				.on("slidechanged.sys-slideshow-" + slideshowId, function (e, slide) {
					slide = $(slide);

					var nextSlide = slide.nextAll(options.slideSelector).eq(0);
					if (nextSlide.length == 0 && options.cyclic) {
						nextSlide = slides.eq(0);
					}
					initSlide(nextSlide);

					var prevSlide = slide.prevAll(options.slideSelector).eq(0);
					if (prevSlide.length == 0 && options.cyclic) {
						prevSlide = slides.eq(-1);
					}
					initSlide(prevSlide);
				});

			// Allow clicks on slide
			if (options.slideClick) {
				container.on("click.sys-slideshow-" + slideshowId, options.slideSelector, function () {
					container.trigger("user-navigated");
					container.trigger("next");
				});
			}

			// Key bindings
			if (options.keyboard) {
				$(document)
					.on("keydown.sys-slideshow-" + slideshowId, function (e) {
						// Are we visible
						if (container.position().top >= $(window).scrollTop() && container.position().top <= $(window).scrollTop() + $(window).height() / 2 && !container.hasClass("disabled")) {
							switch (e.keyCode) {
								case 37:
									container.trigger("user-navigated");
									container.trigger("prev");
									break;
								case 39:
									container.trigger("user-navigated");
									container.trigger("next");
									break;
							}
							e.stopPropagation();
						}
					});
			}

			// Init
			var slides = container.find(options.slideSelector);

			// Apply necessary styles for transition
			if (options.transition == "crossfade" && options.duration) {
				if (container.css("position") != "absolute" && container.css("position") != "fixed") {
					container.css("position", "relative");
				}
				slides.each(function () {
					$(this).css({
						"position": "absolute",
						"left": "0",
						"top": "0"
					});
				});
			}

			// Add navigation views
			if (slides.length > 1) {

				// Add arrows navigation if required
				if (options.arrows) {
					var nav = $('<div class="slideshow-navigation-arrows"><div class="slideshow-navigation-arrow slideshow-navigation-arrow-prev"></div><div class="slideshow-navigation-arrow slideshow-navigation-arrow-next"></div></div>');

					// Hide prev arrow on first slide, if cyclic is set to false
					if (!options.cyclic) {
						nav.find(".slideshow-navigation-arrow-prev").addClass("slideshow-navigation-arrow-hidden");
					}

					// Add click handlers
					nav
						.on("click", ".slideshow-navigation-arrow-prev", function () {
							container.trigger("user-navigated");
							container.trigger("prev");
						})
						.on("click", ".slideshow-navigation-arrow-next", function () {
							container.trigger("user-navigated");
							container.trigger("next");
						});

					// Append navigation
					container.append(nav);
				}

				// Add bullets navigation if required
				if (options.bullets) {
					var bulletContainer = $('<ul class="slideshow-navigation-bullets"/>'),
						nav = bulletContainer;
					slides.each( function () {
						var slide = $(this);

						// Add a bullet for each slide
						bulletContainer.append(
							$('<li class="slideshow-navigation-bullet"/>')
								.on("click", function () { // Add click handler
									var slides = container.find(options.slideSelector);

									container.trigger("user-navigated");
									_goto(slides.index(slide), options.duration);
								})
						);
					});


					// Update bullets upon change
					container.on("beforeslidechange.sys-slideshow-" + slideshowId, function (e, newCurrent) {
						var newCurrent = $(newCurrent),
							bullets = container.find(".slideshow-navigation-bullets li"),
							slides = container.find(options.slideSelector),
							index = slides.index(newCurrent); // Index of the new current slide

						bullets
							.removeClass("slideshow-navigation-bullet-selected")
							.eq(index).addClass("slideshow-navigation-bullet-selected"); // Make matching li selected
					});

					// Append navigation
					container.append(bulletContainer);

					// Update height upon resize or image loading
					var updateThumbsHeight = function () {
						// Wait for image init
						setTimeout(function () {
							// Make room for bullets
							container.css("padding-bottom", bulletContainer.outerHeight(true));
						}, 0);
					};
					container.on("update-height.sys-slideshow-" + slideshowId, updateThumbsHeight);

				}

				// Add thumbs
				if (options.thumbnails) {
					var thumbsContainer = $('<div class="slideshow-navigation-thumbs"/>'),
						nav = $('<ul class="thumbs"/>');

					// Add a thumbnail for each slide
					slides.each(function () {
						var slide = $(this),
							thumbSrc = slide.data("thumb-src");

						if (!thumbSrc) {
							return;
						}

						nav.append(
							$('<li class="thumb-item"/>')
								.append('<img src="' + thumbSrc + '" alt="" />')
								.on("click", function () {
									var slides = container.find(options.slideSelector);

									container.trigger("user-navigated");
									_goto(slides.index(slide), options.duration);
								})
						);
					});

					// Update thumbnails upon change
					var updateThumbsView = function (e, newCurrent) {
						var newCurrent = $(newCurrent),
							thumbs = container.find(".slideshow-navigation-thumbs li"),
							slides = container.find(options.slideSelector),
							index = slides.index(newCurrent); // Index of the new current slide

						// Highlight current thumb
						thumbs
							.removeClass("selected")
							.eq(index).addClass("selected"); // Make matching li selected

						// Hide all other thumbs not currently in view
						var thumbsPerPage = 6,
							firstThumb = Math.max(0, index + Math.ceil(thumbsPerPage / 2) + 1 > thumbs.length
								? thumbs.length - thumbsPerPage
								: index - Math.floor(thumbsPerPage / 2) + 1
							);
						thumbs
							.removeClass("thumb-visible")
							.removeClass("thumb-visible-first")
							.removeClass("thumb-visible-last")
							.addClass("thumb-hidden")
							.filter((firstThumb > 0 ? ":gt(" + (firstThumb - 1) + ")" : "") + ":lt(" + thumbsPerPage + ")")
								.addClass("thumb-visible")
								.removeClass("thumb-hidden")
								.eq(0)
									.addClass("thumb-visible-first")
								.end()
								.eq(-1)
									.addClass("thumb-visible-last");
					};
					container.on("beforeslidechange.sys-slideshow-" + slideshowId, updateThumbsView);

					// Append navigation
					thumbsContainer.append(nav);
					container.append(thumbsContainer);

					// Update height upon resize or image loading
					var updateThumbsHeight = function () {
						// Wait for image init
						setTimeout(function () {
							// Make room for thumbnails
							container.css("padding-bottom", thumbsContainer.outerHeight(true));
						}, 0);
					};
					container.on("update-height.sys-slideshow-" + slideshowId, updateThumbsHeight);

					// Trigger image loading on thumbs
					container.find(".thumb-item img").onLoad(function () {
						container.trigger("update-height");
					});

					// Make room for thumbnails
					updateThumbsHeight();
				}

				// init counter
				container
					.on("initcounter.sys-slideshow-" + slideshowId, function () {
						var numSlides = container.find(options.slideSelector).length;

						container.find(".slideshow-counter-total").text(numSlides);
						container.find(".slideshow-counter-current").text(1);
					});

			}

			$(window).on("resize.sys-slideshow-" + slideshowId, function () {
				container.trigger("update-height")
			});

			// Hide all slides but the first one
			slides.eq(0)
				.addClass("current")
				.css("z-index", 1);
			slides.not(":first")
				.css("display", "none");

			// Init first slide
			initSlide(slides.eq(0));

			// Init views
			container.trigger("beforeslidechange", slides.eq(0));
			container.trigger("slidechanged", slides.eq(0));
			container.trigger("initcounter");

			// Auto-operate slideshow
			if (options.interval) {
				container.data("interval", options.interval);
				startAuto(container);
				container.on("user-navigated.sys-slideshow-" + slideshowId, function () {
					stopAuto(container);
				});
			}
		});
	}
})(jQuery);
