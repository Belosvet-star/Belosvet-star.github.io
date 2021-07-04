

//МЕНЮ
(function ($) {
  $(function () {
    $('nav ul li > a:not(:only-child)').click(function (e) {
      $(this).siblings('.nav-dropdown').toggle();
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('html').click(function () {
      $('.nav-dropdown').hide();
    });
  });
  document.querySelector('#nav-toggle').addEventListener('click', function () {
    this.classList.toggle('height');
  });
  $('#nav-toggle').click(function (e) {
    $('nav ul').toggle();
    $('.bod').toggleClass('over');
    $('.navigation').toggleClass('height');
    e.preventDefault();
  });

  $('#nav-toggle').on('click', function () {
    this.classList.toggle('hamburger');
  });
})(jQuery);
//подсветка активного пункта меню при скролле - должен быть jquery
$(function () {
  const section = $('.section'),
    nav = $('.menu'),
    navHeight = nav.outerHeight(); // получаем высоту навигации 
  // поворот экрана 
  window.addEventListener('orientationchange', function () {
    navHeight = nav.outerHeight();
  }, false);
  $(window).on('scroll', function () {
    const position = $(this).scrollTop();
    section.each(function () {
      const top = $(this).offset().top - navHeight - 5,
        bottom = top + $(this).outerHeight();
      if (position >= top && position <= bottom) {
        nav.find('a').removeClass('shine');
        section.removeClass('shine');
        $(this).addClass('shine');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('shine');
      }
    });
  });
});

//смена фона липкого меню
 $(window).scroll(function () {
  if ($(document).scrollTop() > 100) {
    $(".navigation").addClass("animate");
    $(".menu__link").addClass("animate");
    $(".nav-mobile").addClass("animate");
  } else {
    $(".navigation").removeClass("animate");
    $(".menu__link").removeClass("animate");
    $(".nav-mobile").removeClass("animate");
  }
}); 

AOS.init();

new WOW().init();

//swiper
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  speed: 700,
  autoplay: {
    delay: 5000,
  }

}); 




//модальное окно hystmodal
const myModal = new HystModal({
  linkAttributeName: 'data-hystmodal',
  catchFocus: true,
  waitTransitions: true,
  closeOnEsc: false,
  beforeOpen: function (modal) {
    console.log('Message before opening the modal');
    console.log(modal); //modal window object
  },
  afterClose: function (modal) {
    console.log('Message after modal has closed');
    console.log(modal); //modal window object
  },
}); 
//конец модального окна


//прокрутка кнопка вверх jquery
  jQuery(($) => {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 780) $('.scrollup').fadeIn();
    else $('.scrollup').fadeOut();
  });
  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 566);
    return false;
  });
});  
//прокрутка кнопка вверх ванильный js
/* document.addEventListener('DOMContentLoaded', () => {
  let toTopBtn = document.querySelector('.scrollup');
  window.onscroll = function () {
    if (window.pageYOffset > 580) {
      toTopBtn.style.display = 'block'
    } else {
      toTopBtn.style.display = 'none'
    }
  }
  // плавный скролл наверх 
  toTopBtn.addEventListener('click', function () {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  });
}); */

