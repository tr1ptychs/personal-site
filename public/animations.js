window.addEventListener('DOMContentLoaded', () => {
  const tiltCards = document.querySelectorAll('.tilt');

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      const shadowX = ((x - centerX) / centerX) * -5;
      const shadowY = ((y - centerY) / centerY) * -5;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.25), ${shadowX * 0.5}px ${shadowY * 0.5}px 10px rgba(0, 0, 0, 0.15)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
      card.style.boxShadow =
        '0 15px 30px -5px rgba(0, 0, 0, 0.25), 0 5px 10px -5px rgba(0, 0, 0, 0.15)';
    });
  });
});
