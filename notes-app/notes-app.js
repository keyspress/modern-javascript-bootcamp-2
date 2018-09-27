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

const now = new Date();
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of month: ${now.getDate()}`);
// console.log(`Hours: ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);

const myBDay = new Date('October 4 1976 5:00:30');
const kaceBDay = new Date('December 5 2015 8:36:05');

const myTStamp = myBDay.getTime();
const kaceTStamp = kaceBDay.getTime();

console.log(myTStamp > kaceTStamp ? myBDay.toString() : kaceBDay.toString());
