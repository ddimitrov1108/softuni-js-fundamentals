function springVacation(arr) {
  const [
    days,
    budget,
    people,
    fuelPricePerKm,
    foodPerPerson,
    roomPricePerPerson,
  ] = arr.splice(0, 6).map(Number);

  const foodCost = foodPerPerson * people * days;
  let roomCost = roomPricePerPerson * people * days;

  if (people > 10) roomCost *= 0.75;

  let currentCost = foodCost + roomCost;

  for (let i = 0; i < days; i++) {
    currentCost += +arr[i] * fuelPricePerKm;

    if ((i + 1) % 3 === 0 || (i + 1) % 5 === 0)
      currentCost += currentCost * 0.4;
    else if ((i + 1) % 7 === 0) currentCost -= currentCost / people;

    if (currentCost > budget) {
      console.log(
        `Not enough money to continue the trip. You need ${Math.abs(
          currentCost - budget
        ).toFixed(2)}$ more.`
      );
      return;
    }
  }

  console.log(
    `You have reached the destination. You have ${Math.abs(
      budget - currentCost
    ).toFixed(2)}$ budget left.`
  );
}

springVacation([
  "7",
  "12000",
  "5",
  "1.5",
  "10",
  "20",
  "512",
  "318",
  "202",
  "154",
  "222",
  "108",
  "123",
]);

springVacation([
  "10",

  "20500",

  "11",

  "1.2",

  "8",

  "13",

  "100",

  "150",

  "500",

  "400",

  "600",

  "130",

  "300",

  "350",

  "200",

  "300",
]);
