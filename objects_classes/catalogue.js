function catalogue(arr) {
  const catalog = {};

  for (const data of arr) {
    const [key, value] = data.split(" : ");
    const group = key[0];

    if (!catalog[group]) catalog[group] = [];

    catalog[group].push({ [key]: +value });
  }

  Object.keys(catalog)
    .sort()
    .forEach((group) => {
      catalog[group].sort((a, b) => {
        const keyA = Object.keys(a)[0];
        const keyB = Object.keys(b)[0];
        
        return keyA.localeCompare(keyB, undefined, { sensitivity: "base" });
      });

      console.log(group);
      catalog[group].forEach((item) => {
        const [[itemKey, itemValue]] = Object.entries(item);
        console.log(`  ${itemKey}: ${itemValue}`);
      });
    });
}

catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

catalogue(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);
