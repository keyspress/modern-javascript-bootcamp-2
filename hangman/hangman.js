const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
  this.status = 'playing';
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

Hangman.prototype.determineStatus = function() {
  let puzzle = this.getPuzzle();
  let splitPuzzle = puzzle.split('');
  let maskedRemaining = false;
  splitPuzzle.forEach(letter => {
    if (letter === '*') {
      maskedRemaining = true;
    }
  });
  if (maskedRemaining && this.remainingGuesses === 0) {
    this.status = 'failed';
  } else if (maskedRemaining && this.remainingGuesses > 0) {
    this.status = 'playing';
  } else {
    this.status = 'finished';
  }
  return this.status;
};
