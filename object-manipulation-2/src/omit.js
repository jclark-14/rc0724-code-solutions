'use strict';
/* exported omit */
function omit(source, keys) {
  let result = {};
  for (const key in source) {
    if (key !== keys[0] && key !== keys[1]) {
      result[key] = source[key];
    }
  }
  return result;
}
