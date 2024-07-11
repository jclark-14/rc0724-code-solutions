/* exported getKeys */
function getKeys(object: any): string[] {
  const arr: string[] = [];
  for (const key in object) {
    arr.push(key);
  }
  return arr;
}
