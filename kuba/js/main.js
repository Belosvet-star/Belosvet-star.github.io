// мобильное меню открывается по нажатию на кнопку
$(".menu__btn").click(function () {
  console.log('click');
  $(".menu__wrapper").toggleClass("open-menu");
});
//моб меню закрывается, если нажать где-то вне меню
$(document).mouseup(function (e) {
  var $target = $(e.target);
  if ($target.closest(".menu__wrapper").length == 0 && $target.closest(".menu__btn").length == 0) {
    $(".menu__wrapper").removeClass("open-menu");
  }
});;
//конец моб меню

const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.view-button-next',
    prevEl: '.view-button-prev',
  },
});

//липкое меню после шапки главного экрана высотой 700рх
$(function () {
  $(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top < 700) $(".header__bottom").css({ top: '0', position: 'relative' });
    else $(".header__bottom").css({ top: '0', position: 'fixed' });
  });
});
//к классу этого меню добавлены свойства
//width: 100 %;
//z-index: 999;

new WOW().init();