//созд переменную, в кот положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
//созд переменную, в кот положим меню
let menu = document.querySelector('.sidebar');
//отслеживаем кклик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event){
   console.log('клик по кнопке меню');
   //отменяем стандартное поседение клка по ссылке
   event.preventDefault();
   //вешаем класс при клике
   menu.classList.toggle('visible');
})