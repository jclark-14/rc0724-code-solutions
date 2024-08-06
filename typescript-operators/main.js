'use strict';
/* eslint-disable no-unused-vars */
const v1 = { value: 'Something' };
const v2 = '';
const v3 = undefined;
const v4 = [3, 5, 7, 9];
const v5 = {
  name: 'Carl',
  details: {
    age: 82,
  },
};
const v1True = 'v1 is truthy';
console.log(v1 && v1True);
const v2True = 'v2 is truthy';
console.log(v2 && v2True);
const defaultValue = 'default-value';
const config1 = v1 || defaultValue;
const config2 = v2 || defaultValue;
console.log('configs:', config1, config2);
const cfg1 = v1 ?? defaultValue;
const cfg2 = v2 ?? defaultValue;
const cfg3 = v3 ?? defaultValue;
console.log('cgfs: ', cfg1, cfg2, cfg3);
const truthy = 'truthy';
const falsy = 'falsy';
const tern1 = v1 ? truthy : falsy;
const tern2 = v2 ? truthy : falsy;
console.log('terns: ', tern1, tern2);
const oc1 = v1?.value;
const oc2 = v5?.details?.address?.city;
console.log('ocs: ', oc1, oc2);
const sObj = { ...v1, foo: 'bar' };
console.log('sObj: ', sObj);
const sArr = [100, ...v4];
console.log('sArr: ', sArr);
