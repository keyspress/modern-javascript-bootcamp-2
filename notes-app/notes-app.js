const notes = [
  {
    title: 'My next trip',
    body: 'I want to go to Hawaii'
  },
  {
    title: 'Habit to work on',
    body: 'Sleep less'
  },
  {
    title: 'Office modification',
    body: 'Get a new chair'
  }
];

document.querySelector('button').addEventListener('click', e => {
  e.target.textContent = 'Well done!';
});
