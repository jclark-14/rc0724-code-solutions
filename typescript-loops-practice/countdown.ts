/* exported countdown */
function countdown(num: number): number[] {
  const arr = [];
  let i = num;
  while (i >= 0) {
    arr.push(i);
    i--;
  }
  return arr;
}
