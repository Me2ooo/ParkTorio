jQuery(function ($) {
	$(".jumbotron").css({ height: ($(window).height() * 0.75) + "px" });

	$(window).on("resize", function () {
		$(".jumbotron").css({ height: ($(window).height() * 0.75) + "px" });
	});
});

$(window).on("load", function () {

	function positiveArray(numbers) {
		let positiveNumbers = [];

		for (i in numbers) {
			if (i > 0) positiveNumbers.push(i);
		}
		return positiveNumbers;
	}

	console.log(positiveArray([-2, -10,]));

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
		}
	}

	let arr = [35, 73, 12, 65, 85, 34, 77, 20, 95, 11, 64, 32, 64, 74, 23, 75, 12, 34];

	$('.form-control').change(function () {
		var date = new Date($('.form-control').val());
		var day = date.getDate();
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		console.log(arr);
		setBarValues(arr);

		setTimeout(function () {
			$.each(arr, function (index, value) {
				arr.splice({ index }, 1, Math.floor((Math.random() * 100) + 1));
			});
			console.log(arr);
			setBarValues(arr);
		}, 3000);

	});
});
