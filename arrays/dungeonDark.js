function dungeonDark(str) {
  const rooms = str.toString().split("|");
  const player = {
    health: 100,
    coins: 0,
    bestRoom: 0,
  };

  for (let i = 0; i < rooms.length; i++) {
    let [encounter, value] = rooms[i].split(" ");

    value = Number(value);
    player.bestRoom++;

    switch (encounter) {
      case "chest":
        player.coins += value;
        console.log(`You found ${value} coins.`);
        break;
      case "potion":
        if (player.health + value > 100) {
          console.log(`You healed for ${100 - player.health} hp.`);
          player.health = 100;
        } else {
          console.log(`You healed for ${value} hp.`);
          player.health += value;
        }

        console.log(`Current health: ${player.health} hp.`);
        break;
      default:
        player.health -= value;

        if (player.health > 0) console.log(`You slayed ${encounter}.`);
        else {
          console.log(`You died! Killed by ${encounter}.`);
          console.log(`Best room: ${player.bestRoom}`);
          return;
        }
    }
  }

  console.log(
    `You've made it!\nCoins: ${player.coins}\nHealth: ${player.health}`
  );
}

dungeonDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
