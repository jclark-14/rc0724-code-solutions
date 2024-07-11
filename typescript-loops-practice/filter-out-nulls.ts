/* exported filterOutNulls */
function filterOutNulls(values: unknown[]): unknown[] {
  const arr: unknown[] = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i]) {
      arr.push(values[i]);
    }
  }
  return arr;
}
