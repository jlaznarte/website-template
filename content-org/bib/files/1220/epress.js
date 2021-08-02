(function (document, window, undefined) {
    if (window._utsLib) return;

    var UtsLib = function (opts) {
        var self = this;
        this.options = opts;
        this.domReady();
    };

    UtsLib.prototype = {

        onReady : function () {
            if (this._isReady) return;

            this._isReady = true;

            this.initialize();
        },

        createElement : function (el, opts) {
            var el = document.createElement(el), opts = opts || {}, i, v;
            for (i in opts) {
                if (opts.hasOwnProperty(i)) {
                    if (typeof(opts[i]) === 'object') {
                        for (v in opts[i]) {
                            if (opts[i].hasOwnProperty(v)) {
                                el[i][v] = opts[i][v];
                            }
                        }
                    }
                    else {
                        el[i] = opts[i];
                    }
                }
            }
            return el;
        },

        domReady : function () {
            if (this._readyBound) return;

            this._readyBound = true;

            var self = this;

            // Mozilla, Opera and webkit nightlies currently support this event
            if ( document.addEventListener ) {
                // Use the handy event callback
                document.addEventListener( "DOMContentLoaded", function (){
                    document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
                    self.onReady();
                }, false );

            // If IE event model is used
            } else if ( document.attachEvent ) {
                // ensure firing before onload,
                // maybe late but safe also for iframes
                document.attachEvent("onreadystatechange", function (){
                    if ( document.readyState === "complete" ) {
                        document.detachEvent( "onreadystatechange", arguments.callee );
                        self.onReady();
                    }
                });

                // If IE and not an iframe
                // continually check to see if the document is ready
                if ( document.documentElement.doScroll && window == window.top ) (function(){
                    if ( self._isReady ) return;

                    try {
                        // If IE is used, use the trick by Diego Perini
                        // http://javascript.nwbox.com/IEContentLoaded/
                        document.documentElement.doScroll("left");
                    } catch( error ) {
                        setTimeout( arguments.callee, 0 );
                        return;
                    }

                    // and execute any waiting functions
                    self.onReady();
                })();
            }

            // A fallback to window.onload, that will always work
            if (window.addEventListener) {
                window.addEventListener('load', function () {
                    self._isLoaded = true;
                    self.onReady();
                }, false);
            }
            else if (window.attachEvent) {
                window.attachEvent('onload', function () {
                    self._isLoaded = true;
                    self.onReady();
                });
            }
        },

        initialize : function () {
            //this._createNavBar();
            this._userForm();
        },

        _createNavBar: function () {
            if (!document.body) return;

            document.body.className = "with-navbar";

            // generate navbar
            var navbar = this.createElement('div', {className: 'navbar'}),
            navbarInner = this.createElement('div', {className: 'navbar-inner'}),
            navbarMenu = this.createElement('ul', {className: 'navbar-nav'});
            navbarInner.appendChild(this.createElement('a', {
                className: 'navbar-brand',
                href: this.options.brand.href,
                title: this.options.brand.title,
                innerHTML: this.options.brand.title
            }));
            for (var i in this.options.apps) {
                var app = this.options.apps[i],
                li = this.createElement('li');
                if (app.isActive()) {
                    li.className = 'active';
                }
                li.appendChild(this.createElement('a', {
                    href: app.href,
                    title: app.title,
                    innerHTML: app.title
                }));
                navbarMenu.appendChild(li);
            }
            navbarInner.appendChild(navbarMenu);
            navbar.appendChild(navbarInner);
            document.body.appendChild(navbar);
        },

        _userForm: function () {
            var changeWatcher = {
                timeout: null,
                hasUsername: true,
                hasPassword: true,
                username: document.getElementById("sidebar-username"),
                password: document.getElementById("sidebar-password"),
                init: function () {
                    if(this.username && this.password) {
                        this.username.onfocus  = this.watchForChange;
                        this.username.onblur   = this.cancelWatchForChange;
                        this.username.onchange = this.changed;
                   
                        this.password.onfocus  = this.watchForChange;
                        this.password.onblur   = this.cancelWatchForChange;
                        this.password.onchange = this.changed;
                        this.changed();                    
                    } else {
                        this.hasUsername = false;
                        this.hasPassword = false;
                    }
                },
                watchForChange: function() {
                    changeWatcher.changed();
                    changeWatcher.timeout = setTimeout(function() {
                         changeWatcher.watchForChange();
                    }, 200);
                },
                cancelWatchForChange: function() {
                    clearTimeout(changeWatcher.timeout);
                    changeWatcher.timeout = null;
                },
                changed: function () {
                    changeWatcher.hasUsername = changeWatcher._changedEl(changeWatcher.username, changeWatcher.hasUsername);
                    changeWatcher.hasPassword = changeWatcher._changedEl(changeWatcher.password, changeWatcher.hasPassword);
                },
                _changedEl: function(el, hasValue) {
                    var newVal = Boolean(el.value);
                    if (newVal && !hasValue) {
                        el.className = 'textField';
                    }
                    if (!newVal && hasValue) {
                        el.className = 'textField empty';
                    }
                    return newVal;
                }
            }
            changeWatcher.init();
        }
    };


    return window._utsLib = new UtsLib({
        apps: {
            journals: {
                title : 'Journals',
                href  : 'http://epress-dev.lib.uts.edu.au/journals',
                isActive: function () {
                    return /.*\.lib\.uts\.edu\.au\/journals.*/.test(document.URL);
                }
            },
            studentJournals: {
                title : 'Student Journals',
                href  : 'http://epress-dev.lib.uts.edu.au/student-journals',
                isActive: function () {
                    return /.*\.lib\.uts\.edu\.au\/student-journals.*/.test(document.URL);
                }
            },
            conferences: {
                title : 'Conferences',
                href  : 'http://epress-dev.lib.uts.edu.au/conferences',
                isActive: function () {
                    return /.*\.lib\.uts\.edu\.au\/conferences.*/.test(document.URL);
                }
            }
        },
        brand: {
            href: 'http://epress-dev.lib.uts.edu.au',
            title: 'UTS ePRESS'
        }
    });

})(document, window);