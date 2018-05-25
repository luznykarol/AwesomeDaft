$(document).ready(function() {
	//change the burger image to x and fade the list in/out on click
	$('#burger').click(function() {
		$('#list').fadeToggle();
		$(this).toggleClass('navigation__burger--open');
	});
		
	//after clicking the link, burger closes and list slides up/down
	$('#link').click(function () {
		$('#list').slideToggle();
		$('#burger').toggleClass('navigation__burger--open');
	});

	//animate the symbol to do a 360 spin
	$('.symbol-square').click(function() {
		$(this).toggleClass('spin');
	});

	//thanks for the tip !
	$('#more').click(function() {
		$(this).text(($('#more').text() == '<3') ? 'more' : '<3').fadeIn();
	});
});
