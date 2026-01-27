import './style.css'

// ПЛАВНОЕ ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 240;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ДВИЖЕНИЕ navbar

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add(
      "py-3",
      "backdrop-blur-xl",
      "bg-red-950/30",
      "shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
    );
    navbar.classList.remove("py-5");
  } else {
    navbar.classList.remove(
      "py-3",
      "backdrop-blur-xl",
      "bg-red-950/80",
      "shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
    );
    navbar.classList.add("py-5");
  }
});

