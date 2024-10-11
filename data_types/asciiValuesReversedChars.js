function asciiValuesReversedChars(a, b, c) {
  console.log([c, b, a].join(""));
  console.log([c, b, a].map((ch) => ch.charCodeAt()).join(" "));
}

asciiValuesReversedChars("a", "b", "c");
asciiValuesReversedChars("%", "2", "o");
asciiValuesReversedChars("1", "5", "p");
