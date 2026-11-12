const saveButton = document.querySelector('#save-button');
const memoryDialog = document.querySelector('#memory-dialog');
const dialogForm = document.querySelector('.button-form');

if (saveButton && memoryDialog) {
  saveButton.addEventListener('click', (event) => {
    event.preventDefault();
    memoryDialog.showModal();
  });
}

if (dialogForm && memoryDialog) {
  dialogForm.addEventListener('submit', (event) => {
    event.preventDefault();
    memoryDialog.close();
  });
}