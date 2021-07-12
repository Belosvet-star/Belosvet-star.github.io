AOS.init();

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


//поисковая строка выдвигается вбок прямо в меню
$(document).ready(function () {
  $(".search-btn").click(function () {
    $(".search-wrap__box, .input, .search-btn").toggleClass("searching");
    $("input[type='text']").focus();
  });

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