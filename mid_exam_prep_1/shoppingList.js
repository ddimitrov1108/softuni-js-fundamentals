function shoppingList([itemsStr, ...commands]) {
  const items = itemsStr.split("!");

  for (const command of commands) {
    if (command === "Go Shopping!") break;

    const [operation, ...args] = command.split(" ");
    const index = items.indexOf(args[0]);

    if (operation === "Urgent" && index === -1) 
      items.splice(0, 0, args[0]);
    else if (operation === "Unnecessary" && index != -1)
      items.splice(index, 1);
    else if (operation === "Correct" && index != -1) {
      items.splice(index, 1);
      items.splice(index, 0, args[1]);
    } else if (operation === "Rearrange" && index != -1) {
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
