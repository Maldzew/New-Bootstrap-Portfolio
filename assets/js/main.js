//////////////  Hamburger button jscode //////////////

let hamburger = document.querySelector('.navbar-toggler');
hamburger.addEventListener('click',()=> {
    hamburger.classList.toggle('btn');
});

//////////////  Carousel text info jscode //////////////

setTimeout(title, 1000 , Infinity);
function title() {
    document.getElementById("title").style.transform = "translateZ(0)";
    document.getElementById("title").style.opacity = "1";
}

setTimeout(text, 1500 , Infinity);

function text() {
    document.getElementById("text").style.transform = "translateY(0)";
    document.getElementById("text").style.opacity = "1";
}

setTimeout(link, 2000 ,Infinity);

function link() {
    document.getElementById("link").style.transform = "translateY(0)";
    document.getElementById("link").style.opacity = "1";
}

$(document).ready(function () {
  if ($(".brands_slider").length) {
    var brandsSlider = $(".brands_slider");

    brandsSlider.owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      nav: false,
      dots: false,
      autoWidth: true,
      items: 8,
      margin: 42,
    });

    if ($(".brands_prev").length) {
      var prev = $(".brands_prev");
      prev.on("click", function () {
        brandsSlider.trigger("prev.owl.carousel");
      });
    }

    if ($(".brands_next").length) {
      var next = $(".brands_next");
      next.on("click", function () {
        brandsSlider.trigger("next.owl.carousel");
      });
    }
  }
});