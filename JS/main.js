$(document).ready(function () {
  const mainlSwiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 27,
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-main__button--next',
    prevEl: '.swiper-main__button--prev',
  },

  effect: "coverFlow",

  keyboard: {
    enabled: true,
    pageUpDown: true
  }, 

  allowTouchMove: 'true'

});

$(document).ready(function () {
  const mainlSwiper = new Swiper('.unrealised-slider', {
  slidesPerView: 5,
  spaceBetween: 30,
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.unrealised-slider__button--next',
    prevEl: '.unrealised-slider__button--prev',
  },

  effect: "coverFlow",

  keyboard: {
    enabled: true,
    pageUpDown: true
  }, 

  allowTouchMove: 'true'

});
});
});