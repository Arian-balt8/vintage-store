// Animación al hacer scroll
const elements = document.querySelectorAll("section, article, .oferta-card, blockquote");

elements.forEach((el, i) => {
  if (el.classList.contains("oferta-card")) {
    el.classList.add("reveal-zoom");
  } else if (i % 2 === 0) {
    el.classList.add("reveal");
  } else {
    el.classList.add("reveal-left");
  }
});

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 120) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// Header sticky
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    header.classList.add("sticky");
    document.body.classList.add("with-sticky");
  } else {
    header.classList.remove("sticky");
    document.body.classList.remove("with-sticky");
  }
});


// Scroll suave
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    if (href && href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// Botón con pulse
const heroBtn = document.querySelector(".hero a");

setTimeout(() => {
  if (heroBtn) heroBtn.classList.add("pulse");
}, 1200);