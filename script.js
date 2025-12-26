const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    const content = card.querySelector('.content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});