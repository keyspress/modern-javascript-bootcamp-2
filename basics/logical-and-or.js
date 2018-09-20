let temp = 65;

if (temp <= 85 && temp <= 65) {
  console.log('It is nice outside');
}

if (temp <= 0 || temp >= 120) {
  console.log('Stay inside!');
}

let isGuestOneVegan = true;
let isGuestTwoVegan = true;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Call the police');
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Bring a lettuce leaf');
} else {
  console.log('Enjoy the food');
}
