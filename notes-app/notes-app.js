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

// const p = document.querySelector('p');
// p.remove();

const ps = document.querySelectorAll('p');

// ps.forEach(p => p.remove());
// ps.forEach(p => console.log(p.textContent));
ps.forEach(p => console.log((p.textContent = '********')));

const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a brand spankin new element!';
document.querySelector('body').appendChild(newParagraph);
