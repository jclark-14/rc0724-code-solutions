'use strict';
function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(10);
console.log(`10 minutes is ${convertMinutesToSecondsResult} seconds.`);
function greet(name) {
  const greeting = 'Hey' + ' ' + name + '!';
  return greeting;
}
const resultOfGreet = greet('Jody');
console.log(`The result of greet function is "${resultOfGreet}"`);
const getArea = (width, height) => width * height;
const resultOfGetArea = getArea(4, 10);
console.log(
  `The result of the area function with 4 and 10 passed as parameters is ${resultOfGetArea}.`
);
const person = {
  firstName: 'Jody',
  lastName: 'Clark',
};
const getFirstName = (person) => person.firstName;
const resultOfGetFirstName = getFirstName(person);
console.log(
  `The result of the getFirstName function when the person object is passed "${resultOfGetFirstName}".`
);
const getLastElement = (arr) => arr[arr.length - 1];
const resultOfGetLastElement = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log(
  `The result of the getLastElement function when the array is passed it '${resultOfGetLastElement}'.`
);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
const callConvertMinutesToSeconds = callOtherFunction(
  convertMinutesToSeconds,
  10
);
console.log(
  `The result of the callOtherFunction function when passed with the function convertMinutesToSeconds and 10 as arguments is '${callConvertMinutesToSeconds}'.`
);
const callGetFirstName = callOtherFunction(getFirstName, person);
console.log(
  `The result of the callOtherFunction function when passed with the function getFirstName and the object person as arguments is '${callGetFirstName}'.`
);
const callGetLastElement = callOtherFunction(getLastElement, [
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log(
  `The result of the callOtherFunction function when passed with the function getLastElement and the array as arguments is '${callGetLastElement}'.`
);
