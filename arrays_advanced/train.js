function train([wags, capacity, ...commands]) {
  const wagons = wags.split(" ").map(Number);
  capacity = +capacity;

  for (let command of commands) {
    if (command.startsWith("Add")) wagons.push(Number(command.split(" ")[1]));
    else {
      const passengers = Number(command);
      const index = wagons.findIndex(w => w + passengers <= capacity);

      if(index != -1)
        wagons[index] += passengers;
      else
      wagons.push(passengers);
    }
  }

  console.log(wagons.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
