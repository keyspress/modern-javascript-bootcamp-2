import { getTodos, removeTodo, toggleTodo } from './todos';
import { getFilters } from './filters';

// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
  const todoEl = document.querySelector('#todos');
  const filters = getFilters();
  const filteredTodos = getTodos().filter(todo =>
    todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  const incompleteTodos = filteredTodos.filter(todo => !todo.completed);

  todoEl.innerHTML = '';

  document
    .querySelector('#todos')
    .appendChild(generateSummaryDOM(incompleteTodos));

  const renderedTodos = filters.hideCompleted ? incompleteTodos : filteredTodos;

  if (renderedTodos.length > 0) {
    renderedTodos.forEach(todo => {
      todoEl.appendChild(generateTodoDOM(todo));
    });
  } else {
    const messageEl = document.createElement('p');
    messageEl.classList.add('empty-message');
    messageEl.textContent = 'No todos to show';
    todoEl.appendChild(messageEl);
  }
};

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = todo => {
  const todoEl = document.createElement('label');
  const containerEl = document.createElement('div');
  const checkbox = document.createElement('input');
  const todoText = document.createElement('span');
  const removeButton = document.createElement('button');

  // Setup checkbox
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = todo.completed;
  containerEl.appendChild(checkbox);
  checkbox.addEventListener('change', () => {
    toggleTodo(todo.id);
    renderTodos();
  });

  // Setup text
  todoText.textContent = todo.text;
  containerEl.appendChild(todoText);

  // Setup container
  todoEl.classList.add('list-item');
  containerEl.classList.add('list-item__container');
  todoEl.appendChild(containerEl);

  // Setup button
  removeButton.textContent = 'remove';
  removeButton.classList.add('button', 'button--text');
  todoEl.appendChild(removeButton);
  removeButton.addEventListener('click', () => {
    removeTodo(todo.id);
    renderTodos();
  });

  return todoEl;
};

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = incompleteTodos => {
  const summary = document.createElement('h2');
  const plural = incompleteTodos.length === 1 ? '' : 's';
  summary.classList.add('list-title');
  summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`;
  return summary;
};

// Make sure to set up the exports
export { renderTodos, generateTodoDOM, generateSummaryDOM };
