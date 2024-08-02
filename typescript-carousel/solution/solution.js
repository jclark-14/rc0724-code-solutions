'use strict';
const $carouselImages = document.querySelectorAll('.carousel-image');
const $progressDots = document.querySelectorAll(
  '.carousel-progress > .fa-circle'
);
let timerId;
let currentIndex = 0;
function showIndex(targetIndex) {
  for (let i = 0; i < $carouselImages.length; i++) {
    if (i === targetIndex) {
      $carouselImages[i].className = 'carousel-image';
      $progressDots[i].className = 'fas fa-circle';
    } else {
      $carouselImages[i].className = 'carousel-image hidden';
      $progressDots[i].className = 'far fa-circle';
    }
  }
  currentIndex = targetIndex;
  autoPlay();
}
function autoPlay() {
  clearTimeout(timerId);
  timerId = setTimeout(function () {
    showIndex(getNextIndex());
  }, 3000);
}
function getNextIndex() {
  if (currentIndex === $carouselImages.length - 1) {
    return 0;
  } else {
    return currentIndex + 1;
  }
}
function getPreviousIndex() {
  if (currentIndex === 0) {
    return $carouselImages.length - 1;
  } else {
    return currentIndex - 1;
  }
}
function handleClick(event) {
  const $eventTarget = event.target;
  if ($eventTarget.matches('.previous')) {
    showIndex(getPreviousIndex());
    return;
  }
  if ($eventTarget.matches('.next')) {
    showIndex(getNextIndex());
    return;
  }
  if (!$eventTarget.matches('.fa-circle')) {
    return;
  }
  for (let i = 0; i < $progressDots.length; i++) {
    if ($eventTarget === $progressDots[i]) {
      showIndex(i);
      break;
    }
  }
}
const $carouselContainer = document.querySelector('.carousel-container');
if (!$carouselContainer) throw new Error('$carouselContainer is null');
$carouselContainer.addEventListener('click', handleClick);
autoPlay();
