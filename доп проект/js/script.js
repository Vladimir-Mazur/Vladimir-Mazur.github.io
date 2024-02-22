$(function () {
	formOpen1();
	formClose1()
	formTo2()
	formOpen2();
	formClose2()

	$(".slider").slick({
		prevArrow:
			'<button type="button" class="slick-prev"><img src="./img/arrow-left.png"></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="./img/arrow-right.png"></button>',
		adaptiveHeight: true,
		centreMode: true,
	});
});

function formOpen1() {
	$(".to-form").on("click", function () {
		if (!$("body").hasClass("active1")) {
			$("body").addClass("active1");
		}
	});
}

function formClose1() {
	$(".btn-form1").on("click", function () {
		if ($("body").hasClass("active1")) {
			$("body").removeClass("active1");
		}
	});
}

function formTo2() {
	$(".to-form2").on("click", function () {
		if ($("body").hasClass("active1")) {
			$("body").removeClass("active1");
			$("body").addClass("active2");
		}
	});
}

function formOpen2() {
	$(".btn-form2").on("click", function () {
		if (!$("body").hasClass("active2")) {
			$("body").addClass("active2");
		}
	});
}

function formClose2() {
	$(".btn-form2").on("click", function () {
		if ($("body").hasClass("active2")) {
			$("body").removeClass("active2");
		}
	});
}