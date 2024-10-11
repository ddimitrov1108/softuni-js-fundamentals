function partyTime(guests) {
  const allGuests = guests.slice(0, guests.indexOf("PARTY"));
  const presentGuests = guests.slice(guests.indexOf("PARTY") + 1);

  presentGuests.forEach((guest) => {
    const index = allGuests.indexOf(guest);
    if (index != -1) allGuests.splice(index, 1);
  });

  const vips = allGuests.filter((g) => Number(g[0])).join("\n");
  const regulars = allGuests.filter((g) => !Number(g[0])).join("\n");

  console.log(allGuests.length);
  
  if(vips)
    console.log(vips);

  console.log(regulars);
}

partyTime([
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "7IK9Yo0h",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);

partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
