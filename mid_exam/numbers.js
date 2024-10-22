function numbers([numbersArr, ...commands]) {
  let numbers = numbersArr.split(" ").map(Number);

  for (const command of commands) {
    if (command === "Finish") break;

    let [operation, ...args] = command.split(" ");
    args = args.map(Number);

    switch (operation) {
      case "Add":
        numbers.push(...args);
        break;
      case "Remove":
        const indexToRemove = numbers.indexOf(args[0]);

        if (indexToRemove !== -1) numbers.splice(indexToRemove, 1);
        break;
      case "Replace":
        const indexToReplace = numbers.indexOf(args[0]);

        if (indexToReplace !== -1) numbers[indexToReplace] = args[1];
        break;
      case "Collapse":
        numbers = numbers.filter((n) => n > args[0]);
    }
  }

  console.log(numbers.join(" "));
}

numbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
numbers(["1 20 -1 10", "Collapse 8", "Finish"]);
numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
