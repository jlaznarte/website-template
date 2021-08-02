$(function() {
  attachTips(false);
});

function attachTipsForPopup(dynamicClass){
  dynamicClass = dynamicClass + '[title!=]'

  attachTipsForItem($(".showTip" + dynamicClass))
  attachTipsForItemT($(".showTipTop" + dynamicClass))
  attachTipsForItemLR($(".showTipLeft" + dynamicClass), "l")
  attachTipsForItemLR($(".showTipRight" + dynamicClass), "r")
}

function attachTipsForItem(item, attr){
  item.tipTip({delay: 300, fadeOut: 100, attribute: attr||"title"})
}

function attachTipsForItemT(item, attr) {
  item.tipTip({delay: 300, fadeOut: 100, attribute: attr||"title", defaultPosition: "top"});
}

function attachTipsForItemLR(item, position, attr){
  var config = {delay: 300, fadeOut: 100, attribute: attr||"title"}
  var isArabic = Config.isRTLLanguage
  if (position == "r") config.defaultPosition = isArabic ? "left" : "right"
  else config.defaultPosition = isArabic ? "right" : "left"
  item.tipTip(config);
}

function attachTips(onlyDynamic){
  attachTipsForPopup(onlyDynamic ?"Dynamic":"");
}
