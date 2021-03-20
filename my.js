jQuery(function ($) {
	$('.progressCircle').circleProgress({
		max: 100,
		value: 69,
		textFormat: 'percent',
		animation: 'easeInOutQuad',
	});

	$(".jumbotron").css({ height: ($(window).height() * 0.75) + "px" });

	$(window).on("resize", function () {
		$(".jumbotron").css({ height: ($(window).height() * 0.75) + "px" });
	});




});

$(window).on("load", function () {

	function setBarValues(values) {
		let i; let j;
		for (i = 6, j = 0; i < 24; i++, j++) {
			$.keyframe.define([{
				name: 'animation' + j.toString(),
				'100%': {
					'height': values[j].toString() + '%',
				}
			},
			]);
			
			$('#' + i.toString() + 'am').playKeyframe({
				name: 'animation' + j.toString(),
				duration: '1.75s',
				fillMode: 'forwards',
			});
			console.log(i + " that was i; " + j + " that was j");
		}


		/*$.each(values, function (index, value) {
			$.keyframe.define([{
				name: 'animation' + {index}.toString(),
				'100%': {
					'height': {value}.toString() + '%',
				}
			},
			]);

			$('#' + time.toString() + 'am').playKeyframe({
				name: 'animation' + {index}.toString(),
				duration: '1.75s',
				fillMode: 'forwards',
			});
			console.log(index + ": " + value + "; and also time " + time.toString());
			time++;
		});
		//$('#' + time.toString() + 'am').resetKeyframe(callback);*/
	}

	let arr = [35, 73, 12, 65, 85, 34, 77, 20, 95, 11, 64, 32, 64, 74, 23, 75, 12, 34]

	setBarValues(arr);

});
/* function progressBar(percent, $element) {
	if(percent > 100){
	percent = 100
	}

	var progressBarWidth = percent * $element.width() / 100;
	$element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
} */



