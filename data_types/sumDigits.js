function sumDigits(number) {
  console.log(
    String(number)
      .split("")
      .reduce((acc, val) => (acc += Number(val)), 0)
  );
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);
