/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = [];

function writeTodos(): void {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
console.log(writeTodos);

function readTodos(): Todo[] {
  const returnJSON = localStorage.getItem('todos-storage');
  if (!returnJSON) {
    return [];
  } else {
    todos = JSON.parse(returnJSON);
    return todos;
  }
}

todos = readTodos();
