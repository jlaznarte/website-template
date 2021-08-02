adawLoader = window.adawLoader ? adawLoader : {};
adawLoader.jids = ['20496613','14693518','14678535','13652656','13652435','13652664','13652745','2041210x','14765381','13652125','15298817'];
adawLoader.cids = ['AW-973395369/QUrbCL3zkqIBEKmrk9AD','AW-973395369/QUrbCL3zkqIBEKmrk9AD','AW-973395369/QUrbCL3zkqIBEKmrk9AD','AW-973395369/vd3LCIa1gKIBEKmrk9AD','AW-973395369/vd3LCIa1gKIBEKmrk9AD','AW-973395369/vd3LCIa1gKIBEKmrk9AD','AW-973395369/vd3LCIa1gKIBEKmrk9AD','AW-973395369/vd3LCIa1gKIBEKmrk9AD','AW-973395369/55IdCMT0kqIBEKmrk9AD','AW-973395369/55IdCMT0kqIBEKmrk9AD','AW-973395369/5cExCLu0gKIBEKmrk9AD'];


adawLoader.load = function(){
	journalID = window._satellite && _satellite.getVar('journalCode');
	journalTitle = window._satellite && _satellite.getVar('pubTitle');
	hubID = _satellite.getVar('website')
	
	if(hubID.indexOf('aornjournal')>=0){
		window.gtag && gtag('event', 'conversion', {
			'send_to': 'AW-973395369/x2v4CMnvkqEBEKmrk9AD',
			'value': 1.0,
			'currency': 'USD',
			'aw_remarketing_only': true
		});
	}	
	else{
		for(i=0;i<adawLoader.jids.length; i++){
			if(journalID && journalID.indexOf(adawLoader.jids[i])>=0){
				cid = adawLoader.cids[i];
				window.gtag && gtag('event', 'conversion', {
				  'send_to': cid,
				  'value': 1.0,
				  'currency': 'USD',
				  'aw_remarketing_only': true
				});
			}
		}
	}
}
adawLoader.load()