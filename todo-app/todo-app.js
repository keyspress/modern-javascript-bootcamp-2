const todos = [
  {
    text: 'Get milk',
    completed: true
  },
  {
    text: 'Drink milk',
    completed: true
  },
  {
    text: 'Cry over having no milk',
    completed: false
  },
  {
    text: 'Get more milk',
    completed: false
  },
  {
    text: 'Go to Disney World',
    completed: false
  }
];

const filters = {
  searchText: ''
};

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

  filteredTodos.forEach(todo => {
    const todoEl = document.createElement('p');
    todoEl.textContent = todo.text;
    document.querySelector('#todos').appendChild(todoEl);
  });
};

renderTodos(todos, filters);

// document.querySelector('#add-todo').addEventListener('click', e => {
//   console.log('You clicked it');
// });

// document.querySelector('#new-todo-text').addEventListener('input', e => {
//   console.log(e.target.value);
// });

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
  renderTodos(todos, filters);
  e.target.elements.todoText.value = '';
});
