function biscuitFactory(arr) {
  const [perDay, workers, otherPerMonth] = arr.map(Number);
  let perMonth = 0;

  for (let i = 1; i <= 30; i++) {
    perMonth += perDay * workers;
    
    if (i % 3 === 0) perMonth -= Math.floor(perDay * workers * 0.25);
  }

  const diff = Math.abs(perMonth - otherPerMonth);
  const percentage = ((diff / otherPerMonth) * 100).toFixed(2);

  console.log(`You have produced ${perMonth} biscuits for the past month.`);

  if (perMonth > otherPerMonth)
    console.log(`You produce ${percentage} percent more biscuits.`);
  else console.log(`You produce ${percentage} percent less biscuits.`);
}

biscuitFactory(["78", "8", "16000"]);
biscuitFactory(["65", "12", "26000"]);
biscuitFactory(["163", "16", "67020"]);
