function printSum(start, end) {
  let sum = 0;
  let print = "";

  for (let i = start; i <= end; i++) {
    print += `${i} `;
    sum += i;
  }

  console.log(`${print}\nSum: ${sum}`);
}

printSum(5, 10);
printSum(0, 26);
printSum(50, 60);
