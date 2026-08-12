const toggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const links = document.querySelectorAll(".nav-link");

toggle?.addEventListener("click", () => {
  const open = sidebar.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

links.forEach(link => link.addEventListener("click", () => {
  sidebar.classList.remove("open");
  toggle?.setAttribute("aria-expanded", "false");
}));

const sections = [...document.querySelectorAll(".section")];
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach(section => navObserver.observe(section));
