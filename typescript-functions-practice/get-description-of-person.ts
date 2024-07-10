/* exported getDescriptionOfPerson */
interface Object {
  name: string;
  occupation: string;
  birthPlace: string;
}
function getDescriptionOfPerson(person: object): string {
  return `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
}
