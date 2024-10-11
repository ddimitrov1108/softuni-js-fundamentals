function houseParty(arr) {
  const going = [];

  arr.forEach((guest) => {
    const currGuest = guest.split(" is")[0];

    if (guest.endsWith("is going!")) {
      if (going.find((g) => g === currGuest))
        console.log(`${currGuest} is already in the list!`);
      else going.push(currGuest);
    } 
    else {
      if (going.find((g) => g === currGuest))
        going.splice(
          going.findIndex((g) => g === currGuest),
          1
        );
      else console.log(`${currGuest} is not in the list!`);
    }
  });

  going.forEach((g) => console.log(g));
}

houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);

houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
