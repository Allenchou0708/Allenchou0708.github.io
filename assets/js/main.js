const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach((element) => observer.observe(element));

const portrait = document.querySelector('.hero-media img');
if (portrait) {
  const showPortrait = () => portrait.classList.add('is-loaded');
  if (portrait.complete && portrait.naturalWidth > 0) requestAnimationFrame(showPortrait);
  else portrait.addEventListener('load', showPortrait, { once: true });
}

const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

function applyTheme(theme) {
  root.dataset.theme = theme;
  if (!themeToggle) return;
  const dark = theme === 'dark';
  themeToggle.querySelector('span').innerHTML = dark ? '&#9728;' : '&#9790;';
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  themeToggle.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
}

const savedTheme = localStorage.getItem('theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
applyTheme(savedTheme || preferredTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
  });
}

