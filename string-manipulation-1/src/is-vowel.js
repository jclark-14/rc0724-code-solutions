'use strict';
/* exported isVowel */
function isVowel(char) {
  let result = false;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (char.toLowerCase() === vowels[i]) {
      result = true;
    }
  }
  return result;
}
