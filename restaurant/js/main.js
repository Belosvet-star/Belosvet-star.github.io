//МЕНЮ
(function ($) { // Begin jQuery
  $(function () { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function () {
      $('nav ul').slideToggle();
      $('.bod').toggleClass(' over');
      $('.navigation').toggleClass(' height');
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function () {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

//INITIALIZE AOS
AOS.init();

//swiper
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  speed: 500,
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


//прокрутка кнопка вверх
$(document).ready(function () {
  var btn = $('#button-up');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
});