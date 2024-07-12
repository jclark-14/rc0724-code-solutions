'use strict';
/* exported lastChars */
function lastChars(length, string) {
  let iterations = 0;
  let result = '';
  for (let i = string.length - 1; i >= 0; i--) {
    iterations++;
    if (iterations <= length) {
      result += string[i];
    }
  }
  return [...result].reverse().join('');
}
