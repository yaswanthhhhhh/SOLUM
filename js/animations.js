// Scroll-triggered fade-up animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Elements to animate on scroll
const animatedEls = document.querySelectorAll(
  '.feat-card, .story-card, .spec'
);

animatedEls.forEach((el, i) => {
  el.style.opacity           = '0';
  el.style.animation         = `fadeUp 0.7s ${i * 0.06}s ease both`;
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});
