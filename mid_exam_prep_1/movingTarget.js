function movingTarget([targetsStr, ...cmds]) {
  const targets = targetsStr.split(" ").map(Number);

  for (const cmd of cmds) {
    if (cmd === "End") break;

    let [op, index, value] = cmd.split(" ");
    index = +index;
    value = +value;

    const isValidTarget = index >= 0 && index < targets.length;

    if (op === "Shoot" && isValidTarget) {
      targets[index] -= value;

      if (targets[index] <= 0) targets.splice(index, 1);
    } else if (op === "Add") {
      if (isValidTarget) targets.splice(index, 0, value);
      else console.log("Invalid placement!");
    } else if (op === "Strike") {
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
