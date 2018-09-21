const todos = ['Get milk', 'Drink milk', 'Get more milk'];

todos.splice(2, 1);
todos.push('Steal milk');
todos.shift();

console.log(`You have ${todos.length} todos.`);
console.log(todos);
