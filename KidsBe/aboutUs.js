  let toggleBtn = document.querySelector('.about-content__btn');
  let hiddenText = document.querySelector('.hidden-text');

toggleBtn.addEventListener('click', () => {
  hiddenText.classList.toggle('visible');
  toggleBtn.textContent = hiddenText.classList.contains('visible') ? 'Скрыть' : 'Подробнее';
});