
////////////// slider
document.addEventListener("DOMContentLoaded", () => {

  let current = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  window.nextSlide = function () {
    current = (current + 1) % slides.length;
    showSlide(current);
  };

  window.prevSlide = function () {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };

});

////////// header border

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//////////// menu

function openMenu() {
  document.getElementById("navMenu").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  document.getElementById("navMenu").classList.remove("active");
  document.body.style.overflow = "auto";
}

////// for download
function showDownloadMsg() {
  alert("resume downloading 📄");
}