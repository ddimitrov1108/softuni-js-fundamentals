function legendaryFarming(arr) {
  const items = arr.split(" ").map((o) => o.toLowerCase());
  const required = 250;
  const legendaryMaterials = ["shards", "fragments", "motes"];
  const legendaryItems = {
    shards: "Shadowmourne",
    fragments: "Valanyr",
    motes: "Dragonwrath",
  };

  const harvestedMaterials = {
    legendary: {
      shards: 0,
      fragments: 0,
      motes: 0,
    },
    junk: {},
  };

  let winner = "";

  for (let i = 0; i <= items.length - 1; i += 2) {
    const quantity = Number(items[i]);
    const harvest = items[i + 1].toLowerCase();

    if (legendaryMaterials.includes(harvest)) {
      harvestedMaterials.legendary[harvest] += quantity;

      if (harvestedMaterials.legendary[harvest] >= required) {
        winner = legendaryItems[harvest];
        harvestedMaterials.legendary[harvest] -= required;
        break;
      }
    } else {
      if (!harvestedMaterials.junk[harvest])
        harvestedMaterials.junk[harvest] = quantity;
      else harvestedMaterials.junk[harvest] += quantity;
    }
  }

  const sortedLegendaryEntries = Object.entries(
    harvestedMaterials.legendary
  ).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

  const sortedJunkEntries = Object.entries(harvestedMaterials.junk).sort(
    (a, b) => a[0].localeCompare(b[0])
  );

  console.log(`${winner} obtained!`);

  for (const [material, quantity] of sortedLegendaryEntries)
    console.log(`${material}: ${quantity}`);

  for (const [material, quantity] of sortedJunkEntries)
    console.log(`${material}: ${quantity}`);
}

legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
legendaryFarming(
  "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
);
