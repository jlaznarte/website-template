SurveyInvitation.load_survey_url_rules_callback({
"surveys": [
   {

    // URL to the file with the texts and links of the pop-up. 
    // In most cases, this line will not need to be edited.
    "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/digital_transformation/02/invitation_settings.js": {

      // A single wildcard expression (or list of wildcard expressions) that the urls must match in order to show the invitation. If not given (or empty), the invitation will not show.
      "white_list": [
        // examples:
        // "ec.europa.eu/about-us/*", 
        // "ec.europa.eu/immigration/*"
      ],

      // A single wildcard expression (or list of wildcard expressions) that the urls must match in order to be excluded (ie. pop-up will not show). It has precedence over the white_list parameter. If not given (or empty) it won’t exclude any links.
      "black_list": [
        // examples:
        // "ec.europa.eu/immigration/que-faire-avant-le-depart/portugal/travailler/salarie_fr", 
        // "ec.europa.eu/immigration/que-dois-je-eviter_fr"
      ]
    }
  }, 
]
});