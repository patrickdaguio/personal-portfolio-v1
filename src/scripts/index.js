// Navbar Hide Scroll
let lastScrollTop;
let header = document.querySelector('.header');
window.addEventListener('scroll', function () {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		header.classList.add('header-scroll');
	} else {
		header.classList.remove('header-scroll');
	}

	if (window.scrollY != 0) {
		header.style.backgroundColor = 'rgba(23, 23, 23, 0.85)';
		header.style.backdropFilter = 'blur(10px)';
	} else {
		header.style.backgroundColor = 'transparent';
		header.style.backdropFilter = 'none';
	}
	lastScrollTop = scrollTop;
});

// Theme Changer

let themeBtn = document.querySelector('.theme-changer');

themeBtn.addEventListener('click', () => {
	console.log(themeBtn);
});
