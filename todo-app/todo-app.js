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

const incompleteTodos = todos.filter(todo => {
  return !todo.completed;
});

const summary = document.createElement('h2');

summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(summary);

todos.forEach(todo => {
  const p = document.createElement('p');
  p.textContent = todo.text;
  document.querySelector('body').appendChild(p);
});

document.querySelector('#add-todo').addEventListener('click', e => {
  console.log('You clicked it');
});

document.querySelector('#new-todo-text').addEventListener('input', e => {
  console.log(e.target.value);
});
