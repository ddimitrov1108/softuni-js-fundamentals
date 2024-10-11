function division(number) {
  const divisions = [2, 3, 6, 7, 10].filter((n) => number % n === 0);

  console.log(
    !divisions.length
      ? "Not divisible"
      : `The number is divisible by ${Math.max(...divisions)}`
  );
}

division(30);
division(15);
division(12);
division(1643);
