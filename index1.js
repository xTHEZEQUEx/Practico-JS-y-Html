const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerMenu = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const asideOrder = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')
const productDetails = document.querySelector('.details-product')
const imgProductDetailClose = document.querySelector('.product-detail-close')
const imgArrow = document.querySelector('.imageArrow')
const deleteDetail = document.querySelector('.deleteProduct')
const orderContent  = document.querySelector('.my-order-content')
const shoppingCart = document.querySelector('.shopping-cart')
const addToCart = document.querySelector('.add-to-cart-button')

navEmail.addEventListener('click', toggleMenu)
hamburguerMenu.addEventListener('click', toggleMobile)
menuShoppingCart.addEventListener('click', toggleShoppingCart)
imgProductDetailClose.addEventListener('click', closeProductDetails)
imgArrow.addEventListener('click', closeMyOrder)
deleteDetail.addEventListener('click', deleteProduct)


function toggleMenu() {
    const isAsideClosed = asideOrder.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    if (!isAsideClosed) {
        asideOrder.classList.add('inactive')
    } else if (isDesktopMenuClosed) {
        productDetails.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobile() {
    const isAsideClosed = asideOrder.classList.contains('inactive')

    if (!isAsideClosed) {
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
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
    asideOrder.classList.toggle('inactive')

    const isDetailsAsideClosed = productDetails.classList.contains('inactive')
    if (!isDetailsAsideClosed) {
        productDetails.classList.add('inactive')
    }
}

function showProductDetails() {
    asideOrder.classList.add('inactive')
    productDetails.classList.remove('inactive')
}

function closeProductDetails() {
    productDetails.classList.add('inactive')
}
function closeMyOrder() {
    const isAsideClosed = asideOrder.classList.contains('inactive')
    if(!isAsideClosed) {
        asideOrder.classList.add('inactive')
    }
}
function deleteProduct() {
    const imageDelete = shoppingCart.classList.contains('inactive')
    if(!imageDelete) {
        shoppingCart.classList.add('inactive')
    }
}

const productList = []

productList.push({
    name: 'Bike',
    price: '120.00',
    image: 'https://i.pinimg.com/564x/2b/8c/68/2b8c686f3823bdc7fefa2c8993b11d5d.jpg',
    description: 'A stunning bike',
})

productList.push({
    name: 'TV',
    price: '650.00',
    image: 'https://i.pinimg.com/564x/96/f8/0f/96f80ff6f5b5185be4f6a1e923e33ce5.jpg',
    description: 'An incredible TV',
})

productList.push({
    name: 'Mikasa',
    price: '720.00',
    image: 'https://i.pinimg.com/564x/5b/82/71/5b8271433f429a07cbc445c4d4a3d9b5.jpg',
    description: 'A good girl',
})
productList.push({
    name: 'Mikasa',
    price: '720.00',
    image: 'https://i.pinimg.com/564x/95/cd/f5/95cdf56f7850ac8520357b5683a93078.jpg',
    description: 'A good girl',
})
productList.push({
    name: 'Mikasa',
    price: '720.00',
    image: 'https://i.pinimg.com/564x/f9/94/52/f99452fde63cd1f5c8386f0d06819b2f.jpg',
    description: 'A good girl',
})
productList.push({
    name: 'Mikasa',
    price: '720.00',
    image: 'https://i.pinimg.com/564x/13/ad/97/13ad97249387dc86ed431bb3ae7b1b2d.jpg',
    description: 'A good girl',
})
productList.push({
    name: 'Mikasa',
    price: '720.00',
    image: 'https://i.pinimg.com/564x/a4/c2/29/a4c22981d315539bee08394ffe608ac4.jpg',
    description: 'A good girl',
})
productList.push({
    name: 'Mikasa',
    price: '720.00',
    image: 'https://i.pinimg.com/564x/6c/09/79/6c0979835c03de62719637a695665bd0.jpg',
    description: 'A good girl',
})
productList.push({
    name: 'Mikasa',
    price: '720.00',
    image: 'https://i.pinimg.com/564x/96/e1/ef/96e1ef43e139467b4557a99c1d4ca892.jpg',
    description: 'A good girl',
})
productList.push({
    name: 'Mikasa',
    price: '720.00',
    image: 'https://i.pinimg.com/736x/02/2f/e9/022fe94717df2c6d911813826909bbe9.jpg',
    description: 'A good girl',
})
productList.push({
    name: 'Mikasa',
    price: '720.00',
    image: 'https://i.pinimg.com/564x/3e/8d/fc/3e8dfc5fcc2a3aa684716984a60c4e83.jpg',
    description: 'A good girl',
})
productList.push({
    name: 'Mikasa',
    price: '720.00',
    image: 'https://i.pinimg.com/564x/72/5f/51/725f511e48d701f2548bd829b48a8b2a.jpg',
    description: 'A good girl',
})

const detailProduct = product => {
    const imgProduct = document.querySelector('img#editable');
    const detailName = document.querySelector('.info-product p:nth-child(1)');
    const detailPrice = document.querySelector('.info-product p:nth-child(2)');
    const detailDescription = document.querySelector('.info-product p:nth-child(3)');

    imgProduct.setAttribute('src', product.image);
    detailName.textContent = product.name;
    detailPrice.textContent = `$${product.price}`;
    detailDescription.textContent = product.description;
}

function addProducts(arrayProducts) {
    for (const product of arrayProducts) {
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

        productImg.addEventListener('click', showProductDetails);
        productImg.addEventListener('click', () => detailProduct(product));
    }
}
addProducts(productList);

const fullOrder = [] //Este array es para la cantidad de la orden y pasar al checkout 