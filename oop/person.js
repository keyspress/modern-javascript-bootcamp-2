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

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }
  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}.`;
  }
  getYearsLeft() {
    return 65 - this.age;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }
  getBio() {
    const status = this.grade >= 70 ? 'passing' : 'failing';
    // this.grade >= 70
    //   ? `${this.firstName} is passing the class`
    //   : `${this.firstName} is failing and should be very ashamed`;
    // if (this.grade >= 70) {
    //   return `${this.firstName} is passing the class`;
    // } else {
    //   return `${this.firstName} is failing and should be very ashamed`;
    // }
    return `${this.firstName} is ${status} the class.`;
  }
  updateGrade(change) {
    this.grade += change;
  }
}

const me = new Employee('Bill', 'Bond', 33, 'Sleeper', ['Eating', 'Sleeping']);
me.setName('Jimmy Jones');
console.log(me.getBio());
console.log(me.getYearsLeft());

const jim = new Student('Jim Bob', 'Dingy', 22, 60);
console.log(jim.getBio());
console.log(jim.updateGrade(20));
console.log(jim.getBio());
