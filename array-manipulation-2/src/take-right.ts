/* exported takeRight */
function takeRight(array: any[], count: number): unknown[] {
  const arr = [];
  if (count > array.length) {
    return array;
  }
  for (let i = array.length - count; i < array.length; i++) {
    if (array[i] === null) {
      return arr;
    } else {
      arr.push(array[i]);
    }
  }
  return arr;
}
