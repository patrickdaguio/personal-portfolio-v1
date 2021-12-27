import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import baffle from 'baffle';

gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
	dateToday();
	greetingsGenerator();
	setInterval(greetingsGenerator, 3500);
});

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
const themeBtns = document.querySelectorAll('.theme-changer');
const body = document.querySelector('body');

themeBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		if (body.classList[0] == 'theme--dark') {
			body.style.backgroundColor = '#fff';
			body.classList.replace('theme--dark', 'theme--light');
		} else {
			body.style.backgroundColor = '#171717';
			body.classList.replace('theme--light', 'theme--dark');
		}
		body.classList.toggle('scroll-bar');
	});
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
	.to(logoPaths[1], { duration: 2, strokeDashoffset: 0 }, 0.9)
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
	.to('body', { overflowY: 'auto' }, 2.6)

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

// Date Today

function dateToday() {
	let date = new Date();
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday'
	];

	const today = document.querySelector('.contact__date');
	today.textContent = `${days[date.getDay()]}`;
}

// Word Greetings Generator

let uniqueNumbersArray = [];

function generateUniqueRandom(maxNr) {
	//Generate random number
	let random = Math.floor(Math.random() * maxNr.length);
	if (!uniqueNumbersArray.includes(random)) {
		uniqueNumbersArray.push(random);
		return random;
	} else {
		if (uniqueNumbersArray.length < maxNr.length) {
			//Recursively generate number
			return generateUniqueRandom(maxNr);
		} else {
			uniqueNumbersArray = [];
			return generateUniqueRandom(maxNr);
		}
	}
}

function greetingsGenerator() {
	const adjectiveSpan = document.querySelector('.contact__adjective');
	const greetings = [
		'rad',
		'great',
		'fun',
		'beautiful',
		'phenomenal',
		'fantastic',
		'groovy',
		'bedazzling',
		'splendid',
		'positive',
		'bombastic',
		'brilliant',
		'vibey',
		'memorable',
		'dope',
		'joyful',
		'juicy'
	];
	let chosenWord = greetings[generateUniqueRandom(greetings)];
	adjectiveSpan.textContent = chosenWord;
	const adjective = baffle('.contact__adjective');
	adjective.set({
		characters: '▒<▓ ▓█//< ▓>▒▒/ ▒>▒ ▓▒░█▒ ▒▒▒█ █░█ ░▓░/ ▓▒▓█',
		speed: 100
	});
	adjective.start();
	adjective.reveal(1000);
}

const items = document.querySelectorAll('.about__details__hobbies');

items.forEach(el => {
	const image = el.querySelector('img');

	el.addEventListener('mouseenter', e => {
		gsap.to(image, { autoAlpha: 1 });
	});

	el.addEventListener('mouseleave', e => {
		gsap.to(image, { autoAlpha: 0 });
	});
});

// Hamburger Menu

const tlMobile = gsap.timeline({
	defaults: {
		duration: 0.3,
		ease: 'power4.easeInAndOut',
		onComplete: function () {
			playing = false;
		}
	}
});

let playing = false;

tlMobile
	.from('.header__menu__list__item', {
		opacity: 0,
		translateX: '250px',
		stagger: 0.1
	})
	.from(
		'.header__menu__socials__item',
		{
			translateY: '250px',
			stagger: 0.1
		},
		0.1
	);

const hamburgerMenu = document.querySelector('.header__hamburger');

hamburgerMenu.addEventListener('click', () => {
	header.classList.toggle('mobile__nav');
	body.classList.toggle('disable-scroll');
	playTl();
});

function playTl() {
	if (!playing) {
		playing = true;
		tlMobile.progress(0).play();
	}
}

const menuListItems = document.querySelectorAll('.header__menu__list__item');

menuListItems.forEach(item => {
	item.addEventListener('click', () => {
		header.classList.toggle('mobile__nav');
		body.classList.toggle('disable-scroll');
	});
});

// Contact Form Validation

const contactName = document.querySelector('.contact__form__name');
const contactEmail = document.querySelector('.contact__form__address');
const contactMsg = document.querySelector('.contact__form__message');
const contactForm = document.querySelector('.contact__form');

const inputElms = [contactName, contactEmail, contactMsg];
let isFormValid = false;
let shouldValidate = false;

const isValidEmail = email => {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const validateNameInput = () => {
	if (!shouldValidate) return;

	contactName.nextElementSibling.textContent = 'Name';
	contactEmail.nextElementSibling.textContent = 'Email';
	contactMsg.nextElementSibling.textContent = 'Message';

	if (!contactName.value) {
		contactName.nextElementSibling.textContent = 'PLEASE ENTER YOUR NAME';
	} else if (!contactEmail.value || !isValidEmail(contactEmail.value)) {
		contactEmail.nextElementSibling.textContent = 'PLEASE ENTER A VALID EMAIL';
	} else if (!contactMsg.value) {
		contactMsg.nextElementSibling.textContent = 'PLEASE ENTER A MESSAGE';
	} else {
		isFormValid = true;
	}
};

inputElms.forEach(elms => elms.addEventListener('input', validateNameInput));

let tlResponse = gsap.timeline({
	defaults: {
		duration: 1,
		ease: 'power4.easeInAndOut'
	}
});

contactForm.addEventListener('submit', e => {
	e.preventDefault();
	shouldValidate = true;
	validateNameInput();
	if (isFormValid) {
		tlResponse = gsap.timeline({
			defaults: {
				duration: 1,
				ease: 'power4.easeInAndOut'
			}
		});
		tlResponse
			.to('.contact__response', {
				autoAlpha: 1,
				display: 'block',
				x: 0
			})
			.to('.contact__response', {
				delay: 4,
				x: 1500
			})
			.to('.contact__response', {
				duration: 0.1,
				autoAlpha: 0,
				display: 'none'
			})
			.from('.contact__form-wrapper', {
				autoAlpha: 0,
				display: 'none',
				x: 0
			});
		shouldValidate = false;
		isFormValid = false;
		handleSubmit(e);
	}
});

async function handleSubmit(event) {
	let resHeading = document.querySelector('.contact__response__heading');
	let resText = document.querySelector('.contact__response__text');
	var data = new FormData(event.target);
	fetch(event.target.action, {
		method: contactForm.method,
		body: data,
		headers: {
			Accept: 'application/json'
		}
	})
		.then(response => {
			resHeading.textContent = 'Thank you!';
			resText.textContent =
				'Your message has been sent. Will get back to you as soon as possible';
			inputElms.forEach(elms => (elms.value = ''));
		})
		.catch(error => {
			resHeading.textContent = 'Oops!';
			resText.textContent =
				'An error has occurred and your message has not been sent successfully. Please try again in a few minutes.';
		});
}
