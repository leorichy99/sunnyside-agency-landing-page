const hamburger = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const intro = document.querySelector(".intro");

// toggle the hamburger on / off when you click on the hamburger icon
hamburgerIcon.addEventListener("click", (e) => {
  e.target.classList.toggle('clicked');
  hamburger.classList.toggle('show');
  intro.classList.toggle('hide');
});


