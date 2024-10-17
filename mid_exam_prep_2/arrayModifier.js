function arrayModifier([arrStr, ...commands]) {
  let arr = arrStr.split(" ").map(Number);

  for (const command of commands) {
    const [operation, index1, index2] = command.split(" ");

    if (operation === "end") break;
    if (operation === "multiply") arr[index1] *= arr[index2];
    else if (operation === "decrease") arr = arr.map((n) => n - 1);
    else if (operation === "swap") {
      const temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
    }
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
