function cardGame(arr) {
  const higherCards = { J: 11, Q: 12, K: 13, A: 14 };
  const cardType = { S: 4, H: 3, D: 2, C: 1 };
  const uniqueUsersDeck = {};

  arr.forEach((el) => {
    const name = el.split(": ")[0];
    if (!!uniqueUsersDeck[name]) return;

    uniqueUsersDeck[name] = [
      ...new Set(
        arr
          .filter((o) => o.startsWith(name))
          .map((o) => o.split(": ")[1].split(", "))
          .flat()
      ),
    ];
  });

  for (const [key, value] of Object.entries(uniqueUsersDeck)) {
    const points = value.reduce((acc, val) => {
      const match = val.match(/^(\d+)([A-Z])$/);
      const [P, T] = match ? match.slice(1) : val.split("");
      return acc + (match ? Number(P) : higherCards[P]) * cardType[T];
    }, 0);

    console.log(`${key}: ${points}`);
  }
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);

cardGame([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);
