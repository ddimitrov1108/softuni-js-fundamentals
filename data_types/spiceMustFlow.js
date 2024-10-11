function spiceMustFlow(startingYield) {
  let daysOperated = 0;
  let totalSpiceExtracted = 0;

  while (startingYield >= 100) {
    totalSpiceExtracted += startingYield - 26;
    startingYield -= 10;
    daysOperated++;
  }

  totalSpiceExtracted -= 26;

  if (totalSpiceExtracted < 0) totalSpiceExtracted = 0;

  console.log(daysOperated);
  console.log(totalSpiceExtracted);
}

spiceMustFlow(111);
spiceMustFlow(450);
