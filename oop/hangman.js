const Hangman = function(word, remainingGuesses) {
  this.word = word;
  this.remainingGuesses = remainingGuesses;
};

const game1 = new Hangman('dog', 3);
const game2 = new Hangman('cat', 50);

console.log(game1, game2);
