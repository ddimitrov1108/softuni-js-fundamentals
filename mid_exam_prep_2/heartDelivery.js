function heartDelivery([arrStr, ...cmds]) {
  const arr = arrStr.split("@").map(Number);
  const totalHouses = arr.length;

  let position = 0;
  let celebratedHouses = 0;

  for (const cmd of cmds) {
    if (cmd === "Love!") break;

    position += +cmd.split(" ")[1];

    if (position < 0 || position >= totalHouses) position = 0;

    if (arr[position] != 0) {
      arr[position] -= 2;

      if (arr[position] === 0) {
        celebratedHouses++;
        console.log(`Place ${position} has Valentine's day.`);
      }
    } else console.log(`Place ${position} already had Valentine's day.`);
  }

  console.log(`Cupid's last position was ${position}.`);

  if (celebratedHouses === totalHouses) console.log("Mission was successful.");
  else
    console.log(`Cupid has failed ${totalHouses - celebratedHouses} places.`);
}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);

heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);

heartDelivery([
  "4@2@4@2",
  "Jump 1",
  "Jump 2",
  "Jump 1",
  "Jump 2",
  "Jump 2",
  "Jump 2",
  "Love!",
]);
