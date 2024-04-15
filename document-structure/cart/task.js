const controlDec = Array.from(document.getElementsByClassName('product__quantity-control product__quantity-control_dec'));
const controlInc = Array.from(document.getElementsByClassName('product__quantity-control product__quantity-control_inc'));
const productValue = document.querySelectorAll('.product__quantity-value');

for (let inc of controlInc) {
	inc.addEventListener('click', () => {
		let index = controlInc.indexOf(inc);
		productValue[index].textContent = (Number(productValue[index].innerText)) + 1;

	})
}
for (let dec of controlDec) {
	dec.addEventListener('click', () => {
		let index = controlDec.indexOf(dec);

		let newValue = (Number(productValue[index].innerText)) - 1;
		if (newValue === 0) {
			newValue = 1;
		}
		productValue[index].textContent = newValue;

	})
}
const productAdd = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart__products');

const products = Array.from(document.querySelectorAll('.product'));


for (let add of productAdd) {
	let index = productAdd.indexOf(add);
	add.addEventListener('click', () => {

		const cartProducts = Array.from(document.querySelectorAll('.cart__product'));

		const productInCard = cartProducts.find((elem) =>  elem.dataset.id === products[index].dataset.id);
		
        if (productInCard) {

			let count = productInCard.children[1];
			let countNew = productValue[index].textContent;
			let newCount = ((Number(count.textContent)) + (Number(countNew))).toString();

			count.textContent = newCount;
		} else {
			cart.insertAdjacentHTML("afterBegin",
				"<div class='cart__product' data-id=''><img class='cart__product-image' src=''><div class='cart__product-count'></div></div>"
			);

			let cartProduct = document.querySelector('.cart__product');
			let image = document.querySelector('.cart__product-image');
			let count = document.querySelector('.cart__product-count');

			count.textContent = productValue[index].textContent;
			cartProduct.dataset.id = products[index].dataset.id;
			image.src = products[index].children[1].src;
		}


	})
}