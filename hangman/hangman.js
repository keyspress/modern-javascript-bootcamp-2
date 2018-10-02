const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
};
