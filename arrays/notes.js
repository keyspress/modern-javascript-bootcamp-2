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

const sortNotes = notes => {
  notes.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

const findNote = function(notes, noteTitle) {
  const index = notes.findIndex(function(note) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
  return notes[index];
};
// const findNote = function(notes, noteTitle) {
//   return notes.find(function(note, index) {
//     return note.title === noteTitle;
//   });
// };

const findNotes = function(notes, query) {
  return notes.filter(function(note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

// console.log(findNotes(notes, 'to'));

// const note = findNote(notes, 'Office modification');
// console.log(note);

sortNotes(notes);

console.log(notes);
