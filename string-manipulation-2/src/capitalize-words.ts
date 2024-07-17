/* exported capitalizeWords */
function capitalizeWords(string: string): string {
  let result = '';
  let index = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      index = 0;
      result += string[i];
    } else if (index === 0) {
      result += string[i].toUpperCase();
      index++;
    } else if (index !== 0) {
      result += string[i].toLowerCase();
    }
  }
  return result;
}
