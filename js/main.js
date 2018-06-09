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
    navText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
  });


  // owl carousel
  var teamCarousel = $('.teamCarousel');
  teamCarousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
    }
  });


