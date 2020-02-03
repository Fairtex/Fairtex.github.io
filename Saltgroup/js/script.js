"use strict"; //Mobile nav

var navBtn = document.querySelector('.js-mobile-nav-btn');
var mobileNav = document.querySelector('.js-mobile-nav');
navBtn.addEventListener('click', function () {
  if (navBtn.classList.contains('page-header__toggle--opened')) {
    navBtn.classList.remove('page-header__toggle--opened');
    mobileNav.classList.remove('main-nav--opened');
  } else {
    navBtn.classList.add('page-header__toggle--opened');
    mobileNav.classList.add('main-nav--opened');
  }
}); //Smoothscroll

var scrollBtn = document.querySelector('.js-scroll-btn');
scrollBtn.addEventListener('click', function (event) {
  event.preventDefault();
  var anchorID = scrollBtn.getAttribute('href').substr(1);
  document.getElementById(anchorID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}); //Slider

var slideIndex = 1;
var slides = document.querySelectorAll('.slider__item');
var sliderDotsWrap = document.querySelector('.slider-controls');
var sliderDots = document.querySelectorAll('.slider-control');
showSlide(slideIndex);
var autoplay = setInterval(slideSwitch, 3000, 1);

function showSlide(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  Array.prototype.forEach.call(slides, function (slide) {
    slide.style.display = 'none';
  });
  Array.prototype.forEach.call(sliderDots, function (dot) {
    dot.classList.remove('slider-control--active');
  });
  slides[slideIndex - 1].style.display = 'flex';
  sliderDots[slideIndex - 1].classList.add('slider-control--active');
}

function slideSwitch(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

sliderDotsWrap.addEventListener('click', function (event) {
  var target = event.target;

  for (var i = 0; i < sliderDots.length + 1; i++) {
    if (target.classList.contains('slider-control') && target == sliderDots[i - 1]) {
      currentSlide(i);
    }
  }
}); //Popup

var modalBtn = document.querySelector('.js-popup-btn');
var modalPopup = document.querySelector('.video-modal');
var overlay = document.querySelector('.overlay');
var closeModalBtn = modalPopup.querySelector('.video-modal__close-btn');
modalBtn.addEventListener('click', function (event) {
  event.preventDefault();
  modalPopup.classList.remove('hide');
  overlay.classList.remove('hide');
  document.body.style.overflow = "hidden";
});
overlay.addEventListener('click', closeModal);
closeModalBtn.addEventListener('click', closeModal);

function closeModal() {
  modalPopup.classList.add('hide');
  overlay.classList.add('hide');
  document.body.style.overflow = "auto";
}