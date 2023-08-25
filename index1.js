const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerMenu = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const asideOrder = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')
const productDetails = document.querySelector('.details-product')
const imgProductDetailClose = document.querySelector('.product-detail-close')

navEmail.addEventListener('click',toggleMenu)
hamburguerMenu.addEventListener('click',toggleMobile)
menuShoppingCart.addEventListener('click', toggleShoppingCart)
imgProductDetailClose.addEventListener('click',closeProductDetails)
function toggleMenu() {
    const isAsideClosed = asideOrder.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    if(!isAsideClosed){
        asideOrder.classList.add('inactive')
    } else if (isDesktopMenuClosed){
        productDetails.classList.add('inactive')        
    }
    desktopMenu.classList.toggle('inactive')
}   
function toggleMobile() {
    const isAsideClosed = asideOrder.classList.contains('inactive')
    
    if(!isAsideClosed){
        asideOrder.classList.add('inactive')
    } 
    closeProductDetails()
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

    const isDetailsAsideClosed = productDetails.classList.contains('inactive')
    if (!isDetailsAsideClosed){
        productDetails.classList.add('inactive')
    }
}

 function showProductDetails(){
    asideOrder.classList.add('inactive')
    productDetails.classList.remove('inactive')
 }
function closeProductDetails() {
    productDetails.classList.add('inactive')
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

        productImg.addEventListener('click', showProductDetails)
    }
}
addProducts(productList) 

/*<aside class="details-product inactive">
    <div class="product-detail-close">
      <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src="https://i.pinimg.com/564x/90/e2/61/90e261b6764a0a7c003bd61ec843a62c.jpg" alt="bike">
    <div class="info-product">
      <p>$35,00</p>
      <p>Bike</p>
      <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
      <button class="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
      </button>
    </div>
  </aside>*/