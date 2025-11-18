// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle && navToggle.addEventListener('click', () => {
  mainNav.style.display = mainNav.style.display === 'block' ? '' : 'block';
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
      if (mainNav) mainNav.style.display = ''; // close mobile menu
    }
  });
});

// Simple form UX (the form still posts to Formspree - replace ID)
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
if (form) {
  form.addEventListener('submit', (e) => {
    formMsg.textContent = 'Sending...';
    // allow default submit to Formspree; show message after a small delay for UX
    setTimeout(() => {
      formMsg.textContent = 'If the form did not submit, replace YOUR_FORMSPREE_ID in form action with your Formspree id.';
    }, 1200);
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
