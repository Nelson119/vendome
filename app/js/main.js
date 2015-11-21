'use strict';
/*eslint-disable new-cap, no-unused-vars */
/*global  $, blueimp */

$(function(){
	console.log(0);

	blueimp.Gallery($('#home-gallery .links'), {
			container: '#blueimp-gallery-carousel',
			carousel: true,
			indicatorOptions: {
				// The tag name, Id, element or querySelector of the indicator container:
				indicatorContainer: 'ol',
				// The class for the active indicator:
				activeIndicatorClass: 'active',
				// Defines if the gallery indicators should display a thumbnail:
				thumbnailIndicators: false
			}
		}
	);
	if($('.tablet,.mobile').length){
		$('header nav').mmenu({});
		var menu = $('.mm-menu').data( 'mmenu' );
		$('#mm').click(function(event) {
			event.preventDefault();
			menu.open();
		});
	}
});
