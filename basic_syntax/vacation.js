function vacation(peopleGroup, groupType, day) {
  const pricePerPerson = {
    Students: {
      Friday: 8.45,
      Saturday: 9.8,
      Sunday: 10.46,
    },
    Business: {
      Friday: 10.9,
      Saturday: 15.6,
      Sunday: 16,
    },
    Regular: {
      Friday: 15,
      Saturday: 20,
      Sunday: 22.5,
    },
  };

  const price = pricePerPerson[groupType][day];
  let total = peopleGroup * price;

  if (groupType === "Students" && peopleGroup >= 30)
    total = total - total * 0.15;
  else if (groupType === "Business" && peopleGroup >= 100)
    total = (peopleGroup - 10) * price;
  else if (groupType === "Regular" && peopleGroup >= 10 && peopleGroup <= 20)
    total = total - total * 0.05;

  console.log(`Total price: ${total.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
