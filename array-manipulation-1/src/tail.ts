/* exported tail */
function tail(array: unknown[]): unknown {
  const arr = [];
  for (let i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
