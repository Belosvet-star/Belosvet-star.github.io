new WOW().init();


var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.project-pagination',
    type: 'bullets',
    bulletClass: 'project-bullet',
    bulletActiveClass: 'project-bullet-active',
    clickable: true,
  },
});