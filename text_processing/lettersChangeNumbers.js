function lettersChangeNumbers(str) {
  const upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXXZ";
  const lowerCaseStr = upperCaseStr.toLowerCase();
  const seqArr = str.trim().split(/\s+/);

  let position = 0;
  let sum = 0;

  for (let i = 0; i < seqArr.length; i++) {
    const str = seqArr[i];
    const num = Number(str.substr(1, str.length - 2));
    const firstChar = str[0];
    const lastChar = str[str.length - 1];

    if (upperCaseStr.includes(firstChar)) {
      position = upperCaseStr.indexOf(firstChar) + 1;
      sum += num / position;
    } else {
      position = lowerCaseStr.indexOf(firstChar) + 1;
      sum += num * position;
    }

    if (upperCaseStr.includes(lastChar)) {
      position = upperCaseStr.indexOf(lastChar) + 1;
      sum -= position;
    } else if (lowerCaseStr.includes(lastChar)) {
      position = lowerCaseStr.indexOf(lastChar) + 1;
      sum += position;
    }
  }

  console.log(sum.toFixed(2));
}

lettersChangeNumbers("A12b s17G");
lettersChangeNumbers("P34562Z q2576f   H456z");
lettersChangeNumbers("a1A");
