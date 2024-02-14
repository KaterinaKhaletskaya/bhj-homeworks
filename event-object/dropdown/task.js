const dropdownvalue = document.querySelector('.dropdown__value');
const dropdownlist = document.querySelector('.dropdown__list');
const dropdownitem = document.getElementsByClassName('dropdown__item');
const dropdownlink = document.getElementsByClassName('dropdown__link');



dropdownvalue.addEventListener('click', function() {

	dropdownlist.classList.add('dropdown__list_active');

	for (let i = 0; i < dropdownitem.length; i++) {
		dropdownitem[i].addEventListener('click', function(evt) {
			dropdownvalue.textContent = dropdownlink[i].textContent;
			dropdownlist.classList.remove('dropdown__list_active');
            evt.preventDefault();
		})
	}
})