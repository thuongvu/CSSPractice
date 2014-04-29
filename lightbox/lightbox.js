$(document).ready(function() {

	function lightBox(insertContent, ajaxContentUrl) {

		// if the lightbox doesn't exist, append it to the body with logic
		if ($('#lightbox').size() === 0) {
			var theLightBox = $('<div id="lightbox"/>');
			var theShadow = $('<div id="lightbox-shadow"/>');

			$(theShadow).click(function() {
				closeLightBox();
			});

			$(theLightBox).click(function(e) {
				if (e.target == e.currentTarget) {		// makes sure that it is us clicking the lightBox and not a child inside there, causing this
					closeLightBox();
				};
			})

			$('body').append(theShadow);
			$('body').append(theLightBox);
		};

		// remove any previous content
		$('#lightbox').empty();

		// append content if it exists
		if (insertContent) {
			$('#lightbox').append(insertContent);
		};

		// ajax request if one is specified
		if (ajaxContentUrl) {
			$('#lightbox').append('<p class="loading">Loading</p>');

			$.ajax({
				type: 'GET',
				url: ajaxContentUrl,
				success: function(data) {
					$('#lightbox').empty();
					$('#lightbox').append(data);
				},
				error: function() {
					console.log("Ajax request failed");
				}
			});
		};

		// display lightbox  - note: we have to do this because the css for #lightbox & #lightbox-shadow display:none.  this gives time for an ajax request, and when everything is ready, then show
		$('#lightbox').show();
		$('#lightbox-shadow').show();
	};

	// close the lightbox
	function closeLightBox() {
		$('#lightbox').hide();
		$('#lightbox-shadow').hide();
		$('#lightbox').empty();
	};

	// click the button to invoke
	$('#startLightBox').click(function() {
		lightBox('<p>content to insert</p>');
	});

});