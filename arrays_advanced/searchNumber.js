function searchNumber(arr, options) {
  console.log(
    `Number ${options[2]} occurs ${arr
      .splice(options[1], options[0] - options[1])
      .reduce((acc, val) => (acc += val === options[2] ? 1 : 0), 0)} times.`
  );
}

searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
