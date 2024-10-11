function ladyBug([fieldSize, initIndexes, ...commands]) {
  const indexes = initIndexes.split(" ").map(Number);
  const field = Array(fieldSize).fill(0);

  indexes.forEach((i) => {
    if (i <= field.length - 1) field[i] = 1;
  });

  for (let i = 0; i < commands.length; i++) {
    let [position, direction, flyDuration] = commands[i].split(" ");
    let nextPosition = 0;

    position = Number(position);
    flyDuration = Number(flyDuration);

    if (field[position] === 0 || position < 0 || position > field.length - 1)
      continue;

    field[position] = 0;

    if (flyDuration < 0) {
      direction = direction === "right" ? "left" : "right";
      flyDuration = Math.abs(flyDuration);
    }

    nextPosition = position + (direction === "right" ? 1 : -1) * flyDuration;

    while (field[nextPosition] === 1)
      nextPosition += (direction === "right" ? 1 : -1) * flyDuration;

    if (nextPosition > field.length - 1 || nextPosition < 0) continue;

    field[nextPosition] = 1;
  }

  console.log(field.join(" "));
}

ladyBug([3, "0 1", "0 right 1", "2 right 1"]);
ladyBug([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
ladyBug([5, "3", "3 left 2", "1 left -2"]);
