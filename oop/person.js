const Person = function(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

const me = new Person('Bill', 'Bond', 33);
me.firstName = 'Billy';

console.log(me);

const person2 = new Person('Jim Bob', 'Dingy', 62);

console.log(person2);
