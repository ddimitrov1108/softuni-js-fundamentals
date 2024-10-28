function inventory(arr) {
  const heroes = [];

  for (const data of arr) {
    const [name, level, items] = data.split(" / ");

    heroes.push({
      name,
      level: +level,
      items,
    });
  }

  heroes
    .sort((a, b) => a.level - b.level)
    .forEach(({ name, level, items }) =>
      console.log(`Hero: ${name}\nlevel => ${level}\nitems => ${items}`)
    );
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

inventory([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);
