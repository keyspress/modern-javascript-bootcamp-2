class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach(like => {
      bio += ` ${this.firstName} likes ${like}.`;
    });

    return bio;
  }
  setName(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

// console.log(myPerson.getBio());

// const Person = function(firstName, lastName, age, likes = []) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.likes = likes;
// };

// Person.prototype.getBio = function() {
//   let bio = `${this.firstName} is ${this.age}.`;

//   this.likes.forEach(like => {
//     bio += ` ${this.firstName} likes ${like}.`;
//   });

//   return bio;
// };

// Person.prototype.setName = function(fullName) {
//   const names = fullName.split(' ');
//   this.firstName = names[0];
//   this.lastName = names[1];
// };

const me = new Person('Bill', 'Bond', 33, ['Eating', 'Sleeping']);
me.setName('Jimmy Jones');
console.log(me.getBio());

const person2 = new Person('Jim Bob', 'Dingy', 62);
console.log(person2.getBio());
