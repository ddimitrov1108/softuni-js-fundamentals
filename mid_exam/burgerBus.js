function burgerBus(arr) {
  const visits = +arr.shift();
  let profit = 0;

  for (let i = 1; i <= visits; i++) {
    let [cityName, earned, expenses] = arr.splice(0, 3);
    earned = +earned;
    expenses = +expenses;

    if (i % 5 === 0) earned -= earned * 0.1;
    else if (i % 3 === 0) expenses += expenses * 0.5;

    earned -= expenses;
    profit += earned;

    console.log(`In ${cityName} Burger Bus earned ${earned.toFixed(2)} leva.`);
  }

  console.log(`Burger Bus total profit: ${profit.toFixed(2)} leva.`);
}

burgerBus([
  "3",
  "Sofia",
  "895.67",
  "213.50",
  "Plovdiv",
  "2563.20",
  "890.26",
  "Burgas",
  "2360.55",
  "600.00",
]);

burgerBus([
  "5",
  "Lille",
  "2226.00",
  "1200.60",
  "Rennes",
  "6320.60",
  "5460.20",
  "Reims",
  "600.20",
  "452.32",
  "Bordeaux",
  "6925.30",
  "2650.40",
  "Montpellier",
  "680.50",
  "290.20",
]);
