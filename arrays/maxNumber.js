function maxNumber(arr) {
  const numbers = [];

  arr.forEach((n, i) => {
    const max = Math.max(...arr.slice(i + 1, arr.length));
    if (n > max) numbers.push(n);
  });

  console.log(numbers.join(" "));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
