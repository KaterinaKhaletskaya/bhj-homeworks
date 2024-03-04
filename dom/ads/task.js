const rotatorCase = document.querySelectorAll('.rotator__case');
let index = 0;

setInterval(() => {
	rotatorCase[index].classList.remove('rotator__case_active');
	index++;
	if (index === rotatorCase.length) {
		index = 0;
	}
	rotatorCase[index].classList.add('rotator__case_active');
}, 1000);