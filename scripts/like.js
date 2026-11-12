// Элементы диалога
const popup = document.getElementById('memory-dialog');
const openButton = document.getElementById('save-button');
const closeButton = document.getElementById('close-dialog');

// Открытие диалога
if (openButton && popup) {
  openButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    popup.showModal();
  });
}

// Закрытие диалога
if (closeButton && popup) {
  closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    popup.close();
  });
}

// Элементы лайков
const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

// Обработка нажатия на иконку сердца
iconButtonArray.forEach((iconButton, index) => {
  iconButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
  });
});

// Обработка нажатия на кнопку Like
likeButtonArray.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleIsLiked(likeHeartArray[index], button);
  });
});

// Переключение состояния лайка
function toggleIsLiked(heart, button) {
  if (!heart || !button) return;

  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

// Изменение текста кнопки
function setButtonText(heart, button) {
  const textElement = button.querySelector('.button__text');

  if (!textElement) return;

  setTimeout(() => {
    textElement.textContent = heart.classList.contains('is-liked')
      ? 'Unlike'
      : 'Like';
  }, 500);
}