const produtos = document.querySelector('#js-produtos')
const dropdown = document.querySelector('.js-dropdown')
const header = document.querySelector('header')
const buttonSecondary = document.querySelector('.btn-secondary')
const logo = document.querySelector('.logo')
const btnMobileBlue = document.querySelector('.btn-blue')
const menuMobile = document.querySelector('.btn-mobile')
const overlay = document.querySelector('.overlay')

produtos.addEventListener('click', (e)=> {
  e.preventDefault();
 dropdown.classList.add('active')
 e.stopPropagation();
})

window.addEventListener('click', (e)=> {
  if (!dropdown.contains(e.target)){
    dropdown.classList.remove('active')
  }
})

function fixedMenu() {
  if(window.pageYOffset > 8.8) {
    header.classList.add('active')
    buttonSecondary.classList.remove('white')
    logo.classList.add('active')
    btnMobileBlue.classList.add('active')

  }else {
    header.classList.remove('active')
    buttonSecondary.classList.add('white')
    logo.classList.remove('active')
    btnMobileBlue.classList.remove('active')
  }
}

function openMenuMobile() {
  document.documentElement.classList.add('menu-opened')
}

function closeMenuMobile() {
  document.documentElement.classList.remove('menu-opened')
}

menuMobile.addEventListener('click', openMenuMobile);
overlay.addEventListener('click', closeMenuMobile)
document.addEventListener('scroll', fixedMenu);