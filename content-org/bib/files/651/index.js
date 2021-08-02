function preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function openNetworkFolder(url) {
  newWindow = window.open(url,"networkFolder"+Math.ceil(10000*Math.random()),'location=yes,toolbar=no,status=no,scrollbars=yes,resizable=yes,top=0,left=10,width=990,height=700');
  newWindow.focus();
}

function openLiveHelp(link)
{
    window.open(link, 'chat54050872', 'width=520,height=470,menubar=no,scrollbars=0,resizable=1');
}
