function arrayModifier([arrStr, ...cmds]) {
  let arr = arrStr.split(" ").map(Number);

  for (const cmd of cmds) {
    if (cmd === "end") break;

    const [op, index1, index2] = cmd.split(" ");

    if (op === "multiply") arr[index1] *= arr[index2];
    else if (op === "decrease") arr = arr.map((n) => n - 1);
    else if (op === "swap")
      [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }

  console.log(arr.join(", "));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);

arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
