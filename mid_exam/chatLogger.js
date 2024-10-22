function chatLogger(arr) {
  let chat = [];

  for (const cmd of arr) {
    if (cmd === "end") break;

    const [op, ...args] = cmd.split(" ");
    const isIncluded = chat.includes(args[0]);

    if (op === "Chat") chat.push(args[0]);
    else if (op === "Edit") {
      if (isIncluded) chat[chat.indexOf(args[0])] = args[1];
    } else if (op === "Delete") {
      if (isIncluded) {
        const index = chat.indexOf(args[0]);
        chat.splice(index, 1);
      }
    } else if (op === "Pin") {
      if (isIncluded) {
        const index = chat.indexOf(args[0]);
        chat.push(chat.splice(index, 1));
      }
    } else {
      chat.push(...args);
    }
  }

  console.log(chat.join("\n"));
}

chatLogger([
  "Chat Hello",
  "Chat darling",
  "Edit darling Darling",
  "Spam how are you",
  "Delete Darling",
  "end",
]);

chatLogger(["Chat Hello", "Delete John", "Pin Hi", "end"]);

chatLogger([
  "Chat John",
  "Spam Let's go to the zoo",
  "Edit zoo cinema",
  "Chat tonight",
  "Pin John",
  "end",
]);
