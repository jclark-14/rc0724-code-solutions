'use strict';
/* exported isLowerCased */
function isLowerCased(word) {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    result += word[i].toLowerCase();
  }
  if (word === result) {
    return true;
  } else {
    return false;
  }
}
