function sortByCriteria(arr) {
  arr
    .sort((a, b) => {
      return a.length - b.length || a.localeCompare(b);
    })
    .forEach((e) => console.log(e));
}

sortByCriteria(["alpha", "beta", "gamma"]);
sortByCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
