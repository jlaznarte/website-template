﻿(function(win,doc){
	var _b = {
		// --------------------------------
		// TRANSLATIONS
		// --------------------------------
		label:{
			"uses_cookies": {
				"en":"This site uses cookies to offer you a better browsing experience",
				"bg":"Този сайт използва бисквитки, за да ви улесни при търсене",
				"es":"Este sitio web utiliza cookies para mejorar su experiencia de navegación",
				"cs":"Tyto stránky využívají v zájmu kvalitnějších služeb cookies",
				"da":"Dette site anvender cookies for at gøre din brugeroplevelse bedre",
				"de":"Dieses Portal verwendet Cookies zur Optimierung der Browserfunktion",
				"el":"Αυτός ο ιστότοπος χρησιμοποιεί cookies για καλύτερη φυλλομέτρηση",
				"et":"Parema sirvimise võimaldamiseks kasutatakse veebisaidil küpsiseid",
				"fi":"Tällä sivustolla käytetään evästeitä sivujen selaamisen helpottamiseksi",
				"fr":"Ce site utilise des cookies pour améliorer votre navigation",
				"ga":"Úsáidtear fianáin ar an suíomh seo chun gur fearr a bheidh do chuid brabhsála",
				"hr":"Ovo web-mjesto koristi kolačiće radi boljeg pregledavanja sadržaja",
				"hu":"Ez a webhely a böngészés tökéletesítése érdekében cookie-kat használ",
				"is":"Síðan notast við vafrakökur til að auðvelda þér að vafra um síðuna",
				"it":"Questo sito utilizza i cookie per migliorare l'esplorazione",
				"lt":"Kad naršymas būtų paprastesnis, šioje svetainėje naudojami slapukai",
				"lv":"Lai jums internetā būtu ērtāk atrast vajadzīgo, šajā vietnē ir izmantotas sīkdatnes",
				"mt":"Dan is-sit juża l-cookies biex joffrilek esperjenza aħjar",
				"no":"Dette nettstedet bruker informasjonskapsler for å gi deg en bedre nettleseropplevelse",
				"nl":"We gebruiken cookies op deze site voor een vlottere surf-ervaring",
				"pl":"W celu zapewnienia wyższej jakości usług, ta strona używa cookies",
				"pt":"Este sítio utiliza cookies (testemunhos de conexão) para facilitar a navegação",
				"ro":"Pentru a vă ajuta să navigaţi cât mai bine, site-ul utilizează cookie-uri",
				"sk":"Táto lokalita používa súbory cookies na zlepšenie funkcií prehliadania",
				"sl":"Uporabnikom želimo omogočiti učinkovito brskanje, zato ta spletna stran uporablja piškotke.",
				"sv":"På den här webbplatsen använder vi kakor för att göra det lättare för dig att söka information"
			},
			"accept": {
				"en":"I accept cookies",
				"bg":"Приемам бисквитки",
				"es":"Acepto las cookies",
				"cs":"Povolit cookies",
				"da":"Jeg accepterer cookies",
				"de":"Cookies akzeptieren",
				"el":"Αποδέχομαι τα cookies",
				"et":"Ma nõustun küpsistega",
				"fi":"Sallin evästeet",
				"fr":"J'accepte les cookies",
				"ga":"Glacaim le fianáin",
				"hr":"Prihvati kolačiće",
				"hu":"Elfogadom a cookie-kat",
				"is":"Ég samþykki vafrakökur",
				"it":"Accetto i cookie",
				"lt":"Priimu slapukus",
				"lv":"Es pieņemu sīkdatnes",
				"mt":"Naċċetta l-cookies",
				"nl":"Ja, ik accepteer cookies",
				"no":"Jeg godtar",
				"pl":"Akceptuję cookies",
				"pt":"Aceito os cookies",
				"ro":"Accept cookie-urile",
				"sk":"Povoliť cookies",
				"sl":"Sprejmem piškotke",
				"sv":"Jag accepterar kakor"
			},
			"refuse": {
				"en":"I refuse cookies",
				"bg":"Не приемам бисквитки",
				"es":"Rechazo las cookies",
				"cs":"Zakázat cookies",
				"da":"Jeg accepterer ikke cookies",
				"de":"Cookies ablehnen",
				"el":"Δεν αποδέχομαι τα cookies",
				"et":"Ma ei nõustu küpsistega",
				"fi":"En salli evästeitä",
				"fr":"Je refuse les cookies",
				"ga":"Diúltaím d'fhianáin",
				"hr":"Odbaci kolačiće",
				"hu":"Nem fogadom el a cookie-kat",
				"is":"Ég samþykki ekki vafrakökur",
				"it":"Rifiuto i cookie",
				"lt":"Atsisakau priimti slapukus",
				"lv":"Es noraidu sīkdatnes",
				"mt":"Nirrifjuta l-cookies",
				"nl":"Nee, ik accepteer geen cookies",
				"no":"Jeg godtar ikke",
				"pl":"Nie akceptuję cookies",
				"pt":"Recuso os cookies",
				"ro":"Nu accept cookie-urile",
				"sk":"Zakázať cookies",
				"sl":"Ne sprejmem piškotkov",
				"sv":"Jag accepterar inte kakor"
			},
			"cookies": {
				"en":"Cookies",
				"bg":"Бисквитки",
				"es":"Cookies",
				"cs":"Cookies",
				"da":"Cookies",
				"de":"Cookies",
				"el":"Cookies",
				"et":"Küpsised",
				"fi":"Evästeet",
				"fr":"Cookies",
				"ga":"Fianáin",
				"hr":"Kolačići",
				"hu":"Cookie-k",
				"is":"Vafrakökur",
				"it":"Cookie",
				"lt":"Slapukai",
				"lv":"Sīkdatnes",
				"mt":"Cookies",
				"nl":"Cookies",
				"no":"Informasjonskapsler",
				"pl":"Cookies",
				"pt":"Cookies",
				"ro":"Cookie-urile",
				"sk":"Súbory cookies",
				"sl":"Piškotki",
				"sv":"Kakor (cookies)"
			},
			"find_out_more_on":{
				"en":"Find out more on ",
				"fr":"En savoir plus sur ",
				"bg":"Научете повече за това ",
				"es":"Más información sobre ",
				"cs":"Pročtěte podrobnosti, ",
				"da":"Læs mere om, ",
				"de":"Informieren Sie sich, ",
				"el":"Δείτε ",
				"et":"Lugege täiendavalt, ",
				"fi":" ",
				"fr":"En savoir plus sur ",
				"ga":" ",
				"hr":"Saznajte više o tome ",
				"hu":"Ha bővebb információkat szeretne kapni a cookie-k használatáról és arról, hogyan módosíthatja a beállításokat, kattintson ",
				"is":"Frekari upplýsingar hér um ",
				"it":"Scopri ",
				"lt":"Daugiau informacijos, ",
				"lv":"Noskaidrojiet, ",
				"mt":"Skopri aktar dwar, ",
				"nl":"Lees ",
				"no":"Få mer informasjon om ",
				"pl":"Dowiedz się, ",
				"pt":"Mais informações sobre a ",
				"ro":"Mai multe informaţii despre ",
				"sk":"Prečítajte si informácie o tom, ",
				"sl":"Več o ",
				"sv":"Läs mer om "
			},
			"how_we_use": {
				"en":"how we use cookies and how you can change your settings",
				"fr":"l'utilisation des cookies et la manière de modifier vos paramètres",
				"bg":"как използваме бисквитките и как можете да промените настройките си",
				"es":"cómo usamos las cookies y de qué manera puede cambiar su configuración",
				"cs":"jak přesně cookies využíváme a jak můžete změnit příslušná nastavení",
				"da":"hvordan vi bruger cookies, og hvordan du kan ændre dine indstillinger",
				"de":"wie wir Cookies verwenden und wie Sie Ihre Einstellungen ändern können",
				"el":"πώς χρησιμοποιούμε τα cookies και πώς μπορείτε να αλλάξετε τις ρυθμίσεις σας",
				"et":"kuidas me küpsiseid kasutame ning kuidas saate muuta oma seadeid",
				"fi":"Lisätietoja evästeistä ja asetusten muuttamisesta",
				"fr":"l'utilisation des cookies et la manière de modifier vos paramètres",
				"ga":"Cuir eolas ar an tslí ina n-úsáidimid fianáin agus ar an tslí chun do shocruithe a athrú",
				"hr":"kako se koristimo kolačićima i kako možete promijeniti vaše postavke",
				"hu":"ide",
				"is":"hvernig við notum vafrakökur og hvernig þú breytir stillingum",
				"it":"come usiamo i cookie e come è possibile modificare le tue impostazioni",
				"lt":"kaip naudojami slapukai ir kaip pakeisti savo nuostatas",
				"lv":"kāda ir mūsu sīkdatņu lietošanas politika un kā varat mainīt savus iestatījumus",
				"mt":"kif nużaw il-cookies u kif tista' tibdel is-settings tiegħek",
				"nl":"hoe we cookies gebruiken en hoe u uw instellingen kunt aanpassen",
				"no":"hvordan vi bruker informasjonskapsler og hvordan du kan endre innstillingene dine",
				"pl":"jak używamy cookies i jak można zmienić swoje ustawienia",
				"pt":"utilização de cookies e a alteração de parâmetros",
				"ro":"cum utilizăm cookie-urile şi despre cum vă puteţi modifica setările",
				"sk":"ako používame cookies a ako môžete zmeniť tieto nastavenia",
				"sl":"načinu uporabe piškotkov in kako lahko spremenite svoje nastavitve",
				"sv":"hur vi använder kakor och hur du ändrar dina inställningar"
			}
		},

		getLabel : function (main,lang) {
			return _b.label[main][lang]||_b.label[main]["en"]||"<!-- no such label " + main + " in language " + lang + " -->";
		},

		cookieNoticeUrl : function () {
			var rv = win.cookieNoticeUrl[win.docLang]||win.cookieNoticeUrl["en"]||win.cookieNoticeUrl["zz"]||"/cookies/index_en.htm";
			return rv;
		},

		showBanner : function() {
			var lang = win.docLang;
			var cb = document.createElement("div");
			cb.id = "cookie-consent-banner";
			cb.className = "cookie-consent-banner";
			
			//cb.style.background = "#f1fbff";
			cb.style.border = "1px solid #369";
			cb.style.lineHeight = "1.5";
			cb.style.padding = "5px 20px 10px";
			cb.style.margin = "0 auto";
			cb.style.fontFamily = "Verdana,Arial,Helvetica,'DejaVu Sans',sans-serif";

			var inner_html = '<h2>' + _b.getLabel("cookies",lang) +'</h2>';
			inner_html += '<p class="cookie-consent-inform">' + _b.getLabel("uses_cookies",lang) + ". ";
			inner_html += _b.getLabel("find_out_more_on",lang) + '<a id="cookie-notice" href="' + _b.cookieNoticeUrl() + '">' + _b.getLabel("how_we_use",lang) + "</a>.</p>";
			inner_html += "<div class='cookie-consent-actions' style='margin-right: 20px;'><a href=\"javascript:euCookieConsent.add()\">" + _b.getLabel("accept",lang) + "</a></div><div class='cookie-consent-actions'><a href=\"javascript:euCookieConsent.refuse()\">" + _b.getLabel("refuse",lang) + "</a></div>";
			cb.innerHTML = inner_html;

			var body = document.getElementsByTagName('body')[0];
			body.insertBefore(cb,body.childNodes[0]);
		},

		// CCB: TODO
		init : function ()
		{
			var body = document.getElementsByTagName('body')[0];
			if (typeof body !== "undefined") {
				_b.showBanner();
			} else if (document.addEventListener){
				document.addEventListener("DOMContentLoaded", _b.showBanner, false);
			} else if (document.attachEvent) {
				document.attachEvent("onreadystatechange", function() {
					if (/loaded|complete/.test(document.readyState)) _b.showBanner();
				})
			}
		}
	}

	_b.init();

})(window,document);