/* Menu de Navegação */

let navBar = document.querySelector("#header");

document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  if (scrollTop > 0) {
    navBar.classList.add("rolar");
  } else {
    navBar.classList.remove("rolar");
  }
});

/* Menu Mobile */

let btnMenuMob = document.querySelector("#btn-menu-mob");
let line1 = document.querySelector(".line-menu-mob-1");
let line2 = document.querySelector(".line-menu-mob-2");
let menuMobile = document.querySelector("#menu-mobile");

let body = document.querySelector("body");

btnMenuMob.addEventListener("click", () => {
  line1.classList.toggle("ativo1");
  line2.classList.toggle("ativo2");
  menuMobile.classList.toggle("abrir");
  body.classList.toggle("no-overflow");
});
