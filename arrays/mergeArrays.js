function mergeArrays(firstArr, secondArr) {
  const arr = [];

  firstArr.forEach((n, i) => {
    arr.push(
      i % 2 ? `${n}${secondArr[i]}` : `${Number(n) + Number(secondArr[i])}`
    );
  });

  console.log(arr.join(" - "));
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
