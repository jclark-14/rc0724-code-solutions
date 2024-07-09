'use strict';
const student = {
  firstName: 'Jody',
  lastName: 'Clark',
  age: 36,
};
const vehicle = {
  make: 'Honda',
  model: 'Odyssey',
  year: 2024,
};
const pet = {
  name: 'Jax',
  kind: 'yes',
};
const fullName = `${student.firstName} ${student.lastName}`;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'nurse';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('type of student:', typeof student);
vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
console.log('type of vehicle:', typeof vehicle);
delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
console.log('type of pet:', typeof pet);
