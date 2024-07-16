'use strict';
/* exported pick */
function pick(source, keys) {
  let result = {};
  for (const key in source) {
    for (let i = 0; i < keys.length; i++) {
      if (source[key] !== undefined && key === keys[i]) {
        result[key] = source[key];
      }
    }
  }
  return result;
}
