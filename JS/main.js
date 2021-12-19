$(document).ready(function () {
  const mainlSwiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 27,
    // Optional parameters
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-main__button--next",
      prevEl: ".swiper-main__button--prev",
      disabledClass: "swiper-button-off",
    },

    effect: "coverFlow",

    keyboard: {
      enabled: true,
      pageUpDown: true,
    },

    allowTouchMove: "true",
  });

  $(document).ready(function () {
    const mainlSwiper = new Swiper(".unrealised-slider", {
      slidesPerView: 5,
      spaceBetween: 30,
      // Optional parameters
      loop: true,

      // Navigation arrows
      navigation: {
        nextEl: ".unrealised-slider__button--next",
        prevEl: ".unrealised-slider__button--prev",
      },

      effect: "coverFlow",

      keyboard: {
        enabled: true,
        pageUpDown: true,
      },

      allowTouchMove: "true",
    });
  });
  $(".story-videos-main__button--main").on(
    "click",
    function onYouTubeIframeAPIReady() {
      player = new YT.Player("player-zero", {
        height: "380",
        width: "100%",
        videoId: "F2KZUrL9vZE",
        events: {
          onReady: playVideo,
        },
      });
    }
  );

  $(".story-videos-buttom__one").on(
    "click",
    function onYouTubeIframeAPIReady() {
      player = new YT.Player("player", {
        height: "200",
        width: "100%",
        videoId: "ePe3nFtYB2U",
        events: {
          onReady: playVideo,
        },
      });
    }
  );

  $(".story-videos-buttom__two").on(
    "click",
    function onYouTubeIframeAPIReady() {
      player = new YT.Player("player-two", {
        height: "200",
        width: "100%",
        videoId: "7G-rSsF2qwc",
        events: {
          onReady: playVideo,
        },
      });
    }
  );

  $(".story-videos-buttom__three").on(
    "click",
    function onYouTubeIframeAPIReady() {
      player = new YT.Player("player-three", {
        height: "200",
        width: "100%",
        videoId: "yKnIgCtQqNs",
        events: {
          onReady: playVideo,
        },
      });
    }
  );

  function playVideo(event) {
    event.target.playVideo();
  }

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    $("body").css("overflow", "hidden");
  }
  function closeModal(event) {
    event.preventDefault();
    $("body").css("overflow", "auto");
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      // escape key maps to keycode `27`
      $("body").css("overflow", "auto");
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });
});
