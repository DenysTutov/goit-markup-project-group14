(() => {
    const refs = {
        openMenuBtn: document.querySelector('.mobile-menu__burger'),
        closeMenuBtn: document.querySelector('.mobile-menu__button-close'),
        menu: document.querySelector('.mobile-menu__container'),
    };

refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {//
    refs.menu.classList.toggle('is-hidden');
}

}) ();
