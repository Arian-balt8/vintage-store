const revealElements = document.querySelectorAll(
  "section, article, .oferta-card, .testimonio"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el, index) => {
  if (el.classList.contains("oferta-card")) {
    el.classList.add("reveal-zoom");
  } else if (el.classList.contains("testimonio")) {
    el.classList.add("reveal-up");
  } else if (index % 2 === 0) {
    el.classList.add("reveal-left");
  } else {
    el.classList.add("reveal");
  }

  observer.observe(el);
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 100);
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    if (href.startsWith("#")) {
      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

const heroBtn = document.querySelector(".hero a");

if (heroBtn) {
  setTimeout(() => {
    heroBtn.classList.add("pulse");
  }, 1200);
}