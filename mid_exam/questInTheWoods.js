function questInTheWoods(arr) {
  arr.map(Number);
  const days = arr.shift();
  const adventurers = arr.shift();
  const initEnergy = arr.shift();
  const waterPerPerson = arr.shift();
  const foodPerPerson = arr.shift();

  let energyLeft = initEnergy;
  let waterLeft = days * adventurers * waterPerPerson;
  let foodLeft = days * adventurers * foodPerPerson;

  for (let i = 0; i < days; i++) {
    energyLeft -= arr[i];

    if (energyLeft <= 0) {
      console.log(
        `You will run out of energy. You will be left with ${foodLeft} food and ${waterLeft} water.`
      );
      return;
    }

    if ((i + 1) % 2 === 0) {
      energyLeft *= 1.05;
      waterLeft -= adventurers / (waterLeft * 0.3);
    } else if ((i + 1) % 3 === 0) {
      energyLeft *= 1.1;
      foodLeft -= foodLeft / adventurers;
    }
  }

  console.log(
    `You are ready for the quest. You will be left with ${energyLeft.toFixed(2)} energy!`
  );
}

// function questInTheWoods(arr) {
//   const days = +arr.shift();
//   const adventurers = +arr.shift();
//   let energy = +arr.shift();
//   let waterPerPerson = +arr.shift();
//   let foodPerPerson = +arr.shift();
//   const dailyEnergyLoss = arr.map(Number);

//   let waterSupply = waterPerPerson * adventurers * days;
//   let foodSupply = foodPerPerson * adventurers * days;

//   for (let i = 1; i <= days; i++) {
//     if (energy <= 0) {
//       console.log(
//         `You will run out of energy. You will be left with ${foodSupply} food and ${waterSupply} water.`
//       );
//       return;
//     }

//     energy -= dailyEnergyLoss[i];

//     if (i % 2 === 0) {
//       energy += energy * 0.05;
//       waterSupply -= waterSupply * 0.3;
//     } else if (i % 3 === 0) {
//       energy += energy * 0.1;
//       foodSupply -= foodPerPerson / adventurers;
//     }
//   }

//   console.log(
//     `You are ready for the quest. You will be left with ${energy} energy!`
//   );
// }

questInTheWoods([
  "10",
  "7",
  "5035.5",
  "11.3",
  "7.2",
  "942.3",
  "500.57",
  "520.68",
  "540.87",
  "505.99",
  "630.3",
  "784.20",
  "321.21",
  "456.8",
  "330",
]);
