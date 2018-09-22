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
// console.log(todos);

const findTodo = function(todos) {
  return todos.filter(function(todo) {
    return !todo.completed;
  });
};

// console.log(findTodo(todos));

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

const sortTodos = todos => {
  todos.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);
