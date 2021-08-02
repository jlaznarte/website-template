/*
 2013-10-30 12:12:00 - by EC / DIGIT FPFIS
 */
var smk_doc_lang = "en";

(function(win, doc) {
	if (!win.console)
		win.console = {};
	if (!win.console.log)
		win.console.log = function() {
		};
	var _aux = {
		getDocLang: function() {
			var off_lang_spec = new RegExp(/(en|fr|de|es|hr|nl|it|cs|da|et|el|lv|lt|hu|bg|mt|pl|pt|ro|sk|sl|fi|sv)/);
			var root = doc.getElementsByTagName('html')[0];
			var lang = root.getAttribute("lang") || false;

			if (lang && String(lang).length === 2) {
				lang = lang.toLowerCase();
				if (lang.match(off_lang_spec)) {
					return lang;
				}
			}

			var metaTags = doc.getElementsByTagName("meta");
			for (var i = 0; i < metaTags.length; i++) {
				if (metaTags[i].httpEquiv === "Content-Language" && String(metaTags[i].content).length === 2) {
					lang = String(metaTags[i].content).toLowerCase();
					if (lang.match(off_lang_spec)) {
						return lang;
					}
				}
			}

			var current_url = String(win.location).toLowerCase();
			var li = current_url.match(/_(en|fr|de|es|hr|nl|it|cs|da|et|el|lv|lt|hu|bg|mt|pl|pt|ro|sk|sl|fi|sv)\./);
			if (li && typeof li[1] !== "undefined") {
				return String(li[1]);
			}
			return "en";
		},
		treateSnippet: function(jsString) { // return a json string
			jsString = jsString.replace(/\r|\n|\t/g, '');
			jsString = jsString.replace(/<+!+-[^\{]*/g, '');
			jsString = jsString.replace(/\}\/*[^>]+>/g, '}');
			jsString = jsString.replace(/^ */g, '');
			jsString = jsString.replace(/ *$/g, '');
			return jsString;
		},
		inArray: function(needle, haystack) {
			var i = -1;
			for (var key in haystack) {
				i++;
				if (haystack[key] === needle) {
					return i;
				}
			}
			return false;
		},
		stringToJson: function(text, reviver) {
			var j;
			var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

			function walk(holder, key) {
				var k, v, value = holder[key];
				if (value && typeof value === 'object') {
					for (k in value) {
						if (Object.prototype.hasOwnProperty.call(value, k)) {
							v = walk(value, k);
							if (v !== undefined) {
								value[k] = v;
							} else {
								delete value[k];
							}
						}
					}
				}
				return reviver.call(holder, key, value);
			}

			text = String(text);
			cx.lastIndex = 0;
			if (cx.test(text)) {
				text = text.replace(cx, function(a) {
					return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
				});
			}

			if (/^[\],:{}\s]*$/
				.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
				.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
				.replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
				j = eval('(' + text + ')'); // now the eval function is "safe"
				return typeof reviver === 'function'
					? walk({'': j}, '')
					: j;
			}
			throw new SyntaxError('JSON.parse');
		}
	};
	var _smk = {
		processHTML: function() {
			var indi_arr = ["twitter_user_timeline", "twitter_list_timeline", "twitter_search", "gplus_latest_posts"];

			var len = indi_arr.length;
			for (var i = 0; i < len; ++i) {
				var el = doc.getElementById("smk-" + indi_arr[i]);
				if (el) {
					_smk.processElement(el, indi_arr[i]);
				}
				var stop = false;
				for (var ii = 0; ii <= 20; ii++) {
					el = doc.getElementById("smk-" + indi_arr[i] + "-" + ii);
					if (el) {
						stop = false;
						_smk.processElement(el, indi_arr[i]);
					} else {
						if (stop) {
							break;
						}
						stop = true;
					}
				}
			}
		},
		processElement: function(el, functionName) {
			// check if element has already been processed
			if (el.getAttribute("class") && el.className.indexOf("smk-done") !== -1) {
				return false;
			}

			var el_inner = el.innerHTML;
			el_inner = _aux.treateSnippet(el_inner);
			var json_params = {};
			try {
				json_params = _aux.stringToJson(el_inner);
			} catch (e) {
				//if json_params is corrupt,
				el.innerHTML += "<!--ERROR: this JSON is corrupt.-->";
				return false;
			}
			restUrl = location.protocol + "//webtools.ec.europa.eu/social-media-kit/";

			// twitter_user_timeline
			if (functionName === "twitter_user_timeline") {
				json_params.screen_name = json_params.screen_name || "EU_Commission";
				json_params.count = json_params.count || 3;
				json_params.include_rts = json_params.include_rts || false;
				json_params.display_user_pic = (typeof json_params.display_user_pic === "undefined") ? true : json_params.display_user_pic;
				json_params.display_user = (typeof json_params.display_user === "undefined") ? true : json_params.display_user;
				json_params.rts_display_original = json_params.rts_display_original || false;
				json_params.exclude_replies = (typeof json_params.exclude_replies === "undefined") ? true : json_params.exclude_replies;
				json_params.callback = "smkCallback.twitter.user_timeline";
				try {
					restUrl += "twitter/user_timeline.php?screen_name=" + json_params.screen_name
						+ "&exclude_replies=" + json_params.exclude_replies
						+ "&include_rts=" + json_params.include_rts
						+ "&display_user_pic=" + json_params.display_user_pic
						+ "&display_user=" + json_params.display_user
						+ "&rts_display_original=" + json_params.rts_display_original
						+ "&count=" + json_params.count
						+ "&elid=" + el.id
						+ "&lang=" + win.smk_doc_lang
						+ "&callback=" + json_params.callback
						+ "&url=" + encodeURI(location.href).replace(/#.*/gi, '');
					if (json_params.auto_expand_photo) {
						restUrl += "&auto_expand_photo=" + json_params.auto_expand_photo;
					}
				} catch (e) {
					//if a json_params isn't found
				}
				// twitter_list_timeline
			} else if (functionName === "twitter_list_timeline") {
				json_params.owner_screen_name = json_params.owner_screen_name || "EU_Commission";
				json_params.count = json_params.count || 3;
				json_params.include_rts = json_params.include_rts || false;
				json_params.display_user_pic = (typeof json_params.display_user_pic === "undefined") ? true : json_params.display_user_pic;
				json_params.display_user = (typeof json_params.display_user === "undefined") ? true : json_params.display_user;
				json_params.rts_display_original = json_params.rts_display_original || false;
				json_params.slug = json_params.slug || "eu-commissioners";
				json_params.callback = "smkCallback.twitter.list_timeline";
				try {
					restUrl += "twitter/list_timeline.php?owner_screen_name=" + json_params.owner_screen_name
						+ "&slug=" + json_params.slug
						+ "&include_rts=" + json_params.include_rts
						+ "&display_user_pic=" + json_params.display_user_pic
						+ "&display_user=" + json_params.display_user
						+ "&rts_display_original=" + json_params.rts_display_original
						+ "&count=" + json_params.count
						+ "&elid=" + el.id
						+ "&lang=" + win.smk_doc_lang
						+ "&callback=" + json_params.callback
						+ "&url=" + encodeURI(location.href).replace(/#.*/gi, '');
					if (json_params.auto_expand_photo) {
						restUrl += "&auto_expand_photo=" + json_params.auto_expand_photo;
					}
				} catch (e) {
					//if a json_params isn't found
				}
				// twitter_search
			} else if (functionName === "twitter_search") {
				json_params.count = json_params.count || 3;
				json_params.incl_hashtags = json_params.incl_hashtags || false;
				json_params.excl_hashtags = json_params.excl_hashtags || false;
				json_params.incl_profiles = json_params.incl_profiles || false;
				json_params.excl_profiles = json_params.excl_profiles || false;
				json_params.restr_lang_to = json_params.restr_lang_to || false;
				json_params.tweet_about_btn = json_params.tweet_about_btn || false;
				json_params.result_type = json_params.result_type || false;
				json_params.from = json_params.from || false;
				json_params.display_user_pic = (typeof json_params.display_user_pic === "undefined") ? true : json_params.display_user_pic;
				json_params.display_user = (typeof json_params.display_user === "undefined") ? true : json_params.display_user;
				json_params.rts_display_original = json_params.rts_display_original || false;
				json_params.callback = "smkCallback.twitter.search";
				try {
					restUrl += "twitter/search.php?"
						+ "&display_user_pic=" + json_params.display_user_pic
						+ "&display_user=" + json_params.display_user
						+ "&count=" + json_params.count
						+ "&elid=" + el.id
						+ "&lang=" + win.smk_doc_lang
						+ "&callback=" + json_params.callback
						+ "&url=" + encodeURI(location.href).replace(/#.*/gi, '');
					if (json_params.incl_hashtags) {
						restUrl += "&incl_hashtags=" + json_params.incl_hashtags;
					}
					if (json_params.excl_hashtags) {
						restUrl += "&excl_hashtags=" + json_params.excl_hashtags;
					}
					if (json_params.incl_profiles) {
						restUrl += "&incl_profiles=" + json_params.incl_profiles;
					}
					if (json_params.excl_profiles) {
						restUrl += "&excl_profiles=" + json_params.excl_profiles;
					}
					if (json_params.restr_lang_to) {
						restUrl += "&restr_lang_to=" + json_params.restr_lang_to;
					}
					if (json_params.result_type) {
						restUrl += "&result_type=" + json_params.result_type;
					}
					if (json_params.from) {
						restUrl += "&from=" + json_params.from;
					}
					if (json_params.tweet_about_btn) {
						restUrl += "&tweet_about_btn=" + json_params.tweet_about_btn;
					}
					if (json_params.rts_display_original) {
						restUrl += "&rts_display_original=" + json_params.rts_display_original;
					}
				} catch (e) {
					//if a json_params isn't found
				}
				// gplus_latest_posts
			} else if (functionName === "gplus_latest_posts") {
				json_params.userId = json_params.userId || "EuropeanCommission";
				json_params.maxResults = json_params.maxResults || 3;
				json_params.callback = "smkCallback.gplus.latest_posts";
				try {
					restUrl += "gplus/latest_posts.php?userId=" + json_params.userId + "&maxResults=" + json_params.maxResults + "&elid=" + el.id + "&lang=" + win.smk_doc_lang + "&callback=" + json_params.callback;
				} catch (e) {
					//if a json_params isn't found
				}
			}

			var head = doc.getElementsByTagName('head')[0];
			var script = doc.createElement('script');
			script.src = restUrl;
			script.type = "text/javascript";
			head.appendChild(script);
		},
		init: function() {
			win.smk_doc_lang = _aux.getDocLang() || "en";

			if (doc.addEventListener) {
				doc.addEventListener("DOMContentLoaded", _smk.processHTML, false);
			} else if (doc.attachEvent) {
				doc.attachEvent("onreadystatechange", function() {
					if (/loaded|complete/.test(doc.readyState))
						_smk.processHTML();
				});
			}

			var head = doc.getElementsByTagName('head')[0];
			var link = doc.createElement('link');
			link.href = location.protocol + "//ec.europa.eu/wel/social-media-kit/styles/styles.css";
			link.type = "text/css";
			link.rel = "stylesheet";
			head.appendChild(link);
		},
		// RENDERERS
		twitter: {
			renderTweets: function(json_tweets, meta) {
				var el_html = '<ul class="smk-tweets">';
				for (var tweet_id in json_tweets) {
					el_html += '<li>';
					if (json_tweets[tweet_id].display_user) {
						el_html += '<p class="user">';
						el_html += '<span><a target="_blank" href="https://twitter.com/' + json_tweets[tweet_id].user_screen_name + '">';
						if (json_tweets[tweet_id].display_user_pic) {
							el_html += '<img alt="" class="profile-pic" src="' + json_tweets[tweet_id].user_pic + '">';
						}
						el_html += json_tweets[tweet_id].user_name + '</a>';
						el_html += '<span><a target="_blank" href="https://twitter.com/' + json_tweets[tweet_id].user_screen_name + '"> @' + json_tweets[tweet_id].user_screen_name + '</a></span>';
						el_html += '</span></p>';
					}
					el_html += '<p>' + json_tweets[tweet_id].text;
					if (json_tweets[tweet_id].retweeted) {
						el_html += '<span class="smk-twitter-retweeted">' + json_tweets[tweet_id].retweeted + '</span>';
					}
					el_html += '</p>';
					// expanded photos
					if (typeof json_tweets[tweet_id].auto_expand_photo !== "undefined" && json_tweets[tweet_id].auto_expand_photo === true) {
						el_html += '<p class="smk-twitter-expanded-photos">';
						for (var photo_id in json_tweets[tweet_id].expand_photos) {
							el_html += '<a target="_blank" href="' + json_tweets[tweet_id].expand_photos[photo_id].url + '"><img title="' + meta.view_on_twitter + '"src="' + json_tweets[tweet_id].expand_photos[photo_id].src + '"></a>';
						}
						el_html += '</p>';
					}
					el_html += '<p class="smk-twitter-actions">';
					el_html += '<span class="ago">' + json_tweets[tweet_id].ago + '</span>';
					if (typeof meta.favourite !== "undefined") {
						el_html += '<a target="_blank" title="' + meta.favourite + '" class="favourite" href="https://twitter.com/intent/favorite?tweet_id=' + tweet_id + '"></a>';
					}
					if (typeof meta.reply !== "undefined") {
						el_html += '<a target="_blank" title="' + meta.reply + '" class="reply" href="https://twitter.com/intent/tweet?in_reply_to=' + tweet_id + '"></a>';
					}
					if (typeof meta.retweet !== "undefined") {
						el_html += '<a target="_blank" title="' + meta.retweet + '" class="retweet" href="https://twitter.com/intent/retweet?tweet_id=' + tweet_id + '"></a>';
					}
					el_html += '</p><div style="clear: both"></div>';
					el_html += '</li>';
				}
				el_html += '</ul>';
				if (typeof meta.tweet_about_btn !== "undefined") {
					el_html += '<div class="smk-tweets tweet_about"><a target="_blank" href="' + meta.tweet_about_link + '">' + meta.tweet_about_btn + '</a></div>';
				}
				return el_html;
			}
		},
		gplus: {
			renderLatestPosts: function(json_posts) {
				var el_html = "";
				for (var post_id in json_posts) {
					el_html += '<li><p><a target="_blank" href="' + json_posts[post_id].url + '">' + json_posts[post_id].title + "</a>";
					el_html += '<p class="smk-twitter-actions">';
					el_html += '<span class="ago">' + json_posts[post_id].ago + '</span></p>';
					el_html += '</p></li>';
				}
				return el_html;
			}
		},
		// CALLBACKS
		callback: {
			twitter: {
				user_timeline: function(elid, json_tweets, meta) {
					var el_html = _smk.twitter.renderTweets(json_tweets, meta);
					var el = doc.getElementById(elid);
					el.innerHTML = el_html;
					if (el.getAttribute("class")) {
						el.className = el.className + " ";
					}
					el.className = el.className + "smk-done";
				},
				list_timeline: function(elid, json_tweets, meta) {
					var el_html = _smk.twitter.renderTweets(json_tweets, meta);
					var el = doc.getElementById(elid);
					el.innerHTML = el_html;
					if (el.getAttribute("class")) {
						el.className = el.className + " ";
					}
					el.className = el.className + "smk-done";
				},
				search: function(elid, json_tweets, meta) {
					var el_html = _smk.twitter.renderTweets(json_tweets, meta);
					var el = doc.getElementById(elid);
					el.innerHTML = el_html;
					if (el.getAttribute("class")) {
						el.className = el.className + " ";
					}
					el.className = el.className + "smk-done";
				}
			},
			gplus: {
				latest_posts: function(elid, json_posts) {
					var el_html = '<ul class="smk-posts">' + _smk.gplus.renderLatestPosts(json_posts) + "</ul>";
					var el = doc.getElementById(elid);
					el.innerHTML = el_html;
				}
			}
		}
	};
	_smk.init();

	win.smkCallback = _smk.callback;
})(window, document);