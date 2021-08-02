/*!CK:2789792731!*//*1452464526,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["YIfOp"]); }

__d('InputLabel.react',['React','cx','invariant','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.PropTypes,m=0;function n(){return 'js_input_label_'+m++;}var o=h.createClass({displayName:'InputLabel',propTypes:{display:l.oneOf(['block','inline'])},getDefaultProps:function(){return {display:'block'};},render:function(){!(this.props.children.length===2)?j(0):undefined;var p=this.props.children[0],q=this.props.children[1],r=p.type==='input';p=h.cloneElement(p,{className:k(p.props.className,"uiInputLabelInput"+(r&&p.props.type==='radio'?' '+"uiInputLabelRadio":'')+(r&&p.props.type==='checkbox'?' '+"uiInputLabelCheckbox":'')),id:p.props.id||n()});q=h.cloneElement(q,{className:k(q.props.className,'uiInputLabelLabel'),htmlFor:p.props.id});var s="uiInputLabel"+(' '+"clearfix")+(this.props.display==='inline'?' '+"inlineBlock":'')+(r?' '+"uiInputLabelLegacy":'');return (h.createElement('div',babelHelpers._extends({},this.props,{className:k(this.props.className,s)}),p,q));}});f.exports=o;},null);
__d('LoadingIndicator.react',['React','Image.react','cx','keyMirror','ix','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=k({white:true,blue:true,black:true}),o=k({small:true,medium:true,large:true}),p={white:{large:l('/images/loaders/indicator_blue_large.gif'),medium:l('/images/loaders/indicator_blue_medium.gif'),small:l('/images/loaders/indicator_blue_small.gif')},blue:{large:l('/images/loaders/indicator_white_large.gif'),small:l('/images/loaders/indicator_white_small.gif')},black:{large:l('/images/loaders/indicator_black.gif')}},q=h.createClass({displayName:'LoadingIndicator',render:function(){var r=this.props.color,s=this.props.size;if(!p[r])return h.createElement('span',null);if(!p[r][s])return h.createElement('span',null);var t=this.props.showonasync?"uiLoadingIndicatorAsync":'',u=p[r][s];return (h.createElement(i,babelHelpers._extends({},this.props,{src:u,className:m(this.props.className,t)})));}});q.SIZES=o;q.COLORS=n;f.exports=q;},null);
__d('LinkshimAsyncLink',['$','AsyncSignal','DOM','UserAgent_DEPRECATED','LinkshimHandlerConfig'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m={swap:function(n,o){var p=k.ie()<=8;if(p){var q=j.create('wbr',{},null);j.appendContent(n,q);}n.href=o;if(p)j.remove(q);},referrer_log:function(n,o,p){var q=h('meta_referrer');q.content='origin';m.swap(n,o);setTimeout(function(){q.content=l.default_meta_referrer_policy;new i(p,{}).send();},100);}};f.exports=m;},null);
__d('legacy:dom-asynclinkshim',['LinkshimAsyncLink'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.LinkshimAsyncLink=c('LinkshimAsyncLink');},3);
__d("clamp",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){if(i<j)return j;if(i>k)return k;return i;}f.exports=h;},null);
__d('getScrollPosition',['getDocumentScrollElement','getUnboundedScrollPosition'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();function j(k){var l=h();if(k===window)k=l;var m=i(k),n=k===l?document.documentElement:k,o=k.scrollWidth-n.clientWidth,p=k.scrollHeight-n.clientHeight;m.x=Math.max(0,Math.min(m.x,o));m.y=Math.max(0,Math.min(m.y,p));return m;}f.exports=j;},null);
__d('AttachmentRelatedShareConstants',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={ARTICLE_CLICK:'article_click',VIDEO_CLICK:'video_click',FBVIDEO_CLICK:'fbvideo_click',GAME_CLICK:'game_click',EVENT_DELAY:1000,HIDE_DELAY:100,PHOTO_CLICK:'photo_click',EVENT_JOIN:'event_join'};f.exports=h;},null);
__d('FeedTrackingAsync',['Arbiter','collectDataAttributes'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(){h.subscribe('AsyncRequest/send',function(k,l){var m=l.request,n=m.getRelativeTo();if(n){var o=m.getData(),p=i(n,['ft']);if(Object.keys(p.ft).length)Object.assign(o,p);}});}f.exports={init:j};},null);
__d('LitestandStream',['CSS','LitestandStoryInsertionStatus','ViewportBounds','cx','csx','getElementPosition','nullthrows'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o,p,q={init:function(r,s,t){o=t;p=r;},getStoriesSelector:function(){return "._5jmm";},getStreamRoot:function(){return p;},getSectionID:function(){return o;},isStory:function(r){return h.hasClass(r,"_5jmm");},canInsertNewerStories:function(){if(j.getTop()>m(q.getStreamRoot()).y)return false;return i.canInsert();},getFeedStreamID:function(){return parseInt(n(p).id.split('feed_stream_')[1],16)%1e+08;}};f.exports=q;},null);
__d('ParameterizedPopover',['Arbiter','ArbiterMixin','CSS','DataStore','Event','Focus','Keys','KeyStatus','LayerHideOnEscape','SubscriptionsHandler','Toggler','curry','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();var u,v;r.subscribe(['show','hide'],function(x,y){var z=k.get(y.getActive(),'Popover');if(z)if(x==='show'){z.showLayer();}else z.hideLayer();});u=babelHelpers.inherits(w,t(i));v=u&&u.prototype;function w(x,y,z,aa){'use strict';v.constructor.call(this);this._root=x;this._triggerElem=y;this._behaviors=z;this._config=aa||{};this._disabled=!!this._config.disabled;this._listeners=new q();if(!this._disabled&&(y.nodeName!=='A'||y.rel!=='toggle'))this._setupClickListener();this._setupKeyListener();y.setAttribute('role','button');k.set(x,'Popover',this);if(r.getActive()===x)this.showLayer();}w.prototype.ensureInit=function(){'use strict';if(!this._layer)this._init();};w.prototype.showLayer=function(){'use strict';this.ensureInit();this._layer.show();r.show(this._root);j.addClass(this._root,'selected');this.inform('show');};w.prototype.getContentRoot=function(){'use strict';return this._root;};w.prototype.getLayer=function(){'use strict';return this._layer;};w.prototype.hideLayer=function(){'use strict';this._layer.hide();};w.prototype.isShown=function(){'use strict';return this._layer&&this._layer.isShown();};w.prototype.setLayerContent=function(x){'use strict';this.ensureInit();if(this._layer.setContent)this._layer.setContent(x);};w.prototype._init=function(){'use strict';var x=this._config.layer;x.enableBehaviors([p]);r.createInstance(x.getRoot()).setSticky(false);x.subscribe('hide',this._onLayerHide.bind(this));this._behaviors&&x.enableBehaviors(this._behaviors);this._layer=x;this.inform('init',null,h.BEHAVIOR_PERSISTENT);};w.prototype._onLayerHide=function(){'use strict';r.hide(this._root);j.removeClass(this._root,'selected');this.inform('hide');if(o.getKeyDownCode()===n.ESC)m.set(this._triggerElem);};w.prototype.enable=function(){'use strict';if(!this._disabled)return;this._listeners.engage();this._setupClickListener();this._setupKeyListener();this._disabled=false;};w.prototype.disable=function(){'use strict';if(this._disabled)return;if(this.isShown())this.hideLayer();this._listeners.release();if(this._triggerElem.getAttribute('rel')==='toggle')this._triggerElem.removeAttribute('rel');this._disabled=true;};w.prototype._setupClickListener=function(){'use strict';this._listeners.addSubscriptions(l.listen(this._triggerElem,'click',s(r.bootstrap,this._triggerElem)));};w.prototype._setupKeyListener=function(){'use strict';this._listeners.addSubscriptions(l.listen(this._triggerElem,'keydown',this._handleKeyEvent.bind(this)));};w.prototype._handleKeyEvent=function(event){'use strict';if(event.getModifiers().any)return;var x=l.getKeyCode(event);switch(x){case n.SPACE:case n.DOWN:case n.UP:if(x===n.SPACE||!this.isShown())r.bootstrap(this._triggerElem);break;default:return;}event.prevent();};w.prototype.destroy=function(){'use strict';this.disable();k.remove(this._root,'Popover');};Object.assign(w.prototype,{_layer:null});f.exports=w;},null);
__d('Popover',['ContextualLayer','ContextualLayerHideOnScroll','DOM','ParameterizedPopover'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;l=babelHelpers.inherits(n,k);m=l&&l.prototype;n.prototype._init=function(){'use strict';var o=new h({context:this._triggerElem,position:'below',arrowDimensions:{offset:12,length:16}},j.create('div'));o.enableBehaviors([i]);this._config.layer=o;if(this._config.alignh)o.setAlignment(this._config.alignh);if(this._config.layer_content)o.setContent(this._config.layer_content);if(this._config.position)o.setPosition(this._config.position);if(this._config.arrowDimensions)o.setArrowDimensions(this._config.arrowDimensions);m._init.call(this);};function n(){'use strict';l.apply(this,arguments);}f.exports=n;},null);
__d('VirtualCursorStatus',['AccessibilityConfig','Event','KeyStatus','invariant','setImmediate'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=false,n=false;function o(event){if(!h.a11yVirtualCursorTrigger)return false;var s=j.isKeyDown(),t=event.clientX,u=event.clientY,v=event.offsetX,w=event.offsetY,x=event.mozInputSource,y=event.getTarget(),z=y.clientWidth,aa=y.clientHeight;if(t===0&&u===0&&n)return true;if(u<0&&t<0&&!n&&!s)return true;if((v<0||v>z||(w<0||w>aa))&&!n&&!s)return true;if(x===0)return true;return false;}function p(){n=true;l(function(){n=false;});}function q(event){m=o(event);l(function(){m=false;});}var r={isVirtualCursorTriggered:function(){return m;},add:function(s){!s?k(0):undefined;var t=i.listen(s,'click',q),u=i.listen(s,'mouseup',p);return {remove:function(){t.remove();u.remove();}};}};f.exports=r;},null);
__d('PopoverMenu',['Arbiter','ArbiterMixin','ARIA','BehaviorsMixin','Event','Focus','Keys','KeyStatus','SubscriptionsHandler','VirtualCursorStatus','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s,t;s=babelHelpers.inherits(u,r(i,k));t=s&&s.prototype;function u(v,w,x,y){'use strict';t.constructor.call(this);this._popover=v;this._triggerElem=w;this._getInitialMenu=typeof x!=='function'?function(){return x;}:x;this._subscriptions=new p();this._subscriptions.addSubscriptions(v.subscribe('init',this._onLayerInit.bind(this)),v.subscribe('show',this._onPopoverShow.bind(this)),v.subscribe('hide',this._onPopoverHide.bind(this)),l.listen(this._triggerElem,'keydown',this._handleKeyEventOnTrigger.bind(this)),q.add(this._triggerElem));y&&this.enableBehaviors(y);}u.prototype.getContentRoot=function(){'use strict';return this._popover.getContentRoot();};u.prototype.setMenu=function(v){'use strict';if(this._menu&&this._menu!==v)this._menu.destroy();this._menu=v;var w=v.getRoot();this._popover.setLayerContent(w);v.subscribe('done',this._onMenuDone.bind(this));if(this._popoverShown)this._menu.onShow();j.owns(this._triggerElem,w);this.inform('setMenu',null,h.BEHAVIOR_PERSISTENT);};u.prototype.setInitialFocus=function(v,w){'use strict';if(w)v.focusAnItem();};u.prototype.getPopover=function(){'use strict';return this._popover;};u.prototype.getTriggerElem=function(){'use strict';return this._triggerElem;};u.prototype.getInitialMenu=function(){'use strict';return this._getInitialMenu();};u.prototype.getMenu=function(){'use strict';return this._menu;};u.prototype._onLayerInit=function(){'use strict';if(!this._menu)this.setMenu(this._getInitialMenu());this._popover.getLayer().subscribe('key',this._handleKeyEvent.bind(this));};u.prototype._onPopoverShow=function(){'use strict';var v=o.isKeyDown()||q.isVirtualCursorTriggered();if(this._menu){this._menu.onShow();this.setInitialFocus(this._menu,v);}this._popoverShown=true;};u.prototype._onPopoverHide=function(){'use strict';if(this._menu)this._menu.onHide();this._popoverShown=false;};u.prototype._handleKeyEvent=function(v,w){'use strict';var x=l.getKeyCode(w);if(x===n.TAB){this._popover.hideLayer();m.set(this._triggerElem);return;}if(w.getModifiers().any)return;switch(x){case n.RETURN:return;default:if(this._menu.handleKeydown(x,w)===false){this._menu.blur();this._menu.handleKeydown(x,w);}break;}w.prevent();};u.prototype._handleKeyEventOnTrigger=function(v){'use strict';var w=l.getKeyCode(v),x=String.fromCharCode(w).toLowerCase();if(/^\w$/.test(x)){this._popover.showLayer();this._menu.blur();if(this._menu.handleKeydown(w,v)===false){this._popover.hideLayer();m.set(this._triggerElem);}}};u.prototype._onMenuDone=function(v){'use strict';var w=o.isKeyDown();setTimeout((function(){this._popover.hideLayer();if(w)m.set(this._triggerElem);}).bind(this),0);};u.prototype.enable=function(){'use strict';this._popover.enable();};u.prototype.disable=function(){'use strict';this._popover.disable();};u.prototype.destroy=function(){'use strict';this._subscriptions.release();this._popover.destroy();this._getInitialMenu().destroy();this._menu&&this._menu.destroy();};Object.assign(u.prototype,{_popoverShown:false});f.exports=u;},null);
__d('PopoverAsyncMenu',['Bootloader','Event','KeyStatus','PopoverMenu','VirtualCursorStatus','setImmediate'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n,o,p={},q=0;n=babelHelpers.inherits(r,k);o=n&&n.prototype;function r(s,t,u,v,w,x){'use strict';o.constructor.call(this,s,t,null,w);this._endpoint=v;this._endpointData=x||{};this._loadingMenu=u;this._instanceId=q++;p[this._instanceId]=this;this._mouseoverListener=i.listen(t,'mouseover',this.fetchMenu.bind(this));}r.prototype._onLayerInit=function(){'use strict';if(!this._menu&&this._loadingMenu)this.setMenu(this._loadingMenu);this._popover.getLayer().subscribe('key',this._handleKeyEvent.bind(this));this._triggerInfo={isKeyDown:j.isKeyDown(),isVirtualCursorTriggered:l.isVirtualCursorTriggered()};m((function(){return this.fetchMenu();}).bind(this));};r.prototype._onPopoverHide=function(){'use strict';o._onPopoverHide.call(this);this._triggerInfo=null;};r.prototype.fetchMenu=function(){'use strict';if(this._fetched)return;h.loadModules(["AsyncRequest"],(function(s){new s().setURI(this._endpoint).setData(Object.assign({pmid:this._instanceId},this._endpointData)).send();}).bind(this));this._fetched=true;if(this._mouseoverListener){this._mouseoverListener.remove();this._mouseoverListener=null;}};r.prototype._setFocus=function(s){'use strict';var t=this._triggerInfo||{},u=t.isKeyDown,v=t.isVirtualCursorTriggered;this.setInitialFocus(s,u||v);this._triggerInfo=null;};r.setMenu=function(s,t){'use strict';var u=p[s];u.setMenu(t);u._setFocus(t);};r.getInstance=function(s){'use strict';return p[s];};f.exports=r;},null);
__d("SelectableMenuUtils",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={doesItemSupportSelect:function(j){return i(j);},isSelected:function(j){return i(j)&&j.isSelected();}};function i(j){return j.select&&j.deselect&&j.isSelected;}f.exports=h;},null);
__d('MenuSelectableItem',['CSS','MenuItem','cx'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l;k=babelHelpers.inherits(m,i);l=k&&k.prototype;function m(n){'use strict';l.constructor.call(this,n);this._selected=!!this._data.selected;}m.prototype.getIcon=function(){'use strict';return this._data.icon;};m.prototype.isSelected=function(){'use strict';return this._selected;};m.prototype.select=function(){'use strict';if(this.isDisabled())return false;h.addClass(this._root,"_54nd");this._anchor.setAttribute('aria-selected','true');this._selected=true;};m.prototype.deselect=function(){'use strict';h.removeClass(this._root,"_54nd");this._anchor.setAttribute('aria-selected','false');this._selected=false;};m.prototype.render=function(){'use strict';var n=l.render.call(this);if(this._data.selected){h.addClass(n,"_54nd");this._anchor.setAttribute('aria-selected','true');}return n;};Object.assign(m.prototype,{_selected:false});f.exports=m;},null);
__d('SelectableMenu',['Menu','arrayContains','createArrayFromMixed','SelectableMenuUtils'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;l=babelHelpers.inherits(n,h);m=l&&l.prototype;n.prototype.focusAnItem=function(){'use strict';for(var o=0;o<this._items.length;o++)if(k.isSelected(this._items[o]))if(this._focusItem(this._items[o])!==false)return true;return m.focusAnItem.call(this);};n.prototype.setValue=function(o){'use strict';if(!this._root)this._render();var p=j(o);this._items.forEach(function(q){if(k.doesItemSupportSelect(q))if(i(p,q.getValue())){q.select();}else if(k.isSelected(q))q.deselect();});this.inform('change',this.getSelection());};n.prototype._handleItemClick=function(o,p){'use strict';if(!k.doesItemSupportSelect(o))return m._handleItemClick.call(this,o,p);var q=this.inform('itemclick',{item:o,event:p});if(q)return;if(this._config.multiple){var r=k.isSelected(o)?o.deselect():o.select();if(r!==false)this.inform('change',this.getSelection());}else{if(!k.isSelected(o))if(o.select()!==false){this._items.forEach(function(s){if(k.isSelected(s)&&s!==o)s.deselect();});this.inform('change',this.getSelection());}this.done();}return o.handleClick();};n.prototype.getSelection=function(){'use strict';var o=[];this._items.forEach(function(p){if(k.isSelected(p))o.push({label:p.getLabel(),value:p.getValue(),item:p});});if(!this._config.multiple)o=o[0];return o;};function n(){'use strict';l.apply(this,arguments);}f.exports=n;},null);
__d('PopoverLoadingMenu',['BehaviorsMixin','DOM','PopoverMenuInterface','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m,n;m=babelHelpers.inherits(o,j);n=m&&m.prototype;function o(p){'use strict';n.constructor.call(this);this._config=p||{};this._theme=p.theme||{};}o.prototype.getRoot=function(){'use strict';if(!this._root){this._root=i.create('div',{className:l("_54nq",this._config.className,this._theme.className)},i.create('div',{className:"_54ng"},i.create('div',{className:"_54nf _54af"},i.create('span',{className:"_54ag"}))));if(this._config.behaviors)this.enableBehaviors(this._config.behaviors);}return this._root;};Object.assign(o.prototype,h,{_root:null});f.exports=o;},null);
__d('MenuTheme',['cx'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports={className:"_569t"};},null);
__d('ContextualLayerPositionClassOnContext',['CSS','cx'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(l){'use strict';this._layer=l;}j.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('reposition',this._updateClassName.bind(this));if(this._layer.isShown())this._updateClassName();};j.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;if(this._prevClassName){h.removeClass(this._layer.getContext(),this._prevClassName);this._prevClassName=null;}};j.prototype._updateClassName=function(l,m){'use strict';var n=this._layer.getContext(),o=k(m);if(this._prevClassName){if(this._prevClassName===o)return;h.removeClass(n,this._prevClassName);}h.addClass(n,o);this._prevClassName=o;};function k(l){var m=l.getAlignment(),n=l.getPosition();if(n==='below'){if(m==='left'){return "_nk";}else if(m==='right'){return "_nl";}else return "_nm";}else if(n==='above'){if(m==='left'){return "_nn";}else if(m==='right'){return "_no";}else return "_np";}else if(n==='left'){return "_nq";}else return "_nr";}Object.assign(j.prototype,{_subscription:null,_prevClassName:null});f.exports=j;},null);