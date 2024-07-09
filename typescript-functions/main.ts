function convertMinutesToSeconds(minutes: number): number {
  const seconds: number = minutes * 60;
  return seconds;
}
const convertMinutesToSecondsResult: number = convertMinutesToSeconds(10);
console.log(`10 minutes is ${convertMinutesToSecondsResult} seconds.`);

function greet(name: string): string {
  const greeting: string = 'Hey' + ' ' + name + '!';
  return greeting;
}
const resultOfGreet: string = greet('Jody');
console.log(`The result of greet function is "${resultOfGreet}"`);

const getArea = (width: number, height: number): number => width * height;
const resultOfGetArea: number = getArea(4, 10);
console.log(
  `The result of the area function with 4 and 10 passed as parameters is ${resultOfGetArea}.`
);

interface Person {
  firstName: string;
  lastName: string;
}
const person: Person = {
  firstName: 'Jody',
  lastName: 'Clark',
};
const getFirstName = (person: Person): string => person.firstName;
const resultOfGetFirstName: string = getFirstName(person);
console.log(
  `The result of the getFirstName function when the person object is passed "${resultOfGetFirstName}".`
);

const getLastElement = (arr: unknown[]): unknown => arr[arr.length - 1];
const resultOfGetLastElement: unknown = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log(
  `The result of the getLastElement function when the array is passed it '${resultOfGetLastElement}'.`
);

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}
const callConvertMinutesToSeconds: number = callOtherFunction(
  convertMinutesToSeconds,
  10
);
console.log(
  `The result of the callOtherFunction function when passed with the function convertMinutesToSeconds and 10 as arguments is '${callConvertMinutesToSeconds}'.`
);

const callGetFirstName: string = callOtherFunction(getFirstName, person);
console.log(
  `The result of the callOtherFunction function when passed with the function getFirstName and the object person as arguments is '${callGetFirstName}'.`
);

const callGetLastElement: unknown = callOtherFunction(getLastElement, [
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log(
  `The result of the callOtherFunction function when passed with the function getLastElement and the array as arguments is '${callGetLastElement}'.`
);
