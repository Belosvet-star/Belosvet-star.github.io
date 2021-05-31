$(function() {
	let $mobilePopup = $('.mobile__popup');
	
	$(".mobile__menu-trigger, .mobile__menu-close").click(function(){
		$mobilePopup.slideToggle(300, function(){
			if ($mobilePopup.is(':hidden')) {
				$('body').removeClass('body_pointer');
			} else {
				$('body').addClass('body_pointer');
			}					
		});  
		return false;
	});			
	
	$(document).on('click', function(e){
		if (!$(e.target).closest('.menu').length){
			$('body').removeClass('body_pointer');
			$mobilePopup.slideUp(300);
		}
	});
});

$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
		let windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
	});
	
	//Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
//модалка
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	//пункты меню
 $('ul#mylist>li>a').click(function(){
			$('ul#mylist>li>a').removeClass('item-active').addClass('item-inactive');  // У всех ссылок срезаем класс активности, и всем присваиваем класс неактивности
			$(this).removeClass('item-inactive').addClass('item-active');           // И т/о данной ссылке установим класс активности 
			//return false; // Отменить стандартное поведение ссылок -> т.е. ссылки перестанут быть таковыми, а станут рядовыми элементами DOM (м/о закоменнтить)
	});
});
  
new WOW().init(); 

//обрезка текста до сколько надо символов
let size = 250,
    newsContent= $('.news-content'),
    newsText = newsContent.text();
    if(newsText.length > size){
	newsContent.text(newsText.slice(0, size) + ' ...');
}