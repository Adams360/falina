const burger = document.querySelector('.hamburger');
const menu   = document.querySelector('.nav__menu');

burger.addEventListener('click', () => {

    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');

});