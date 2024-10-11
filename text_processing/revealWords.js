function revealWords(words, text) {
  const arrWords = words.split(", ");

  console.log(
    text
      .split(" ")
      .map((word) => {
        if (!word.startsWith("*")) return word;

        const index = arrWords.findIndex((w) => w.length === word.length);
        return arrWords.splice(index, 1);
      })
      .join(" ")
  );
}

revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
