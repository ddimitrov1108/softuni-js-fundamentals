function ages(age) {
  if (age < 0) return "out of bounds";
  if (age >= 0 && age < 3) return "baby";
  if (age >= 3 && age < 14) return "child";
  if (age >= 14 && age < 20) return "teenager";
  if (age >= 20 && age < 66) return "adult";

  return "elder";
}

console.log(ages(20));
console.log(ages(1));
console.log(ages(100));
console.log(ages(-1));
