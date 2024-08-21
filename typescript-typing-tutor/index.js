'use strict';
const $div = document.querySelector('div');
const $spans = document.querySelectorAll('span');
if (!$div || !$spans) throw new Error('The query failed');
console.log($spans);
let keyCount = 0;
$div.addEventListener('keydown', (event) => {
  console.log(event);
  console.log(event.key);
  console.log($spans[keyCount].innerHTML);
  if (
    keyCount === $spans.length - 1 &&
    $spans[keyCount].innerHTML === event.key
  ) {
    $spans[keyCount].className = 'green';
    return;
  }
  if ($spans[keyCount].innerHTML === event.key) {
    keyCount++;
    $spans[keyCount].className = 'marker';
    $spans[keyCount - 1].className = 'green';
  } else if (
    $spans[keyCount].innerHTML === '&nbsp;' &&
    event.code === 'Space'
  ) {
    console.log('yes');
    keyCount++;
    $spans[keyCount].className = 'marker';
    $spans[keyCount - 1].className = 'green';
  } else {
    $spans[keyCount].className = 'wrong-key';
  }
});
