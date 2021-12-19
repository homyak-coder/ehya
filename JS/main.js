$(document).ready(function () {
  const mainlSwiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 27,
  // Optional parameters
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-main__button--next',
    prevEl: '.swiper-main__button--prev',
    disabledClass: 'swiper-button-off',
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
$('.story-videos-main__button--main').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player-zero', {
      height: '380',
      width: '100%',
      videoId: 'F2KZUrL9vZE',
       events: {
        'onReady': playVideo,
       }
    });
  })

$('.story-videos-buttom__one').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '200',
      width: '100%',
      videoId: 'ePe3nFtYB2U',
       events: {
        'onReady': playVideo,
       }
    });
  })

$('.story-videos-buttom__two').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player-two', {
      height: '200',
      width: '100%',
      videoId: '7G-rSsF2qwc',
       events: {
        'onReady': playVideo,
       }
    });
  })

$('.story-videos-buttom__three').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player-three', {
      height: '200',
      width: '100%',
      videoId: 'yKnIgCtQqNs',
       events: {
        'onReady': playVideo,
       }
    });
  })
  
  function playVideo(event) {
    event.target.playVideo();
  }

});