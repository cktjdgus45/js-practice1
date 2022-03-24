const openModalButton = document.querySelector('[data-modal-target]');
const closeModalButton = document.querySelector('[data-close-button]');
const overLay = document.getElementById('overlay');
const modal = document.querySelector('.modal');

openModalButton.addEventListener('click', () => {
    modal.classList.add('active');
    overLay.classList.add('active');
})
closeModalButton.addEventListener('click', () => {
    modal.classList.remove('active');
    overLay.classList.remove('active');
})
