var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var hamburguerBar = document.querySelectorAll(".toggle-button__bar");

toggleButton.addEventListener("click", function() {

    mobileNav.classList.toggle("open-overlay");
    hamburguerBar[0].classList.toggle("rotate");
    hamburguerBar[1].classList.toggle("rotate");
    hamburguerBar[2].classList.toggle("rotate");
});