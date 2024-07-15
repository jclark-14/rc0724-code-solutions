export function titleCase(str: string): string {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      result += str[i].toUpperCase();
    } else if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  return result;
}
