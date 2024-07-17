/* exported capitalizeWord */
function capitalizeWord(word: string): string {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    if (word.toUpperCase() === 'JAVASCRIPT') {
      return 'JavaScript';
    } else if (i === 0) {
      result += word[0].toUpperCase();
    } else {
      result += word[i].toLowerCase();
    }
  }

  return result;
}
