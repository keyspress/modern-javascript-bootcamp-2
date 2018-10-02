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

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', e => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  } else if (e.target.readyState === 4) {
    console.log('error');
  }
});

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
request.send();

const countryRequest = new XMLHttpRequest();
const countryCode = 'US';

countryRequest.addEventListener('readystatechange', e => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    const country = data.find(country => country.alpha2Code === countryCode);
    // const country = data.filter(country => country.alpha2Code === countryCode);
    // console.log(country[0].name);
    console.log(country.name);
  } else if (e.target.readyState === 4) {
    console.log('error');
  }
});

countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
countryRequest.send();
