function piccolo(cmds) {
  const parkingLot = new Set();

  for (const cmd of cmds) {
    const [op, carNumber] = cmd.split(", ");

    if (op === "IN") parkingLot.add(carNumber);
    else parkingLot.delete(carNumber);
  }

  if (!parkingLot.size) console.log("Parking Lot is Empty");
  else console.log([...parkingLot].sort().join("\n"));
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
