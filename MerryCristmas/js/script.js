$('.button-play').click(function(){
   console.log('нажато');
    $(this).css("display", "none");
   //$(this).fadeOut();
   $('.audio-box').css("display", "block");
   $('.touch').css("display", "none");
});
