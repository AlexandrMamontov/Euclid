let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link')

burger.addEventListener('click',

  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  })
})

let tabsBtn = document.querySelectorAll('.stages__btn');
let tabsStages = document.querySelectorAll('.stages__steps');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) {
      btn.classList.remove('stages__btn--active')
    });

    e.currentTarget.classList.add('stages__btn--active');

    tabsStages.forEach(function(element) {
      element.classList.remove('stages__steps--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('stages__steps--active');
  });
});

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,

  pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },

   a11y: {
    paginationBulletMessage: 'Слайд {{index}}',
  }
});

let questions__text = document.querySelector('.questions__text');
let svg = document.querySelector('.svg');
questions__text.addEventListener('click',
  function () {
    svg.classList.toggle('svg--active');
})

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form__show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form__show')
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})
