/*
 * jQuery UI Autocomplete HTML Extension
 *
 * Copyright 2010, Scott González (http://scottgonzalez.com)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * http://github.com/scottgonzalez/jquery-ui-extensions
 */
(function( $ ) {

var proto = $.ui.autocomplete.prototype,
	initSource = proto._initSource;
function filter( array, term ) {
  var maxCount = 6
  var res = new Array()
  for (var i = 0; i < array.length; i++) {
    var test = $(array[i].label).text().toLowerCase()
    term = term.toLowerCase()
    if (test.indexOf(term) == 0 ||
        test.indexOf(" " + term) > 0 ||
        test.indexOf("." + term) > 0 ||
        test.indexOf("_" + term) > 0 ||
        test.indexOf("-" + term) > 0 ||
        test.indexOf("@" + term) > 0 ||
        test.indexOf("(" + term) > 0)
      res.push(array[i])
    if (res.length > maxCount)
      return res
  }
  return res
}

$.extend( proto, {
	_initSource: function() {
		if ( this.options.html && $.isArray(this.options.source) ) {
			this.source = function( request, response ) {
				response( filter( this.options.source, request.term ) );
			};
		} else {
			initSource.call( this );
		}
    $('.ui-menu-item').live('hover', function() {$('.ui-menu-item').removeClass('ui-menu-item-hovered');})
	},

	_renderItem: function( ul, item) {
		return $( "<li></li>" )
			.data( "item.autocomplete", item )
			.append( $( "<a></a>" )[ this.options.html ? "html" : "text" ]( item.label ) )
			.appendTo( ul );
	},
  _move: function (c, e) {
    if (this.menu.element.is(":visible"))
      if (this.menu.first()&&/^previous/.test(c)||this.menu.last()&&/^next/.test(c)) {
        this.element.val(this.term);
        this.menu.deactivate();
        $('.ui-menu-item').removeClass('ui-menu-item-hovered');
      }
      else {
        this.menu['next'] = function (d){
          this.move = function(d,c,e) {
            if (this.active) {
              d=this.active[d+"All"](".ui-menu-item").eq(0);
              d.length?this.activate(e,d):this.activate(e,this.element.children(c))
              $('.ui-menu-item').removeClass('ui-menu-item-hovered');
              this.active.addClass('ui-menu-item-hovered');
            } else {
              this.activate(e, this.element.children(c))
              $('.ui-menu-item').removeClass('ui-menu-item-hovered');
              $('.ui-menu-item:first').addClass('ui-menu-item-hovered');
            }
          }

          this.move("next",".ui-menu-item:first",d);
        }
        this.menu['previous'] = function (d){
          this.move = function(d,c,e) {
            if (this.active) {
              d=this.active[d+"All"](".ui-menu-item").eq(0);
              d.length?this.activate(e,d):this.activate(e,this.element.children(c))
              $('.ui-menu-item').removeClass('ui-menu-item-hovered');
              this.active.addClass('ui-menu-item-hovered');
            } else {
              this.activate(e, this.element.children(c))
              $('.ui-menu-item').removeClass('ui-menu-item-hovered');
              $('.ui-menu-item:last').addClass('ui-menu-item-hovered');
            }
          }
          this.move("prev",".ui-menu-item:last",d);
        }
        this.menu[c](e);
        this.element.val(this.term);
      }
    else this.search(null,e)
  }
});

})( jQuery );
