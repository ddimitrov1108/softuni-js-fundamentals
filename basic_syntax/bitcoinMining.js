function bitcoinMining(numbers) {
  const btcValue = 11949.16;
  const goldValue = 67.51;

  const btc = {
    count: 0,
    dayOfFirstPurchase: 0,
    leftMoney: 0,
  };

  const dayValues = numbers.map((n, i) =>
    (i + 1) % 3 ? n * goldValue : (n - n * 0.3) * goldValue
  );

  dayValues.forEach((n, i) => {
    btc.leftMoney += n;

    while (btc.leftMoney >= btcValue) {
      btc.count += 1;
      btc.leftMoney -= btcValue;

      if (!btc.dayOfFirstPurchase) btc.dayOfFirstPurchase = i + 1;
    }
  });

  console.log(`Bought bitcoins: ${btc.count}`);

  if (btc.dayOfFirstPurchase)
    console.log(
      `Day of the first purchased bitcoin: ${btc.dayOfFirstPurchase}`
    );

  console.log(`Left money: ${btc.leftMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);
