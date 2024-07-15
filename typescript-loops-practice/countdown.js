'use strict';
/* exported countdown */
function countdown(num) {
  const arr = [];
  let i = num;
  while (i >= 0) {
    arr.push(i);
    i--;
  }
  return arr;
}
