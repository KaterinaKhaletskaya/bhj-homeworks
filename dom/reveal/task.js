document.addEventListener('scroll', function() {

	const reveal = document.getElementsByClassName('reveal');


	for (let i = 0; i < reveal.length; i++) {
		let resultTop = reveal[i].getBoundingClientRect().top;
		let resultBottom = reveal[i].getBoundingClientRect().bottom;
		if ((resultTop < window.innerHeight) && (resultBottom > window.innerHeight)) {
			reveal[i].classList.add('reveal_active');
		}
	}


})
  