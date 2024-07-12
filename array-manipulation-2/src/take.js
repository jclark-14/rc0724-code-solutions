'use strict';
/* exported take */
function take(array, count) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    if (array[i] === undefined) {
      return arr;
    }
    arr.push(array[i]);
  }
  return arr;
}
