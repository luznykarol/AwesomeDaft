$(document).ready(function() {
	//change the burger image to x
	$('#burger').click(function() {
		$(this).toggleClass('navigation__burger--open');
		

		//animate the list opacity after you toggle the burger.
		if($(window).width() < 800) {
		if ($('#list').css('opacity') == 0) {
			$('#list').css('opacity', 1);
			$('#list').css('display', 'initial');
		}
		else {
			$('#list').css('opacity', 0);
		}};
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
