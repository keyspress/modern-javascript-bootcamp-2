const notes = ['Note 1', 'Note 2', 'Note 3'];

// console.log(notes.pop());
// notes.push('Note 4');

// console.log(notes.shift());
// notes.unshift('First note');

// notes.splice(1, 0, 'This comes second');

notes[2] = 'New note 3';

notes.forEach(function(item, index) {
  console.log(`Item ${index}: ${item}`);
});

console.log(notes.length);
console.log(notes);

for (let i = 0; i < notes.length; i++) {
  console.log(`Item ${i + 1}: ${notes[i]}`);
}
