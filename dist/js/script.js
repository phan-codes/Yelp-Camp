const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('mouseover', () => {
	menu.classList.add('flex');
	menu.classList.remove('hidden');

	menu.addEventListener('mouseover', () => {
		menu.classList.add('flex');
		menu.classList.remove('hidden');
	});
	menu.addEventListener('mouseout', () => {
		menu.classList.remove('flex');
		menu.classList.add('hidden');
	});
});

hamburger.addEventListener('mouseout', () => {
	menu.classList.remove('flex');
	menu.classList.add('hidden');
});
