(function(t){Drupal.behaviors.articleAuthorPopup={attach:function(o,i){var e=!!jQuery.fn.cluetip;if(!e){if(window.console){console.error("HW's Cluetip behavior is called without the Cluetip library loaded. Please investigate.")};return};t("body",o).delegate(".has-author-tooltip span.highwire-citation-author:not(.hasTooltip)","mouseenter",function(o){var e=t(this),r=e.data("delta"),l=e.parents(".highwire-article-citation"),a=l.attr("id"),i="#hw-article-author-popups-"+a+" .author-tooltip-"+r;if(t(i).length>0){e.addClass("has-tooltip");e.attr("rel",i).cluetip({onActivate:function(t){var o=!0;if(Drupal.highwireResponsive){var e=Drupal.highwireResponsive.getCurrentLayout();o=e!=="mobile"?!0:!1};return o},local:!0,showTitle:!1,hideLocal:!0,sticky:!0,positionBy:"topBottom",mouseOutClose:"both",closePosition:"none",dropShadow:!1,arrows:!0,topOffset:25,cluetipClass:"article-author-popup"}).addClass("hasTooltip").trigger("mouseenter");o.preventDefault()}})}}})(jQuery);(function(a){if(a().jquery.split('.')[0]=='1'&&parseInt(a().jquery.split('.')[1])<6){if(typeof console=='object'){console.error('Panels Ajax Tab Error: jQuery 1.6 or higher required.')}};window.onpopstate=function(t){if(t.state!=null){a('a[data-panel-name="'+t.state.tab+'"]').panels_ajax_tabs_trigger()}};Drupal.behaviors.panels_ajax_tabs={attach:function(t){a('.panels-ajax-tab-tab',t).once('panels-ajax-tabs-once',function(){if(a(this).parent().hasClass('active')&&a(this).data('url-enabled')==1){if(typeof window.history.pushState!='undefined'){window.history.replaceState({'tab':a(this).data('panel-name')},a(this).html(),a(this).attr('href'))}};a(this).click(function(t){t.preventDefault();if(typeof window.history.pushState!='undefined'&&a(this).data('url-enabled')==1){var e=a(this).attr('href')?a(this).attr('href'):location.pathname;window.history.pushState({'tab':a(this).data('panel-name')},a(this).html(),e)};if(!a(this).parent().hasClass('active')){a(this).panels_ajax_tabs_trigger()}}).css('cursor','pointer')});a('.pane-panels-ajax-tab-tabs',t).once('panels-ajax-tabs-once',function(){var i=a('.panels-ajax-tab-tab:not(.panels-ajax-tabs-first-loaded)',this),e=i.first(),r=e.data('target-id'),n=a('#panels-ajax-tab-container-'+r).data('panels-ajax-tab-preloaded'),t;if(n===''){t=e;e.trigger('click')}
else{t=i.filter('*[data-panel-name="'+n+'"]')};t.addClass('panels-ajax-tabs-first-loaded');t.parent().addClass('active')})}}})(jQuery);(function(a){a.fn.extend({panels_ajax_tabs_trigger:function(t){return this.each(function(){var e=a(this),i=e.parents('.panels-ajax-tab:first');if(a(i).data('loading')===!0){return!0};a(i).data('loading',!0);var n=e.data('target-id'),r=e.data('panel-name'),c=e.data('entity-context'),p=e.data('url-enabled'),h=e.data('trigger'),o={tab:this,tabObject:e,containerId:'#panels-ajax-tab-container-'+n,callback:t,cache:!1,};var s=a.Event('panelsAjaxTabsPreLoad',o),d=a.Event('panelsAjaxTabsPreBehavior',o),l=a.Event('panelsAjaxTabsLoaded',o);if(a('#panels-ajax-tab-container-'+n).children('.panels-ajax-tab-wrap-'+r).length){s.cached=!0;a(document).trigger(s,s.data);a('#panels-ajax-tab-container-'+n).children().hide();a('#panels-ajax-tab-container-'+n).children('.panels-ajax-tab-wrap-'+r).show();a(i).data('loading',!1);if(t){t.call(this,e)};l.cached=!0;a(document).trigger(l)}
else{a.ajax({url:Drupal.settings.basePath+'panels_ajax_tab/'+r+'/'+c+'/'+p+'?panels_ajax_tab_trigger='+h,datatype:'html',headers:{'X-Request-Path':document.location.pathname},cache:!0,beforeSend:function(t){a(document).trigger(s);a('#panels-ajax-tab-container-'+n).children().hide();a('#panels-ajax-tab-container-'+n).children('.panels-ajax-tab-loading').show()},error:function(t,n,e){if(typeof console=='object'){console.error('Panels Ajax Tab Error: '+e)};a(i).data('loading',!1)}}).done(function(s){a('#panels-ajax-tab-container-'+n).children('.panels-ajax-tab-loading').hide();a('#panels-ajax-tab-container-'+n).append('<div class="panels-ajax-tab-wrap-'+r+'">'+s['markup']+'</div>');a(document).trigger(d,d.data);Drupal.attachBehaviors(a('#panels-ajax-tab-container-'+n+' .panels-ajax-tab-wrap-'+r)[0]);a(i).data('loading',!1);if(t){t.call(this,e)};a(document).trigger(l)})};e.parent().siblings().removeClass('active');e.parent().addClass('active')})}})})(jQuery);(function(e){Drupal.behaviors.jnlSciStylesToggleable={attach:function(l,t){e('.toggleable:not(.is-revealed)',l).addClass('is-visually-hidden');e('[data-click-to-toggle]',l).click(function(){var l=e(this).data('click-to-toggle');e(l).toggleClass('is-revealed is-visually-hidden');e(this).toggleClass('is-revealed-target');return!1})}}})(jQuery);