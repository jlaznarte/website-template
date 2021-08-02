/**
 * Highwire Article References pop up
 *
 * Copyright (c) HighWire Press, Inc.
 * This software is open-source licensed under the GNU Public License Version 2 or later
 * The full license is available in the LICENSE.TXT file at the root of this repository
 */
 
 (function ($) {
  Drupal.behaviors.articleGloPopup = {
    attach: function(context, settings) {
      
      $('a.xref-list', context).once('article-glo-popup', function() {
        
        var defId = $(this).attr("href").replace('#def', 'def-item');

        if( defId.length )  {
          $(this).attr('rel', "#"+ defId +"+dd");

          $(this).cluetip({
            onActivate: function(event) {
              // Disable for mobile
              var activate = true;
              if (Drupal.highwireResponsive) {
                var currentLayout = Drupal.highwireResponsive.getCurrentLayout();
                activate = currentLayout !== 'mobile' ? true : false;
              }
              return activate;
            },
            local: true,
            showTitle: false,
            width: 'auto',
            hideLocal: false,
            sticky: true,
            mouseOutClose: 'both',
            closePosition: 'none',
            dropShadow: false,
            cluetipClass: 'article-glo-popup'
          });
        }
        else {
          $(this).addClass( "hw-no-reference");
        }

      });
    }
  };
})(jQuery);
