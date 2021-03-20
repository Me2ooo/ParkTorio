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

	var i;
	for (i = 1; i < 19; i++) {
		$.keyframe.define([{
			name: 'progress' + i.toString(),
			'100%': {
				'height': i.toString() + '%',
			}
		},
		]);
	}

});

$(window).on("load", function () {

	const numbers = [1, 2, 3, 4, 5];

	var i; var j;
	for (i = 6, j = 1; i < 24; i++, j++) {
		console.log(j);
		$('#' + i.toString() + 'am').playKeyframe({
			name: 'progress' + j.toString(),
			duration: '1.75s',
			fillMode: 'forwards',
		})
	}
});
/* function progressBar(percent, $element) {
	if(percent > 100){
	percent = 100
	}

	var progressBarWidth = percent * $element.width() / 100;
	$element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
} */



