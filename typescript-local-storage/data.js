'use strict';
let todos = [];
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
  const returnJSON = localStorage.getItem('todos-storage');
  if (!returnJSON) {
    return [];
  } else {
    todos = JSON.parse(returnJSON);
    return todos;
  }
}
todos = readTodos();
