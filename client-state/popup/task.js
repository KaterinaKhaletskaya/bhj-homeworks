const modal = document.getElementById('subscribe-modal');
const modalActive = document.querySelector('.modal_active');
const modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', () => {
	modal.classList.remove('modal_active');
	document.cookie = 'modal=close';
})

if (document.cookie != 'modal=close') {
	modal.classList.add('modal_active');
}