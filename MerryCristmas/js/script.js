$('.button-play').click(function (e) {
   e.preventDefault();
   console.log('нажато');
    $('.button-play').css("display", "none");
   //$(this).fadeOut();
   $('.audio-box').css("display", "block");
   $('.touch').css("color", "transparent");
});
