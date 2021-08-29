
AOS.init({
  disable: 'mobile'
  /* disable: function () {
    var maxWidth = 769;
    return window.innerWidth < maxWidth;
  } */
});

//МЕНЮ
(function ($) {
  $(function () {
    $('nav ul li > a:not(:only-child)').click(function (e) {
      $(this).siblings('.sub-menu').toggle();
      $('.sub-menu').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('html').click(function () {
      $('.sub-menu').hide();
    });
  });
  //приклейка меню
  document.querySelector('#nav-toggle').addEventListener('click', function () {
    this.classList.toggle('filled');
  });
  $('.nav-burger').click(function (event) {
    $('.nav-burger, .main-menu').toggleClass('active');
    console.log('click')
    $('body').toggleClass('lock');
  });
  //прячется меню после выбора пункта
  $('.menu-link').on('click', function () {
    $('.nav-burger, .main-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
})(jQuery);
//подсветка активного пункта меню при скролле - должен быть jquery
$(function () {
  const section = $('.section'),
    nav = $('.main-menu'),
    navHeight = nav.outerHeight(); // получаем высоту навигации 
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
  ///////////
  //липкое меню, когда оно внизу главного экрана
  var h_hght = $('#home').outerHeight();// высота "шапки", px
  var h_nav = $('#top_nav').outerHeight();// высота блока с меню, px
  var top;
  $(window).scroll(function () {
    // отступ сверху
    top = $(this).scrollTop();
    if ((h_hght - top) <= h_nav) {
      $('#top_nav').css('top', '0');
    }
    else if (top < h_hght && top > 0) {
      $('#top_nav').css({ 'bottom': top, 'top': '' });
    }
    else if (top < h_nav) {
      $('#top_nav').css({ 'top': '', 'bottom': '0' });
    }
  }); 

});


//смена фона липкого меню
$(window).scroll(function () {
  if ($(document).scrollTop() > 100) {
    $(".navigation").addClass("scrolling");
    $(".main-menu").addClass("scrolling");
    $(".menu-link").addClass("scrolling");
    $(".nav-burger").addClass("scrolling");
    $(".nav-container").addClass("scrolling");
  } else {
    $(".navigation").removeClass("scrolling");
    $(".main-menu").removeClass("scrolling");
    $(".menu-link").removeClass("scrolling");
    $(".nav-nav-burger").removeClass("scrolling");
    $(".nav-container").addClass("scrolling");
  }
});


