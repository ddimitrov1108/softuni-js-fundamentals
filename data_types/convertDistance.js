function convertDistance(meters) {
  const km = meters / 1000;
  const miles = km * 0.621371;

  console.log(`${meters} meters is equal to ${km} kilometers.`);
  console.log(`${km} kilometers is equal to ${miles.toFixed(2)} miles.`);
}

convertDistance(1852);
convertDistance(798);
