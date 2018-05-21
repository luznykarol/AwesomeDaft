$(document).ready(function() {

	$('#burger').click(function() {
		$(this).toggleClass('navigation__burger--open');
		$('#list').slideToggle(500);
	});

	$('#link').click(function () {
		$('#list').slideToggle();
		$('#burger').toggleClass('navigation__burger--open');
	});
	
	var navbarHeight = $('#navbar').outerHeight();

	$('#link').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top -navbarHeight
		}, 1000);
		return false;
	});

	$('.symbol-square').click(function() {
		$(this).toggleClass('spin');
	});

	$('#triangle').click(function() {
		$(this).animate({bottom: '100px'});
		$('#plus').animate({bottom: '100px'});
		$('#more').animate({bottom: '100px'});
	})
});
