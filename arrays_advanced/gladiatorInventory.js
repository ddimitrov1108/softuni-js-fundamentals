function gladiatorInventory([items, ...cmds]) {
  const inventory = items.split(" ");

  for (const cmd of cmds) {
    const [op, arg] = cmd.split(" ");
    const index = inventory.indexOf(arg);
    const isPresent = index > -1;

    if (op === "Buy" && index === -1) {
      inventory.push(arg);
    } else if (op === "Trash" && isPresent) {
      inventory.splice(index, 1);
    } else if (op === "Repair" && isPresent) {
      inventory.splice(index, 1);
      inventory.push(arg);
    } else if (op === "Upgrade") {
      const [itemToUpgrade, modifier] = arg.split("-");

      if (inventory.includes(itemToUpgrade)) {
        const index = inventory.indexOf(itemToUpgrade);
        inventory.splice(index + 1, 0, [itemToUpgrade, modifier].join(":"));
      }
    }
  }

  console.log(inventory.join(" "));
}

gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);

gladiatorInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
