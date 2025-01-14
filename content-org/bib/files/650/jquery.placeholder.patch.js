/*
* Placeholder plugin for jQuery
* ---
* Copyright 2010, Daniel Stocks (http://webcloud.se)
* Released under the MIT, BSD, and GPL Licenses.
*/

//DO NOT REPLACE THIS PLUGIN WITH ANOTHER VERSION!!!!
// AT LEAST BEFORE CHANGING CHECK HISTORY
// CAUSE THIS PLUGIN CUSTOMIZED!!!
(function($) {
  if (typeof $.fn.placeholder === 'function') return

  $.fn.focusP = function(isPass) {
    if ($(this).hasClass('realPlaceholder') && !$(this).val() && !isPass)
      return $.fn.focus.apply(this.data('fakeInput'))
    return this.focus()
  }
  function Placeholder(input) {
    this.realInput = input
    var newEl = input.is("textarea") ? $("<textarea>").attr({rows: input.attr('rows'), cols: input.attr('cols')}) : $('<input type="text">')
    this.fakeInput = newEl.addClass(input.attr('class') ? input.attr('class').replace(/(^|\s)js.?\w+/g, "") : "").addClass('fakePlaceholder')
    this.fakeInput.attr({style: input.attr('style'), id: input.attr('id')})
    this.fakeInput.css('color', '#6d6d6d')
    this.fakeInput.insertAfter(input.addClass('realPlaceholder')).val(input.attr('placeholder'))
    if (input.val()) {
      this.fakeInput.hide()
      input.show()
    } else {
      this.fakeInput.show()
      input.hide()
    }
    var _this = this
    this.fakeInput.keydown(function(e) {
      _this.fakeInput.hide()
      _this.realInput.show().focusP(true)
    }).bind('click, focus',function() {
          if (this.createTextRange) {
            var r = this.createTextRange();
            r.collapse(true);
            r.select();
          }
    })
    this.realInput.blur(function() {
      if (!_this.realInput.val()) {
        _this.realInput.hide()
        _this.fakeInput.show().blur()
      }
    })
    input.data({realInput: this.realInput, fakeInput: this.fakeInput})
  }


  $.fn.removePlaceholder = function() {
    var item = $(this)
    if (item.hasClass('realPlaceholder')) {
      item.removeClass('realPlaceholder').show().unbind('blur')
      var id = item.attr('id')
      id ? $('#' + id + '.fakePlaceholder').remove() : item.next('input.fakePlaceholder').remove()
    }
    return this
  }

  var NATIVE_SUPPORT = (!!("placeholder" in document.createElement( "input" )) && (navigator.platform !== "BlackBerry")) || /symbian/i.test(navigator.userAgent);
  $.fn.placeholder = function() {
    return NATIVE_SUPPORT ? this : this.each(function() {
      $(this).removePlaceholder()
      new Placeholder($(this));
    });
  }
})(jQuery);

$(function() {
  $("[placeholder]").not('.jsDynamicPlaceholder').placeholder()
})