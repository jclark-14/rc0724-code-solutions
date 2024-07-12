/* exported omit */
function omit(source: any, keys: string[]): any {
  const result: Record<string, any> = {};
  for (const key in source) {
    if (key !== keys[0] && key !== keys[1]) {
      result[key] = source[key];
    }
  }
  return result;
}
