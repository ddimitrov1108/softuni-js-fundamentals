function perfectNumber(n) {
  let sum = 0;

  for (let i = 1; i < n; i++) if (n % i === 0) sum += i;

  console.log(n === sum ? "We have a perfect number!" : "It's not so perfect.");
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
