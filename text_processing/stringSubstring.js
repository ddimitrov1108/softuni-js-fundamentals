function stringSubstring(word, text) {
  console.log(
    text.split(" ").find((w) => w.toLowerCase() === word.toLowerCase())
      ? word
      : `${word} not found!`
  );
}

stringSubstring("javascript", "JavaScript is the best programming language");
stringSubstring("python", "JavaScript is the best programming language");
