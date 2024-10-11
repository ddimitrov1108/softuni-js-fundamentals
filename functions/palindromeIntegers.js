function palindromeIntegers(numbers) {
  numbers.forEach((n) => console.log(n == `${n}`.split("").reverse().join("")));
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);
