var pages = document.querySelectorAll('div.page');
var index = 0;
pages[index].classList.add('cursor');

function prevSlide() {
  if (index) {
    pages[index].classList.remove('cursor');
    index--;
    pages[index].classList.add('cursor');
  }
}

function nextSlide() {
  if (index < pages.length - 1) {
    pages[index].classList.remove('cursor');
    index++;
    pages[index].classList.add('cursor');
  }
}

function onKeyUpCallback(e) {
  //console.log(e);
  if (e.keyCode === 37) {
    prevSlide();
  } else if (e.keyCode === 39) {
    nextSlide();
  } else if (e.keyCode === 13) {
    setFullScreen();
  }
}

function setFullScreen() {
  //var container = document.querySelector('div.main-container');
  var container = document.documentElement;
  if(document.mozFullScreenEnabled){
    container.mozRequestFullScreen(); 
    //Fuck google chrome, 's' minuscle? are you kidding me?
  } else if(document.webkitFullscreenEnabled){
    container.webkitRequestFullScreen();
  }
}
// Listeners
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');
var fullscreen_button = document.getElementById('fullscreen_button');
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
fullscreen_button.addEventListener('click', setFullScreen);
document.addEventListener('keyup', onKeyUpCallback);
// Fullscren