function sortArray(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const result = [];

  while (sorted.length > 0) {
    result.push(sorted.pop());

    if (sorted.length > 0) result.push(sorted.shift());
  }

  console.log(result.join(" "));
}

sortArray([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sortArray([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
