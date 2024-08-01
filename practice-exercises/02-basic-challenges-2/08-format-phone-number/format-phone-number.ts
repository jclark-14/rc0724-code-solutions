export function formatPhoneNumber(numbers: number[]): string {
  const numFirstSet = '(' + numbers.slice(0, 3).join('') + ')';
  console.log('firstPart', numFirstSet);
  const phoneNumber =
    numFirstSet +
    ' ' +
    numbers.slice(3, 6).join('') +
    '-' +
    numbers.slice(6).join('');
  console.log(phoneNumber);
  return phoneNumber;
}
