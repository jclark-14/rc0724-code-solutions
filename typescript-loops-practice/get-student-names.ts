/* exported getStudentNames */
function getStudentNames(students: [{ name: string }]): unknown[] {
  const arr = [];
  for (let i = 0; i < students.length; i++) {
    arr.push(students[i].name);
  }
  return arr;
}
