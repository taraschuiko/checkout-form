jQuery(document).ready(function($) {
	$('.form__item').each(function(index, el) {
		if ($(this).has('.far') || $(this).has('.fas')) {
			$(this).children('input').css('paddingRight', '48px');
			$(this).children('select').css('paddingRight', '48px');
		}
	});

	$('input').on('focus', function(event) {
		$(this).parent('.form__item, .card__item').children('p').css('color', '#353535');
	});

	$('input').on('blur', function(event) {
		$(this).parent('.form__item, .card__item').children('p').css('color', '#A7A7A7');
	});

	$('.form__logo input[type=file]').change(function(event) {
		$(this).parent('.form__logo').text('Change logo');
	});

	$('.card-number-input').on('input', function(event) {
		if ($(this).val().length == 4) {
			console.log('4');
			$(this).next('.card-number-input').focus();
		}
	});

	$('div[class^=shipping-payment__method]').on('click', function(event) {
		event.preventDefault();
		$('div[class^=shipping-payment__method]').each(function(index, el) {
			$(this).css('background', '#ffffff');
		});
		$(this).css('background', '#efefef');
	});
});