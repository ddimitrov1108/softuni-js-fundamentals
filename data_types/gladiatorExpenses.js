function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  const helmetBreaks = Math.floor(lostFights / 2);
  const swordBreaks = Math.floor(lostFights / 3);

  let shieldBreaks = 0;
  let armorBreaks = 0;

  for (let i = 1; i <= lostFights; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      shieldBreaks++;

      if (shieldBreaks % 2 === 0) armorBreaks++;
    }
  }

  let totalExpenses =
    helmetBreaks * helmetPrice +
    swordBreaks * swordPrice +
    shieldBreaks * shieldPrice +
    armorBreaks * armorPrice;

  console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
