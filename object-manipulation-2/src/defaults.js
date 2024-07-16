'use strict';
/* exported defaults */
function defaults(target, source) {
  let targetPropArray = [];
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
