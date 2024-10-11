function sortArray(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const result = [];

  while (sortedArr.length > 0) {
    result.push(sortedArr.pop());

    if (sortedArr.length > 0)
      result.push(sortedArr.shift());
  }

  console.log(result.join(" "));
}

sortArray([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sortArray([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
