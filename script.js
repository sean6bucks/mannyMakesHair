$(document).ready(function(){
	$('.splashTitle').click(function(){
		$('.splashCover').fadeOut(1000);
		$(this).animate({top:'-=45%'}, 1000, function(){
			$('.splashTitle').addClass('splashHead');
			$('.splashTitle').removeClass('splashTitle');
		$('.navigation ul').fadeIn(500);
		});
	});


	$('.portfolio').click(function(){
		$('.portfolioNav').slideToggle(function(){
			$('.image1').fadeIn(300, function(){
				$('.image2').fadeIn(300, function(){
					$('.image3').fadeIn(300, function(){
						$('.image4').fadeIn(300);
					});
				});
			});
		});
	});

	$('.styling').click(function(){
		$('.catColoring').hide(200);
		$('.catMens').hide(200);
		$('.catEditorial').hide(200);
		$('.catStyling').show(200);
	});

	$('.coloring').click(function(){
		$('.catStyling').hide(200);
		$('.catMens').hide(200);
		$('.catEditorial').hide(200);
		$('.catColoring').show(200);
	});

	$('.mens').click(function(){
		$('.catStyling').hide(200);
		$('.catColoring').hide(200);
		$('.catEditorial').hide(200);
		$('.catMens').show(200);
	});

	$('.editorial').click(function(){
		$('.catStyling').hide(200);
		$('.catColoring').hide(200);
		$('.catMens').hide(200);
		$('.catEditorial').show(200);
	});

});