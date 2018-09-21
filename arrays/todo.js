const todos = ['Get milk', 'Drink milk', 'Get more milk'];

todos.splice(2, 1);
todos.push('Steal milk');
todos.shift();

console.log(`You have ${todos.length} todos.`);
todos.forEach(function(item, index) {
  console.log(`${index + 1}. ${item}`);
});

for (let i = 0; i < todos.length; i++) {
  console.log(`${i + 1}. ${todos[i]}`);
}
