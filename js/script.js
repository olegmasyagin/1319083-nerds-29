const link = document.querySelector('.open-modal-button');
const popup = document.querySelector('.modal-contact');
const close = popup.querySelector('.modal-close');
const form = popup.querySelector('form');
const nameField = popup.querySelector('[name=name]');
const nameEmail = popup.querySelector('[name=email]');
let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('nameField');
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  if (storage) {
    nameField.value = storage;
    nameEmail.focus();
  } else {
    nameField.focus();
  }
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
});

form.addEventListener('submit', function(evt) {
  if(!nameField.value || !nameEmail.value) {
    evt.preventDefault();
    popup.classList.add('modal-error');
  }else{
    if(isStorageSupport) {
      localStorage.setItem('nameField', nameField.value);
      localStorage.setItem('nameEmail', nameEmail.value);
    }
  }
});

window.addEventListener('keydown', function(evt) {
  if(evt.keyCode === 27) {
    if(popup.classList.contains('modal-show'))
    {
      evt.preventDefault();
      popup.classList.remove('modal-show');
    }
  }
});

