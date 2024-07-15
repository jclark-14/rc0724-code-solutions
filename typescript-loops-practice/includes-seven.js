'use strict';
/* exported includesSeven */
function includesSeven(array) {
  let isSeven = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      isSeven = true;
    }
  }
  return isSeven;
}
