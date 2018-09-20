let isAccountLocked = true;
let userRole = 'user';

if (isAccountLocked) {
  console.log('Account is locked');
} else {
  console.log('Account is unlocked');
}

if (userRole === 'admin') {
  console.log('You have complete control');
} else if (userRole === 'read/write') {
  console.log('You can do some things');
} else {
  console.log('We can barely trust you to tie your own shoes');
}

let temp = 90;

if (temp >= 110) {
  console.log('It is way too hot');
} else if (temp < 32) {
  console.log('You will freeze');
} else {
  console.log('Go ahead, go nuts');
}
