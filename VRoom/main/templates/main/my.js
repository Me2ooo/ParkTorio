jQuery(function($) {
    $('.progressCircle').circleProgress({
    max: 100,
	value: 69,
    textFormat: 'percent',
    //animation: 'easeInOutCirc',
    });
  });

 /* function progressBar(percent, $element) {
    if(percent > 100){
        percent = 100
    }

    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
} */
