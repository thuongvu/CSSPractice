// http://paulmason.name/item/simple-jquery-carousel-slider-tutorial
$(document).ready(function() {
	var $slider = $('.slider');
	var $slide = 'li';
	var $transition_time = 500;
	var $time_between_slides = 500;

	function slides() {
   	return $slider.find($slide);
  };

	slides().first().addClass('active');
	slides().first().fadeIn($transition_time);

	$interval = setInterval(
	    function(){
	      var $i = $slider.find($slide + '.active').index();

	      slides().eq($i).removeClass('active');
	      slides().eq($i).fadeOut($transition_time);

	      if (slides().length == $i + 1) {
	      	$i = -1;
	  		}

	      slides().eq($i + 1).fadeIn($transition_time);
	      slides().eq($i + 1).addClass('active');
	    }
	    , $transition_time +  $time_between_slides 
	  );

});

// TODO - implement most of this using vanilla javascript
// document.getElementsByClassName('slider')[0].children[0].setAttribute("class", "lol");
// console.log(document.getElementsByClassName('slider')[0].children);
// document.getElementsByClassName('slider')[0].children[0].removeAttribute("class");
// console.log(document.getElementsByClassName('slider')[0].children);