jQuery(function($) {
  'use strict';
  if (window.article_initialised) {
    return;
  }
  window.article_initialised = true;
  var translations = {};
  $('.translations').each(function() {
    var item = $(this);
    translations[item.data('name')] = item.data('value');
  });

  // -------------------------------
  // Resizable
  // -------------------------------
  if (translations.hasOwnProperty('view_fullscreen')) {
    var MAX_WIDTH = 600;
    var ARTICLE_CLICK_VIEW = translations.view_fullscreen || 'Click to view fullscreen';
    var ARTICLE_CLICK_HIDE = translations.hide_fullscreen || 'Click anywhere to hide the fullscreen overlay';
    var ARTICLE_CLICK_MOVIE = translations.play_movie || 'Click to play the movie';
    var fullsize = $('<div />').css({
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'width': '100%',
      'height': '100%',
      'background-color': 'rgba(0, 0, 0, 0.8)',
      'display': 'none'
    }).addClass('fullsize').appendTo('body');
    var tip = $('<div />').text(ARTICLE_CLICK_HIDE).css({
      'width': '100%',
      'height': '18px',
      'font-size': '15px',
      'font-weight': 'bold',
      'background-color': '#4975bb',
      'color': 'white',
      'border': '1px solid #770',
      'text-align': 'center'
    }).appendTo(fullsize);
    var container = $('<div />').css({
      'margin': '50px',
      'overflow': 'auto',
      'text-align': 'center',
      'display': 'none'
    }).appendTo(fullsize);
    var standin = $('<div />').css('display', 'inline-block');

    /**
     * Allow image resizing
     */
    $("div#article img").each(function() {
      var sel = $(this);
      var process = function() {
        var parent = sel.parent();
        var parent_tag = parent[0].tagName.toLowerCase();
        if (parent_tag == 'p' || parent_tag == 'video') {
          return;
        }

        var natural_width = sel.width();
        var resized_width = MAX_WIDTH;
        if (natural_width <= resized_width) {
          return;
        }

        var natural_height = sel.height();
        var resized_height = natural_height * resized_width / natural_width;
        var show = function(event) {
          event.preventDefault();
          var current_offset = sel.offset();
          standin.width(resized_width).height(resized_height);
          sel.replaceWith(standin);
          var fs_width = fullsize.width();
          var fs_height = fullsize.height();
          var max_width = fs_width - 100;
          var max_height = fs_height - 100;
          var left = (fs_width - Math.min(natural_width, max_width)) / 2;
          var top = (fs_height - Math.min(natural_height, max_height)) / 2;
          var attributes = {
            'position': 'relative',
            'pointer-events': 'none',
            'width': resized_width,
            'height': resized_height,
            'left': current_offset.left - window.scrollX,
            'top': current_offset.top - window.scrollY,
            'background-color': '#fff'
          };
          sel.css(attributes).appendTo(fullsize);
          var finalize = function() {
            if (natural_width > max_width || natural_height > max_height) {
              container.width(max_width).height(max_height).show();
              sel.css({
                'left': '',
                'top': '',
                'position': ''
              });
              sel.appendTo(container);
            }
          };
          sel.animate({
            'left': left,
            'top': top,
            'width': natural_width,
            'height': natural_height
          }, {
            'complete': finalize
          });

          var hide = function(event) {
            event.preventDefault();
            container.hide();
            sel.appendTo(fullsize);
            sel.css({
              'position': 'relative',
              'left': left,
              'top': top,
              'width': natural_width,
              'height': natural_height
            });
            var finalize = function() {
              sel.css({
                'pointer-events': '',
                'width': standin.width(),
                'height': standin.height(),
                'left': '',
                'top': ''
              });
              standin.replaceWith(sel);
              sel.on('click', show);
              fullsize.hide();
              fullsize.off('click');
            };
            sel.animate({
              'width': resized_width,
              'height': resized_height,
              'left': current_offset.left - window.scrollX,
              'top': current_offset.top - window.scrollY
            }, {
              'complete': finalize
            });
            fullsize.animate({
              'opacity': 0
            });
            $(document).off('keyup.hide_fullsize');
          };

          var esc_event = function(event) {
            if (event.keyCode == 27) hide(event);
          };

          fullsize.on('click', hide);
          $(document).on('keyup.hide_fullsize', esc_event);

          fullsize.css('opacity', 0);
          fullsize.animate({
            'opacity': 1
          });

          fullsize.show();
        };

        sel.on('click', show);
        parent.addClass('resizable');
        sel.width(resized_width).height(resized_height);
        var overlay = $('<span/>').text(ARTICLE_CLICK_VIEW).addClass('overlay').appendTo(parent);
        overlay.css('left', (sel.width() - overlay.width()) / 2);
      };
      if (sel.width() === 0) {
        sel.on('load', process);
      } else {
        process();
      }
    });

    /**
     *  Document type video
     */
    $("div#article video").each(function() {
      var sel = $(this);
      var process = function() {
        var natural_width = sel.width();
        var resized_width = MAX_WIDTH;
        if (natural_width <= resized_width)
          return;
        var natural_height = sel.height();
        var resized_height = natural_height * resized_width / natural_width;
        var image = $('img', sel).clone();
        sel.replaceWith(image);
        image.prop('title', ARTICLE_CLICK_MOVIE);
        image.width(resized_width).height(resized_height);
        var parent = image.parent();
        parent.addClass('resizable');
        var overlay = $('<span/>').text(ARTICLE_CLICK_VIEW).addClass('overlay').appendTo(parent);
        overlay.css('left', (resized_width - overlay.width()) / 2);

        var hide = function(event) {
          if (event.target == sel[0]) return;
          try {
            sel[0].pause();
          } catch (e) {}
          event.preventDefault();
          // @todo animate back
          var finalize = function() {
            sel.prop('controls', '');
            sel.remove();
            standin.replaceWith(image);
            image.on('click', show);
            fullsize.hide();
            fullsize.off('click');
          };
          var current_offset = standin.offset();
          sel.animate({
            'width': resized_width,
            'height': resized_height,
            'left': current_offset.left - window.scrollX,
            'top': current_offset.top - window.scrollY
          }, {
            'complete': finalize
          });
          fullsize.animate({
            'opacity': 0
          });
          $(document).off('keyup.hide_fullsize');
        };
        var esc_event = function(event) {
          if (event.keyCode == 27) hide(event);
        };

        var show = function(event) {
          event.preventDefault();
          var current_offset = image.offset();
          standin.width(resized_width).height(resized_height);
          image.replaceWith(standin);

          var viewport = window.visualViewport !== undefined ? window.visualViewport : screen;

          var fs_width = Math.min(fullsize.width(), viewport.width);
          var fs_height = Math.min(fullsize.height(), viewport.height);
          var max_width = Math.min(natural_width, fs_width - 100);
          var max_height = Math.min(natural_height, fs_height - 100);
          var target_height = natural_height * max_width / natural_width;
          if (target_height > max_height) {
            max_width = natural_width * max_height / natural_height;
          } else {
            max_height = target_height;
          }
          var left = (fs_width - max_width) / 2;
          var top = (fs_height - max_height) / 2;
          var attributes = {
            'position': 'relative',
            'width': resized_width,
            'height': resized_height,
            'left': current_offset.left - window.scrollX,
            'top': current_offset.top - window.scrollY
          };
          sel.css(attributes).appendTo(fullsize);
          var finalize = function() {
            sel[0].setAttribute('controls', 'controls');
            try {
              sel[0].play();
            } catch (e) {}
          };
          sel.animate({
            'left': left,
            'top': top,
            'width': max_width,
            'height': max_height
          }, {
            'complete': finalize
          });
          fullsize.css('opacity', 0);
          fullsize.animate({
            'opacity': 1
          });
          fullsize.show();
          fullsize.on('click', hide);
          $(document).on('keyup.hide_fullsize', esc_event);
        };

        try {
          this.loop = true;
        } catch (e) {}
        image.on('click', show);
        sel[0].removeAttribute('controls');
      };

      if (sel.width() === 0) {
        sel.on('load', process);
      } else {
        process();
      }
    });
  }
 

  /**
   * Publicate article
   */
  $('.article_publication').click(function() {
    var dkey = $(this).attr('data-dkey');
    var state = $(this).attr('data-publication-state');
    $(this).before($('#wait-progress').show());
    $.ajax({
      url: translations.publication_url,
      'complete': function() {
        $('#wait-progress').hide();
      },
      'success': function(data) {
        $("span[data-publication-flag='" + dkey + "']").toggle();
        var sel = $("a[data-dkey='" + dkey + "']");
        if (state == 1) {
          sel.attr('data-publication-state', 0)
            .text(translations.publish_text)
            .addClass('article-published');
        } else {
          sel.attr('data-publication-state', 1)
            .text(translations.unpublish_text)
            .removeClass('article-published');
        }
      },
      dataType: 'json',
      type: 'post',
      data: {
        'dkey': dkey,
        'state': state
      }
    });
  });

  /**
   * OpenURL bloc
   */
  $('.open_url_help').click(function() {
    div = $('#help_bloc');
    if (div.style.display !== 'block') {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  });
});
