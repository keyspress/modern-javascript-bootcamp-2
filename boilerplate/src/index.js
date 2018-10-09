const calculateAverage = (thing, ...numbers) => {
  let sum = 0;
  numbers.forEach(num => (sum += num));
  const average = sum / numbers.length;
  return `The average ${thing} is ${average}`;
};

console.log(calculateAverage('grade', 0, 100, 88, 64));

const printTeam = (team, coach, ...players) => {
  let playerList = '';
  players.forEach((player, index) => {
    if (index !== players.length - 1) {
      playerList += `${player}, `;
    } else {
      playerList += player;
    }
  });
  console.log(`Team: ${team}\nCoach: ${coach}\nPlayers: ${playerList}`);
};

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry');
