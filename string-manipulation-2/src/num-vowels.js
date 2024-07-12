'use strict';
/* exported numVowels */
function numVowels(string) {
  let result = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i].toLowerCase()) >= 0) {
      result++;
    }
  }
  return result;
}
