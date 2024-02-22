/*jslint browser: true */
window.onload = function () {
	let btn_price = document.getElementById("get_shoes");
	btn_price.addEventListener("click", function (e) {
		e.preventDefault();
		let shoes = document.getElementById("shoes");
		let count = document.getElementById("number").value;
		let priceEl = shoes.options[shoes.selectedIndex];
		let price = priceEl.getAttribute("data-price");
		let basket = document.getElementById("sum");
		
		if (/^\d+$/.test(count)) {
			basket.innerHTML = price * count + "₽";
		} else {
			basket.innerHTML = "";
		}
	});
};