const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game1;

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  document.querySelector('#puzzle').innerHTML = '';
  render();
});

const render = () => {
  puzzleEl.innerHTML = '';
  guessesEl.textContent = game1.statusMessage;

  puzzleArr = game1.puzzle.split('');
  puzzleArr.forEach(letter => {
    const item = document.createElement('span');
    item.textContent = letter;
    puzzleEl.appendChild(item);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle('2');
  game1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

// getPuzzle('3')
//   .then(puzzle => {
//     console.log(puzzle);
//   })
//   .catch(err => {
//     console.log(`Error: ${err}`);
//   });

// getCurrentCountry()
//   .then(country => {
//     console.log(country.name);
//   })
//   .catch(err => {
//     console.log(err);
//   });
