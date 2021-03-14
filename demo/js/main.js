


// FOR DEMO THEME SLIDER
$('.theme-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    fade: false,
    autoplay: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-chevron-right dandik"></i>',
    nextArrow: '<i class="fas fa-chevron-left bamdik"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });