export function isPalindrome(str: string): boolean {
  const string = str.toLowerCase().split(',').join('').split(' ').join('');
  const reverse = string.split('').reverse().join('');
  if (string === reverse) {
    return true;
  }
  return false;
}
