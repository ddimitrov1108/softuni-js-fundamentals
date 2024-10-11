function hardWords(data) {
  let textToFill = data[0];

  const regex = /\_+/g;
  const wordsToFill = data[1];
  const matches = textToFill.match(regex);

  for (let match of matches) {
    let word = wordsToFill.find((word) => word.length === match.length);

    if (word) textToFill = textToFill.replace(match, word);
  }

  console.log(textToFill);
}

hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
