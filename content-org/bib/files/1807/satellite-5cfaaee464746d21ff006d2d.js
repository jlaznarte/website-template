
fbqPub = {}
fbqPub.pubTitle =  _satellite.getVar('pubTitle');
fbqPub.journalCode =  _satellite.getVar('jouralCode');
fbqPub.pubDOI = _satellite.getVar('pubDoi');
window.fbq && fbq('track', 'AccessDenied', fbqPub);