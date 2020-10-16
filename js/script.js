const link = document.querySelector('.open-modal-button');
const popup = document.querySelector('.modal');
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

const slide1 = document.querySelector('.slide:nth-child(1)');
const slide2 = document.querySelector('.slide:nth-child(2)');
const slide3 = document.querySelector('.slide:nth-child(3)');

const sliderControl = document.querySelector('.slider-control');
const button1 = sliderControl.querySelector('button:nth-child(1)');
const button2 = sliderControl.querySelector('button:nth-child(2)');
const button3 = sliderControl.querySelector('button:nth-child(3)');

button1.addEventListener('click', function(evt) {
  evt.preventDefault();
  button1.classList.add('current');
  button2.classList.remove('current');
  button3.classList.remove('current');
  slide1.classList.add('slide-current');
  slide2.classList.remove('slider-current');
  slide3.classList.remove('slide-current');
});

button2.addEventListener('click', function(evt) {
  evt.preventDefault();
  button2.classList.add('current');
  button1.classList.remove('current');
  button3.classList.remove('current');
  slide2.classList.add('slide-current');
  slide1.classList.remove('slide-current');
  slide3.classList.remove('slide-current');
});

button3.addEventListener('click', function(evt) {
  evt.preventDefault();
  button3.classList.add('current');
  button1.classList.remove('current');
  button2.classList.remove('current');
  slide3.classList.add('slide-current');
  slide1.classList.remove('slide-current');
  slide2.classList.remove('slide-current');
})
