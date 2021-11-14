
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - subfolder_nav.js - */
// http://www.eea.europa.eu/portal_javascripts/subfolder_nav.js?original=1
jQuery(function($){"use strict";var subfolders_listing=$("#subfolders_listing"),next_elem=subfolders_listing.next();var subfolders_init=function(){var holder=$('#subfolders_more_li'),holder_ul=holder.find('#subfolders_more_ul'),holder_link=holder.find('#subfolders_more_a'),children=subfolders_listing.children(),first_child=children[0],first_child_offset=first_child.offsetTop,$other_children=$(children.slice(1)),longer_elems=[];if(!$other_children.length){return}
$other_children.each(function(i,v){if(first_child_offset<v.offsetTop){longer_elems.push(i)}});var i=0,longer_elems_length=longer_elems.length,selected_item;var $latest_visible=longer_elems_length?$other_children.eq([longer_elems[0]-1]):$other_children.eq($other_children.length-1),subfolders_listing_width=subfolders_listing.width(),$prev_el=$latest_visible.prev(),temp;if(longer_elems_length&&subfolders_listing_width-($latest_visible.position().left+$latest_visible.width())<150){$latest_visible.appendTo(holder_ul)}
if(longer_elems_length){while(subfolders_listing_width-($prev_el.position().left+$prev_el.width())<150){temp=$prev_el.prev();$prev_el.appendTo(holder_ul);$prev_el=temp}}
if(longer_elems_length){subfolders_listing.detach();holder.removeClass('hiddenElem').appendTo(subfolders_listing);for(i;i<longer_elems_length;i+=1){selected_item=$other_children.eq(longer_elems[i]);if(selected_item.attr('id')!=='subfolders_more_li'){selected_item.detach().appendTo(holder_ul)}}
subfolders_listing.removeClass('overflow_hidden');subfolders_listing.insertBefore(next_elem)}
holder.click(function(e){e.preventDefault()});holder.hover(function(){holder_link.addClass('moreHover')}, function(){holder_link.removeClass('moreHover')})};var mark_selected_navigation=function(){var portal_breadcrumbs=$("#portal-breadcrumbs"),breadcrumbs=portal_breadcrumbs.find('span:not(.breadcrumbSeparator)'),portal_globalnav=$("#portal-globalnav"),i=0,breadcrumbs_length=breadcrumbs.length,title,current;for(i;i<breadcrumbs_length;i+=1){current=breadcrumbs[i];title=current.getElementsByTagName('a');title=title.length?title[0].innerHTML:current.innerHTML;var nav_item=portal_globalnav.find("a:contains('"+title+"')");if(nav_item.length){nav_item.parent().append('<span class="arrowUp" />');break}}};if(subfolders_listing.length){subfolders_init();mark_selected_navigation()}});

/* - kss-bbb.js - */
// http://www.eea.europa.eu/portal_javascripts/kss-bbb.js?original=1
(function($){
function refreshPortlet(hash,_options){var options={data:{},success: function(){},error: function(){},ajaxOptions:{}};$.extend(options,_options);options.data.portlethash=hash;ajaxOptions=options.ajaxOptions;ajaxOptions.url=$('base').attr('href')+'/@@render-portlet';ajaxOptions.success=function(data){var container=$('[data-portlethash="'+hash+'"]');var portlet=$(data);container.html(portlet);options.success(data,portlet)}
ajaxOptions.error=function(){options.error()}
ajaxOptions.data=options.data;$.ajax(ajaxOptions)}
function applyPortletTimeout(portlet){var timeout=portlet.data('timeout');if(timeout==undefined){timeout=30}else{timeout=parseInt(timeout)}
timeout=timeout * 1000;setTimeout($.proxy(function(){refreshPortlet(this.parents('.portletWrapper').data('portlethash'),{success: function(data,portlet){apply_timeout(portlet)}})},portlet),timeout)}
$(document).ready(function(){var spinner=$('<div id="ajax-spinner"><img src="'+portal_url+'/spinner.gif" alt=""/></div>');spinner.appendTo('body').hide();$(document).ajaxStart(function(){spinner.show()});$(document).ajaxStop(function(){spinner.hide()});$('body').delegate('#calendar-next,#calendar-previous','click', function(e){e.preventDefault();var el=$(this);var container=el.parents('.portletWrapper');refreshPortlet(container.data('portlethash'),{data:{month:el.data('month'),year:el.data('year')}});return false});$('.kssPortletRefresh,.refreshPortlet').each(function(){applyPortletTimeout($(this))});$('.portlet-deferred').each(function(){refreshPortlet($(this).parents('.portletWrapper').data('portlethash'))});
function updateSharing(data){var sharing=$(data.body);var messages=$(data.messages).filter(function(){return this.tagName=='DL'});$('.portalMessage').remove();$('#user-group-sharing').replaceWith(sharing);$('#content').prepend(messages)}
var search_timeout=null;$('#content-core').delegate('#sharing-user-group-search','input', function(){var text=$(this);if(search_timeout!=null){clearTimeout(search_timeout)}
if(text.val().length>3){search_timeout=setTimeout($.proxy(function(){$('#sharing-search-button').trigger('click')},text),300)}});$('#content-core').delegate('#sharing-search-button','click', function(){$.ajax({url:$('base').attr('href')+'/@@updateSharingInfo',data:{search_term:$('#sharing-user-group-search').val(),'form.button.Search':'Search'},type:'GET',dataType:'json',success:updateSharing});return false});$('#content-core').delegate('#sharing-save-button','click', function(){var btn=$(this);var form=btn.parents('form');var data=form.serializeArray();data.push({name:'form.button.Save',value:'Save'});$.ajax({url:$('base').attr('href')+'/@@updateSharingInfo',data:data,type:'POST',dataType:'json',success:updateSharing});return false})})})(jQuery);

/* - inline_validation.js - */
// http://www.eea.europa.eu/portal_javascripts/inline_validation.js?original=1
jQuery(function($){var render_error=function($field,errmsg){var $errbox=$('div.fieldErrorBox',$field);if(errmsg!==''){$field.addClass('error');$errbox.html(errmsg)} else{$field.removeClass('error');$errbox.html('')}};$('.field input.blurrable,.field select.blurrable,.field textarea.blurrable').live('blur', function(){var $input=$(this),$field=$input.closest('.field'),uid=$field.attr('data-uid'),fname=$field.attr('data-fieldname'),value=$input.val();if($field&&uid&&fname){$.post($('base').attr('href')+'/at_validate_field',{uid:uid,fname:fname,value:value}, function(data){render_error($field,data.errmsg)})}});var formlib_validate_field=function(input){var $input=$(input),$field=$input.closest('.field'),$form=$field.closest('form'),fname=$field.attr('data-fieldname');$form.ajaxSubmit({url:$form.attr('action')+'/@@formlib_validate_field',data:{fname:fname},iframe:false,success: function(data){render_error($field,data.errmsg)},dataType:'json'})};$('.formlibInlineValidation input[type="text"]').live('blur', function(){formlib_validate_field(this)});$('.formlibInlineValidation input[type="password"]').live('blur', function(){formlib_validate_field(this)});$('.formlibInlineValidation input[type="checkbox"]').live('blur', function(){formlib_validate_field(this)});$('.formlibInlineValidation input[type="radio"]').live('blur', function(){formlib_validate_field(this)});$('.formlibInlineValidation select').live('blur', function(){formlib_validate_field(this)});$('.formlibInlineValidation textarea').live('blur', function(){formlib_validate_field(this)});var z3cform_validate_field=function(input){var $input=$(input),$field=$input.closest('.field'),$form=$field.closest('form'),fset=$input.closest('fieldset').attr('data-fieldset'),fname=$field.attr('data-fieldname');if(fname){$form.ajaxSubmit({url:$form.attr('action')+'/@@z3cform_validate_field',data:{fname:fname,fset:fset},iframe:false,success: function(data){render_error($field,data.errmsg)},dataType:'json'})}};$('.z3cformInlineValidation input[type="text"]').live('blur', function(){z3cform_validate_field(this)});$('.z3cformInlineValidation input[type="password"]').live('blur', function(){z3cform_validate_field(this)});$('.z3cformInlineValidation input[type="checkbox"]').live('blur', function(){z3cform_validate_field(this)});$('.z3cformInlineValidation input[type="radio"]').live('blur', function(){z3cform_validate_field(this)});$('.z3cformInlineValidation select').live('blur', function(){z3cform_validate_field(this)});$('.z3cformInlineValidation textarea').live('blur', function(){z3cform_validate_field(this)})});

/* - ++resource++eea.daviz.tutorials.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++eea.daviz.tutorials.js?original=1
if(window.DavizEdit===undefined){var DavizEdit={'version':'4.0'}}
DavizEdit.DavizTutorials=function(context,options){var self=this;self.context=context;self.initialize(options)};DavizEdit.DavizTutorials.prototype={initialize: function(options){var self=this;self.prefix=options.prefix||"";this.context.addClass("daviz-tutorials");jQuery(window).bind('hashchange', function(evt){jQuery(".daviz-tutorials-main-playlist").scrollTop(0);var hash=window.location.hash;if(hash===""){hash="#All tutorials"}
hash=hash.substr(1);self.updateTutorials(hash)});var playerWidth=580;var playerHeight=315;var minSearchWidth=400;var maxSearchWidth=playerWidth;var fullWidth=self.context.parent().width();var searchWidth=fullWidth-playerWidth>minSearchWidth?fullWidth-playerWidth-10:playerWidth-4;searchWidth=Math.min(maxSearchWidth,searchWidth);jQuery("<iframe>").attr("width",playerWidth).attr("height",playerHeight).attr("frameborder",0).attr("allowfullscreen",true).attr("src","").appendTo(this.context);jQuery("<div>").addClass("daviz-tutorials-search").width(searchWidth).appendTo(this.context);jQuery("<div>").addClass("daviz-tutorials-main-playlist-title-label").css("height",20).text("Showing videos with tag:").appendTo(".daviz-tutorials-search");jQuery("<div>").addClass("daviz-tutorials-main-playlist-title").css("height",20).appendTo(".daviz-tutorials-search");jQuery("<div>").css("clear","both").appendTo(".daviz-tutorials-search");jQuery("<div>").addClass("daviz-tutorials-main-playlist").css("height",self.context.find("iframe").attr("height")-30).appendTo(".daviz-tutorials-search");jQuery("<div>").addClass("daviz-tutorials-tagcloud").data("tags",{}).css("height",400).appendTo(".daviz-tutorials-search");var playlists={"Basic tutorials":"PLVPSQz7ahsByeq8nVKC7TT9apArEXBrV0","Advanced tutorials":"PLVPSQz7ahsBxbe8pwzFWLQuvDSP9JFn8I"};var api_key="AIzaSyAJ8UVYKjhX9AmrTwBAfJIXnbnVlPaDxRQ";jQuery.each(playlists, function(playlist_key,playlist){jQuery.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+playlist+"&key="+api_key+"&maxResults=50", function(data){var main_playlist=self.context.find(".daviz-tutorials-main-playlist");var div=jQuery("<div>").addClass("daviz-tutorials-playlist").attr("playlistid",playlist).appendTo(main_playlist);jQuery("<div>").addClass("daviz-tutorials-videos").appendTo(".daviz-tutorials-playlist[playlistid='"+playlist+"']");jQuery.each(data.items, function(item_idx,item){var fulldescription=item.snippet.description;var tags_from_description;try{tags_from_description=fulldescription.split("EEA Tags:")[1].split(".")[0]}
catch(err){tags_from_description="others"}
if(tags_from_description===undefined){tags_from_description="others"}
var tmp_tags=tags_from_description.split(",");tmp_tags.push("All tutorials");tmp_tags.push(playlist_key);var tags=[];for(i=0;i<tmp_tags.length;i++){var tag=tmp_tags[i].trim();if(tag!==""){tags.push(tag)}}
self.updateTagCloud(tags);var img=jQuery("<img>").attr("src",item.snippet.thumbnails['default'].url);var iframe=self.context.find("iframe");var item_obj=jQuery("<div>").addClass("daviz-tutorials-videoitem").addClass("hidden-item").data("tags",tags).attr("videoid",item.snippet.resourceId.videoId).appendTo(".daviz-tutorials-playlist[playlistid='"+item.snippet.playlistId+"'] .daviz-tutorials-videos").click(function(){jQuery(iframe).attr("src","https://www.youtube.com/embed/"+jQuery(this).attr("videoid")+"?autoplay=1");jQuery(".nowplaying").removeClass("nowplaying");jQuery(this).addClass("nowplaying")}).prepend(img);jQuery("<div>").text(item.snippet.title).width(searchWidth-110).appendTo(item_obj)});self.updateTutorials();jQuery(window).trigger('hashchange')})})},updateTutorials: function(tag){self=this;self.context.find(".daviz-tutorials-main-playlist").scrollTop(0);if((tag==="")||(tag===undefined)){tag="All tutorials"}
jQuery(".daviz-tutorials-main-playlist-title").text(tag);jQuery(".daviz-tutorials-tagcloud a").removeClass("selected");jQuery(".daviz-tutorials-tagcloud a[tag='"+tag+"']").addClass("selected");jQuery(".daviz-tutorials-videoitem").addClass("hidden-item").removeClass("nowplaying");self.context.find("iframe").attr("src","");jQuery.each(jQuery(".daviz-tutorials-videoitem"), function(idx,item){item=jQuery(item);if(jQuery.inArray(tag,item.data("tags"))!==-1){if(self.context.find("iframe").attr("src")===""){item.addClass("nowplaying");self.context.find("iframe").attr("src","https://www.youtube.com/embed/"+item.attr("videoid"))}
item.removeClass("hidden-item")}})},updateTagCloud: function(tags){self=this;tag_data=jQuery(".daviz-tutorials-tagcloud").data("tags");for(i=0;i<tags.length;i++){var tag=tags[i].trim();if(tag!==""){if(tag_data[tag]===undefined){tag_data[tag]=0}
tag_data[tag]++}}
jQuery(".daviz-tutorials-tagcloud").data("tags",tag_data);var sorted_tags=[];jQuery.each(tag_data, function(key,value){sorted_tags.push({tag:key,count:value})});sorted_tags.sort(function(a,b){if(a.tag==='All tutorials'){return-1}
if((a.tag==='Basic tutorials')&&(b.tag!=='All tutorials')){return-1}
if((a.tag==='Advanced tutorials')&&(b.tag!=='All tutorials')&&(b.tag!=='Basic tutorials')){return-1}
if(b.tag==='All tutorials'){return 1}
if((b.tag==='Basic tutorials')&&(a.tag!=='All tutorials')){return 1}
if((b.tag==='Advanced tutorials')&&(a.tag!=='All tutorials')&&(a.tag!=='Basic tutorials')){return 1}
if(a.tag==='intro'){return-1}
if(b.tag==='intro'){return 1}
if(a.count>b.count){return-1}
else if(a.count<b.count){return 1}
else{if(a.tag<b.tag){return-1}
else if(a.tag>b.tag){return 1}
else{return 0}}});jQuery(".daviz-tutorials-tagcloud").empty();jQuery("<div>").addClass("by-difficulty").appendTo(".daviz-tutorials-tagcloud");jQuery("<label>").text("Filter by difficulty:").appendTo(".by-difficulty");jQuery("<ul>").appendTo(".by-difficulty");jQuery("<div>").addClass("by-topic").width(jQuery(".daviz-tutorials-search").width()-200).appendTo(".daviz-tutorials-tagcloud");jQuery("<label>").text("Filter by topic:").appendTo(".by-topic");jQuery("<ul>").appendTo(".by-topic");for(i=0;i<sorted_tags.length;i++){var container=".daviz-tutorials-tagcloud .by-difficulty ul";if(i>2){container=".daviz-tutorials-tagcloud .by-topic ul"}
var li=jQuery("<li>").appendTo(container);jQuery("<a>").css("text-decoration","none").attr("tag",sorted_tags[i].tag).attr("href",self.prefix+"#"+sorted_tags[i].tag).text(sorted_tags[i].tag+"("+sorted_tags[i].count+") ").appendTo(li)}}};jQuery.fn.DavizTutorials=function(options){return this.each(function(){var tutorials=new DavizEdit.DavizTutorials(jQuery(this),options)})};
function updateTutorialLinks(){jQuery(".eea-tutorial").empty();jQuery.each(jQuery(".eea-tutorial"), function(idx,tutorial){jQuery("<div>").addClass("message").text(jQuery(tutorial).attr("message")).appendTo(tutorial);jQuery("<a>").attr("href","daviz-tutorials.html#"+jQuery(tutorial).attr("tutorial")).attr("target","_blank").attr("title","see video help").appendTo(tutorial);jQuery("<span>").addClass("eea-icon eea-icon-youtube-play tutorial-icon").appendTo(jQuery(tutorial).find("a"));jQuery("<span>").addClass("tutorial-title").text("see video help").appendTo(jQuery(tutorial).find("a"))})}


/* - eea-icons.js - */
// http://www.eea.europa.eu/portal_javascripts/eea-icons.js?original=1
jQuery(document).ready(function($){$(".eea-icon-left-container").each(function(i,el){var $el=$(el);if($el.find(".eea-icon-left").length){return}
var $i_tag=$("<span class='eea-icon eea-icon-left'></span>");$el.prepend($i_tag)});$(".eea-icon-right-container").each(function(i,el){var $el=$(el);if($el.find(".eea-icon-right").length){return}
var $i_tag=$("<span class='eea-icon eea-icon-right'></span>");$el.append($i_tag)})});