'use strict';
/* exported drop */
function drop(array, count) {
  const arr = [];
  for (let i = count; i < array.length; i++) {
    if (array[i] === null) {
      return arr;
    }
    arr.push(array[i]);
  }
  return arr;
}
