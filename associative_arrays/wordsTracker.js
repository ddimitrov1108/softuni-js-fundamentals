function wordsTracker([wordsToTrack, ...words]) {
  const lowerCaseArr = wordsToTrack.split(" ").map((w) => w.toLowerCase());
  const trackedWords = {};

  for (const word of lowerCaseArr) {
    const count = words.filter((w) => w.toLowerCase() === word).length;

    if (count) trackedWords[word] = count;
  }

  for (const [key, value] of Object.entries(trackedWords).sort(
    (a, b) => b[1] - a[1]
  ))
    console.log(`${key} - ${value}`);
}

wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
