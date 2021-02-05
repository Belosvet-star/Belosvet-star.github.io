$(document).ready(function () {
  const flowerSwiper = new Swiper('.flower-slider', {
     // Optional parameters
     slidesPerView: 6,
     loop: true,
   
     // Navigation arrows
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
  
     // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
  
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
  
      },
  
      // when window width is >= 992px
      992: {
        slidesPerView: 6,
  
      }
    }
   
   });
  
   const rewiesSwiper = new Swiper('.rewies-slider', {
     // Optional parameters
     slidesPerView: 1,
     loop: true,
   
     // Navigation arrows
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   
   });

  
    $("#review-1").on('click', function() {

      $.fancybox.open([
        {
          src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
          opts : {
            caption : 'First caption',
            thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
          }
        },
        {
          src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
          opts : {
            caption : 'Second caption',
            thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
          }
        }
      ], {
        loop : true,
        thumbs : {
          autoStart : true
        }
      });
    
    });
});


