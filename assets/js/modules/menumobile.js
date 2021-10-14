import outsideClick from "./clickfora.js";

export default function menuMobile() {
  const btn = document.querySelector(".btn_mobile");
  const menu = document.querySelector(".menu_mobile");

  btn.addEventListener("click", () => {
    btn.classList.toggle("ativo");
    menu.classList.toggle("ativo");

    outsideClick(menu, ["click"], () => {
      menu.classList.remove("ativo");
      btn.classList.remove("ativo");
    });
  });
}
