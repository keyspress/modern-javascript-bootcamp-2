Hangman.prototype.getPuzzle = function() {
  let puzzle = '';
  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter;
    } else {
      puzzle += '*';
    }
  });
  return puzzle;
};

Hangman.prototype.makeGuess = function(guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  if (isUnique) {
    this.guessedLetters.push(guess);
  }
  if (isUnique && isBadGuess) {
    this.remainingGuesses--;
  }
};

const game1 = new Hangman('dog', 3);

const generatePuzzleDOM = () => {
  const puzzleEl = document.createElement('h2');
  const remainingGuessEl = document.createElement('h4');
  puzzleEl.textContent = game1.getPuzzle();
  remainingGuessEl.textContent = game1.remainingGuesses;
  document.querySelector('#puzzle').appendChild(puzzleEl);
  document.querySelector('#puzzle').appendChild(remainingGuessEl);
};

generatePuzzleDOM();

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  document.querySelector('#puzzle').innerHTML = '';
  generatePuzzleDOM();
  // console.log(game1.getPuzzle());
  // console.log(game1.remainingGuesses);
});
