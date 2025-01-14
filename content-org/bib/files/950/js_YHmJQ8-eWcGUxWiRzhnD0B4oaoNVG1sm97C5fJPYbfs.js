jQuery(document).ready(function() {
  var groupClasses = new Array();
  jQuery('.search-result.solr-grouped').each(function(index, item){
    item = jQuery(item)
    currentGroupClass = item.attr('class').substr(item.attr('class').lastIndexOf('solr-group-'));
    if(jQuery.inArray(currentGroupClass, groupClasses) < 0) {
      groupClasses.push(currentGroupClass);
    }
  });

  jQuery.each(groupClasses, function(index, item) {
    currentGroup = jQuery('.search-result.solr-grouped.' + item);
    currentGroup.wrapAll('<li id="' + item + '-all" />');
    currentGroup.wrapAll('<ol class="apachesolr_search-results-grouped search-results-grouped">');
    jQuery('#' + item + '-all').prepend('<span>Group: ' + item.replace('solr-group-', '') +'</span>');
  });
});
;
(function ($) {
  Drupal.behaviors.faa = {
    map: null,
    markers: [],
    searchUrl: "",
    infoWindow: null,
    results: null,
    resultTemplate: null,
    location: null,
    noResultsTemplate: null,
    errorTemplate: null,
    search: function(location) {
      var geocoder = new google.maps.Geocoder();
      if(location != null && location.trim() != "") {
	geocoder.geocode({address: location}, function(results, status) {
	  if (status == google.maps.GeocoderStatus.OK) {
	    Drupal.behaviors.faa.location = results[0].geometry.location;
	  } else {
	    // address not found
	  }
	  Drupal.behaviors.faa.searchLocations();
	});
      } else {
	Drupal.behaviors.faa.searchLocations();
      }
    },
    clearLocations: function () {
      for (var i = 0; i < Drupal.behaviors.faa.markers.length; i++) {
	Drupal.behaviors.faa.markers[i].setMap(null);
      }
      Drupal.behaviors.faa.markers.length = 0;
      Drupal.behaviors.faa.results.empty();
    },
    createMarker: function(obj) {
      var html = "<b>" + obj.full_name + "</b> <br/>" + obj.full_address;
      var marker = new google.maps.Marker({
	map: Drupal.behaviors.faa.map,
	position: new google.maps.LatLng(parseFloat(obj.latitude), parseFloat(obj.longitude))
      });
      marker.setIcon(Drupal.behaviors.faa.pins.inactive);
      google.maps.event.addListener(marker, 'click', function() {
	Drupal.behaviors.faa.setActive(obj.id, true);
      });
      marker.allergistId = obj.id;
      Drupal.behaviors.faa.markers.push(marker);
      Drupal.behaviors.faa.addResult(obj);
      return marker;
    },
    setActive: function(id, fromMarker) {
      $.each(Drupal.behaviors.faa.markers, function(){
	var marker = this;
	if(marker.allergistId == id) {
	  marker.setIcon(Drupal.behaviors.faa.pins.active);
	  marker.setAnimation(google.maps.Animation.BOUNCE);
	  var timeout = setTimeout(function(){
	    marker.setAnimation(null);
	    clearTimeout(timeout);
	  }, 1400);
	} else {
	  marker.setIcon(Drupal.behaviors.faa.pins.inactive);
	  marker.setAnimation(null);
	}
      });
	  
	  if(document.body.className.match('page-locate-an-allergist-profile'))
	  {
		  $('#faa-results .active').removeClass('active');
		  $('#faa-results #result-' + id).addClass('active');
		  if(fromMarker) {
			$('#map-body .row').animate({
			  scrollTop: $("#faa-profile-results .active").position().top
			}, 2000);
		  }
	  }
	  else
	  {
/*			$('#faa-results .active').click(function(e) {  
			var x = $(this).attr('data-pid');
			//alert(x);
			window.open("/locate-an-allergist/profile?id=" + x, "_self");
			});		  */
		  $('#faa-results .active').removeClass('active');
		  $('#faa-results #result-' + id).addClass('active');
		  if(fromMarker) {
		$('#map-body .row').animate({
		  scrollTop: $("#faa-results .active").position().top
		}, 2000);
		  }
	  }
	  
      
    },
    addResult: function(obj) {
      Drupal.behaviors.faa.results.append(Drupal.behaviors.faa.resultTemplate.render(obj, {
	formatNumber: function(val) {
	  try {
	    return Math.round(parseFloat(val) * 10) / 10;
	  } catch(e) {
	    
	  }
	},
	path: function(p) {
	  return Drupal.behaviors.faa.basePath + p;
	},
	encodeURIComponent: function(val) {
	  return val == null ? "" : encodeURIComponent(val.replace("#", "Suite "));
	}
      }));
    },
    setLoading: function(loading) {
      if(loading) {
	$('.busy-overlay').show();
      } else {
	$('.busy-overlay').hide();
      }
    },
    searchLocations: function() {
      Drupal.behaviors.faa.clearLocations();
      var data = {
	search: $('#text-search').val()
      };
	  data.id = Drupal.behaviors.faa.getParameterByName("id");

      if(Drupal.behaviors.faa.location != null) {
	data.long = Drupal.behaviors.faa.location.lng();
	data.lat = Drupal.behaviors.faa.location.lat();
      }
      $('.faa-search-criteria input[type=checkbox]:checked').each(function(){
	data[$(this).attr('name')] = 1;
      });
	data[$("#langselect").val()] = 1;

      Drupal.behaviors.faa.setLoading(true);
      $.ajax(Drupal.behaviors.faa.searchUrl, {data: data})
	.done(function(data){
	  if(data != null) {
	    var bounds = new google.maps.LatLngBounds();
	    var i = 0;
	    $.each(data, function(){
	      this.id = i++;
	      var obj = Drupal.behaviors.faa.createMarker(this);
	      bounds.extend(obj.position);
	    });
	    $('[data-allergistid]').hover(function(){
	      Drupal.behaviors.faa.setActive($(this).data('allergistid'), false);
	    });
	    if(data.length > 0)
	      Drupal.behaviors.faa.map.fitBounds(bounds);
		if(document.body.className.match('page-locate-an-allergist-profile'))
	  {
		  var c = Drupal.behaviors.faa.map.getCenter();
		  var lat = c.lat()+0.006;
		  var lng = c.lng();
		  Drupal.behaviors.faa.map.setCenter(new google.maps.LatLng(lat,lng));
		  Drupal.behaviors.faa.map.setZoom(Drupal.behaviors.faa.map.getZoom()-7);
		  google.maps.event.trigger(Drupal.behaviors.faa.map, "resize");
		  Drupal.behaviors.faa.map.setOptions({scrollwheel: false,navigationControl: false,mapTypeControl: false,scaleControl: false,draggable: false});
	  }
	  	  if(Drupal.behaviors.faa.getParameterByName("b") == "1") {
			var searchtext = Drupal.behaviors.faa.getParameterByName("zip");
			searchtext = searchtext.replace(/ /g, '+');
			document.getElementById("go-back").href = "/locate-an-allergist/results?zip="+searchtext;
		    $('.profile-back-link').show();	
	  }
	  else
	  {
		  $('.profile-back-link').hide();	
	  }
	  } 
	}).always(function() {
	  if(Drupal.behaviors.faa.markers.length == 0) {
	    Drupal.behaviors.faa.results.append(Drupal.behaviors.faa.noResultsTemplate.render());
	  }
	  Drupal.behaviors.faa.setLoading(false);
	}).fail(function() {
	  Drupal.behaviors.faa.results.append(Drupal.behaviors.faa.errorTemplate.render());
	});
    },
    setCurrentLocation: function() {

      if(Drupal.behaviors.faa.cityLocation != null) {
	Drupal.behaviors.faa.location = new google.maps.LatLng(Drupal.behaviors.faa.cityLocation.latitude,Drupal.behaviors.faa.cityLocation.longitude);
	Drupal.behaviors.faa.searchLocations();
      }
	  else if(Drupal.behaviors.faa.getParameterByName("id") != "") {
	$('#faa-id').val(Drupal.behaviors.faa.getParameterByName("id"));
	Drupal.behaviors.faa.search($('#faa-id').val());
      }
      else if(Drupal.behaviors.faa.getParameterByName("zip") != "") {
	$('#faa-address').val(Drupal.behaviors.faa.getParameterByName("zip"));
	Drupal.behaviors.faa.search($('#faa-address').val());
      }
      else if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
	  Drupal.behaviors.faa.location = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	  Drupal.behaviors.faa.searchLocations();
	}, function() {
	  Drupal.behaviors.faa.searchLocations();
	});
      }
      // Browser doesn't support Geolocation
      else {
	Drupal.behaviors.faa.searchLocations();
      }
    },
    getParameterByName: function(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },
    attach: function (context, settings) {
      var $page = $('body');
      var faa = $page.hasClass('page-faa') || 
	($page.hasClass('node-type-city-page') && !$page.hasClass('page-node-edit'));
      if(!faa)
	return;
	  if($page.hasClass('page-locate-an-allergist-profile'))
	  {
      Drupal.behaviors.faa.searchUrl = settings.basePath + 'data/profile';
	  }
	  else
	  {
      Drupal.behaviors.faa.searchUrl = settings.basePath + 'data/faa';		  
	  }
      Drupal.behaviors.faa.infoWindow = new google.maps.InfoWindow();
	  if($page.hasClass('page-locate-an-allergist-profile'))
	  {
      Drupal.behaviors.faa.results = $('#faa-profile-results', context);
	  }
	  else
	  {
      Drupal.behaviors.faa.results = $('#faa-results', context);		  
	  }
      
      Drupal.behaviors.faa.resultTemplate = $.templates("#resultTemplate");
      Drupal.behaviors.faa.noResultsTemplate = $.templates("#noResultsTemplate");
      Drupal.behaviors.faa.errorTemplate = $.templates("#errorTemplate");
      Drupal.behaviors.faa.pins = {};
      Drupal.behaviors.faa.basePath = settings.basePath + 'sites/all/modules/faa';
      Drupal.behaviors.faa.pins.inactive = Drupal.behaviors.faa.basePath + '/images/pin-inactive.png';
      Drupal.behaviors.faa.pins.active = Drupal.behaviors.faa.basePath + '/images/pin-active.png';
      if(settings.faa != null && settings.faa.location != null) {
	Drupal.behaviors.faa.cityLocation = settings.faa.location;
      }
      var mapOptions = {
	zoom: 4,
	center: new google.maps.LatLng(40, -100),
	mapTypeControl: false
      };
	  if($page.hasClass('page-locate-an-allergist-profile'))
	  {
	  //var mapObject = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	  //mapObject.setZoom(mapObject.getZoom()-1);
	  //Drupal.behaviors.faa.map = mapObject;
      Drupal.behaviors.faa.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	  }
	  else
	  {
      Drupal.behaviors.faa.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	  }
      
      
      
	  if(document.body.className.match('page-locate-an-allergist-profile'))
	  {
	  }
	  else
	  {
	 $('#faa-address', context).change(function(){
	Drupal.behaviors.faa.search($('#faa-address').val());
      });
      $('#faa-search-button', context).click(function(){
	Drupal.behaviors.faa.search($('#faa-address').val());
      });
	  }
	  $('#langselect').on('change', function() {
Drupal.behaviors.faa.searchLocations();
})
    $('.faa-search-criteria input[type=checkbox]').click(function(){
	Drupal.behaviors.faa.searchLocations();
      });
      $('#text-search', context).change(function(){
	Drupal.behaviors.faa.searchLocations();
      });
      $('#map-body').height($(window).height() - $('.navbar').height());
      Drupal.behaviors.faa.setCurrentLocation();
      var loading = true;
      $('.panel-heading.clickable').on("click", function (e) {
	if ($(this).hasClass('panel-collapsed')) {
	  // expand the panel
	  var panel =$(this).parents('.panel').find('.panel-body');
	  if(!loading)
	    panel.slideDown();
	  else
	    panel.show();
	  $(this).removeClass('panel-collapsed');
	  $(this).find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	}
	else {
	  // collapse the panel
	  var panel = $(this).parents('.panel').find('.panel-body');
	  if(!loading)
	    panel.slideUp();
	  else
	    panel.hide();
	  $(this).addClass('panel-collapsed');
	  $(this).find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	}
      });
      
      $('#search-expand').trigger('click');
      if($(window).height() <= 979) {
	$('#name-expand').trigger('click');
      }
      loading = false;
      $(".city-modal", context).modal('show');
    }
  };
 
  
})(jQuery);

;
/*! JsRender v1.0.0-beta: http://github.com/BorisMoore/jsrender and http://jsviews.com/jsviews
 in*formal pre V1.0 commit counter: 60 */
(function(n,t,i){"use strict";function et(n,t){for(var i in t.props)wt.test(i)&&(n[i]=t.props[i])}function ot(n){return n}function ir(n){return n}function dt(n){s._dbgMode=n;pt=n?"Unavailable (nested view): use #getIndex()":"";it("dbg",ci.dbg=tt.dbg=n?ir:ot)}function st(n){this.name=(u.link?"JsViews":"JsRender")+" Error";this.message=n||this.name}function f(n,t){for(var i in t)n[i]=t[i];return n}function d(n){return typeof n=="function"}function gt(n,t,i){return(!o.rTag||n)&&(p=n?n.charAt(0):p,w=n?n.charAt(1):w,h=t?t.charAt(0):h,v=t?t.charAt(1):v,nt=i||nt,n="\\"+p+"(\\"+nt+")?\\"+w,t="\\"+h+"\\"+v,y="(?:(?:(\\w+(?=[\\/\\s\\"+h+"]))|(?:(\\w+)?(:)|(>)|!--((?:[^-]|-(?!-))*)--|(\\*)))\\s*((?:[^\\"+h+"]|\\"+h+"(?!\\"+v+"))*?)",o.rTag=y+")",y=new RegExp(n+y+"(\\/)?|(?:\\/(\\w+)))"+t,"g"),yt=new RegExp("<.*>|([^\\\\]|^)[{}]|"+n+".*"+t)),[p,w,h,v,nt]}function rr(n,t){t||(t=n,n=i);var e,f,o,u,r=this,s=!t||t==="root";if(n){if(u=r.type===t?r:i,!u)if(e=r.views,r._.useKey){for(f in e)if(u=e[f].get(n,t))break}else for(f=0,o=e.length;!u&&f<o;f++)u=e[f].get(n,t)}else if(s)while(r.parent.parent)u=r=r.parent;else while(r&&!u)u=r.type===t?r:i,r=r.parent;return u}function ni(){var n=this.get("item");return n?n.index:i}function ti(){return this.index}function ur(t){var u,e=this,o=e.linkCtx,r=(e.ctx||{})[t];return r===i&&o&&o.ctx&&(r=o.ctx[t]),r===i&&(r=ci[t]),r&&d(r)&&!r._wrp&&(u=function(){return r.apply(!this||this===n?e:this,arguments)},u._wrp=!0,f(u,r)),u||r}function fr(n,t,u,f){var e,s,c=+u===u&&t.tmpl.bnds[u-1],h=t.linkCtx;return f=f!==i&&{props:{},args:[f]},u=f||(c?c(t.data,t,r):u),s=u.args[0],(n||c)&&(e=h&&h.tag,e||(e={_:{inline:!h,bnd:c},tagName:":",cvt:n,flow:!0,tagCtx:u,_is:"tag"},h&&(h.tag=e,e.linkCtx=h,u.ctx=a(u.ctx,h.view.ctx)),o._lnk(e)),e._er=f&&s,et(e,u),u.view=t,e.ctx=u.ctx||{},delete u.ctx,t._.tag=e,s=ht(e,e.convert||n!=="true"&&n)[0],s=c&&t._.onRender?t._.onRender(s,t,c):s,t._.tag=i),s!=i?s:""}function ht(n,t){var r=n.tagCtx,u=r.view,i=r.args;return t=t&&(""+t===t?u.getRsc("converters",t)||c("Unknown converter: '"+t+"'"):t),i=!i.length&&!r.index?[u.data]:t?i.slice():i,t&&(t.depends&&(n.depends=o.getDeps(n.depends,n,t.depends,t)),i[0]=t.apply(n,i)),i}function er(n,t){for(var f,e,u=this;f===i&&u;)e=u.tmpl[n],f=e&&e[t],u=u.parent;return f||r[n][t]}function or(n,t,u,s,h,l){var v,lt,at,ot,p,vt,nt,y,st,rt,it,yt,pt,d,k,ct,wt,g="",w=t.linkCtx||0,ut=t.ctx,bt=u||t.tmpl,ft=+s===s&&bt.bnds[s-1];for(n._is==="tag"&&(v=n,n=v.tagName,s=v.tagCtxs),v=v||w.tag,l=l!==i&&(g+=l,[{props:{},args:[]}]),s=l||(ft?ft(t.data,t,r):s),vt=s.length,p=0;p<vt;p++)p||u&&v||(it=t.getRsc("tags",n)||c("Unknown tag: {{"+n+"}}")),y=s[p],(!w.tag||v._er)&&(rt=y.tmpl,rt=y.content=rt&&bt.tmpls[rt-1],f(y,{tmpl:(v?v:it).template||rt,render:ei,index:p,view:t,ctx:a(y.ctx,ut)})),(u=y.props.tmpl)&&(u=""+u===u?t.getRsc("templates",u)||e(u):u,y.tmpl=u),v||(it._ctr?(v=new it._ctr,yt=!!v.init):o._lnk(v={render:it.render}),v._={inline:!w},w&&(w.tag=v,v.linkCtx=w),(v._.bnd=ft||w.fn)?v._.arrVws={}:v.dataBoundOnly&&c("{^{"+n+"}} tag must be data-bound"),v.tagName=n,v.parent=ot=ut&&ut.tag,v._is="tag",v._def=it,v.tagCtxs=s),y.tag=v,v.dataMap&&v.tagCtxs&&(y.map=v.tagCtxs[p].map),v.flow||(st=y.ctx=y.ctx||{},lt=v.parents=st.parentTags=ut&&a(st.parentTags,ut.parentTags)||{},ot&&(lt[ot.tagName]=ot),lt[v.tagName]=st.tag=v);if(t._.tag=v,!(v._er=l)){for(et(v,s[0]),v.rendering={},p=0;p<vt;p++)y=v.tagCtx=v.tagCtxs[p],ct=y.props,k=ht(v,v.convert),(pt=ct.dataMap||v.dataMap)&&(k.length||ct.dataMap)&&(d=y.map,(!d||d.src!==k[0]||h)&&(d&&d.src&&d.unmap(),d=y.map=pt.map(k[0],ct)),k=[d.tgt]),v.ctx=y.ctx,!p&&yt&&(wt=v.template,v.init(y,w,v.ctx),yt=i,v.template!==wt&&(v._.tmpl=v.template),w&&(w.attr=v.attr=w.attr||v.attr)),nt=i,v.render&&(nt=v.render.apply(v,k)),k=k.length?k:[t],nt=nt!==i?nt:y.render(k[0],!0)||(h?i:""),g=g?g+(nt||""):nt;delete v.rendering}return v.tagCtx=v.tagCtxs[0],v.ctx=v.tagCtx.ctx,v._.inline&&(at=v.attr)&&at!==b&&(g=at==="text"?tt.html(g):""),ft&&t._.onRender?t._.onRender(g,t,ft):g}function g(n,t,i,r,u,f,e,o){var a,h,c,s=this,v=t==="array",l={key:0,useKey:v?0:1,id:""+tr++,onRender:o,bnds:{}};s.data=r;s.tmpl=u;s.content=e;s.views=v?[]:{};s.parent=i;s.type=t||"top";s._=l;s.linked=!!o;i?(a=i.views,h=i._,h.useKey?(a[l.key="_"+h.useKey++]=s,s.index=pt,s.getIndex=ni,c=h.tag,l.bnd=v&&(!c||!!c._.bnd&&c)):a.splice(l.key=s.index=f,0,s),s.ctx=n||i.ctx):s.ctx=n}function sr(n){var i,r,t,u,e,f,s;for(i in k)if(e=k[i],(f=e.compile)&&(r=n[i+"s"]))for(t in r)u=r[t]=f(t,r[t],n),u&&(s=o.onStore[i])&&s(t,u,f)}function hr(n,t,r){var o,u;return d(t)?t={depends:t.depends,render:t}:(t.baseTag&&(t.flow=!!t.flow,t=f(f({},t.baseTag),t)),(u=t.template)!==i&&(t.template=""+u===u?e[u]||e(u):u),t.init!==!1&&(o=t._ctr=function(){},(o.prototype=t).constructor=o)),r&&(t._parentTmpl=r),t}function ii(r,u,f,o){function c(u){if(""+u===u||u.nodeType>0){try{h=u.nodeType>0?u:!yt.test(u)&&t&&t(n.document).find(u)[0]}catch(s){}return h&&(u=e[r=r||h.getAttribute(ft)],u||(r=r||"_"+nr++,h.setAttribute(ft,r),u=e[r]=ii(r,h.innerHTML,f,o)),h=i),u}}var s,h;return u=u||"",s=c(u),o=o||(u.markup?u:{}),o.tmplName=r,f&&(o._parentTmpl=f),!s&&u.markup&&(s=c(u.markup))&&s.fn&&(s.debug!==u.debug||s.allowCode!==u.allowCode)&&(s=s.markup),s!==i?(r&&!f&&(kt[r]=function(){return u.render.apply(u,arguments)}),s.fn||u.fn?s.fn&&(u=r&&r!==s.tmplName?a(o,s):s):(u=ui(s,o),lt(s.replace(pi,"\\$&"),u)),sr(o),u):void 0}function ri(n){function t(t,i){this.tgt=n.getTgt(t,i)}return d(n)&&(n={getTgt:n}),n.baseMap&&(n=f(f({},n.baseMap),n)),n.map=function(n,i){return new t(n,i)},n}function ui(n,t){var i,e=s.wrapMap||{},r=f({markup:n,tmpls:[],links:{},tags:{},bnds:[],_is:"template",render:fi},t);return t.htmlTag||(i=ki.exec(n),r.htmlTag=i?i[1].toLowerCase():""),i=e[r.htmlTag],i&&i!==e.div&&(r.markup=u.trim(r.markup)),r}function cr(n,t){function u(e,s,h){var v,c,l,a;if(e&&typeof e=="object"&&!e.nodeType&&!e.markup&&!e.getTgt){for(l in e)u(l,e[l],s);return r}return s===i&&(s=e,e=i),e&&""+e!==e&&(h=s,s=e,e=i),a=h?h[f]=h[f]||{}:u,c=t.compile,s===null?e&&delete a[e]:(s=c?s=c(e,s,h):s,e&&(a[e]=s)),c&&s&&(s._is=n),s&&(v=o.onStore[n])&&v(e,s,c),s}var f=n+"s";r[f]=u;k[n]=t}function lr(n,t,i){var r=this.jquery&&(this[0]||c('Unknown template: "'+this.selector+'"')),u=r.getAttribute(ft);return fi.call(u?e[u]:e(r),n,t,i)}function ct(n,t,i){if(s._dbgMode)try{return n.fn(t,i,r)}catch(u){return c(u,i)}return n.fn(t,i,r)}function fi(n,t,i,r,f,e){var o=this;return!r&&o.fn._nvw&&!u.isArray(n)?ct(o,n,{tmpl:o}):ei.call(o,n,t,i,r,f,e)}function ei(n,t,r,f,o,s){var y,ut,d,l,nt,tt,it,p,v,rt,w,ft,h,et,c=this,k="";if(!!t===t&&(r=t,t=i),o===!0&&(it=!0,o=0),c.tag?(p=c,c=c.tag,rt=c._,ft=c.tagName,h=rt.tmpl||p.tmpl,et=c.attr&&c.attr!==b,t=a(t,c.ctx),v=p.content,p.props.link===!1&&(t=t||{},t.link=!1),f=f||p.view,n=arguments.length?n:f):h=c,h&&(!f&&n&&n._is==="view"&&(f=n),f&&(v=v||f.content,s=s||f._.onRender,n===f&&(n=f.data),t=a(t,f.ctx)),f&&f.type!=="top"||((t=t||{}).root=n),h.fn||(h=e[h]||e(h)),h)){if(s=(t&&t.link)!==!1&&!et&&s,w=s,s===!0&&(w=i,s=f._.onRender),t=h.helpers?a(h.helpers,t):t,u.isArray(n)&&!r)for(l=it?f:o!==i&&f||new g(t,"array",f,n,h,o,v,s),y=0,ut=n.length;y<ut;y++)d=n[y],nt=new g(t,"item",l,d,h,(o||0)+y,v,s),tt=ct(h,d,nt),k+=l._.onRender?l._.onRender(tt,nt):tt;else(f||!h.fn._nvw)&&(l=it?f:new g(t,ft||"data",f,n,h,o,v,s),rt&&!c.flow&&(l.tag=c)),k+=ct(h,n,l);return w?w(k,l):k}return""}function c(n,t,i){var r=s.onError(n,t,i);if(""+n===n)throw new o.Err(r);return!t.linkCtx&&t.linked?tt.html(r):r}function l(n){c("Syntax error\n"+n)}function lt(n,t,i,r){function k(t){t-=f;t&&h.push(n.substr(f,t).replace(ut,"\\n"))}function c(t){t&&l('Unmatched or missing tag: "{{/'+t+'}}" in template:\n'+n)}function d(e,o,v,y,p,d,nt,tt,it,rt,ft,et){d&&(p=":",y=b);rt=rt||i;var ot=(o||i)&&[[]],ht="",ct="",lt="",at="",vt="",yt="",pt="",bt="",st=!rt&&!p&&!nt;v=v||(it=it||"#data",p);k(et);f=et+e.length;tt?g&&h.push(["*","\n"+it.replace(yi,"$1")+"\n"]):v?(v==="else"&&(bi.test(it)&&l('for "{{else if expr}}" use "{{else expr}}"'),ot=u[7],u[8]=n.substring(u[8],et),u=s.pop(),h=u[2],st=!0),it&&(hi(it.replace(ut," "),ot,t).replace(wi,function(n,t,i,r,u,f,e,o){return e?(ct+=f+",",at+="'"+o+"',"):i?(lt+=r+f+",",yt+=r+"'"+o+"',"):t?pt+=f:(u==="trigger"&&(bt+=f),ht+=r+f+",",vt+=r+"'"+o+"',",w=w||wt.test(u)),""}).slice(0,-1),ot&&ot[0]&&ot.pop()),a=[v,y||!!r||w||"",st&&[],oi(at,vt,yt),oi(ct,ht,lt),pt,bt,ot||0],h.push(a),st&&(s.push(u),u=a,u[8]=f)):ft&&(c(ft!==u[0]&&u[0]!=="else"&&ft),u[8]=n.substring(u[8],et),u=s.pop());c(!u&&ft);h=u[2]}var o,a,w,g=t&&t.allowCode,e=[],f=0,s=[],h=e,u=[,,e];return i&&(n=p+n+v),c(s[0]&&s[0][2].pop()[0]),n.replace(y,d),k(n.length),(f=e[e.length-1])&&c(""+f!==f&&+f[8]===f[8]&&f[0]),i?(o=vt(e,n,i),at(o,e[0][7])):o=vt(e,t),o._nvw&&(o._nvw=!/[~#]/.test(n)),o}function at(n,t){n.deps=[];for(var i in t)i!=="_jsvto"&&t[i].length&&(n.deps=n.deps.concat(t[i]));n.paths=t}function oi(n,t,i){return[n.slice(0,-1),t.slice(0,-1),i.slice(0,-1)]}function si(n,t){return"\n\t"+(t?t+":{":"")+"args:["+n[0]+"]"+(n[1]||!t?",\n\tprops:{"+n[1]+"}":"")+(n[2]?",\n\tctx:{"+n[2]+"}":"")}function hi(n,t,i){function b(b,k,d,g,nt,tt,it,rt,ut,ft,et,ot,st,ht,ct,at,vt,yt,pt,wt){function ni(n,i,u,e,o,h,c,l){if(u&&(r&&(f==="linkTo"&&(s=t._jsvto=t._jsvto||[],s.push(nt)),(!f||a)&&r.push(nt.slice(i.length))),u!==".")){var v=(e?'view.hlp("'+e+'")':o?"view":"data")+(l?(h?"."+h:e?"":o?"":"."+u)+(c||""):(l=e?"":o?h||"":u,""));return v=v+(l?"."+l:""),i+(v.slice(0,9)==="view.data"?v.slice(5):v)}return n}tt=tt||"";d=d||k||ot;nt=nt||ut;ft=ft||vt||"";var kt,dt,bt,gt=wt.length-1;if(!it||o||e)return r&&at&&!o&&!e&&(!f||a||s)&&(kt=p[u],gt>pt-kt&&(kt=wt.slice(kt,pt+1),at=w+":"+kt+" onerror=''"+h,bt=y[at],bt||(y[at]=!0,y[at]=bt=lt(at,i||r,!0),bt.paths.push({_jsvOb:bt})),bt!==!0&&(s||r).push({_jsvOb:bt}))),o?(o=!st,o?b:'"'):e?(e=!ht,e?b:'"'):(d?(u++,p[u]=pt++,d):"")+(yt?u?"":(c=wt.slice(c,pt),f?(f=a=s=!1,"\b"):"\b,")+c+(c=pt+b.length,r&&t.push(r=[]),"\b"):rt?(u&&l(n),r&&t.pop(),f=nt,a=g,c=pt+b.length,g&&(r=t[f]=[]),nt+":"):nt?nt.split("^").join(".").replace(ai,ni)+(ft?(v[++u]=!0,nt.charAt(0)!=="."&&(p[u]=pt),dt?"":ft):tt):tt?tt:ct?(v[u--]=!1,ct)+(ft?(v[++u]=!0,ft):""):et?(v[u]||l(n),","):k?"":(o=st,e=ht,'"'));l(n)}var f,s,a,e,o,r=t&&t[0],c=0,y=i?i.links:r&&(r.links=r.links||{}),v={},p={0:-1},u=0;return(n+(i?" ":"")).replace(/\)\^/g,").").replace(vi,b)}function vt(n,t,r){var p,f,e,c,g,yt,pt,ni,wt,nt,ot,w,s,st,tt,it,v,ht,y,rt,k,ft,bt,d,kt,dt,ct,h,a,lt,gt,o=0,u="",et={},ti=n.length;for(""+t===t?(y=r?'data-link="'+t.replace(ut," ").slice(1,-1)+'"':t,t=0):(y=t.tmplName||"unnamed",t.allowCode&&(et.allowCode=!0),t.debug&&(et.debug=!0),w=t.bnds,ht=t.tmpls),p=0;p<ti;p++)if(f=n[p],""+f===f)u+='\n+"'+f+'"';else if(e=f[0],e==="*")u+=";\n"+f[1]+"\nret=ret";else{if(c=f[1],ft=f[2],g=si(f[3],"params")+"},"+si(st=f[4]),a=f[5],gt=f[6],bt=f[8],(dt=e==="else")||(o=0,w&&(s=f[7])&&(o=w.push(s))),(ct=e===":")?c&&(e=c===b?">":c+e):(ft&&(rt=ui(bt,et),rt.tmplName=y+"/"+e,vt(ft,rt),ht.push(rt)),dt||(k=e,kt=u,u=""),d=n[p+1],d=d&&d[0]==="else"),lt=a?";\ntry{\nret+=":"\n+",tt="",it="",ct&&(s||gt||c&&c!==b)){if(h="return {"+g+"};",v='c("'+c+'",view,',h=new Function("data,view,j,u"," // "+y+" "+o+" "+e+"\n"+h),h._er=a,tt=v+o+",",it=")",h._tag=e,r)return h;at(h,s);ot=!0}if(u+=ct?(r?(a?"\ntry{\n":"")+"return ":lt)+(ot?(ot=i,nt=wt=!0,v+(s?(w[o-1]=h,o):"{"+g+"}")+")"):e===">"?(pt=!0,"h("+st[0]+")"):(ni=!0,"((v="+st[0]+')!=null?v:"")')):(nt=yt=!0,"\n{view:view,tmpl:"+(ft?ht.length:"0")+","+g+"},"),k&&!d){if(u="["+u.slice(0,-1)+"]",v='t("'+k+'",view,this,',r||s){if(u=new Function("data,view,j,u"," // "+y+" "+o+" "+k+"\nreturn "+u+";"),u._er=a,u._tag=e,s&&at(w[o-1]=u,s),r)return u;tt=v+o+",undefined,";it=")"}u=kt+lt+v+(o||u)+")";s=0;k=0}a&&(nt=!0,u+=";\n}catch(e){ret"+(r?"urn ":"+=")+tt+"j._err(e,view,"+a+")"+it+";}\n"+(r?"":"ret=ret"))}u="// "+y+"\nvar v"+(yt?",t=j._tag":"")+(wt?",c=j._cnvt":"")+(pt?",h=j.converters.html":"")+(r?";\n":',ret=""\n')+(et.debug?"debugger;":"")+u+(r?"\n":";\nreturn ret;");try{u=new Function("data,view,j,u",u)}catch(ii){l("Compiled template code:\n\n"+u+'\n: "'+ii.message+'"')}return t&&(t.fn=u),nt||(u._nvw=!0),u}function a(n,t){return n&&n!==t?t?f(f({},t),n):n:t&&f({},t)}function ar(n){return bt[n]||(bt[n]="&#"+n.charCodeAt(0)+";")}function vr(n){var i,t,r=[];if(typeof n=="object")for(i in n)t=n[i],t&&t.toJSON&&!t.toJSON()||d(t)||r.push({key:i,prop:t});return r}function li(n){return n!=null?di.test(n)&&(""+n).replace(gi,ar)||n:""}if((!t||!t.render)&&!n.jsviews){var u,rt,y,yt,pt,p="{",w="{",h="}",v="}",nt="^",ai=/^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,vi=/(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*\.|\s*\^|\s*$)|[)\]])([([]?))|(\s+)/g,ut=/[ \t]*(\r\n|\n|\r)/g,yi=/\\(['"])/g,pi=/['"\\]/g,wi=/(?:\x08|^)(onerror:)?(?:(~?)(([\w$]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,bi=/^if\s/,ki=/<(\w+)[>\s]/,di=/[\x00`><\"'&]/,wt=/^on[A-Z]|^convert(Back)?$/,gi=/[\x00`><"'&]/g,nr=0,tr=0,bt={"&":"&amp;","<":"&lt;",">":"&gt;","\x00":"&#0;","'":"&#39;",'"':"&#34;","`":"&#96;"},b="html",ft="data-jsv-tmpl",kt={},k={template:{compile:ii},tag:{compile:hr},helper:{},converter:{}},r={jsviews:"v1.0.0-beta",settings:function(n){f(s,n);dt(s._dbgMode);s.jsv&&s.jsv()},sub:{View:g,Err:st,tmplFn:lt,cvt:ht,parse:hi,extend:f,syntaxErr:l,onStore:{},_lnk:ot,_ths:et},map:ri,_cnvt:fr,_tag:or,_err:c};(st.prototype=new Error).constructor=st;ni.depends=function(){return[this.get("item"),"index"]};ti.depends=function(){return["index"]};g.prototype={get:rr,getIndex:ti,getRsc:er,hlp:ur,_is:"view"};for(rt in k)cr(rt,k[rt]);var e=r.templates,tt=r.converters,ci=r.helpers,it=r.tags,o=r.sub,s=r.settings;t?(u=t,u.fn.render=lr,u.observable&&(f(o,u.views.sub),r.map=u.views.map)):(u=n.jsviews={},u.isArray=Array&&Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"});u.render=kt;u.views=r;u.templates=e=r.templates;s({debugMode:dt,delimiters:gt,onError:function(n,t,r){return t&&(n=r===i?"{Error: "+n+"}":d(r)?r(n,t):r),n==i?"":n},_dbgMode:!0});it({"else":function(){},"if":{render:function(n){var t=this;return t.rendering.done||!n&&(arguments.length||!t.tagCtx.index)?"":(t.rendering.done=!0,t.selected=t.tagCtx.index,t.tagCtx.render(t.tagCtx.view,!0))},onUpdate:function(n,t,i){for(var r,f,u=0;(r=this.tagCtxs[u])&&r.args.length;u++)if(r=r.args[0],f=!r!=!i[u].args[0],!this.convert&&!!r||f)return f;return!1},flow:!0},"for":{render:function(n){var f,t=this,r=t.tagCtx,e="",o=0;return t.rendering.done||((f=!arguments.length)&&(n=r.view.data),n!==i&&(e+=r.render(n,f),o+=u.isArray(n)?n.length:1),(t.rendering.done=o)&&(t.selected=r.index)),e},flow:!0},include:{flow:!0},"*":{render:ot,flow:!0}});it("props",{baseTag:it["for"],dataMap:ri(vr)});tt({html:li,attr:li,url:function(n){return n!=i?encodeURI(""+n):n===null?n:""}});gt()}})(this,this.jQuery);
/*
 / /*# sourceMappingURL=jsrender.min.js.map
 */;
