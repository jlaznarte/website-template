function handle_async_records_chunk(id){var obj,t_obj;var content="";if(navigator.appName.indexOf("Microsoft Internet Explorer")>(-1)){if(id==1){chunks[0]=records_chunk.innerHTML}chunks[id]=eval("tmp_records_chunk_"+id+".innerHTML");eval("tmp_records_chunk_"+id+".innerHTML=''");for(i=0;i<=id;i++){content+=chunks[i]}content='<table width="100%" cellspacing="0" cellpadding="0">'+content+"</table>";records_chunks.innerHTML=content;if((id==chunks.length-1)&&(navigator.platform=="Win32")&&(navigator.appVersion.indexOf("MSIE 6.0")>(-1))){var form=document.forms.summary_records_form;var all_IDs=form.all_summary_IDs;var last_ids=all_IDs[id].value;for(i=id;i>=1;i--){all_IDs[i].value=all_IDs[i-1].value}all_IDs[0].value=last_ids}}else{if(navigator.appVersion.indexOf("Safari")>(-1)){if(id==1){var chunk_data=document.getElementById("chunk_data").innerHTML;chunks[0]=chunk_data}chunks[id]=document.getElementById("chunk_data_"+id).innerHTML;document.getElementById("chunk_data_"+id).style.visibility="hidden";document.getElementById("chunk_data_"+id).style.height=0;document.getElementById("chunk_data_"+id).height=1;document.getElementById("tmp_records_chunk_"+id).innerHTML="";var t_table=document.getElementById("chunk_data_"+id);var t_span=document.getElementById("tmp_records_chunk_"+id);t_table.innerHTML="";t_span.innerHTML="";for(i=0;i<=id;i++){content+=chunks[i]}content='<table width="100%" cellspacing="0" cellpadding="0">'+content+"</table>";document.getElementById("records_chunks").innerHTML=content}else{if(navigator.appName.indexOf("Opera")>(-1)){if(id==1){chunks[0]=records_chunk.innerHTML}chunks[id]=eval("chunk_data_"+id+".innerHTML");eval("chunk_data_"+id+".innerHTML=''");for(i=0;i<=id;i++){content+=chunks[i]}content='<table width="100%" cellspacing="0" cellpadding="0">'+content+"</table>";records_chunks.innerHTML=content}else{var chunk_data=document.getElementById("chunk_data").innerHTML;var chunk_data_id=document.getElementById("chunk_data_"+id).innerHTML;var chunk_data=chunk_data+chunk_data_id;document.getElementById("chunk_data").innerHTML=chunk_data;document.getElementById("chunk_data_"+id).innerHTML="";document.getElementById("records_chunks").style.display="block"}}}}function handle_async_chem_records(B,J,D){for(i=1;i<=10;i++){var G=D+"_chem_rec_id"+i;var C=document.getElementById(G);var A=D+"_node_chem_rec_id"+i;var I=document.getElementById(A);var F=D+"_bond_chem_rec_id"+i;var L=document.getElementById(F);if(C!=null){var K=C.innerHTML;var H="",E="";if(L!=null){H=L.innerHTML}if(I!=null){E=I.innerHTML}C.innerHTML='<object CLASSID="CLSID:DBB2DE32-61F1-4F7F-BEB8-A37F5BC24EE2" width="'+B+'" height="'+J+'"><PARAM name="type" value="application/x-HDS-Windows-Plugin" /><PARAM name="border"	value="0" /><PARAM name="zoom"	value="yes" /><PARAM name="get_from"	value="0" /><PARAM name="get_target"	value="" /><PARAM name="get_to"	value="" /><PARAM name="edit" value="no" /><PARAM name="prog"	value="" /><PARAM name="src" value = "'+K+'"/><PARAM name="width" value= "'+B+'" /><PARAM name="height" value="'+J+'" /><PARAM name="nodes" value="'+E+'" /><PARAM name="bonds" value="'+H+'" /></object>'}}}function handle_async_chem_layout(C,A){var G="layout";var D="layout-tag";var E=document.getElementById(G);var F=document.getElementById(D);if((E!=null)&&(F!=null)){var B=F.innerHTML;E.innerHTML='<object CLASSID="CLSID:DBB2DE32-61F1-4F7F-BEB8-A37F5BC24EE2" width="'+C+'" height="'+A+'"><PARAM name="border"	value="1" /><PARAM name="zoom"	value="yes" /><PARAM name="prog"	value="ccrweb" /><PARAM name="src" value = "'+B+'"/></object>';E.style.visibility="visible"}}function handle_ml_data(H){var I=false;var B=document.getElementById("tmp_ml_count_placeholder");if(B){B.innerHTML=H;var C=document.getElementById("mlUpdate");C.setAttribute("class","contnavtextb")}var E=document.getElementById("tmp_biggie");if(E!=null){document.getElementById("mlUpdate").setAttribute("class","contnavtextb");document.getElementById("mlUpdate").setAttribute("className","contnavtextb")}handle_async_data("tmp_ml_count","ml_count");var J=document.getElementById("tmp_ml_indicator_list");if(J){var A=J.innerHTML.split(";");var F=A.length;if(I){--F}for(var G=0;G<F;++G){var D="ml_indicator_"+A[G];copy_async_data("tmp_update_ml_indicator",D);copy_async_data("tmp_update_ml_indicator","ml_indicator_bottom")}if(I){var D="ml_indicator_"+A[G];handle_async_data("tmp_update_ml_indicator",D)}var L=document.getElementById("add_to_marked_button");var K=document.getElementById("add_to_marked_button_bottom");if(L){L.innerHTML=""}if(K){K.innerHTML=""}}}function handle_async_data(B,C){var D=document.getElementById(B);var A=document.getElementById(C);if((D!=null)&&(A!=null)){A.innerHTML=D.innerHTML;D.innerHTML=""}}function copy_async_data(B,C){var D=document.getElementById(B);var A=document.getElementById(C);if((D!=null)&&(A!=null)){A.innerHTML=D.innerHTML}}function hide_show_analysis(F,I){var B=document.getElementById(F+"_img");var E=document.getElementById(F+"_tr");if(B!=null&&E!=null){if(E.style.display=="none"){B.src=I;E.style.display="";ra_expand(F)}else{var C=document.refine_form;var H=false;for(var A=0;A<C.elements.length;A++){var D=C.elements[A];if(D.tagName=="INPUT"&&D.type=="checkbox"&&D.name=="refineSelection"&&D.checked){var G=D.value;if(F==G.substring(0,F.length)){H=true;break}}}if(H){var J=document.getElementById("openCheckboxes").value;if(confirm(J)){for(var A=0;A<C.elements.length;A++){var D=C.elements[A];if(D.tagName=="INPUT"&&D.type=="checkbox"&&D.name=="refineSelection"&&D.checked){var G=D.value;if(F==G.substring(0,F.length)){D.checked=false}}}B.src=I;E.style.display="none";ra_collapse(F)}}else{B.src=I;E.style.display="none";ra_collapse(F)}}}return false}function daisy_mc_clearall(B){var E="Action is "+B;var D=document.summary_records_form.baseUrl.value;var F=document.summary_records_form.qid.value;var A=document.summary_records_form.SID.value;var C=D+B+"&qid="+F+"&SID="+A;daisy_action_clearall(C);document.summary_records_form.selectedClusterCount.value=0;for(i=0;i<document.summary_records_form.elements.length;i++){if(document.summary_records_form.elements[i].name=="clusterSelection"){document.summary_records_form.elements[i].checked=false}}return false}function invoke_checkboxes_update_action(B,D,A,C){do_all_named_checkboxes(B,D,A);invoke_update_action(B,C);return false}function invoke_update_action(B,D){var A;var C=B.elements[D];if(C&&C!=undefined){}else{C=document.getElementById(D)}if(C&&C!=undefined){A=C.value}else{A=D}A+="&"+get_url_components(B);simple_update_action(A);return false}function handle_async_cr_data(C){if(!C){return }for(var B=0;B<C.length;B++){if(!C[B]){continue}var A=C[B].name;var D=C[B].value;if(!A){continue}var F=document.getElementById(A);if(!F){continue}try{if(A.match(/GRAPH/i)!=null){F.onload=null;F.src=D}else{if(A.match(/VISIBILITY/i)!=null){F.style.visibility=D}else{if(A.match(/DISPLAY/i)!=null){F.style.display=D}else{if(A.match(/URL/i)!=null){F.href=D}else{if(A=="H_INDEX"){F.innerHTML=D}else{F.innerHTML=D}}}}}}catch(E){}}}function highlight_hrow(){if((document.getElementById("H_INDEX"))==null){return }var C=document.getElementById("CRSORT_OPTION");if(C==null){return }var B=C.selectedIndex;if(B!=1){return }var A=parseInt(document.getElementById("H_INDEX").innerHTML);var D=document.getElementById("RECORD_"+A);if(D==null){return }for(j=0;j<D.cells.length;j++){D.cells[j].style.borderBottom="2px #339966 solid"}}function handle_nav_final_counts(A,E){var F=document.getElementById("hitCount.top");var B=document.getElementById("pageCount.top");var H=document.getElementById("hitCount.bottom");var G=document.getElementById("pageCount.bottom");var C=document.getElementById("footer_formatted_count");var I=document.getElementById("sws_label_txt");var D=document.getElementById("swsHidden");if(F){F.innerHTML=A}if(B){B.innerHTML=E}if(H){H.innerHTML=A}if(G){G.innerHTML=E}if(C){C.innerHTML=A}if((typeof A=="string")&&A.match("100,000")){I.innerHTML="";I.innerHTML=D.value}}function handle_diidw_nav_final_counts(A,B){var C=document.getElementById("nav_final-result_count");if(C!=null){C.style.visibility="hidden";A=C.innerHTML}handle_nav_final_counts(A,B)}function async_update_ml(){var C=document.forms.ml_update_form;if(C&&update_markedlist_indicators(C)){formDataHandlerAction("ml_update_form",handle_ml_data)}else{var B=document.getElementById("ml_count");if(B){var A=B.getAttribute("url");if(A!=null){simpleDataHandlerAction(A,handle_ml_data)}}}}function chem_fullrec_data_handler(C,D){var A="fullrec_"+D+"_results";var B=document.getElementById(A);B.innerHTML=C;if(D.match(/cpd/i)!=null){handle_async_chem_records(375,175,"cpd")}else{if(D.match(/rxn/i)!=null){handle_async_chem_records(600,175,"rxn")}}};