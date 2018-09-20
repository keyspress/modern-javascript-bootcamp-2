// let myBook = {
//   title: 'To Kill a Mockingbird',
//   author: 'Harper Lee',
//   pageCount: 281
// };

// let otherBook = {
//   title: '1984',
//   author: 'George Orwell',
//   pageCount: 326
// };

// let getSummary = function(book) {
//   return {
//     summary: `${book.title} by ${book.author}.`,
//     pageCountSummary: `${book.title} by ${book.author} is ${
//       book.pageCount
//     } pages.`
//   };
// };

// let bookSummary = getSummary(myBook.summary);
// let otherBooksummary = getSummary(otherBook.pageCountSummary);

let tempConvert = function(temp) {
  let celsius = ((temp - 32) * 5) / 9;
  let kelvin = ((temp - 32) * 5) / 9 + 273;
  return {
    fahrenheight: temp,
    celsius,
    kelvin
  };
};

console.log(tempConvert(32));
console.log(tempConvert(74));
