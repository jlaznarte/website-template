

function addFavoriteFile(id, before, title, link, previewUrl, iconUrlS, iconUrlB, publ, publUrl){
  addFileToPreview('Favorites', id, before, title, link, previewUrl, iconUrlS, iconUrlB, publ, publUrl);
}

function addFileToPreview(type, id, before, title, link, previewUrl, iconUrlS, iconUrlB, publ, publUrl){
  var table = type + 'Table';
  var sc = 'dp' + type.charAt(0).toLowerCase() + 'f';
  var rowHtml =
    '<tr id="' + sc + id + '" class="ffrow blinkbg" align="center">' +
      '<td width="55" height="60">' +
        (previewUrl ?
        '<div style="width:55px; border:solid 1px #cccccc;position:relative;background:#FFFFFF;padding:1px;text-align:left">' +
          '<a href="' + link + '"' + ' title="' + title + '"' + ' style="background:url(' + previewUrl + ') #FFFFFF no-repeat center center;height:44px;width:100%;display:block;">' +
            '<img src="' + iconUrlS + '" width="16" alt="' + title + '" height="16" class="absmid" vspace="1" hspace="1" />' +
          '</a>' +
        '</div>'
        :
        '<a class="gaClick" data-element="v1" href="' + link + ' title="' + title + '">' +
          '<img src="' + iconUrlB + '" width="32" alt="' + title + '" height="32" vspace="4" class="absmid" />' +
        '</a>'
        ) +
      '</td>' +

      '<td width="10">&nbsp;</td>' +

      '<td class="alignLeft">' +
          '<div class="xsmall" align="right" style="margin-right:5px">' +
            '<a class="lgreylink gaClick" data-element="v4" href="javascript:delete' + type + 'File(' + id + ');">remove x</a>' +
          '</div>' +
          '<div class="hideLong" style="width:190px;">' +
              '<b><a href="' + link + '" title="' + title + '" class="bluelink gaClick" data-element="v2">' + title + '</a></b>' +
          '</div>'+
          '<div style="margin-top:3px" class="small">' +
            (publ ?
            '<span class="lgrey">by</span>&nbsp;' +
              (publUrl ? '<a href="' + publUrl + '" class="greylink1 gaClick" data-element="v3">' : '') +
                  publ +
              (publUrl ? '</a>' : '')
            :
            ''
            ) +
          '</div>' +
      '</td>' +

    '</tr>';

    var rowDivHtml = '<tr class="ffdelim"><td width="100%" colspan="3"><div style="border-bottom:dotted 1px #9E9E9E"></div></td></tr>';
    var $table = $('#' + table);
    var $body = $table.find('tbody');
    var $rows = $table.find('tbody > tr');
    if($rows.length == 0){
      $body.eq(0).append(rowHtml);
    }else{
      if(before){
        $rows.eq(0).before(rowHtml + rowDivHtml);
      }else{
        $body.eq(0).append(rowDivHtml + rowHtml);
      }
    }
}

function deleteFileFromPreview(table, sc, id){
  var $table = $('#' + table + ' > tbody');
  var $elem = $table.find('#' + sc + id);
  if($elem.prev() && $elem.prev().is('.ffdelim')){
    $elem.prev().remove();
  }else if($elem.next() && $elem.next().is('.ffdelim')){
    $elem.next().remove();
  }
  $elem.remove();
}


