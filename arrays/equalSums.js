function equalSums(arr) {
  for (let i = 0; i < arr.length; i++) {
    const leftSum = arr.slice(0, i).reduce((acc, val) => (acc += val), 0);
    const rightSum = arr.slice(i + 1).reduce((acc, val) => (acc += val), 0);

    if (leftSum === rightSum) {
      console.log(i);
      return;
    }
  }

  console.log("no");
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
