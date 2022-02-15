// Ass task modal handling
const modalTriggers = document.querySelectorAll('.modal_trigger');

modalTriggers.forEach(el => {
	el.addEventListener('click', () => {
		document.querySelector('.modal_container').classList.toggle('active');
	});
});