const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('dog', 3);

puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.showStatusMessage();

console.log(game1.status);

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  console.log(game1.status);
  document.querySelector('#puzzle').innerHTML = '';
  puzzleEl.textContent = game1.getPuzzle();
  guessesEl.textContent = game1.showStatusMessage();
});
