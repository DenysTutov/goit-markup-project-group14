(() => {
  const refs = {
    openAboutModalBtn: document.querySelector('[data-modalAbout-open]'),
    closeAboutModalBtn: document.querySelector('[data-modalAbout-close]'),
    aboutModal: document.querySelector('[data-modalAbout]'),
  };

  refs.openAboutModalBtn.addEventListener('click', toggleModal);
  refs.closeAboutModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.aboutModal.classList.toggle('about-is-hidden');
  }
})();