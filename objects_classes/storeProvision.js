function storeProvision(stocksArr, ordersArr) {
  const stocks = {};

  for (let i = 0; i < stocksArr.length; i += 2)
    stocks[stocksArr[i]] = +stocksArr[i + 1];

  for (let i = 0; i < ordersArr.length; i += 2) {
    if (stocks[ordersArr[i]]) stocks[ordersArr[i]] += +ordersArr[i + 1];
    else stocks[ordersArr[i]] = +ordersArr[i + 1];
  }

  console.log(
    Object.entries(stocks)
      .map(([key, val]) => `${key} -> ${val}`)
      .join("\n")
  );
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
console.log();
storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
