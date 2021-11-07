import outsideClick from "./clickfora.js";

export default function initDropdown() {
  const dropdownmenus = document.querySelectorAll("[data-dropdown]");

  dropdownmenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    this.classList.toggle("ativo");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("ativo");
    });
  }
}
