'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let newArr = string.split('');
  let arr = string.split('');
  newArr[firstIndex] = arr[secondIndex];
  newArr[secondIndex] = arr[firstIndex];
  return newArr.join('');
}
