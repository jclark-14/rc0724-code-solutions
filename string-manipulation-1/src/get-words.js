'use strict';
/* exported getWords */
function getWords(string) {
  const arr = [];
  let words = '';
  if (string === '') {
    return arr;
  }
  for (let i = 0; i <= string.length; i++) {
    if (i === string.length) {
      arr.push(words);
    } else if (string[i] !== ' ') {
      words += string[i];
    } else if (string[i] === ' ') {
      arr.push(words);
      words = '';
    }
  }
  return arr;
}
