$(document).ready(function(){

	// Team Owl-Carousel
	$('.team-member').owlCarousel({
		items:3,
    	loop:true,
  	    autoplay:true,
    	nav:false,
    	dots:false,
    	 responsive:{
        0:{
            items:1,
        },
        768:{
            items:3,  
        }
    }

})


	$('.nav-icon').click(function(){
		$('.header-menu ul').slideToggle(1000);

		return false;


	})

	})


