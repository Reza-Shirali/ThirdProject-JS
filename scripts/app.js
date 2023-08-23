const btnOpen = document.querySelector(".menu-hum");
const mobileOpen = document.querySelector(".menu-mobile");
let navOpen = false;
btnOpen.addEventListener("click", function () {
  if (navOpen) {
    btnOpen.classList.remove("menu-hum--open");
    mobileOpen.classList.remove("menu-mobile--open");
    navOpen = false;
  } else {
    btnOpen.classList.add("menu-hum--open");
    mobileOpen.classList.add("menu-mobile--open");
    navOpen = true;
  }
});
