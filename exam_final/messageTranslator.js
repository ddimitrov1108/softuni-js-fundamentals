function messageTranslator([countInputs, ...commands]) {
  countInputs = +countInputs;
  const cmdRegex = /^![A-Z][a-z]{2,}!:/;
  const contentRegex = /\[[a-zA-Z]{8,}\]/;
  const extractorRegex = /^!([A-Z][a-z]{2,})!:\[([a-zA-Z]{8,})\]$/;

  for (let i = 0; i < countInputs; i++) {
    if (!cmdRegex.test(commands[i]) || !contentRegex.test(commands[i])) {
      console.log("The message is invalid");
      continue;
    }

    const match = commands[i].match(extractorRegex);
    const contentASCII = [...match[2]].map((c) => c.charCodeAt(0)).join(" ");

    console.log(`${match[1]}:`, contentASCII);
  }
}

messageTranslator(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready"]);
console.log("---------------");
messageTranslator([
  "3",
  "go:[outside]",
  "!drive!:YourCarToACarWash",
  "!Watch!:[LordofTheRings]",
]);
