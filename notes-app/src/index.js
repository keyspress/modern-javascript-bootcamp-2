import { getNotes, createNote, removeNote, updateNote } from './notes';
import { getFilters, setFilters } from './filters';

// console.log(getNotes());
// createNote();
// removeNote('e77da467-5df7-4cfa-8bda-f0ce4c6d0553');
// updateNote('dea4a5cd-79c0-41c2-83ea-cbce6bb4af2a', {
//   title: 'note title',
//   body: 'text'
// });
// console.log(getNotes());

console.log(getFilters());
setFilters({
  searchText: 'Office',
  sortBy: 'byCreated'
});
console.log(getFilters());
