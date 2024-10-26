function groceryShopping([itemsStr, ...cmds]) {
  const items = itemsStr.split("|");

  for (const cmd of cmds) {
    if (cmd === "Shop!") break;

    const [op, ...args] = cmd.split("%");

    switch (op) {
      case "Important":
        const index = items.indexOf(args[0]);

        if (index === -1) items.unshift(args[0]);
        else items.unshift(items.splice(index, 1));

        break;
      case "Add":
        if (items.indexOf(args[0]) === -1) items.push(args[0]);
        else console.log("The product is already in the list.");
        break;
      case "Swap":
        const i1 = items.indexOf(args[0]);
        const i2 = items.indexOf(args[1]);

        if (i1 !== -1 && i2 !== -1)
          [items[i1], items[i2]] = [items[i2], items[i1]];
        else console.log(`Product ${i1 === -1 ? args[0] : args[1]} missing!`);
        break;
      case "Remove":
        const removeIndex = items.indexOf(args[0]);

        if (removeIndex !== -1) items.splice(removeIndex, 1);
        else console.log(`Product ${args[0]} isn't in the list.`);
        break;
      case "Reversed":
        items.reverse();
    }
  }

  console.log(items.map((o, i) => `${i + 1}. ${o}`).join("\n"));
}

groceryShopping([
  "eggs|milk|bread|fish",
  "Important%bread",
  "Swap%eggs%tomato",
  "Shop!",
]);

groceryShopping([
  "apple|cheese|salt|bananas",
  "Remove%cheese",
  "Swap%salt%bananas",
  "Shop!",
]);

groceryShopping([
  "kiwi|paper|coffee",
  "Add%coffee",
  "Important%bread",
  "Shop!",
]);
