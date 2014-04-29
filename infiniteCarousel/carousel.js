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

	// 	var lengthOfSlider = document.getElementsByClassName('slider')[0].children.length;
	// 	var i = 0;
	// $interval = setInterval(
	//     function(){
	//      	// find the one with the active class & remove it 
	// 			var previousActive = document.getElementsByClassName('active')[0];
	// 			document.getElementsByClassName('active')[0].removeAttribute("class", "active")
	//      	// fade it out
	// 			previousActive.fadeOut($transition_time);

	//      	// if index of the removed active class + 1 = length of elements of all slides, set index to -1
	// 			if (i === lengthOfSlider + i) {
	// 				i = -1;
	// 			}
	//      	// add 1 to index
	// 			i++;
	//      	// make the element activeclass & fade element in
	// 			document.getElementsByClassName('slider')[0].children[i].setAttribute("class", "active");
	// 			document.getElementsByClassName('slider')[0].children[i].fadeIn($transition_time);
	//      }
	//      , $transition_time +  $time_between_slides 
	//    );

});