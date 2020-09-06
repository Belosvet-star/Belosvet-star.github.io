$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      /* navText : ["",""], */
      navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"],
      dots: false,
      responsive:{
         320:{
            items:1
         },
         842:{
            items:2
         }, 
         1024:{
            items:2
         }

      }
   });

 });

 new WOW().init();

$('.popup-with-form').magnificPopup({
   type: 'inline',
   focus: '#name'
});

/* Валидация формы регистрации */
function isEmail(email) {
  
   var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

   return regex.test(email);
   
}


$(document).ready(function(){
    $('#form-popup').validate({
        rules: {
            login: {
                required: true,
                minlength:3
            },
            email: {
                required: true,
                email: true
            },

        },
        messages: {
            login: {
                required: "Поле 'Имя' обязательно к заполнению",
                minlength: "Введите не менее 3-х символов в поле 'Имя'"
            },
            email: {
                required: "Поле 'Email' обязательно к заполнению",
                email: "Необходим формат адреса email" 
            },

        }
    });
    $('#form-login').validate({
        rules: {
            email: {
                required: true,
                email: true
            },

        },
        messages: {
            email: {
                required: "Поле 'Email' обязательно к заполнению",
                email: "Необходим формат адреса email" 
            },

        }
    });
}); 
jQuery(function($){
    $("#phone").mask("(999) 999-99-99");
 });