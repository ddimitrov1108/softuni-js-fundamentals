function hogwarts([word, ...commands]) {
  for (const cmd of commands) {
    if (cmd === "Abracadabra") break;

    let [op, ...args] = cmd.split(" ");

    switch (op) {
      case "Abjuration":
        word = word.toUpperCase();
        console.log(word);
        break;
      case "Necromancy":
        word = word.toLowerCase();
        console.log(word);
        break;
      case "Illusion":
        if (!word[+args[0]]) {
          console.log("The spell was too weak.");
          break;
        }

        let temp = word.split("");
        temp.splice(+args[0], 1, args[1]);
        word = temp.join("");
        console.log("Done!");
        break;
      case "Divination":
        if (word.includes(args[0])) {
          word = word.replace(new RegExp(args[0], "g"), args[1]);
          console.log(word);
        }

        break;
      case "Alteration":
        if (word.includes(args[0])) {
          word = word.replace(new RegExp(args[0]), "");
          console.log(word);
        }

        break;
      default:
        console.log("The spell did not work!");
    }
  }
}

hogwarts([
  "A7ci0",
  "Illusion 1 c",
  "Illusion 4 o",
  "Abjuration",
  "Abracadabra",
]);
console.log("---------------");
hogwarts([
  "TR1GG3R",
  "Necromancy",
  "Illusion 8 m",
  "Illusion 9 n",
  "Abracadabra",
]);
console.log("---------------");
hogwarts([
  "SwordMaster",
  "Target Target Target",
  "Abjuration",
  "Necromancy",
  "Alteration master",
  "Abracadabra",
]);
