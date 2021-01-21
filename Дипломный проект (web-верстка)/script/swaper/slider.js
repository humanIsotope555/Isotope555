const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints:{
		990:{
			slidesPerView: 2,
			spaceBetween: 30,
		},

		1301:{
			slidesPerView: 3,
			spaceBetween: 30,
		},

	}
})
