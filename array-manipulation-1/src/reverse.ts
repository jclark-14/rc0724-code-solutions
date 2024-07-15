/* exported reverse */
function reverse(array: unknown[]): unknown {
  const arr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }
  return arr;
}
