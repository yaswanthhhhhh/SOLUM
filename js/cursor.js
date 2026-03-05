const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');

let mx = 0, my = 0;
let rx = 0, ry = 0;

// Track mouse position
document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

// Smooth lagging ring
(function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
})();

// Grow cursor on hover over interactive elements
document.querySelectorAll('a, button').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width  = '16px';
    cursor.style.height = '16px';
    ring.style.width    = '52px';
    ring.style.height   = '52px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width  = '10px';
    cursor.style.height = '10px';
    ring.style.width    = '36px';
    ring.style.height   = '36px';
  });
});
