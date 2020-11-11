new WOW().init();

// пагинатор
$(document).ready(function ($) {
  redrawDotNav();
$(window).bind("scroll", function (e) {
  redrawDotNav();
});
  $(".n_1").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });
  $(".n_2").click(function () {
    $("html, body").animate({ scrollTop: $("#b_2").offset().top }, 1000);
    return false;
  });
  $(".n_3").click(function () {
    $("html, body").animate({ scrollTop: $("#b_3").offset().top }, 1000);
    return false;
  });
  $(".n_4").click(function () {
    $("html, body").animate({ scrollTop: $("#b_4").offset().top }, 1000);
    return false;
  });
  $(".n_5").click(function () {
    $("html, body").animate({ scrollTop: $("#b_5").offset().top }, 1000);
    return false;
  });
  $(".n_6").click(function () {
    $("html, body").animate({ scrollTop: $("#b_6").offset().top }, 1000);
    return false;
  });
  $(".n_7").click(function () {
    $("html, body").animate({ scrollTop: $("#b_7").offset().top }, 1000);
    return false;
  });
  $(".n_8").click(function () {
    $("html, body").animate({ scrollTop: $("#b_8").offset().top }, 1000);
    return false;
  });
  $(".n_9").click(function () {
    $("html, body").animate({ scrollTop: $("#b_9").offset().top }, 1000);
    return false;
  });
  $(".n_10").click(function () {
    $("html, body").animate({ scrollTop: $("#b_10").offset().top }, 1000);
    return false;
  });
  $(".n_11").click(function () {
    $("html, body").animate({ scrollTop: $("#b_11").offset().top }, 1000);
    return false;
  });

  $("#fix_nv a").hover(
    function () {
      $(this).prev("span").show();
    },
    function () {
      $(this).prev("span").hide();
    }
  );
});
function redrawDotNav() {
  var section1Top = 0;
  var section2Top =
    $("#b_2").offset().top -
    ($("#b_3").offset().top - $("#b_2").offset().top) / 2;
  var section3Top =
    $("#b_3").offset().top -
    ($("#b_4").offset().top - $("#b_3").offset().top) / 2;
  var section4Top =
    $("#b_4").offset().top -
    ($("#b_5").offset().top - $("#b_4").offset().top) / 2;
  var section5Top =
    $("#b_5").offset().top -
    ($("#b_6").offset().top - $("#b_5").offset().top) / 2;
  var section6Top =
    $("#b_6").offset().top -
    ($("#b_7").offset().top - $("#b_6").offset().top) / 2;
  var section7Top =
    $("#b_7").offset().top -
    ($("#b_8").offset().top - $("#b_7").offset().top) / 2;
  var section8Top =
    $("#b_8").offset().top -
    ($("#b_9").offset().top - $("#b_8").offset().top) / 2;
  var section9Top =
    $("#b_9").offset().top -
    ($("#b_10").offset().top - $("#b_9").offset().top) / 2;
  var section10Top =
    $("#b_10").offset().top -
    ($("#b_11").offset().top - $("#b_10").offset().top) / 2;  
  var section11Top =
    $("#b_11").offset().top -
    ($(document).height() - $("#b_11").offset().top) / 2;
    $("#fix_nv a").removeClass("actv_b");
  
  if (
    $(document).scrollTop() >= section1Top &&
    $(document).scrollTop() < section2Top
  ) {
    $("#fix_nv a.n_1").addClass("actv_b");
  } else if (
    $(document).scrollTop() >= section2Top &&
    $(document).scrollTop() < section3Top
  ) {
    $("#fix_nv .n_2").addClass("actv_b");
  } else if (
    $(document).scrollTop() >= section3Top &&
    $(document).scrollTop() < section4Top
  ) {
    $("#fix_nv .n_3").addClass("actv_b");
  } else if (
    $(document).scrollTop() >= section4Top &&
    $(document).scrollTop() < section5Top
  ) {
    $("#fix_nv .n_4").addClass("actv_b");
  } else if (
    $(document).scrollTop() >= section5Top &&
    $(document).scrollTop() < section6Top
  ) {
    $("#fix_nv .n_5").addClass("actv_b");
  } else if (
    $(document).scrollTop() >= section6Top &&
    $(document).scrollTop() < section7Top
  ) {
    $("#fix_nv .n_6").addClass("actv_b");
  } else if (
    $(document).scrollTop() >= section7Top &&
    $(document).scrollTop() < section8Top
  ) {
    $("#fix_nv .n_7").addClass("actv_b");
  } else if (
    $(document).scrollTop() >= section8Top &&
    $(document).scrollTop() < section9Top
  ) {
    $("#fix_nv .n_8").addClass("actv_b");
  } else if (
    $(document).scrollTop() >= section9Top &&
    $(document).scrollTop() < section10Top
  ) {
    $("#fix_nv .n_9").addClass("actv_b");
  } else if (
    $(document).scrollTop() >= section10Top &&
    $(document).scrollTop() < section11Top
  ) {
    $("#fix_nv .n_10").addClass("actv_b");
  } else if ($(document).scrollTop() >= section10Top) {
    $("#fix_nv .n_11").addClass("actv_b");
  }
}



$(document).ready(function() {
   $('.galleryclick1').magnificPopup({
      tLoading: 'Загрузка изображения #%curr%...',
      items: [
         {
           src: 'img/prodaction/kon1.jpg'
         },
         {
            src: 'img/prodaction/kon2.jpg'
          },
          {
            src: 'img/prodaction/kon3.jpg'
          },
          {
            src: 'img/prodaction/kon4.jpg'
          },
          {
            src: 'img/prodaction/kon5.jpg'
          }
        
       ],
       gallery: {
         enabled: true
       },
       type: 'image' // this is default type
    });
    $('.galleryclick2').magnificPopup({
      tLoading: 'Загрузка изображения #%curr%...',
      items: [
         {
            src: 'img/prodaction/v1.jpg'
          },
          {
             src: 'img/prodaction/v2.jpg'
           },
           {
             src: 'img/prodaction/v3.jpg'
           },
           {
             src: 'img/prodaction/v4.jpg'
           }
        
       ],
       gallery: {
         enabled: true
       },
       type: 'image' // this is default type
    });
    $('.galleryclick3').magnificPopup({
      tLoading: 'Загрузка изображения #%curr%...',
      items: [
         {
            src: 'img/prodaction/ukr1.jpg'
          },
          {
             src: 'img/prodaction/ukr2.jpg'
           },
           {
             src: 'img/prodaction/ukr3.jpg'
           },
           {
             src: 'img/prodaction/ukr4.jpg'
           },
           {
             src: 'img/prodaction/ukr5.jpg'
           },
           {
            src: 'img/prodaction/ukr5.jpg'
          }
        
       ],
       gallery: {
         enabled: true
       },
       type: 'image' // this is default type
    });
});

jQuery(document).ready(function($) {
   
  $('.popup-content').magnificPopup({
    
        type: 'inline'
  });

  $('.popup-with-form').magnificPopup({
    type: 'inline',
    focus: '#name',
    
  });
  $('#submit').submit(function(e) {
    e.preventDefault();
    $('#text-popup').fadeIn();
  });
  
});


//липкое меню
jQuery(document).ready(function($){
   window.onscroll = function() {myFunction()};
   
   var navbar = document.getElementById("navbar");
   var sticky = navbar.offsetTop;
   
   function myFunction() {
     if (window.pageYOffset >= sticky) {
       navbar.classList.add("sticky")
     } else {
       navbar.classList.remove("sticky");
     }
   }
   

});


$(document).ready(function(){
  $("#form-popup").submit(function(e) { //устанавливаем событие отправки для формы с id=form
    e.preventDefault();
    var form_data = $(this).serialize(); //собераем все данные из формы
    $.ajax({
      type: "POST", //Метод отправки
      url: "mailer/smart.php", //путь до php фаила отправителя
      data: form_data,
      success: function(data) {
            //код в этом блоке выполняется при успешной отправке сообщения
            $('#text-popup').show('100');
        },
        error: function(){
          alert('error')
        },
    });
  });
});



$(document).ready(function() {
  var btn = $('#button-up');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 2000) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  
  
});