let gradeCalc = function(score, totalScore) {
  let percent = (score / totalScore) * 100;
  let grade;
  if (percent >= 90) {
    grade = 'A';
  } else if (percent >= 80) {
    grade = 'B';
  } else if (percent >= 70) {
    grade = 'C';
  } else if (percent >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }
  return `You got a ${grade} (${percent.toFixed(0)}%)`;
};

console.log(gradeCalc(10, 100));
console.log(gradeCalc(18, 20));
console.log(gradeCalc(55, 100));
console.log(gradeCalc(70, 100));
