'use strict';
const $h2 = document.querySelector('h1');
if (!$h2) throw new Error('query failed');
const a = ['3', '2', '1', '~Earth Beeeelooowww Us~'];
let i = 0;
const id = setInterval(() => {
  $h2.textContent = a[i];
  console.log(($h2.textContent = a[i]));
  i++;
  if (i === 4) {
    clearInterval(id);
  }
}, 1000);
