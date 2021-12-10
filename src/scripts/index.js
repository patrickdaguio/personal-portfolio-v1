import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import baffle from 'baffle';

gsap.registerPlugin(ScrollTrigger);

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

// Heading Animation

const heading = baffle('.hero__caption');
heading.set({
	characters: '▒<▓ ▓█//< ▓>▒▒/ ▒>▒ ▓▒░█▒ ▒▒▒█ █░█ ░▓░/ ▓▒▓█',
	speed: 50
});
heading.start();

setTimeout(() => heading.reveal(4000), 4300);

// Logo Animation

const logoPaths = document.querySelectorAll('.logo path');

const tlHome = gsap.timeline({
	defaults: {
		duration: 0.5,
		ease: 'power4.easeInAndOut'
	}
});

tlHome
	.to(logoPaths[0], { duration: 2, strokeDashoffset: 0 })
	.to(logoPaths[1], { duration: 2, strokeDashoffset: 0 }, 0.8)
	.to('.logo', { fill: 'white' }, 1.6)
	.to('.logo', { duration: 0.1, scale: 0, transformOrigin: '50% 50%' }, 2.2)
	.to(
		'.loader',
		{
			opacity: 0,
			visibility: 'hidden',
			zIndex: '-1'
		},
		2.6
	)
	.to('body', { overflow: 'auto' }, 2.6)

	.from(
		'.header__logo',
		{
			scale: 0
		},
		2.4
	)
	.to(
		'.container',
		{
			opacity: 1,
			visibility: 'visible',
			zIndex: '5'
		},
		2.7
	)
	.from(
		'.header__nav__list__item',
		{
			opacity: 0,
			translateY: '-25px',
			stagger: 0.2
		},
		2.9
	)
	.from(
		'#particles-js',
		{
			opacity: 0
		},
		3.9
	)
	.from(
		[
			'.hero__intro',
			'.hero__name',
			'.hero__caption',
			'.hero__desc',
			'.hero__btn-wrapper'
		],
		{
			opacity: 0,
			translateY: '15px',
			stagger: 0.2
		},
		4.1
	)
	.from(
		'.sidebar',
		{
			opacity: 0,
			translateY: '50px'
		},
		5.2
	);

let tlAbout = gsap.timeline({
	scrollTrigger: {
		trigger: '.about',
		start: 'top 100%'
	}
});

tlAbout
	.from('.about__heading', {
		opacity: 0
	})
	.from(
		'.about__tools__heading',
		{
			opacity: 0
		},
		'-=0.3'
	)
	.from(
		'.about__details',
		{
			opacity: 0
		},
		0.3
	)
	.from(
		'.about__tools__tool',
		{
			opacity: 0,
			stagger: 0.1
		},
		0
	);

const portfolioProject = document.querySelectorAll('.portfolio__project');

gsap.from('.portfolio', {
	scrollTrigger: {
		trigger: '.about',
		start: 'bottom center'
	},
	opacity: 0
});

gsap.from(portfolioProject[0], {
	scrollTrigger: {
		trigger: '.portfolio__heading',
		start: 'top center'
	},
	opacity: 0
});

gsap.from(portfolioProject[1], {
	scrollTrigger: {
		trigger: portfolioProject[0],
		start: 'top center'
	},
	opacity: 0,
	delay: 0.1
});

gsap.from(portfolioProject[2], {
	scrollTrigger: {
		trigger: portfolioProject[1],
		start: 'top center'
	},
	opacity: 0,
	delay: 0.1
});

gsap.from(portfolioProject[3], {
	scrollTrigger: {
		trigger: portfolioProject[2],
		start: 'top center'
	},
	opacity: 0,
	delay: 0.1
});

let tlContact = gsap.timeline({
	scrollTrigger: {
		trigger: '.contact',
		start: '25% 75%'
	}
});

tlContact
	.from('.contact__message-wrapper', {
		opacity: 0
	})
	.from('.contact__form-wrapper', { opacity: 0 }, '-=0.5')
	.from('.footer', { opacity: 0 }, '-=0.5');

// Landing Pages Projects

const landingPageProjects = document.querySelectorAll(
	'.portfolio__project__choices__choice'
);

const landingPageImage = document.querySelectorAll(
	'.portfolio__project__image'
);
const landingPageLink = document.querySelector(
	'.portfolio__project__link--link'
);
const landingPageGit = document.querySelector('.portfolio__project__link--git');
const carouselSlide = document.querySelector('.portfolio__project__carousel');

landingPageProjects.forEach((proj, i) => {
	proj.addEventListener('click', () => {
		const size = landingPageImage[0].clientWidth;
		switch (i) {
			case 0:
				carouselSlide.style.transform = 'translateX(' + -size * 0 + 'px)';
				landingPageLink.href = 'https://bookmark-landing-page-phi.vercel.app/#';
				landingPageGit.href =
					'https://github.com/patrickdaguio/bookmark-landing-page';
				break;
			case 1:
				carouselSlide.style.transform = 'translateX(' + -size * 1 + 'px)';
				landingPageLink.href = 'https://shoe-product-landing-page.vercel.app/#';
				landingPageGit.href =
					'https://github.com/patrickdaguio/shoe-product-landing-page';
				break;
			case 2:
				carouselSlide.style.transform = 'translateX(' + -size * 2 + 'px)';
				landingPageLink.href = 'https://flyo-landing-page-dark.vercel.app/';
				landingPageGit.href =
					'https://github.com/patrickdaguio/flyo-landing-page-dark';
				break;
		}
		landingPageProjects.forEach(btn => {
			btn.classList.remove('portfolio__project__choices__choice--active');
		});
		proj.classList.add('portfolio__project__choices__choice--active');
	});
});
