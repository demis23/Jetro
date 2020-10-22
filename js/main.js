$(document).ready(function () {

  $('.slider__inner').slick({
    prevArrow: '<button type="button" class="slider__arrow--prev"></button>',
    nextArrow: '<button type="button" class="slider__arrow--next"></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    dots: false,
    focusOnSelect: true,
    asNavFor: '.slider__nav'
  });
  $('.slider__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    centerMode: false,
    autoplay: false,
    arrows:false,
    focusOnSelect: false,
    dots: false,
    responsive: [
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 5,
          arrows:false,

        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 4,
          arrows:false,
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          arrows:false,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]


  });

  $('.sandwich').on('click',function(){

    $('.header__menu').slideToggle();

  });



});