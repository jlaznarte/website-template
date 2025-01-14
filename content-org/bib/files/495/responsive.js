/** RESPONSIVE JS**/

/* Callback for Arabic Slider */
function rtlSwapItems(el) {
    el.children().each(function(i,e) {
        $(e).parent().prepend($(e));
    });
}

function rtlCallback(el) {
    var pagination = el.find('.owl-pagination');
    var numbers = pagination.find('.owl-numbers');
    var pages = pagination.find('.owl-page');
    var numbersLength = numbers.length;

    pages.each(function(i,e) {
        var $e = $(e);
        if($e.hasClass('active')) {
            $e.siblings().andSelf().removeClass('hide-page')
            $e.prev().prevAll().addClass('hide-page');
            $e.next().nextAll().addClass('hide-page');
        }
    });

    if( numbers.eq(0).data('owl-flipped') === true ) {
        return false;
    }

    numbers.each(function(i,e) {
        var $en = $(e);
        $en.data('owl-flipped',true);
        var number = $en.text();
        var newNumber = Math.abs( (number - (numbersLength + 1)) );
        $en.text(newNumber);
    });
}

function goToFirstSlide(base) {
    // Be on the first slide
    base.startPosition();
    base.updateControls();
}

//ADDED for campaign button Ebola - only displays for screen width < 720
function campaignHighlight(image, id,lang) {
	
	if (!sessionStorage.getItem("campaignClose")) { //Only shows if user has not already closed it in the same session
	
		//DOM insert for banner icon
		var htmlString = "<div class = 'clear'></div>"
						//+ "<div id='campaignHighlight'> <a href='http://www.globalproblems-globalsolutions.org/site/Donation2?9260.donation=form1&amp;df_id=9260'><img src='" 
						+ "<div id='campaignHighlight'> <a href='http://www.who.int/campaigns/aids-day/2015/"+lang+"/index.html'><img src='" 
						+ image 
						+ "' alt='WHO campaigns' id='"
						+ id
						+ "'></a><a class='closeCampaign'></a></div>"
						;
		$('#header').before(htmlString);
	}
	
	//Close the donate banner
	$(".closeCampaign").click(function(){
		$("#campaignHighlight").hide(1000);
		
		sessionStorage.setItem("campaignClose","true");
	});
	
}

jQuery(document).ready(function($) {
    // iOS7 bug work around hack to trigger matchMedia events
    // Hack is to trigger a reflow/paint event on orientation change
    // Remove this code block if Apple rolls out a fix.
    // Refer - https://github.com/WickyNilliams/enquire.js/issues/79
    var $shim = $('<div id="ios7-matchMedia-fix"></div>'),
        onOrientationChange = function() {
            $shim.css('width', window.innerWidth / 2);
        };
    $(document.body).append($shim);
    $(window).bind('orientationchange', onOrientationChange);

    // Homepage
    $('.homepage_sections .module_col_2 .teaser').filter(':first').addClass('first-highlight');

    // Search click/touch event
    $('#mobile-search-icon').on('click touchstart', function(event) {
        // Stop bubbling up to trigger #page click event
        event.stopPropagation();
        event.preventDefault();

        if (event.handled !== true) {
            $('#mobile-search-icon').toggleClass('mobile-icon-active');
            $('#search').toggleClass('show');

            if ($(window).width() <= 720) {
                $('#navigation').removeClass('show');
                $('#mobile-nav-icon').removeClass('mobile-icon-active');
            }

            event.handled = true;
        }
        else {
            return false;
        }
    });

    // Navigation click/touch event
    $('#mobile-nav-icon').on('click touchstart', function(event) {
        // Stop bubbling up to trigger #page click event
        event.stopPropagation();
        event.preventDefault();

        if (event.handled !== true) {
            $('#mobile-nav-icon').toggleClass('mobile-icon-active');
            $('#navigation').toggleClass('show');

            $('#search').removeClass('show');
            $('#mobile-search-icon').removeClass('mobile-icon-active');

            event.handled = true;
        }
        else {
            return false;
        }
    });

    $('#search_input #q').on('click touchstart', function(event) {
        // Stop bubbling up to trigger #page click event
        event.stopPropagation();
    });

    // Hide menu and search on clicking outside.
    // On iOS the event doesn't bubble up all the way up to the body
    // and that's the reason why we bind the event to #page.
    $('#page').on('click', function() {
        if ($(window).width() <= 720) {
            $('#search').removeClass('show');
            $('#navigation').removeClass('show');
            $('#mobile-search-icon').removeClass('mobile-icon-active');
            $('#mobile-nav-icon').removeClass('mobile-icon-active');
        }
    });

    // enquire.js register
    // Load enquire only for browsers that support media queries
    if (!(typeof enquire === 'undefined')) {
        enquire.register("screen and (max-width:940px)", {
            match : function() {
                $('#search').removeClass('show');
                $('#mobile-search-icon').removeClass('mobile-icon-active');
                $('#mobile-nav-icon').removeClass('mobile-icon-active');
            },
            unmatch : function() {
                $('#search').addClass('show');
            }
        });

        enquire.register("screen and (max-width:720px)", {
            match : function() {
                $('#navigation').removeClass('show');
                $('#mobile-search-icon').removeClass('mobile-icon-active');
                $('#mobile-nav-icon').removeClass('mobile-icon-active');
            },
            unmatch : function() {
                $('#navigation').addClass('show');
            }
        });

        enquire.register("screen and (max-width:768px)", {
            match : function() {
                // Footer
                $('#doormat ul').not('.footer-social-links').hide();
                $('body').on("click", "#doormat h3", function() {
                    $(this).siblings('ul').toggle();
                    $(this).parent().toggleClass('expanded');
                });

                // Two column layout
                $('.subcol_1-1_1 .box h3.box_title, .subcol_1-1_2 .box h3.box_title').each(function() {
                    $(this).parent().addClass('subcol-accordion');
                    $(this).siblings().toggle();

                    $(this).on("click", function() {
                        $(this).parent().toggleClass('expanded');
                        $(this).siblings('*:not(h3)').toggle();
                    });
                });

                // Corporate links
                // col_1-1-1 is so to not apply for a-z pages.
                $('div[class^="col_1-1-1_"] .largebox ul').hide();
                $('div[class^="col_1-1-1_"] .largebox h3').each(function() {
                    $(this).parent().addClass('accordion');
                    $(this).on("click", function() {
                        $(this).siblings('ul').toggle();
                        $(this).parent().toggleClass('expanded');
                    });
                });
            },
            unmatch : function() {
                // Footer
                $('#doormat ul').not('.footer-social-links').show();
                $('#doormat').children().removeClass('expanded');
                $('body').off("click", "#doormat h3");

                // Two column layout
                $('.subcol_1-1_1 .box, .subcol_1-1_2 .box').children().show();
                $('.subcol_1-1_1 .box h3, .subcol_1-1_2 .box h3').off("click");
                $('.subcol_1-1_1 .box, .subcol_1-1_2 .box').removeClass("expanded");

                // Corporate links
                $('div[class^="col_1-1-1_"] .largebox ul').show();
                $('div[class^="col_1-1-1_"] .largebox h3').off('click');
                $('div[class^="col_1-1-1_"] .largebox').removeClass("expanded");
            }
        });

        // Story : more/less
        if ($('.more-less-wrapper p').length > 2) {
            // More-less translation
            var moreLessText = {
                en : ["Read more", "Read less"],
                ar : ["النص الكامل", "النص المختصر"],
                zh : ["全文", "简短文"],
                fr : ["Lire la suite", "Refermer"],
                ja : ["詳細を表示", "要約して表示"],
                pt : ["Mais texto", "Menos texto"],
                ru : ["Читать дальше", "Свернуть"],
                es : ["Más texto", "Menos texto"]
            };

            var minTextLength = 200;
            var language = (typeof lang === 'undefined') ? 'en' : lang;
            var moreText = (typeof moreLessText[language] === 'undefined') ? moreLessText["en"][0] : moreLessText[language][0];
            var lessText = (typeof moreLessText[language] === 'undefined') ? moreLessText["en"][1] : moreLessText[language][1];
            enquire.register("screen and (max-width: 620px)", {
                match : function() {
                    var i = 0;
                    $('.more-less-wrapper').each(function() {
                        var count = 0;
                        var containerFlag = false;
                        // Loop over each element since there could be other elements than just p.
                        // Hide everything after second p
                        $(this).children().not('.more-less-container, .paging').each(function() {
                            if (count < 2 && $(this).is('p') && $(this).text().length > minTextLength) {
                                count++;
                                return;
                            }

                            if (count >= 2) {
                                $(this).addClass('active hide');
                                if (!containerFlag) {
                                    i++;
                                    containerFlag = true;
                                }
                            }
                        });

                        // Build more/less link.
                        if (containerFlag) {
                            if (!$('#more-less-' + i).length) {
                                var moreLessWrapper = $("<div class=\"more-less-container\"><a id=\"more-less-" + i + "\" class=\"more-less\" href='#'>" + moreText + "</a></div>");
                                moreLessWrapper.find('a').on('click', function() {
                                    var linkText = $(this).text() == moreText ? lessText : moreText;
                                    $(this).text(linkText);
                                    $(this).parent().siblings('.active').toggleClass('hide');
                                    $(this).parent().toggleClass('expanded');

                                    return false;
                                });
                                $(this).children().not('.paging').last().after(moreLessWrapper);
                            }
                        }
                    });

                    // This is basically for the resize
                    $('.more-less').text(moreText);
                    $('.more-less').show();
                },
                unmatch : function() {
                    $('.more-less-wrapper').children().removeClass('hide');
                    $('.more-less-container').removeClass('expanded');
                    $('.more-less').hide();
                }
            });
        }

        // Sub navigation on media center/news page
        enquire.register("screen and (max-width:620px)", {
            match : function() {
                $('#subnavigation ul.subnavigation').hide();
                $('body').on("click", "#subnavigation h3", function() {
                    $(this).siblings('ul').toggle();
                    $(this).parent().toggleClass('expanded');
                });

                var count = 1;
                var checkFacet = setInterval(function() {
                    if ($("#facet ul.subnavigation").length > 1) {
                        $('#facet ul.subnavigation').addClass('hide');
                        $('body').on("click", "#facet h3", function() {
                            $(this).siblings('ul').toggleClass('hide');
                            $(this).parent().toggleClass('expanded');
                        });
                        clearInterval(checkFacet);
                    }
                    count++;
                    if (count > 10) {
                        clearInterval(checkFacet);
                    }
                }, 100);
            },
            unmatch : function() {
                $('#subnavigation ul.subnavigation').show();
                $('#facet ul.subnavigation').removeClass('hide');
                $('body').off("click", "#subnavigation h3, #facet h3");
                $('#subnavigation, #facet').children().removeClass('expanded');
            }
        });
    }

    // Language Slider
    $("#owl-language-carousel").owlCarousel({
        navigation : true,
        navigationText : ["",""],
        rewindNav : false,
        items : 6,
        itemsDesktop : [940,6],
        itemsDesktopSmall : [768,6],
        itemsTablet : [450,5],
        itemsMobile : [400,4],
        afterInit : function() {
            // Fix language slider extra spacing on full width
            if (!(typeof enquire === 'undefined')) {
                enquire.register("screen and (min-width:720px)", {
                    match : function() {
                        $('#owl-language-carousel .owl-item').addClass('language-slider-auto');
                    },
                    unmatch : function() {
                        $('#owl-language-carousel .owl-item').removeClass('language-slider-auto');
                    }
                });
            }
        }
    });
});
