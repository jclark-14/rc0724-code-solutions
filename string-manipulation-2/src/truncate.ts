/* exported truncate */
function truncate(length: number, string: string): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    if (string[i] === undefined) {
      break;
    } else {
      result += string[i];
    }
  }
  return result + '...';
}
