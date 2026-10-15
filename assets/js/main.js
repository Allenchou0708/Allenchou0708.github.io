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

