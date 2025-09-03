// Optional - Add smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
const toggleMode = document.getElementById('toggle-mode');

toggleMode.addEventListener('change', () => {
  document.body.classList.toggle('light');
});
// Re-init AOS after content update or theme toggle
setTimeout(() => {
  AOS.refresh();
}, 100);

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

