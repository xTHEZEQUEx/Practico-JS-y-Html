const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerMenu = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const asideOrder = document.querySelector('.product-detail')

navEmail.addEventListener('click',toggleMenu)
hamburguerMenu.addEventListener('click',toggleMobile)
menuShoppingCart.addEventListener('click', toggleShoppingCart)
function toggleMenu() {
    const isAsideClosed = asideOrder.classList.contains('inactive')
    if(!isAsideClosed){
        asideOrder.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}   
function toggleMobile() {
    const isAsideClosed = asideOrder.classList.contains('inactive')
    if(!isAsideClosed){
        asideOrder.classList.add('inactive')
    }

    menuMobile.classList.toggle('inactive') 
}
function toggleShoppingCart() {
    const isMenuMobileClosed = menuMobile.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    
    if (!isMenuMobileClosed) {
        menuMobile.classList.add('inactive')
    } else if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    asideOrder.classList.toggle('inactive') 
    
}