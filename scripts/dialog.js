const saveButton = document.querySelector('#save-button');
const memoryDialog = document.querySelector('#memory-dialog');
const dialogForm = memoryDialog?.querySelector('.button-form');

if (saveButton && memoryDialog) {
  saveButton.addEventListener('click', () => {
    if (!memoryDialog.open) {
      memoryDialog.showModal();
    }
  });
}

if (dialogForm && memoryDialog) {
  dialogForm.addEventListener('submit', (event) => {
    event.preventDefault();
    memoryDialog.close();
  });
}