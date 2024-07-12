'use strict';
/* exported invert */
function invert(source) {
  let result = {};
  let keys = [];
  let values = [];
  for (const key in source) {
    keys.push(key);
    values.push(source[key]);
  }
  for (let i = 0; i < keys.length; i++) {
    result[values[i]] = keys[i];
  }
  return result;
}
