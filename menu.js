let botaoMenu = document.getElementById('botao-menu');
let menuMobile = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

botaoMenu.addEventListener('click', ()=> {
    menuMobile.classList.toggle('abrir-menu');
})

let botaoFechar = document.querySelector('.botao-fechar');

botaoFechar.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
})

overlay.addEventListener('click', ()=>{
    menuMobile.classList.remove('abrir-menu');
})