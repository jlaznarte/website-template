this.CwH=this.CwH||{},this.CwH.templates=this.CwH.templates||{},this.CwH.templates.getAuthorPopup=CwH.template({1:function(a,n,l,i){var s;return"                            "+(null!=(s=n["if"].call(a,i&&i.index,{name:"if",hash:{},fn:this.program(2,i,0),inverse:this.noop,data:i}))?s:"")+"\n                            <span>"+this.escapeExpression(this.lambda(a,a))+"</span>\n"},2:function(a,n,l,i){return"<span>,</span>"},4:function(a,n,l,i,s,t){var o,e,r=this.lambda,u=this.escapeExpression;return'                            ...<a href="'+u(r(null!=t[1]?t[1].domainURL:t[1],a))+"/auapi/public?x=1&authorId="+u(r(null!=(o=null!=t[1]?t[1].authorObj:t[1])?o.id:o,a))+'&applet=affiliation" target="_blank" class="more-plus">'+u((e=null!=(e=n.moreAffs||(null!=a?a.moreAffs:a))?e:n.helperMissing,"function"==typeof e?e.call(a,{name:"moreAffs",hash:{},data:i}):e))+"</a>\n"},6:function(a,n,l,i){var s;return(null!=(s=n["if"].call(a,i&&i.index,{name:"if",hash:{},fn:this.program(7,i,0),inverse:this.noop,data:i}))?s:"")+"                            <span>"+this.escapeExpression(this.lambda(a,a))+"</span>\n"},7:function(a,n,l,i){return"                                ,\n"},9:function(a,n,l,i,s,t){var o,e,r=this.lambda,u=this.escapeExpression;return'                            ...<a href="'+u(r(null!=t[1]?t[1].domainURL:t[1],a))+"/auapi/public?x=1&authorId="+u(r(null!=(o=null!=t[1]?t[1].authorObj:t[1])?o.id:o,a))+'&applet=discipline" target="_blank" class="more-plus">'+u((e=null!=(e=n.moreKeywords||(null!=a?a.moreKeywords:a))?e:n.helperMissing,"function"==typeof e?e.call(a,{name:"moreKeywords",hash:{},data:i}):e))+"</a>\n"},11:function(a,n,l,i){return"icon-check"},13:function(a,n,l,i){return"icon-add"},15:function(a,n,l,i){return"ed"},17:function(a,n,l,i){var s,t=this.lambda,o=this.escapeExpression;return'\n            <div class="trunk">\n                <i class="icon-trophy"></i>\n                <span title="'+o(t(null!=(s=null!=a?a.authorObj:a)?s.awardsStr:s,a))+'">'+o(t(null!=(s=null!=a?a.authorObj:a)?s.awardsStr:s,a))+"</span>\n            </div>\n"},19:function(a,n,l,i,s,t){var o;return'            <div>\n                <i class="icon-editor"></i>\n                <span>'+(null!=(o=n.each.call(a,null!=a?a.editors:a,{name:"each",hash:{},fn:this.program(20,i,0,s,t),inverse:this.noop,data:i}))?o:"")+"</span>\n"+(null!=(o=(n.ifCond||a&&a.ifCond||n.helperMissing).call(a,null!=a?a.moreEditors:a,">",0,{name:"ifCond",hash:{},fn:this.program(23,i,0,s,t),inverse:this.noop,data:i}))?o:"")+"            </div>\n        "},20:function(a,n,l,i){var s;return(null!=(s=n["if"].call(a,i&&i.index,{name:"if",hash:{},fn:this.program(21,i,0),inverse:this.noop,data:i}))?s:"")+this.escapeExpression(this.lambda(a,a))},21:function(a,n,l,i){return","},23:function(a,n,l,i,s,t){var o,e,r=this.lambda,u=this.escapeExpression;return'                    ...<a href="'+u(r(null!=t[1]?t[1].domainURL:t[1],a))+"/auapi/public?x=1&authorId="+u(r(null!=(o=null!=t[1]?t[1].authorObj:t[1])?o.id:o,a))+'&applet=editorship" target="_blank" class="more-plus">'+u((e=null!=(e=n.moreKeywords||(null!=a?a.moreKeywords:a))?e:n.helperMissing,"function"==typeof e?e.call(a,{name:"moreKeywords",hash:{},data:i}):e))+"</a>\n"},25:function(a,n,l,i){return"s"},27:function(a,n,l,i){var s;return'                 <a data-tab="cw-tab-coauthors" href="javascript:;"><span><b class="t_AuthCount">'+this.escapeExpression(this.lambda(null!=(s=null!=a?a.authorObj:a)?s.coCount:s,a))+"</b> Co-Author"+(null!=(s=(n.ifCond||a&&a.ifCond||n.helperMissing).call(a,null!=(s=null!=a?a.authorObj:a)?s.coCount:s,">",1,{name:"ifCond",hash:{},fn:this.program(25,i,0),inverse:this.noop,data:i}))?s:"")+"</span></a>\n"},29:function(a,n,l,i,s,t){var o,e=this.lambda,r=this.escapeExpression;return'                        <div class="auth-pub-row">\n                            <i class="icon-pub"></i>\n                            <div class="details">\n                                <a href="'+r(e(null!=t[1]?t[1].domainURL:t[1],a))+"/public/app?x=/e109&eId="+r(e(null!=a?a.entId:a,a))+'&et=109" target="_blank" class="pub-title">'+r(e(null!=a?a.title:a,a))+"</a>\n"+(null!=(o=n["if"].call(a,null!=a?a.Authors:a,{name:"if",hash:{},fn:this.program(30,i,0,s,t),inverse:this.noop,data:i}))?o:"")+(null!=(o=n["if"].call(a,null!=a?a.year:a,{name:"if",hash:{},fn:this.program(33,i,0,s,t),inverse:this.noop,data:i}))?o:"")+"                            </div>\n                        </div>\n"},30:function(a,n,l,i,s,t){var o;return'                                    <p class="authors">\n'+(null!=(o=n.each.call(a,null!=a?a.Authors:a,{name:"each",hash:{},fn:this.program(31,i,0,s,t),inverse:this.noop,data:i}))?o:"")+"                                    </p>\n"},31:function(a,n,l,i,s,t){var o=this.lambda,e=this.escapeExpression;return'                                            <a href="'+e(o(null!=t[3]?t[3].domainURL:t[3],a))+"/auapi/public?x=1&authorId="+e(o(null!=a?a.id:a,a))+'" target="_blank" href="javascript:;">'+e(o(null!=a?a.abbrName:a,a))+"</a>\n"},33:function(a,n,l,i){var s=this.lambda,t=this.escapeExpression;return"                                    <p>\n                                        <span>"+t(s(null!=a?a.year:a,a))+", </span>\n                                        <span>"+t(s(null!=a?a.journal:a,a))+"</span>\n                                    </p>\n"},35:function(a,n,l,i,s,t){var o,e,r=this.escapeExpression;return'            <div data-tab="cw-tab-coauthors" style="display: none;">\n                <div class="co-auth-content">\n'+(null!=(o=n.each.call(a,null!=(o=null!=a?a.authorObj:a)?o.CoAuthors:o,{name:"each",hash:{},fn:this.program(36,i,0,s,t),inverse:this.noop,data:i}))?o:"")+'                </div>\n                <a href="'+r((e=null!=(e=n.domainURL||(null!=a?a.domainURL:a))?e:n.helperMissing,"function"==typeof e?e.call(a,{name:"domainURL",hash:{},data:i}):e))+"/auapi/public?x=1&authorId="+r(this.lambda(null!=(o=null!=a?a.authorObj:a)?o.id:o,a))+'&tab=coauthors" target="_blank" class="view-all-pubs">\n                    <i class="icon-arrow-right"></i>\n                    <span>View all Co-Authors</span>\n                </a>\n            </div>\n'},36:function(a,n,l,i,s,t){var o,e=this.lambda,r=this.escapeExpression,u=n.helperMissing;return'                    <div class="cw-auth-item">\n                        <a href="'+r(e(null!=t[1]?t[1].domainURL:t[1],a))+"/auapi/public?x=1&authorId="+r(e(null!=a?a.id:a,a))+'" target="_blank" class="cw-auth-avatar" data-fulltitle="'+r(e(null!=a?a.fullName:a,a))+'"></a>\n                        <div class="cw-auth-body">\n                            <div class="cw-auth-detail">\n                                <a href="'+r(e(null!=t[1]?t[1].domainURL:t[1],a))+"/auapi/public?x=1&authorId="+r(e(null!=a?a.id:a,a))+'" target="_blank" class="cw-auth-title">'+r(e(null!=a?a.fullName:a,a))+'</a>\n                                <div class="cw-auth-pub">'+r(e(null!=a?a.pubs:a,a))+" Publication"+(null!=(o=(n.ifCond||a&&a.ifCond||u).call(a,null!=a?a.pubs:a,">",1,{name:"ifCond",hash:{},fn:this.program(25,i,0,s,t),inverse:this.noop,data:i}))?o:"")+" in common</div>\n"+(null!=(o=n["if"].call(a,null!=a?a.affiliation:a,{name:"if",hash:{},fn:this.program(37,i,0,s,t),inverse:this.noop,data:i}))?o:"")+'                            </div>\n                            <div class="cw-auth-action cw-follow" data-id="'+r(e(null!=a?a.id:a,a))+'">\n                                <a href="javascript:;">Follow'+(null!=(o=(n.isFollowed||a&&a.isFollowed||u).call(a,null!=a?a.id:a,{name:"isFollowed",hash:{},fn:this.program(15,i,0,s,t),inverse:this.noop,data:i}))?o:"")+"</a>\n                            </div>\n                        </div>\n                    </div>\n"},37:function(a,n,l,i){return'                                    <div class="co-auth-aff">'+this.escapeExpression(this.lambda(null!=a?a.affiliation:a,a))+"</div>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,l,i,s,t){var o,e,r=this.lambda,u=this.escapeExpression,h=n.helperMissing,d="function";return'<div id="auProfNewUI" class="auth-profile-tooltip" style="display: none;">\n    <!-- author basic deatils cotainer -->\n    <div class="author-div">\n        <div class="asce-brand"></div>\n        <div class="author-info">\n            <div class="cw-auth-avatar" data-fulltitle="'+u(r(null!=(o=null!=a?a.authorObj:a)?o.fullName:o,a))+'"></div>\n            <div class="auth-body-wrapper">\n                <h1 class="auth-title">'+u(r(null!=(o=null!=a?a.authorObj:a)?o.title:o,a))+'</h1>\n                <div class="auth-detail">\n                    <div class="auth-affiliation">\n                        <span></span>\n'+(null!=(o=n.each.call(a,null!=a?a.affiliations:a,{name:"each",hash:{},fn:this.program(1,i,0,s,t),inverse:this.noop,data:i}))?o:"")+(null!=(o=(n.ifCond||a&&a.ifCond||h).call(a,null!=a?a.moreAffs:a,">",0,{name:"ifCond",hash:{},fn:this.program(4,i,0,s,t),inverse:this.noop,data:i}))?o:"")+'                    </div>\n                    <div class="auth-discipline">\n                        <span></span>\n'+(null!=(o=n.each.call(a,null!=a?a.keywords:a,{name:"each",hash:{},fn:this.program(6,i,0,s,t),inverse:this.noop,data:i}))?o:"")+(null!=(o=(n.ifCond||a&&a.ifCond||h).call(a,null!=a?a.moreKeywords:a,">",0,{name:"ifCond",hash:{},fn:this.program(9,i,0,s,t),inverse:this.noop,data:i}))?o:"")+'                    </div>\n                </div>\n\n                <!-- profile actions container -->\n                <div class="auth-actions">\n                    <a href="javascript:;" data-id="'+u(r(null!=(o=null!=a?a.authorObj:a)?o.id:o,a))+'" class="ui-blue cw-follow">\n                    <i class="'+(null!=(o=(n.isFollowed||a&&a.isFollowed||h).call(a,null!=(o=null!=a?a.authorObj:a)?o.id:o,{name:"isFollowed",hash:{},fn:this.program(11,i,0,s,t),inverse:this.program(13,i,0,s,t),data:i}))?o:"")+'"></i><span>Follow'+(null!=(o=(n.isFollowed||a&&a.isFollowed||h).call(a,null!=(o=null!=a?a.authorObj:a)?o.id:o,{name:"isFollowed",hash:{},fn:this.program(15,i,0,s,t),inverse:this.noop,data:i}))?o:"")+'</span>\n                    </a>\n                    <a href="'+u((e=null!=(e=n.domainURL||(null!=a?a.domainURL:a))?e:h,typeof e===d?e.call(a,{name:"domainURL",hash:{},data:i}):e))+"/auapi/public?x=1&authorId="+u(r(null!=(o=null!=a?a.authorObj:a)?o.id:o,a))+'" target="_blank">\n                        <i class="icon-user"></i><span>View Profile</span>\n                    </a>\n                    <!--\n                    <a href="https://www.colwiz.com" target="_blank" >\n                        <i class="icon-message"></i><span>Send Message</span>\n                    </a>\n                    -->\n                </div>\n            </div>\n        </div>\n\n        <!-- awards container only visible if it exist -->\n\n        <div class="auth-awards">'+(null!=(o=n["if"].call(a,null!=(o=null!=a?a.authorObj:a)?o.awardsStr:o,{name:"if",hash:{},fn:this.program(17,i,0,s,t),inverse:this.noop,data:i}))?o:"")+(null!=(o=(n.ifCond||a&&a.ifCond||h).call(a,null!=(o=null!=a?a.editors:a)?o.length:o,">",0,{name:"ifCond",hash:{},fn:this.program(19,i,0,s,t),inverse:this.noop,data:i}))?o:"")+'</div>\n\n        <!-- tabs container -->\n        <div class="tab-container">\n            <a data-tab="cw-tab-publications" href="javascript:;" class="selected"><span><b class="t_PubCount">'+u(r(null!=(o=null!=a?a.authorObj:a)?o.pubs:o,a))+"</b> Publication"+(null!=(o=(n.ifCond||a&&a.ifCond||h).call(a,null!=(o=null!=a?a.authorObj:a)?o.pubs:o,">",1,{name:"ifCond",hash:{},fn:this.program(25,i,0,s,t),inverse:this.noop,data:i}))?o:"")+"</span></a>\n"+(null!=(o=n["if"].call(a,null!=a?a.hasAuthors:a,{name:"if",hash:{},fn:this.program(27,i,0,s,t),inverse:this.noop,data:i}))?o:"")+'        </div>\n        <div class="auth-main-container">\n            <div data-tab="cw-tab-publications">\n                <div class="auth-content">\n'+(null!=(o=n.each.call(a,null!=(o=null!=a?a.authorObj:a)?o.Publications:o,{name:"each",hash:{},fn:this.program(29,i,0,s,t),inverse:this.noop,data:i}))?o:"")+'                </div>\n                <a href="'+u((e=null!=(e=n.domainURL||(null!=a?a.domainURL:a))?e:h,typeof e===d?e.call(a,{name:"domainURL",hash:{},data:i}):e))+"/auapi/public?x=1&authorId="+u(r(null!=(o=null!=a?a.authorObj:a)?o.id:o,a))+'&tab=publications" target="_blank" class="view-all-pubs">\n                    <i class="icon-arrow-right"></i>\n                    <span>View all publications</span>\n                </a>\n            </div>\n'+(null!=(o=n["if"].call(a,null!=a?a.hasAuthors:a,{name:"if",hash:{},fn:this.program(35,i,0,s,t),inverse:this.noop,data:i}))?o:"")+'        </div>\n    </div>\n\n    <!-- authors data loading -->\n    <div class="cw-loading-author">\n        <div class="author-info">\n            <div class="cw-auth-avatar-load animated-bg"></div>\n            <div class="auth-body-wrapper">\n                <h1 class="auth-title animated-bg"></h1>\n                <div class="auth-affiliation animated-bg"></div>\n                <div class="auth-discipline animated-bg"></div>\n            </div>\n        </div>\n    </div>\n\n    <div class="tooltip-pointer"></div>\n</div>'},useData:!0,useDepths:!0});