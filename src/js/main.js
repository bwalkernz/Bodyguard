//Js Revealing module pattern
var core = function($) {



    var init = function() {
    	//List functions here
    	mySwiper();
    };

    var mySwiper = function() {

        var mySwiper = new Swiper('.swiper-container', {
            // slidesPerView: 2,
            // spaceBetween: 20,
          centeredSlides: true,

          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

          breakpoints: {
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }
        });
    };
    

    return {
    	init: init
    };

} (jQuery);

jQuery(function() { 
	core.init(); 
});
