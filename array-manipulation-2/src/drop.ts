/* exported drop */
function drop(array: any[], count: number): unknown[] {
  const arr = [];
  for (let i = count; i < array.length; i++) {
    if (array[i] === null) {
      return arr;
    }
    arr.push(array[i]);
  }
  return arr;
}
