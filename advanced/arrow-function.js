const square = num => num * num;

console.log(square(2));

const people = [
  {
    name: 'Andrew',
    age: 27
  },
  {
    name: 'Jim',
    age: 2
  },
  {
    name: 'Bill',
    age: 55
  }
];

const under30 = people.filter(person => person.age < 30);

console.log(under30);

const ageIs55 = people.filter(person => person.age === 55);

console.log(ageIs55);
