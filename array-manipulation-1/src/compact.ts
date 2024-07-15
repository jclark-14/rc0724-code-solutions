/* exported compact */
function compact(array: unknown[]): unknown[] {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      arr.push(array[i]);
    }
  }
  return arr;
}
