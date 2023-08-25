const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerMenu = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const asideOrder = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

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
const productList =[]
productList.push({
    name: 'Bike',
    price: '120.00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'TV',
    price: '650.00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Mikasa',
    price: '720.00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
function addProducts(arrayProductos) {
    for (product of arrayProductos) {
        const productCard = document.createElement('div');
        const productImg = document.createElement('img');
        const productInfo = document.createElement('div')
        const innerDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        const productName = document.createElement('p');
        const figure = document.createElement('figure');
        const figureImg = document.createElement('img');
    
        productCard.classList.add('product-card')
        productImg.setAttribute('src', product.image)
        productInfo.classList.add('product-info')
        productPrice.innerText = '$ ' + product.price
        productName.innerText = product.name
        figureImg.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        figure.appendChild(figureImg)
        innerDiv.appendChild(productPrice)
        innerDiv.appendChild(productName)
        productInfo.appendChild(innerDiv)
        productInfo.appendChild(figure)
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
        cardsContainer.appendChild(productCard)
    }
}
addProducts(productList) 