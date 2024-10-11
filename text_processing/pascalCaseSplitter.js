function pascalCaseSplitter(text) {
  console.log(
    text
      .split("")
      .map((c, i) => (c === c.toUpperCase() ? i > 0 ? `, ${c}` : c : c))
      .join("")
      .trim()
  );
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
pascalCaseSplitter("HoldTheDoor");
pascalCaseSplitter("ThisIsSoAnnoyingToDo");
