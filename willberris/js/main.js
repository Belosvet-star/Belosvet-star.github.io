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
const longGoodsList = document.querySelector('.long-goods-list');
const viewAll = document.querySelectorAll('.view-all');
const navigationLink = document.querySelectorAll('.navigation-link:not(.view-all)');
const showAcsessories = document.querySelectorAll('.show-acsessories');
const showClothing = document.querySelectorAll('.show-clothing');
const cartCount = document.querySelector('.cart-count');

const checkGoods = () => {

	const data = [];

	return async () => {
		//console.log(data);
		if(data.length) return data;
		const result = await fetch('db/db.json'); //тут может быть урл адрес такого файла
		if (!result.ok) {
				throw 'ошибочка вышла:  ' + result.status
			}
			data.push(...(await result.json())) ;

			return data
	};
};

const getGoods = checkGoods()


const openModal = () => {
	modalCart.classList.add('show');
	cart.renderCart();
}
const closeModal = () => {
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

//плавная прокрутка scroll smooth, по с тандарту быстро проскакивает
//получим все ссылки у кот класс scrolllink



//это то же, что и выше, но по другому
(function(){
	const scrollLinks = document.querySelectorAll('a.scroll-link');

	for (scrollLink of scrollLinks) {
		scrollLink.addEventListener('click', event => {
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



//функци, кот будет получать товары с сервера. У нас этол папка db и обычно это файл json



//выводить карточки.
//вначале их создаем

const createCard = function (objCard) {
	const card = document.createElement('div');
	card.className = 'col-lg-3 col-sm-6';
	const {label, img, name, description, id, price} = objCard;
	card.innerHTML = `
	<div class="goods-card">
	${label ? `<span class="label">${label}</span>` : ''}
		<img src="db/${img}" alt="${name}" class="goods-image">
		<h3 class="goods-title">${name}</h3>
		<p class="goods-description">${description}</p>
		<button class="button goods-card-btn add-to-cart" data-id="${id}">
			<span class="button-price">$${price}</span>
		</button>
	</div>
	`;
	//`` где ё это обратные кавычки - это шаблонныу строки, комментарии можно тут убрать
	return card;
}



//показ этих карточек на странице
const renderCards = function(data) {
	longGoodsList.textContent = ''; 
	const cards = data.map(createCard);
	longGoodsList.append(...cards);
	document.body.classList.add('show-goods')
};

const showAll =  event => {
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
		.then(data => data.filter(good => good[field] === value	))
		.then(renderCards);
};

navigationLink.forEach(function (link) {
	link.addEventListener('click', event => {
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

// корзина в всплывающем окне по методике es6
const cartTableGoods = document.querySelector('.cart-table__goods');
const cardTableTotal = document.querySelector('.card-table__total');

const btnDanger = document.querySelector('.btn-danger');

const cart = {
	//cartGoods: [],
	
	cartGoods: [],
	/* cartGoods: [
		{
			id: "099",
			name: "часы",
			price: 1000,
			count: 1,
		},
		{
			id: "0100",
			name: "кеды какие-то",
			price: 10,
			count: 5,
		},
	], */
	countQuantity() {
		const count = this.cartGoods.reduce((sum, item) => {
			return sum + item.count
		}, 0)
		cartCount.textContent = count ? count : '';
	},
	clearCart() {
		console.log(this);
		this.cartGoods.length = 0;
		this.countQuantity();
		this.renderCart();
	},
	renderCart(){
		cartTableGoods.textContent = '';
		this.cartGoods.forEach(({id, name, price, count}) => {
			const trGood = document.createElement('tr');
			trGood.className = 'cart-item';
			trGood.dataset.id = id;
// это один вариант удаления с data-id
			/* trGood.innerHTML = `
				<td>${name}</td>
				<td>${price}$</td>
				<td><button class="cart-btn-minus" data-id="${id}">-</button></td>
				<td>${count}</td>
				<td><button class="cart-btn-plus" data-id="${id}">+</button></td>
				<td>${price * count}$</td>
				<td><button class="cart-btn-delete" data-id="${id}">x</button></td>
			`;
			cartTableGoods.append(trGood); */
			trGood.innerHTML = `
				<td>${name}</td>
				<td>${price}$</td>
				<td><button class="cart-btn-minus" >-</button></td>
				<td>${count}</td>
				<td><button class="cart-btn-plus" >+</button></td>
				<td>${price * count}$</td>
				<td><button class="cart-btn-delete" >x</button></td>
			`;
			cartTableGoods.append(trGood);
		});

		const totalPrice = this.cartGoods.reduce((sum, item) => {
			return sum + (item.price * item.count);
		}, 0);
		cardTableTotal.textContent = totalPrice + '$'

	},
	deleteGood(id) {
		this.cartGoods = this.cartGoods.filter(item => id !== item.id);
		this.countQuantity()
		this.renderCart();
	},// эта строчка вместо foo(param){}
	minusGood(id) {
		for (const item of this.cartGoods) {
			if (item.id === id) {
				if (item.count <= 1) {
					this.deleteGood(id)
				} else {
					item.count--;
				}
				break;
			}
		}
		this.countQuantity()
		this.renderCart();
	},
	plusGood(id) {
		for(const item of this.cartGoods) {
			if (item.id === id) {
				item.count++;
				break;
			}
		}
		this.countQuantity()
		this.renderCart();
	},
	addCartGoogs(id){
		const goodItem = this.cartGoods.find(item => item.id === id);
		if (goodItem) {
			this.plusGood(id);
		} else {
			getGoods()
			.then(data => data.find(item => item.id === id))
			.then(({id, name, price }) => {
				this.cartGoods.push({
					id,
					name,
					price,
					count: 1
				});
				this.countQuantity()
			});
		}
	},
}

btnDanger.addEventListener('click', () => {
	cart.clearCart()
})

//cart.addCartGoogs('021');
document.body.addEventListener('click', event => {
	const addToCart = event.target.closest('.add-to-cart');
	if (addToCart) {
		cart.addCartGoogs(addToCart.dataset.id)
	}
})

cartTableGoods.addEventListener('click', event => {
	const target = event.target;

	if(target.tagName === "BUTTON") {
		const id = target.closest('.cart-item').dataset.id;

		if (target.classList.contains('cart-btn-delete')) {
		//cart.deleteGood(target.dataset.id); // это один вариант удаления с data-id
		
			cart.deleteGood(id);
		};
		if (target.classList.contains('cart-btn-minus')) {
			
			cart.minusGood(id);
		};
		if (target.classList.contains('cart-btn-plus')) {
			
			cart.plusGood(id);
		};
	}
	
});

// 4 день
const modalForm = document.querySelector('.modal-form');

const postData = dataUser => fetch('./server.php', {
	method: 'POST',
	body: dataUser,
});

const validForm = (formData) => {
	let valid = false;

	for (const [value, name] of formData) {
		if (value.trim()) {
			valid = true;
		}else {
			valid = false;
			break;
		}
	}
	return valid;
}

modalForm.addEventListener('submit', event => {
	event.preventDefault();

	const formData = new FormData(modalForm);

	

	formData.append('cart', JSON.stringify(cart.cartGoods))

	postData(formData)
	.then(response => {
		if (!response.ok) {
			throw new Error(response.status);
		}
		alert('Ваш заказ успешно отправлен, с вами свяжутся в ближайшее время');
		console.log(response.statusText);
	})
	.catch(err => {
		alert('К сожалению произошла ошибка, повторите позже');
		console.error(err);
	})
	.finally(() => {
		closeModal();
		modalForm.reset();
		cart.clearCart();
	});
});






















