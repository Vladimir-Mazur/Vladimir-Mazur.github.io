/*jslint browser: true */
window.onload = function () {
	
	function price(shoes, option) {
		let virgin_count = document.getElementById("number").value
		let count = parseInt(virgin_count)
		let price = parseInt(shoes.getAttribute("value"))
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
	  
			

	let shoes1 = document.getElementById("shoes1")
	let shoes2 = document.getElementById("shoes2")
	let shoes3 = document.getElementById("shoes3")
	let options = document.getElementById("options")
	let check = document.getElementById("check")
	let checked = document.getElementById("checked")
	let option = document.getElementById("option")
	let count = document.getElementById("number")
	let flag = 0
	

	shoes1.addEventListener("click", function () {
		options.className = "invisible"
		check.className = "invisible"
		option.value = "0"
		checked.checked = false
		flag = 1
		price(shoes1, option)
	})
	shoes2.addEventListener("click", function () {
		options.className = "visible"
		check.className = "invisible"
		checked.checked = false
		flag = 2
		price(shoes2, option)
	})
	shoes3.addEventListener("click", function () {
		options.className = "invisible"
		check.className = "visible"
		option.value = "0"
		checked.checked = false
		flag = 3
		price(shoes3, option)
	})
	shoes4.addEventListener("click", function () {
		options.className = "invisible"
		check.className = "visible"
		option.value = "0"
		checked.checked = false
		flag = 4
		price(shoes4, option)
	})
	options.addEventListener("change", function () {
		price(shoes2, option)
	})
	checked.addEventListener("click", function () {
		price(shoes3, option)
	})
	options.addEventListener("click", function () {
		price(shoes4, option)
	})
	count.addEventListener("input", function () {
		if (flag == 1) {
			price(shoes1, option)
		} else if (flag == 2) {
			price(shoes2, option)
		} else if (flag == 3) {
			price(shoes3, option)
		} else if (flag == 4) {
			price(shoes4, option)
		}
	})
}