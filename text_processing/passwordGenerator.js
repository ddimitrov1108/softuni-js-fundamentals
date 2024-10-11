function passwordGenerator([text1, text2, key]) {
  const arr = [...text1.split(""), ...text2.split("")];
  const vowels = "aeiou";

  let count = 0;

  let hashedPassword = arr
    .map((c, i) => {
      if (!vowels.includes(c)) return c.toLowerCase();
      if (count === key.length) count = 0;

      return key[count++].toUpperCase();
    })
    .reverse()
    .join("");

  console.log(`Your generated password is ${hashedPassword}`);
}

passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
passwordGenerator([
  "areyousureaboutthisone",
  "notquitebutitrustyou",
  "disturbed",
]);
