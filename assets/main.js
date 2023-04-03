const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const menuHamIcon = document.querySelector('.hamicon')
const mobileMenu = document.querySelector('.mobile-menu')


const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCartIcon.addEventListener('click', toggleCartAside)

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed){
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')

} 
function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed){
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')

} 
function toggleCartAside(){
    const isDesktopMenu = desktopMenu.classList.contains('inactive')
    const isMobileMenu = mobileMenu.classList.contains('inactive')

    if (!isDesktopMenu){
        desktopMenu.classList.add('inactive')
    }
    if (!isMobileMenu){
        mobileMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')

} 