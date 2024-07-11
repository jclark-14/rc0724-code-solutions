/* exported findIndex */
function findIndex(array: unknown[], value: unknown): number {
  let isItIndexed = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      isItIndexed = i;
      break;
    } else {
      isItIndexed = -1;
    }
  }
  return isItIndexed;
}
