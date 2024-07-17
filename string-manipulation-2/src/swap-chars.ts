/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  const newArr = string.split('');
  const arr = string.split('');
  newArr[firstIndex] = arr[secondIndex];
  newArr[secondIndex] = arr[firstIndex];
  return newArr.join('');
}
