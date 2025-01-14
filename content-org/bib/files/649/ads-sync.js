<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 <head>
  <title>Request blocked (Privoxy@localhost)</title>
  <meta http-equiv="Content-Style-Type" content="text/css">
  <meta http-equiv="Content-Script-Type" content="text/javascript">
  <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
  <meta name="robots" content="noindex,nofollow">
  <link rel="shortcut icon" href="http://config.privoxy.org/error-favicon.ico" type="image/x-icon">
  <style type="text/css">

/*
 * CSS for Privoxy CGI and script output
 *
 * Id: cgi-style.css,v
 */

/*
 * General rules: Font, Color, Headings, Margins, Links
 */
body,td,th { font-family: arial, helvetica, helv, sans-serif; }
body { background-color: #ffffff; color: #000000; }

h1 { font-size: 140%; margin: 0px; }
h2 { font-size: 120%; margin: 0px; }
h3 { font-size: 110%; margin: 0px; }

p,pre  { margin-left: 15px; }
li { margin: 2px 15px; }
dl { margin: 2px 15px; }

a:link    { color: #0000dd; text-decoration: none; }
a:visited { color: #330099; text-decoration: none; }
a:active  { color: #3333ff; text-decoration: none; }

/*
 * Boxen as Table elements:
 */
td.title   { border: solid black 1px; background-color: #dddddd; }
td.box     { border: solid black 1px; background-color: #eeeeee; }
td.info    { border: solid black 1px; background-color: #ccccff; }
td.warning { border: solid black 1px; background-color: #ffdddd; }

/*
 * Special Table Boxen: for nesting, naked container and for
 * the Status field in CGI Output:
 */
td.wrapbox { border: solid black 1px; padding: 5px; }
td.container { padding: 0px; }
td.status  { border: solid black 1px; background-color: #ff0000; color: #ffffff; font-size: 300%; font-weight: bolder; }

/*
 * Same Boxen as <div>s:
 */
div.title    { border: solid black 1px; background-color: #dddddd; margin: 20px; padding: 20px; }
div.box      { border: solid black 1px; background-color: #eeeeee; margin: 20px; padding: 20px; }
div.info     { border: solid black 1px; background-color: #ccccff; margin: 20px; padding: 20px; }
div.warning  { border: solid black 1px; background-color: #ffdddd; margin: 20px; padding: 20px; }
div.wrapbox  { border: solid black 1px;                            margin: 20px; padding:  5px; }


/*
 * Bold definitions in <dl>s, grey BG for table headings, transparent (no-bordered) table
 */
dt { font-weight: bold; }
th { background-color: #dddddd; }
table.transparent { border-style: none}

/*
 * Special purpose paragraphs: Small for page footers,
 * Important for quoting wrong or dangerous examples,
 * Whiteframed for the toggle?mini=y CGI
 */
p.small { font-size: 10px; margin: 0px; }
p.important { border: solid black 1px; background-color: #ffdddd; font-weight: bold; padding: 2px; }
p.whiteframed { margin: 5px; padding: 5px; border: solid black 1px; text-align: center; background-color: #eeeeee; }

/*
 * Links as buttons:
 */

td.buttons {
  padding: 2px;
}

a.cmd, td.indentbuttons a, td.buttons a {
  white-space: nowrap;
  width: auto;
  padding: 2px;
  background-color: #dddddd;
  color:            #000000;
  text-decoration: none;
  border-top:    1px solid #ffffff;
  border-left:   1px solid #ffffff;
  border-bottom: 1px solid #000000;
  border-right:  1px solid #000000;
}
a.cmd:hover, td.indentbuttons a:hover, td.buttons a:hover {
  background-color: #eeeeee;
}
a.cmd:active, td.indentbuttons a:active, td.buttons a:active {
  border-top:    1px solid #000000;
  border-left:   1px solid #000000;
  border-bottom: 1px solid #ffffff;
  border-right:  1px solid #ffffff;
}


/*
 * Special red emphasis:
 */
em.warning, strong.warning { color: #ff0000 }

/*
 * In show-status we use tables directly behind headlines
 * and for some reason or another the headlines are set to
 * "margin:0" and leave the tables no air to breath.
 *
 * A proper fix would be to replace or remove the "margin:0",
 * but as this affects every cgi page we do it another time
 * and use this workaround until then.
 */
.box table { margin-top: 1em; }

/*
 * Let the URL and pattern input fields scale with the browser
 * width and try to prevent vertical scroll bars if the width
 * is less than 80 characters.
 */
input.url, input.pattern { width: 95%; }
  </style>
  <script type="text/javascript" language="javascript">
  <!--
    /*
     * Is this window or frame too small
     * for the full-blown "blocked" page?
     */
    function isSmallFrame()
    {
       minWidth  = 650;
       minHeight = 330;

       /*
        * Navigator, Mozilla, Opera
        */
       if (window.innerWidth
           && (window.innerWidth >= minWidth)
           && (window.innerHeight >= minHeight))
       {
          return false;
       }

       /*
        * MSIE
        */
       else if (document.body && document.body.clientWidth
                && (document.body.clientWidth >= minWidth)
                && (document.body.clientHeight >= minHeight))
       {
          return false;
       }

       /*
        * Small window or unsupported browser
        */
       return true;
   }
  //-->
  </script>
 </head>
 <body>
  <script type="text/javascript" language="javascript">
  <!--

  if (isSmallFrame())
  {
     document.write('\
   <p class="small" align="center"> \
    Request blocked by <a href="http://config.privoxy.org/" target="_blank">Privoxy</a>: Path matches generic block pattern. \
    <br>See <a href="http://config.privoxy.org/show-url-info?url=www.adshost1.com%2Fads-sync.js%3Fkey%3Df11d7770d28f06c628386d47cb6eb053%26tz%3D2" \
     target="_blank">why this block applies</a> \
    <!-- @if-force-support-start --> \
    or <a href="http://www.adshost1.com/PRIVOXY-FORCE/ads-sync.js?key=f11d7770d28f06c628386d47cb6eb053&amp;tz=2">go \
    <!-- if-force-support-end@ --> \
    to <b>http://www.adshost1.com/ads-sync.js?key=f11d7770d28f06c628386d47cb6eb053&amp;tz=2</b> \
    <!-- @if-force-support-start --> \
    anyway</a>. \
    <!-- if-force-support-end@ --> \
   </p> \
   ');

  }
  else
  {
     document.write('\
  <table cellpadding="20" cellspacing="10" border="0" width="100%">\
    <tr> \
      <td class="status"> \
        BLOCKED \
      </td> \
      <td class="title" width=100%> \
         <h1> \
          This is <a href="http://www.privoxy.org/">Privoxy</a> 3.0.20 on localhost (127.0.0.1), port 8118, \
          enabled \
        </h1> \
      </td> \
    </tr> \
 \
<!-- @if-unstable-start --> \
    <tr> \
      <td class="warning" colspan="2"> \
        <h2>Warning:</h2> \
        <p> \
          <b>Please note that this <font color=red>beta</font> release \
          of the proxy software is not intended for production systems! \
          <br>Use at your own risk. See the <a href="http://www.gnu.org/copyleft/gpl.html">license</a> for details.</b> \
        </p> \
      </td> \
    </tr> \
<!-- if-unstable-end@ --> \
 \
    <tr> \
      <td class="box" colspan="2"> \
        <h2>Request for blocked URL</h2> \
        <p>Your request for <b>http://www.adshost1.com/ads-sync.js?key=f11d7770d28f06c628386d47cb6eb053&amp;tz=2</b> was blocked. \
         <br>Block reason: Path matches generic block pattern. \
         <br><a href="http://config.privoxy.org/show-url-info?url=www.adshost1.com%2Fads-sync.js%3Fkey%3Df11d7770d28f06c628386d47cb6eb053%26tz%3D2" \
         target="_blank">See why this block applies</a> \
<!-- @if-force-support-start --> \
          or <a href="http://www.adshost1.com/PRIVOXY-FORCE/ads-sync.js?key=f11d7770d28f06c628386d47cb6eb053&amp;tz=2">go there anyway</a>. \
<!-- if-force-support-end@ --> \
        </p> \
      </td> \
    </tr> \
 \
    <tr> \
      <td class="box" colspan="2"> \
        <h2>More Privoxy:</h2> \
        <ul><li><a href="http://config.privoxy.org/">Privoxy main page</a></li><li><a href="http://config.privoxy.org/show-status">View &amp; change the current configuration</a></li><li><a href="http://config.privoxy.org/show-version">View the source code version numbers</a></li><li><a href="http://config.privoxy.org/show-request">View the request headers</a></li><li><a href="http://config.privoxy.org/show-url-info">Look up which actions apply to a URL and why</a></li><li><a href="http://config.privoxy.org/user-manual/">Documentation</a></li></ul> \
      </td> \
    </tr> \
 \
    <tr> \
      <td class="info" colspan="2"> \
        <big><b>Support and Service via Sourceforge:</b></big> \
        <p> \
          We value your feedback. To provide you with the best support, \
          we ask that you: \
        </p> \
        <ul> \
          <li> \
            use the <a href="http://sourceforge.net/tracker/?group_id=11118&amp;atid=211118">support forum</a> or (better) the \
            <a href="http://sourceforge.net/mail/?group_id=11118">mailing lists</a> to get help. \
          </li> \
          <li> \
            submit banners and all problems with the actions file only through the \
            <a href="javascript:void(window.open(\'http://www.privoxy.org/actions\',\'Feedback\',\'width=600,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no\').focus());">actions \
            file feedback system</a>. \
          </li> \
          <li> \
            submit bugs only through our <a href="http://sourceforge.net/tracker/?group_id=11118&amp;atid=111118">bug tracker</a>. \
            Make sure that the bug has not yet been submitted. \
          </li> \
          <li> \
            submit feature requests only through our <a href="http://sourceforge.net/tracker/?atid=361118&amp;group_id=11118&amp;func=browse">feature \
            request tracker</a>. \
          </li> \
        </ul> \
      </td> \
    </tr> \
 \
<!--  --> \
 \
  </table> \
     ');
  }
  //-->
  </script>


  <noscript>
   <p class="small" align="center">
    Request blocked by <a href="http://config.privoxy.org/" target="_blank">Privoxy</a>: Path matches generic block pattern.
    <br>See <a href="http://config.privoxy.org/show-url-info?url=www.adshost1.com%2Fads-sync.js%3Fkey%3Df11d7770d28f06c628386d47cb6eb053%26tz%3D2"
     target="_blank">why this block applies</a>
    <!-- @if-force-support-start -->
    or <a href="http://www.adshost1.com/PRIVOXY-FORCE/ads-sync.js?key=f11d7770d28f06c628386d47cb6eb053&amp;tz=2">go
    <!-- if-force-support-end@ -->
    to <b>http://www.adshost1.com/ads-sync.js?key=f11d7770d28f06c628386d47cb6eb053&amp;tz=2</b>
    <!-- @if-force-support-start -->
    anyway</a>.
    <!-- if-force-support-end@ -->
   </p>
  </noscript>

 </body>
</html>
