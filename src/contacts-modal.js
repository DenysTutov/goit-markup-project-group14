(() => {
    const refs = {
      openContactModalBtn: document.querySelector('[data-modal-open]'),
      closeContactModalBtn: document.querySelector('[data-modal-close]'),
      contactModal: document.querySelector('[data-modal]'),
    };

    refs.openContactModalBtn.addEventListener('click', toggleModal);
    refs.closeContactModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
      document.body.classList.toggle('modal-open');
      refs.contactModal.classList.toggle('is-hidden');
    }
})();