const saveButton = document.querySelector('#save-button');
const memoryDialog = document.querySelector('#memory-dialog');

if (saveButton && memoryDialog) {
  saveButton.addEventListener('click', (event) => {
    event.preventDefault();
    memoryDialog.showModal();
  });
}