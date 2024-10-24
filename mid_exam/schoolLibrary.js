function schoolLibrary([booksStr, ...cmds]) {
  let books = booksStr.split("&");

  for (const cmd of cmds) {
    if (cmd === "Done") break;

    let [op, ...args] = cmd.split(" | ");

    switch (op) {
      case "Add Book":
        if (!books.includes(args[0])) books.unshift(args[0]);

        break;
      case "Take Book":
        if (books.includes(args[0])) books.splice(books.indexOf(args[0]), 1);

        break;
      case "Swap Books":
        if (books.includes(args[0]) && books.includes(args[1])) {
          const ind1 = books.indexOf(args[0]);
          const ind2 = books.indexOf(args[1]);
          [books[ind1], books[ind2]] = [books[ind2], books[ind1]];
        }

        break;
      case "Insert Book":
        if (!books.includes(args[0])) books.push(...args);

        break;
      case "Check Book":
        if (books[+args[0]]) console.log(books[+args[0]]);
    }
  }

  console.log(books.join(", "));
}

schoolLibrary([
  "Don Quixote&The Great Gatsby&Moby Dick",
  "Add Book | Ulysses",
  "Take Book | Don Quixote",
  "Insert Book | Alice's Adventures in Wonderland",
  "Done",
]);

schoolLibrary([
  "Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
  "Add Book | Catch-22",
  "Swap Books | Anna Karenina | Catch-22",
  "Take Book | David Copperfield",
  "Done",
]);

schoolLibrary([
  "War and Peace&Hamlet&Ulysses&Madame Bovary",
  "Check Book | 2",
  "Swap Books | Don Quixote | Ulysses",
  "Done",
]);
