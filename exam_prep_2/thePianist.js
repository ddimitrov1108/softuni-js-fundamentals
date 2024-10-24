function thePianist([n, ...arr]) {
  const pieces = +n;
  const collection = {};

  for (let i = 0; i < n; i++) {
    let [piece, composer, key] = arr[i].split("|");
    collection[piece] = { composer, key };
  }

  for (let i = pieces; i < arr.length; i++) {
    let [cmd, ...args] = arr[i].split("|");

    switch (cmd) {
      case "Add":
        let [piece, composer, key] = args;
        if (collection[piece]) {
          console.log(`${piece} is already in the collection!`);
        } else {
          collection[piece] = { composer, key };
          console.log(
            `${piece} by ${composer} in ${key} added to the collection!`
          );
        }
        break;
      case "Remove":
        let removePiece = args[0];
        if (collection[removePiece]) {
          delete collection[removePiece];
          console.log(`Successfully removed ${removePiece}!`);
        } else {
          console.log(
            `Invalid operation! ${removePiece} does not exist in the collection.`
          );
        }
        break;
      case "ChangeKey":
        let [changePiece, newKey] = args;
        if (collection[changePiece]) {
          collection[changePiece].key = newKey;
          console.log(`Changed the key of ${changePiece} to ${newKey}!`);
        } else {
          console.log(
            `Invalid operation! ${changePiece} does not exist in the collection.`
          );
        }
        break;
      case "Stop":
        for (let piece in collection) {
          console.log(
            `${piece} -> Composer: ${collection[piece].composer}, Key: ${collection[piece].key}`
          );
        }
        break;
    }
  }
}

thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);

thePianist([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);
