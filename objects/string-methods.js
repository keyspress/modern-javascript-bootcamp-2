let name = 'Kyle Spresser';

console.log(name.length);

console.log(name.toUpperCase());
console.log(name.toLowerCase());

let password = 'abc123password018';
console.log(password.includes('password'));

let isValidPassword = function(password) {
  // if (password.length > 8 && !password.includes('password')) {
  //   return true;
  // } else {
  //   return false;
  // }
  // return password.length > 8 && !password.includes('password') ? true : false;
  return password.length > 8 && !password.includes('password');
};

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#@$^$%^'));
console.log(isValidPassword('abc123!@#@$^$%^passwordfdfds'));
