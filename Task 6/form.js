/*jslint browser: true */
window.onload = function () {
	
	function price(good, option) {
		let virgin_count = document.getElementById("number").value
		let count = parseInt(virgin_count)
		let price = parseInt(good.getAttribute("value"))
		let optionValue = parseInt(option.value)
		let price_sum = document.getElementById("sum")
		let out = (price + optionValue) * count
		let checked = document.getElementById("checked")

		if (checked.checked) {
			out += 1000
		}
		if (!isNaN(count) && !isNaN(price) && virgin_count > 0 && !(typeof virgin_count == 'number')) {
		  price_sum.innerHTML = out + "₽"
		} else {
		  price_sum.innerHTML = "0₽"
		}
	  }
	  
			

	let good1 = document.getElementById("good1")
	let good2 = document.getElementById("good2")
	let good3 = document.getElementById("good3")
	let options = document.getElementById("options")
	let check = document.getElementById("check")
	let checked = document.getElementById("checked")
	let option = document.getElementById("option")
	let count = document.getElementById("number")
	let flag = 0
	

	good1.addEventListener("click", function () {
		options.className = "invisible"
		check.className = "invisible"
		option.value = "0"
		checked.checked = false
		flag = 1
		price(good1, option)
	})
	good2.addEventListener("click", function () {
		options.className = "visible"
		check.className = "invisible"
		checked.checked = false
		flag = 2
		price(good2, option)
	})
	good3.addEventListener("click", function () {
		options.className = "invisible"
		check.className = "visible"
		option.value = "0"
		checked.checked = false
		flag = 3
		price(good3, option)
	})
	options.addEventListener("change", function () {
		price(good2, option)
	})
	checked.addEventListener("click", function () {
		price(good3, option)
	})
	count.addEventListener("input", function () {
		if (flag == 1) {
			price(good1, option)
		} else if (flag == 2) {
			price(good2, option)
		} else if (flag == 3) {
			price(good3, option)
		}
	})
}