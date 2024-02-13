import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

document.addEventListener('DOMContentLoaded', function () {
  // Slider for Yachts Section
  $('.our-yachts-list, .reviews-list').slick({ // our-yachts-list
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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

  // Open Menu
  $('.open-menu-but').on('click', function () {
    $('.header-menu').fadeIn()
    $('body').css('overflow', 'hidden')
  })

  // Close Menu
  $('.close-menu-but').on('click', function () {
    $('.header-menu').fadeOut()
    $('body').css('overflow', 'unset')
  })

  // Show Menu on Scroll
  menuShow('#fixed_menu', '.header');
  function menuShow(id, item) {
    $(window).on('scroll', function() {
      let hT = $(id).offset().top,
          wS = $(this).scrollTop() - 100;

      if(hT > 0) {
        if(wS >= hT) {
          $(item).addClass('fixed');
        } else {
          $(item).removeClass('fixed');
        }
      }
    });
  }

  // Activate Menu BTN for each section
  scroll('#about', '#menu_about');
  scroll('#yachts', '#menu_yachts');
  scroll('#reviews', '#menu_review');

  function scroll(id, item) {
    $(window).on('scroll', function() {
      let hT = $(id).offset().top,
          blockHeight = $(id).outerHeight(),
          range = blockHeight - 100,
          wS = $(this).scrollTop() + 100;

      if (wS >= hT && wS <= hT + range) {
        $('.menu-list-item').removeClass('active')
        $(item).addClass('active');
      } else {
        $(item).removeClass('active');
      }
    });
  }

  // Smooth scroll for links
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();

      $('body').css('overflow', 'unset')

      $('.header-menu').fadeOut()
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  // AOS Init
  AOS.init();
});

window.addEventListener('load', function() {
  var preloader = document.querySelector('.preloader');
  preloader.style.display = 'none';
});
