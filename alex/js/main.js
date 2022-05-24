import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

/* import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper(); */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

if (document.body.clientWidth < 619) {
  swiperService.destroy();
}


jQuery(document).ready(function ($) {
  $('.popup-content').magnificPopup({
    type: 'inline',
    closeOnBgClick: true,
    fixedContentPos: false,
    callbacks: {
      open: function () {
        jQuery('body').addClass('noscroll');
      },
      close: function () {
        jQuery('body').removeClass('noscroll');
      }
    }
  });
   
});

//МЕНЮ
let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};

//---------------------------------------------------------------------------------
/////////////простое меню
$(document).ready(function () {
  //бургер-меню
  $('.nav-burger').click(function (event) {
    $('.nav-burger, .main-menu').toggleClass('is-open');
    $('body').toggleClass('lock');
  });

  //подсветка активного пункта меню при скролле - должен быть jquery
  var sections = $('.section'),
    links = $('nav ul li a'),
    lis = $('nav ul > li');

  $(window).scroll(function () {
    var currentPosition = $(this).scrollTop();
    links.removeClass('current');
    lis.removeClass('current');

    sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).height();

      if (currentPosition >= top && currentPosition <= bottom) {
        var link = $('a[href="#' + this.id + '"]');
        link.addClass('shine');
        link.parent().addClass('current');
      } else {
        link = $('a[href="#' + this.id + '"]');
        link.removeClass('shine');
        link.parent().removeClass('current');
      }

    });

  });
  //прячется при нажатии на пункт мобильного меню
  $('nav ul li a').on('click', function () {
    $('.nav-burger, .main-menu').toggleClass('is-open');
  });
});


//---------------------------------------------------------------------------------------------------------------
////// выпадающее меню
let body = document.querySelector('body');
if (isMobile.any()) { //убрать эту строчку, если стрелки надо и на десктопе
  body.classList.add('touch');
  let arrow = document.querySelectorAll('.arrow');
  for (i = 0; i < arrow.length; i++) {
    let thisLink = arrow[i].previousElementSibling;
    let subMenu = arrow[i].nextElementSibling;
    let thisArrow = arrow[i];

    thisLink.classList.add('parent');
    arrow[i].addEventListener('click', function () {
      console.log('click');
      subMenu.classList.toggle('open');
      thisArrow.classList.toggle('active');
    });
  }
} else {//убрать эту строчку, если стрелки надо и на десктопе
  body.classList.add('mouse');//убрать эту строчку, если стрелки надо и на десктопе
}//убрать эту строчку, если стрелки надо и на десктопе

$(document).ready(function () {
  //бургер-меню
  $('.nav-burger').click(function (event) {
    $('.nav-burger, .main-menu').toggleClass('is-open');
    $('body').toggleClass('lock');
  });

  //подсветка активного пункта меню при скролле - должен быть jquery
  var sections = $('.section'),
    links = $('nav ul li a'),
    lis = $('nav ul > li');

  $(window).scroll(function () {
    var currentPosition = $(this).scrollTop();
    links.removeClass('current');
    lis.removeClass('current');

    sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).height();

      if (currentPosition >= top && currentPosition <= bottom) {
        var link = $('a[href="#' + this.id + '"]');
        link.addClass('shine');
        link.parent().addClass('current');
      } else {
        link = $('a[href="#' + this.id + '"]');
        link.removeClass('shine');
        link.parent().removeClass('current');
      }
    });
  });
  //прячется при нажатии на пункт мобильного меню
  $('nav ul li a').on('click', function () {
    $('.nav-burger, .main-menu').toggleClass('is-open');
  });
});

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

//magnific-popup





