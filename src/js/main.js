//Js Revealing module pattern
var core = function($) {



    var init = function() {
    	mySwiper_a();
        mySwiper_b();
    };

    var mySwiper_a = function() {

        var mySwiper_a = new Swiper('.swiper-a', {
          slidesPerView: 'auto',
          spaceBetween: 15,

          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
          },
        });
    };

    var mySwiper_b = function() {

        var mySwiper_b = new Swiper('.swiper-b', {
          pagination: {
            el: '.swiper-pagination',
          },
        });
    };
    

    return {
    	init: init
    };

} (jQuery);

jQuery(function() { 
	core.init(); 
});
