function passwordReset([password, ...operations]) {
  for (const operation of operations) {
    if (operation === "Done") break;

    if (operation === "TakeOdd") {
      password = password
        .split("")
        .filter((_, i) => i % 2)
        .join("");
    } else {
      let [op, ...args] = operation.split(" ");

      if (op === "Cut") {
        let tempPwd = password.split("");
        args = args.map(Number);
        tempPwd.splice(args[0], args[1]);
        password = tempPwd.join("");

        console.log(password);
      } else if (op === "Substitute") {
        if (password.includes(args[0])) {
          password = password.replace(new RegExp(args[0], "g"), args[1]);
          console.log(password);
        } else console.log("Nothing to replace!");
      }
    }
  }

  console.log(`Your password is: ${password}`);
}

passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);

passwordReset([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);
