const x = document.querySelectorAll('.drum');

x.forEach((value, index) => {
  //Implements click  
  x[index].addEventListener('click', function (e) {
    playSound(this.textContent);
    makeAnimation(this.textContent);
  })
})

//Implements keypress
document.addEventListener('keydown', function (e) {
  playSound(e.key)
  makeAnimation(e.key);
});

//make sound function
const playSound = function (key) {
  switch (key) {
    case 'w':
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'd':
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j':
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'k':
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'l':
      let kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;
  }
}

// make Animation
const makeAnimation = function (key) {
  const activeKey = document.querySelector(`.${key}`);
  activeKey.classList.add('pressed')
  setTimeout(function () {
    activeKey.classList.remove('pressed')
  }, 100)
}
