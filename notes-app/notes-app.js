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

const filters = {
  searchText: ''
};

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(note => {
    const noteEl = document.createElement('p');
    noteEl.textContent = note.title;
    document.querySelector('#notes').appendChild(noteEl);
  });
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', e => {
  e.target.textContent = 'Well done!';
});

document.querySelector('#remove-all').addEventListener('click', e => {
  document.querySelectorAll('.note').forEach(note => {
    note.remove();
  });
});

document.querySelector('#search-text').addEventListener('input', e => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});
