function blackFlag(arr) {
  const [daysOfPlunder, dailyPlunder, targetPlunder] = arr.map(Number);
  let totalPlunder = 0;

  for (let i = 1; i <= daysOfPlunder; i++) {
    totalPlunder += dailyPlunder;

    if (i % 3 === 0) totalPlunder += dailyPlunder / 2;
    if (i % 5 === 0) totalPlunder -= 0.3 * totalPlunder;
  }

  if (totalPlunder >= targetPlunder)
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  else {
    const plunderPercentage = ((totalPlunder / targetPlunder) * 100).toFixed(2);
    console.log(`Collected only ${plunderPercentage}% of the plunder.`);
  }
}

blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);
