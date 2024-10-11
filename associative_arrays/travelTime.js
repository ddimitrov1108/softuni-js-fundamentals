function travelTime(arr) {
  const destination = generateDestination(arr);

  function generateDestination(arr) {
    let obj = {};

    arr.forEach((line) => {
      let [country, city, price] = line.split(" > ");

      if (!obj.hasOwnProperty(country)) obj[country] = {};
      if (!obj[country].hasOwnProperty(city)) obj[country][city] = price;

      let oldPrice = obj[country][city];

      if (oldPrice > price) obj[country][city] = price;
    });
    return obj;
  }

  let sorted = Object.keys(destination).sort((a, b) => a.localeCompare(b));

  for (const country of sorted) {
    console.log(`${country} -> ${cityPrice(destination[country])}`);
  }

  function cityPrice(obj) {
    let result = [];
    const sortedObj = Object.fromEntries(
      Object.entries(obj).sort((a, b) => parseInt(a[1]) - parseInt(b[1]))
    );

    for(const [key, value] of  Object.entries(sortedObj))
      result.push(`${key} -> ${value}`);

    return result.join(" ");
  }
}

travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);

travelTime([
  "Bulgaria > Sofia > 25000",
  "Bulgaria > Sofia > 25000",
  "Kalimdor > Orgrimar > 25000",
  "Albania > Tirana > 25000",
  "Bulgaria > Varna > 25010",
  "Bulgaria > Lukovit > 10",
]);
