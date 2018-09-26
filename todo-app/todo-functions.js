const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

const saveTodos = todos => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const removeTodo = id => {
  const todoIndex = todos.findIndex(todo => {
    return todo.id === id;
  });

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

const toggleTodo = id => {
  const todo = todos.find(todo => {
    return todo.id === id;
  });
  // const todoIndex = todos.findIndex(todo => {
  //   return todo.id === id;
  // });

  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
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
  const todoEl = document.createElement('div');
  const checkbox = document.createElement('input');
  const todoText = document.createElement('span');
  const removeButton = document.createElement('button');

  // Setup checkbox
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = todo.completed;
  todoEl.appendChild(checkbox);
  checkbox.addEventListener('change', () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  // Setup text
  todoText.textContent = todo.text;
  todoEl.appendChild(todoText);

  // Setup button
  removeButton.textContent = 'x';
  todoEl.appendChild(removeButton);
  removeButton.addEventListener('click', () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoEl;
};

const generateSummaryDOM = incompleteTodos => {
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};
