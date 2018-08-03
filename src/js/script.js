jQuery(document).ready(function($) {
	$('.form__item').each(function(index, el) {
		if ($(this).has('.far') || $(this).has('.fas')) {
			$(this).children('input').css('paddingRight', '48px');
			$(this).children('select').css('paddingRight', '48px');
		}
	});

	$('input, select').on('focus', function(event) {
		$(this).closest('.form__item, .card__item').find('p, i').css('color', '#353535');
	});

	$('input, select').on('blur', function(event) {
		$(this).closest('.form__item, .card__item').find('p, i').css('color', '#A7A7A7');
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
			$(this).removeClass('shipping-payment__method-active');
		});
		$(this).addClass('shipping-payment__method-active');
	});

	$('.shipping__methods-item').on('click', function(event) {
		event.preventDefault();
		var tab = "#" + $(this).attr('id') + "-tab";

		$('.shipping__methods-item').each(function(index, el) {
			$(this).removeClass('shipping__methods-item--active');
		});

		$(this).addClass('shipping__methods-item--active');
		$('.shipping__details').each(function(index, el) {
			$(this).removeClass('shipping__details-active');
		});
		$(tab).addClass('shipping__details-active');
	});
});