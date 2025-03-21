const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');
const logo = document.querySelector('.logo');
const leftLogoFill = document.querySelector('.left_logo_fill');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
    logo.classList.toggle('active');
    leftLogoFill.classList.toggle('active');
});