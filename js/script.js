jQuery('.toggle-btn').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(this).addClass('active-btn')
	});
jQuery('.toggles button').click(function(event) {
	/* Act on the event */
	var getId = this.id;
	var getCurrent = jQuery('.posts .' + getId);

	jQuery('.post').not(getCurrent).fadeOut(500);
	getCurrent.fadeIn(500);
});
jQuery('#showall').click(function(event) {
	/* Act on the event */
	jQuery('.post').fadeIn(500);
});

jQuery(document).ready(function($) {
	jQuery('.slider-items').slick({
		infinite:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow:'<button class="prev arrow">&#10094</button>',
		nextArrow:'<button class="next arrow">&#10095</button>',
	});
});

jQuery(document).ready(function($) {
	jQuery('.bottom-blocs').slick({
		infinite:true,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow:'<button class="prev1 arrow">&#10094</button>',
		nextArrow:'<button class="next1 arrow">&#10095</button>',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
			    prevArrow:'<button class="prev arrow">&#10094</button>',
			    nextArrow:'<button class="next arrow">&#10095</button>',
			    slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					prevArrow:'<button class="prev1 arrow">&#10094</button>',
			    nextArrow:'<button class="next1 arrow">&#10095</button>',
			    slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					prevArrow:'<button class="prev1 arrow">&#10094</button>',
			    nextArrow:'<button class="next1 arrow">&#10095</button>',
			    slidesToScroll: 1
				}
			}
		]
	});
});

jQuery(document).ready(function($) {
	jQuery('.partner-blocks').slick({
		infinite:true,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow:'<button class="prev1 arrow">&#10094</button>',
		nextArrow:'<button class="next1 arrow">&#10095</button>',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
			    prevArrow:'<button class="prev arrow">&#10094</button>',
			    nextArrow:'<button class="next arrow">&#10095</button>',
			    slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					prevArrow:'<button class="prev1 arrow">&#10094</button>',
			    nextArrow:'<button class="next1 arrow">&#10095</button>',
			    slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					prevArrow:'<button class="prev1 arrow">&#10094</button>',
			    nextArrow:'<button class="next1 arrow">&#10095</button>',
			    slidesToScroll: 1
				}
			}
		]
	});
});