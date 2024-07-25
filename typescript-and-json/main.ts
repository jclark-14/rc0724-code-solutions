const arr = [
  {
    isbn: '111111111',
    title: 'book1',
    author: 'author1',
  },
  {
    isbn: '122222222',
    title: 'book2',
    author: 'author2',
  },
  {
    isbn: '33333333',
    title: 'book3',
    author: 'author3',
  },
];
console.log('book arrary: ', arr);
console.log('typeof book arr: ', typeof arr);

const json = JSON.stringify(arr);
console.log('json value: ', json);
console.log('typeof json: ', typeof json);

const student = '{"name": "Jody Clark", "id": 4123}';
console.log('value of student: ', student);
console.log('typeof student: ', typeof student);

const jsonStudent = JSON.parse(student);
console.log('value of jsonStudent: ', jsonStudent);
console.log('typeof jsonStudent', typeof jsonStudent);
