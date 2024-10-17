function movingTarget([targetsStr, ...commands]) {
  const targets = targetsStr.split(" ").map(Number);

  for (const command of commands) {
    if (command === "End") break;

    let [operation, index, value] = command.split(" ");
    index = +index;
    value = +value;

    const isValidTarget = index >= 0 && index < targets.length;

    if (operation === "Shoot" && isValidTarget) {
      targets[index] -= value;

      if (targets[index] <= 0) targets.splice(index, 1);
    } 
    else if (operation === "Add") {
      if (isValidTarget) targets.splice(index, 0, value);
      else console.log("Invalid placement!");
    } 
    else if (operation === "Strike") {
      const start = index - value;
      const end = index + value;

      if (start >= 0 && end < targets.length)
        targets.splice(start, end - start + 1);
      else console.log("Strike missed!");
    }
  }

  console.log(targets.join("|"));
}

movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);

movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
