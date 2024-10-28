class Vehicle {
  constructor(type, model, parts, fuel) {
    this.type = type;
    this.model = model;
    this.parts = {
      ...parts,
      quality: parts.engine * parts.power,
    };
    this.fuel = fuel;
  }

  drive(fuelLoss) {
    this.fuel -= fuelLoss;
  }
}

const vehicle = new Vehicle("a", "b", { engine: 6, power: 100 }, 200);

vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

const vehicle1 = new Vehicle("l", "k", { engine: 9, power: 500 }, 840);

vehicle1.drive(20);
console.log(vehicle1.fuel);
