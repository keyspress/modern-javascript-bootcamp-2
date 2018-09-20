let myBook = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  pageCount: 281
};

console.log(myBook.author);

myBook.author = 'The late Harper Lee';

console.log(myBook.author);

let person = {
  name: 'Jim',
  age: 67,
  location: 'New York'
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age = person.age + 1;

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
