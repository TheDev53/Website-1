const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

window.onload = function () {
  document.body.classList.remove("loading");

  document.body.classList.add("loaded");
};
