let btnMenu = document.getElementById('menu')
let menu= document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay')
btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})
menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})