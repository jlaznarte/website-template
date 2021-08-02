
function flash_contents(file,width,height){
		document.writeln("<OBJECT classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0' WIDTH='"+width+"' HEIGHT='"+height+"' id='contents' ALIGN=''>");
		document.writeln("<PARAM NAME=movie value='../css/%22%2Bfile%2B%22' />");
		document.writeln("<PARAM NAME=quality VALUE=high>");
		document.writeln("<PARAM NAME=bgcolor VALUE=#FFFFFF>");
		document.writeln("<PARAM NAME=wmode VALUE=transparent> ");
		document.writeln("<embed src='../css/%22%2Bfile%2B%22' quality='high' bgcolor='#FFFFFF' width='"+width+"' height='"+height+"' name='contents' align='middle' allowScriptAccess='sameDomain' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />");
		document.writeln("</OBJECT>");
}

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

	self.onError=null;
	currentX = currentY = 0;
	whichIt = null;
	lastScrollX = 0; lastScrollY = 0;
	NS = (document.layers) ? 1 : 0;
	IE = (document.all) ? 1: 0;
	var limitY;

	<!-- STALKER CODE -->
	function heartBeat() {
		if(IE) {
			diffY = document.body.scrollTop; 
			diffX = 0;
		}
		if(NS) {diffY = self.pageYOffset; diffX = self.pageXOffset;}
		if(diffY > limitY) diffY=limitY;
		if(diffY != lastScrollY) {
			//alert("aaaaaaaaa");
			percent = .1 * (diffY - lastScrollY);
			if(percent > 0) {
				percent = Math.ceil(percent); //위로
			} else {
				percent = Math.floor(percent); //아래로
			}
			if(IE) document.all.floater.style.pixelTop += percent;
			if(NS) document.floater.top += percent;
			lastScrollY = lastScrollY + percent;
		}
		if(diffX != lastScrollX) {
						//alert("bbbbbbbbbb");
			percent = .1 * (diffX - lastScrollX);
			if(percent > 0) {
				percent = Math.ceil(percent);
			} else {
				percent = Math.floor(percent);
			}
			if(IE) document.all.floater.style.pixelLeft += percent;
			if(NS) document.floater.top += percent;
			lastScrollY = lastScrollY + percent;
		}
	}
	if(NS || IE) action = window.setInterval("heartBeat()",1);
	window.onload = function() {
//		limitY = document.body.scrollHeight - parseInt(document.all.floater.style.height) - parseInt(document.all.floater.style.top)-530;
		limitY = document.body.scrollHeight;
		//alert(limitY);
	}

//퀵박스가 화면을 벗어나 계속 내려가는 현상오류를 잡으려던 소스_081111
//var StartPos = 230; //슬라이드 메뉴 시작위치
//var X = 909; //화면 왼쪽으로부터 떨어지는 위치
//var Y = 163; //페이지헤더부분의 여백(화면 위쪽으로부터 떨어지는 위치)
//var slideY = 180; //슬라이드시 브라우저 상단과 띄워지는 거리
//var StopPoint = document.body.scrollHeight - 600; //슬라이드가 멈추는 위치
//// document.body.scrollHeight : 전체스크롤 길이
//var slideWatch;
//var slideSpeed = 100; //슬라이드 속도
//var slideSpeed2 = 20;
//function heartBeat() {
//	var stmnStartPoint, stmnEndPoint, stmnRefreshTimer;
//	stmnStartPoint = parseInt(floater.style.top, 10);
//	stmnEndPoint = document.body.scrollTop + slideY;
//	if (stmnEndPoint < Y) stmnEndPoint = Y;
//		stmnRefreshTimer = slideSpeed;
//	if (stmnStartPoint != stmnEndPoint) {
//		stmnScrollAmount = Math.ceil(Math.abs(stmnEndPoint - stmnStartPoint)/15);
//		floater.style.top = parseInt(floater.style.top, 10) + ((stmnEndPoint<stmnStartPoint) ? -stmnScrollAmount : stmnScrollAmount);
//		if(patseInt(floater.style.top, 10)>StopPoint) floater.style.top = StopPoint;
//		stmnRefreshTimer = slideSpeed2;
//	}
//	slideWatch = setTimeout("heartBeat();", stmnRefreshTimer);
//}
//heartBeat();

