(function($) {

    // Initialize tag-it components
	//
	// The tag-it component is used during registration for the user to enter
	// their review interests. See: /templates/frontend/pages/userRegister.tpl
	if (typeof $.fn.tagit !== 'undefined') {
		$('.tag-it').each(function() {
			var autocomplete_url = $(this).data('autocomplete-url');
			$(this).tagit({
				fieldName: $(this).data('field-name'),
				allowSpaces: true,
				autocomplete: {
					source: function(request, response) {
						$.ajax({
							url: autocomplete_url,
							data: {term: request.term},
							dataType: 'json',
							success: function(jsonData) {
								if (jsonData.status == true) {
									response(jsonData.content);
								}
							}
						});
					},
				},
			});
		});

		/**
		 * Determine if the user has opted to register as a reviewer
		 *
		 * @see: /templates/frontend/pages/userRegister.tpl
		 */
		function isReviewerSelected() {
			var group = $('#reviewerOptinGroup').find('input');
			var is_checked = false;
			group.each(function() {
				if ($(this).is(':checked')) {
					is_checked = true;
					return false;
				}
			});

			return is_checked;
		}

		/**
		 * Reveal the reviewer interests field on the registration form when a
		 * user has opted to register as a reviewer
		 *
		 * @see: /templates/frontend/pages/userRegister.tpl
		 */
		function reviewerInterestsToggle() {
			var is_checked = isReviewerSelected();
			if (is_checked) {
				$('#reviewerInterests').addClass('is_visible');
			} else {
				$('#reviewerInterests').removeClass('is_visible');
			}
		}

		// Update interests on page load and when the toggled is toggled
		reviewerInterestsToggle();
		$('#reviewerOptinGroup input').click(reviewerInterestsToggle);
    }
    
})(jQuery);