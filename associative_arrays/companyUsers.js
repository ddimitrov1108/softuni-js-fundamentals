function companyUsers(arr) {
  const result = {};

  arr.forEach((o) => {
    const [company, user] = o.split(" -> ");

    if (result[company]) {
      if (result[company].indexOf(user) === -1) result[company].push(user);
    } else result[company] = [user];
  });

  Object.keys(result)
    .sort()
    .forEach((o) => {
      console.log(`${o}`);

      result[o].forEach((e) => console.log(`-- ${e}`));
    });
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
