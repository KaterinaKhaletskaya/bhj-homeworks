const font = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

const fontSmall = document.querySelector('.font-size.font-size_small');
const fontBig = document.querySelector('.font-size.font-size_big');

font.forEach((el, index) => {
	el.addEventListener('click', (evt) => {
		font.forEach(s => s.classList.remove('font-size_active'));
		font[index].classList.add('font-size_active');
		evt.preventDefault();
		addFontSize();
	})

})

function addFontSize() {

	if (fontSmall.classList.contains('font-size_active')) {

		book.classList.remove('book_fs-big');
		book.classList.add('book_fs-small');

	}
	if (fontBig.classList.contains('font-size_active')) {

		book.classList.remove('book_fs-small');
		book.classList.add('book_fs-big');
	}

	if (!fontSmall.classList.contains('font-size_active') && !fontBig.classList.contains('font-size_active')) {
		book.classList.remove('book_fs-big');
		book.classList.remove('book_fs-small');
	}
}