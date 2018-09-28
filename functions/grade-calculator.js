let gradeCalc = function(score, totalScore) {
  if (typeof score !== 'number' || typeof totalScore !== 'number') {
    throw Error('Arguments must be numbers.');
  }
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

try {
  console.log(gradeCalc(10, 100));
  console.log(gradeCalc(18, 20));
} catch (e) {
  console.log('error caught');
}

try {
  console.log(gradeCalc('dog', 'cat'));
} catch (e) {
  console.log(e.message);
}

// console.log(gradeCalc(true, false));
