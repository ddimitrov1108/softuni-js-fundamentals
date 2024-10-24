function shoppingList([itemsStr, ...cmds]) {
  const items = itemsStr.split("!");

  for (const cmd of cmds) {
    if (cmd === "Go Shopping!") break;

    const [op, ...args] = cmd.split(" ");
    const index = items.indexOf(args[0]);

    if (op === "Urgent" && index === -1) items.splice(0, 0, args[0]);
    else if (op === "Unnecessary" && index != -1) items.splice(index, 1);
    else if (op === "Correct" && index != -1) {
      items.splice(index, 1);
      items.splice(index, 0, args[1]);
    } else if (op === "Rearrange" && index != -1) {
      items.splice(index, 1);
      items.push(args[0]);
    }
  }

  console.log(items.join(", "));
}

shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);

shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
