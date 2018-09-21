const notes = [
  {},
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
    boby: 'Get a new chair'
  }
];

// console.log(notes.pop());
// notes.push('Note 4');

// console.log(notes.shift());
// notes.unshift('First note');

// notes.splice(1, 0, 'This comes second');

// notes[2] = 'New note 3';

// notes.forEach(function(item, index) {
//   console.log(`Item ${index}: ${item}`);
// });

// for (let i = 0; i < notes.length; i++) {
//   console.log(`Item ${i + 1}: ${notes[i]}`);
// }

console.log(notes.length);
console.log(notes);

const index = notes.findIndex(function(note, index) {
  // console.log(note, index);
  return note.title === 'Office modification';
});

console.log(index);
