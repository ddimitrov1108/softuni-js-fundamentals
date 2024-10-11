function needForSpeed(arr) {
  const cars = {};
  const numCars = +arr[0];

  for (let i = 1; i <= numCars; i++) {
    const [car, mileage, fuel] = arr[i].split("|");
    cars[car] = { mileage: +mileage, fuel: +fuel };
  }

  for (let i = numCars + 1; i < arr.length; i++) {
    let [action, car, ...params] = arr[i].split(" : ");
    params = params.map(Number);

    if (action === "Stop") break;

    switch (action) {
      case "Drive":
        const distance = params[0];
        const fuelNeeded = params[1];

        if (cars[car].fuel < fuelNeeded)
          console.log(`Not enough fuel to make that ride`);
        else {
          cars[car].mileage += distance;
          cars[car].fuel -= fuelNeeded;
          console.log(
            `${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`
          );
          if (cars[car].mileage >= 100000) {
            console.log(`Time to sell the ${car}!`);
            delete cars[car];
          }
        }
        break;
      case "Refuel":
        const fuelToAdd = params[0];
        const fuelToRefuel = Math.min(fuelToAdd, 75 - cars[car].fuel);

        cars[car].fuel += fuelToRefuel;
        console.log(`${car} refueled with ${fuelToRefuel} liters`);
        break;
      case "Revert":
        const kmsToRevert = params[0];
        cars[car].mileage -= kmsToRevert;

        if (cars[car].mileage < 10000) cars[car].mileage = 10000;
        else
          console.log(`${car} mileage decreased by ${kmsToRevert} kilometers`);
    }
  }

  for (const car in cars)
    console.log(
      `${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`
    );
}

needForSpeed([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);

needForSpeed([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
