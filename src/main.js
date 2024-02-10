import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

document.addEventListener('DOMContentLoaded', function () {
  $('.our-yachts-list').slick({ // our-yachts-list
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3500,
    speed: 1500,
    infinite: true,
    arrows: false,
    draggable: true,
    easing: 'easeOutSine',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
    ],
  });
});