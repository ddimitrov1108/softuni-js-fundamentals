function race([participants, ...infos]) {
  const racers = participants.split(", ");
  const results = {};

  for (const info of infos) {
    if (info === "end of race") break;

    const name = info.replace(/[^a-zA-Z]/g, "");

    if (racers.includes(name)) {
      results[name] =
        (results[name] || 0) +
        info
          .replace(/[^0-9]/g, "")
          .split("")
          .reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
  }

  const top3 = Object.entries(results)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((result) => `${result[0]}`);

  console.log(`1st place: ${top3[0]}`);
  console.log(`2nd place: ${top3[1]}`);
  console.log(`3rd place: ${top3[2]}`);
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);

race([
  "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
  "Mi*&^%$ch123o!#$%#nne787) ",
  "%$$B(*&&)i89ll)*&) ",
  "R**(on%^&ald992) ",
  "T(*^^%immy77) ",
  "Ma10**$#g0g0g0i0e",
  "end of race",
]);
