function barIncome(arr) {
  const regex = /^%([A-Z][a-z]+)%<(\w+)>\|(\d+)\|(\d+(\.\d+)?)\$/;
  let total = 0;

  for (const data of arr) {
    if (data === "end of shift") break;

    const match = data.match(regex);

    if (!match) continue;

    let [_, customer, product, count, price, ...rest] = match;
    count = +count;
    price = +price;

    total += count * price;
    console.log(`${customer}: ${product} - ${(count * price).toFixed(2)}`);
  }

  console.log(`Total income: ${total.toFixed(2)}`);
}

barIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);

barIncome(['%InvalidName%<Croissant>|2|10.3$', 

  '%Peter%<Gum>1.3$', 
  
  '%Maria%<Cola>|1|2.4', 
  
  '%Valid%<Valid>valid|10|valid20$', 
  
  'end of shift'] );
