const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('Car Parts', 3);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  document.querySelector('#puzzle').innerHTML = '';
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
});

getPuzzle('3')
  .then(puzzle => {
    console.log(puzzle);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });

getCountry('MX')
  .then(country => {
    console.log(country.name);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });

getLocation()
  .then(location => {
    console.log(`${location.city}, ${location.region} ${location.country}`);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });

getLocation()
  .then(location => {
    return getCountry(location.country);
  })
  .then(country => {
    console.log(country.name);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });
