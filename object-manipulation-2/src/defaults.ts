/* exported defaults */
function defaults(target: any, source: any): void {
  const targetPropArray = [];
  for (const targetProp in target) {
    targetPropArray.push(targetProp);
  }
  for (let i = 0; i < 4; i++) {
    let p = 0;
    if (target.length !== source.length || target.length === undefined) {
      for (const sKey in source) {
        if (targetPropArray[p] !== sKey) {
          target[sKey] = source[sKey];
        }
        p++;
      }
    }
  }
  console.log(target);
}
