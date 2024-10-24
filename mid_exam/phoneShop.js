function phoneShop([phonesStr, ...cmds]) {
  const phones = phonesStr.split(", ");

  for (const cmd of cmds) {
    if (cmd === "End") break;

    let [op, arg] = cmd.split(" - ");

    switch (op) {
      case "Add":
        if (!phones.includes(arg)) phones.push(arg);
        break;
      case "Remove":
        if (phones.includes(arg)) phones.splice(phones.indexOf(arg), 1);
        break;
      case "Bonus phone":
        const [oldPhone, newPhone] = arg.split(":");

        if (phones.includes(oldPhone))
          phones.splice(phones.indexOf(oldPhone) + 1, 0, newPhone);

        break;
      case "Last":
        const index = phones.indexOf(arg);

        if (index !== -1) phones.push(...phones.splice(index, 1));
    }
  }

  console.log(phones.join(", "));
}

phoneShop([
  "SamsungA50, MotorolaG5, IphoneSE",
  "Add - Iphone10",
  "Remove - IphoneSE",
  "End",
]);

phoneShop([
  "HuaweiP20, XiaomiNote",
  "Remove - Samsung",
  "Bonus phone - XiaomiNote:Iphone5",
  "End",
]);

phoneShop([
  "SamsungA50, MotorolaG5, HuaweiP10",
  "Last - SamsungA50",
  "Add - MotorolaG5",
  "End",
]);
