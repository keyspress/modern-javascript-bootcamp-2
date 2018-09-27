// const myAge = 2;

// const message = myAge >= 18 ? 'You can vote' : 'You cannot vote. Haha!';

// console.log(message);

const myAge = 42;
const showPage = () => 'Showing the page';
const showErrorPage = () => 'Showing the error page';
const message = myAge >= 21 ? showPage() : showErrorPage();
console.log(message);

const team = ['Jim', 'Drew'];

console.log(
  team.length <= 4
    ? `Team size is ${team.length}`
    : 'Too many people on your team'
);
