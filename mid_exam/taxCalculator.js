function taxCalculator(arr) {
  const taxes = {
    family: { base: 50, discount: 5, km: { per: 3000, rate: 12 } },
    heavyDuty: { base: 80, discount: 8, km: { per: 9000, rate: 14 } },
    sports: { base: 100, discount: 9, km: { per: 2000, rate: 18 } },
  };

  const vehiclesInfo = arr.shift().split(">>");
  let taxRevunue = 0;

  for (const info of vehiclesInfo) {
    const [type, years, kmTraveled] = info.split(" ");

    if (!taxes[type]) {
      console.log("Invalid car type.");
      continue;
    }

    const total =
      taxes[type].base -
      taxes[type].discount * +years +
      Math.floor(+kmTraveled / taxes[type].km.per) * taxes[type].km.rate;

    taxRevunue += total;

    console.log(`A ${type} car will pay ${total.toFixed(2)} euros in taxes.`);
  }

  console.log(
    `The National Revenue Agency will collect ${taxRevunue.toFixed(
      2
    )} euros in taxes.`
  );
}

taxCalculator(["family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410"]);
taxCalculator([
  "family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012",
]);
