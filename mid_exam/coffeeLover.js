function coffeeLover([coffees, _, ...cmds]) {
  let coffeesArr = coffees.split(" ");

  for (const cmd of cmds) {
    const [op, ...args] = cmd.split(" ");

    if (op === "Include") coffeesArr.push(...args);
    else if (op === "Remove" && coffeesArr.length >= +args[1]) {
      coffeesArr.splice(
        args[0] === "first" ? 0 : coffeesArr.length - +args[1],
        +args[1]
      );
    } else if (
      op === "Prefer" &&
      !!coffeesArr[+args[0]] &&
      !!coffeesArr[+args[1]]
    ) {
      let temp = coffeesArr[+args[0]];
      coffeesArr[+args[0]] = coffeesArr[+args[1]];
      coffeesArr[+args[1]] = temp;
    } else coffeesArr.reverse();
  }

  console.log(`Coffees:\n${coffeesArr.join(" ")}`);
}

coffeeLover([
  "Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
  "5",
  "Include TurkishCoffee",
  "Remove first 2",
  "Remove last 1",
  "Prefer 3 1",
  "Reverse",
]);

coffeeLover([
  "Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
  "5",
  "Include OrdinaryCoffee",
  "Remove first 1",
  "Prefer 0 1",
  "Prefer 3 1",
  "Reverse",
]);

coffeeLover([
  "Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
  "3",
  "Include OrdinaryCoffee",
  "Remove first 1",
  "Prefer 4 1",
]);
