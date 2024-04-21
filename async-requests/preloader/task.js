let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = "json";
xhr.send();


xhr.onload = function() {

	const loaderActiv = document.querySelector('.loader');
	if (xhr.readyState === xhr.DONE && xhr.status === 200) {
		loaderActiv.classList.remove('loader_active');
	}

	let valute = xhr.response.response.Valute;
	for (let key in valute) {
		if (valute.hasOwnProperty(key)) {
			const item = document.querySelector('.item');
			item.insertAdjacentHTML("afterEnd",
				"<div class='item'><div class='item__code'></div> <div class='item__value'></div> <div class='item__currency'>руб.</div></div>"
			);
			let charCode = valute[key].CharCode;
			let valueList = valute[key].Value;

			const code = document.querySelector('.item__code');
			code.textContent = charCode;
			const value = document.querySelector('.item__value');
			value.textContent = valueList;
		}
	}
}