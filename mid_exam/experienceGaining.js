function experienceGaining([expNeeded, totalBattles, ...expGain]) {
  let exp = 0;
  let count = 0;

  while (exp < expNeeded && count < totalBattles) {
    const currBattle = count + 1;
    exp += expGain[count];

    if (currBattle % 3 === 0) exp += expGain[count] * 0.15;
    else if (currBattle % 5 === 0) exp -= expGain[count] * 0.1;
    else if (currBattle % 15 === 0) exp += expGain[count] * 0.05;

    count++;
  }

  if (exp >= expNeeded)
    console.log(
      `Player successfully collected his needed experience for ${count} battles.`
    );
  else
    console.log(
      `Player was not able to collect the needed experience, ${(
        expNeeded - exp
      ).toFixed(2)} more needed. `
    );
}

experienceGaining([500, 5, 50, 100, 200, 100, 30]);
experienceGaining([500, 5, 50, 100, 200, 100, 20]);
experienceGaining([400, 5, 50, 100, 200, 100, 20]);
