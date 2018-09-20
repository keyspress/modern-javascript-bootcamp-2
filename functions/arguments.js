let add = function(num1, num2) {
  return num1 + num2;
};

let result = add(10, 88);

console.log(result);

let getScoreText = function(name = 'Anonymous', score = 0) {
  return `Name: ${name} - Score: ${score}`;
};

let scoreText = getScoreText();

console.log(scoreText);

let getTip = function(total, tipPercent = 0.2) {
  return `A ${tipPercent * 100}% tip on $${total.toFixed(2)} is $${(
    total * tipPercent
  ).toFixed(2)}`;
};

console.log(getTip(33));
console.log(getTip(33, 0.1));
