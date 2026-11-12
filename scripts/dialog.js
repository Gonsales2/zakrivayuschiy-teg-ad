const memoryDialog = document.querySelector('#memory-dialog');
const saveButton = document.querySelector('#save-button');
const closeButton = document.querySelector('#close-dialog');

if (saveButton) {
  saveButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    memoryDialog.showModal();
  });
}

if (closeButton) {
  closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    memoryDialog.close();
  });
}

document.addEventListener('submit', (event) => {
  event.preventDefault();
});