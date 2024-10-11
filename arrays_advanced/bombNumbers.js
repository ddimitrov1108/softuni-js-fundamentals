function bombNumbers(arr1, arr2) {
  const specialBombNum = arr2.shift();
  const powerBomb = arr2.shift();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === specialBombNum) {
      let lowerRange = i - powerBomb;
      let bombCount = 1 + powerBomb * 2;

      while (lowerRange < 0) {
        lowerRange++;
        bombCount--;
      }

      arr1.splice(lowerRange, bombCount);
      i--;
    }
  }

  console.log(arr1.reduce((acc, val) => (acc += val), 0));
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
