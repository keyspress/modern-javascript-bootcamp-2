const printTeam = (team, coach, ...players) => {
  console.log(`Team: ${team}`);
  console.log(`Coach: ${coach}`);
  console.log(`Players: ${players.join(', ')}`);
};

const team = {
  name: 'Liberty',
  coach: 'Casey Penn',
  players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
};

printTeam(team.name, team.coach, ...team.players);

let cities = ['Barcelona', 'Cape Town', 'Bordeaux'];
cities = ['Miami', ...cities, 'Santiago'];

console.log(cities);

let house = {
  bedrooms: 2,
  bathrooms: 1.5,
  yearBuilt: 2000
};

let newHouse = {
  basement: true,
  ...house,
  bedrooms: 3
};

console.log(house);
console.log(newHouse);

const person = {
  name: 'Jim',
  age: 34
};

const location = {
  city: 'Tampa',
  country: 'US'
};

const overview = {
  ...person,
  ...location
};
console.log(overview);
