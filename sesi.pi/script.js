// Script para abrir/fechar menu no celular
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    // A classe "show" é alternada aqui e tratada pelo CSS media query.
    menu.classList.toggle("show");
});