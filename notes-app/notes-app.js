let notes = getSavedNotes();

const filters = {
  searchText: ''
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', e => {
  const id = uuidv4();
  notes.push({
    id: id,
    title: '',
    body: ''
  });
  saveNotes(notes);
  location.assign(`http://127.0.0.1:5500/notes-app/edit.html#${id}`);
});

document.querySelector('#search-text').addEventListener('input', e => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', e => {
  console.log(e.target.value);
});

window.addEventListener('storage', e => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

// const now = moment();
// now.add(1, 'year').subtract(20, 'days');
// console.log(now.format('MMMM Do, YYYY'));

// console.log(now.fromNow());

// const nowTimestamp = now.valueOf();

// console.log(moment(nowTimestamp).toString());

const bDay = moment()
  .year(1976)
  .month('October')
  .date(4);

console.log(bDay.format('MMM D, YYYY'));
