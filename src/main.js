// Typed effect on splash page

let typedSplashSubtitle = new Typed(".typed-words-splash-subtitle", {
  strings: ["I'm a Fullstack Developer."],
  startDelay: 1500,
  typeSpeed: 80,
  loop: false,
});

// Splide

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    autoplay: true,
    interval: 7000,
    speed: 2000,
    arrows: false,
    pauseOnHover: true,
  });
  splide.mount();
});

// Compose email on click

function sendEmail() {
  window.location = "mailto:matt@matdavies.dev";
}
