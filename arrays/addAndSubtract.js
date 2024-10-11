function addAndSubtract(numbers) {
  const modifiedNumbers = numbers.map((n, i) => n + (n % 2 ? -i : i));

  console.log(modifiedNumbers);
  console.log(numbers.reduce((acc, val) => (acc += val), 0));
  console.log(modifiedNumbers.reduce((acc, val) => (acc += val), 0));
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
