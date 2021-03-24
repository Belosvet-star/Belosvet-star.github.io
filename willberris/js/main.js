  
const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});


//cart корзина
const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const modalClose = document.querySelector('.modal-close');

const openModal = function(){
	modalCart.classList.add('show');
}
const closeModal = function(){
	modalCart.classList.remove('show');
}

buttonCart.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

modalCart.addEventListener('click', function(event) {
	const target = event.target;
	if (target.classList.contains('overlay') || //contains - проверка на наличие класса
		target.classList.contains('modal-close')) {
		closeModal()
	}
});

//плавная прокрутка scrill smooth? по с тандарту быстро проскакивает
//получим все ссылки у кот класс scrolllink


/* (function(){
	const scrollLinks = document.querySelectorAll('a.scroll-link');
	for (let i = 0; i < scrollLinks.length; i++) {
		scrollLinks[i].addEventListener('click', function(event){
			event.preventDefault();
			const id = scrollLinks[i].getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
			console.log(id);
		});
	}
})() */

//это то же, что и выше, но по другому
(function(){
	const scrollLinks = document.querySelectorAll('a.scroll-link');

	for (scrollLink of scrollLinks) {
		scrollLink.addEventListener('click', function(event){
			event.preventDefault();
			const id = scrollLink.getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
			console.log(id);

		});
	}
})()

//goods товары
// const more = document.querySelector('.more');
const longGoodsList = document.querySelector('.long-goods-list');
const viewAll = document.querySelectorAll('.view-all');
const navigationLink = document.querySelectorAll('.navigation-link:not(.view-all)');
const showAcsessories = document.querySelectorAll('.show-acsessories');
const showClothing = document.querySelectorAll('.show-clothing');


//функци, кот будет получать товары с сервера. У нас этол папка db и обычно это файл json

const getGoods = async function() {
	const result = await fetch('db/db.json'); //тут может быть урл адрес такого файла
	//console.log(result);
	if(!result.ok) {
		throw 'ошибочка вышла:  ' + result.status
	}
	return await result.json();
};

/* getGoods().then(function(data){
	console.log(data)
}); */
//console.log(getGoods());

//выводить карточки.
//вначале их создаем
const createCard = function (objCard) {
	const card = document.createElement('div');
	card.className = 'col-lg-3 col-sm-6'

	const {label, name, img, description, id, price} = objCard; //деструктуризация

	card.innerHTML = `
		<div class="goods-card">
			${label ?
				'<span class="label">${label}</span>' :
				''}
			<img
				src="db/${img}"
				alt="${name}"
				class="goods-image"
			/>
			<h3 class="goods-title">${name}</h3>
			<p class="goods-description">${description}</p>
			<button class="button goods-card-btn add-to-cart" data-id="${id}">
				<span class="button-price">$${price}</span>
			</button>
		</div>
	`; //`` где ё это обратные кавычки - это шаблонныу строки, комментарии можно тут убрать

	return card;
};

//показ этих карточек на странице
const renderCards = function(data) {
	longGoodsList.textContent = ''; 
	const cards = data.map(createCard);
	longGoodsList.append(...cards);
	document.body.classList.add('show-goods')
};

const ahowAll =  function(event){
	event.preventDefault();
	getGoods().then(renderCards);
};
viewAll.forEach(function(elem){
	elem.addEventListener('click', function(event){
		event.preventDefault();
		getGoods().then(renderCards);
	});

});


//фильтруем карточки по фенскому, мужсткому еще какому-то
const filterCards = function(field, value){
	getGoods()
	.then(function (data) {
		const filteredGoods = data.filter(function(good) {
			return good[field] === value
		});
		return filteredGoods;
	})
	.then(renderCards);
};

navigationLink.forEach(function (link) {
	link.addEventListener('click', function(event) {
		event.preventDefault();
		//console.log(link);
		const field = link.dataset.field;
		const value = link.textContent;
		//console.log(field, value);
		filterCards(field, value);
	})
});


showAcsessories.forEach(item => {
	item.addEventListener('click', e => {
		e.preventDefault();
		filterCards('category', 'Accessories');
	});
});

showClothing.forEach(item => {
	item.addEventListener('click', e => {
		e.preventDefault();
		filterCards('category', 'Clothing');
	});
});
