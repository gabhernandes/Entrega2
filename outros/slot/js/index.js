$(document).ready(function() {
	var credits = $('#display-credits');
	var win = $('#display-win');
	var isPlaying = false;
	
	var figure1;
	var figure2;
	var figure3;
	
	$('#lever-ball').click(function() {
		if (isPlaying)
			return;
		
		$('#lever-ball').animate({ marginTop: -200, height: 70, width: 70, marginRight: -15 }, 1000, function() {
			$('#lever-ball').animate({ marginTop: -450, height: 60, width: 60, marginRight: -10 }, 1500);
		});
		
		$('#lever-bar').animate({ marginTop: -180, height: 200 }, 1000, function() {
			$('#lever-bar').animate({ marginTop: -390, height: 400 }, 1500);
		});
		

		if ( $('#hold-left').hasClass('selected') && $('#hold-center').hasClass('selected') && $('#hold-right').hasClass('selected') ) {
			$('#hold-left').removeClass('selected');
			$('#hold-center').removeClass('selected');
			$('#hold-right').removeClass('selected');
		}
		
		if (parseInt(credits.text()) == 0)
			return;

		isPlaying = true;
		var min = 1;
		var max = 9;
		
		var cred = parseInt( credits.text() );
		credits.text( zeroPad(cred - 1, 5 ) );

		if ( !$('#hold-left').hasClass('selected') ) {
			figure1 = Math.floor(Math.random() * (max - min + 1)) + min;
			moveReel($('#reel-left .first'), 3, figure1);
		}

		if ( !$('#hold-center').hasClass('selected') ) {
			figure2 = Math.floor(Math.random() * (max - min + 1)) + min;
			setTimeout(function(){
				moveReel($('#reel-center .first'), 4, figure2);
			}, 1000);
		}


		if ( !$('#hold-right').hasClass('selected') ) {
			figure3 = Math.floor(Math.random() * (max - min + 1)) + min;
			setTimeout(function(){
				moveReel($('#reel-right .first'), 5, figure3);
			}, 2000);
		}

		setTimeout(function(){
			if (figure1 == figure2 && figure2 == figure3) {
				var prz;
				
				if (figure1 == 2) {
					prz = 300;
				} else if (figure1 == 3) {
					prz = 200;
				} else if (figure1 == 6) {
					prz = 700;
				} else if (figure1 == 8) {
					prz = 800;
				} else
					prz = 100;
				
				var prize = parseInt( win.text() );
				win.text( zeroPad(prize + prz, 6 ) );
			}

			$('#hold-left').removeClass('selected');
			$('#hold-center').removeClass('selected');
			$('#hold-right').removeClass('selected');
			
			isPlaying = false;
		}, 6500);
	});
	
	$('#insert-coin-sticker').click(function() {
		var cred = parseInt( credits.text() );
		credits.text( zeroPad(cred + 5, 5 ) );
	});
	
	function zeroPad(num, places) {
		var zero = places - num.toString().length + 1;
		return Array(+(zero > 0 && zero)).join("0") + num;
	}
	
	function moveReel(reel, repeats, figure, start) {
		var time = 250;
		var easing = 'linear';
		var marginT = -900;
		
		if (typeof start === 'undefined') {
			time = 1500;
			easing = 'easeInQuad';
		}
		else if (repeats == 0) {
			time = 1500;
			easing = 'easeOutQuad';
			marginT = -100*figure -10;
		}
		
		reel.css({ marginTop: -10 });
		reel.animate(
			{ marginTop: marginT },
			time,
			easing,
			function() {
				if (repeats > 0) {
					moveReel(reel, repeats-1, figure, true);
				}
			}
		);
	}
	
	$('.hold-buttons').click(function() {
		if ( $(this).hasClass('selected') )
			$(this).removeClass('selected');
		else
			$(this).addClass('selected');
	});
});