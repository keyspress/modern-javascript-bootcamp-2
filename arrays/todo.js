// const todos = ['Get milk', 'Drink milk', 'Get more milk'];
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

const deleteTodo = (todos, text) => {
  const index = todos.findIndex(todo => {
    return todo.text.toLowerCase() === text.toLowerCase();
  });
  if (index !== -1) {
    todos.splice(index, 1);
  }
};

deleteTodo(todos, 'Go to Disney World');
console.log(todos);

// todos.splice(2, 1);
// todos.push('Steal milk');
// todos.shift();

// console.log(`You have ${todos.length} todos.`);
// todos.forEach(function(item, index) {
//   console.log(`${index + 1}. ${item}`);
// });

// for (let i = 0; i < todos.length; i++) {
//   console.log(`${i + 1}. ${todos[i]}`);
// }
