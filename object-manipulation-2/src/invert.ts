/* exported invert */
function invert(source: any): Record<string, any> {
  const result: any = {};
  const keys = [];
  const values = [];
  for (const key in source) {
    keys.push(key);
    values.push(source[key]);
  }
  for (let i = 0; i < keys.length; i++) {
    result[values[i]] = keys[i];
  }
  return result;
}
