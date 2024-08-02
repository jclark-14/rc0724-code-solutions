'use strict';
const $h1 = document.querySelector('h1');
if (!$h1) throw new Error('query failed');
setTimeout(() => {
  $h1.textContent = 'Hello There';
}, 2000);
