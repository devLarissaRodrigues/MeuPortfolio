let botaoMenu = document.getElementById('botao-menu');
let menuMobile = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let botaoFechar = document.querySelector('.botao-fechar');
let linkMenuMobile = document.querySelectorAll('#menu-mobile nav ul li a');

botaoMenu.addEventListener('click', ()=> {
    menuMobile.classList.toggle('abrir-menu');
})

botaoFechar.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
})

// Fecha o menu ao clicar em um link do menu mobile
linkMenuMobile.forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.remove('abrir-menu');
    });
});

overlay.addEventListener('click', ()=>{
    menuMobile.classList.remove('abrir-menu');
})

// Seleciona o botão de voltar ao topo
const scrollToTopButton = document.getElementById('scrollToTopBotao');

// Adiciona um listener para verificar o scroll da página
window.addEventListener('scroll', () => {
    // Verifica a posição do scroll
    if (window.pageYOffset > 300) { // Exibe o botão quando o scroll for maior que 300px
        scrollToTopButton.classList.add('show');
    } else { // Oculta o botão quando o scroll for menor ou igual a 300px
        scrollToTopButton.classList.remove('show');
    }
});

// Adiciona um listener para o clique no botão
scrollToTopButton.addEventListener('click', () => {
    // Faz o scroll suave até o topo da página
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
