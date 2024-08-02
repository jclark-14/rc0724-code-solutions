'use strict';
const $left = document.querySelector('a.left');
const $right = document.querySelector('a.right');
const $img = document.querySelector('img');
const $dotDiv = document.querySelector('#dots');
const $dots = document.querySelectorAll('a.dot');
const $i = document.querySelectorAll('i');
if (!$left || !$right || !$img || !$dots || !$dotDiv || !$i)
  throw new Error('query failed');
let index = 1;
let timerID;
$dotDiv.addEventListener('click', (event) => {
  clearInterval(timerID);
  const eventTarget = event.target;
  console.log(eventTarget);
  console.log(eventTarget.dataset.view);
  if (eventTarget.dataset.view === '1') {
    index = 1;
    imgSwap(index);
    autoPlay();
  } else if (eventTarget.dataset.view === '2') {
    index = 2;
    imgSwap(index);
    autoPlay();
  } else if (eventTarget.dataset.view === '3') {
    index = 3;
    imgSwap(index);
    autoPlay();
  } else if (eventTarget.dataset.view === '4') {
    index = 4;
    imgSwap(index);
    autoPlay();
  } else if (eventTarget.dataset.view === '5') {
    index = 5;
    imgSwap(index);
    autoPlay();
  }
});
function imgSwap(index) {
  if (!$img) throw new Error('$img null');
  if (index === 1) {
    $img.setAttribute('src', 'images/001.png');
  } else if (index === 2) {
    $img.setAttribute('src', 'images/004.png');
  } else if (index === 3) {
    $img.setAttribute('src', 'images/007.png');
  } else if (index === 4) {
    $img.setAttribute('src', 'images/025.png');
  } else if (index === 5) {
    $img.setAttribute('src', 'images/039.png');
  }
}
function autoPlay() {
  const auto = setInterval(() => {
    if (index < 5) {
      index++;
      imgSwap(index);
      console.log(index);
    } else {
      index = 1;
      imgSwap(index);
      console.log(index);
      index = 1;
    }
  }, 2000);
  timerID = auto;
}
autoPlay();
$left.addEventListener('click', () => {
  clearInterval(timerID);
  index--;
  console.log(index);
  if (index <= 0) {
    index = 5;
  }
  imgSwap(index);
  autoPlay();
});
$right.addEventListener('click', () => {
  clearInterval(timerID);
  index++;
  console.log(index);
  if (index >= 6) {
    index = 1;
  }
  imgSwap(index);
  autoPlay();
});
