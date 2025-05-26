const container = document.querySelector('.grid-container');
  const left = document.querySelector('.inter-side');
  const right = document.querySelector('.psg-side');

  left.addEventListener('mouseenter', () => {
    container.classList.add('left-expanded');
  });
  left.addEventListener('mouseleave', () => {
    container.classList.remove('left-expanded');
  });
  right.addEventListener('mouseenter', () => {
    container.classList.add('right-expanded');
  });
  right.addEventListener('mouseleave', () => {
    container.classList.remove('right-expanded');
  });
  