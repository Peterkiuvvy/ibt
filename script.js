// script.js

// Menu responsivo
const mobileBtn = document.querySelector(".mobile-menu-button");
const nav = document.querySelector("nav");

mobileBtn.addEventListener("click", () => {
  nav.classList.toggle("ativo");
});

// Animação ao clicar em links de navegação (scroll suave)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    // Fecha o menu em telas pequenas após clicar
    if (nav.classList.contains("ativo")) {
      nav.classList.remove("ativo");
    }
  });
});

// Animações com IntersectionObserver para aparecer elementos ao rolar
const aparecer = document.querySelectorAll(".section, .culto-item, .ministerios-lista li");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visivel");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

aparecer.forEach(el => {
  el.classList.add("escondido");
  observer.observe(el);
});
