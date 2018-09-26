const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes');
  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

const saveNotes = notes => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

const generateNoteDOM = note => {
  const noteEl = document.createElement('p');
  if (note.title.length > 0) {
    noteEl.textContent = note.title;
  } else {
    noteEl.textContent = 'Unamed note';
  }
  return noteEl;
};

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(note => {
    const noteEl = generateNoteDOM(note);
    document.querySelector('#notes').appendChild(noteEl);
  });
};
