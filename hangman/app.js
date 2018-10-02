const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('dog', 3);

puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.getStatusMessage();

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  document.querySelector('#puzzle').innerHTML = '';
  puzzleEl.textContent = game1.getPuzzle();
  guessesEl.textContent = game1.getStatusMessage();
});
