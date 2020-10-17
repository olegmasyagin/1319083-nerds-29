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
  slide2.classList.remove('slide-current');
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
});

