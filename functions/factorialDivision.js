function factorialDivision(a, b) {
  const factorial = (n) => (n === 0 || n === 1 ? 1 : n * factorial(n - 1));
  console.log((factorial(a) / factorial(b)).toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);
