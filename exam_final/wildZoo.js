function wildZoo(commands) {
  const animals = {};
  const areas = {};

  for (let cmd of commands) {
    if (cmd === "EndDay") break;

    const [op, args] = cmd.split(": ");
    const [name, food, area] = args.split("-");

    switch (op) {
      case "Add":
        if (!animals[name]) {
          animals[name] = 0;

          if (!areas[area]) areas[area] = [];
          areas[area].push(name);
        }

        animals[name] += +food;
        break;
      case "Feed":
        if (!animals[name]) break;

        animals[name] = Math.max(0, animals[name] - +food);

        if (animals[name] === 0) {
          console.log(`${name} was successfully fed`);
          delete animals[name];

          for (const area in areas) {
            if (areas[area].includes(name)) {
              areas[area] = areas[area].filter((str) => str !== name);

              if (areas[area].length === 0) delete areas[area];
              break;
            }
          }
        }
    }
  }

  console.log(
    "Animals:\n",
    Object.entries(animals)
      .map(([key, val]) => `${key} -> ${val}g`)
      .join("\n ")
  );

  console.log(
    "Areas with hungry animals:\n",
    Object.entries(areas)
      .map(([key, val]) => `${key}: ${val.length}`)
      .join("\n ")
  );
}

wildZoo([
  "Add: Adam-4500-ByTheCreek",
  "Add: Maya-7600-WaterfallArea",
  "Add: Maya-1230-WaterfallArea",
  "Feed: Jamie-2000",
  "EndDay",
]);
console.log("---------------");
wildZoo([
  "Add: Jamie-600-WaterfallArea",
  "Add: Maya-6570-WaterfallArea",
  "Add: Adam-4500-ByTheCreek",
  "Add: Bobbie-6570-WaterfallArea",
  "Feed: Jamie-2000",
  "Feed: Adam-2000",
  "Feed: Adam-2500",
  "EndDay",
]);
console.log("---------------");
wildZoo([
  "Add: Bonie-3490-RiverArea",
  "Add: Sam-5430-DeepWoodsArea",
  "Add: Bonie-200-RiverArea",
  "Add: Maya-4560-ByTheCreek",
  "Feed: Maya-2390",
  "Feed: Bonie-3500",
  "Feed: Johny-3400",
  "Feed: Sam-5500",
  "EndDay",
]);
