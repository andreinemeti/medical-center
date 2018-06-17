//wow.js on scroll animations initialization
  wow = new WOW(
      {
      animateClass: 'animated',
      mobile: false,
      offset: 50
    }
  );
  wow.init();





// home slider
  $('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: true,
    items: 1,
      mouseDrag: true,
        touchDrag: false,

    navText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
      0:{
        autoHeight: true,
            mouseDrag: false,
            touchDrag: true,
        items:1,
        nav:false

      },
      600:{
        autoHeight: true,
            mouseDrag: false,
            touchDrag: true,
        items:1,
        nav:false
      },
      1000:{
        autoHeight: true,
            mouseDrag: true,
            touchDrag: true,

        items:1,
        nav:true
      }
    }
  });









// var $nav = $(".navbar");
// var lastScrollTop = 0;
// $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop){
//         $nav.removeClass('scrolled', $(this).scrollTop() > $nav.height());
//         $nav.css({
//            visibility: 'hidden',
          
//          });
//    } else {
//          $nav.addClass('scrolled', $(this).scrollTop() > $nav.height()); 
//          $nav.css({
//            visibility: 'visible',
          
//          });

//    }
//    lastScrollTop = st;
// });