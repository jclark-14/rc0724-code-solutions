/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    result += word[i].toUpperCase();
  }
  if (word === result) {
    return true;
  } else {
    return false;
  }
}
