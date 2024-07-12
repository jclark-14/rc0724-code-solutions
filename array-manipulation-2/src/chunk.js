'use strict';
/* exported chunk */
function chunk(array, size) {
  let arr = new Array();
  let count = size;
  let secondElement = 0;
  for (let i = 0; i < array.length; i++) {
    if (size === 1 || i === 0) {
      arr[i] = [array[i]];
    } else if (i < size) {
      arr[0].push(array[i]);
    } else if (i === size && arr.length <= 1) {
      arr[1] = [array[i]];
      secondElement++;
    } else if (i > size && secondElement !== size) {
      arr[1].push(array[i]);
      secondElement++;
    } else if (arr.length <= 2) {
      arr[2] = [array[i]];
    }
  }
  return arr;
}
