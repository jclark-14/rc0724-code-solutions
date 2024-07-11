/* exported getValues */
function getValues(object: any): any {
  const arr: any = [];
  for (const key in object) {
    arr.push(object[key]);
  }
  return arr;
}
