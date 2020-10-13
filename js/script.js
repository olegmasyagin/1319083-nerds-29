const link = document.querySelector('.open-modal-button');
const popup = document.querySelector('.modal');
const popupClose = document.querySelector('.modal-close');



link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
});

popupClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
});