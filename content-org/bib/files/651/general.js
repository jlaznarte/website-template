/**
 * User: Karmaz
 * Date: 7/10/13
 */
function setDownloadButtonsState() {
  var item = document.getElementById('moreFilesIFrame')
  var iframe = item.contentDocument || item.contentWindow.document
  if ($(iframe).find('.miniFolderItem').length) {
    $('.jsDownloadBox').show()
    $(item).css({borderBottom: '1px solid #e9eaeb', borderTop: '1px solid #e9eaeb'})
  }

}