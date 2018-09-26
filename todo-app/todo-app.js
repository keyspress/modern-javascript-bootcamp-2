let todos = [];

const filters = {
  searchText: '',
  hideCompleted: false
};

const todosJSON = localStorage.getItem('todos');
if (todosJSON !== null) {
  todos = JSON.parse(todosJSON);
}

const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  const incompleteTodos = filteredTodos.filter(todo => {
    return !todo.completed;
  });

  document.querySelector('#todos').innerHTML = '';

  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector('#todos').appendChild(summary);

  const renderedTodos = filters.hideCompleted ? incompleteTodos : filteredTodos;

  renderedTodos.forEach(todo => {
    const todoEl = document.createElement('p');
    todoEl.textContent = todo.text;
    document.querySelector('#todos').appendChild(todoEl);
  });
};

renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', e => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector('#new-todo').addEventListener('submit', e => {
  e.preventDefault();
  todos.push({
    text: e.target.elements.todoText.value,
    completed: false
  });
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos, filters);
  e.target.elements.todoText.value = '';
});

document.querySelector('#hide-completed').addEventListener('change', e => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
