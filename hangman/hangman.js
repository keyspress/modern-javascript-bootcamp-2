const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
  this.status = 'playing';
};

Hangman.prototype.calculateStatus = function() {
  const finished = this.word.every(letter =>
    this.guessedLetters.includes(letter)
  );

  if (this.remainingGuesses === 0) {
    this.status = 'failed';
  } else if (finished) {
    this.status = 'finished';
  } else {
    this.staus = 'playing';
  }
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

  if (isUnique && this.status === 'playing') {
    this.guessedLetters.push(guess);
  }
  if (isUnique && isBadGuess && this.status === 'playing') {
    this.remainingGuesses--;
  }

  this.calculateStatus();
};

Hangman.prototype.showStatusMessage = function() {
  let statusMessage = '';
  if (this.status === 'playing') {
    statusMessage = `Guesses left: ${this.remainingGuesses}`;
  } else if (this.status === 'failed') {
    statusMessage = `Nice try! The word was "${this.word.join('')}"`;
  } else {
    statusMessage = 'Great work! You win!';
  }
  return statusMessage;
};
