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

document.querySelector('#create-note').addEventListener('click', e => {
  e.target.textContent = 'Well done!';
});

document.querySelector('#remove-all').addEventListener('click', e => {
  document.querySelectorAll('.note').forEach(note => {
    note.remove();
  });
});
