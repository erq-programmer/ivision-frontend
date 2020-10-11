const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const body = document.querySelector('body');
const close = document.querySelector('.lightbox__close');
const lightbox = document.querySelector('.lightbox');
const heroButton = document.querySelector('.hero__button');
const overlay = document.querySelector('.overlay');

const handleHamburgerClick = () => {
  hamburger.classList.toggle('hamburger--active');
  hamburger.setAttribute('aria-expanded', hamburger.classList.contains('hamburger--active'));
  nav.classList.toggle('navigation--active');
  body.classList.toggle('hidden');
  overlay.classList.toggle('overlay--active');
};

const handleLightboxClose = () => {
  body.classList.remove('hidden');
  lightbox.classList.remove('lightbox--active');
  overlay.classList.toggle('overlay--active');
};

const handleLightboxOpen = () => {
  body.classList.add('hidden');
  lightbox.classList.add('lightbox--active');
  overlay.classList.toggle('overlay--active');
};

hamburger.addEventListener('click', handleHamburgerClick);
close.addEventListener('click', handleLightboxClose);
heroButton.addEventListener('click', handleLightboxOpen);
