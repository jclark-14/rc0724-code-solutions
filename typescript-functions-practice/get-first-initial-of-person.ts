/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person: { firstName: string }): unknown {
  return person.firstName[0];
}
