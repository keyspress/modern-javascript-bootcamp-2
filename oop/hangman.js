const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = ['c', 's'];
};

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

const game1 = new Hangman('dog', 3);
const game2 = new Hangman('cats and stuff', 50);

console.log(game1.getPuzzle());
console.log(game2.getPuzzle());
console.log(game1, game2);
