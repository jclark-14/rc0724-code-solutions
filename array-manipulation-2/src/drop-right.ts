/* exported dropRight */
function dropRight(array: any[], count: number): unknown[] {
  const arr = [];
  for (let i = 0; i < array.length - count; i++) {
    if (array[i] === undefined) {
      return arr;
    }
    arr.push(array[i]);
  }
  return arr;
}
