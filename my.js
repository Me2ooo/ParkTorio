jQuery(function($) {
	$('.progressCircle').circleProgress({
		max: 100,
		value: 69,
		textFormat: 'percent',
		animation: 'easeInOutQuad',
	});
});

/* function progressBar(percent, $element) {
    if(percent > 100){
	percent = 100
    }

    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
} */

$(window).scroll(function (){
	var scroll = $(window).scrollTop();

	if (scroll >=10) {
		$('.w3-top').removeClass('hidden');

	}
	else {
		$('.w3-top').addClass('hidden');
	}
});


$(".jumbotron").css({ height: ($(window).height()*0.75) + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: ($(window).height()*0.75) + "px" });
});


$(function() {
	$('#navbar.navbar-right ul li a').click(function() {
	  //clear active status of any parent LI's
	  $('#navbar.navbar-right ul li').removeClass('active');
  
	  // store id of new active sub-nav
	  var currSub = $(this).parent();
	  currSub.addClass('active')
	  var id = currSub.attr('id');
  
	  // clear active status of any sub-nav list
	  $('#subnavbar ul.navbar-nav').removeClass('active');
  
	  // set selected sub-nav to active
	  $('.' + id).addClass('active');
  
	  console.log($('.' + id).attr('class'));
  
	});
  
  });


