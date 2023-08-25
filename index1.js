const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerMenu = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu');
navEmail.addEventListener('click',toggleMenu)
hamburguerMenu.addEventListener('click',toggleMobile)

function toggleMenu() {
    desktopMenu.classList.toggle('inactive')
}   
function toggleMobile() {
    console.log('click')
    menuMobile.classList.toggle('inactive') 
}