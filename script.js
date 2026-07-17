// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// Reveal animation on scroll into view
const ro = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), (i % 6) * 80);
      ro.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// Trigger reveals immediately for content already in view on load
window.addEventListener('load', () => {
  document.querySelectorAll('.reveal').forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setTimeout(() => el.classList.add('visible'), (i % 6) * 80);
    }
  });
});
