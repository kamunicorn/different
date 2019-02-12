	// изменения в меню
let menu = document.querySelector('ul.menu'),
	menuItems = document.getElementsByClassName('menu-item'),
	menuItemFive = document.createElement('li');

	// Добавить 5-й элемент меню
menuItemFive.classList.add('menu-item');
menuItemFive.innerHTML = 'Пятый пункт';
menu.appendChild(menuItemFive);

	// Упорядочить элементы в меню, поменяв местами третий и второй
menu.insertBefore(menuItems[2], menuItems[1]);
console.log(menuItems);
console.log(menu);

	// удаление рекламы
let adv = document.querySelector('.adv');
adv.remove();

	// заменить картинку фона
document.body.style.background = 'url(img/apple_true.jpg) top no-repeat';

	// добавить в заголовок слово "подлинную"
let title = document.getElementById('title');
title.innerHTML = 'Мы продаем только подлинную технику Apple';

	// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt". Через несколько секунд после открытия страницы спросим
setTimeout( () => {
	let yourOpinion,
		promptDiv = document.getElementById('prompt');
	do {
		yourOpinion = prompt('Как вы относитесь к технике Apple?', '');
	} while (yourOpinion == '' || yourOpinion == null);
	promptDiv.textContent = yourOpinion;
	// promptDiv.innerText = yourOpinion; // есть разница?
}, 2000);