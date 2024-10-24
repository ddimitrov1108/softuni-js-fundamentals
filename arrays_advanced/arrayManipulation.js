function arrayManipulator(arr, cmds) {
  for (const cmd of cmds) {
    let [op, ...args] = cmd.split(" ");
    args = args.map(Number);

    if (op === "print") break;

    switch (op) {
      case "add":
        arr.splice(args[0], 0, args[1]);
        break;
      case "addMany":
        arr.splice(args[0], 0, ...args.slice(1));
        break;
      case "contains":
        console.log(arr.indexOf(args[0]));
        break;
      case "remove":
        arr.splice(args[0], 1);
        break;
      case "shift":
        while (args[0]--) arr.push(arr.shift());
        break;
      case "sumPairs":
        arr = arr.reduce((acc, curr, index, array) => {
          if (index % 2 === 0) {
            acc.push(curr + (index < array.length - 1 ? array[index + 1] : 0));
          }
          return acc;
        }, []);
    }
  }

  console.log(`[ ${arr.join(", ")} ]`);
}

arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);
arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
