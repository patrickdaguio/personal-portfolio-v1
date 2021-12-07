// Navbar Active State
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.header__nav__list__link');

// Navbar Hide Scroll
let lastScrollTop;
const header = document.querySelector('.header');
window.addEventListener('scroll', function () {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		header.classList.add('header-scroll');
	} else {
		header.classList.remove('header-scroll');
	}
	if (window.scrollY != 0) header.classList.add('header-top');
	else header.classList.remove('header-top');

	lastScrollTop = scrollTop;

	let current = '';

	sections.forEach(section => {
		const sectionTop = section.offsetTop;
		if (scrollY >= sectionTop - 550) {
			current = section.getAttribute('id');
		}
	});

	navbarLinks.forEach(link => {
		link.classList.remove('header__nav__list__link--active');
		if (link.classList.contains(current))
			link.classList.add('header__nav__list__link--active');
	});
});

// Theme Changer
const themeBtn = document.querySelector('.theme-changer');
const body = document.querySelector('body');

themeBtn.addEventListener('click', () => {
	if (body.classList[0] == 'theme--dark') {
		body.style.backgroundColor = '#fff';
		body.classList.replace('theme--dark', 'theme--light');
	} else {
		body.style.backgroundColor = '#171717';
		body.classList.replace('theme--light', 'theme--dark');
	}
	body.classList.toggle('scroll-bar');
});
