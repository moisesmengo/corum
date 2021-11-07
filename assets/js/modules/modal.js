export default function initModal() {
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (btnAbrir && containerModal) {
    function toggleModal(e) {
      e.preventDefault();
      containerModal.classList.toggle("ativo");
    }

    function clickForaModal(e) {
      if (e.target === this) toggleModal(e);
    }

    btnAbrir.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickForaModal);
  }
}
