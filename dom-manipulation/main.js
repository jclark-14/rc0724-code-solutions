'use strict';
let clickCounter = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
if (!$hotButton) throw new Error('The $hotbutton query failed');
$hotButton.addEventListener('click', function () {
  clickCounter++;
  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton ro $clickCount query failed');
  }
  $clickCount.textContent = 'Clicks: ' + clickCounter;
  if (clickCounter < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickCounter < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickCounter < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickCounter < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickCounter < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
});
