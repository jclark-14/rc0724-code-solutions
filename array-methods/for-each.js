'use strict';
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('In order: ');
values.forEach((num) => {
  console.log(num);
});
console.log('Reverse order:');
values.forEach((num, index, values) => {
  console.log(values[values.length - 1 - index]);
});
