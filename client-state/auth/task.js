const signinForm = document.getElementById('signin__form');
const userId = document.getElementById('user_id');
const welcome = document.querySelector('.welcome');
const signin = document.querySelector('.signin');

if (window.localStorage.id) {
	signin.classList.remove('signin_active');
	welcome.classList.add('welcome_active');

	userId.textContent = localStorage.id;
}
signinForm.addEventListener('submit', (e) => {

	e.preventDefault();
	let xhr = new XMLHttpRequest();
	let formData = new FormData(document.forms.signin__form);

	xhr.open('POST', signinForm.action);
	xhr.responseType = "json";
	xhr.send(formData);


	xhr.onload = function() {
		if (xhr.response.success === true) {
			window.localStorage.setItem('id', xhr.response.user_id);

			userId.textContent = xhr.response.user_id;


			welcome.classList.add('welcome_active');


			signin.classList.remove('signin_active');
		} else {
			alert("Неверный логин/пароль");
		}
	};



})