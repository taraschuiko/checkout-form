jQuery(document).ready(function($) {
	$('.form__item').each(function(index, el) {
		if ($(this).has('.far') || $(this).has('.fas')) {
			$(this).children('input').css('paddingRight', '48px');
			$(this).children('select').css('paddingRight', '48px');
		}
	});

	$('input').on('focus', function(event) {
		$(this).parent('.form__item').children('p').css('color', '#353535');
	});

	$('input').on('blur', function(event) {
		$(this).parent('.form__item').children('p').css('color', '#A7A7A7');
	});

	$('.form__logo input[type=file]').change(function(event) {
		$(this).parent('.form__logo').text('Change logo');
	});

	$('.card-number-input').on('change', function(event) {
		if (this.value.length == this.maxLength) {
			var $next = $(this).next('.card-number-input');
			if ($next.length)
				$(this).next('.card-number-input').focus();
			else
				$(this).blur();
		}
	});
});