function modernTimesOfHashTag(text) {
  text
    .split(" ")
    .reduce((acc, val) => {
      if (val.startsWith("#") && /^[a-zA-Z]+$/.test(val.slice(1)))
        acc.push(val.slice(1));

      return acc;
    }, [])
    .forEach((w) => console.log(w));
}

modernTimesOfHashTag(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);

modernTimesOfHashTag(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
