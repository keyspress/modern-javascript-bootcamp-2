const getTip = amount => {
  if (typeof amount === 'number') {
    return amount * 0.25;
  } else {
    throw Error('argumnet must be a number');
  }
};

try {
  const result = getTip(55);
  console.log(result);
} catch (e) {
  console.log('caught');
}
