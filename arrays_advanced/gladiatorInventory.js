function gladiatorInventory([items, ...operations]) {
  const inventory = items.split(" ");
  
  for (const op of operations) {
    const [operation, item] = op.split(" ");
    const itemIndex = inventory.indexOf(item);
    const itemIsPresent = itemIndex > -1;

    if (operation === "Buy" && itemIndex === -1) {
      inventory.push(item);
    } else if (operation === "Trash" && itemIsPresent) {
      inventory.splice(itemIndex, 1);
    } else if (operation === "Repair" && itemIsPresent) {
      inventory.splice(itemIndex, 1);
      inventory.push(item);
    } else if (operation === "Upgrade") {
      const [itemToUpgrade, modifier] = item.split("-");

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
