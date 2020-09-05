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

$("#submitButton1").click(function() {
   
   var errorMessage = "";
   var fieldsMissing = "";
   
   if ($("#email1").val() == "") {
       
       fieldsMissing += "<br>Email";
       
   }
   
   if ($("#phone").val() == "") {
       
       fieldsMissing += "<br>Номер телефона";
       
   }
   
   if ($("#password1").val() == "") {
       
       fieldsMissing += "<br>Пароль";
       
   }
   
   if ($("#passwordConfirm").val() == "") {
       
       fieldsMissing += "<br>Подтверждение пароля";
       
   }
   
   if (fieldsMissing != "") {
       
       errorMessage += "<p>Следующие поля заполнены некорректно:" + fieldsMissing;
       
   }
   
   if (isEmail($("#email").val()) == false) {
       
       errorMessage += "<p>В email допущена ошибка</p>";
       
   }
   
   if ($.isNumeric($("#phone").val()) == false) {
       
       errorMessage += "<p>В номере телефона допускаются только цифры</p>"
       
   }
   
   if ($("#password").val() != $("#passwordConfirm").val()) {
       
       errorMessage += "<p>Ваш пароль не совпадает</p>";
       
   }
   
   if (errorMessage != "") {
       
       $("#errorMessage").html(errorMessage);
       
   } else {
       
       $("#successMessage").show();
       $("#errorMessage").hide();
       
   }
   
});
$("#submitButton2").click(function() {
   
   var errorMessage = "";
   var fieldsMissing = "";
   
   if ($("#email2").val() == "") {
       
       fieldsMissing += "<br>Email";
       
   }
   
      
   if ($("#password2").val() == "") {
       
       fieldsMissing += "<br>Пароль";
       
   }
   
   
   if (fieldsMissing != "") {
       
       errorMessage += "<p>Следующие поля заполнены некорректно:" + fieldsMissing;
       
   }
   
   if (isEmail($("#email").val()) == false) {
       
       errorMessage += "<p>В email допущена ошибка</p>";
       
   }
 
  
   if (errorMessage != "") {
       
       $("#errorMessage").html(errorMessage);
       
   } else {
       
       $("#successMessage").show();
       $("#errorMessage").hide();
       
   }
   
});