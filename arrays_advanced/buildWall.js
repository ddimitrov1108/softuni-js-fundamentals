function buildWall(arr) {
  const numArr = arr.map(Number);
  const cubicCost = 1900;
  const concrete = {
    daily: [],
    total: 0,
  };

  let crews = numArr.filter((o) => o < 30).length;

  while (crews != 0) {
    let concreteByAllCrews = 0;

    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] !== 30) {
        numArr[i]++;
        concreteByAllCrews += 195;

        if (numArr[i] === 30) crews--;
      }
    }

    concrete.total += concreteByAllCrews;
    concrete.daily.push(concreteByAllCrews);
  }

  console.log(concrete.daily.join(", "));
  console.log(`${concrete.total * cubicCost} pesos`);
}

buildWall([21, 25, 28]);
buildWall([17]);
buildWall([17, 22, 17, 19, 17]);
