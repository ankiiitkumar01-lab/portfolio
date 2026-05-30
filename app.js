  function toggleMenu() {
      document.querySelector(".right").classList.add("active");
    }
 function closeMenu() {
      document.querySelector(".right").classList.remove("active");
    }
 const btn = document.querySelector(".show-skills-btn");
const skills = document.querySelector(".additional-skills");
 
  
  btn.addEventListener("click", () => {
  skills.classList.toggle("active");

  if (skills.classList.contains("active")) {
    btn.textContent = "Hide Skills";
  } else {
    btn.textContent = "Show Skills";
  }
});


window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
const icons = document.querySelectorAll(".socials i");

window.addEventListener("scroll", () => {
  const section = document.querySelector(".contact-left");
  const top = section.getBoundingClientRect().top;

  if (top < window.innerHeight -100) {
    icons.forEach((icon, index) => {
      setTimeout(() => {
        icon.classList.add("show");
      }, index * 150);
    });
  } else {
    icons.forEach((icon) => {
      icon.classList.remove("show");
    });
  }
});
window.addEventListener("scroll", () => {
  const section = document.querySelector(".contact-bottom");
  const top = section.getBoundingClientRect().top;

  if (top < window.innerHeight -50) {
    icons.forEach((icon, index) => {
      setTimeout(() => {
        icon.classList.add("show");
      }, index * 150);
    });
  } else {
    icons.forEach((icon) => {
      icon.classList.remove("show");
    });
  }
});