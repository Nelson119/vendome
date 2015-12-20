'use strict';
/*eslint-disable new-cap, no-unused-vars
, no-script-url, key-spacing, no-trailing-spaces
, no-undef */
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

	if($('#menu >ul').length){
		$('body').append($('#menu').clone().attr('id', 'mmenu'));
		$('#mmenu >ul >li ul').each(function(){
			$(this).prev().attr('href', 'javascript:');
			$(this).prev().on('click', function(){
				$(this).parent().toggleClass('on');
			});
		});
		$('#header nav ul').superfish({
			animation:   {opacity:'show', height:'show'}, 
			animationOut:   {opacity:'hide', height:'hide'}
		});
		$('#mmenu #mm').on('click', function(ev){
			if($('body').hasClass('menuon')){
				$('body').removeClass('menuon');
			}else{
				TweenMax.set('html,body', {scrollTop: 0});
				$('body').addClass('menuon');
			}
			return false;
		});
	// }
		// $('header nav').mmenu({});
		// var menu = $('.mm-menu').data( 'mmenu' );
		// $('#mm').click(function(event) {
		// 	if(!$('#menu.mm-opened').length){
		// 		$('i', this).removeClass('fa-bars').addClass('fa-remove');
		// 		menu.open();
		// 	}else{
		// 		$('i', this).addClass('fa-bars').removeClass('fa-remove');
		// 		menu.close();
		// 		$('li', menu).removeClass('mm-selected');
		// 		menu.closeAllPanels();
		// 	}
		// 	event.preventDefault();

		// });
		$('footer ul:eq(0) fieldset legend').on('click', function(){
			if($(window).width() > 1024){
				return;
			}
			if(!$(this).parent().find('a:visible').length){
				$(this).parents('ul').find('a:visible').fadeOut(250).parent().find('i').addClass('fa-plus').removeClass('fa-minus');
				$(this).parent().find('a').fadeIn(250);
				$(this).find('i').addClass('fa-minus').removeClass('fa-plus');
			}else{
				$(this).parent().find('a:visible').fadeOut(250).parent().find('i').addClass('fa-plus').removeClass('fa-minus');
			}
		});
	// }else {

		$('header nav ul').superfish();
	}
});
