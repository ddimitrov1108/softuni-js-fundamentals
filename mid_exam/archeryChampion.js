function archeryChampion([targetsStr, ...cmds]) {
  const targets = targetsStr.split("|").map(Number);
  let points = 0;

  for (const cmd of cmds) {
    if (cmd === "Game over") break;

    if (cmd === "Reverse") {
      targets.reverse();
      continue;
    }

    let [op, startIndex, length] = cmd.split("@");
    startIndex = +startIndex;
    length = +length;

    if (startIndex < 0 || startIndex >= targets.length) continue;

    let shootIndex = startIndex;

    if (op === "Shoot Left") {
      shootIndex = (startIndex - length) % targets.length;
      if (shootIndex < 0) shootIndex += targets.length;
    } 
    else {
      shootIndex = (startIndex + length) % targets.length;
      if (shootIndex < 0) shootIndex += targets.length;
    }

    points += Math.min(5, targets[shootIndex]);
    targets[shootIndex] = Math.max(0, targets[shootIndex] - 5);
  }

  console.log(targets.join(" - "));
  console.log(`John finished the archery tournament with ${points} points!`);
}

archeryChampion([
  "10|10|10|10|10",
  "Shoot Left@0@2",
  "Shoot Right@4@5",
  "Shoot Right@6@5",
  "Reverse",
  "Game over",
]);

archeryChampion([
  "20|30|40|50|60",
  "Shoot Left@0@12",
  "Shoot Right@4@15",
  "Shoot Left@6@5",
  "Reverse",
  "Game over",
]);
