'use strict';
/*eslint-disable new-cap, no-unused-vars */
/*global  $, blueimp */

$(function(){
	if($('#home-gallery .links').length){

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
	}
	if($('.tablet,.mobile').length){
		$('header nav').mmenu({});
		var menu = $('.mm-menu').data( 'mmenu' );
		$('#mm').click(function(event) {
			if(!$('#menu.mm-opened').length){
				$('i', this).removeClass('fa-bars').addClass('fa-remove');
				menu.open();
			}else{
				$('i', this).addClass('fa-bars').removeClass('fa-remove');
				menu.close();
			}
			event.preventDefault();

		});
		$('footer ul:eq(0) fieldset legend').on('click', function(){
			if(!$(this).parent().find('a:visible').length){
				$(this).parents('ul').find('a:visible').fadeOut(250).parent().find('i').addClass('fa-plus').removeClass('fa-minus');
				$(this).parent().find('a').fadeIn(250);
				$(this).find('i').addClass('fa-minus').removeClass('fa-plus');
			}else{
				$(this).parent().find('a:visible').fadeOut(250).parent().find('i').addClass('fa-plus').removeClass('fa-minus');
			}
		});
	}
});
