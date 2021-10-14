export default function activeMenu() {
  const links = document.querySelectorAll(".menu_mobile li ");

  const handleLink = (event) => {
    links.forEach((link) => {
      link.classList.remove("ativo");
    });
    event.currentTarget.classList.add("ativo");
  };

  links.forEach((link) => {
    link.addEventListener("click", handleLink);
  });
}
