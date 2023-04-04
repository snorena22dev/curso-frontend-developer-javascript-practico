const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.hamicon')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('#productDetail')


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCartIcon.addEventListener('click', toggleCartAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')

} 
function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    
    mobileMenu.classList.toggle('inactive')
    closeProductDetailAside()
} 
function toggleCartAside(){
    const isDesktopMenu = desktopMenu.classList.contains('inactive')
    const isMobileMenu = mobileMenu.classList.contains('inactive')
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

    if (!isDesktopMenu){
        desktopMenu.classList.add('inactive')
    }
    if (!isMobileMenu){
        mobileMenu.classList.add('inactive')
    }
    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')

}
function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive')

    shoppingCartContainer.classList.add('inactive')
}
function closeProductDetailAside(){
    productDetailCloseIcon.classList.add('inactive')
}

const productList = [];
    productList.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });
    productList.push({
        name: 'Pantalla',
        price: 220,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });
    productList.push({
        name: 'Computador',
        price: 500,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });

function renderProducts(arr){
    for (product of arr){
        // Creamos el div .product-card
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        //Creamos la img a partir del product.image(Hace referencia a la imagen del objeto que creamos)
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetailAside)
    
        //Creamos el div .product-info
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        // Creamos el div que no tiene clase
        const productInfoDiv = document.createElement('div')
        //Creamos el nombre y el precio del objeto
        const productPrice = document.createElement('p')
        productPrice.innerHTML = '$' + product.price
        const productName = document.createElement('p')
        productName.innerHTML = '$' + product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
    
        // Creamos el Figure
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
        productInfoFigure.appendChild(productImgCart)
    
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
        
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)