const todo = {
  id: 'dfdfsdasdfasdfsd',
  text: 'Pay the bills',
  completed: false
};

const printTodo = ({ text, completed }) => {
  console.log(`${text}: ${completed}`);
};
printTodo(todo);

const {
  text: todoText,
  completed,
  details: otherDetails = 'No details',
  ...others
} = todo;

console.log(completed);
console.log(todoText);
console.log(otherDetails);
console.log(others);

const age = [65, 0, 13];

const [firstAge, ...otherAges] = age;

console.log(firstAge);
console.log(otherAges);
