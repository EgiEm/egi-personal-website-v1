document.addEventListener('DOMContentLoaded', () => {
  console.log('Egi Showcase Portfolio loaded successfully!');

  // Smooth scroll animations for navbar links
  const links = document.querySelectorAll('.nav-links a, .hero-actions a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Dynamic parallax glowing spheres effect on mouse move
  const spheres = document.querySelectorAll('.glow-sphere');
  window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    spheres.forEach((sphere, index) => {
      const depth = (index + 1) * 15;
      const moveX = (x - 0.5) * depth;
      const moveY = (y - 0.5) * depth;
      sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });
});
