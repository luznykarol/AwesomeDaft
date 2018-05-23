$(document).ready(function() {

	$('#burger').click(function() {
		$(this).toggleClass('navigation__burger--open');

		if($(window).width() < 800) {
		if ($('#list').css('opacity') == 0) {
			$('#list').css('opacity', 1);
			$('#list').css('display', 'initial');
		}
		else {
			$('#list').css('opacity', 0);
		}};
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

	$('#more').click(function() {
		$(this).text(($('#more').text() == 'thx 4 the tip') ? 'more' : 'thx 4 the tip').fadeIn();
		$(this).toggleClass('small');
	});
});
