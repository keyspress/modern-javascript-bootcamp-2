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

// const incomplete = [];

// todos.forEach(todo => {
//   if (todo.completed === false) {
//     incomplete.push(todo);
//   }
// });

const summary = document.createElement('h2');

summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(summary);

todos.forEach(todo => {
  const p = document.createElement('p');
  p.textContent = todo.text;
  document.querySelector('body').appendChild(p);
});
