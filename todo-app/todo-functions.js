const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  }
};

const saveTodos = todos => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  const incompleteTodos = filteredTodos.filter(todo => {
    return !todo.completed;
  });

  document.querySelector('#todos').innerHTML = '';

  document
    .querySelector('#todos')
    .appendChild(generateSummaryDOM(incompleteTodos));

  const renderedTodos = filters.hideCompleted ? incompleteTodos : filteredTodos;

  renderedTodos.forEach(todo => {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo));
  });
};

const generateTodoDOM = todo => {
  const todoEl = document.createElement('p');
  todoEl.textContent = todo.text;
  return todoEl;
};

const generateSummaryDOM = incompleteTodos => {
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};
