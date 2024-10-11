function oddAndEvenSum(number) {
  const evenSum = String(number)
    .split("")
    .reduce((acc, val) => (acc += val % 2 === 0 ? Number(val) : 0), 0);

  const oddSum = String(number)
    .split("")
    .reduce((acc, val) => (acc += val % 2 ? Number(val) : 0), 0);

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
