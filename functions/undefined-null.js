let name;

if (name === undefined) {
  console.log('Please give a name');
} else {
  console.log(name);
}

let square = function(num) {
  console.log(num);
};

let result = square();

console.log(result);

let age = 42;

age = null;

console.log(age);
