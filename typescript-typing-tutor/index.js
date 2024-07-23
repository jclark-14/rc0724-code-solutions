'use strict';
const $div = document.querySelector('div');
const $spans = document.querySelectorAll('span');
if (!$div || !$spans) throw new Error('The query failed');
console.log($spans);
let keyCount = 0;
$div.addEventListener('keydown', (event) => {
  console.log(event.key);
  console.log(event);
  if ($spans[keyCount].innerText === event.key) {
    keyCount++;
    if (keyCount < $spans.length) {
      $spans[keyCount].className = 'marker';
    }
    $spans[keyCount - 1].className = 'green';
  } else if ($spans[keyCount].innerText === ' ' || event.code === 'Space') {
    keyCount++;
    $spans[keyCount].className = 'marker';
    $spans[keyCount - 1].className = 'green';
  } else {
    $spans[keyCount].className = 'wrong-key';
  }
});
