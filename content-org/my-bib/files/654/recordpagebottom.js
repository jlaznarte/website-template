
function PDFdownloadFromResultsPage(control){checkMaxDownloadDocsExceeded(control);selCount=getSelectedDocumentCount(control);if(!g_maxDownloadSelectedExceeded&&selCount>0){openDownloadWindow();g_resultsFormTarget='downloadMain';}}
function PDFdownloadFromRecordPage(control){openDownloadWindow();control.target='downloadMain';return true;}
function openDownloadWindow(){if((navigator.appName=="Microsoft Internet Explorer")&&(parseFloat(navigator.appVersion)<4))
{return false;}
var parms='width=800'+',height=560'+',screenX=0'+',screenY=0'+',left=0'+',top=0'+',status=yes,toolbar=no,menubar=no,location=no'+',scrollbars=yes,resizable=yes';win=window.open('','downloadMain',parms);win.focus();return false;}
var g_formSubmitOK=true;var g_MAX_EMAIL_REF_COUNT;var g_MAX_PRINT_REF_COUNT;var g_MAX_EXPORT_REF_COUNT;var allowed=true;function ValidateCheckBoxes(obj){g_formSubmitOK=true;var control=obj.form.selectedEIDs;switch(obj.name){case"printRefButton":var refsChecked=false;refsChecked=assertChecked(control,printAlertMsg);var refsCount=0;if(refsChecked){for(var i=0;i<obj.form.elements.length;++i){var eleControl=obj.form.elements[i];if(eleControl.type=="checkbox"&&eleControl.name=="selectedEIDs"){if(eleControl.checked){++refsCount;}}}
if(refsCount>g_MAX_PRINT_REF_COUNT){g_formSubmitOK=confirm(printMaxRefMsg);}}
else{g_formSubmitOK=false;}
break;case"emailRefButton":var refsChecked=false;refsChecked=assertChecked(control,emailAlertMsg);var refsCount=0;if(refsChecked){for(var i=0;i<obj.form.elements.length;++i){var eleControl=obj.form.elements[i];if(eleControl.type=="checkbox"&&eleControl.name=="selectedEIDs"){if(eleControl.checked){++refsCount;}}}
if(refsCount>g_MAX_EMAIL_REF_COUNT){g_formSubmitOK=confirm(emailMaxRefMsg);}}
else{g_formSubmitOK=false;}
break;case"exportRefButton":var refsChecked=false;refsChecked=assertChecked(control,exportAlertMsg);var refsCount=0;if(refsChecked){for(var i=0;i<obj.form.elements.length;++i){var eleControl=obj.form.elements[i];if(eleControl.type=="checkbox"&&eleControl.name=="selectedEIDs"){if(eleControl.checked){++refsCount;}}}
if(refsCount>g_MAX_EXPORT_REF_COUNT){g_formSubmitOK=confirm(exportMaxRefMsg);}}
else{g_formSubmitOK=false;}
break;}}
function toggleRefChkBoxes(control){for(var i=0;i<control.form.elements.length;++i){var eleControl=control.form.elements[i];if(eleControl.type=="checkbox"&&eleControl.name=="selectedEIDs"){eleControl.checked=control.checked;}}}
function toggleSelectAllChkBox(control){if(control.checked==false){control.form.selectAllCheckBox.checked=false;}
else{var allChecked=true;for(var i=0;i<control.form.elements.length;++i){var eleControl=control.form.elements[i];if(eleControl.type=="checkbox"&&eleControl.name=="selectedEIDs"){if(eleControl.checked==false){allChecked=false;break;}}}
control.form.selectAllCheckBox.checked=allChecked;}}
function searchHistory(link){document.RecordPageForm.clickedLink.value=link;document.RecordPageForm.submit();}
function viewAllReferences(){if(allowed){allowed=false;setTimeout("enableAllowed()",waitTime);return true;}else{return false;}}
function enableAllowed(){allowed=true;}