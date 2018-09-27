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

const removeNote = id => {
  const noteIndex = notes.findIndex(note => {
    return note.id === id;
  });

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

const generateNoteDOM = note => {
  const noteEl = document.createElement('div');
  const textEl = document.createElement('a');
  const button = document.createElement('button');

  // Setup remove note button
  button.textContent = 'x';
  noteEl.appendChild(button);
  button.addEventListener('click', () => {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  // Setup note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = 'Unamed note';
  }
  textEl.setAttribute(
    'href',
    `http://127.0.0.1:5500/notes-app/edit.html#${note.id}`
  );
  noteEl.appendChild(textEl);

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

const generateLastEdited = timestamp => {
  return `Last edited ${moment(timestamp).fromNow()}`;
};
